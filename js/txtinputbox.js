function createTextboxInput(textboxInputControlWrapper, textboxInputOptions) {
    let textboxInputContainer, textboxLabel, textboxInput, validationMsgContainer;

    textboxInputContainer = document.createElement('div');
    textboxInputContainer.className = "input_box";
    textboxInputControlWrapper.appendChild(textboxInputContainer);
    
    // Label Declaration
    if (!!textboxInputOptions.label) {
        textboxLabel = document.createElement('label');
        textboxLabel.setAttribute("for", textboxInputOptions.id);
        textboxLabel.className = 'form-label';
        textboxLabel.innerHTML = (textboxInputOptions.label);
        textboxInputContainer.appendChild(textboxLabel);
        if (!!textboxInputOptions.labelcssClass) {
            textboxLabel.classList.add(textboxInputOptions.labelcssClass);
        }
    }

    // Input Declaration
    if (textboxInputOptions.type === 'text' || textboxInputOptions.type === 'email' || textboxInputOptions.type === 'tel' || textboxInputOptions.type === 'password' || textboxInputOptions.type === 'number' || textboxInputOptions.type === 'string') {
        textboxInput = document.createElement('input');
        textboxInput.setAttribute("type", textboxInputOptions.type);
    }
    else if (textboxInputOptions.type === 'textarea') {
        textboxInput = document.createElement('textarea');
        textboxInput.setAttribute("rows", textboxInputOptions.rows ? textboxInputOptions.rows : 5);
    }

    // Input & Textarea Combine Attribute set
    textboxInput.setAttribute("id", textboxInputOptions.id);
    textboxInput.setAttribute("name", textboxInputOptions.name);
    textboxInput.setAttribute("class", "form-control");

    if (!!textboxInputOptions.cssClass) {
        textboxInput.classList.add(textboxInputOptions.cssClass);
    }

    if (!!textboxInputOptions.placeHolder) {
        textboxInput.setAttribute("placeholder", textboxInputOptions.placeHolder);
    }
    textboxInputContainer.appendChild(textboxInput);

    // Bind Validations
    if (textboxInputOptions.required) {
        textboxInput.setAttribute("required", true);
    }

    if (textboxInputOptions.type === 'text' || textboxInputOptions.type === 'email' || textboxInputOptions.type === 'tel' || textboxInputOptions.type === 'password' || textboxInputOptions.type === 'textarea' || textboxInputOptions.type === 'string') {
        if (!!textboxInputOptions.maxLength) {
            textboxInput.setAttribute("maxlength", textboxInputOptions.maxLength);
        }
        if (!!textboxInputOptions.minLength) {
            textboxInput.setAttribute("minlength", textboxInputOptions.minLength);
        }
    }

    if (textboxInputOptions.type === 'number') {
        if (!!textboxInputOptions.min) {
            textboxInput.setAttribute("min", textboxInputOptions.min);
        }
        if (!!textboxInputOptions.max) {
            textboxInput.setAttribute("max", textboxInputOptions.max);
        }
    }

    if (!!textboxInputOptions.pattern) {
        textboxInput.setAttribute("pattern", textboxInputOptions.pattern);
    }

    if (!!textboxInput) {
        textboxInput.addEventListener('input', function () {
            checkValidation(textboxInputControlWrapper, textboxInputOptions);
        });
    }

    // Error Message Declaration
    validationMsgContainer = document.createElement('div');
    validationMsgContainer.className = "invalid-feedback";

    if (!!textboxInputOptions.validationOptions && !!textboxInputOptions.validationOptions.labelCssClass) {
        validationMsgContainer.classList.add(textboxInputOptions.validationOptions.labelCssClass);
    }

    textboxInputControlWrapper.appendChild(validationMsgContainer);
}

