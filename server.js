const express = require('express');
const app = express();
const port = 3000;

// Parking spaces data
let parkingSpaces = [
  { id: 1, name: 'Parking Space 1', available: true },
  { id: 2, name: 'Parking Space 2', available: false },
  { id: 3, name: 'Parking Space 3', available: true },
];

// Analytics data
let analyticsData = {
  usagePatterns: [
    { day: 'Monday', usage: 80 },
    { day: 'Tuesday', usage: 70 },
    { day: 'Wednesday', usage: 90 },
  ],
  demandForecasting: [
    { day: 'Thursday', demand: 85 },
    { day: 'Friday', demand: 95 },
    { day: 'Saturday', demand: 80 },
  ],
};

// Serve static files
app.use(express.static(__dirname));

// API endpoints
app.get('/api/parking-spaces', (req, res) => {
  res.json(parkingSpaces);
});

app.get('/api/navigation', (req, res) => {
  // Simulate navigation data
  const navigationData = {
    directions: 'Turn left onto Main St, then right onto Parking St',
    trafficConditions: 'Moderate traffic',
  };
  res.json(navigationData);
});

app.get('/api/analytics', (req, res) => {
  res.json(analyticsData);
});

// Update parking space availability
app.put('/api/parking-spaces/:id', (req, res) => {
  const id = req.params.id;
  const parkingSpace = parkingSpaces.find((space) => space.id === parseInt(id));
  if (parkingSpace) {
    parkingSpace.available = !parkingSpace.available;
    res.json(parkingSpace);
  } else {
    res.status(404).json({ error: 'Parking space not found' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});