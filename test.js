console.log("This is a test page.")

let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
console.log(`Before: ${div}`)
div.append(p);
div.prepend(span);

console.log(`After: ${div}`)