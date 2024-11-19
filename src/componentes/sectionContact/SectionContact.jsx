import { ActionIcon, Container, Flex, Text } from "@mantine/core";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import classes from "./sectionContact.module.css";

const SectionContact = () => {
    
    return(
        <Container fluid pl={64} pr={64} mt={32} mb={16}>
            <h2 className={classes.title}>Vamos Conversar!</h2>
            <Text size="lg" fw={500} mt={24} ta='center' pl={32} pr={32}> 
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
                        href=""
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