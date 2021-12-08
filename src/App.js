import React from "react"

import titleCard from "./img/imgcard.png"
import character from "./img/imgcharacter.png"
import magnify from "./img/magnifying.png"

import { Cards, CountrySelect } from "./components"
import style from "./App.module.css"
import { dataFetch } from "./api"

class App extends React.Component {
  state = {
    data: {},
    country: "Worldwide",
  }

  async componentDidMount() {
    const fetchedData = await dataFetch()

    this.setState({ data: fetchedData })
  }

  handleCountrySelect = async (country) => {
    const dataCountry = await dataFetch(country)
    if(country) {
    this.setState({ data: dataCountry, country: country })
    }else{
      this.setState({data:dataCountry, country:"Worldwide"})
    }
  }

  render() {
    const { data, country } = this.state

    return (
      <div className={style.container}>
        <img className={style.titleCard} src={titleCard} alt={"title"} />
        <img className={style.character} src={character} alt={"character"} />
        <h1 className={style.countryName}>{country}</h1>
        <Cards data={data} />
        <CountrySelect handleCountrySelect={this.handleCountrySelect} />
        <img className={style.magnifyCharacter} src={magnify} alt={"magnifyCharacter"} />
      </div>
    )
  }
}

export default App
