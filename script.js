// Function to display current time in UTC
function updateTime() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    currentTimeElement.textContent = `Current UTC Time: ${now.toUTCString()}`;
  }
  
  // Call the function on page load
  updateTime();
  