const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const cors = require("cors");
app.use(cors());
dotenv.config();

mongoose.connect(process.env.Mongo_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useCreateIndex: true,
  })
 .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(
  cors()
);

  app.use(express.json());

app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);

app.use("/api/movies", movieRoute);

app.use("/api/lists", listRoute);

app.listen(8080, () => {
  console.log("Backend server is running!");
});
