function checkIsProperNumber(val, variableName) {
    if (typeof val !== "number") {
      throw `${variableName || "provided variable"} is not a number`;
    }
  
    if (isNaN(val)) {
      throw `${variableName || "provided variable"} is NaN`;
    }

    if (val <= 0) {
        throw `${variableName || "provided variable"} must be greater than 0`;
    }
  }

function checkExists(obj, objName) {
    if (obj == undefined) {
        throw `${objName || "provided variable"} is not provided`;
    }
}  

module.exports = {
    description: "Geometry functions for Lab 2",

    volumeOfRectangularPrism: (length, width, height) => {
        checkExists(length, "length");
        checkExists(width, "width");
        checkExists(height, "height");
        checkIsProperNumber(length, "length");
        checkIsProperNumber(width, "width");
        checkIsProperNumber(height, "height");

        return length * width * height;
    },

    surfaceAreaOfRectangularPrism: (length, width, height) => {
        checkExists(length, "length");
        checkExists(width, "width");
        checkExists(height, "height");
        checkIsProperNumber(length, "length");
        checkIsProperNumber(width, "width");
        checkIsProperNumber(height, "height");

        return (2 * length * width) + (2 * length * height) + (2 * width * height);
    },

    volumeOfSphere: (radius) => {
        checkExists(radius, "radius");
        checkIsProperNumber(radius, "radius");

        return Math.PI * radius * radius;
    },

    surfaceAreaOfSphere: (radius) => {
        checkExists(radius, "radius");
        checkIsProperNumber(radius, "radius");

        return 4 * Math.PI * radius * radius;
    }
};