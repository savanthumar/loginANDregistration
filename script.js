function handleSubmit(e) {
  e.preventDefault(); // prevent actual form submission

  const form = document.getElementById("registrationForm");
  const inputs = form.querySelectorAll("input");
  let valid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      valid = false;
      input.parentElement.classList.add("error");
      input.parentElement.querySelector("small").textContent = "Required";
    } else {
      input.parentElement.classList.remove("error");
      input.parentElement.classList.add("success");
      input.parentElement.querySelector("small").textContent = "✓";
    }
  });

  if (valid) {
    // Redirect to thanks page after validation
    window.location.href = "thanks.html";
  } else {
    alert("Please fill all fields correctly.");
  }
}
