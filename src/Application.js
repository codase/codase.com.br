import Nullstack from 'nullstack';

import Header from './Header';
import Hero from './Hero';
import About from './About';
import OpenSource from './OpenSource';
import Media from './Media';
import Army from './Army';
import Contact from './Contact';
import Footer from './Footer';

class Application extends Nullstack {

  static async initiate(context) {
    context.port = 5000;
  }

  initialize({environment}) {
    if(environment.production) {
      if((typeof(navigator) !== 'undefined') && ('serviceWorker' in navigator) && ('PushManager' in window)) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/worker.js', { scope: '/' }).then((registration) => {
            console.log('Service Worker registration completed with scope: ', registration.scope);
          }, (err) => {
            console.log('Service Worker registration failed', err);
          });
        });
      }
    }
  }

  initiate({metadata}) {
    metadata.title = "Codase - Software para otimização de processos";
  }

  render({metadata}) {
    return (
      <div>
        <Header />
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

export default Application;