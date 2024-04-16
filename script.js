const renderCountries = (countries) => {
    const htmlString = countries.map((country, index) => `
        <div class="country">
            <img src="${country.flag}" alt="${country.name}" class="flag">
            <div class="details">
                <h2>${country.name}</h2>
                <p>Capital: ${country.capital.join(', ')}</p>
                <button class="delete-btn" data-index="${index}">Delete</button>
                <button class="info-btn" data-index="${index}">Info</button>
                <div class="map" style="display: none;">
                    <iframe src="${country.map}" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('countries-list').innerHTML = htmlString;

    //gklakebze event liseneris damateba 
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', buttonremove);
    });

    const infoButtons = document.querySelectorAll('.info-btn');
    infoButtons.forEach(button => {
        button.addEventListener('click', infoshow);
    });
};


const buttonremove = (event) => {
    const index = event.target.dataset.index;
    countries.splice(index, 1); 
    renderCountries(countries); 
};

const infoshow = (event) => {
    const index = event.target.dataset.index;
    const mapElement = document.querySelectorAll('.map')[index];
    mapElement.style.display = 'block';
};

renderCountries(countries);
