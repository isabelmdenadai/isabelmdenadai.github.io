// Assuming this script is included in both the home page and the menu page
function toggleMenu() {
    const menuPage = 'menumobile_page.html'; // Path to your menu page

    // Check if we're currently on the menu page
    if (window.location.pathname.includes(menuPage)) {
        // If yes, navigate to the previously visited page, or home page as fallback
        const previousPage = sessionStorage.getItem('previousPage') || '../index.html';
        window.location.href = previousPage;
    } else {
        // If not, save the current page before navigating to the menu
        sessionStorage.setItem('previousPage', window.location.href);
        window.location.href = menuPage;
    }
}
