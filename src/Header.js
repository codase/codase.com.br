import Nullstack from 'nullstack';

import {CodaseLogo} from './Logos';

import Bars from 'poisonicon/bars/fill';
import Ex from 'poisonicon/ex/fill';
import Arrow from 'poisonicon/arrow/fill';

class Header extends Nullstack {

  index = 0;
  scrolls = 0;
  visible = false;

  initiate({environment}) {
    if(environment.client) {
      let timer;
      window.addEventListener('scroll', () => {
        this.scrolls++;
        if(this.scrolls == 10) {
          this.index ++;
          if(this.index > 8) {
            this.index = 0;
          }
          this.scrolls = 0;
        }
      })
    }
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  render({router}) {
    return (
      <header class="bg0 s1 ftl z12 sm-p4x">
        <div class="xxx">
          <div class="xl yy x6">
            <a href={router.url === '/' ? '#' : '/blog'} onclick={this.hide} default={true}>
              <CodaseLogo height={31} class="x0 sm-m4y" active={this.index} />
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
                <Bars height={16} class="x0 c3" />
              </button>
            }
          </div>
          {router.url === '/' &&
            <nav class={`xr md+x6 ${this.visible ? '' : 'sm-off'}`}>
              <a href="#" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Sobre </a>
              <a href="#open-source" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Open Source </a>
              {/*<a href="/#midia" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Mídia </a>*/}
              {/*<a href="#equipe" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Equipe </a>*/}
              <a href="#contato" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Contato </a>
              {/*<a href="/blog" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c6" onclick={this.hide} default={true}> Blog </a>*/}
            </nav>
          }
          {router.url !== '/' &&
            <nav class={`xr md+x6 ${this.visible ? '' : 'sm-off'}`}>
              <a href="/" class="yy md+x0 sm-p3y md+p2x md+p5y sm-bc1b c6" onclick={this.hide} default={true}> 
                <Arrow height={12} rotation={-90} class="x0 m1r" />
                voltar para o site
              </a>
              <a href="/blog" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Blog </a>
              <a href="/blog/nullstack" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Nullstack </a>
              <a href="/blog/nullsheet" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Nullsheet </a>
              <a href="/blog/poisonicons" class="md+x0 sm-p3y md+p2x md+p5y sm-bc1b c3" onclick={this.hide} default={true}> Poisonicon </a>
            </nav>
          }
        </div>
      </header>
    )
  }


}

export default Header;