import { Button, Container, Flex } from "@mantine/core";
import SwitchTheme from "../switchTheme/SwitchTheme";
import classes from "./navbar.module.css";
const Navbar = () => {
    
    return(
        <Container p={24} fluid h={80}>
            <Flex align="center" justify="space-between">
                <Flex align="center">
                    <h1 className={classes.textLogo}>CD</h1>
                    <Button variant="transparent" size="md" color="default" className={classes.links} id={classes.selected}>Pagina Inicial</Button>
                    <Button variant="transparent" size="md" color="default" className={classes.links}>Sobre</Button>
                    <Button variant="transparent" size="md" color="default" className={classes.links}>Projetos</Button>
                    <Button variant="transparent" size="md" color="default" className={classes.links}>Habilidades</Button>
                    <Button variant="transparent" size="md" color="default" className={classes.links}>Contato</Button>
                </Flex>
                <SwitchTheme/>
            </Flex>
        </Container>
    );
}

export default Navbar