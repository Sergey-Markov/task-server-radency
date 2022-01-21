const createNewDate = () => {
  const dateOfCreateMonth = new Date()
    .toDateString()
    .split(" ")
    .splice(1, 2)
    .join(" ");
  const dateOfCreateYear = new Date()
    .toDateString()
    .split(" ")
    .splice(3, 3)
    .join(" ");
  return `${dateOfCreateMonth}, ${dateOfCreateYear}`;
};

module.exports = createNewDate;
