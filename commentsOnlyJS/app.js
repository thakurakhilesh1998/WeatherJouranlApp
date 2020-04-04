// Personal API Key for OpenWeatherMap API
const Key='a33f8737a3a8d8c9fcb15737cdb8f9a9';
const baseUrl=`https://api.openweathermap.org/data/2.5/weather?`;
// Event listener to add function to existing HTML DOM element

/* Function called by event listener */
const onClickBtn=document.getElementById('generate');
onClickBtn.addEventListener('click',getWeatherData(baseUrl,zipcode,KEY).then(
function(data)
{
    postDataToServer(data);
}));
/* Function to GET Web API Data*/
const getWeatherData=async (baseUrl,zipcode,KEY)=>
{
    const data=await fetch(`${baseUrl}+${zipcode},us&appid=${KEY}`);
}
/* Function to POST data */
const postDataToServer=async ('/all',data={data.userResponse,data.date,data.temperature})
{
    
}
/* Function to GET Project Data */
const postData = async ( url = '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json();
        // console.log(newData);
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }