import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import cn from 'classnames'
// import { StylesContext } from '@material-ui/styles'
import CountUp from 'react-countup'

import style from './Cards.module.css'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}})=>{
    if(!confirmed){
        return '...'
    }
    return(
        <div className={style.container}>
            <Grid container spacing={3} justifyContent="center" align = "center" direction="column" className={style.gridContainer} style={{width:'80vw'}}>
                <Grid item component={Card} className={cn(style.card, style.infected)}>
                    <CardContent>
                        <Typography variant="subtitle1" gutterBottom className={style.boldFont}>Infected</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={confirmed.value} duration={2} separator=","/>
                        </Typography>
                        <Typography variant="body2" >Number of Active Cases</Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cn(style.card, style.recovered)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom className = {style.boldFont}>Recovered</Typography>
                        <Typography variant="h5" >
                            {recovered.value ?
                            <CountUp start={0} end={recovered.value} duration={2} separator=","/>
                            :
                           "n/a"
                            }
                        </Typography>
                        <Typography variant="body2" >Number of Recovered</Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cn(style.card, style.deaths)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom className = {style.boldFont}>Deaths</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={deaths.value} duration={2} separator=","/>
                        </Typography>
                        <Typography variant="body2" >Number of Deaths</Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards