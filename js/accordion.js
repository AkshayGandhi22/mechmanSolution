function createAccordian(accordianElement, accrodianBoxes, option) {
    let accodianItem, accordianMainBox, accordianMainDiv, accordianHeadDiv, accordianHeadAnchor, accordianTextDiv, accordianTextBody, i;

    if (accordianElement === null || typeof accordianElement === 'undefined') {
        return;
    }

    accordianMainBox = document.createElement('div');
    accordianMainBox.className = 'accordion';
    accordianMainBox.id = option.accordianMainBoxCSS;
    accordianElement.appendChild(accordianMainBox);

    accodianItem = accrodianBoxes.length;
    for (i = 0; i < accodianItem; i++) {
        // Main Div
        accordianMainDiv = document.createElement('div');
        accordianMainDiv.className = 'accordion-item';
        accordianMainBox.appendChild(accordianMainDiv);

        // Header Div
        accordianHeadDiv = document.createElement('p');
        accordianHeadDiv.className = 'accordion-header';
        accordianHeadDiv.id = `heading${accrodianBoxes[i].itemId}`;
        accordianMainDiv.appendChild(accordianHeadDiv);

        // Header Anchor Div
        accordianHeadAnchor = document.createElement('button');
        accordianHeadAnchor.className = 'accordion-button collapsed';
        accordianHeadAnchor.setAttribute('type', "button");
        accordianHeadAnchor.setAttribute('data-bs-toggle', "collapse");
        accordianHeadAnchor.setAttribute('data-bs-target', `#collapse${accrodianBoxes[i].itemId}`);
        accordianHeadAnchor.setAttribute('aria-controls', `#collapse${accrodianBoxes[i].itemId}`);
        accordianHeadAnchor.textContent = accrodianBoxes[i].title;
        accordianHeadDiv.appendChild(accordianHeadAnchor);

        // Content Div
        accordianTextDiv = document.createElement('div');
        accordianTextDiv.id = `collapse${accrodianBoxes[i].itemId}`;
        accordianTextDiv.className = 'accordion-collapse collapse';
        accordianTextDiv.setAttribute('aria-labelledby', `heading${accrodianBoxes[i].itemId}`);
        accordianTextDiv.setAttribute('data-bs-parent', '#' + accordianMainBox.id);
        accordianMainDiv.appendChild(accordianTextDiv);

        // Content Body Div
        accordianTextBody = document.createElement('div');
        accordianTextBody.className = 'accordion-body';
        accordianTextBody.innerHTML = accrodianBoxes[i].description;
        accordianTextDiv.appendChild(accordianTextBody);
    }
}