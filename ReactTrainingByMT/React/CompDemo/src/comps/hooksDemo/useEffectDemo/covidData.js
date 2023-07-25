import { useEffect, useState } from "react";
import axios from"axios";

export default function CovidStats() {
    const [covidData, setCovidData] = useState();

    useEffect(() => {
    
        axios.get("https://api.covid19api.com/summary")
        .then(
            res => {
                console.log(res);
                setCovidData(res.data);
                console.log(covidData);
            }
            )
        .catch(
            err => console.log(err)
            )
    
    }, [])

    return (
        <>
        <h1>
            Covid Statics
        </h1>
        <h2>
            ID: {covidData?.ID}
        </h2>
        <h5>
            Date: {covidData?.Date}
        </h5>
        <h5>
            New Confirmed: {covidData?.Global.NewConfirmed}
        </h5>
        <h5>
            Total Confirmed: {covidData?.Global.TotalConfirmed}
        </h5>
        <h5>
            New Deaths: {covidData?.Global.NewDeaths}
        </h5>
        <h5>
            Total Deaths: {covidData?.Global.TotalDeaths}
        </h5>
        <h5>
            New Recovered: {covidData?.Global.NewRecovered}
        </h5>
        <h5>
            Total Recovered: {covidData?.Global.TotalRecovered}
        </h5>        
        </>
    )
    
};