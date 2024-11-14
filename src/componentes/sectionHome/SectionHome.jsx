import classes from "./sectionHome.module.css";
import imgCecis from "../../assets/image-cecis.png"
import { ActionIcon, Container, Flex, Image, Text, Tooltip } from "@mantine/core";
import { FaGithub, FaLinkedin, FaInstagram   } from "react-icons/fa";
import { TfiMouse } from "react-icons/tfi";

const SectionHome = () => {

    return(
        <Container fluid pl={24} pr={47} pos='relative' mb={8}>
            <Flex align='center' justify='space-evenly' gap={80}>
                <Flex direction='column' gap={16}>
                    <Flex gap={8} id={classes.typingAnimation}> 
                        <h2 className={classes.title}>Olá, eu sou <span className={classes.highlights}>Cecilia Dornelas</span></h2>
                        <p className={classes.title}>_</p>
                    </Flex>
                    <Text size="lg" fw={700}>Desenvolvedora Jr. | Apaixonada por criar experiências web incríveis</Text>
                    <Flex align='center' gap={8}>
                        <ActionIcon 
                            component="a"
                            href="https://github.com/cecidoliveira"
                            target="_blank"
                            variant="transparent" 
                            color="default" 
                            size='md' >
                            <FaGithub size={30} className={classes.links}/>
                        </ActionIcon>
                        <ActionIcon 
                            component="a"
                            href="https://www.linkedin.com/in/ceciliadornelas"
                            target="_blank"
                            variant="transparent" 
                            color="default" 
                            size='md' >
                            <FaLinkedin size={30} className={classes.links}/>
                        </ActionIcon>
                        <ActionIcon 
                            component="a"
                            href="https://www.instagram.com/cecily_dornelas"
                            target="_blank"
                            variant="transparent" 
                            color="default" 
                            size='md' >
                            <FaInstagram size={30} className={classes.links}/>
                        </ActionIcon>
                    </Flex>
                </Flex>
                <div className={classes.imageBox}>
                    <Image
                        w={350}
                        src={imgCecis}
                    />
                </div>
            </Flex>
            
            <Tooltip label="Scroll" offset={-8} >
                <ActionIcon 
                    component='button'
                    variant="transparent" 
                    color="default" 
                    size='lg'
                    className={classes.scroll}
                >
                    <TfiMouse size='lg'/>
                </ActionIcon>
            </Tooltip>
        </Container>
    );
}

export default SectionHome