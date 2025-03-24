// Optional: You can add interactivity or more animations using JavaScript
document.getElementById('tulip').addEventListener('click', function() {
    this.classList.toggle('bloom');
});

// Add event listener to the button to navigate to secondpage.html
document.getElementById('navigateButton').addEventListener('click', function() {
    window.location.href = 'secondpage.html'; // Navigate to secondpage.html
});