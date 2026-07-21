// // PHASE 1
// console.log("Favour is connected to javascript!");
// // my name
// console.log("Salami Favour");
// console.log("12");
// console.log("Hello");
// // This is my gender
// console.log("i am a girl");
// // This is my favorite sport to watch
// console.log("i like wrestling");

// // PHASE 2
// const country = "Nigeria";


// phase 3
// const number = 8;

// const remainder = number % 2;
// const isEven = remainder === 0;
// console.log(isEven);

// function sayWelcome() {
//     console.log("welcome to javascript");
// }
// sayWelcome();
// // phase 4- Number one - PASSED
// console.log("PHASE 4 TASKS");
// const score = 69;
// if (score >= 50) {
//     console.log("you passed.");
// } else {
//     console.log("you failed.");
// }

// // Number 2 - PASSED
// if (score >= 70) {
//     console.log("Grade A");
// } else if (score >= 60) {
//     console.log("Grade B");
// } else if (score >= 50) {
//     console.log("Grade C");
// } else if (score >= 45) {
//     console.log("Grade D");
// } else if (score >= 40) {
//     console.log("Grade E");
// } else {
//     console.log("Failed");
// }

// Number 3 - NEEDS Adjusting
// const age = 25;
// const canRegister = true;

// if (age > 18 || canRegister) { // Check if age is more than 18 
//     console.log("They can register");
// } else {
//     console.log("They can't register");
// }

// // number 4
// const userName = "Favour";
// if (userName) {
//     console.log("userName exists.");
// } else {
//     console.log("userName is missing");
// }

// // number 5 - Needs Adjustment
// const day = "Saturday";

// switch (day) { // Make the switch work for every day of the week by printing the day of the week
//     case "Monday":
//         console.log("start of the week");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Today is Wednesday");
//         break;
//     case "Thursday":
//         console.log("Today is Thursday");
//         break;
//     case "Friday":
//         console.log("Close to wekend");
//         break;
//     case "Saturday":
//         console.log("Weekend");
//         break;
//     case "Sunday":
//         console.log("Today is Sunday");
// }
// phase 5- number 1
// function greetStudent(name) {
//     console.log(`Hi ${name}`);
// }

// greetStudent("Faith");
// greetStudent("emmanuella");
// greetStudent("Ayokunle");


// function calculateTotal(price, quantity) {
//     const total = price * quantity;
//     console.log("total");
// }

// calculateTotal(10000, 20);
// calculateTotal(5500, 10);

// // number 3 - i don't understand
// function checkIfEven(number) {
//     if (number / 2) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// console.log(checkIfEven(6));
// console.log(checkIfEven(7));



// console.log("ellaAge");
// console.log("faithAge");
// function checkPassStudents(score) {
//     if (score >= 70) {
//         return "Passed";
//     } else {
//         return "Average";
//     }
// }
// console.log(checkPassStudents(80));
// console.log(checkPassStudents(60));



// function calculateAge(currentyear, birthyear) {

//     const ellaAge = calculateAge(2026, 2005);
//     const faithAge = calculateAge(2026, 2007);
//     return "currentyear - birthyear";

// }

// // workbook build tasks - number 1
// function isValidScore(score) {
//     return score >= 0 && score <= 100;
// }
// function calculateAverage(scoreOne, scoreTwo, scoreThree) {
//     const total = (scoreOne + scoreTwo + scoreThree) / 3;
//     return total.toFixed(2);

// }

// function getGrade(average) {
//     if (average >= 70) {
//         return "A";
//     } else if (average >= 60) {
//         return "B";
//     } else if (average >= 50) {
//         return "C";
//     } else if (average >= 45) {
//         return "D";
//     } else {
//         return "F";
//     }
// }

// function getResultStatus(average) {
//     if (average >= 70) {
//         return "Distinction";
//     } else if (average >= 45) {
//         return "Passed";
//     } else {
//         return "Failed";
//     }
// }
// // 4
// function generateStudentReport(
//     studentName,
//     scoreOne,
//     scoreTwo,
//     scoreThree
// ) {
//     const firstScoreIsValid = isValidScore(scoreOne);
//     const secondScoreIsValid = isValidScore(scoreTwo);
//     const thirdScoreIsValid = isValidScore(scoreThree);

//     const allScoresAreVAlid =
//         firstScoreIsValid &&
//         secondScoreIsValid &&
//         thirdScoreIsValid;

//     if (!allScoresAreVAlid) {
//         console.log("Invalid score entered.");
//         return;
//     }

//     const average = calculateAverage(
//         scoreOne,
//         scoreTwo,
//         scoreThree
//     );

