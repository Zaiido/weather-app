import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { GeoAlt } from "react-bootstrap-icons"

const CurrentWeather = ({ currentWeatherData }) => {
    const [url, setUrl] = useState(null)
    const [className, setClassName] = useState("")

    useEffect(() => {
        imageUrl()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        imageUrl()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentWeatherData])

    const imageUrl = () => {
        if (currentWeatherData.weather[0].id > 800) {
            setUrl("https://cdn-icons-png.flaticon.com/512/414/414927.png")
            setClassName("animate-icon")
        } else if (currentWeatherData.weather[0].id > 700) {
            setUrl("https://cdn-icons-png.flaticon.com/512/869/869869.png")
            setClassName("spin-icon")
        } else if (currentWeatherData.weather[0].id > 600) {
            setUrl("https://cdn-icons-png.flaticon.com/512/1674/1674013.png")
            setClassName("animate-icon")
        } else if (currentWeatherData.weather[0].id > 500) {
            setUrl("https://cdn-icons-png.flaticon.com/512/2315/2315309.png")
            setClassName("animate-icon")
        } else if (currentWeatherData.weather[0].id > 400) {
            setUrl("https://cdn-icons-png.flaticon.com/512/2864/2864448.png")
            setClassName("animate-icon")
        }
        else if (currentWeatherData.weather[0].id > 200) {
            setUrl("https://cdn-icons-png.flaticon.com/512/3075/3075858.png")
            setClassName("animate-icon")
        } else {
            setUrl("https://cdn-icons-png.flaticon.com/512/3236/3236860.png")
            setClassName("animate-icon")
        }
    }
    return (
        <Container className="mt-5">
            <Row className="current-weather">
                <Col className="col-12 col-sm-5 d-flex align-items-center">
                    <div className="current-weather-info">
                        <div className="current-temp">{Math.floor(currentWeatherData.main.temp)}°</div>
                        <div className="city-name">{currentWeatherData.name} <GeoAlt className="ml-3" /> </div>
                        <div className="feels-like-temp">{Math.floor(currentWeatherData.main.temp_max)}° / {Math.floor(currentWeatherData.main.temp_min)}° Feels like {Math.floor(currentWeatherData.main.feels_like)}°</div>
                    </div>
                </Col>
                <Col className="col-12 col-sm-7 d-flex justify-content-center">
                    <div className="weather-icon">
                        {url && <img className={className} src={url} alt="Weather Icon" />}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CurrentWeather