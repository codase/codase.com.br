import Nullstack from 'nullstack';

class Analytics extends Nullstack {

  initiate({environment, id}) {
    if(environment.client) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      const gtag = function() {
        (window.dataLayer || []).push(arguments);
      };
      const track = () => {
        gtag('js', new Date());
        gtag('config', id);
      }
      script.onreadystatechange = track;
      script.onload = track;
      document.getElementsByTagName('head')[0].appendChild(script);
      window.addEventListener('popstate', track);
    }
  }

}

export default Analytics;