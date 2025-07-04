import { Container, Flex } from "@mantine/core";
import classes from "./sectionHardSkills.module.css";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaFigma, FaPhp } from "react-icons/fa";
import { GoProjectTemplate } from "react-icons/go";
import { SiJavascript, SiElectron, SiMantine, SiLooker } from "react-icons/si";
import { BsFillClipboardDataFill } from "react-icons/bs";
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
                    <CardsSkills icon={<FaReact size={70}/>} nameIcon='React'/>
                </div>

                <div className={classes.divCards}>
                    <CardsSkills icon={<SiElectron size={70}/>} nameIcon='Electron'/>
                    <CardsSkills icon={<SiMantine size={70}/>} nameIcon='Mantine UI'/>
                    <CardsSkills icon={<FaFigma size={70}/>} nameIcon='Figma'/>
                    <CardsSkills icon={<GoProjectTemplate size={70}/>} nameIcon='UX/UI Design'/>
                </div>

                <div className={classes.divCards}>
                    <CardsSkills icon={<FaPython size={70}/>} nameIcon='Python'/>
                    <CardsSkills icon={<BsFillClipboardDataFill size={70}/>} nameIcon='Power BI'/>
                    <CardsSkills icon={<SiLooker size={70}/>} nameIcon='Looker Studio'/>
                    <CardsSkills icon={<FaPhp size={70}/>} nameIcon='PHP'/>
                </div>            

            </Flex>
            
        </Container>
    );
}

export default SectionHardSkills