// Imports

import { getDate } from "../Functions/getDate";

// console log the date

document.onload = console.log(getDate());

/*

const punchIn = document.querySelector(".clock-in-btn");
const punchOut = document.querySelector(".clock-out-btn");
const clockInSpan = document.querySelector(".clockIn");
const clockOutSpan = document.querySelector(".clockOut");
const time = document.querySelector(".total-time");
let startDate;
let startTime;
let endTime;

// user is on the clock
let onClock = false;


let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);


function timestamp() {
  let newDate = new Date();

  clockInSpan.innerHTML = timeString;

  let newHourTotal = newDate.getTime() / 10000 / 60 / 60;
  return newHourTotal;
}

function getTotal(start, finish) {
  return finish - start;
}

punchIn.addEventListener("click", () => {
  startTime = new Date();
  onClock = true;

  console.log(startTime);

  clockInSpan.innerHTML = startTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
});

punchOut.addEventListener("click", () => {
  endTime = new Date();
  onClock = false;
  clockOutSpan.innerHTML = endTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  console.log(endTime);
  let endhours = endTime.getHours();
  let startHours = startTime.getHours();

  let endMinutes = endTime.getMinutes();
  let startMinutes = startTime.getMinutes();

  let hoursTotal = Math.abs(endhours - startHours);
  let minutesTotal = Math.abs(endMinutes - startMinutes);
  let day = getDay(endTime);

  time.innerHTML = `${day} worked ${hoursTotal} hours and ${minutesTotal} minutes`;

});



const getDay = (day) => {
  let dayString = "";
  switch (day.getDay()) {
    case 0:
      dayString = "Sunday";
      break;
    case 1:
      dayString = "Monday";
      break;
    case 2:
      dayString = "Tuesday";
      break;
    case 3:
      dayString = "Wednesday";
      break;
    case 4:
      dayString = "Thursday";
      break;
    case 5:
      dayString = "Friday";
      break;
    case 6:
      dayString = "Saturday";
    default:
      break;
  }

  return dayString;
};


const week = document.getElementById("week-grid");
let hours = 0;

let dayString = "";
const getData = () => {
  fetch("http://localhost:3000/weeks")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let weeks = data;
      // get each day from the week from the data
      weeks.forEach((week) => {
        let days = week.days;
        days.forEach((day) => {
          hours += Number(day.hoursWorked);
          let dayString = `
          <div data-${day.name} class="day"><p></p>
                <div class="day-name">${day.name}</div>
                <div class="hours">
                    
                    <span class="hours-total">Hours worked: </span>
                    <span class="hours-total">${day.hoursWorked}</span>
                </div>
                `;

          let dayElement = document.createElement("div");
          dayElement.classList.add("day");
          dayElement.innerHTML += dayString;
          document.getElementById("week-grid").appendChild(dayElement);
        });
      });

      let totalHoursDiv = document.createElement("div");
      totalHoursDiv.classList.add("total-hours");
      totalHoursDiv.innerHTML = `<span class="hours-total">Total Hours: ${hours} </span>
            `;
      document.getElementById("week-grid").appendChild(totalHoursDiv);
    });
};

 on page load, call getData function

document.addEventListener("onload", getData());
*/
