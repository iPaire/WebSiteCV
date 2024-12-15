// toggleMenu.js
document.getElementById('toggleMenuBtn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    
    // Verifică dacă meniul este deschis sau închis
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Ascunde meniul
    } else {
        sidebar.style.left = '0px'; // Afișează meniul
    }
});
