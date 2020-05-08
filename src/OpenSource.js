import Nullstack from 'nullstack';

class OpenSource extends Nullstack {

  renderProject({logo, title, description, objective, source, docs}) {
    return (
      <div class="xx md+x4 p1 sm-m2b">
        <div class="xx bg4 p3y p6x">
          <p class="xx p1y c0 bc2b"> {description} </p>
          <small class="xx p1y c0"> {objective} </small>
          <div class="xx">
            <a href={source} class="xx x0 c6 p1x"> Source </a>
            <span class="c0 x0"> & </span>
            <a href={docs} class="xx x0 c6 p1x"> Docs </a>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section class="p12y p2x bg3">
        <div class="xxx">
          <h2 class="xx c0 f6 m3b ff5"> Papo reto, Código aberto </h2>
          <p class="xx c0"> 
            Não tem segredo nenhum, nossa experiência nos levou a criar ferramentas que nos tornam mais produtivos.
          </p>
          <p class="xx c0 m3b"> 
            Sabemos quando é hora de reinventar a roda e não temos medo de compartilhar nossas descobertas.
          </p>
          <Project
            title="Nullsheet"
            description="More style less bullshit"
            objective="Reinventamos a roda para acelerar nosso workflow"
            source="https://github.com/nullsheet/nullsheet"
            docs="https://github.com/nullsheet/nullsheet"
          />
          <Project 
            title="Nullstack"
            description="Fullstack components for one man armies"
            objective="Reinventamos a roda porque as outras eram meio quadradas"
            source="https://github.com/nullstack/nullstack"
            docs="https://github.com/nullstack/nullstack"
          />
          <Project 
            title="Nullsheet"
            description="More style less bullshit"
            objective="Reinventamos a roda para acelerar nosso workflow"
            source="https://github.com/nullstack/nullstack"
            docs="https://github.com/nullstack/nullstack"
          />
        </div>
      </section>
    )
  }


}

export default OpenSource;