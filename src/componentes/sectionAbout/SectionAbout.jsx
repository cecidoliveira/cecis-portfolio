import { Container, Text } from "@mantine/core";
import classes from "./sectionAbout.module.css";

const SectionAbout = () => {
    
    return(
        <Container fluid pl={64} pr={64} mt={32}>
            <h2 className={classes.title}>Sobre</h2>
            <Text size="lg" fw={500} mt={24}>Sou <span className={classes.highlights}>Cecilia Dornelas</span>, uma desenvolvedora apaixonada por criar interfaces digitais 
                intuitivas e esteticamente agradáveis.Busco constantemente aprimorar minhas habilidades 
                em desenvolvimento web. Adoro o desafio de transformar ideias em realidade e estou sempre 
                disposta a aprender novas tecnologias.
            </Text>
        </Container>
    );
}

export default SectionAbout