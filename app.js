function calculateBMI() {
    const weight = Number(prompt("Enter your weight in kilograms:"));
    const height = Number(prompt("Enter your height in meters:"));

    const bmi = weight / (height * height);
    console.log(bmi);
}

calculateBMI();