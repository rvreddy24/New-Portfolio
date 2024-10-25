function showDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        details.style.animation = "fadeIn 0.5s";
    } else {
        details.style.display = "none";
    }
}

