/* =========================================
   AI 20 — APP.JS
========================================= */


/* =========================================
   START AI BUTTON
========================================= */

function startAI() {

    const aiSection = document.getElementById("ai");

    if (aiSection) {
        aiSection.scrollIntoView({
            behavior: "smooth"
        });
    }

}


/* =========================================
   EXPLORE FEATURES BUTTON
========================================= */

function scrollToFeatures() {

    const features = document.getElementById("features");

    if (features) {
        features.scrollIntoView({
            behavior: "smooth"
        });
    }

}


/* =========================================
   ENTER KEY
========================================= */

function handleEnter(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

}


/* =========================================
   SEND MESSAGE
========================================= */

function sendMessage() {

    const input =
        document.getElementById("userInput");

    const messages =
        document.getElementById("chatMessages");

    if (!input || !messages) {
        return;
    }

    const userText =
        input.value.trim();

    if (userText === "") {
        return;
    }


    /* USER MESSAGE */

    const userMessage =
        document.createElement("div");

    userMessage.className =
        "message user-message";

    userMessage.textContent =
        userText;

    messages.appendChild(userMessage);


    /* CLEAR INPUT */

    input.value = "";


    /* SCROLL DOWN */

    messages.scrollTop =
        messages.scrollHeight;


    /* AI THINKING */

    const thinking =
        document.createElement("div");

    thinking.className =
        "message ai-message";

    thinking.textContent =
        "✨ AI 20 is thinking...";

    messages.appendChild(thinking);

    messages.scrollTop =
        messages.scrollHeight;


    /* DEMO AI RESPONSE */

    setTimeout(function () {

        thinking.remove();

        const aiMessage =
            document.createElement("div");

        aiMessage.className =
            "message ai-message";

        aiMessage.textContent =
            generateResponse(userText);

        messages.appendChild(aiMessage);

        messages.scrollTop =
            messages.scrollHeight;

    }, 900);

}


/* =========================================
   DEMO AI RESPONSE
========================================= */

function generateResponse(message) {

    const text =
        message.toLowerCase();


    /* HELLO */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey") ||
        text.includes("नमस्ते") ||
        text.includes("हेलो")
    ) {

        return "👋 Hello! I'm AI 20. I'm ready to help you.";

    }


    /* NAME */

    if (
        text.includes("your name") ||
        text.includes("नाम")
    ) {

        return "🤖 मेरा नाम AI 20 है — आपका smart AI assistant.";

    }


    /* HELP */

    if (
        text.includes("help") ||
        text.includes("मदद")
    ) {

        return "✨ बिल्कुल! आप मुझसे कोई भी सवाल पूछ सकते हैं।";

    }


    /* WHO ARE YOU */

    if (
        text.includes("who are you") ||
        text.includes("तुम कौन")
    ) {

        return "🧠 मैं AI 20 हूँ, आपका intelligent digital assistant.";

    }


    /* TIME */

    if (
        text.includes("time") ||
        text.includes("समय")
    ) {

        return "⏰ अभी अपने device की clock देखकर सही local time जान सकते हैं।";

    }


    /* DEFAULT RESPONSE */

    return "🤖 Interesting question! AI 20 अभी demo mode में है. अगला step जोड़ने के बाद इसे real AI API से connect किया जा सकता है.";

}


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "🚀 AI 20 is ready!"
        );

    }
);
