const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: ["https://book-shelf-back-end.vercel.app","https://book-shelf-login-back-end.vercel.app"],
  methods: ["POST","GET","DELETE","PUT","PATCH"]
  credentials: true,
}));

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://admin:knywpVTYMT9t9c2h@cluster0.kccg0e0.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
