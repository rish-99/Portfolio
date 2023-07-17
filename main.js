var Typed = new Typed('.text', {
    strings: ["Front-end Developer", "Web Designer", "Graphic Designer", "Photographer", "Volunteer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');

    console.log('Menu toggled!');
}

async function sendEmail() {
    try {
        await Email.send({
            Host: "smtp.gmail.com",
            Username: "risinimethmini@gmail.com",
            Password: "19990206RmG1022",
            To: 'risinimethmini@gmail.com',
            From: document.getElementById("email").value,
            Subject: "This is the subject",
            Body: "Name: " + document.getElementById("name").value +
                "<br>Email: " + document.getElementById("email").value +
                "<br>Subject: " + document.getElementById("subject").value +
                "<br>Message: " + document.getElementById("message").value +
                "<br>",
        });

        alert("Message sent successfully");
        console.log('Email sent!');
    } catch (error) {
        console.error("An error occurred while sending the email:", error);
    }
}
