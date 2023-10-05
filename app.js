const weight = Number(prompt("Enter your weight in kilograms:"));
const height = Number(prompt("Enter your height in meters:"));


function calculateBMI() {
    const bmi = weight / (height * height);
    console.log(bmi);
    return bmi;
    
}

function Fatty(){
    const bmi = calculateBMI();
    if(bmi < 18.5){
        console.log("Underweight");

    }
    else if(bmi > 24.9){
        console.log("Overweight");
    
    }
    else{
        console.log("Healthy");
    }
}
Fatty();