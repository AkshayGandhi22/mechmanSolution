'use strict';
var firstNameInput, lastNameInput, emailInput, phoneNumberInput, productsOptions, messageInput;

// First Name Input
firstNameInput = {
    id: 'first-name',
    name: 'firstname',
    autocomplete: 'on',
    placeHolder: 'First Name',
    required: true,
    maxLength: 50,
    minLength: 0,
    min: 0,
    max: 0,
    pattern: '',
    type: 'text',
    inputMode: 'string',
    cssClass: 'form-control',
    label: 'First Name *',
    labelcssClass: '',
    validationOptions: {
        labelCssClass: 'validation_error',
        messages: {
            required: 'Please answer this question to continue',
            minLength: 'First name is too short',
            maxLength: '',
            pattern: 'First Name is not valid',
            type: 'First Name is not valid',
            min: '',
            max: ''
        }
    }
};
createTextboxInput(document.querySelector('#first_name'), firstNameInput);

// Last Name Input
lastNameInput = {
    id: 'last-name',
    name: 'lastname',
    autocomplete: 'on',
    placeHolder: 'Last name',
    required: true,
    maxLength: 50,
    minLength: 0,
    min: 0,
    max: 0,
    pattern: '',
    type: 'text',
    inputMode: 'string',
    cssClass: 'form-control',
    label: 'Last Name *',
    labelcssClass: '',
    validationOptions: {
        labelCssClass: 'validation_error',
        messages: {
            required: 'Please answer this question to continue',
            minLength: 'Last name is too short',
            maxLength: '',
            pattern: 'Last Name is not valid',
            type: 'Last Name is not valid',
            min: '',
            max: ''
        }
    }
};
createTextboxInput(document.querySelector('#last_name'), lastNameInput);

// Email Input
emailInput = {
    id: 'email-input',
    name: 'email',
    autocomplete: 'on',
    placeHolder: 'email@email.com',
    required: true,
    maxLength: 80,
    minLength: 0,
    min: 0,
    max: 0,
    pattern: '',
    type: 'email',
    inputMode: 'string',
    cssClass: 'form-control',
    label: 'Email Address *',
    labelcssClass: '',
    validationOptions: {
        labelCssClass: 'validation_error',
        messages: {
            required: 'Please answer this question to continue',
            minLength: 'Email is incorrect',
            maxLength: '',
            pattern: 'Email is not valid',
            type: 'Email is not valid',
            min: '',
            max: ''
        }
    }
};
createTextboxInput(document.querySelector('#email_id'), emailInput);

// Phone Number Input
phoneNumberInput = {
    id: 'phone-number',
    name: 'phone',
    autocomplete: 'on',
    placeHolder: 'Phone number',
    required: true,
    maxLength: 14,
    minLength: 0,
    min: 0,
    max: 0,
    pattern: '',
    type: 'tel',
    inputMode: 'string',
    cssClass: 'form-control',
    label: 'Phone number',
    labelcssClass: '',
    validationOptions: {
        labelCssClass: 'validation_error',
        messages: {
            required: 'Please answer this question to continue',
            minLength: '',
            maxLength: '',
            pattern: 'Phone Number is not valid',
            type: 'Phone Number is not valid',
            min: '',
            max: ''
        }
    }
};
createTextboxInput(document.querySelector('#phone_number'), phoneNumberInput);

// currently Employed checkbox
productsOptions = {
    source: [{ itemId: 'autocad', itemText: 'Autocad', itemImage: '' }, { itemId: 'fusion360', itemText: 'Fusion 360', itemImage: '' }, { itemId: 'powerShape', itemText: 'Power Shape', itemImage: '' }, { itemId: 'powermill', itemText: 'Powermill', itemImage: '' }, { itemId: 'partMaker', itemText: 'Part Maker', itemImage: '' }, { itemId: 'featurecam', itemText: 'Featurecam', itemImage: '' }],
    cssulClass: 'checkboxLayout',
    required: true,
    layout: 'vertical', // 'vertical'
    autoWrapItems: true,
    itemCssClass: 'custom_checkbox',
    itemLabelCssClass: 'checkboxlabel',
    itemImageCssClass: '',
    selectedItemCssClass: '',
    groupName: 'productsForm',
    checkBoxvalidationOptions: {
        labelCssClass: 'validation_error',
        messages: {
            required: 'Please answer this question to continue',
        }
    },
    //checkboxbuttonChangeCallback: smokedcheckboxChange
}
checkboxInput(document.querySelector('#productsForm'), productsOptions);

