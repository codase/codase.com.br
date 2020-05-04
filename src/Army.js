import Nullstack from 'nullstack';

class Army extends Nullstack {

  renderMember() {
    return (
      <div class="xl x2 p1">
        <b class="xx c12 m1y f2"> Christian Mortaro </b>
        <h5 class="xx c11 f1"> Front-end dev </h5>
      </div>
    )
  }

  render() {
    return (
      <section class="xxx p4y p2x">
        <h2 class="xx c3 f7"> Two men army </h2>
        <div class="xx">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
        <div class="xx">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
      </section>
    )
  }


}

export default Army;