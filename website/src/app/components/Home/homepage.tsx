import AboutUs from './AboutUs';
import Navbar from '../Navbar';
import Picture from '../Picture';
import OurProjects from './OurProjects';
import Donate from './Donate';
import Footer from '../Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Picture />
      <AboutUs/>
      <OurProjects/>
      <Donate/>
      <Footer/>
      
    </div>
  );
};

export default HomePage;