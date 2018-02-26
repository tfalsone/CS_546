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
  res.json({
    "name": "Thomas Falsone",
    "cwid": "10398883",
    "biography": "Thomas was born in August of 1996 in Annapolis, MD. He is currently a senior at Stevens Institute of Technology, set to graduate with an undergraduate degree in Computer Engineering and a minor in Electrical Engineering, as well as a Masters degree in Computer Engineering. He will work as a Software Engineer for Harris Corporation upon graduation.\nThomas enjoys various activites, ranging from playing sports to playing video games to hanging out with his friends. Being from Maryland, he loves living by the water and engaging in various water activities such as swimming and sailing. Some of his proudest accomplishments in sports include winning the state championship baseball game for South River High School, as well as placing 8th in the state swimming championships and setting a new school record in his final high school meet.",
    "favoriteShows": ["Game of Thrones", "Bojack Horseman", "Westworld", "Atlanta", "Seinfeld", "Rick and Morty", "The Walking Dead"],
    "hobbies": ["Sports", "TV Shows", "Android", "Programming", "Video Games", "Friends"]
  });
});

module.exports = router;
