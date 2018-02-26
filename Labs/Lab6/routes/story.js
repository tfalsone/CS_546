const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  // Returns the following information:
  // {
  // "storyTitle": "Story Title",
  // "story": "Your story.\nSimply use line breaks for paragraphs.\nLike this."
  // }
});

module.exports = router;
