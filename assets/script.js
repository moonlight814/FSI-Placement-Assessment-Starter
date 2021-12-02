// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Natalia Argumedo" // HINT: Replace this with your own name!



// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`



// gingerbread cookie code

let quantityG = 0;
// plus button
document.getElementById('add-gb').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!')
    quantityG += 1;
    document.getElementById('qty-gb').textContent = quantityG;
    document.getElementById('qty-total').textContent = quantityS + quantityG + quantityC;


})


//minus button
document.getElementById('minus-gb').addEventListener('click', function() {
    if (quantityG > 0) {
        console.log('Gingerbread - button was clicked!')
        quantityG -= 1;
        document.getElementById('qty-gb').textContent = quantityG;
        document.getElementById('qty-total').textContent = quantityS + quantityG + quantityC;

    }
})


//choc chip cookie buttons


let quantityC = 0;

//plus button
document.getElementById('add-cc').addEventListener('click', function() {
    console.log('Choc chip + button was clicked!')
    quantityC += 1;
    document.getElementById('qty-cc').textContent = quantityC;
    document.getElementById('qty-total').textContent = quantityS + quantityG + quantityC;



})

//minus button
document.getElementById('minus-cc').addEventListener('click', function() {
    if (quantityC > 0) {
        console.log('Chocolate chip - button was clicked!')
        quantityC -= 1;
        document.getElementById('qty-cc').textContent = quantityC;
        document.getElementById('qty-total').textContent = quantityS + quantityG + quantityC;

    }

})



//sugar sprinkle button
let quantityS = 0;

//plus button
document.getElementById('add-sugar').addEventListener('click', function() {
    console.log('sugar cookie + button was clicked!')
    quantityS += 1;
    document.getElementById('qty-sugar').textContent = quantityS;
    document.getElementById('qty-total').textContent = quantityS + quantityG + quantityC;
})



//minus button
document.getElementById('minus-sugar').addEventListener('click', function() {
    if (quantityS > 0) {
        console.log('sugar cookie - button was clicked!')
        quantityS -= 1;
        document.getElementById('qty-sugar').textContent = quantityS;
        document.getElementById('qty-total').textContent = quantityS + quantityG + quantityC;
    }

})