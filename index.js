const handleNavbar = async () => {
  const responsive = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await responsive.json();
  const tabContainer = document.getElementById("tab-container");
  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <a onclick="cardHandlerLoad('${category.category_id}')" class="tab mt-5">${category.category}</a> 
        `;
    tabContainer.appendChild(div);
  });
};
handleNavbar();

// card section
const cardHandlerLoad = async (categoryId) => {
  // console.log(categoryId)
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = " ";
  data.data?.forEach((news) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card w-80 h-80 bg-base-200  mt-8 shadow-xl">
           <figure>
             <img class="w-[312px] h-[250px] rounded-lg"
               src=${news.thumbnail}
               alt="Shoes"
             />
           </figure>
           <div class="card-body">
             <div class="card-footer space-x-3 flex ">
                 <div class=" "> 
                        <img class="rounded-full w-14"
                         src=${news.authors[0].profile_picture}
                       /> 
                   </div>
              <h2 class="card-title">
                ${news.title}
              </h2>
           </div>
           <div class="flex ">
           <p>${news.authors[0].profile_name}</p>
           <p>${
             news.authors[0].verified
               ? ` <img src="images/fi_10629607.svg">`
               : ``
           }</p>
           </div>
           <p> ${news.others.views} views</p>
         </div>
       </div>  
        `;
    cardContainer.appendChild(div);
  });
};
cardHandlerLoad();
cardHandlerLoad("1000");

// Blog er kaj
document.getElementById("blog").onclick = function () {
  location.href = "blog.html";
};

const cardHandlerLoad1 = async (category) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${category}`
  );
  const data = await response.json();
  console.log(data);
  const cardContainerDrawing = document.getElementById("drawing-btn");
  cardContainerDrawing?.classlist?.add("hidden");
  console.log(cardContainerDrawing.classList);
  if (data.data.length === 0) {
    cardContainerDrawing.classlist.remove("hidden");
  } else {
    cardContainerDrawing?.classlist?.add("hidden");
  }
  const div = document.createElement("div");
  div.innerHTML = `
      <img src="images/fi_5301987.svg" alt="">
      <h2>
        Oops!! Sorry, There is no <br> content here
      </h2>
      `;
  // cardContainerDrawing.appendChild(div);
};

cardHandlerLoad1("1000");
