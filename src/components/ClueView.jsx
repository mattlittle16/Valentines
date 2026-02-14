import { useState, useEffect } from 'react';
import { unlockClue, isClueUnlocked } from '../utils/storage';

function ClueView({ clue, onNext, onPrevious, hasPrevious }) {
  const [answer, setAnswer] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    setIsUnlocked(isClueUnlocked(clue.id));
    setShowSuccess(false);
    setShowError(false);
    setAnswer('');
  }, [clue.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAnswer = answer.trim().toLowerCase();
    const correctAnswer = clue.answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      setShowError(false);
      setShowSuccess(true);
      unlockClue(clue.id);
      setIsUnlocked(true);
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
  };

  const handleAutoFill = () => {
    setAnswer(clue.answer);
    setShowError(false);
    setShowSuccess(true);
    unlockClue(clue.id);
    setIsUnlocked(true);
  };

  return (
    <>
      <div className="container">
        {!showSuccess && (
          <div className="ClueContainer">
            <div className="row">
              <div className="col-md-12">
                <h3 className="ClueText">{clue.clueText}</h3>
                <div className="MarginTop20">
                  <form className="ClueForm" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="answer"
                      className="Answer form-control"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      autoFocus
                    />
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                      <input
                        type="submit"
                        className="btn btn-success"
                        value="Submit Answer"
                        style={{ flex: 1 }}
                      />
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={handleAutoFill}
                        style={{ flex: 1 }}
                      >
                        Skip & Show Answer
                      </button>
                    </div>
                  </form>
                  {showError && (
                    <h4 className="NopeText" style={{ display: 'block' }}>
                      Sorry, try again!
                    </h4>
                  )}
                </div>
                <hr />
                {hasPrevious && (
                  <a
                    href="#"
                    className="MarginTop20 InlineBlock BackForward"
                    onClick={(e) => {
                      e.preventDefault();
                      onPrevious();
                    }}
                  >
                    ← Go Back
                  </a>
                )}
                {isUnlocked && !clue.isFinal && (
                  <a
                    href="#"
                    className="MarginTop20 InlineBlock MarginLeft20 BackForward"
                    onClick={(e) => {
                      e.preventDefault();
                      onNext();
                    }}
                  >
                    Next Clue →
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {showSuccess && (
          <div className="NextClue" style={{ display: 'block' }}>
            <div className="row">
              <div className="col-md-12">
                <h4 className="SuccessText">Correct!</h4>
                <div style={{
                  color: '#ecf0f1',
                  fontSize: '18pt',
                  fontFamily: "'Courgette', cursive",
                  marginBottom: '15px',
                  textShadow: '2px 2px 4px #000000'
                }}>
                  Answer: {clue.answer}
                </div>
                {!clue.isFinal ? (
                  <a
                    href="#"
                    className="MarginTop20 MakeBlock"
                    onClick={(e) => {
                      e.preventDefault();
                      onNext();
                    }}
                  >
                    <span className="Check" style={{ fontSize: '45pt' }}>✓</span>
                    <p>tap for next clue</p>
                  </a>
                ) : (
                  <a href="#" className="MarginTop20 MakeBlock">
                    <span className="Check" style={{ fontSize: '45pt' }}>👍</span>
                    <p>You Win!!!!</p>
                  </a>
                )}
                <hr />
                {hasPrevious && (
                  <a
                    href="#"
                    className="MarginTop20 MakeBlock BackForward"
                    onClick={(e) => {
                      e.preventDefault();
                      onPrevious();
                    }}
                  >
                    ← Go Back
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ClueView;