//     const grade = getGrade(average);
//     const resultStatus = getResultStatus(average);

//     console.log(`students: ${studentName}`);
//     console.log(`Average: ${average}`);
//     console.log(`Grade: ${grade}`);
//     console.log(`Result: ${resultStatus}`);
// }


// generateStudentReport("faith", 80, 70, 65);
// generateStudentReport("bola", 70, 60, 50);
// generateStudentReport("precious", 75, 65, 68);
// generateStudentReport("esther", 60, 45, 20);


// // sample
// function calculateSubtotal(price, quantity) {
//     return price * quantity;
// }

// function calculateDiscount(subtotal, isMember) {
//     if (subtotal >= 50000) {
//         return subtotal * 0.10;
//     } else if (isMember) {
//         return subtotal * 0.05;
//     } else {
//         return 0;
//     }
// }

// function calculateDeliveryFee(totalAfterDiscount) {
//     if (totalAfterDiscount >= 40000) {
//         return 0;
//     } else {
//         return 2500;
//     }
// }

// function calculateFinalTotal(
//     subtotal,
//     discountAmount,
//     deliveryFee
// ) {
//     return subtotal - discountAmount + deliveryFee;
// }

// function generateReceipt(price, quantity, isMember) {
//     if (price <= 0 || quantity <= 0) {
//         console.log("invalid order details.");
//         return;
//     }


//     const subtotal = calculateSubtotal(price, quantity);
//     const discountAmount = calculateDiscount(subtotal, isMember);
//     const totalAfterDiscount = subtotal - discountAmount;
//     const deliveryFee = calculateDeliveryFee(totalAfterDiscount);
//     const finalAmount = calculateFinalTotal(
//         subtotal,
//         discountAmount,
//         deliveryFee
//     );
//     console.log(`Subtotal: ₦${subtotal}`);
//     console.log(`Discount: ₦${discountAmount}`);
//     console.log(`Delivery: ₦${deliveryFee}`);
//     console.log(`Final amount: ₦${finalAmount}`);
// }

// generateReceipt(12000, 5, false);
// generateReceipt(10000, 3, true);
// generateReceipt(10000, 3, false);
// generateReceipt(-5000, 2, true);


// function calculateSubtotal(price, quantity) {
//     return price * quantity;
// }

// function calculateDiscount(subtotal, isMember) {
//     if (subtotal >= 50000) {
//         return subtotal * 0.10;
//     } else if (isMember) {
//         return subtotal * 0.05;
//     } else {
//         return 0;
//     }
// }

// function calculateDeliveryFee(totalAfterDiscount) {
//     if (totalAfterDiscount >= 40000) {
//         return 0;
//     } else {
//         return 2500;
//     }
// }

// function calculateFinalTotal(
//     subtotal,
//     discountAmount,
//     deliveryFee
// ) {
//     return subtotal - discountAmount + deliveryFee;
// }

// function generateReceipt(price, quantity, isMember) {
//     if (price <= 0 || quantity <= 0) {
//         console.log("Invalid order details.");
//         return;
//     }

//     const subtotal = calculateSubtotal(price, quantity);
//     const discountAmount = calculateDiscount(subtotal, isMember);
//     const totalAfterDiscount = subtotal - discountAmount;
//     const deliveryFee = calculateDeliveryFee(totalAfterDiscount);
//     const finalAmount = calculateFinalTotal(
//         subtotal,
//         discountAmount,
//         deliveryFee
//     );

//     console.log(`Subtotal: ₦${subtotal}`);
//     console.log(`Discount: ₦${discountAmount}`);
//     console.log(`Delivery: ₦${deliveryFee}`);
//     console.log(`Final amount: ₦${finalAmount}`);
// }
// generateReceipt(12000, 5, false);
// generateReceipt(10000, 3, true);
// generateReceipt(10000, 3, false);
// generateReceipt(-5000, 2, true);


// function calculateRegularHours(hoursWorked) {
//     if (hoursWorked <= 40) {
//         return hoursWorked;
//     } else {
//         return 40;
//     }
// }

// function calculateOvertimeHours(hoursWorked) {
//     if (hoursWorked >= 40) {
//         return hoursWorked - 40;
//     } else {
//         return 0;
//     }
// }

// function calculateRegularPay(regularHours, hourlyRate) {
//     if (regularHours = 40 || hourlyRate <= 2000) {
//         return regularHours * hourlyRate
//     }
// }

