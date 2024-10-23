document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteRestaurantCard);
    });
});

function deleteRestaurantCard(event) {
    console.log('delete pressed');
    const card = event.target.closest('.restaurant');
    const restaurantId = card.getAttribute('data-id');
    card.remove();

    fetch(`/api/restaurants/${restaurantId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            return fetch('/restaurants');
        } else {
            throw new Error('Cannot delete restaurant');
        }
    })
    .then(response => response.text())
    .then(html => {
        document.body.innerHTML = html;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}