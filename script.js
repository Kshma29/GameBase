const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector(".search-input");
const searhWrapper = document.querySelector("search-input");

inputBox.onkeyup = (e)=> {
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase();
            console.log(emptyArray);
        });
        emptyArray = emptyArray.map((data)=> {
            return data = '<li>'+ data +'<li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for(let i = 0; i<allList.length; i++){
         allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active");
    }
}
function select(element){
    let selectUserData = element.textContent;
    console.log(selectUserData);
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>' + userValue;
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData
}