// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.querySelector('.hamburger');
//     const navItems = document.querySelector('.navitems');

//     hamburger.addEventListener('click', function() {
//         navItems.classList.toggle('show');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navItemsWrapper = document.querySelector('.navitems-wrapper');

    hamburger.addEventListener('click', function() {
        navItemsWrapper.classList.toggle('show');
    });
});