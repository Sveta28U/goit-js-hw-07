const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  if (!email.value.trim() || !password.value.trim()) {
    return alert("All form fields must be filled in");
  }
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  e.target.reset();
});
