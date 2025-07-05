import { Flex, Text } from "@mantine/core";
import classes from "./cardsSkills.module.css";

const CardsSkills = ({icon, nameIcon}) => {
    
    return(
        <>
           <Flex direction='column' align='center' className={classes.cards}>
                {icon}
                <Text size="md" fw={600}>{nameIcon}</Text>
            </Flex> 
        </>
    );
}

export default CardsSkills