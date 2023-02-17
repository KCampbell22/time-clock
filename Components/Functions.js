// function recieves a date object and returns the Hour and Minutes

const getTime = (date) => {
  let hours = date.getHours() - 12;
  let minutes = date.getMinutes();
  return `${hours}:${minutes}`;
};

// function returns the locale time string from a date object

const getLocaleTime = (date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

/**
 * Function recieves two date objects and returns the difference in hours and minutes
 */

const getHoursWorked = (start, end) => {
  let hours = end.getHours() - start.getHours();
  let minutes = end.getMinutes() - start.getMinutes();

  return `${hours} hours and ${minutes} minutes`;
};
