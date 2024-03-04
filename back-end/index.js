const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const port = 9999;

const RegisterModel = require("./models/RegisterModel");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://seshasaikothapalli:seshasai1@cluster0.qeh3vot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await RegisterModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json("Email already exists");
    }
    // hashing the password

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new RegisterModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json("Account is created successfully");
  } catch (err) {
    res.status(500).json(err.message);
    console.log(err.message);
  }
});

app.get("/getAllRegisters", async (req, res) => {
  try {
    const allRegisters = await RegisterModel.find();
    return res.status(200).json(allRegisters);
  } catch (err) {
    res.status(500).json(err.message);
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
