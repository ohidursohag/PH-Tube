
// display categories
const showCategories = (categoriesData) => {

   const categoriesContainer = document.getElementById('categories-container');

   categoriesData.forEach(categoryData => {
      const categoryDiv = document.createElement('div');
      categoryDiv.innerHTML =
         `
         <div onclick="getCategorydata('${categoryData.category_id}',this)"
            class=" category relative w-max mx-auto sm:mx-0 rounded px-6 py-[2px] hover:bg-primary hover:text-white font-semibold bg-[rgba(37,37,37,0.15)] text-[rgba(37,37,37,0.6)] cursor-pointer ">
            ${categoryData.category}
         </div>
         `;
      categoriesContainer.appendChild(categoryDiv);
   });

   // active first category
   const categoryItem = document.querySelectorAll('.category');
   categoryItem[0].classList.add('active');

}

/* Display Video items category wise */
// fetch category data by category Id
const getCategorydata = async (categoryId, target) => {
   const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
   const data = await response.json();

   const categoryItem = document.querySelectorAll('.category');
   categoryItem.forEach(element => {
      element.classList.remove('active')
   })
   if (target) {
      target.classList.add('active')
   }

   showCards(data.data);
}

// creat Dynamic cards category wise
const showCards = (cardsData) => {
   const cardsContainer = document.getElementById('cards-container');
   cardsContainer.innerHTML = '';
   // console.log(cardsData.length);


   if (!cardsData.length) {
      // console.log('Data Nai');
      const cardDiv = document.createElement('div');
      cardDiv.innerHTML =
         `
         <div class="h-[calc(100vh-350px)] flex justify-center items-center">
            <div>
               <figure>
                  <img class="mx-auto" src="./image/warning_Icon.png" alt="">
               </figure>
               <h1 class="text-2xl md:text-4xl text-center font-bold mt-3">Oops!! Sorry, There is no <br> content here</h1>
            </div>
         </div>
         `;
      cardsContainer.appendChild(cardDiv);
   } else {
      cardsData.forEach((card) => {
         const cardDiv = document.createElement('div');
         cardDiv.innerHTML =
            `
         <div class="max-w-[350px] sm:max-w-[300px] md:max-w-[325px] lg:max-w-[310px]">
         <figure class="mb-5 rounded-lg">
            <img class="w-full rounded-lg" src="./thumbnil.png" alt="">
         </figure>
         <div class="flex gap-4">
            <figure class="w-[25%]">
               <img class="rounded-full " src="./olivia.jpg" alt="">
            </figure>
            <div class="">
               <h3 class="font-bold leading-6 mb-3">Building a Winning UX Strategy Using the Kano Model</h3>
               <div class="flex items-center gap-3 mb-1">
                  <span class="text-sm">Awlad Hossain</span>
                  <span><img src="./image/bluetik.png" alt=""></span>
            </div>
            <div class="text-sm">
               <span>91K</span>
               views
            </div>
            </div>
         </div>
      </div>
         `;
         cardsContainer.appendChild(cardDiv);
      });
   }

}


// go to blog page
const goBlogPage = () => {
   console.log('blogPage');
   window.location.href = './blog.html';
}
// go to Home Page
const goHomePage = () => {
   console.log('blogPage');
   window.location.href = './index.html';
}
