const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes =
  require(
    "./routes/productRoutes"
  );
const connectDB =
  require("./config/db");

const authRoutes =
  require("./routes/authRoutes");
const orderRoutes =
require("./routes/orderRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());


// Home Route

app.get("/", (req, res) => {
  res.send(
    "Backend Running 🚀"
  );
});


// Auth Routes

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/products",
  productRoutes
);
app.use(
  "/api/orders",
  orderRoutes
);
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On ${PORT}`
  );
}); 