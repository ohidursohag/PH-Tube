const timeUndefinedElementId = [];
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
      let count = 0;
      cardsData.forEach((card) => {
         // console.log(card);
         
         const timeInHours = secondToHoursAndMinites(card?.others?.posted_date);
         // console.log(timeInHours);
         const cardDiv = document.createElement('div');
         cardDiv.innerHTML =
            `
         <div class="w-[350px] sm:w-[300px] md:w-[358px] lg:w-[317px] xl:w-[300px] 2xl:w-[360px]">
         <figure class=" mb-5 rounded-lg relative">
            <img class=" w-full h-[200px] rounded-lg" src="${card.thumbnail}" alt="">
            <div id ="uploadTime${count}" class="  bg-[#171717] rounded text-white w-max absolute bottom-3 right-3">
               <span  class=" uploaded-time ">${timeInHours ? timeInHours : ''}</span>
            </div>
         </figure>
         <div class="flex gap-4">
            <figure class="w-[46px]  rounded-full">
               <img class="rounded-full w-[46px] h-[46px] object-cover object-center  " src="${card?.authors[0]?.profile_picture}" alt="">
            </figure>
            <div class="">
               <h3 class="font-bold leading-6 mb-3">${card?.title}</h3>
               <div class="flex items-center gap-3 mb-1">
                  <span class="text-sm">${card?.authors[0]?.profile_name}</span>
                  <span><img src="${card?.authors[0]?.verified ? './image/bluetik.png' : ''}" alt=""></span>
            </div>
            <div class="text-sm">
               <span>${card?.others?.views}</span>
               views
            </div>
            </div>
         </div>
      </div>
         `;
         cardsContainer.appendChild(cardDiv);
         count++;
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



const secondToHoursAndMinites = (sec) => {
   // console.log(sec);
   const secondInNumber = Number(sec);
   // console.log(secondInNumber);


   const hours = Math.floor(secondInNumber / 3600);
   const minutes = Math.floor((secondInNumber - (hours * 3600)) / 60);
   // console.log(`${hours}hrs ${minutes}min`);
   if (!secondInNumber) {
      return ;
   } else {
      return `${hours}hrs ${minutes}min ago`;
   }
}

const removeUploadTimeElement = (id) => {
   console.log(id);
   timeUndefinedElementId.push(id);
   const showTimeElementConteiner = document.getElementById(id);
   console.log(timeUndefinedElementId);
   // showTimeelementConteiner.classList.add('hidden')


}
const timeUndefinedElement = () =>{
   console.log(timeUndefinedElementId);
}

