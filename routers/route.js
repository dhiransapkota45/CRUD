const express = require("express");
const router = express.Router();
const validation = require("../middlewares/validation");
const userModel = require("../models/model");

//test
router.get("/", (req, res) => {
  res.send("Hello, app is working fine");
});


//Create
router.post("/create", validation, async (req, res) => {
  const user = await userModel.create(req.body);
  res
    .status(200)
    .json({ success: true, msg: "note has been created successfully", user });
});


//Read
router.get("/read", async (req, res) => {
  const data = await userModel.find();
  res.json({ success: true, msg: "read successful", data });
});


//Delete
router.delete("/delete/:id", async (req, res) => {
  const checkNote = await userModel.findOne({ _id: req.params.id });
  console.log(checkNote);
  if (!checkNote) {
    return res.status(400).json({ success: false, msg: "note doesnot exists" });
  }
  await userModel.deleteOne({ _id: req.params.id });
  return res
    .status(200)
    .json({ success: true, msg: "note has been deleted", checkNote });
});


//Update
router.put("/update/:id", validation, async (req, res) => {
  try {
    const { title, description } = req.body;
    const checkNote = await userModel.findOne({ _id: req.params.id });
    console.log(checkNote);
    if (!checkNote) {
      return res.status(400).json({ success: false, msg: "no note found" });
    }

    const updateNote = await userModel.findByIdAndUpdate(
      req.params.id,
      { $set: { title: title, description: description } },
      { new: true }
    );

    res
      .status(400)
      .json({ success: true, msg: "Note updated successfully", updateNote });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