// function calculateOvertimePay(overtimeHours, hourlyRate) {
//     return hourlyRate * 1.5
// }
// function generatePayreport(emloyeeName, hoursWorked, hourlyRate) {
//     if (hourlyRate < 0) {
//         console.log("Hours worked cannot be below zero");
//         return;
//     }
//     if (hourlyRate <= 0) {
//         console.log("Hourly rate must be greater than zero");
//         return;
//     }

//     const regularHours = calculateRegularHours(hoursWorked);
//     const overtimeHours = calculateOvertimeHours(hoursWorked);
//     const regularPay = calculateRegularPay(regularHours, hourlyRate);
//     const OvertimePay = calculateOvertimePay(overtimeHours, hourlyRate)
//     const totalWeeklyPay = regularPay + OvertimePay;

//     console.log(`Employee: ${emloyeeName}`);
//     console.log(`Regular hours: ${regularHours}`);
//     console.log(`Overtime hours: ${overtimeHours}`);
//     console.log(`Regular pay: ${regularPay}`);
//     console.log(`Overtime pay: ${OvertimePay}`);
//     console.log(`Total weekly pay: ${totalWeeklyPay}`);
// }
// generatePayreport("Favour", 60, 1500);
// generatePayreport("Faith", 50, 1500);
// generatePayreport("Ella", 30, 1500);
// generatePayreport("Ay", 40, 1500);

// // task 4------------------
// function calculateBaseFare(distance) {
//     let baseFare = 1000;
//     let distanceCharge = 250;
//     return baseFare + distanceCharge;
// }

// function calculatePeakSurcharge(fare, isPeakHour) {
//     if (isPeakHour) {
//         return fare * 0.20;
//     }
//     return 0;
// }

// function calculatePromoDiscount(fare, hasPromo) {
//     if (hasPromo) {
//         return fare * 0.10;
//     }
//     return 0;
// }

// function calculateRideFare(distance, isPeakHour, hasPromo) {
//     if (distance <= 0) {
//         console.log("distance must be greater thena zero");
//         return;
//     }
//     let baseFare = 1000;
//     let distanceCharge = distance * 250;

//     let fare = calculateBaseFare(distance);
//     let peakSurcharge = calculatePeakSurcharge(fare, isPeakHour);
//     let promoDiscount = calculatePromoDiscount(fare + peakSurcharge, hasPromo);
//     let finalFare = fare + peakSurcharge - promoDiscount;
//     if (finalFare < 1500) {
//         finalFare = 1500;
//     }

//     console.log("Distance: " + distance + "km");
//     console.log("Base fare:  ₦" + baseFare);
//     console.log("Distance charge: ₦" + distanceCharge);
//     console.log("peak - hour surcharge: ₦" + peakSurcharge);
//     console.log("promo discount: ₦" + promoDiscount);
//     console.log("Final Fare: ₦" + finalFare);
// }

// calculateRideFare(10, false, false);
// calculateRideFare(10, true, false);
// calculateRideFare(10, true, true);
// calculateRideFare(1, false, true);
// calculateRideFare(0, false, false);

// task 5
// function isPinCorrect(pinCorrect) {
//     return pinCorrect;
// }

// function isValidAmount(amount) {
//     return amount > 0 && amount % 1000 === 0;
// }

// function hasEnoughBalance(balance, amount) {
//     return amount <= balance;
// }

// function withdraw(balance, amount, pinCorrect) {
//     if (!isPinCorrect(pinCorrect)) {
//         console.log("Transaction Failed: Incorrect PIN");
//         return;
//     }

//     if (!isValidAmount(amount)) {
//         if (amount <= 0) {
//             console.log("Transaction Failed: Withdrawal amount must be greater than 0");
//         } else {
//             console.log("Transaction FAiled: Amount must be a multiple of 1000");
//         }
//         return;
//     }
//     if (!hasEnoughBalance(balance, amount)) {
//         console.log("Transactin Failed: Insufficient Account Balance");
//         return;

//     }
//     let remainingBalance = balance - amount;
//     console.log("withdrawal Successful!");
//     console.log("Withdrawal Amount: ₦" + amount);
//     console.log("Remaining Balance: ₦" + remainingBalance);
// }

// // test cases
// console.log("Test Case 1");
// withdraw(50000, 30000, true);
// console.log("--------------");
// console.log("Test Case 2");
// withdraw(50000, 30000, false);
// console.log("--------------");
// console.log("Test Case 3");
// withdraw(50000, 0, true);
// console.log("--------------");
// console.log("Test Case 4");
// withdraw(50000, 7500, true);
// console.log("--------------");
// console.log("Test Case 5");
// withdraw(50000, 6000, true);

