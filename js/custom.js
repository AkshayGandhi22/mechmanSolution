
  // Get the current page URL or use any other criteria to determine the current page
  var currentPage = window.location.pathname;
  var pathSprit = currentPage.split("/")
  var lastElement = pathSprit.slice(-2, -1)[0]
 

  // Select navigation items
  var navigationItems = document.querySelectorAll('#navbarSupportedContent a');
  var mainNavigationItems = document.querySelectorAll('#navbarSupportedContent a.nav-link');

  // Remove "active" class from all navigation items
  navigationItems.forEach(function(item) {
    item.classList.remove('active');
  });
  mainNavigationItems.forEach(function(item) {
    item.classList.remove('active');
  });

  for (var i = 0; i < mainNavigationItems.length; i++) {
    let innerText = mainNavigationItems[i].innerText
    let covertedText = innerText.replace(/\s+/g, '').toLowerCase();
    pathSprit.find((currentValue) => {
      if (currentValue === covertedText) {
        mainNavigationItems[i].classList.add('active');
        return true; // stop the iteration once a match is found
      }
    });
  }

  // Add "active" class to the navigation item corresponding to the current page
  for (var i = 0; i < navigationItems.length; i++) {
    let spritHref = navigationItems[i].getAttribute('href').split("/");
    let lastHref = spritHref.slice(-2, -1)[0];
    if (lastHref === lastElement) {
      navigationItems[i].classList.add('active');
      break; // Stop iterating once the current page is found
    }
  }

