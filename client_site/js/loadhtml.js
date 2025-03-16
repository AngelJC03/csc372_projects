document.addEventListener("DOMContentLoaded", function () {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { // Request complete
            if (xhr.status === 200) { // Success
                document.getElementById("content").innerHTML = xhr.responseText;
            } else {
                console.error("Error loading content: " + xhr.status);
            }
        }
    };

    // Directly access "pages/what-we-fund.html" (no need for "../")
    xhr.open("GET", "../WWFpart1.html", true);
    xhr.send();
});
