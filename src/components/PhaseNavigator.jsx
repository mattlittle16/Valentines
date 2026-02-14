import '../phase-navigator.css';
import { phases } from '../data/phases';

function PhaseNavigator({ currentPhase, onPhaseChange, totalPhases }) {
  const handlePrevious = () => {
    if (currentPhase > 0) {
      onPhaseChange(currentPhase - 1);
    }
  };

  const handleNext = () => {
    if (currentPhase < totalPhases - 1) {
      onPhaseChange(currentPhase + 1);
    }
  };

  const currentPhaseData = phases[currentPhase];

  return (
    <div className="phase-navigator">
      <div className="phase-controls">
        <button
          className="phase-btn phase-prev"
          onClick={handlePrevious}
          disabled={currentPhase === 0}
          aria-label="Previous phase"
        >
          ← Previous
        </button>

        <div className="phase-info">
          <span className="phase-counter">
            Phase {currentPhase + 1} of {totalPhases}
          </span>
          <span className="phase-name">
            {currentPhaseData.displayName}
          </span>
        </div>

        <button
          className="phase-btn phase-next"
          onClick={handleNext}
          disabled={currentPhase === totalPhases - 1}
          aria-label="Next phase"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default PhaseNavigator;
