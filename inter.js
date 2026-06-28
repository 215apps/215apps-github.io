document.addEventListener("DOMContentLoaded", () => {
  // Select all theme-toggle button instances (Desktop and Mobile)
  const themeToggleBtns = document.querySelectorAll(".theme-toggle");
  const body = document.body;
  const dateElement = document.getElementById("current-date");
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
    if (timeElement) {
      let timeString = now.toLocaleTimeString("en-US", timeOptions);
      timeElement.textContent = timeString.toUpperCase();
    }
  };

  // Run immediately and then every second
  updateClock();
  setInterval(updateClock, 1000);

  // Theme Logic applied globally across all template buttons
  const htmlElement = document.documentElement;

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      htmlElement.classList.toggle("light-mode");
      const isLight = htmlElement.classList.contains("light-mode");
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  });

  // Event listener for tab transitions
  const toggles = document.querySelectorAll('input[name="header-toggle"]');
  toggles.forEach((toggle) => {
    toggle.addEventListener("change", (e) => {
      console.log(`Selected view: ${e.target.value}`);
    });
  });
});
