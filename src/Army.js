import Nullstack from 'nullstack';

class Army extends Nullstack {

  renderMember({name, role}) {
    return (
      <div class="xl x2 p1">
        <img src="/placeholder.png" />
        <b class="xx c3 m1t f2"> {name} </b>
        <h5 class="xx c11 f1"> {role} </h5>
      </div>
    )
  }

  render() {
    return (
      <section id="equipe" class="xxx p12y p2x">
        <h3 class="xx c3 f7 ff5 m4b"> Nossa equipe é grande e diversa! </h3>
        <div class="xx">
          <Member name="Dayson" role="Front-end" />
          <Member name="Christian" role="Back-end" />
          <Member name="Marx" role="Atendimento" />
          <Member name="Mortaro" role="DevOps" />
          <Member name="Tio Marx" role="Financeiro" />
        </div>
        <div class="xx">
          <Member name="Chris" role="Front-end" />
          <Member name="D-son" role="Back-end" />
          <Member name="Tio Mortaro" role="Atendimento" />
          <Member name="Dayson Marx" role="DevOps" />
          <Member name="Christian Mortaro" role="Financeiro" />
        </div>
      </section>
    )
  }


}

export default Army;