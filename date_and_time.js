document.addEventListener('DOMContentLoaded', function () {
    // Function to format the date and time
    function formatDate(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        return date.toLocaleDateString('en-US', options);
    }

    // Display the current date and time
    function updateDateTime() {
        const currentDateElement = document.getElementById('currentDate');
        const currentDate = new Date();
        currentDateElement.innerText = formatDate(currentDate);
    }

    // Update the date and time every second
    setInterval(updateDateTime, 1000);

    // Initial display
    updateDateTime();
});


