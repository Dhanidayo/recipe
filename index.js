async function getData() {
    try{

        const response = await fetch("https://api.edamam.com/search?q=soup&app_id=790ebbcb&app_key=b1cae523fb6b305930d845edc623c9de&from=0&to=100");
        const data = await response.json()
        return data
    } catch(err){
        console.log("error encountered in getData Function", err)
    }

  }

  // getData()

  //function to define innerHTML for the web content.
  async function showData() {
      try{

          // let recipeData = await getData();
          // let recipes = recipeData;
          let recipes = await getData();
          let html = "";
        //   console.log(recipes.hits)
          // recipes.forEach((recipeData) =>
          //   function e() {
          recipes.hits.forEach((e) => {
              let webContent = `<div class="recipe">
                                    <a href=${e.recipe.url}' class="recipe-link" target="_blank">
                                    <img class="recipe-image" src="${e.recipe.image}"\>
                                    <p class="recipe-name">${e.recipe.label}</p>
                                    </a>
                                </div>`
      
              html += webContent;
            })
            // console.log(html);
            
            const searchResult = document.querySelector("#myContainer");
            searchResult.innerHTML = html;
        }catch(err){
            console.log("error encountered in show Data Function",err)
        }
    }
    document.getElementById("searchBtn").addEventListener('click', showData)