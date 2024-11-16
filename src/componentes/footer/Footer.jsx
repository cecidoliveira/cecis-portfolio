import { Flex, Text } from "@mantine/core";
import classes from "./footer.module.css";

const Footer = () => {
    
    return(
        <Flex align='center' justify='center' h={64} bg='rgba(88, 88, 88, 0.25)'>
           <Text fw={200} size='lg'>© 2024 <span className={classes.highlights}>cecidoliveira</span>. Todos os direitos reservados.</Text>
        </Flex>
    );
}

export default Footer