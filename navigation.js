const navigationForm = document.getElementById('navigation-form');
const directionsContainer = document.getElementById('directions-container');
const directionsList = document.getElementById('directions-list');

navigationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const startPoint = document.getElementById('start-point').value;
    const endPoint = document.getElementById('end-point').value;

    // Call API to get directions
    fetch(`https://api.example.com/directions?start=${startPoint}&end=${endPoint}`)
        .then(response => response.json())
        .then(data => {
            const directions = data.directions;
            directionsList.innerHTML = '';
            directions.forEach((direction, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${index + 1}. ${direction}`;
                directionsList.appendChild(listItem);
            });
            directionsContainer.style.display = 'block';
        })
        .catch(error => {
            console.error(error);
            alert('Error getting directions');
        });
});