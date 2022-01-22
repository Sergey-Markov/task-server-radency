const countStats = (notes) => {
  const stats = {
    task: 0,
    taskArch: 0,
    random: 0,
    randomArch: 0,
    idea: 0,
    ideaArch: 0,
  };
  notes.map((note) => {
    console.log(note.category);
    if (note.archived === false && note.category === "Idea") {
      stats.idea += 1;
    }
    if (note.archived === true && note.category === "Idea") {
      stats.ideaArch += 1;
    }

    if (note.archived === false && note.category === "Task") {
      stats.task += 1;
    }
    if (note.archived === true && note.category === "Task") {
      stats.taskArch += 1;
    }

    if (note.archived === false && note.category === "Random Tought") {
      stats.random += 1;
    }
    if (note.archived === true && note.category === "Random Tought") {
      stats.randomArch += 1;
    }
  });
  return stats;
};

module.exports = countStats;
