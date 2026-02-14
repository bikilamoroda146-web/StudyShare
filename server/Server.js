       const express = require("express");
       const cors = require("cors");
       require("dotenv").config();

       const app = express();

       // Middleware
       app.use(cors());
       app.use(express.json());

       // Routes
       const authRoutes = require("./Routes/Auth");
       app.use("/api/auth", authRoutes);

       app.listen(5000, () => {
           console.log("Server running on port 5000");
       });