


// Define an object representing a rectangle
const rectangle = {
    type: "rectangle",
    width: 5,
    height: 10,
    area: function() {
        return (this.width * this.height).toFixed(2);
    },

    getWidth() {
        return this.width;
    },

    getHeight() {
        return this.height;
    },

    setWidth(value) {
        this.width = value;
    },

    setHeight(value) {
        this.height = value;
    }
};

// Define an object representing a circle
const circle = {
    type: "circle",
    radius: 7,
    area: function() {
        return (Math.PI * this.radius * this.radius).toFixed(2);
    },

    getRadius() {
        return this.radius;
    },

    setRadius(value) {
        this.radius = value;
    }
};

console.log("Input data for Rectangle")

// prompt width and height (e.g., const w = prompt("Enter width:""))
console.log("Set values >");
const rw = prompt("Enter width for rectangle:")
console.log("you entered " + rw + " for the width");
rectangle.setWidth(rw);

const rl = prompt("Enter height for rectangle:")
console.log("you entered " + rl + " for the height");
rectangle.setHeight(rl);

// get the values
console.log("Get values >");
console.log(rectangle.width + " " + rectangle.height)


console.log("Show output >");
// Show the next message in console:
// “The area of square with Width 4 and Height 5 is 20”

console.log(`The area of rectangle with Width ${rectangle.getWidth()} and Height ${rectangle.getHeight()} is ${rectangle.area()}`)




console.log("Input data for Circle")

// prompt width and height (e.g., const w = prompt("Enter width:""))
console.log("Set values >");
const cr = prompt("Enter radius for the circle:")
console.log("you entered " + cr + " for the radius");
circle.setRadius(cr);

// get the values
console.log("Get values >");
console.log(circle.radius)


console.log("Show output >");
// Show the next message in console:
// “The area of square with Width 4 and Height 5 is 20”

console.log(`The area of circle with Radius ${circle.getRadius()} is ${circle.area()}`);
