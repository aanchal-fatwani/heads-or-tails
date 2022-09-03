module.exports = function heads_or_tails() {
  return Math.floor(Math.random() * 2) == 0 ? "heads" : "tails";
};
