const scriptURL = "https://script.google.com/macros/s/AKfycbw0JK9MS4MbGn0P0bgyJJHBTVS3paXxGx4gn4J2keEsv010s47EiLvNW8yCHouFt61rWQ/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const puAlert = document.querySelector(".pu-alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
})
    .then((response) => {
        btnLoading.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        puAlert.classList.toggle("d-none");
        form.reset();
        console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
