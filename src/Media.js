import Nullstack from 'nullstack';

class Media extends Nullstack {

  renderPost() {
    return (
      <div class="xl m2b sm-m2b">
        <h3 class="f4 ff5"> Titulo do Post </h3>
        <p class="c11"> 
          Lorem ipsum dolor sit amet consectur adipiscing elit integer
          Lorem ipsum dolor sit amet consectur adipiscing elit integer
        </p>
        <a href="/" class="c6"> Leia mais </a>
      </div>
    )
  }

  renderPosts() {
    return (
      <div class="xl md+x6 sm-p4y md+p5l yy">
        <Post />
        <Post />
        <Post />
      </div>
    )
  }

  renderChannels() {
    return (
      <div class="xl yy md+x6">
        <iframe src="https://www.youtube.com/embed/EAp6M8Ln4Ug" width="560" height="315" />
      </div>
    )
  }

  renderTags() {
    const tags = ['nullstack', 'nullsheet', 'poisonicon'];
    return (
      <div class="xx p4 bc1y">
        {tags.map((tag) => (
          <a href={`https://codase.com.br/blog/${tag}`} class="sm-xx bc0 x6 md+x0 bg6 c7 p2y p4x sm+m1x">{tag}</a>
        ))}
        <a href={`https://codase.com.br/blog/`} class="sm-xx bc0 x6 md+x0 bg3 c0 p2y p4x sm+m1x"> Facebook </a>
        <a href={`https://codase.com.br/blog/`} class="sm-xx bc0 x6 md+x0 bg3 c0 p2y p4x sm+m1x"> Youtube </a>
        <a href={`https://codase.com.br/blog/`} class="sm-xx bc0 x6 md+x0 bg3 c0 p2y p4x sm+m1x"> Instagram </a>
      </div>
    )
  }

  render() {
    return (
      <section id="midia" class="xx">
        <div class="xxx sm-p8t md+p10t md+p8b p4x">
          <h3 class="xx sm-m6b m8b c3 sm-f4 f6 ff5"> Quem manja faz parecer simples, não enrola e compartilha! </h3>
          <Channels />
          <Posts />
        </div>
        <Tags />
      </section>
    )
  }


}

export default Media;