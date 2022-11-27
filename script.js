document.querySelector("button").addEventListener("click", renderActivity)

function renderActivity() {
    fetch("https://www.boredapi.com/api/activity")
        .then(resp => resp.json())
        .then(data => {
            document.getElementById("activity").textContent = `${data.activity}.`
        })
}