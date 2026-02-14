import { useState, useEffect } from 'react';
import PhaseNavigator from './components/PhaseNavigator';
import ClueView from './components/ClueView';
import PlaneAnimation from './components/PlaneAnimation';
import { phases } from './data/phases';
import { clues } from './data/clues';
import { getCurrentClue, setCurrentClue, resetProgress } from './utils/storage';
import './App.css';

function App() {
  const [currentPhaseId, setCurrentPhaseId] = useState(0); // Always start at first phase
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'clue'
  const [currentClueId, setCurrentClueId] = useState(0);

  const currentPhase = phases[currentPhaseId];

  useEffect(() => {
    // Apply dynamic styles based on current phase (for home page only)
    if (currentPhase.planetColors) {
      const style = document.getElementById('dynamic-phase-styles') || document.createElement('style');
      style.id = 'dynamic-phase-styles';
      style.innerHTML = `
        .planetrail3 {
          background: ${currentPhase.planetColors.trail3};
        }
        .planetrail2 {
          background: ${currentPhase.planetColors.trail2};
        }
        .Countdown {
          top: ${currentPhase.countdownTop};
        }
      `;
      document.head.appendChild(style);
    }
  }, [currentPhase]);

  const handleBegin = () => {
    setCurrentView('clue');
    setCurrentClueId(1);
    setCurrentClue(1);
  };

  const handleNextClue = () => {
    if (currentClueId < clues.length) {
      const nextClue = currentClueId + 1;
      setCurrentClueId(nextClue);
      setCurrentClue(nextClue);
    }
  };

  const handlePreviousClue = () => {
    if (currentClueId > 1) {
      const prevClue = currentClueId - 1;
      setCurrentClueId(prevClue);
      setCurrentClue(prevClue);
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all progress?')) {
      resetProgress();
      setCurrentClueId(0);
      setCurrentView('home');
    }
  };

  const renderHomeView = () => {
    return (
      <>
        <div className="Countdown">
          <div className="CountdownClock">
            <div style={{
              color: '#ecf0f1',
              fontFamily: "'Courgette', cursive",
              fontSize: '24pt',
              textAlign: 'center',
              padding: '20px'
            }}>
              <h2 style={{ marginBottom: '20px' }}>Matt and Brittney</h2>
              <p style={{ fontSize: '16pt' }}>Valentine's Day 2015 Memorial</p>
            </div>
          </div>
          <div className="Start">
            <button
              onClick={handleBegin}
              className="btn btn-primary StartButton"
            >
              Begin!
            </button>
          </div>
        </div>
        <div className="Map"></div>
        <div className="JJ"></div>
      </>
    );
  };

  const renderClueView = () => {
    const clue = clues[currentClueId - 1];
    return (
      <ClueView
        clue={clue}
        onNext={handleNextClue}
        onPrevious={handlePreviousClue}
        hasPrevious={currentClueId > 1}
      />
    );
  };

  // Get current clue background class if in clue view
  const currentClue = currentView === 'clue' && currentClueId > 0 ? clues[currentClueId - 1] : null;

  return (
    <div className="App">
      {/* Render appropriate background based on view */}
      {currentView === 'home' && <div className={currentPhase.containerClass}></div>}
      {currentView === 'clue' && currentClue && <div className={currentClue.backgroundClass}></div>}

      {/* Plane animation always visible */}
      <PlaneAnimation planeImage={currentPhase.planeImage} />

      {/* Phase navigator only visible on home page */}
      {currentView === 'home' && (
        <PhaseNavigator
          currentPhase={currentPhaseId}
          onPhaseChange={setCurrentPhaseId}
          totalPhases={phases.length}
        />
      )}

      {currentView === 'home' && renderHomeView()}
      {currentView === 'clue' && renderClueView()}

      <div className="app-controls">
        {currentView === 'clue' && (
          <button onClick={handleBackToHome} className="btn btn-secondary">
            ← Back to Home
          </button>
        )}
        <button onClick={handleResetProgress} className="btn btn-warning">
          Reset Progress
        </button>
      </div>
    </div>
  );
}

export default App;
