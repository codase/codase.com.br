import Nullstack from 'nullstack';

class About extends Nullstack {

  renderWhatWeAre() {
    return (
      <div class="xx md+x6 p1">
        <div class="xx p1 bc3">
          <div class="xx bg1 p3">
            <h3 class="xx m2b c3"> Oque Somos </h3>
            <p class="xl"> Desenvolvedores Fullstack de verdade. </p>
            <p class="xl"> Seremos responsáveis pelo seu projeto do layout a infraestrutura. </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section class="xxx p4y p2x">
        <WhatWeAre />
        <WhatWeAre />
        <WhatWeAre />
        <WhatWeAre />
      </section>
    )
  }


}

export default About;