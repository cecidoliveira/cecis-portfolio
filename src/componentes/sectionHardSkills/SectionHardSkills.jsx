import { Container, Flex, SimpleGrid, Text } from "@mantine/core";
import classes from "./sectionHardSkills.module.css";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaFigma } from "react-icons/fa";
import { SiJavascript, SiElectron, SiMantine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
const SectionHardSkills = () => {
    
    return(
        <Container fluid pr={64} pl={64}>
            <h2 className={classes.title}>Minhas Habilidades</h2>
            <SimpleGrid 
                type="container"
                cols={{ base: 1,'300px': 2, '500px': 3, '1000px': 6 }}
                spacing="sm" 
                verticalSpacing="sm"
                justify='center'
                mt={32}  
            >
                <Flex direction='column' align='center' gap={16} w={130} className={classes.cards}>
                    <FaHtml5 size={70}/>
                    <Text size="lg" fw={600}>HTML</Text>
                </Flex>

                <Flex direction='column' align='center' gap={16} w={130} className={classes.cards}>
                    <FaCss3Alt size={70}/>
                    <Text size="lg" fw={600}>CSS</Text>
                </Flex>

                <Flex direction='column' align='center' gap={16} w={130} className={classes.cards}>
                    <SiJavascript size={70}/>
                    <Text size="lg" fw={600}>JavaScript</Text>
                </Flex>

                <Flex direction='column' align='center' gap={16} w={130} className={classes.cards}>
                    <FaPython size={70}/>
                    <Text size="lg" fw={600}>Python</Text>
                </Flex>

                <Flex direction='column' align='center' gap={16} w={130} className={classes.cards}>
                    <FaReact size={70}/>
                    <Text size="lg" fw={600}>React</Text>
                </Flex>

                <Flex direction='column' align='center' gap={16} w={130} className={classes.cards}>
                    <MdDesignServices size={70}/>
                    <Text size="lg" fw={600}>UX/UI Design</Text>
                </Flex>

                <Flex direction='column' align='center'  gap={16} w={130} className={classes.cards}>
                    <FaFigma size={70}/>                        
                    <Text size="lg" fw={600}>Figma</Text>
                </Flex>

                <Flex direction='column' align='center' gap={16} w={130} className={classes.cards}>
                    <SiElectron size={70}/>
                    <Text size="lg" fw={600}>Electron</Text>
                </Flex>

                <Flex direction='column' align='center' gap={16} w={130} className={classes.cards}>
                        <SiMantine size={70}/>
                        <Text size="lg" fw={600}>Mantine UI</Text>
                </Flex>
                
            </SimpleGrid>
        </Container>
    );
}

export default SectionHardSkills