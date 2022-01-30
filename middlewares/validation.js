const validation = (req, res, next) => {
  if (req.body.title === undefined || req.body.description === undefined) {
    return  res
      .status(400)
      .json({ success: false, msg: "fill in all the blanks correctly" });
  } else {
    const { title, description } = req.body;

    if (title.length < 6 || title.length > 12) {
      return res.status(400).json({
        success: false,
        msg: "length of the title must be between 6 to 12",
      });
    }
    if (description.length < 10) {
      return res.status(400).json({
        success: false,
        msg: "length of the description must be greater than or equal to 10",
      });
    }
    if (
      typeof title !== typeof "hello" ||
      typeof description !== typeof "hello"
    ) {
      return res
        .status(400)
        .json({
          success: false,
          msg: "title or description must be written in string",
        });
    }
    next();
  }
};

module.exports = validation;
