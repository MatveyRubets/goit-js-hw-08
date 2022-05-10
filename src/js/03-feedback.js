const SAVED_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

function onSaveInfo(e) {
  const messageInfo = {
    email: e.currentTarget.elements.email.value,
    message: e.currentTarget.elements.message.value,
  };

  localStorage.setItem(SAVED_KEY, JSON.stringify(messageInfo));
}

function populateForm() {
  const savedMessage = localStorage.getItem(SAVED_KEY);

  if (savedMessage !== null) {
    const localEmail = JSON.parse(savedMessage).email;
    const localMessage = JSON.parse(savedMessage).message;

    if (savedMessage) {
      refs.input.value = localEmail;
      refs.textarea.value = localMessage;
    }
  }
}

populateForm();

function onSubmitForm(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(SAVED_KEY);
}

refs.form.addEventListener('input', onSaveInfo);
refs.form.addEventListener('submit', onSubmitForm);