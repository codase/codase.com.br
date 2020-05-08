import Nullstack from 'nullstack';

import {CodaseLogo} from './Logos';

class Header extends Nullstack {

  render() {
    return (
      <header class="bg0 s1 ftl">
        <div class="xxx">
          <div class="xl yy x6">
            <a href="#">
              <CodaseLogo height={31} class="x0" />
            </a>
          </div>
          <nav class="xr x6">
            <a href="#sobre" class="x0 p1x p2y c3"> Sobre </a>
            <a href="#open-source" class="x0 p1x p2y c3"> Open Source </a>
            <a href="#midia" class="x0 p1x p2y c3"> Mídia </a>
            <a href="#equipe" class="x0 p1x p2y c3"> Equipe </a>
            <a href="#contato" class="x0 p1x p2y c3"> Contato </a>
            <a href="/blog" class="x0 p1x p2y c6"> Blog </a>
          </nav>
        </div>
      </header>
    )
  }


}

export default Header;