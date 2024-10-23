// Fill this in
let restaurantData = [
    {
        "id": 0,
        "name": "Clayton's Mexican Takeout",
        "phone": "(619) 437-8811",
        "address": "10th St, Coronado, CA 92118",
        "photo": "https://picsum.photos/150/150",
    },
    
    {
        "id": 1,
        "name": "Miguel's Cocina",
        "phone": "(619) 437-4237",
        "address": "1351 Orange Ave, Coronado, CA 92118",
        "photo": "https://picsum.photos/150/150",
    },
    
    {
        "id": 2,
        "name": "Fogo De Chao",
        "phone": "(619) 338-0500",
        "address": "668 Sicth Ave, San Diego, CA 92101",
        "photo": "https://picsum.photos/150/150",
    },
    
    {
        "id": 3,
        "name": "High Tide Pizza",
        "phone": "(619) 435-1380",
        "address": "933 Orange Ave, Coronado, CA 92118",
        "photo": "https://picsum.photos/150/150",
    },
    
    {
        "id": 4,
        "name": "Kebab House",
        "phone": "(619) 795-7909",
        "address": "2479 Broadway A, San Diego, CA 92102",
        "photo": "https://picsum.photos/150/150",
    },
    
    {
        "id": 5,
        "name": "Brockton Villa",
        "phone": "(858) 454-7393",
        "address": "1235 Coast Blvd, La Jolla, CA 92037",
        "photo": "https://picsum.photos/150/150",
    },

    {
        "id": 6,
        "name": "Dynamic Add Test",
        "phone": "Phone",
        "address": "Address",
        "photo": "https://picsum.photos/150/150"
    }
];

let lastId = restaurantData.length -1;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id) || null;
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    const newId = getNextId();
    const restaurant = {id: newId, ...newRestaurant};
    restaurantData.push(restaurant);
    return restaurant;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    const initialLength = restaurantData.length;
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
    return restaurantData.length < initialLength;
};

export default restaurantData;
export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };