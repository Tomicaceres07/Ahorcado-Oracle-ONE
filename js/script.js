
// Initialize Variables



// Start Screen
document.getElementById("button-start").addEventListener("click", () => {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "flex";
})

document.getElementById("button-add").addEventListener("click", () => {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("add-screen").style.display = "initial";
})

// Add Screen

document.getElementById("button-save").addEventListener("click", () => {

    const textarea = document.getElementById("textarea");
    const value = textarea.value;
    if (value.length >= 1) {

        // 
        document.getElementById("game-screen").style.display = "flex";
        document.getElementById("add-screen").style.display = "none";
    } else {
        document.getElementById("paragraph-error").innerHTML = "No ingresaste ninguna palabra"
    }
})

document.getElementById("button-cancel").addEventListener("click", () => {
    document.getElementById("start-screen").style.display = "flex";
    document.getElementById("add-screen").style.display = "none";
})


// Game Screen