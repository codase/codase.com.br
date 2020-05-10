import Nullstack from 'nullstack';

import Header from './Header';
import Home from './Home';

class Application extends Nullstack {

  static async initiate(context) {
    context.port = 21002;
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
        <Home route="/" />
      </div>
    )
  }


}

export default Application;