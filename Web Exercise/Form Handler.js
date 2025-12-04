
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        Name: document.getElementById("Name").value,
        Surname: document.getElementById("Surname").value,
        Gender: document.querySelector('input[name="gender"]:checked').value,
        Race: document.getElementById("Race").value,
        Email: document.getElementById("Email").value,
        Phone: document.getElementById("Phone").value,
        Address: document.getElementById("Address").value,
    };

    console.log("Sending the following data:", formData);

    emailjs.send("service_3ov41hh", "template_tw30rvv", formData)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Thank you for contacting us! We have received your inquiry and will get back to you soon.");
        }, function(error) {
            console.error("Failed to send email:", error);
            alert("There was an error sending your inquiry. Please try again later.");
        });
});