// phase 5-------------
//  no 1
// function greetStudent(name) {
//     console.log(`hi, ${name}`);
// }

// greetStudent("faith");
// greetStudent("Ay");
// greetStudent("Ella");

// //  no 2
// function calculateCost(price, quantity) {
//     const totalCost = price * quantity;

//     console.log(totalCost);
// }

// calculateCost(5000, 5);
// calculateCost(3000, 5);

//  no 3

// function isEvenNo(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEvenNo(20));
// console.log(isEvenNo(15));



// // assignments on phase 6 & 7

//  6 no 1
const skills = ["HTML", "CSS", "JS", "PHP", "JAVA"];
//  2
console.log(skills[0]);
// 3
console.log(skills[4]);
// 4
skills.push("Latptop Repairs");
// 5
skills.shift();

console.log(skills);
console.log(skills.includes("JavaCsript"));
console.log(skills.length);

// phase 7
//  1
const myself = {
    // 2
    name: "Faith",
    age: 12,
    school: "Adeleke University",
    skills: "Laptop Repairs"
};
// 3
console.log(myself.name);
//  4
myself.age = 15;
// 5
myself.goal = "Sucessful Engineer";
//  6
const project = [
    {
        department: "Computer Engineering",
        level: "400l"
    },
    {
        department: "Mechanical Engineering",
        Level: "300l"
    },
    {
        department: "Civil Engineering",
        Level: "500l"
    }
];
//  7
console.log(project[1].department);

//  phase 8

//  no 1
// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }
// //  no 2
// const skillss = ["photography", "retouching", "solid Works"];
// for (let i = 0; i < skillss.length; i++) {
//     console.log(skillss[i]);
// }
// //  no 3

// const scores = [40, 50, 10];
// let total = 0;
// for (const score of scores) {
//     total += score;
// }
// console.log(total);
// //  no 4

// const numberss = [5, 6, 8, 11, 25, 100];
// let found = false;

// for (const numbers of numberss) {
//     if (numbers === 100) {
//         found = true;
//     }
// }

// console.log(found);
// //  no 5

// const projects = ["css", "HTML", "Js"];
// projects.forEach(function (project) {
//     console.log(project);
// });

// phase 9 next

//  10
// no 1 and 2
// const students = [
//     {
//         name: "faith",
//         scores: [80, 75, 90]
//     },
//     {
//         name: "ella",
//         scores: [60, 70, 50]
//     },
//     {
//         name: "Olamide",
//         scores: [90, 60, 65]
//     }
// ];
// // no 3
// function calculateAverage(scores) {
//     let total = 0;

//     for (const score of scores) {
//         total += score;
//     }
//     return total / scores.length;
// }
// // no 4
// function getpassStatus(average) {
//     if (average >= 50) {
//         return "passed";
//     }
//     return "failed";
// }
// const average = calculateAverage(students.score);
// const status = getpassStatus(average);

// console.log(`Student: ${students.name} `);
// console.log(`Average: ${average}`);
// console.log(`Status: ${status}`);

// no 5

//  phase 11
//  footer year

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();

}

// toggle
const themeToggle = document.querySelector(".theme-toggle");


if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        const isDark = document.body.classList.contains("dark-theme");
        if (isDark) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

// conatac

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("is-open");
    });
}

//  contact form validation

const contactForm = document.querySelector(".contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector(".form-message");
const characterCount = document.querySelector(".character-count");


if (contactForm && nameInput && emailInput && messageInput && formMessage) {

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "") {
            formMessage.textContent = "Plese enter your name";
            return;
        }
        if (email === "") {
            formMessage.textContent = "Please enter your email";
            return;
        }
        if (!email.includes("@")) {
            formMessage.textContent = "Please enter a valid email address";
            return;
        }
        if (message.length < 10) {
            formMessage.textContent = "Your message should be at least 10 characters";
            return;
        }
        formMessage.textContent = "Thank you. Your message is ready to be sent";
        contactForm.reset();
        if (characterCount) {
            characterCount.textContent = "0 characters";
        }
    });
}
// const characterCount = document.querySelector(".character-count");
if (messageInput && characterCount) {
    messageInput.addEventListener("input", function () {
        const count = messageInput.value.length;
        characterCount.textContent = `${count} characters`;
    });
}

// filter buttons
const filterButtons = document.querySelectorAll(".project-filters button");
const projectCard = document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedFilter = button.dataset.filters;


        projectCard.forEach(function (card) {
            const categories = card.dataset.category;

            if (selectedFilter === "all" || categories.includes(selectedFilter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});