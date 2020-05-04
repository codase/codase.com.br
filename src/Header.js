import Nullstack from 'nullstack';

class Header extends Nullstack {

  render() {
    return (
      <header class="bg0 s1 ftl">
        <div class="xxx p2x">
          <div class="xl x6">
            Logo
          </div>
          <nav class="xr x6">
            <a href="/" class="x0 p1x p2y"> Sobre </a>
            <a href="/" class="x0 p1x p2y"> Open Source </a>
            <a href="/" class="x0 p1x p2y"> Mídia </a>
            <a href="/" class="x0 p1x p2y"> Equipe </a>
            <a href="/" class="x0 p1x p2y"> Contato </a>
          </nav>
        </div>
      </header>
    )
  }


}

export default Header;