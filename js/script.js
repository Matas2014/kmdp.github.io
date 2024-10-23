function startTimer() {
    // Set a timer for 45 minutes (2700000 milliseconds)
    setTimeout(function() {
        alert("Laikas baigėsi! Jūs būsite nukreiptas.");
        // Redirect to another page (e.g., results.html)
        window.location.href = "results.html";
    }, 2700000); // 45 minutes in milliseconds
}

// Start the timer when the page loads
window.onload = startTimer;
