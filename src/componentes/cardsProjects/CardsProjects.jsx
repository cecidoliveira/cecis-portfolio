import { Button, Flex, Image, Text } from "@mantine/core";
import classes from "./cardsProjects.module.css";

const CardsProjects = ({imageProject, nameProject, descriptionProject, iconsTech, hrefPrevia, hrefRepo, invertCard}) => {
    
    return(
        <Flex justify='center' className={ invertCard ? classes.directionProjectCardsInvert : classes.directionProjectCards}>
            <Image src={imageProject} className={classes.imageProject}/>
                <Flex direction='column' gap={20} className={classes.projectCards}>
                    <div>
                        <h3 className={classes.titleProjectCard}>{nameProject}</h3>
                        <Text size="lg" fw={100}>{descriptionProject}</Text>
                    </div>
                    <Flex gap={32}>
                        {iconsTech.map((icon)=> icon)}
                    </Flex>
                    <Flex gap={16}>
                        {hrefPrevia!= '' && (
                            <Button 
                                component="a"
                                href={hrefPrevia}
                                target="_blank"
                                variant='light' 
                                color="violet" 
                                radius='lg' 
                                className={classes.links}
                            >
                                Prévia do projeto
                            </Button>
                        )}
                            <Button 
                                    component="a"
                                    href={hrefRepo}
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
    );
}

export default CardsProjects