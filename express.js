const express = require('express');
const app = express();
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts
app.use(ejsLayouts);

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home', page: 'home' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About Us', page: 'about' });
});

app.get('/services', (req, res) => {
  res.render('pages/services', { title: 'Our Services', page: 'services' });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact Us', page: 'contact' });
});

app.get('/shop', (req, res) => {
  res.render('pages/shop', { title: 'Shop With Us', page: 'shop' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
