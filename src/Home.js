import Nullstack from 'nullstack';

import Hero from './Hero';
import About from './About';
import OpenSource from './OpenSource';
import Media from './Media';
import Army from './Army';
import Contact from './Contact';
import Footer from './Footer';

class Home extends Nullstack {

  initialize({metadata}) {
    metadata.title = "Codase - Software para otimização de processos";
    metadata.description = "Desenvolvemos web apps para otimizar processos que te ajudam a parar de perder tempo.";
    metadata.image = "https://codase.com.br/share.png";
    metadata.type = "website";
    metadata.project = "Codase";
    metadata.canonical = "https://codase.com.br";
    metadata.locale = "pt-BR";
  }

  render() {
    return (
      <div>
        <Hero />
        <About />
        <OpenSource />
        <Army />
        <Contact />
        <Footer />
      </div>
    )
  }

}

export default Home;