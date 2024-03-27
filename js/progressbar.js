// Get the form, progress bar, and buttons
let form, progress, prevButtonsArray, nextButton, buttonclass, isNextStepVisited, stepCountContainer,
    currentStepNumber, totalStepNumber, currentStep, totalSteps, steps, progressPercentage,
    nextButtoVisibilityIndexArray, prevButtoVisibilityIndexArray, prevButtonVisibility, nextButtonVisibility, btnMobileVisibility, progressbarStatus;

nextButtonVisibilityIndexArray = [];
prevButtonVisibilityIndexArray = [];
nextButtonVisibilityIndexArray1 = [];
prevButtonVisibilityIndexArray1 = [];

form = document.getElementById('myForm');
progress = document.getElementById('progress');
prevButtonsArray = document.querySelectorAll('button.backbtn'); /// in desktop view and in mobile view
nextButton = document.getElementById('nextBtn');
buttonclass = document.getElementById('nextprvbtn');
isNextStepVisited = false;
showFormStep(0, 'next');

// Step counter elements
stepCountContainer = document.getElementById('stepCount');
currentStepNumber = document.getElementById('currentStepNumber');
totalStepNumber = document.getElementById('totalStepNumber');

function initializeButtonVisibilityIndexArray(configOptions) {
    nextButtonVisibilityIndexArray = configOptions.nextButtonIndexArray;
    prevButtonVisibilityIndexArray = configOptions.prevButtonIndexArray;
    nextButtonVisibilityIndexArray1 = configOptions.nextButtonIndexArray1;
    prevButtonVisibilityIndexArray1 = configOptions.prevButtonIndexArray1;
    progressbarStatus = configOptions.progressbarStatus || 'step';
    showFormStep(0, 'next');
    updateStepCounter(configOptions.onStepCounterCallback);
}

function nextButtonClick(event, onNavigateCallBack, onStepCounterCallback) {
    if (validateFormStep()) { // Implement this function to validate the current step
        // Move to the next form step
        currentStep = getCurrentFormStep();
        showFormStep(currentStep + 1 <= steps.length ? (currentStep + 1) : steps.length, 'next'); // Implement this function to show the next step
        updateProgressBar('next');
        hideButtonsOnLastStep();
        updateStepCounter(onStepCounterCallback);
        if (!!onNavigateCallBack) {
            onNavigateCallBack(currentStep, 'next');
        }
    }
    isNextStepVisited = true;
}

function prevButtonClick(event, onNavigateCallBack, onStepCounterCallback) {
    currentStep = getCurrentFormStep();
    showFormStep(currentStep - 1 >= 0 ? (currentStep - 1) : 0, 'prev'); // Implement this function to show the previous step
    updateProgressBar('prev');
    hideButtonsOnLastStep();
    updateStepCounter(onStepCounterCallback);
    if (!!onNavigateCallBack) {
        onNavigateCallBack(currentStep, 'prev');
    }
}

// Function to hide "Next" and "Previous" buttons on the last step
function hideButtonsOnLastStep() {
    currentStep = getCurrentFormStep();
    totalSteps = document.getElementsByClassName('form-step').length;
    if (currentStep === totalSteps - 1) {
        nextButton.style.display = 'none';
    } else {
    }
}

// Function to get the current form step
function getCurrentFormStep() {
    steps = Array.from(document.getElementsByClassName('form-step'));
    return steps.findIndex(step => !step.hidden);
}

// Function to show a specific form step
function showFormStep(stepIndex, direction) {
    steps = Array.from(document.getElementsByClassName('form-step'));
    steps.forEach((step, index) => {
        if (index === stepIndex) {
            step.hidden = false;
        } else {
            step.hidden = true;
        }
    });
    prevButtonVisibility = true;
    nextButtonVisibility = true;
    if (stepIndex === 0) {
        prevButtonVisibility = false;
        nextButtonVisibility = true;
    }
    else if (stepIndex == steps.length - 1) {
        prevButtonVisibility = true;
        nextButtonVisibility = false;
    }
    if (direction === 'next') {
        prevButtonVisibility = prevButtonVisibilityIndexArray.indexOf(stepIndex) > -1 ? true : false;
        nextButtonVisibility = nextButtonVisibilityIndexArray.indexOf(stepIndex) > -1 ? true : false;
    }
    else if (direction === 'prev') {
        prevButtonVisibility = prevButtonVisibilityIndexArray1.indexOf(stepIndex) > -1 ? true : false;
        nextButtonVisibility = nextButtonVisibilityIndexArray1.indexOf(stepIndex) > -1 ? true : false;
    }
    prevButtonsArray.item(1).style.display = prevButtonVisibility ? 'block' : 'none';
    nextButton.style.display = nextButtonVisibility ? 'block' : 'none';
}

// Function to update the step counter
function updateStepCounter(stepCounterCallback) {
    currentStep = getCurrentFormStep();
    if (!stepCounterCallback) {
        totalSteps = document.getElementsByClassName('form-step').length;
        if (progressbarStatus === 'percentage') {
            currentStepNumber.textContent = ((currentStep / (totalSteps - 1)) * 100) + '%';
            if (!!totalStepNumber) {
                totalStepNumber.textContent = '100%';
            }
        }
        else {
            currentStepNumber.textContent = (currentStep + 1);
            if (!!totalStepNumber) {
                totalStepNumber.textContent = totalSteps;
            }
        }
    }
    else {
        let progress = stepCounterCallback(currentStep);
        currentStepNumber.textContent = progress !== null ? progress : '';
    }
}

// Function to update the progress bar
function updateProgressBar(direction) {
    currentStep = getCurrentFormStep();
    totalSteps = document.getElementsByClassName('form-step').length;
    progressPercentage = (currentStep / (totalSteps - 1)) * 100;
    progress.style.width = `${progressPercentage}%`;
    if (direction === 'next') {
        setStepperItemAsVisited(currentStep - 1);
    }
    else {
        setStepperItemAsInActive(currentStep + 1);
    }
    setStepperItemAsActive(currentStep);
}

// Function to validate the current form step (implement your validation logic)
function validateFormStep() {
    // Implement your validation logic here
    // Return true if the current step is valid, otherwise return false
    return true;
}

// Initial step counter update
// updateStepCounter();