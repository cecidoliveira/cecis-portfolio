import '@mantine/core/styles.css';
import {MantineProvider, Space} from '@mantine/core';
import Navbar from './componentes/navbar/Navbar';
import SectionHome from './componentes/sectionHome/SectionHome';
import SectionAbout from './componentes/sectionAbout/SectionAbout';
import SectionProjects from './componentes/sectionProjects/SectionProjects';
import SectionHardSkills from './componentes/sectionHardSkills/SectionHardSkills';


function App() {

  return (
    <MantineProvider defaultColorScheme="light">
      <Navbar/>
      <SectionHome/>
        <Space h="xl"/>
      <SectionAbout/>
        <Space h="xl"/>
      <SectionProjects/>
        <Space h="xl"/>
      <SectionHardSkills/>
    </MantineProvider>
  )
}

export default App
