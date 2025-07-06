const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

const savedFormData = JSON.parse(localStorage.getItem(localStorageKey)) || {};

const formData = {
  email: savedFormData.email || "",
  message: savedFormData.message || ""
};

email.value = formData.email;
textarea.value = formData.message;

form.addEventListener("input", evt => {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", evt => {
  evt.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  formData.email = "";
  formData.message = "";
  form.reset();
});