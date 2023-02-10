import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import BuildHourlyWeather from "./BuildHourlyWeather";

const HourlyWeather = ({ city }) => {

    const [weather, setWeather] = useState([])

    useEffect(() => {
        console.log(city)
        getData()
        console.log(weather)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city])

    const getData = async () => {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=eb149cbbd3a7f5611ed1fa2b867bebda&units=metric`);
            if (response.ok) {
                let weatherData = await response.json()
                setWeather(weatherData.list)
            } else {
                console.log(response)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Container className="mt-5">
            <Row className="hourly-weather">
                {weather.splice(0, 6).map((weatherPerHour, i) => {
                    return (
                        <Col key={i} className="col-12 col-sm-2 text-center">
                            <BuildHourlyWeather weatherPerHour={weatherPerHour} id={weatherPerHour.weather[0].id} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default HourlyWeather