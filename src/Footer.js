import Nullstack from 'nullstack';

import { CodaseLogo } from './Logos';

import Facebook from 'poisonicon/facebook/fill';
import Instagram from 'poisonicon/instagram/fill';
import Youtube from 'poisonicon/youtube/fill';
import Github from 'poisonicon/github/fill';

class Footer extends Nullstack {

  render() {
    return (
      <section class="p4b p10t yb p2x bg1">
        <div class="xxx yy p2">
          <div class="md+x6 sm-x0 sm-m6r xl">
            <a href="/" class="c12">
              <CodaseLogo height={31} class="x0"/>
            </a>
          </div>
          <div class="md+x6 sm-x0 xr yy c3">
            <a href={`https://facebook.com/codase`} class="x0 xx"><Facebook height={25} class="x0 xx" /></a>
            <a href={`https://instagram.com/codase`} class="x0 xx m2l"><Instagram height={25} class="x0 xx" /></a>
            <a href={`https://github.com/codase`} class="x0 xx m2l m2r"><Github height={25} class="x0 xx" /></a>
            <a href={`https://youtube.com/codase`} class="x0 xx"><Youtube height={30} class="x0 xx" /></a>
          </div>
        </div>
      </section>
    )
  }


}

export default Footer;