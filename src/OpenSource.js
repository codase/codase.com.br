import Nullstack from 'nullstack';

class OpenSource extends Nullstack {

  renderNullsheet() {
    return (
      <div class="xx md+x4 p1 m2t">
        <div class="xx bg1 p3">
          <p class="xx p2y c12"> Texto sobre o nullsheet, nosso framework de css </p>
          <div class="xx">
            <a href="/" class="xx x0 c3 p1x"> Source </a>
            <a href="/" class="xx x0 c3 p1x"> Docs </a>
            <a href="/" class="xx x0 c3 p1x"> Blog </a>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section class="xxx p4y p2x">
        <h1 class="xx c3"> Titulo do Open Source </h1>
        <p class="xx c12"> 
          Nós vendemos resultado mas nos importamos com tecnologia.
        </p>
        <p class="xx c12"> 
          Quando falamos que usamos tecnologias modernas,
          nos referimos a frameworks que nos mesmos criamos
          (obviamente tem que trocar essa frase soh queria o espaço)
        </p>
        <Nullsheet />
        <Nullsheet />
        <Nullsheet />
      </section>
    )
  }


}

export default OpenSource;