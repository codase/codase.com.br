import Nullstack from 'nullstack';

class Contact extends Nullstack {

  render() {
    return (
      <section id="contato" class="xl sm-p8t sm-p4b md+p10t md+p8b p4x bg1">
        <div class="xxx p2x md+p12x">
          <h2 class="xx c3 sm-f3 f6 ff5"> Com qual setor você quer falar? </h2>
          <p class="xx c11 m1t"> Brinks, deixe sua mensagem abaixo ou envie um email para </p>
          <div class="xx m5b">
            <a href="mailto:contato@codase.com.br" class="c3 x0 m1l">contato@codase.com.br</a>
          </div>
          <div class="xx m1t md+x6 md+p1r">
            <input placeholder="Seu nome" class="p5x p3y s1" />
          </div>
          <div class="xx m1t md+x6">
            <input placeholder="Seu email ou telefone" class="p5x p3y s1" />
          </div>
          <div class="xx m1t">
            <textarea rows="5" placeholder="Sua mensagem" class="p5x p3y s1" />
          </div>
          <div class="xx m5t">
            <button class="xx md+x0 bg6 c7 p5x p3y s1"> Enviar Mensagem </button>
          </div>
        </div>
      </section>
    )
  }


}

export default Contact;