// 'use strict';

// const express = require("express");
// const app = express();
// const cors = require("cors");
// const axios = require("axios");
// const weatherData =require("./data/weather.json")
// require("dotenv").config();
// app.use(cors());
// const PORT = process.env.PORT;


// // app.get('/weather', (req,res)=>{
// // let search = req.query.search;
// // let lat =Number(req.query.lat);
// // let lon =Number(req.query.lon);

// // console.log(1,search);
// // console.log(2,req.query)
// // if (lat&&lon||search) {
// //   let result =weatherData.find(item =>item.city_name===search)
// //   if (result) {
// //     let forCast = result.data.map(item=>{
// //       return {
// //         data:item.datetime,
// //         description:item.weather.description
// //       }
      
// //     })
// //     res.status(200).json(forCast);
// //   }else{
// //     res.status(500).send("Please send right city name")
// //   }
// //   }else{
// //     res.status(500).send("Please send right query params")
// //   }
// // })

// // app.listen(PORT, () => {
// //   console.log(`lestening on PORT ${PORT}`)
// // });

// let handleWeather = async (req,res)=>{

  

// }

// app.get('/weather',handleWeather)
// let search = req.query.search;
// let lat =Number(req.query.lat);
// let lon =Number(req.query.lon);


// res

// class ForeCast {
//   constructor(date, description) {
//     this.date = date;
//     this.description = description;
  
//   }
// }


// let handleMovie = async (req, res) => {

//   let urlMovie = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.MOVIE_API_KEY}`

//   let axiosRes = await axios.get(urlMovie);

//   let movieData = axiosRes;

//   res.json(axiosRes.data)

// }

// app.get('/movie', handleMovie);



// class Movies {

// }




// app.listen(PORT, () => {
//   console.log(`lestening on PORT ${PORT}`)
// });

