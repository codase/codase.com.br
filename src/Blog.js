import Nullstack from 'nullstack';

class Blog extends Nullstack {

  initialize({metadata}) {
    metadata.title = "Codase - Blog";
    metadata.description = "Desenvolvemos web apps para otimizar processos que te ajudam a parar de perder tempo.";
    metadata.image = "https://codase.com.br/share.png";
    metadata.type = "website";
    metadata.project = "Codase";
    metadata.canonical = "https://codase.com.br";
    metadata.locale = "pt-BR";
  }

  render() {
    return (
      <div>
        Blog is coming soon...
      </div>
    )
  }

}

export default Blog;