// Show items on load
window.onload = () => {
   getCategories();
   getCategorydata('1000');
   
}


// fetch categoris from api
const getCategories = async () => {
   const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
   const data = await response.json();
   showCategories(data.data);
};


const sortByView = (target) => {
   

      if (target.classList.contains('active')) {
         target.classList.remove('active')
      } else {
         target.classList.add('active')
      }

   // target.active = true;

};



