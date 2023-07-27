import express from "express";
import  Book_Model from "../model/bookDB.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// import auth from "../middleware/auth.js";

const router = express.Router();

// auth create books
router.post("/create", async (req, res) => {
  const { Name, Author, Price, Page, Image_url } = req.body;

  try {
    await Book_Model.create({ Name, Author, Price, Page, Image_url}).then(
        (book) => {
          res.status(201).json({ message: "User successfully created", book });
        }
      );
    
  } catch (err) {
    res.status(400).json({
      message: "User not successfully created",
      error: err.message,
    });
  }
});




// get all book
router.get("/getAllBook", async (req, res) => {
  try {
    const data = await Book_Model.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});



// update book by id
router.patch("/updateBook/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const options = { new: true };

    const data = await Book_Model.findByIdAndUpdate(id, updateData, options);
    res.json(data);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// delete book by ID
router.delete("/deleteBook/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Book_Model.findByIdAndDelete(id);
    res.status(201).json({ message: "User successfully deleted", data });
    
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "An error occurred",
      error: err.message,
    });
  }
});




export default router;