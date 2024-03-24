// Handling errors
function handleErrors(response) {
    if (!response.ok) {
        document.getElementById("serverStatus").innerHTML = "";
        document.getElementById("serverStatusM").innerHTML = "";
        document.getElementById("serverLogoName").classList.remove("hidden");
    }
    return response;
}

// Fetch API, mcsrvstat
fetch("https://api.mcstatus.io/{% if site.useBedrockForOnlineStatus == true %}bedrock/{% endif %}v2/status/java/{{ site.serverIP }}")
    .then(handleErrors)
    .then(response => {
        return response.json();
    })
