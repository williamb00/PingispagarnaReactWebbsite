import './App.css';
import AboutCompany from './Components/AboutCompany';
import Articles from './Components/Articles';
import Companies from './Components/Companies';
import ConsultingAgency from './Components/ConsultingAgency';
import Features from './Components/Features';
import Header from './Components/header';
import MenuEnd from './Components/MenuEnd';
import NewsLetter from './Components/NewsLetter';
import ProjectCase from './Components/ProjectCase';
import ServiceConsulting from './Components/ServiceConsulting';
import SocialMedia from './Components/SocialMedia';
import Team from './Components/Team';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Companies />

      <Features />

      <AboutCompany />

      <ServiceConsulting />

      <ConsultingAgency />
      
      <ProjectCase />

      <Team />

      <Articles />

      <NewsLetter />

      <MenuEnd />

      <SocialMedia />

    </div>
  );
}

export default App;