// Validation checking
function checkValidation(textboxInputControlWrapper, textboxInputOptions) {
    let textboxInput, textboxInputValidity, validationMsg, validationMsgDiv;

    textboxInput = document.querySelector("[id='" + textboxInputOptions.id + "']");
    textboxInputValidity = textboxInput.validity;
    validationMsg = '';

    // Validation Conditions
    if (textboxInputValidity.valid === false && !!textboxInputOptions.validationOptions && !!textboxInputOptions.validationOptions.messages) {
        if (textboxInput.type === 'text' || textboxInputOptions.type === 'email' || textboxInputOptions.type === 'tel' || textboxInputOptions.type === 'password' || textboxInputOptions.type === 'number' || textboxInputOptions.type === 'textarea' || textboxInputOptions.type === 'string') {
            if (textboxInputValidity.valueMissing) {
                validationMsg = textboxInputOptions.validationOptions.messages.required;
            }
            else if (textboxInputValidity.tooLong) {
                validationMsg = textboxInputOptions.validationOptions.messages.maxLength;
            }
            else if (textboxInputValidity.tooShort) {
                validationMsg = textboxInputOptions.validationOptions.messages.minLength;
            }
            else if (textboxInputValidity.patternMismatch) {
                validationMsg = textboxInputOptions.validationOptions.messages.pattern;
            }
        }

        if (textboxInput.type === 'number') {
            if (textboxInputValidity.rangeUnderflow) {
                validationMsg = textboxInputOptions.validationOptions.messages.min;
            }
            else if (textboxInputValidity.rangeOverflow) {
                validationMsg = textboxInputOptions.validationOptions.messages.max;
            }
        }

        if (textboxInputValidity.typeMismatch) {
            validationMsg = textboxInputOptions.validationOptions.messages.type;
        }
    }

    let isValid = textboxInputValidity.valid;
    if (!!textboxInputValidity.valueMissing) {
        isValid = validateInputs(textboxInputOptions, textboxInput.value);
        if (!isValid) {
            textboxInput.classList.add("isinvalid-regex");
            validationMsg = textboxInputOptions.validationOptions.messages.pattern;
        } else {
            textboxInput.classList.remove("isinvalid-regex");
        }
    }

    if (!!textboxInputOptions.validationOptions && !!textboxInputOptions.validationOptions.validator && typeof textboxInputOptions.validationOptions.validator === 'function') {
        isValid = textboxInputOptions.validationOptions.validator(textboxInput.value);
        validationMsg = textboxInputOptions.validationOptions.messages.pattern;
    }

    // Error Message
    validationMsgDiv = textboxInputControlWrapper.getElementsByClassName('invalid-feedback')[0];
    validationMsgDiv.style.display = isValid === false ? 'block' : 'none';
    validationMsgDiv.innerHTML = isValid === false ? validationMsg : '';

    return isValid;
}

function validateInputs(textboxInputOptions, inputValue) {
    let isValid;

    if (textboxInputOptions.type === 'tel') {
        const PhoneNumberRegex = /^(((\+44\s?|0044\s?)?|(\(?0))((2[03489]\)?\s?\d{4}\s?\d{4})|(1[23456789]1\)?\s?\d{3}\s?\d{4})|(1[23456789][234578][0234679]\)?\s?\d{6})|(1[2579][0245][0467]\)?\s?\d{5})|(11[345678]\)?\s?\d{3}\s?\d{4})|(1[35679][234689]\s?[46789][234567]\)?\s?\d{4,5})|([389]\d{2}\s?\d{3}\s?\d{4})|([57][0-9]\s?\d{4}\s?\d{4})|(500\s?\d{6})|(7[456789]\d{2}\s?\d{6})))$/;
        isValid = PhoneNumberRegex.test(inputValue);
    }
    else if (textboxInputOptions.type === 'email') {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = emailRegex.test(inputValue);
    }
    else if (textboxInputOptions.type === 'string') {
        const postcodeRegex = /^[A-Za-z0-9]*$/;
        isValid = postcodeRegex.test(inputValue);
    }
    else if (textboxInputOptions.type === 'text') {
        const textRegex = /^[A-Za-z]+$/;
        isValid = textRegex.test(inputValue);
    }

    return isValid;
}