let exportedMethods = {
    checkForPalindrome(text) {
        if (typeof text != "string") {
            throw "Please enter valid text"
        }

        text = text.toLowerCase().replace(/[^a-z0-9]/gi, '');
        const reversed = text.split("").reverse().join("");

        if (text == "") { throw "Please enter valid text"; }
        if (text == reversed) { return true; }
        else { return false; }
    }
}

module.exports = exportedMethods;