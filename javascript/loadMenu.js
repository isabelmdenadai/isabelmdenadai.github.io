// Load the menu from logo_menu.html into the placeholder div
fetch('../html/logo_menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-container').innerHTML = data;
    });
