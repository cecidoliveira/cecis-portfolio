import { ActionIcon, Container, Flex, Text } from "@mantine/core";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import classes from "./sectionContact.module.css";

const SectionContact = () => {
    
    return(
        <Container fluid id="contacts" className={classes.containerContact}>
            <h2 className={classes.title}>Vamos Conversar!</h2>
            <Text mt={24} ta='center' className={classes.description}> 
                Estou sempre em busca de novas oportunidades de aprendizado e colaboração. Se você tem um 
                projeto interessante ou apenas quer trocar ideias sobre desenvolvimento, ficarei feliz em conversar!
            </Text>

            <Flex align='center' justify='center' gap={32} mt={32}>
                <Flex align='center' justify='center' className={classes.cardContact}>
                    <ActionIcon 
                        component="a"
                        href="https://www.instagram.com/cecily_dornelas"
                        target="_blank"
                        variant="transparent" 
                        color="default" 
                        size={45} 
                        className={classes.links}
                    >
                        <BiLogoInstagramAlt size={45}/>
                    </ActionIcon>
                </Flex>

                <Flex align='center' justify='center' className={classes.cardContact}>
                    <ActionIcon 
                        component="a"
                        href="https://www.linkedin.com/in/ceciliadornelas"
                        target="_blank"
                        variant="transparent" 
                        color="default" 
                        size={45} 
                        className={classes.links}
                    >
                        <RxLinkedinLogo size={40}/>
                    </ActionIcon>
                </Flex>

                <Flex align='center' justify='center' className={classes.cardContact}>
                    <ActionIcon 
                        component="a"
                        href="mailto:cecidoliveira.pb@gmail.com"
                        target="_blank"
                        variant="transparent" 
                        color="default" 
                        size={45} 
                        className={classes.links}
                    >
                        <MdEmail size={40}/>
                    </ActionIcon>
                </Flex>
            </Flex>
        </Container>
    );
}

export default SectionContact