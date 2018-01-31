function checkIsObject(obj, objName) {
    if (typeof obj != "object") {
        throw `${objName || "provided variable"} is not an object`;
    }
}

function checkExists(obj, objName) {
    if (obj == undefined) {
        throw `${objName || "provided variable"} is not provided`;
    }
}

module.exports = {
    description: "Utilites functions for Lab 2",

    deepEquality: (obj1, obj2) => {
        checkExists(obj1, "obj1");
        checkExists(obj2, "obj2");
        checkIsObject(obj1, "obj1");
        checkIsObject(obj2, "obj2");

        return JSON.stringify(obj1) == JSON.stringify(obj2);
    },

    uniqueElements: (arr) => {
        checkExists(arr, "arr");
        if (!(arr instanceof Array)) {
            throw `arr is not an array`;
        }

        return new Set(arr).size;
    },

    countOfEachCharacterInString: (str) => {
        checkExists(str, "str");
        if (typeof str != "string") {
            throw 'str is not a string';
        }
    
        var counts = {};
        var ch, index, len, count;
        len = str.length;

        for (index = 0; index < len; index++) {
            ch = str.charAt(index);
            count = counts[ch];
            counts[ch] = count ? count + 1 : 1;
        }
        return counts;
    }
}; 