import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'

import {countryFetch} from '../../api'
import style from './CountrySelect.module.css'

const CountrySelect = ({handleCountrySelect})=>{
    const [countriesFetched, setCountriesFetched] = useState([])

    useEffect(()=>{
        const fetchCountry = async ()=>{
            setCountriesFetched(await countryFetch())
        }

        fetchCountry();
    }, [setCountriesFetched])

    return(
        <FormControl variant="standard" className = {style.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountrySelect(e.target.value)}>
                <option value="">Worldwide</option>
                {countriesFetched.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelect