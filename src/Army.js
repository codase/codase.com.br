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
      <section id="equipe" class="xxx sm-p8t sm-p4b md+p10y md+p8b p4x">
        <h3 class="xx sm-m6b m8b c3 sm-f4 f6 ff5"> Nossa equipe é grande e diversa! </h3>
        <div class="xl" style="overflow-x: auto">
          <div class="xl sm-p2b" style="min-width: 900px">
            <Member name="Dayson" role="Front-end" />
            <Member name="Christian" role="Back-end" />
            <Member name="Marx" role="Atendimento" />
            <Member name="Mortaro" role="DevOps" />
            <Member name="Tio Marx" role="Financeiro" />
            <Member name="Sr. M" role="UX Designer" />
          </div>
        </div>
        <div class="xl" style="overflow-x: auto">
          <div class="xl sm-p2b" style="min-width: 900px">
            <Member name="Chris" role="Front-end" />
            <Member name="D-son" role="Back-end" />
            <Member name="Tio Mortaro" role="Atendimento" />
            <Member name="Dayson Marx" role="DevOps" />
            <Member name="Christian Mortaro" role="Financeiro" />
            <Member name="Sr. M" role="UX Designer" />
          </div>
        </div>
      </section>
    )
  }


}

export default Army;