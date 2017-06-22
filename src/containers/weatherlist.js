/**
 * Created by consultadd on 21/6/17.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux';
import Chart from "../components/chart";
import _ from 'lodash'
import GoogleMap from "../components/google_map";



class WeatherList extends Component{

    renderWeather(cityData){
        const temps = _.map(cityData.list.map(weather=>weather.main.temp),(temp)=>temp-273.15);
        const pressures = cityData.list.map(weather=>weather.main.pressure);
        const humidities = cityData.list.map(weather=>weather.main.humidity);
        const {lat,lon} = cityData.city.coord;
        console.log(temps);
        return (
            <tr key={cityData.city.id} className="margin-btm">
                <td>
                    <GoogleMap lat={lat} lon={lon}/>
                    <h3>{cityData.city.name}</h3>
                </td>
                <td><Chart data={temps} color='red' unit="C"/></td>
                <td><Chart data={pressures} color='green' unit="hpa"/></td>
                <td><Chart data={humidities} color='orange' unit="%"/></td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temprature (C)</th>
                    <th>Presure (hpa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state)=>{
    return {weather:state.weather};
}

export default connect(mapStateToProps)(WeatherList);