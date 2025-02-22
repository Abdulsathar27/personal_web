function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_0rfgn5d";
    const templateID = "template_5p80ozo";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            // Clear input fields after successful email sending
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            console.log("Email sent successfully:", res);
            alert("Your message has been sent successfully!");
        })
        .catch((err) => {
            console.error("Failed to send email:", err);
            alert("Oops! Something went wrong. Please try again.");
        });
}

