// Menu Looping
function createNavigationMenu(navElement, navMenuOptions) {
    let listContainer, list, anchorTag, numberOfListItems, i;

    // Make a container element for the list
    listContainer = document.createElement('div');
    listContainer.className = "navbar-collapse";
    if (!!navMenuOptions.cssClass) {
        listContainer.className += ' ' + navMenuOptions.cssClass;
    }
    listContainer.id = navMenuOptions.id;

    // Make the list
    list = document.createElement('ul');
    list.className = "navbar-nav ms-auto navgap nav";

    // Make the list item
    anchorTag;

    // Add it to the page
    listContainer.appendChild(list);

    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = navMenuOptions.source.length;
    for (i = 0; i < numberOfListItems; ++i) {
        // Reset the list item
        listItem = document.createElement('li');
        listItem.setAttribute('id', `list-item-${navMenuOptions.source[i].itemId}`);
        listItem.setAttribute('class', "nav-item");
        // var tempLink = navMenuOptions.source[i].link.replace(/../g, '').replace(/.html/g, '');

        if (window.location.href.indexOf(navMenuOptions.source[i].pageName) > -1) {
            listItem.classList.add('active');
        }

        // Add listItem to the listElement
        list.appendChild(listItem);

        anchorTag = document.createElement('a');
        anchorTag.setAttribute('url-params', '');
        anchorTag.id = `list-item-link-${navMenuOptions.source[i].itemId}`;
        anchorTag.innerText = navMenuOptions.source[i].itemText;
        anchorTag.href = navMenuOptions.source[i].link + window.location.search;

        listItem.appendChild(anchorTag);
    }
    navElement.appendChild(listContainer);
}