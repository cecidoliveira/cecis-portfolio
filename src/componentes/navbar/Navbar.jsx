import { Button, Container, Flex } from "@mantine/core";
import SwitchTheme from "../switchTheme/SwitchTheme";
import classes from "./navbar.module.css";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    
    function handleScrollToSection(id) {
        gsap.to(window, { duration: 2, scrollTo: `#${id}`});
    }

    return(
        <Container fluid p={24} h={80} >
            <Flex align="center" justify="space-between">
                <Flex align="center">
                    <h1 className={classes.textLogo}>CD</h1>
                    <Button variant="transparent" size="md" color="default" className={classes.links} onClick={() => handleScrollToSection('home')}>Pagina Inicial</Button>
                    <Button variant="transparent" size="md" color="default" className={classes.links} onClick={() => handleScrollToSection('about')}>Sobre</Button>
                    <Button variant="transparent" size="md" color="default" className={classes.links} onClick={() => handleScrollToSection('projects')}>Projetos</Button>
                    <Button variant="transparent" size="md" color="default" className={classes.links} onClick={() => handleScrollToSection('hardskills')}>Habilidades</Button>
                    <Button variant="transparent" size="md" color="default" className={classes.links} onClick={() => handleScrollToSection('contacts')}>Contato</Button>
                </Flex>
                <SwitchTheme/>
            </Flex>
        </Container>
    );
}

export default Navbar