import Nullstack from 'nullstack';

import {CodaseLogo} from './Logos';

class Header extends Nullstack {

  render() {
    return (
      <header class="bg0 s1 ftl">
        <div class="xxx p2x">
          <div class="xl yy x6">
            <CodaseLogo height={31} class="x0" />
          </div>
          <nav class="xr x6">
            <a href="/" class="x0 p1x p2y c3"> Sobre </a>
            <a href="/" class="x0 p1x p2y c3"> Open Source </a>
            <a href="/" class="x0 p1x p2y c3"> Mídia </a>
            <a href="/" class="x0 p1x p2y c3"> Equipe </a>
            <a href="/" class="x0 p1x p2y c3"> Contato </a>
          </nav>
        </div>
      </header>
    )
  }


}

export default Header;