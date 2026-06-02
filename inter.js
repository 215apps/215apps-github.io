document.addEventListener("DOMContentLoaded", () => {
  // Commented out since .theme-toggle is missing from HTML,
  // keeping it so your script doesn't break if you use it elsewhere.
  const themeToggleBtn = document.querySelector(".theme-toggle");
  const timeElement = document.getElementById("current-time");

  // Function to update the clock
  const updateClock = () => {
    const now = new Date();

    const timeOptions = {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    // Convert to string and force uppercase for AM/PM
    let timeString = now.toLocaleTimeString("en-US", timeOptions);
    timeElement.textContent = timeString.toUpperCase();
  };

  // Run immediately and then every second
  updateClock();
  setInterval(updateClock, 1000);

  // Theme Logic
  const htmlElement = document.documentElement;

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      htmlElement.classList.toggle("light-mode");
      const isLight = htmlElement.classList.contains("light-mode");
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }

  // Optional: Event listener if you want to run code when the new toggle changes
  const toggles = document.querySelectorAll('input[name="header-toggle"]');
  toggles.forEach((toggle) => {
    toggle.addEventListener("change", (e) => {
      console.log(`Selected view: ${e.target.value}`);
      // Add your navigation or view switching logic here
    });
  });
});
