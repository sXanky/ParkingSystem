// Get a reference to the parking space list element
const parkingSpaceList = document.getElementById("parking-space-list");

// Sample data for parking spaces
const parkingSpaces = [
  { id: 1, location: "Level 1, Space 1", price: 2.00, availability: true },
  { id: 2, location: "Level 1, Space 2", price: 2.00, availability: true },
  { id: 3, location: "Level 1, Space 3", price: 2.00, availability: false },
  { id: 4, location: "Level 2, Space 1", price: 2.50, availability: true }]
// Fetch parking spaces data from API
fetch('/api/parking-spaces')
  .then((response) => response.json())
  .then((data) => {
    const parkingSpaceList = document.getElementById('parking-space-list');
    data.forEach((parkingSpace) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${parkingSpace.name} - ${parkingSpace.available ? 'Available' : 'Occupied'}`;
      parkingSpaceList.appendChild(listItem);
    });
  });

// Get directions button click handler
document.getElementById('get-directions-button').addEventListener('click', () => {
  fetch('/api/navigation')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Display directions and traffic conditions
    });
});

// View analytics button click handler
document.getElementById('view-analytics-button').addEventListener('click', () => {
  fetch('/api/analytics')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Display analytics data
    });
});
