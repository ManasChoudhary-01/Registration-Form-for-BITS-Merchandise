let form = document.getElementById('form');

// Function to display error messages
const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".user-details").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
  e.preventDefault();

  // Retrieving input elements
  const fullnameInput = document.getElementById("name");
  const emailInput = document.getElementById("email_field");
  const phonenoInput = document.getElementById("phone_no");
  const bitsidInput = document.getElementById("bits_id");

  // Getting trimmed values from input fields
  const fullname = fullnameInput.value.trim();
  const email = emailInput.value.trim();
  const phone1 = phonenoInput.value.trim();
  const bits1 = bitsidInput.value.trim();

  // Regular expression pattern
  const fullnamePattern = /^[A-Za-z ]{5,50}$/;
  const emailPattern = /^[A-Za-z\._\-0-9]*[@]pilani\.bits-pilani\.ac\.in$/;
  const bitsIdPattern = /^[A-Z,0-9]{13,15}$/;
  const phone1Pattern = /([+][9][1][ ])?\d{10}/;

  // Clearing previous error messages
  document.querySelectorAll(".user-details .error").forEach(field => field.classList.remove("error"));
  document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

  // Performing validation checks
  if (!fullnamePattern.test(fullname)) {
    showError(fullnameInput, "Enter your Full Name");
  }
  if (!emailPattern.test(email)) {
    showError(emailInput, "Enter a valid email address");
  }
  if (!phone1Pattern.test(phone1)) {
    showError(phonenoInput, "Enter a valid Phone no");
  }
  if (!bitsIdPattern.test(bits1)) {
    showError(bitsidInput, "Enter your valid BITS ID");
  }

  // Checking for any remaining errors before form submission
  const errorInputs = document.querySelectorAll(".user-details .error");
  if (errorInputs.length > 0) return;


  // Submitting the form
  form.submit();
}

// Handling form submission event
form.addEventListener("submit", handleFormData);


// Function to store form data in Internal Storage
form.addEventListener('submit', function (event) {
  event.preventDefault();


  const errorInputs = document.querySelectorAll(".user-details .error");
  if (errorInputs.length > 0) return;
  form.submit();

  // Retrieving input elements
  let name = document.getElementById("name").value;
  let email_field = document.getElementById("email_field").value;
  let phone_no = document.getElementById("phone_no").value;
  let BITS_ID = document.getElementById("bits_id").value;
  let hostel = document.getElementById("selecthostel").value;
  let hoodie = document.querySelector('input[name="Hoodie"]:checked').value;
  let tshirt = document.querySelector('input[name="T-shirt"]:checked').value;

  // Console the input values
  console.log('Name :', name);
  console.log('Email :', email_field);
  console.log('Phone No :', phone_no);
  console.log('BITS_ID:', BITS_ID);
  console.log('Hostel :', hostel);
  console.log('Hoodie Size:', hoodie);
  console.log('T-shirt Size :', tshirt);


  // Creating Array to store data and pushing the values
  let user_record = new Array();
  user_record = JSON.parse(localStorage.getItem("Users info")) ? JSON.parse(localStorage.getItem("Users info")) : []
  if (user_record.some((v) => { return v.BITS_ID == BITS_ID })) {
    alert("Duplicate Data");
  }
  else {
    user_record.push({
      "Name": name,
      "Email": email_field,
      "Phone No": phone_no,
      "BITS_ID": BITS_ID,
      "Hostel": hostel,
      "Hoodie Size": hoodie,
      "T-shirt Size": tshirt

    })
    alert("Your Response has been recorded.");

    localStorage.setItem("Users info", JSON.stringify(user_record));
  }
})

let btn2 = document.querySelector("#btn2");
btn2.onclick = () => {
  alert("Your Form has been reset.");
}



