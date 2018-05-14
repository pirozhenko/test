const modal = document.getElementById('myModal');
const closeModal = document.getElementsByClassName("close")[0];
let countErrors = 0;
const showError = (container, errorMessage) => {
    countErrors++;
    container.className = 'error';

    const msgElem = document.createElement('span');
    msgElem.className = 'error-message';
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

const showModal = () => {
    modal.style.display = 'block';
}

closeModal.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const resetError = (container) => {
    countErrors = 0;
    container.className = '';
    if (container.lastChild.className === "error-message") {
        container.removeChild(container.lastChild);
    }
}

const validate = (form) => {
    const elems = form.elements;

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
    if(countErrors === 0) {
        showModal();
    }
}