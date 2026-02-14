// Clue data extracted from the original .cshtml files

export const clues = [
  {
    id: 1,
    clueText: "On a cold winter morning, bells will be jingling and people mingling while fish are singing.",
    answer: "centennial park",
    backgroundClass: "Clue1C",
    backgroundImage: "clue1bg.jpg"
  },
  {
    id: 2,
    clueText: "Hike down the steep hill for this stop's chilling views",
    answer: "roswell mill",
    backgroundClass: "Clue2C",
    backgroundImage: "clue2bg.jpg"
  },
  {
    id: 3,
    clueText: "On a sunny afternoon, Jax wanders the wilderness, Kodi runs around, and Gracie barks.",
    answer: "newtown park",
    backgroundClass: "Clue3C",
    backgroundImage: "clue3bg.jpg"
  },
  {
    id: 4,
    clueText: "People run amuck while pucks fly and ice trucks dry.",
    answer: "the cooler",
    backgroundClass: "Clue4C",
    backgroundImage: "clue4bg.png",
    hasSnow: true
  },
  {
    id: 5,
    clueText: "Challenging games against top competition are had at this electric place.",
    answer: "top golf",
    backgroundClass: "Clue5C",
    backgroundImage: "clue5bg.jpg",
    isFinal: true
  }
];

export const getClueById = (id) => {
  return clues.find(c => c.id === id);
};
