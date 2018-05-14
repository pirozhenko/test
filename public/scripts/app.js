'use strict';

var modal = document.getElementById('myModal');
var closeModal = document.getElementsByClassName("close")[0];
var countErrors = 0;
var showError = function showError(container, errorMessage) {
    countErrors++;
    container.className = 'error';

    var msgElem = document.createElement('span');
    msgElem.className = 'error-message';
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
};

var showModal = function showModal() {
    modal.style.display = 'block';
};

closeModal.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

var resetError = function resetError(container) {
    countErrors = 0;
    container.className = '';
    if (container.lastChild.className === "error-message") {
        container.removeChild(container.lastChild);
    }
};

var validate = function validate(form) {
    var elems = form.elements;

    resetError(elems.firstName.parentNode);
    if (!elems.firstName.value) {
        showError(elems.firstName.parentNode, ' add first name please.');
    } else if (elems.firstName.value.match('\'')) {
        showError(elems.firstName.parentNode, ' please write your first name without single quotes.');
    } else if (elems.firstName.value.match('\"')) {
        showError(elems.firstName.parentNode, ' please write your first name without double quotes.');
    }

    resetError(elems.lastName.parentNode);
    if (!elems.lastName.value) {
        showError(elems.lastName.parentNode, ' add last name please.');
    } else if (elems.lastName.value.match('\'')) {
        showError(elems.lastName.parentNode, ' please write your first name without single quotes.');
    } else if (elems.lastName.value.match('\"')) {
        showError(elems.lastName.parentNode, ' please write your first name without double quotes.');
    }

    resetError(elems.picker.parentNode);
    if (!elems.picker.value) {
        showError(elems.picker.parentNode, ' add your birthday.');
    }
    resetError(elems.sex[0].parentNode);
    if (elems.sex[0].checked === false && elems.sex[1].checked === false) {
        showError(elems.sex[0].parentNode, ' select your male please.');
    }

    resetError(elems.email.parentNode);
    if (!elems.email.value) {
        showError(elems.email.parentNode, ' add your email please.');
    }

    resetError(elems.password.parentNode);
    if (!elems.password.value) {
        showError(elems.password.parentNode, ' add password please.');
    }

    resetError(elems.country.parentNode);
    if (!elems.country.value) {
        showError(elems.country.parentNode, ' add your country.');
    }

    resetError(elems.address.parentNode);
    if (!elems.address.value) {
        showError(elems.address.parentNode, ' add your address please.');
    }

    resetError(elems.msg.parentNode);
    if (!elems.msg.value) {
        showError(elems.msg.parentNode, ' add some message here.');
    }
    if (countErrors === 0) {
        showModal();
    }
};
