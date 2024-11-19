import '@mantine/core/styles.css';
import {MantineProvider, Space} from '@mantine/core';
import Navbar from './componentes/navbar/Navbar';
import SectionHome from './componentes/sectionHome/SectionHome';
import SectionAbout from './componentes/sectionAbout/SectionAbout';
import SectionProjects from './componentes/sectionProjects/SectionProjects';
import SectionHardSkills from './componentes/sectionHardSkills/SectionHardSkills';
import SectionContact from './componentes/sectionContact/SectionContact';
import Footer from './componentes/footer/Footer';
import { useScrollIntoView } from '@mantine/hooks';


function App() {
  const { scrollIntoView, targetRef } = useScrollIntoView({offset: 60});
  return (
    <MantineProvider defaultColorScheme="light">
      <Navbar/>
      <SectionHome scrollIntoView={scrollIntoView}/>
        <Space h="xl"/>
      <SectionAbout targetRef={targetRef}/>
        <Space h="xl"/>
      <SectionProjects/>
        <Space h="xl"/>
      <SectionHardSkills/>
        <Space h="xl"/>
      <SectionContact/>
        <Space h="xl"/>
      <Footer/>
    </MantineProvider>
  )
}

export default App
