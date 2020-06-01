import Nullstack from 'nullstack';

import Hero from './Hero';
import About from './About';
import OpenSource from './OpenSource';
import Contact from './Contact';
import Footer from './Footer';

class Home extends Nullstack {

  initialize({page}) {
    page.title = "Codase - Software para otimização de processos";
    page.description = "Desenvolvemos web apps para otimizar processos que te ajudam a parar de perder tempo.";
    page.locale = "pt-BR";
  }

  render() {
    return (
      <div>
        <Hero />
        <About />
        <OpenSource />
        <Contact />
        <Footer />
      </div>
    )
  }

}

export default Home;