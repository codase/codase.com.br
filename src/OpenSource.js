import Nullstack from 'nullstack';

import { NullsheetLogo, NullstackLogo, PoisoniconLogo } from './Logos';

class OpenSource extends Nullstack {

  renderProject({logo: Logo, description, objective, source, docs}) {
    return (
      <div class="xx md+x4 md+p2 sm-m2b">
        <div class="xx bg4 p5x sm-p5y md+p7y">
          <Logo height={35} color="#fff" />
          <p class="xx p4y c0 bc2b f1"> {description} </p>
          <p class="xx p6x p4t p2b p1b c0"> {objective} </p>
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
      <section id="open-source" class="sm-p9t md+p11t md+p8b p2x bg3">
        <div class="xxx p8y">
          <h2 class="xx c0 sm-f4 f6 m5b ff5 sm-m8t"> Papo reto, Código aberto </h2>
          <p class="xx c0"> 
            Não tem segredo nenhum, nossa experiência nos levou a criar ferramentas que nos tornam mais produtivos.
          </p>
          <p class="xx c0 m5b"> 
            Sabemos quando é hora de reinventar a roda e não temos medo de compartilhar nossas descobertas.
          </p>
          <Project
            logo={NullsheetLogo}
            title="Nullsheet"
            description="More style less bullshit"
            objective="Reinventamos a roda para acelerar nosso workflow"
            source="https://github.com/nullsheet/nullsheet"
            docs="https://github.com/nullsheet/nullsheet"
          />
          <Project 
            logo={NullstackLogo}
            title="Nullstack"
            description="Fullstack components for one man armies"
            objective="Reinventamos a roda porque as outras eram meio quadradas"
            source="https://github.com/nullstack/nullstack"
            docs="https://github.com/nullstack/nullstack"
          />
          <Project 
            logo={PoisoniconLogo}
            title="Nullsheet"
            description="Pick your poison(icon)"
            objective="Reinventamos a roda porque...ficou bonitinho."
            source="https://github.com/poisonicon/poisonicon"
            docs="https://github.com/poisonicon/poisonicon"
          />
        </div>
      </section>
    )
  }


}

export default OpenSource;