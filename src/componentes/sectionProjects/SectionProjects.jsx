import { Container, Flex } from "@mantine/core";
import classes from "./sectionProjects.module.css";
import imgStudoro from '../../assets/img-project-studoro.png'
import imgDebate from '../../assets/img-project-minutos-de-debate.png'
import imgGitfind from '../../assets/img-project-mygitfind.png'
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiStyledcomponents, SiJavascript, SiElectron } from "react-icons/si";
import CardsProjects from "../cardsProjects/cardsProjects";

const SectionProjects = () => {
    
    return(
        <Container fluid id="projects" className={classes.containerProjects}>
            <h2 className={classes.title}>Projetos</h2>
            <Flex direction='column' gap={64} mt={32}>
                <CardsProjects
                    imageProject={imgStudoro}
                    nameProject='Studoro'
                    descriptionProject='Metodo de estudo pomodoro para organização do tempo'
                    iconsTech={[<FaReact size={48}/>,<SiStyledcomponents size={48}/>,<SiJavascript size={48}/>]}
                    hrefPrevia='https://studoro.vercel.app'
                    hrefRepo='https://github.com/cecidoliveira/Studoro'
                    invertCard={false}
                />
                <CardsProjects
                    imageProject={imgDebate}
                    nameProject='Minutos de debate'
                    descriptionProject='Contabilizar o tempo de cada debatedor'
                    iconsTech={[<FaHtml5 size={48}/>,<FaCss3Alt size={48}/>,<SiJavascript size={48}/>,<SiElectron  size={48}/>]}
                    hrefPrevia=''
                    hrefRepo='https://github.com/cecidoliveira/minutos-de-debate'
                    invertCard={true}
                />
                <CardsProjects
                    imageProject={imgGitfind}
                    nameProject='My_Gitfind'
                    descriptionProject='Projeto que utiliza a API do GitHub para buscar e exibir informações com base no nome de usuario buscado'
                    iconsTech={[<FaReact size={48}/>,<SiStyledcomponents size={48}/>,<SiJavascript size={48}/>]}
                    hrefPrevia='https://my-gitfind.vercel.app'
                    hrefRepo='https://github.com/cecidoliveira/My_gitfind'
                    invertCard={false}
                />

            </Flex>
        </Container>
    );
}

export default SectionProjects