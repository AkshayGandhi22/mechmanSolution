function createStepper(navElement, listData) {
    let stepperContainer, stepperWrapper, stepper, stepperTitle;

    stepperContainer = document.createElement('div');
    stepperContainer.setAttribute("class", "stepper-container");

    for (var i = 0; i < listData.length; i++) {
        stepperWrapper = document.createElement('div');
        stepperWrapper.className = 'steppertext';
        stepperContainer.appendChild(stepperWrapper);
        stepper = document.createElement('div');
        stepper.setAttribute('id', `stepper-item-${listData[i].itemId}`);
        stepper.setAttribute('class', "stepper-item");

        if (listData[i].visited) {
            stepper.classList.add('visited');
        }
        else if (listData[i].active) {
            stepper.classList.add('active');
        }

        stepperWrapper.appendChild(stepper);
        stepperTitle = document.createElement('span');
        stepperTitle.innerText = listData[i].itemText;
        stepperWrapper.appendChild(stepperTitle);
    }
    navElement.appendChild(stepperContainer);
}

function setStepperItemAsVisited(itemId) {
    var stepperItem = getStepperItemDOMFromItemId(itemId);

    if (!!stepperItem) {
        stepperItem.classList.add('visited');
        stepperItem.classList.remove('active');
        stepperItem.classList.remove('inactive');
    }
}

function setStepperItemAsActive(itemId) {
    var stepperItem = getStepperItemDOMFromItemId(itemId);

    if (!!stepperItem) {
        stepperItem.classList.add('active');
        stepperItem.classList.remove('visited');
        stepperItem.classList.remove('inactive');
    }
}

function setStepperItemAsInActive(itemId) {
    var stepperItem = getStepperItemDOMFromItemId(itemId);

    if (!!stepperItem) {
        stepperItem.classList.add('inactive');
        stepperItem.classList.remove('active');
        stepperItem.classList.remove('visited');
    }
}

function getStepperItemDOMFromItemId(itemId) {
    return document.getElementById('stepper-item-' + itemId);
}