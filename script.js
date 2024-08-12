console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let button = document.querySelector("#helloButton")
console.log(button)

// Select the empty p tag under that button
let tag = document.querySelector("#helloText")
console.log(tag)

// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"
button.addEventListener("click", function(event){
 tag.textContent = "Hello" 
})


// Task 2: All caps button flow
// Select the 'Click me for all caps' button
let caps = document.querySelector("#capsButton")
console.log(caps)

// Select the p tag under that button (says there's no need to shout)
let tags = document.querySelector("#capsText")
console.log(tags)


// Add an event listener to the caps button such that when it's clicked, the p tag text is "THERE'S NO NEED TO SHOUT"
caps.addEventListener("click", function(event){
 tags.textContent = "THERE'S NO NEED TO SHOUT"
})

// Task 3: Dog image flow
// Select the dog image
let dog = document.querySelector(".dogImage")
console.log(dog)

// Add an event listener to the dog image such that when the mouse is over it, the image src becomes happy-dog.jpeg
dog.addEventListener("mouseover", function(event){
 dog.src = "happy-dog.jpeg"
})

// Add an event listener to the dog image such that when the mouse is off it, the image src becomes sad-dog.jpeg
dog.addEventListener("mouseout", function(event){
 dog.src = "sad-dog.jpeg"
})

// Task 4: Name input flow
// Select the submit button
let 

// Select the input 


// Select the empty p tag under them


// Add an event listener to the submit button such that when it is clicked, the p tag text is "Nice to meet you " + input.value




