const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/drinks.route"));

mongoose
  .connect("mongodb+srv://Is:lam@cluster0.7eomugg.mongodb.net/drinks")
  .then(() => {
    app.listen(3000, () => {
      console.log("Сервер успешно запущен");
    });
  })
  .catch((e) => console.log(e.message));
