document.getElementById('toggleMenuBtn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    
    // Get the current left position using getComputedStyle
    const currentLeft = window.getComputedStyle(sidebar).left;

    // Check if the sidebar is visible
    if (currentLeft === '0px') {
        sidebar.style.left = '-250px'; // Hide the menu
    } else {
        sidebar.style.left = '0px'; // Show the menu
    }
});

