const mongoose = require("mongoose");
const drinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  reserve: Boolean,
  coffein: Boolean,
  sizeDrink: String,
  detailsOfDrinks: {
    milk: Boolean,
    sugarSpoon: Number,
    urbech: Boolean,
  },
});

const Drink = mongoose.model("Drink", drinkSchema);
module.exports = Drink;
