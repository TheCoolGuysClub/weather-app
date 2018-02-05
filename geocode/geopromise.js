const axios = require(`axios`);
const hi=(address)=>{
  console.log("hi");
}
const geocodeAddress= (address,callback)=>{
  console.log("hi");
  // const encodedAddress = encodeURIComponent(address);
  // const key = "AIzaSyCVSOKY3vqiKKtcYaFL5F9cRcHslWZCbTI";
  // const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;
  // axios.get(geocodeUrl)
  //   .then((response)=>{
  //     if(response.data.status ==="ZERO_RESULTS"){
  //       throw new Error(`Unable to find that address`);
  //     }
  //     else{
  //       const lng = response.data.results[0].geometry.location.lng;
  //       const lag = response.data.results[0].geometry.location.lat;
  //       console.log(response.data.results[0].formatted_address);
}

module.exports={
  geocodeAddress
}
