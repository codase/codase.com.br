import Nullstack from 'nullstack';

import Header from './Header';
import Home from './Home';
import Analytics from './Analytics';

class Application extends Nullstack {

  static async start(context) {
    context.port = 21002;
    context.project.name = "Codase";
    context.project.domain = "codase.com.br";
    context.project.color = "#6B46C1";
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

  render() {
    return (
      <div>
        <Header />
        <Home route="/" />
        <Analytics id='G-B99CW89FRP' />
      </div>
    )
  }


}

export default Application;