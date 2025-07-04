import { Button, Container, Space, Text } from "@mantine/core";
import classes from "./sectionAbout.module.css";
import { PiReadCvLogo } from "react-icons/pi";

const SectionAbout = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Curriculo_Cecilia.pdf';
        link.download = 'Curriculo_Cecilia.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); 
    };

    return(
        <Container fluid id="about" className={classes.containerAbout}>
            <h2 className={classes.title} >Sobre</h2>
            <Text mt={24} className={classes.description}>Sou <span className={classes.highlights}>Cecilia Dornelas</span>, 
            uma desenvolvedora apaixonada por criar interfaces digitais intuitivas e esteticamente 
            agradáveis. Busco constantemente aprimorar minhas habilidades em desenvolvimento web e 
            também tenho me dedicado ao aprendizado de análise de dados, unindo tecnologia e 
            informação para gerar insights valiosos. Adoro o desafio de transformar ideias em 
            realidade e estou sempre disposta a aprender novas tecnologias.
            </Text>
            <Space h="xl"/>
            <Button 
                target="_blank"
                variant='light' 
                color="violet" 
                radius='lg' 
                size="md"
                leftSection={<PiReadCvLogo size={25} />}
                className={classes.links}
                onClick={handleDownload}
            > Download CV</Button>
        </Container>
    );
}

export default SectionAbout