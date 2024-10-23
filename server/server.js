// Added other .get and sendFile functions for each html file
// Changed sendFile for /restaurants to .render for ejs functionality 
// Added import for restaurantData array with correct (hopefully) file path
// Changed .render for /restaurants to restaurantData array instead of hard coded html file
// imported function from restaurants.js
// imported backend routes
// updated restaurants route to use function
// mount routers using app.use
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRestaurants } from './data/restaurants.js';
import { backendRouter } from './routes/api.js';
import restaurantData from './data/restaurants.js'; 

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api', backendRouter);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

app.get('/restaurants', (req, res) => {
    //res.render(path.join(__dirname, 'views', 'restaurants.ejs'));
    const restaurants = getRestaurants();
    res.render('restaurants', { restaurants }); //: restaurantData });
});

app.get('/new-restaurant', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'new-restaurant.html'));
});

app.get('/restaurant/:id', (req, res) => {
    const restaurantId = parseInt(req.params.id, 10);
    const restaurant = getRestaurant(restaurantId);
    
    if (restaurant) {
        res.render('restaurant-details', { restaurant });
    } else {
        res.render(404).send('Not Found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});