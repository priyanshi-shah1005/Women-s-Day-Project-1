import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const womenInCS = {
    "ada lovelace": "Ada Lovelace was the first computer programmer, known for her work on Charles Babbage's Analytical Engine.",
    "grace hopper": "Grace Hopper was a pioneer in computer programming and developed the first compiler.",
    "katherine johnson": "Katherine Johnson was a NASA mathematician whose calculations were critical to space missions.",
    "radia perlman": "Radia Perlman is known as the 'Mother of the Internet' for her work on network protocols.",
    "annie easley": "Annie Easley was a NASA scientist who developed software for space missions.",
    "sister mary kenneth keller": "Sister Mary Kenneth Keller was the first woman in the U.S. to earn a PhD in computer science.",
    "margaret hamilton": "Margaret Hamilton developed software for NASA's Apollo missions.",
    "barbara liskov": "Barbara Liskov introduced the Liskov Substitution Principle in object-oriented programming.",
    "marissa mayer": "Marissa Mayer was the first female engineer at Google and later became Yahoo’s CEO."
};

app.post("/chat", (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    let botResponse = "I'm not sure how to respond. Can you ask about a woman in CS?";

    for (const [name, fact] of Object.entries(womenInCS)) {
        if (userMessage.includes(name)) {
            botResponse = fact;
            break;
        }
    }

    res.json({ reply: botResponse });
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
