// localStorage utilities for managing clue progression

const STORAGE_KEY = 'vday2015_memorial';

export const getProgress = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { unlockedClues: [], currentClue: 0 };
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return { unlockedClues: [], currentClue: 0 };
  }
};

export const saveProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const unlockClue = (clueId) => {
  const progress = getProgress();
  if (!progress.unlockedClues.includes(clueId)) {
    progress.unlockedClues.push(clueId);
    progress.currentClue = clueId;
    saveProgress(progress);
  }
  return progress;
};

export const isClueUnlocked = (clueId) => {
  const progress = getProgress();
  return progress.unlockedClues.includes(clueId);
};

export const resetProgress = () => {
  saveProgress({ unlockedClues: [], currentClue: 0 });
};

export const getCurrentClue = () => {
  const progress = getProgress();
  return progress.currentClue || 0;
};

export const setCurrentClue = (clueId) => {
  const progress = getProgress();
  progress.currentClue = clueId;
  saveProgress(progress);
};
