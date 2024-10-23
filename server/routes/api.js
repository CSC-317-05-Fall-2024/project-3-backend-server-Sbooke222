import express from 'express';
import { createRestaurant, deleteRestaurant } from '../data/restaurants.js';
const router = express.Router();

router.post('/restaurants', (req, res) => {
    const newRestaurant = req.body
    const createdRestaurant = createRestaurant(newRestaurant);
    res.status(201).json(createdRestaurant);
});

router.delete('/restaurants/:id', (req, res) => {
    const restaurantId = parseInt(req.params.id, 10);
    const deleted = deleteRestaurant(restaurantId);

    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).send('Not Found');
    }
});

export {router as backendRouter};