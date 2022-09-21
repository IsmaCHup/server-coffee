const { Router } = require("express");
const { drinksControllers } = require("../controllers/drinks.controllers");
const router = Router();

// GET /drinks – список всех напитков
router.get("/drinks", drinksControllers.getDrinks);
// GET /drinks/in-stock – список всех напитков, которые есть в наличии
router.get("/drinks/in-stock", drinksControllers.inStockDrinks);
// GET /drinks/:id – подробная информация о конкретном напитке
router.get("/drinks/:id", drinksControllers.getDrinksDetails);
// POST /drinks – добавление нового напитка
router.post("/drinks", drinksControllers.addNewDrinks);
// DELETE /drinks/:id – удаление конкретного напитка
router.delete("/drinks/:id", drinksControllers.deleteDrink);
// PATCH /drinks/:id – изменение конкретного напитка
router.patch("/drinks/:id", drinksControllers.updateDrink);

module.exports = router;






