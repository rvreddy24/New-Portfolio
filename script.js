function showDetails(projectId, buttonId) {
    const details = document.getElementById(projectId);
    const button = document.getElementById(buttonId);

    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        button.innerHTML = '<span>Less Details</span> <i class="fas fa-chevron-up"></i>';
    } else {
        details.style.display = "none";
        button.innerHTML = '<span>More Details</span> <i class="fas fa-chevron-right"></i>';
    }
}
