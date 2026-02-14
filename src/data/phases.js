// Phase data extracted from the original Index.cshtml
// Each phase represents a different day leading up to Valentine's Day 2015

export const phases = [
  {
    id: 0,
    date: '2015-02-06',
    displayName: 'Feb 6 - Two Days Before',
    containerClass: 'CContainer1',
    backgroundImage: 'bg.jpg',
    planeImage: 'plane-up.png',
    countdownTop: '50%',
    planetColors: {
      trail3: '#2c3e50',
      trail2: '#c0392b'
    }
  },
  {
    id: 1,
    date: '2015-02-07',
    displayName: 'Feb 7 - One Week Before',
    containerClass: 'CContainer2',
    backgroundImage: 'clue1bg.jpg',
    planeImage: 'plane-up.png',
    countdownTop: '50%',
    planetColors: null
  },
  {
    id: 2,
    date: '2015-02-08',
    displayName: 'Feb 8',
    containerClass: 'CContainer3',
    backgroundImage: 'bg2.jpg',
    planeImage: 'plane-up.png',
    countdownTop: '50%',
    planetColors: {
      trail3: '#8e44ad',
      trail2: '#e67e22'
    }
  },
  {
    id: 3,
    date: '2015-02-09',
    displayName: 'Feb 9',
    containerClass: 'CContainer4',
    backgroundImage: 'beaglebg.jpg',
    planeImage: 'plane-up.png',
    countdownTop: '50%',
    planetColors: {
      trail3: '#2c3e50',
      trail2: '#c0392b'
    }
  },
  {
    id: 4,
    date: '2015-02-10',
    displayName: 'Feb 10',
    containerClass: 'CContainer5',
    backgroundImage: 'flyersbg.jpg',
    planeImage: 'plane-up.png',
    countdownTop: '50%',
    planetColors: {
      trail3: '#2c3e50',
      trail2: '#d35400'
    },
    hasModal: true,
    modalGif: 'http://www.reactiongifs.com/wp-content/uploads/2013/11/adventure.gif'
  },
  {
    id: 5,
    date: '2015-02-11',
    displayName: 'Feb 11',
    containerClass: 'CContainer6',
    backgroundImage: 'wasailingbg.jpg',
    planeImage: 'plane-up.png',
    countdownTop: '50%',
    planetColors: {
      trail3: '#bdc3c7',
      trail2: '#7f8c8d'
    },
    hasModal: true,
    modalGif: 'http://i.imgur.com/kGOIKVl.gif'
  },
  {
    id: 6,
    date: '2015-02-12',
    displayName: 'Feb 12',
    containerClass: 'CContainer7',
    backgroundImage: 'carbg.jpg',
    planeImage: 'plane-up.png',
    countdownTop: '50%',
    planetColors: {
      trail3: '#27ae60',
      trail2: '#e74c3c'
    },
    hasModal: true,
    modalGif: 'http://i.imgur.com/e9ETgR9.gif'
  },
  {
    id: 7,
    date: '2015-02-13',
    displayName: 'Feb 13 - Day Before',
    containerClass: 'CContainer8',
    backgroundImage: 'jaxbg.jpg',
    planeImage: 'plane-up.png',
    countdownTop: '15%',
    planetColors: {
      trail3: '#9b59b6',
      trail2: '#e74c3c'
    },
    hasModal: true,
    modalVideo: 'https://www.youtube.com/embed/mhujM7T1_fQ'
  },
  {
    id: 8,
    date: '2015-02-14',
    displayName: "Feb 14 - Valentine's Day",
    containerClass: 'CContainer9',
    backgroundImage: 'usbg.jpg',
    planeImage: 'plane-up.png',
    countdownTop: '15%',
    planetColors: {
      trail3: '#9b59b6',
      trail2: '#27ae60'
    },
    hasModal: true,
    modalVideo: 'https://www.youtube.com/embed/QgOaz1hhCRQ'
  }
];

// Helper function to get phase by date
export const getPhaseByDate = (date) => {
  const dateStr = date.toISOString().split('T')[0];
  return phases.find(p => p.date === dateStr) || phases[phases.length - 1];
};

// Helper function to get current phase based on today's date
export const getCurrentPhase = () => {
  const today = new Date();
  const month = today.getMonth() + 1; // 0-indexed
  const day = today.getDate();

  // If it's February 6-14, map to the corresponding phase
  if (month === 2 && day >= 6 && day <= 14) {
    return phases[day - 6];
  }

  // Default to Valentine's Day phase
  return phases[8];
};
