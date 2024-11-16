import { Flex, Text } from "@mantine/core";
import classes from "./cardsSkills.module.css";

const CardsSkills = ({icon, nameIcon}) => {
    
    return(
        <>
           <Flex direction='column' align='center' gap={16} w={115} h={140} className={classes.cards}>
                {icon}
                <Text size="lg" fw={600}>{nameIcon}</Text>
            </Flex> 
        </>
    );
}

export default CardsSkills