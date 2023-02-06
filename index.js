var addDays = require("date-fns/addDays");

var getmonthyear = (days) => {
  var res = addDays(new Date(2020, 7, 22), days);
  return `${res.getDate()}-${res.getMonth() + 1}-${res.getFullYear()}`;
};

module.exports = getmonthyear;
