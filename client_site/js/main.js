/*******
 * FETCHES DATA FROM GOOGLE SHEETS
 * AND CONVERTS THE DATE TO A READABLE FORMAT
 *******/

async function fetchData() {
    const url = "https://script.google.com/macros/s/AKfycbz__jHa1zKYb7d6_sewmCKt-NwOwdPfvleIhTovtsJ2l7uc-ynw1O_Ofc6vgy8CsMJRyQ/exec";

    try {
        const response = await fetch(url);
        const data = await response.json();
        const container = document.getElementById("data-container");
        container.innerHTML = ""; 

        const firstThreeRows = data.slice(1, 4); // Ignora la primera fila (encabezados)

        firstThreeRows.forEach(row => {
            let rawDate = row[0]; 
            const title = row[1];
            const description = row[2];
            const imageUrl = row[4] || "https://via.placeholder.com/100"; 

            // Verifica si la fecha está en formato ISO y la convierte
            let formattedDate;
            if (rawDate.includes("T")) {
                const dateObj = new Date(rawDate);
                formattedDate = dateObj.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });
            } else {
                formattedDate = rawDate; // Si ya está en el formato correcto, se mantiene igual
            }

            const truncatedDescription = description.length > 100
                ? `${description.substring(0, 100)}... <span class="read-more"> <br><br> <a href="pages/in-the-news.html">See more...</a> <br></span>`
                : description;

            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row");

            rowDiv.innerHTML = `
                <div class="image">
                    <img src="${imageUrl}" alt="Article Image">
                </div>
                <div class="content">
                    <div class="date">${formattedDate}</div>
                    <div class="title"><a href="pages/in-the-news.html">${title}</a></div>
                    <div class="description">${truncatedDescription}</div>
                </div>
            `;

            container.appendChild(rowDiv);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("data-container").innerHTML = "<p>Error loading data.</p>";
    }
}

fetchData();   



/*******
 * JAVASCRIPT FOR BURGER MENU
********/

// Select the burger menu
const burgerMenu = document.querySelector('.burger-menu');

// Select the button or element to show the menu
const toggleButton = document.querySelector('.btn'); // Adjust selector as needed

// Add an event listener to toggle the menu
function menutoggle() {
    var menu = document.getElementById("burger-menu-content");
    // Toggle the display of the dropdown
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Hide dropdown
    } else {
        menu.style.display = "block"; // Show dropdown
    }
}

// Hide the dropdown when clicking outside of it
document.addEventListener("click", function(event) {
    var menu = document.getElementById("burger-menu-content");
    var burger = document.querySelector(".burger"); // Burger icon (menu button)

    // Check if the click was outside the menu or burger icon
    if (!burger.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none"; // Hide dropdown if clicked outside
    }
});