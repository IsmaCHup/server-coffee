const Drink = require("../models/Drink.models");

module.exports.drinksControllers = {
  // GET /drinks – список всех напитков
  getDrinks: async (req, res) => {
    try {
      const drinks = await Drink.find({}, { _id: 1, name: 1, price: 1 });
      res.json(drinks);
    } catch (e) {
      res.json({ error: "Ошибка при запросе всех напитков" });
    }
  },
  // GET /drinks/in-stock – список всех напитков, которые есть в наличии
  inStockDrinks: async (req, res) => {
    try {
      const drinks = await Drink.find(
        { reserve: true },
        { _id: 1, name: 1, price: 1 }
      );
      res.json(drinks);
    } catch (e) {
      res.json({
        error: "Ошибка при запросе всех напитков, которые есть в наличии",
      });
    }
  },
  // GET /drinks/:id – подробная информация о конкретном напитке
  getDrinksDetails: async (req, res) => {
    try {
      const drinkDetails = await Drink.findById(req.params.id);
      res.json(drinkDetails);
    } catch (e) {
      res.json({
        error: "Ошибка при запросе подробной информации о конкретном напитке",
      });
    }
  },
  // POST /drinks – добавление нового напитка
  addNewDrinks: async (req, res) => {
    const {
      name,
      price,
      reserve,
      coffein,
      sizeDrink,
      detailsOfDrinks: { milk, sugarSpoon, urbech },
    } = req.body;
    try {
      const newDrinks = await Drink.create({
        name,
        price,
        reserve,
        coffein,
        sizeDrink,
        detailsOfDrinks: {
          milk,
          sugarSpoon,
          urbech,
        },
      });
      res.json(newDrinks);
    } catch (e) {
      res.json({ error: "Ошибка при добавлении нового напитка" });
    }
  },
  // DELETE /drinks/:id – удаление конкретного напитка
  deleteDrink: async (req, res) => {
    try {
      const drink = await Drink.findByIdAndDelete(req.params.id);
      res.json(`${drink.name} напиток удален`);
    } catch (e) {
      res.json({ error: "Ошибка при удалении напитка" });
    }
  },
  // PATCH /drinks/:id – изменение конкретного напитка
  updateDrink: async (req, res) => {
    try {
      const drink = await Drink.findByIdAndUpdate(
        req.params.id,
        { price: req.body.price },
        { new: true }
      );
      await res.json(drink);
    } catch (e) {
      res.json({ error: "Ошибка при изменении напитка" });
    }
  },
};
