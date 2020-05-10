import Nullstack from 'nullstack';

import { CodaseLogo } from './Logos';

class Footer extends Nullstack {

  render() {
    return (
      <section class="p4y yb p2x bg1" id="footer">
        <div class="xxx yy p2">
          <div class="xl md+x2">
            <a href="/" class="c12">
              <CodaseLogo height={31}/>
            </a>
          </div>
          <div class="xr md+x10">
            <a href="/" class="x0 c12"> OpenSource no Github </a>
          </div>
        </div>
      </section>
    )
  }


}

export default Footer;