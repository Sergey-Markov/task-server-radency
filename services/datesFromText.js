const datesFromText = (str) => {
  if (str) {
    const res = str.match(/\d{2}([\/.-])\d{2}\1\d{4}/g);
    if (res) {
      return res.join(", ");
    }
    return "";
  }
  return;
};

module.exports = datesFromText;
