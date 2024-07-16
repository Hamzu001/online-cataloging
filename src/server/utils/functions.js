export const emailValidator = function (v) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return regex.test(v)
}

export function getCurrentDateTime() {
  // Create a new Date object representing the current date and time
  const now = new Date();

  // Format the date and time components
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Return the formatted date and time
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}