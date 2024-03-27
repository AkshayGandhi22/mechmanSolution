function radioBtnInput(controlWrapper, radioBtnlistOptions) {
    let listContainer, list, numOfItems, listItem, listItemInput, listItemLabel, listItemImg, listItemSpan;

    listContainer = document.createElement('div');
    listContainer.className = "radio_box";
    controlWrapper.appendChild(listContainer);

    list = document.createElement('ul');
    list.setAttribute("class", radioBtnlistOptions.layout);
    list.classList.add(radioBtnlistOptions.cssulClass);
    list.style.columnGap = (radioBtnlistOptions.spacingBetweenColumns);
    list.style.rowGap = (radioBtnlistOptions.spacingBetweenRows);
    listContainer.appendChild(list);

    numOfItems = radioBtnlistOptions.source.length;
    for (var i = 0; i < numOfItems; ++i) {
        listItem = document.createElement('li');
        listItem.setAttribute("class", radioBtnlistOptions.itemCssClass);
        list.appendChild(listItem);

        listItemInput = document.createElement('input');
        listItemInput.setAttribute("id", radioBtnlistOptions.groupName + '_' + radioBtnlistOptions.source[i].itemId.replace(' ', ''));
        listItemInput.setAttribute("type", 'radio');
        listItemInput.setAttribute("name", radioBtnlistOptions.groupName);
        listItemInput.setAttribute("value", radioBtnlistOptions.source[i].itemId);
        listItem.appendChild(listItemInput);

        listItemLabel = document.createElement('label');
        listItemLabel.setAttribute("for", radioBtnlistOptions.groupName + '_' + radioBtnlistOptions.source[i].itemId.replace(' ', ''));
        listItemLabel.setAttribute("class", radioBtnlistOptions.itemLabelCssClass);
        listItem.appendChild(listItemLabel);

        if (!!radioBtnlistOptions.source[i].itemImage) {
            listItemImg = document.createElement('img');
            listItemImg.setAttribute("src", radioBtnlistOptions.source[i].itemImage);
            listItemImg.setAttribute("class", radioBtnlistOptions.itemImageCssClass);
            listItemLabel.appendChild(listItemImg);
        }

        listItemSpan = document.createElement('span');
        listItemSpan.innerHTML = radioBtnlistOptions.source[i].itemText;
        listItemSpan.setAttribute("class", radioBtnlistOptions.selectedItemCssClass);
        listItemLabel.appendChild(listItemSpan);

        if (!!listItemInput) {
            const radiobuttonObj = radioBtnlistOptions.source[i];
            listItemInput.addEventListener('click', function (event) {
                // Validate the current form step before proceeding to the next step
                if (radiocheckValidation(controlWrapper, radioBtnlistOptions)) {
                    // Implement this function to validate the current step
                    if (!!radioBtnlistOptions.radiobuttonChangeCallback && typeof radioBtnlistOptions.radiobuttonChangeCallback === 'function') {
                        radioBtnlistOptions.radiobuttonChangeCallback(event, radiobuttonObj);
                    }
                }
                radiocheckValidation(controlWrapper, radioBtnlistOptions);
            });
        }

        if (radioBtnlistOptions.required) {
            listItemInput.setAttribute("required", true);
        }
    }

    if (!!listItemInput) {
        listItemInput.addEventListener('input', function () {
            radiocheckValidation(controlWrapper, radioBtnlistOptions);
        });
    }

    // Error Message Declaration
    let validationMsgContainer = document.createElement('div');
    validationMsgContainer.className = "invalid-feedback";
    listContainer.appendChild(validationMsgContainer);
}

function radiocheckValidation(controlWrapper, radioBtnlistOptions) {
    // let radioboxInput = document.querySelector("[name='" + radioBtnlistOptions.groupName + "']");
    // let radioboxInputValidity = radioboxInput.validity;
    let radiobuttonItems, selectedRadioItemId, radiovalidationMsg, radiovalidationMsgDiv;

    selectedRadioItemId = null;
    radiovalidationMsg = '';

    if (radioBtnlistOptions.required) {
        radiobuttonItems = document.querySelectorAll("[name='" + radioBtnlistOptions.groupName + "']");
        for (var i = 0; i < radiobuttonItems.length; i++) {
            // console.log('eachRadioItem:: ', eachRadioItem[1].checked);
            if (radiobuttonItems[i].checked) {
                selectedRadioItemId = radiobuttonItems[i].value;
                break;
            }
        }

        // Validation Conditions
        if (selectedRadioItemId === null) {
            radiovalidationMsg = radioBtnlistOptions.radiovalidationOptions.messages.required;
        }

        // Error Message
        if (!!controlWrapper) {
            radiovalidationMsgDiv = controlWrapper.getElementsByClassName('invalid-feedback')[0];
            radiovalidationMsgDiv.style.display = selectedRadioItemId === null ? 'block' : 'none';
            radiovalidationMsgDiv.innerHTML = selectedRadioItemId === null ? radiovalidationMsg : '';
        }
    }
    // return radioboxInputValidity.valid;
    return radioBtnlistOptions.required ? (selectedRadioItemId !== null ? true : false) : true;
}