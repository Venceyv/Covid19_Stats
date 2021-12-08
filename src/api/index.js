import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const dataFetch = async (country) => {
  let changeUrl = url

  if(country){
    changeUrl = `${url}/countries/${country}`
  }

  try {
    const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeUrl)
    
    const fetchedData = { confirmed, recovered, deaths, lastUpdate }
    return fetchedData

  } catch (err) {
    console.log(err)
  }
}

export const countryFetch = async () =>{
  try{
    const {data: {countries} } = await axios.get(`${url}/countries`)

   
    return countries.map((country) => {
      return country.name
    })
  }catch(err){
    console.log(err);
  }
}
