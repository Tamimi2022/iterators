// Old Style
// with while
const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}
// with For
const colors = ["yellow", "blue", "red", "orange"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// New style: array methods
const colors = ["yellow", "blue", "red", "orange"];
colors.forEach(element => console.log(element));

// Answer no.1 For loop 2 or 3 lines . While loop 5 lines
// Answer no.2 1 or 2 lines 
// Answer no.3 For loop easier , because all in one line 
// Answer no.4 No, 

/*
const myColors = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
};

for (let property in myColors) {
    console.log(myColors[property]);
}

// Yes, you're iterating now. But you're iterating over the *properties* of an
// object, not directly over the object.
// Only arrays have array methods.
*/