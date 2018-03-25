const express = require("express");
const router = express.Router();
const data = require("../data");
const resultData = data.result;

router.post("/", (req, res) => {
    var text = req.body["text-to-test"];

    if (!text) {
        res.status(400).send('<p class = "error">You must enter text to test before continuing<p><a href="/">Back</a>');
    }

    const isPal = resultData.checkForPalindrome(text);
    if (isPal) {
        text = "Congratulations! '" + text + "' is a palindrome";
    } else {
        text = "Sorry, '" + text + "' is not a palindrome";
    }
    res.render("result", {
        title: "Palindrome Results",
        isPal: isPal,
        result: text
    });
});

module.exports = router;