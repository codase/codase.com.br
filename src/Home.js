import Nullstack from 'nullstack';

import Hero from './Hero';
import About from './About';
import OpenSource from './OpenSource';
import Media from './Media';
import Army from './Army';
import Contact from './Contact';
import Footer from './Footer';

class Home extends Nullstack {

  render() {
    return (
      <div>
        <Hero />
        <About />
        <OpenSource />
        <Media />
        <Army />
        <Contact />
        <Footer />
      </div>
    )
  }

}

export default Home;