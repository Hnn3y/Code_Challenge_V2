const loadButton = document.getElementById("load-countries");
const countriesContainer = document.getElementById("countries-container");
const errorMessage = document.getElementById("error-message");

const fetchCountries = () => {
    errorMessage.textContent = "";
    countriesContainer.innerHTML = "";

    // Fetch data from the REST Countries API
    fetch("https://restcountries.com/v3.1/all")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then((countries) => {
            countries.forEach((country) => {
                const countryElement = document.createElement("div");
                countryElement.classList.add("country");
                countryElement.innerHTML = `
                    <img src="${country.flags.png}" alt="${country.name.common} flag" width="100">
                    <h3>${country.name.common}</h3>
                    <p>Population: ${country.population.toLocaleString()}</p>
                `;
                countriesContainer.appendChild(countryElement);
            });
        })
        .catch((error) => {
            errorMessage.textContent = "Error: " + error.message;
        });
};

loadButton.addEventListener("click", fetchCountries);
