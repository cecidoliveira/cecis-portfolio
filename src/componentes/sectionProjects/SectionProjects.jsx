import { Button, Container, Flex, Image, Text } from "@mantine/core";
import classes from "./sectionProjects.module.css";
import imgStudoro from '../../assets/img-project-studoro.png'
import imgDebate from '../../assets/img-project-minutos-de-debate.png'
import imgGitfind from '../../assets/img-project-mygitfind.png'
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiStyledcomponents, SiJavascript, SiElectron } from "react-icons/si";

const SectionProjects = () => {
    
    return(
        <Container fluid pl={64} pr={64} mt={32} id="projects">
            <h2 className={classes.title}>Projetos</h2>
            <Flex direction='column' gap={64} mt={32}>

                <Flex gap={48} align='stretch' justify='center'>
                    <Image src={imgStudoro} w={400} className={classes.imageProject}/>
                    <Flex direction='column' w={500} gap={24} mt={16}>
                        <div>
                            <h3 className={classes.titleProjectCard}>Studoro</h3>
                            <Text size="lg" fw={100}>Metodo de estudo pomodoro para organização do tempo</Text>
                        </div>
                        <Flex gap={32}>
                            <FaReact size={48}/>
                            <SiStyledcomponents size={48}/>
                            <SiJavascript size={48}/>
                        </Flex>
                        <Flex gap={16}>
                            <Button 
                                component="a"
                                href="https://studoro.vercel.app/"
                                target="_blank"
                                variant='light' 
                                color="violet" 
                                radius='lg' 
                                className={classes.links}
                            >
                                Prévia do projeto
                            </Button>
                            <Button 
                                component="a"
                                href="https://github.com/cecidoliveira/Studoro"
                                target="_blank"
                                variant="transparent" 
                                color="default" 
                                className={classes.links}
                            >
                                Ver Repositório
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            
            
                <Flex direction='row-reverse' gap={48} align='stretch' justify='center'>
                    <Image src={imgDebate} w={400} className={classes.imageProject}/>
                    <Flex direction='column' w={500} gap={24} mt={16}>
                        <div>
                            <h3 className={classes.titleProjectCard}>Minutos de debate</h3>
                            <Text size="lg" fw={100}>Contabilizar o tempo de cada debatedor</Text>
                        </div>
                        <Flex gap={32}>
                            <FaHtml5 size={48}/>
                            <FaCss3Alt size={48}/>
                            <SiJavascript size={48}/>
                            <SiElectron  size={48}/>
                        </Flex>
                        <div>
                            <Button 
                                component="a"
                                href="https://github.com/cecidoliveira/minutos-de-debate"
                                target="_blank"
                                variant="transparent" 
                                color="default" 
                                className={classes.links} 
                            >
                                Ver Repositório
                            </Button>
                        </div>
                    </Flex>
                </Flex>
            
            
                <Flex gap={48} align='stretch' justify='center'>
                    <Image src={imgGitfind} w={400} className={classes.imageProject}/>
                    <Flex direction='column' w={500} gap={24} mt={16}>
                        <div>
                            <h3 className={classes.titleProjectCard}>My_Gitfind</h3>
                            <Text size="lg" fw={100}>Projeto que utiliza a API do GitHub para buscar e exibir informações com base no nome de usuario buscado</Text>
                        </div>
                        <Flex gap={32}>
                            <FaReact size={48}/>
                            <SiStyledcomponents size={48}/>
                            <SiJavascript size={48}/>
                        </Flex>
                        <Flex gap={16}>
                            <Button 
                                component="a"
                                href="https://my-gitfind.vercel.app/"
                                target="_blank"
                                variant='light' color="violet" radius='lg' className={classes.links}>
                                Prévia do projeto
                            </Button>
                            <Button 
                                component="a"
                                href="https://github.com/cecidoliveira/My_gitfind"
                                target="_blank"
                                variant="transparent"
                                color="default"
                                className={classes.links}
                            >
                                Ver Repositório
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </Container>
    );
}

export default SectionProjects