// Email Input
messageInput = {
    id: 'message-Form',
    name: 'email',
    autocomplete: 'on',
    placeHolder: 'Write your text...',
    required: true,
    maxLength: '',
    minLength: 0,
    min: 0,
    max: 0,
    pattern: '',
    type: 'textarea',
    inputMode: 'string',
    cssClass: 'form-control',
    label: 'Message *',
    labelcssClass: '',
    validationOptions: {
        labelCssClass: 'validation_error',
        messages: {
            required: 'Please answer this question to continue',
            minLength: '',
            maxLength: '',
            pattern: '',
            type: '',
            min: '',
            max: ''
        }
    }
};
createTextboxInput(document.querySelector('#messageForm'), messageInput);


// Form Submisssion & vadlidations
function submitForm(event) {
    event.preventDefault();

    let isFirstNameValid, isLastNameValid,isPhoneValid, isEmailValid, isProductsValid, isMessageValid;

    isFirstNameValid = checkValidation(document.querySelector('#first_name'), firstNameInput);
    isLastNameValid = checkValidation(document.querySelector('#last_name'), lastNameInput);
    isPhoneValid = checkValidation(document.querySelector('#phone_number'), phoneNumberInput);
    isEmailValid = checkValidation(document.querySelector('#email_id'), emailInput);
    isProductsValid = checkboxcheckValidation(document.querySelector('#productsForm'), productsOptions);
    isMessageValid = checkValidation(document.querySelector('#messageForm'), messageInput);

    let isValid = isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isProductsValid && isMessageValid;

    if (isValid) {
        let firstName = document.getElementById('first-name').value;
        let lastName = document.getElementById('last-name').value;
        let phoneNumber = document.getElementById('phone-number').value;
        let emailAddress = document.getElementById('email-input').value;
        let autocad =  document.getElementById('autocad').checked ? true : false;
        let fusion360 =  document.getElementById('fusion360').checked ? true : false;
        let powerShape =  document.getElementById('powerShape').checked ? true : false;
        let powermill =  document.getElementById('powermill').checked ? true : false;
        let partMaker =  document.getElementById('partMaker').checked ? true : false;
        let featurecam =  document.getElementById('featurecam').checked ? true : false;
        let message = document.getElementById('message-Form').value;
     
        var messageBody = "Name: " + firstName +
        "<br/> Last Name: " + lastName +
        "<br/> Email: " + emailAddress +
        "<br/> Phone Number: " + phoneNumber +"<br/>" +
        "<br/> Product Selected" +
        "<br/> Autocad: " + autocad +
        "<br/> Fusion 360: " + fusion360 +
        "<br/> Power Shape: " + powerShape +
        "<br/> Powermill: " + powermill +
        "<br/> Part Maker: " + partMaker +
        "<br/> Featurecam: " + featurecam +"<br/>" +
        "<br/> Message: " + message;
        Email.send({
        Host : "smtp.elasticemail.com",
        Username : "akshay.gandhi84@gmail.com",
        Password : "5044AF2537BAD032D6A42A75B31B1D8B6DB7",
        To : 'akshay.gandhi84@gmail.com',
        From : "akshay.gandhi84@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
     }).then(
      message => {
          if(message=='OK'){
              swal("Secussful", "You clicked the button!", "success");
              document.getElementById("myForm").reset();
          }
          else{
              swal("Error", "You clicked the button!", "error");
          }
      }
     );       
    }
    return isValid;
}
