
function calculateBMR(weight, height, age, gender, callback) {
    let bmr;
    
    
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    }

    else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    
    callback(bmr);
}


function displayBMR(bmr) {
    console.log(`Your BMR is: ${bmr.toFixed(2)} calories/day`);
}


let weight = 70;  
let height = 175; 
let age = 30;     
let gender = 'male';

calculateBMR(weight, height, age, gender, displayBMR);
