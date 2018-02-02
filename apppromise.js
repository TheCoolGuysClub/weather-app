const yargs = require(`yargs`);
const axios = require(`axios`);
// const geocode = require(`./geocode/getocode.js`);
const argv = yargs
.options({
  address:{
  demandOption:true,
  alias:'a',
  describe:'Address to fetch'
  }
})
  .help()
  .alias("help","h")
  .argv;

  const encodedAddress = encodeURIComponent(argv.address);
  const key = "AIzaSyCVSOKY3vqiKKtcYaFL5F9cRcHslWZCbTI";
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;
  axios.get(geocodeUrl)
    .then((response)=>{
      if(response.data.status ==="ZERO_RESULTS"){
        throw new Error(`Unable to find that address`);
      }else{
      console.log(response.data.results[0].formatted_address);
      console.log(response.data.results[0].lagitude);
      // const wethercodeURL = `https://api.darksky.net/forecast/7fa261da4fc6cad0aef6384618ce197e/${response.data.results[0].lagitude},${response.data.results[0].longitude}`
      // axios.get(wethercodeURL)
      // .then((response)=>{
      //     // console.log("hi");
      //   })
    }
      //sent get request to darksky
      // return axios,get()
    })

    .catch((error)=>{
      //Rejected from axios call to google api
      if(error.code ===`ENOTFOUND`){
        console.log(`unable to connect this url to google`);
      }
      //we throw an error because that address does not exists
      else if(error.message){
        console.log(error);
        console.log(`CAUGHT ERROR!`);
        console.log(error.message);
      }else{
        console.log(error);
      }

    })
