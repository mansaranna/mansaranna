// Toggle sidebar on menu icon click
document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Toggle the active class to show/hide the sidebar and overlay
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close the sidebar when clicking outside of it (on the overlay)
document.getElementById('overlay').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Remove the active class to hide the sidebar and overlay
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});