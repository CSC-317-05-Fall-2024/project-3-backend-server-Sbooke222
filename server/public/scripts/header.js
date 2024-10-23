const headerElement = document.querySelector('header') ;
const navElement = document.querySelector('nav') ;
const footerElement = document.querySelector('footer') ;

headerElement.innerHTML = `<h1>San Diego</h1>` ;

navElement.innerHTML = `<a href="/">Home</a> 
                        <a href="/attractions">Attractions</a> 
                        <a href="/restaurants">Restaurants</a>
                        <a href="/new-restaurant">New Restaurant Form</a>` ;

footerElement.innerHTML = `<p>Contact Info: stephenbooke@gmail.com</p>` ;