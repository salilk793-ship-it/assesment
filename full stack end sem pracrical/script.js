addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const input = document.querySelector("#input");
    const output = document.querySelector("#output");
});


document.getElementById("showDateTimeBtn").addEventListener("click", () => {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("dateTimeDisplay").innerHTML = `<p>Current Date & Time: ${dateTimeString}</p>`;
});