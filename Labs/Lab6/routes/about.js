const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  // Returns the following information:
  //   {
  //   "name": "Your Name",
  //   "cwid": "Your CWID",
  //   "biography": "2 biography paragraphs separated by a new line character (\n).",
  //   "favoriteShows": ["array", "of", "favorite", "shows"],
  //   "hobbies": ["array", "of", "hobbies"]
  //    }
});

module.exports = router;
