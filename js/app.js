/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
let docNavigator = [];

/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
function gotoID(idText){
    document.getElementById(idText).scrollIntoView({behavior: 'smooth'});
}


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
function buildNavBarMenu(){
    const navSections = document.querySelectorAll('[id^="section"]');
    let fragment = new DocumentFragment();
    for (navSection of navSections){
        let li = document.createElement('li');
        li.innerText = navSection.dataset.nav;
        li.classList.add('menu__link');
        li.setAttribute('data-goto', navSection.id);
        fragment.appendChild(li);
    }
    let list = document.querySelector('#navbar__list');
    list.appendChild(fragment);
}

// Scroll to section on link click

// Set sections as active

/**
 * Main function
 */
// buildNav();
buildNavBarMenu();
gotoID('section3');

// GO TO ID
//document.getElementById("jump_to_this_location").scrollIntoView({behavior: 'smooth'});
// or
// window.location.hash = "jump_to_this_location";