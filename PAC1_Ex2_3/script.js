const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const currencySelect = document.getElementById('currency');

const basePricesUSD = {
    "The Conjuring: Last Rites": 10,
    "28 Years Later": 12,
    "Inside Out 2": 8,
    "Lilo & Stitch": 9
};

populateUI();

let ticketPrice = +movieSelect.value;

// Update movie prices based on selected currency
function updateMoviePrices(selectedCurrency) { 
    fetch(`https://open.er-api.com/v6/latest/USD`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[selectedCurrency];
            
            const options = movieSelect.querySelectorAll('option');
            
            // Iterate over each movie and its base price in USD
            for (const [movieName, baseUSD] of Object.entries(basePricesUSD)) {
                const convertedPrice = baseUSD * rate;
                
                // Find the option that corresponds to this movie
                options.forEach(option => {
                    // If the option text includes the movie name...
                    if (option.textContent.includes(movieName)) {
                        option.value = convertedPrice.toFixed(2);
                        option.textContent = `${movieName} (${convertedPrice.toFixed(2)} ${selectedCurrency})`;
                    }
                });
            }
            
            ticketPrice = +movieSelect.value;
            
            updateSelectedCount(selectedCurrency);
        })
        .catch(error => {
            console.error('Error fetching currency data:', error);
        });
}

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount(selectedCurrency) {
    debugger;
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // Save selected seats in local storage
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    // Display selected seats and total price
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = `${(selectedSeatsCount * ticketPrice).toFixed(2)} ${selectedCurrency || 'USD'}`;
}    

// Get data from local storage and populate UI
function populateUI() {
    // Get selected seats from local storage
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.includes(index)) {
                seat.classList.add('selected');
            }
        });
    }
    // Get selected movie index from local storage
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}    

// Movie select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;

    setMovieData(e.target.selectedIndex, e.target.value);

    updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        const selectedCurrency = currencySelect.value;
        updateSelectedCount(selectedCurrency);
    }
});    

// Currency select event 
currencySelect.addEventListener('change', (e) => { 
    const selectedCurrency = e.target.value; 
    updateMoviePrices(selectedCurrency); 
});

// Initial count and total set
updateSelectedCount();