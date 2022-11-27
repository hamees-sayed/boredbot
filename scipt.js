document.querySelector("button").addEventListener("click", renderActivity)

function renderActivity() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(resp => resp.json())
        .then(data => {
            document.getElementById("activity").textContent = `${data.activity}.`
        })
}