import { useEffect, useState } from "react"
import CurrentWeather from "./CurrentWeather"
import HourlyWeather from "./HourlyWeather"
import WeatherSearchNavbar from "./WeatherSearchNavbar"

const MainPage = () => {
    const [query, setQuery] = useState("berlin")
    const [currentWeather, setCurrentWeather] = useState(null)

    useEffect(() => {
        getCurrentWeather()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getCurrentWeather()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    const getCurrentWeather = async () => {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=eb149cbbd3a7f5611ed1fa2b867bebda&units=metric`);

            if (response.ok) {
                let weatherData = await response.json();
                setCurrentWeather(weatherData)
            } else {
                console.log("Error")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <WeatherSearchNavbar setQueryToMainPage={setQuery} />
            {currentWeather && <CurrentWeather currentWeatherData={currentWeather} />}
            <HourlyWeather city={query} />
        </>
    )
}

export default MainPage