import { Container, Flex } from "@mantine/core";
import classes from "./sectionHardSkills.module.css";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaFigma } from "react-icons/fa";
import { SiJavascript, SiElectron, SiMantine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import CardsSkills from "../cardsSkills/CardsSkills";
const SectionHardSkills = () => {
    
    return(
        <Container fluid id="hardskills" className={classes.containerHardSkills}>
            <h2 className={classes.title}>Minhas Habilidades</h2>
            
            <Flex align='center' justify='center' gap={24} mt={32}>
                <div className={classes.divCards}>
                    <CardsSkills icon={<FaHtml5 size={70}/>} nameIcon='HTML'/>
                    <CardsSkills icon={<FaCss3Alt size={70}/>} nameIcon='CSS'/>
                    <CardsSkills icon={<SiJavascript size={70}/>} nameIcon='JavaScript'/>
                </div>

                <div className={classes.divCards}>
                    <CardsSkills icon={<FaPython size={70}/>} nameIcon='Python'/>
                    <CardsSkills icon={<FaReact size={70}/>} nameIcon='React'/>
                    <CardsSkills icon={<MdDesignServices size={70}/>} nameIcon='UX/UI Design'/>
                </div>

                <div className={classes.divCards}>
                    <CardsSkills icon={<FaFigma size={70}/>} nameIcon='Figma'/>
                    <CardsSkills icon={<SiElectron size={70}/>} nameIcon='Electron'/>
                    <CardsSkills icon={<SiMantine size={70}/>} nameIcon='Mantine UI'/>
                </div>
            </Flex>
            
        </Container>
    );
}

export default SectionHardSkills