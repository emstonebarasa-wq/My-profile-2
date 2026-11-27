
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    const isOpen = navLinks.classList.toggle("active");

    if (isOpen) {
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.setAttribute("aria-expanded", "false");
    }

});

function showInterest(interest) {

    const message = document.getElementById("interest-message");

    if (interest === "Technology") {
        message.textContent = "I'm interested in programming, innovation, computers and learning aboutemerging technologies.";
    }

    else if (interest === "Engineering") {
        message.textContent = "I'm interested in robotics, electronics and learning how mechanical systems work.";
    }

    else if (interest === "Business & Economics") {
        message.textContent = "I'm interested in entrepreneurship, learning about market systems and understanding economies.";
    }

    else if (interest === "Gaming") {
        message.textContent = "I enjoy gaming, especially Minecraft and roblox.";
    }

}
