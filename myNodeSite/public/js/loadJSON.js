document.addEventListener("DOMContentLoaded", function () {
    fetch("../pages/Employees.json") // Adjust based on your file structure
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            let content = document.querySelector(".staff-container"); // Fixed selector
            let output = `<h2></h2>`;

            data.forEach(member => {
                output += `
                    <div class="staff-member">
                        <img src="../images/staff-photos/${member['employee-name'].replace(/\s+/g, '-').toLowerCase()}.webp" 
                             alt="${member['employee-name']}" class="staff-photo">
                        <div class="staff-caption">
                            <h3>${member['employee-name']}</h3>
                            <p>${member['occupation']}</p>
                            <h1 class="text-content-staff-page">${member['employee-desc']}</h1>
                        </div>
                    </div>`;
            });

            content.innerHTML = output;
        })
        .catch(error => console.error("Error loading JSON:", error));
});
