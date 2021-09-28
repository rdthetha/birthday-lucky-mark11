const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const finalOutput = document.querySelector("#output");


function calculateSum(d) {

    const temp = d.replaceAll("-", 0);
    var a = Number(temp);
    var sum = 0;
    while (a) {
        sum += a % 10;
        a = Math.floor(a / 10);
    }
    return sum;

}
checkNumberButton.addEventListener("click", function BirthdayLucky() {

    const date = dateOfBirth.value;
    if (luckyNumber.value > 0) {
        const sum = calculateSum(date);
        if (sum % (luckyNumber.value) === 0)
            finalOutput.innerHTML = "Your Birthday is Lucky🎅";
        else
            finalOutput.innerHTML = "Your Birthday is not Lucky";
    } else {
        finalOutput.innerHTML = "Lucky Number should be greater than 0";
    }



})