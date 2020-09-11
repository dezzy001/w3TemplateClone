const MENU_EAT = 0;
const MENU_DRINK = 1;
let menuHeaders = document.querySelectorAll(".menu-header");
let menuItems = document.querySelectorAll(".menu-items");

// Set click event on each menu header to show the appropriate menu item
menuHeaders.forEach((menuHeader, menuHeaderIndex) => {
  menuHeader.addEventListener("click", () => {
    refreshMenu();
    menuHeader.classList.add("menu-selected");
    if (menuHeaderIndex == MENU_EAT) {
      menuItems[MENU_EAT].classList.remove("hide-display");
    } else if (menuHeaderIndex == MENU_DRINK) {
      menuItems[MENU_DRINK].classList.remove("hide-display");
    }
  });
});

// This function resets the menu back to default
function refreshMenu() {
  console.log(`DEREK refreshMenu`);
  removeAllSelectedMenuHeader();
  hideAllMenuItemContainers();
}

function hideAllMenuItemContainers() {
  menuItems.forEach((menuItem) => {
    menuItem.classList.add("hide-display");
    console.log(`DEREK LOL: `);
  });
}

function removeAllSelectedMenuHeader() {
  menuHeaders.forEach((menuHeader) => {
    menuHeader.classList.remove("menu-selected");
  });
}
