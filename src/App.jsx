import '@mantine/core/styles.css';
import { Flex, MantineProvider} from '@mantine/core';
import Navbar from './componentes/navbar/Navbar';
import SectionHome from './componentes/sectionHome/SectionHome';
import SectionAbout from './componentes/sectionAbout/SectionAbout';


function App() {
  return (
    <MantineProvider defaultColorScheme="light">
      <Navbar/>
      <Flex direction='column' gap={64}>
        <SectionHome />
        <SectionAbout/>
      </Flex>
    </MantineProvider>
  )
}

export default App
