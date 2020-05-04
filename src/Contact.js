import Nullstack from 'nullstack';

class Contact extends Nullstack {

  render() {
    return (
      <section class="xxx p4y p2x">
        <h1 class="xl c3"> Com qual setor você quer falar? </h1>
        <div class="xx m2t md+x4">
          <select class="bc11 p2y p4x">
            <option> Atendimento </option>
            <option> Financeiro </option>
            <option> Desenvolvimento </option>
          </select>
        </div>
        <div class="xx m2t md+x4 md+p2x">
          <input placeholder="Seu nome" class="bc11 p2y p4x" />
        </div>
        <div class="xx m2t md+x4">
          <input placeholder="Seu email ou telefone" class="bc11 p2y p4x" />
        </div>
        <div class="xx m2t">
          <textarea rows="3" placeholder="Sua mensagem" class="bc11 p2y p4x" />
        </div>
        <div class="xl m2t">
          <button class="p4x p2y bg6 c3 x0"> Enviar Mensagem </button>
        </div>
      </section>
    )
  }


}

export default Contact;