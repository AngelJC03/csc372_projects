document.addEventListener("DOMContentLoaded", function () {
    fetch("../WWFpart2.xml")
        .then(response => response.text())
        .then(xmlText => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xmlText, "text/xml");

            let output = "<h2>Funding Priorities</h2>";
            let priorities = xmlDoc.getElementsByTagName("priority");

            for (let i = 0; i < priorities.length; i++) {
                let name = priorities[i].getElementsByTagName("name")[0].textContent;
                let description = priorities[i].getElementsByTagName("description")[0].textContent;

                // Log the data before adding it to the page
                console.log("Priority:", name);
                console.log("Description:", description);

                output += `<h3>${name}</h3><p>${description}</p>`;
            }

            document.getElementById("content2").innerHTML = output;
        })
        .catch(error => console.error("Error loading XML:", error));
});
