import { useEffect, useState } from "react"

const BuildHourlyWeather = ({ weatherPerHour, id }) => {
    const [url, setUrl] = useState(null)
    const [className, setClassName] = useState("")


    useEffect(() => {
        imageUrl()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        imageUrl()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [weatherPerHour])

    const imageUrl = () => {
        if (id > 800) {
            setClassName("animate-small-icon small-icon")
            setUrl("https://cdn-icons-png.flaticon.com/512/414/414927.png")
        } else if (id > 700) {
            setUrl("https://cdn-icons-png.flaticon.com/512/869/869869.png")
            setClassName("spin-small-icon small-icon")
        } else if (id > 600) {
            setClassName("animate-icon small-icon")
            setUrl("https://cdn-icons-png.flaticon.com/512/1674/1674013.png")
        } else if (id > 500) {
            setClassName("animate-small-icon small-icon")
            setUrl("https://cdn-icons-png.flaticon.com/512/2315/2315309.png")
        } else if (id > 400) {
            setClassName("animate-small-icon small-icon")
            setUrl("https://cdn-icons-png.flaticon.com/512/2864/2864448.png")
        }
        else if (id > 200) {
            setClassName("animate-small-icon small-icon")
            setUrl("https://cdn-icons-png.flaticon.com/512/3075/3075858.png")
        } else {
            setClassName("animate-small-icon small-icon")
            setUrl("https://cdn-icons-png.flaticon.com/512/3236/3236860.png")
        }
    }
    return (
        <div className="hourly-weather-container">
            <span className="hour">{weatherPerHour.dt_txt.split(" ")[1].slice(0, 5)}</span>
            <div>{url && <img className={className} src={url} alt="Weather Icon" />}
            </div>
            <span className="small-temp">{Math.floor(weatherPerHour.main.temp)}°</span>
        </div>
    )
}

export default BuildHourlyWeather