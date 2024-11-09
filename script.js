let my_year = document.querySelector(".my_year");
let age_result = document.querySelector(".age_result");
let age_result_details = document.querySelector(".age_result_details");
let myAge = document.querySelector(".myAge");
let MyFirstName = document.querySelector(".first_name");
let MylastName = document.querySelector(".last_name");
let details_result = document.querySelector(".details_result");
let result_block = document.querySelector(".top_left_section_second_half");
let userdataEnteries = [];
let userType = "";
let substitude_ans = document.querySelector(".prestige");
let n = document.querySelector(".n");
function calculateAge() {
  let currentDate = new Date();

  let currentYear = currentDate.getFullYear();

  let currentMonth = currentDate.getMonth();

  let myBirthYear = my_year.value;
  let userInput = new Date(myBirthYear);
  let userBirthYear = userInput.getFullYear();

  let myAge = currentYear - userBirthYear;
  console.log(myAge);

  let firstname = MyFirstName.value;
  let lastname = MylastName.value;

  if (myBirthYear == "" || firstname == "" || lastname == "") {
    age_result_details.textContent =
      "First Name, Last Name or BirthYear is Empty";
    age_result_details.style.display = "Block";
  } else if (myAge >= 13 && myAge <= 19) {
    age_result_details.innerHTML = `Hello, ${firstname} ${lastname} your age is ${myAge} years and ${currentMonth} months and you are a teenager😎🧑👧👦.`;
    age_result_details.style.display = "Block";
  } else if (myAge >= 19) {
    age_result_details.innerHTML = `Hello,  ${firstname} ${lastname} your age is ${myAge} years and ${currentMonth} months and  you are an adult🧔👨‍🔬👩‍💻👨‍💻.`;
    age_result_details.style.display = "Block";
  } else if (myAge <= 13 && myAge >= 1) {
    age_result_details.innerHTML = `Hello, ${firstname} ${lastname}  your age is  ${myAge}  years and ${currentMonth} months and you are a child.`;
    age_result_details.style.display = "Block";
  } else if (myAge == 0) {
    age_result_details.innerHTML = `Hello, ${firstname} ${lastname}  your age is  ${myAge}  years and ${currentMonth} months and you are a just born.`;
  }
  age_result_details.style.display = "Block";

  if (myBirthYear == "" || firstname == "" || lastname == "") {
    substitude_ans.textContent = "First Name, Last Name or BirthYear is Empty";
  } else if (myAge >= 13 && myAge <= 19) {
    substitude_ans.innerHTML = `Hello, ${firstname} ${lastname} your age is ${myAge} years and ${currentMonth} months and you are a teenager😎🧑👧👦.`;
  } else if (myAge >= 19) {
    substitude_ans.innerHTML = `Hello,  ${firstname} ${lastname} your age is ${myAge} years and ${currentMonth} months and  you are an adult🧔👨‍🔬👩‍💻👨‍💻.`;
  } else if (myAge <= 13 && myAge >= 1) {
    substitude_ans.innerHTML = `Hello, ${firstname} ${lastname}  your age is  ${myAge}  years and ${currentMonth} months and you are a child.`;
  } else if (myAge == 0) {
    substitude_ans.innerHTML = `Hello, ${firstname} ${lastname}  your age is  ${myAge}  years and ${currentMonth} months and you are a just born.`;
  }

  if (myAge >= 13 && myAge <= 19) {
    userType = "Teenager";
  } else if (myAge >= 19) {
    userType = "Adult";
  } else if (myAge <= 13) {
    userType = "Child";
  }

  if (myBirthYear != "" && firstname != "" && lastname != "") {
    let results = age_result_details.innerHTML;
    let userdata = {
      full_name: `${firstname} `,
      last_name: `${lastname}`,
      user_age: myAge,
      currentMonth: currentMonth,
      age_answer: results,
      answer: `${userType}`,
    };

    // Check if the array already has 10 entries
    if (userdataEnteries.length >= 10) {
      userdataEnteries.shift(); // Remove the oldest entry
    }

    userdataEnteries.push(userdata); // Add the new entry
    console.log(userdataEnteries);

    displayDetails();
    MyFirstName.value = "";
    MylastName.value = "";
    my_year.value = "";
  }
}

function displayDetails() {
  details_result.innerHTML = "";
  userdataEnteries.forEach((user, index) => {
    let row = document.createElement("tr");

    let cellIndex = document.createElement("td");
    cellIndex.textContent = index + 1;
    row.appendChild(cellIndex);

    let cellName = document.createElement("td");
    cellName.textContent = user.full_name;
    row.appendChild(cellName);

    let cellLastName = document.createElement("td");
    cellLastName.textContent = user.last_name;
    row.appendChild(cellLastName);

    let cellAge = document.createElement("td");

    cellAge.textContent = user.user_age;
    row.appendChild(cellAge);

    let cellResult = document.createElement("td");
    cellResult.textContent = user.answer;
    row.appendChild(cellResult);

    details_result.appendChild(row);
  });
}
