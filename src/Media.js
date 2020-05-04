import Nullstack from 'nullstack';

class Media extends Nullstack {

  renderPost() {
    return (
      <div class="xl">
        <h3 class="c12"> Titulo do Post </h3>
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

  renderTag() {
    return (
      <a href="/" class="x0 p1y p2x m1x bg3 c0"> #nullstack </a>
    )
  }

  renderTags() {
    return (
      <div class="xx m4t">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    )
  }

  render() {
    return (
      <section class="xxx p4y p2x">
        <h1 class="c3"> Mídia </h1>
        <Posts />
        <Channels />
        <Tags />
      </section>
    )
  }


}

export default Media;