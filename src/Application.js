import Nullstack from 'nullstack';

import Header from './Header';
import Home from './Home';
import Blog from './Blog';
import Analytics from './Analytics';

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

  render({metadata}) {
    return (
      <div>
        <Header />
        <Home route="/" />
        <Blog route="/blog" />
        <Analytics id='G-B99CW89FRP' />
      </div>
    )
  }


}

export default Application;