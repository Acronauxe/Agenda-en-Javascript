let monthIndex = new Date().getMonth();

const monthElement = document.querySelector(".date h1");

const fullDateElement = document.querySelector(".date p");

const daysElement = document.querySelector(".days");

const daysElementStatic = document.querySelector(".days");

let lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();

let firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthElement.innerText = months[monthIndex];

// Change Month

let m = 0;
let y = 0;
let w = 0;

let n = 0;

let actual = new Date();

let DateMoved = (fullDateElement.innerText = new Date().getFullYear());
let MonthMoved = (monthElement.innerText = months[monthIndex]);

function dayscalendar() {
  let days = "";
  if (firstDay == -1) {
    firstDay = 6;
  }

  daysElement.innerHTML = days;

  for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
  }

  for (let x = 1; x <= lastDay; x++) {
    if (x != actual.getDate()) {
      days += `<div>${x}</div>`;
    } else if (m == 0) {
      days += `<div class="today" id="today">${x}</div>`;
    }
  }

  daysElement.innerHTML = days;
}

dayscalendar();

fullDateElement.innerText = new Date().toDateString();

function lastMonth() {
  m = m - 1;
  console.log(m);
  if (monthIndex + m < 0) {
    y = y - 1;
    monthIndex = monthIndex + 12;
    DateMoved = fullDateElement.innerText = new Date().getFullYear() + y;
    MonthMoved = monthElement.innerText = months[monthIndex + m];
    lastDay = new Date(
      new Date().getFullYear(),
      monthIndex + 1 + m,
      0
    ).getDate();
    firstDay =
      new Date(new Date().getFullYear(), monthIndex + m, 1).getDay() - 1;
    dayscalendar();
  } else if (m == 0) {
    DateMoved = fullDateElement.innerText = new Date().toDateString();
    MonthMoved = monthElement.innerText = months[monthIndex + m];
    lastDay = new Date(
      new Date().getFullYear(),
      monthIndex + 1 + m,
      0
    ).getDate();
    firstDay =
      new Date(new Date().getFullYear(), monthIndex + m, 1).getDay() - 1;
    dayscalendar();
  } else {
    MonthMoved = monthElement.innerText = months[monthIndex + m];
    DateMoved = fullDateElement.innerText = new Date().getFullYear() + y;
    lastDay = new Date(
      new Date().getFullYear(),
      monthIndex + 1 + m,
      0
    ).getDate();
    firstDay =
      new Date(new Date().getFullYear(), monthIndex + m, 1).getDay() - 1;
    dayscalendar();
  }
}

function nextMonth() {
  m = m + 1;
  console.log(m);
  if (monthIndex + m > 11) {
    y = y + 1;
    monthIndex = monthIndex - 12;
    DateMoved = fullDateElement.innerText = new Date().getFullYear() + y;
    MonthMoved = monthElement.innerText = months[monthIndex + m];
    lastDay = new Date(
      new Date().getFullYear(),
      monthIndex + 1 + m,
      0
    ).getDate();
    firstDay =
      new Date(new Date().getFullYear(), monthIndex + m, 1).getDay() - 1;
    dayscalendar();
  } else if (m == 0) {
    DateMoved = fullDateElement.innerText = new Date().toDateString();
    MonthMoved = monthElement.innerText = months[monthIndex + m];
    lastDay = new Date(
      new Date().getFullYear(),
      monthIndex + 1 + m,
      0
    ).getDate();
    firstDay =
      new Date(new Date().getFullYear(), monthIndex + m, 1).getDay() - 1;
    dayscalendar();
  } else {
    MonthMoved = monthElement.innerText = months[monthIndex + m];
    DateMoved = fullDateElement.innerText = new Date().getFullYear() + y;
    firstDay =
      new Date(new Date().getFullYear(), monthIndex + m, 1).getDay() - 1;
    lastDay = new Date(
      new Date().getFullYear(),
      monthIndex + 1 + m,
      0
    ).getDate();
    dayscalendar();
  }
}
