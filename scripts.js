console.log("JavaScript is working!");

let colors = ["orange", "blue", "green", "purple"]
let post ={
    title: "My Post",
    description: "My First post, awesome",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
}

let posts = [{
    title: "First post",
    likeCount: 12
},{
    title: "Second post",
    likeCount: 222
}];

console.log(colors);
console.log(post);


let age = 18;

if (age >= 18) {
 console.log("you're an adult!");
} else {
    console.log("you're a kid!");
}

for (let i = 0; i < 10; i++) {
    console.log(i);  
}

console.log(colors);

// f(x) = x * x

let myFunction = x => {
    console.log(x)
;}

let greeter = name =>  {
   console.log(`Hello, ${name}`);
   if (name === "Adam"){
       console.log("he's an adult");
   }
}

greeter("Adam");
greeter("Peter");
greeter("Mate");
greeter("Reka");


// ["orange", "blue", "green", " yellow"]

colors.forEach(color => {
    console.log(color);
});


console.log("this is the end of our code")