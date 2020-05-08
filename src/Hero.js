import Nullstack from 'nullstack';

class Hero extends Nullstack {

  render() {
    return (
      <section id="hero" class="p4y p2x p12t" style=" background: url(/hero.svg) center; height: 800px;">
        <div class="xxl">
          <div class="xl yt md+x6">
            <div class="xl">
              <h1 class="xl c3 f8 m3b ff5"> Desenvolvemos web apps que te ajudam a para de perdem tempo. </h1>
              <a href="#contato" class="x0 bg6 c7 x0 p2x p1y s1 "> Nos conte seus problemas </a>
            </div>
          </div>
        </div>
      </section>
    )
  }


}

export default Hero;