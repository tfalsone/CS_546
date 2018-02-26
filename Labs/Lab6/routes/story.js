const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  // Returns the following information:
  // {
  // "storyTitle": "Story Title",
  // "story": "Your story.\nSimply use line breaks for paragraphs.\nLike this."
  // }
  res.json({
    "storyTitle": "Family Vacation",
    "story": "My mother's side of the family owns two houses on Manitoulin Island in Ontario, Canada. Every year my family makes a road trip up from Maryland, around a 12 hour drive and a 2 hour ferry ride to spend two weeks on the island. Up in our cabin, we have no internet or cable connection, so all of my interaction is with my family. We live right on the water, so we like to go swimming and sailing and fishing. When I need some alone time and want to get away from my family I enjoy going out on long bike rides around the island, or grabbing one of our small sailboats and going out into the lake and relaxing in the boat.\nIt has been a few years now since I have been able to go up to the island, since I have been in summer classes the last two years, but I can't wait to make the trip up again. I will always remember building bonfires and cooking hamburgers over the fire with my grandfather, or learning to windsurf with my dad, or playing volleyball in the front yard with my brothers. Two weeks can be a long time to be cut off from the outside world and only interacting with family, and sometimes it's hard to get through it all, but I love going up to our little cabin and getting a break from my usual setting"
  })
});

module.exports = router;
