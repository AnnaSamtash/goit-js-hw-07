const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let result = {};
  const loginForm = event.target;
  result.email = loginForm.elements.email.value.trim();
  result.password = loginForm.elements.password.value.trim();
  
  if (result.email === "" || result.password === "") {
    alert ('All form fields must be filled in');
  }
  else {
     console.log(result); 
    }
  
  loginForm.reset();
}

