import Nullstack from 'nullstack';

class Contact extends Nullstack {

  render() {
    return (
      <section id="contato" class="xl p12y p2x bg1">
        <div class="xxx p2x md+p12x">
          <h2 class="xx c3 f6 m3b ff5"> Com qual setor você quer falar? </h2>
          <div class="xx m1t md+x4">
            <select class="p1y p2x s1">
              <option> Atendimento </option>
              <option> Financeiro </option>
              <option> Desenvolvimento </option>
            </select>
          </div>
          <div class="xx m1t md+x4 md+p1x">
            <input placeholder="Seu nome" class="p1y p2x s1" />
          </div>
          <div class="xx m1t md+x4">
            <input placeholder="Seu email ou telefone" class="p1y p2x s1" />
          </div>
          <div class="xx m1t">
            <textarea rows="5" placeholder="Sua mensagem" class="p1y p2x s1" />
          </div>
          <div class="xl m1t">
            <button class="bg6 c7 x0 p2x p1y s1"> Enviar Mensagem </button>
          </div>
        </div>
      </section>
    )
  }


}

export default Contact;