const tempField = document.querySelector(".weather1")
const locationField = document.querySelector(".weather2 p")
const dateField = document.querySelector(".weather2 span")
const imgField = document.querySelector(".weather3 img")
const conditionField = document.querySelector(".weather3 span")
const form = document.querySelector("form")
const search = document.querySelector(".searchArea")


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    targetArea =search.value;
    
    fetchData(targetArea)
})



targetArea = "karachi";


const  fetchData = async(targetArea)=>{
   try {
    const url = `https://api.weatherapi.com/v1/current.json?key=7292b463304344dcb0221159230704&q=${targetArea}`
    const responce = await fetch(url);
    const data = await responce.json();
   
 
    const localDay = getCurrentDay(new Date().getDay());
 
    
 
   const  {current:{temp_c,condition:{text, icon}},location:{name, localtime}}=data;
 
   const localTime = localtime.split(" ")[1];
   const localDate = localtime.split(" ")[0];
   const date = `${localTime} - ${localDay} ${localDate}`
 
    domUpdate(temp_c,name,date,icon,text)
   } catch (error) {
    alert("Pleas Enter Correct Location")
   }
}



const domUpdate = (temperature,location,date,emojie,condition)=>{
    tempField.innerText = temperature;
    locationField.innerText = location;
    dateField.innerText = date;
    imgField.innerText = emojie;
    conditionField.innerText = condition;
}

fetchData(targetArea)







function getCurrentDay(num){
    switch (num) {
       
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    
        default:
            return "Don't Know";
    }
}


