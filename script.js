const video = document.getElementById("video");
const h1 = document.getElementById("h");
const input = document.getElementById("solutia");
const startButton = document.getElementById("start");

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    video.style.display = "inline";
    input.style.display = "inline";
    video.play();
});

setTimeout(() => {
    video.pause();
    h1.textContent = "Buna seara! Doamna Mihaita Boss, care este cuvantul?";
    input.disabled = false;
}, 23000);

input.addEventListener("input", () => {
    let value = input.value.toLowerCase().replace(/-/g, '').replace(/ /g, '');
    if (value === "luamiaicoaieleingura" || value === "luamiaicuaieleingura") {
        h1.textContent = "Felicitari!";
        h1.style.color = "green";
        video.play();
        input.disabled = true;
    } else {
        h1.textContent = "Gresit! Mai incercati.";
    }
});
