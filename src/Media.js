import Nullstack from 'nullstack';

class Media extends Nullstack {

  renderPost() {
    return (
      <div class="xl m2b">
        <h3 class="f4 ff5"> Titulo do Post </h3>
        <p class="c11"> Lorem ipsum dolor sit amet consectur adipiscing elit integer </p>
        <a href="/" class="c6"> Leia mais </a>
      </div>
    )
  }

  renderPosts() {
    return (
      <div class="xl md+x6">
        <Post />
        <Post />
        <Post />
      </div>
    )
  }

  renderChannels() {
    return (
      <div class="xl md+x6">
        <iframe src="https://www.youtube.com/embed/EAp6M8Ln4Ug" />
        <div class="xl yy">
          <div class="x2 yy">
            <span class="c3">Icon</span>
          </div>
          <div class="x10 xl">
            <a href="/" class="c3"> Youtube </a>
            <p class="c11"> Para pa pa pa tim bum </p>
          </div>
        </div>
        <div class="xl yy">
          <div class="x2 yy">
            <span class="c3">Icon</span>
          </div>
          <div class="x10 xl">
            <a href="/" class="c3"> Youtube </a>
            <p class="c11"> Para pa pa pa tim bum </p>
          </div>
        </div>
        <div class="xl yy">
          <div class="x2 yy">
            <span class="c3">Icon</span>
          </div>
          <div class="x10 xl">
            <a href="/" class="c3"> Youtube </a>
            <p class="c11"> Para pa pa pa tim bum </p>
          </div>
        </div>
      </div>
    )
  }

  renderTags() {
    const tags = ['nullstack', 'nullsheet', 'poisonicon', 'under-the-hood', 'descontentamentos', 'novidades'];
    return (
      <div class="xx m4t">
        {tags.map((tag) => (
          <a href={`https://codase.com.br/blog/${tag}`} class="x0 bg3 c0 p1y p2x m1x">{tag}</a>
        ))}
      </div>
    )
  }

  render() {
    return (
      <section class="xxx p12y p2x">
        <h3 class="xx m6b c3 f6 ff5"> Quem manja faz parecer simples, não enrola e compartilha! </h3>
        <Posts />
        <Channels />
        <Tags />
      </section>
    )
  }


}

export default Media;