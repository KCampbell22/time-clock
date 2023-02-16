const punchIn = document.querySelector(".clock-in-btn");
const punchOut = document.querySelector(".clock-out-btn");
const  clockInSpan = document.querySelector(".clockIn");
const clockOutSpan = document.querySelector(".clockOut");
const time = document.querySelector(".total-time")
let startDate;
let startTime;
let endTime;


/*
let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);
*/



function timestamp() {
    let newDate = new Date();

    
        clockInSpan.innerHTML = timeString;
    
let newHourTotal = newDate.getTime() / 10000 / 60 / 60;
return newHourTotal
}

function getTotal(start, finish){
    return finish - start;
}

punchIn.addEventListener("click", () => {
    startTime = new Date();

    

    console.log(startTime)

    clockInSpan.innerHTML = startTime.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"})
   
})


punchOut.addEventListener("click", () => {
    endTime = new Date();

    clockOutSpan.innerHTML = endTime.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"})
    console.log(endTime);
    let endhours = endTime.getHours();
    let startHours = startTime.getHours();

    let endMinutes = endTime.getMinutes();
    let startMinutes = startTime.getMinutes()

    let hoursTotal = Math.abs(endhours - startHours);
    let minutesTotal = Math.abs(endMinutes - startMinutes);
    let day = getDay(endTime);
 
    time.innerHTML = `${day} worked ${hoursTotal} hours and ${minutesTotal} minutes`

   // time.innerHTML = totalTime;
   
} )

// function to get the day from the date object.
// days from the date object range from 0-6
// 0 represents sunday, and 6 represents saturday

const getDay = (day) => {
    let dayString = ""
    switch (day.getDay()) {
        case 0:
            dayString = "Sunday";
            break;
        case 1:
            dayString = "Monday"
            break;
        case 2:
            dayString = "Tuesday";
            break;
        case 3:
            dayString = "Wednesday"
            break;
        case 4:
            dayString = "Thursday";
            break;
        case 5:
            dayString = "Friday"
            break;
        case 6:
            dayString = "Saturday"
        default:
            break;
    }

    return dayString;
}




