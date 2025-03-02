document.getElementById("submitBtn").addEventListener("click", calculate);

function calculate(event){
    event.preventDefault();
    let today = new Date();
    let dobInput = document.getElementById("dob").value;
    let dob = new Date(dobInput);

    let birthYear = dob.getFullYear();
    let birthMonth = dob.getMonth();
    let birthDay = dob.getDate();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();

    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    if(months<0 || (months===0 && days<0)){
        years--; 
        months += 12; 
    }
    if(days<0){
        months--; 
        let lastMonth = new Date(currentYear, currentMonth, 0).getDate();
        days += lastMonth; 
    }

    let resultElement = document.getElementById("result");
    document.getElementById("result").innerText = "Your age is " + years + " years, " + months + " months, and " + days + " days.";
    
    resultElement.style.display = "block";
    setTimeout(() => {
        resultElement.classList.add("show");
    }, 10);
}