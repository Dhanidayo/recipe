async function getData(searchTerm) {
  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=${searchTerm}&app_id=790ebbcb&app_key=b1cae523fb6b305930d845edc623c9de&from=0&to=100`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log("error encountered in getData Function", err);
  }
}

//function to define innerHTML for the web content.
async function showData() {
  try {
    const searchTerm = document.getElementById("searchBox").value || "" ;
    console.log("search item", searchTerm);
    if (searchTerm !== "") { 
        // console.log("Success!")
      let recipes = await getData(searchTerm);
      let html = ""; 
      recipes.hits.forEach((e) => { 
        let webContent = `<div class="recipe">
                                    <a href=${e.recipe.url}' class="recipe-link" target="_blank">
                                    <img class="recipe-image" src="${e.recipe.image}"\>
                                    <p class="recipe-name">${e.recipe.label}</p>
                                    </a>
                            </div>`;

        html += webContent;
      });
      const searchResult = document.querySelector("#myContainer");
      searchResult.innerHTML = html;
    } else {
        console.log("No result")
     }
  } catch (err) {
    console.log("error encountered in show Data Function", err);
  }
}
document.getElementById("searchBtn").addEventListener("click", showData);
