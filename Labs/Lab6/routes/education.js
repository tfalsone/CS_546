const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  // Returns the following information:
  //   [
  //     {
  //       "schoolName": "First School Name",
  //       "degree": "First School Degree",
  //       "favoriteClass": "Favorite class in school",
  //       "favoriteMemory": "A memorable memory from your time in that school"
  //     }
  //  ]
  // Need 3 schools
});

module.exports = router;
