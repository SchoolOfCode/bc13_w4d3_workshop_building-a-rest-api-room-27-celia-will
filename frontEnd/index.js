console.log("this works")

let h2 = document.querySelector('#h2')
 async function fetchQuote() {
    let response = await fetch ("/api/quotes")
    let data = await response.json()
    h2.textContent = data[2].quoteText
    console.log(data)

 }





//make html button
//put in variable in js 
//add event listener and call function 
//make async function that fetches quote 
//console.log data;
//display in a h2 element

let quoteButton = document.querySelector('#getQuote')
console.log(quoteButton)
quoteButton.addEventListener(`click`, fetchQuote)



