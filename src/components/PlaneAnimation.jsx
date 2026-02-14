import { useEffect, useRef } from 'react';

function PlaneAnimation({ planeImage }) {
  const planeRef = useRef(null);
  const startingPoint = useRef([0, 0]);
  const trailCounter = useRef(1);
  const animationTimeout = useRef(null);

  useEffect(() => {
    const makeNewPosition = () => {
      const h = window.innerHeight - 106;
      const w = window.innerWidth - 106;
      const nh = Math.floor(Math.random() * h);
      const nw = Math.floor(Math.random() * w);
      return [nw, nh];
    };

    const rotatePlane = (deg, transition) => {
      const plane = planeRef.current;
      if (!plane) return;

      if (transition) {
        plane.classList.add('PlaneTransition');
      } else {
        plane.classList.remove('PlaneTransition');
      }

      plane.style.transform = `rotate(${deg}deg)`;
    };

    const animateDiv = () => {
      const plane = planeRef.current;
      if (!plane) return;

      const newPoint = makeNewPosition();
      const hPlane = startingPoint.current[1];
      const newX = startingPoint.current[0] + (newPoint[0] - startingPoint.current[0]);
      const hPoint = [newX, hPlane];

      const length = newPoint[0] - startingPoint.current[0];
      const height = newPoint[1] - hPoint[1];

      const aLength = Math.abs(length);
      const aHeight = Math.abs(height);
      const hypotenuse = Math.sqrt((aLength * aLength) + (aHeight * aHeight));

      let angle = 0;
      if (length > 0) {
        angle = Math.acos(((Math.abs(length) * Math.abs(length)) + (hypotenuse * hypotenuse) - (Math.abs(height) * Math.abs(height))) / (2 * Math.abs(length) * hypotenuse));
        angle = angle * (180 / Math.PI);
        if (height < 0) {
          angle = 85 - angle;
        } else {
          angle = angle + 90;
        }
      } else {
        angle = Math.acos(((Math.abs(length) * Math.abs(length)) + (hypotenuse * hypotenuse) - (Math.abs(height) * Math.abs(height))) / (2 * Math.abs(length) * hypotenuse));
        angle = angle * (180 / Math.PI);
        if (height < 0) {
          angle = 270 + angle;
        } else {
          angle = 270 - angle;
        }
      }

      rotatePlane(angle, true);

      animationTimeout.current = setTimeout(() => {
        startingPoint.current = [newPoint[0], newPoint[1]];
        rotatePlane(angle, false);

        const speed = window.innerWidth < 650 ? 2500 : 4500;

        // Animate plane position
        plane.style.transition = `top ${speed}ms linear, left ${speed}ms linear`;
        plane.style.top = `${newPoint[1]}px`;
        plane.style.left = `${newPoint[0]}px`;

        setTimeout(() => {
          // Add trail
          if (trailCounter.current === 2) {
            const trail3 = document.querySelector('.planetrail3');
            if (trail3) trail3.remove();
          }
          if (trailCounter.current === 3) {
            const trail2 = document.querySelector('.planetrail2');
            if (trail2) trail2.remove();
            trailCounter.current = 1;
          }
          trailCounter.current++;

          const trail = document.createElement('div');
          trail.className = `planetrail planetrail${trailCounter.current}`;
          trail.style.top = `${startingPoint.current[1]}px`;
          trail.style.left = `${startingPoint.current[0]}px`;
          document.body.appendChild(trail);

          animateDiv();
        }, speed);
      }, 1000);
    };

    // Start animation after component mounts
    const initialTimeout = setTimeout(() => {
      animateDiv();
    }, 500);

    // Cleanup
    return () => {
      if (initialTimeout) clearTimeout(initialTimeout);
      if (animationTimeout.current) clearTimeout(animationTimeout.current);
      // Remove all trails
      document.querySelectorAll('.planetrail').forEach(el => el.remove());
      document.querySelectorAll('.planetrail2').forEach(el => el.remove());
      document.querySelectorAll('.planetrail3').forEach(el => el.remove());
    };
  }, [planeImage]);

  return (
    <img
      ref={planeRef}
      src={`/images/${planeImage}`}
      className="Plane"
      alt=""
      style={{ top: 0, left: 0 }}
    />
  );
}

export default PlaneAnimation;
