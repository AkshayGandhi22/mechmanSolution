function checkboxInput(controlWrapper, checkboxlistOptions) {
    let listContainer, list, numOfItems, listItem, listItemInput, listItemLabel, listItemImg, listItemSpan, i, validationMsgContainer;

    listContainer = document.createElement('div');
    listContainer.className = "checkbox_box";
    controlWrapper.appendChild(listContainer);

    list = document.createElement('ul');
    list.setAttribute("class", checkboxlistOptions.layout);
    list.classList.add(checkboxlistOptions.cssulClass);
    list.style.columnGap = (checkboxlistOptions.spacingBetweenColumns);
    list.style.rowGap = (checkboxlistOptions.spacingBetweenRows);

    listContainer.appendChild(list);

    numOfItems = checkboxlistOptions.source.length;
    for (i = 0; i < numOfItems; ++i) {
        listItem = document.createElement('li');
        listItem.setAttribute("class", checkboxlistOptions.itemCssClass);
        list.appendChild(listItem);

        listItemInput = document.createElement('input');
        listItemInput.setAttribute("id", checkboxlistOptions.source[i].itemId);
        listItemInput.setAttribute("type", 'checkbox');
        listItemInput.setAttribute("name", checkboxlistOptions.groupName);
        listItemInput.setAttribute("value", checkboxlistOptions.source[i].itemId);
        listItem.appendChild(listItemInput);

        listItemLabel = document.createElement('label');
        listItemLabel.setAttribute("for", checkboxlistOptions.source[i].itemId);
        listItemLabel.setAttribute("class", checkboxlistOptions.itemLabelCssClass);
        listItem.appendChild(listItemLabel);

        listItemImg = document.createElement('img');
        listItemImg.setAttribute("src", checkboxlistOptions.source[i].itemImage);
        listItemImg.setAttribute("class", checkboxlistOptions.itemImageCssClass);
        listItemLabel.appendChild(listItemImg);

        listItemSpan = document.createElement('span');
        listItemSpan.innerHTML = checkboxlistOptions.source[i].itemText;
        listItemSpan.setAttribute("class", checkboxlistOptions.selectedItemCssClass);
        listItemLabel.appendChild(listItemSpan);

        if (checkboxlistOptions.required) {
            listItemInput.setAttribute("required", true);
        }

        if (!!listItemInput) {
            listItemInput.addEventListener('input', function () {
                checkboxcheckValidation(controlWrapper, checkboxlistOptions);
            });
        }
    }
    // Error Message Declaration
    validationMsgContainer = document.createElement('div');
    validationMsgContainer.className = "invalid-feedback";
    listContainer.appendChild(validationMsgContainer);
}

function checkboxcheckValidation(controlWrapper, checkboxlistOptions) {
    let checkboxbuttonItems, selectedcheckboxItemId, checkboxvalidationMsg, i, checkboxvalidationMsgDiv;

    selectedcheckboxItemId = null;
    checkboxvalidationMsg = '';

    if (checkboxlistOptions.required) {
        checkboxbuttonItems = document.querySelectorAll("[name='" + checkboxlistOptions.groupName + "']")

        for (i = 0; i < checkboxbuttonItems.length; i++) {
            if (checkboxbuttonItems[i].checked) {
                selectedcheckboxItemId = checkboxbuttonItems[i].value;
                break;
            }
        }

        // Validation Conditions
        if (selectedcheckboxItemId === null) {
            checkboxvalidationMsg = checkboxlistOptions.checkBoxvalidationOptions.messages.required;
        }

        // Error Message
        if (!!controlWrapper) {
            checkboxvalidationMsgDiv = controlWrapper.getElementsByClassName('invalid-feedback')[0];
            checkboxvalidationMsgDiv.style.display = selectedcheckboxItemId === null ? 'block' : 'none';
            checkboxvalidationMsgDiv.innerHTML = selectedcheckboxItemId === null ? checkboxvalidationMsg : '';
        }
    }
    // return checkboxboxInputValidity.valid;
    return (checkboxlistOptions.required && selectedcheckboxItemId !== null) || true;
}