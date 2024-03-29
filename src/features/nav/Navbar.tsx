import { FC } from "react"
import { Button, Container, Menu } from "semantic-ui-react"

interface NavbarProps {
    setFormOpen: (value: boolean) => void
}

const Navbar: FC<NavbarProps> = ({setFormOpen}) => {

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}} />
                    Re-events
                </Menu.Item>
                <Menu name="Events" />
                <Menu.Item>
                    <Button positive inverted content="Create Event" onClick={()=>setFormOpen(true)}/>
                </Menu.Item>
                <Menu.Item position="right">
                    <Button basic inverted content="Login"/>
                    <Button basic inverted content="Login"/>
                    <Button  basic inverted content="Register" style={{marginLeft: "0.5em"}}/>
                </Menu.Item>
            </Container>
        </Menu>
        )
}
export default Navbar