import Nullstack from 'nullstack';

import {CodaseLogo} from './Logos';

import Hamburger from 'poisonicon/menu/fill';
import Ex from 'poisonicon/ex/fill';

class Header extends Nullstack {

  visible = false;

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  render() {
    return (
      <header class="bg0 s1 ftl z12 sm-p4x">
        <div class="xxx">
          <div class="xl yy x6">
            <a href="#" onclick={this.hide} default={true}>
              <CodaseLogo height={31} class="x0 sm-m3y" />
            </a>
          </div>
          <div class="xr yy x6 md+off">
            {this.visible &&
              <button class="x0" onclick={this.hide}>
                <Ex height={16} class="x0 c3" />
              </button>
            }
            {!this.visible &&
              <button class="x0" onclick={this.show}>
                <Hamburger height={16} class="x0 c3" />
              </button>
            }
          </div>
          <nav class={`xr md+x6 ${this.visible ? '' : 'sm-off'}`}>
            <a href="#sobre" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Sobre </a>
            <a href="#open-source" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Open Source </a>
            <a href="#midia" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Mídia </a>
            <a href="#equipe" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Equipe </a>
            <a href="#contato" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Contato </a>
            <a href="/blog" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c6" onclick={this.hide} default={true}> Blog </a>
          </nav>
        </div>
      </header>
    )
  }


}

export default Header;