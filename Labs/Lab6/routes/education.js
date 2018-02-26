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
  res.json([{
    "schoolName": "Stevens Institute of Technology",
    "degree": "Computer Engineering",
    "favoriteClass": "Data Structures and Algorithms",
    "favoriteMemory": "Going out with friends for my 21st birthday"
  },
  {
    "schoolName": "South River High School",
    "degree": "STEM",
    "favoriteClass": "Pre Engineering",
    "favoriteMemory": "Winning the state championship baseball game"
  },
  {
    "schoolName": "Central Middle School",
    "degree": "None",
    "favoriteClass": "Gym class",
    "favoriteMemory": "Graduating"
  }]);

});

module.exports = router;
