/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
const Key='a33f8737a3a8d8c9fcb15737cdb8f9a9';
const baseUrl=`https://api.openweathermap.org/data/2.5/weather?`;
// Event listener to add function to existing HTML DOM element
const generate=document.getElementById('generate');
generate.addEventListener('click',onButtonClicked);
//function for on click button
function onButtonClicked()
{
let zipCode=document.getElementById('zip').value;
let userFeelings=document.getElementById('feelings').value;
getWeatherData(baseUrl,zipCode,Key).then(function(data)
{
    console.log(data);
    //create post request
    postDataToServer('/all',{temprature:data['main']['temp'],date:newDate,userResponse:userFeelings}).then(
        function(response){
            updateUI('/getData');
        }
    );
});
}
const getWeatherData=async (baseUrl,zipCode,Key)=>{
    //api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
    const weatherData=await fetch(`${baseUrl}zip=${zipCode},us&appid=${Key}`);
    try{
   
    const data=await weatherData.json();
    return data;
    }
    catch(error)
    {
        console.log('error',error);
    }
}
// post Data to server function
const postDataToServer=async(url='',data={})=>{
const response=await fetch(url,{
    method:'POST',
    credentials:'same-origin',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(data),
});
try{
    const newData=await response.json();
    console.log(newData);
    return newData;
}
catch(error)
{
    console.log(error);
}
}
const updateUI=async(url='')=>
{
    const final=await fetch(url);
    try{
    const finalResult=await final.json();
    const length=finalResult['length'];
    document.getElementById('date').innerHTML=`date: ${finalResult[length-1]['date']}`;
    document.getElementById('temp').innerHTML=`Temperature: ${finalResult[length-1]['temperature']}`;
    document.getElementById('content').innerHTML=`Your Response: ${finalResult[length-1]['userResponse']}`;
    }
    catch(error)
    {
        console.log(error);
    }
}