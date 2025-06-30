const currentDate = new Date();

const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

// Function to format date as MM/DD/YYYY
function formatDateMMDDYYYY(dateObj) {
  const formattedDate = dateObj.toLocaleDateString('en-US');
  return `Formatted Date (MM/DD/YYYY): ${formattedDate}`;
}

//Function to format date as Month Day, Year
function formatDateLong(dateObj) {
  const formattedDate = dateObj.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}

//Call and log the formatted date results
console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));
