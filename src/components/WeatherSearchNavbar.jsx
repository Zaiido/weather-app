import { useState } from "react"
import { Container, Form, FormControl, Navbar } from "react-bootstrap"

const WeatherSearchNavbar = ({ setQueryToMainPage }) => {
    const [query, setQuery] = useState("")

    return (
        <Container className="mt-3">
            <Navbar expand="lg">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Form inline className="ml-auto" onSubmit={(e) => {
                    e.preventDefault()
                    setQueryToMainPage(query)
                }}>
                    <FormControl type="text" placeholder="Search..." className="mr-sm-2"
                        value={query}
                        onChange={(e) => { setQuery(e.target.value) }} />

                </Form>
            </Navbar>
        </Container>
    )
}

export default WeatherSearchNavbar