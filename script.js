document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".chat-container").style.display = "flex";
    }, 3000);
});

function sendMessage() {
    let inputField = document.getElementById("chat-input");
    let userMessage = inputField.value.trim();
    if (userMessage === "") return;

    displayMessage(userMessage, "user");
    setTimeout(() => {
        botResponse(userMessage);
    }, 1000);
    inputField.value = "";
}

function displayMessage(message, sender) {
    let chatMessages = document.querySelector(".chat-messages");
    let messageElement = document.createElement("div");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botResponse(message) {
    let lowerMessage = message.toLowerCase();
    let response = "I'm not sure how to respond to that, but I'm always learning!";

    // Greetings
    if (["hi", "hello", "good morning", "hey"].some(greeting => lowerMessage.includes(greeting))) {
        response = "It's a good day to know about women in computer science! Ask me about Ada Lovelace, Grace Hopper, or any pioneering woman in tech!";
    }

    // Women in Computer Science
    const womenInCS = {
        "who is ada lovelace": "Ada Lovelace was the world's first programmer! She wrote the first algorithm for Charles Babbage's Analytical Engine in the 1840s.",
        "who is grace hopper": "Grace Hopper was a computer scientist and U.S. Navy Rear Admiral. She developed the first compiler and helped create COBOL, an early programming language.",
        "who is hedy lamarr": "Hedy Lamarr was not just a Hollywood actress but also an inventor! She co-developed frequency hopping technology, which led to WiFi, GPS, and Bluetooth.",
        "who is margaret hamilton": "Margaret Hamilton led the software engineering team at NASA that developed the guidance system for the Apollo moon landings.",
        "who is radia perlman": "Radia Perlman is known as the 'Mother of the Internet' for creating the Spanning Tree Protocol (STP), which helped shape modern networking.",
        "who is frances allen": "Frances Allen was a pioneer in compiler optimization and the first woman to win the Turing Award, the highest honor in computer science.",
        "who is katherine johnson": "Katherine Johnson was a mathematician at NASA whose calculations were crucial to the success of early space missions, including Apollo 11.",
        "who is barbara liskov": "Barbara Liskov is a computer scientist known for her contributions to object-oriented programming and distributed computing.",
        "who is anita borg": "Anita Borg founded the Institute for Women and Technology and the Grace Hopper Celebration, advocating for women in computing.",
        "who is evelyn granville": "Evelyn Granville was one of the first African-American women to earn a Ph.D. in mathematics and contributed to NASA's space programs.",
        "who is jean bartik": "Jean Bartik was one of the original programmers of the ENIAC, the world's first general-purpose electronic computer.",
        "who is sophie wilson": "Sophie Wilson designed the ARM architecture, which powers most of today’s mobile devices, including smartphones and tablets.",
        "who is mary allen wilkes": "Mary Allen Wilkes was a pioneering computer scientist who designed the software for the LINC, the first personal computer.",
        "who is lynn conway": "Lynn Conway revolutionized microchip design and helped pave the way for modern VLSI technology."
    };

    // Check if the user asked about a woman in CS
    for (let key in womenInCS) {
        if (lowerMessage.includes(key)) {
            response = womenInCS[key];
            break;
        }
    }

    displayMessage(response, "bot");
}
