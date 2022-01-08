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


// Create observer that sets active class when section comes into view
let observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting === true) {
      console.log("Element has just become visible in screen");
      let currentlyActive = document.querySelector(".section-in-view");
      currentlyActive.classList.toggle("section-in-view");
      entries[0].target.classList.toggle("section-in-view");
      console.log(entries[0].target);
    }
  },
  { threshold: [0.51] }
);

// Build navigation bar items, add menu event listeners and add observers
let buildNavigation = () => {
  const navSections = document.querySelectorAll('[id^="section"]');
  const fragment = new DocumentFragment();

  for (let navSection of navSections) {
    // Create new list item, add the name from the dataset nav and add the class for styling
    const li = document.createElement("li");
    li.innerHTML = navSection.dataset.nav;
    li.classList.add("menu__link");

    // Add listener for click on navbar item (just added)
    li.addEventListener("click", () => {
      document
        .getElementById(navSection.id)
        .scrollIntoView({ behavior: "smooth" });
    });

    // Append the list item to the fragment
    fragment.appendChild(li);

    // Add observer for section
    const target = document.getElementById(navSection.id);
    observer.observe(target);
  }
  // Append the fragment to the navbar list
  const list = document.querySelector("#navbar__list");
  list.appendChild(fragment);
};

// Wait for DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  buildNavigation();
});
