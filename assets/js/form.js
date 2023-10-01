const scriptURL =
  "https://script.google.com/macros/s/AKfycbz7_AbgZNtpduv5EyktFJYVGMzljz3UCYT7dXsA6TMfQ-8Mnk3HA97GZTa14P4o8xCRUA/exec";
const form = document.forms["project-contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
