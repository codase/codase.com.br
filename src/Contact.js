import Nullstack from 'nullstack';

class Contact extends Nullstack {

  name = '';
  contact = '';
  message = 'Olá,';

  error = '';

  sent = false;

  static async deliverEmail({name, contact, message}) {
    const {default: nodemailer} = await import('nodemailer');
    const mailTransport = nodemailer.createTransport({    
      host: "smtpout.secureserver.net",  
      secure: true,
      secureConnection: false,
      tls: {
        ciphers:'SSLv3'
      },
      requireTLS:true,
      port: 465,
      debug: true,
      auth: {
        user: "contato@codase.com.br",
        pass: process.env.EMAIL_PASSWORD 
      }
    });
    const mailOptions = {
      from: 'contato@codase.com.br',
      to: 'contato@codase.com.br',
      subject: `Contato via codase.com.br`,
      text: [name, contact, message].join("\n\n"),
    };
    mailTransport.sendMail(mailOptions).then(() => {
      console.log('Email sent successfully');
    }).catch((err) => {
      console.log('Failed to send email');
      console.error(err);
    });
  }

  async send() {
    if(!this.name || !this.contact || !this.message) {
      this.error = "Por favor preencha todos os campos acima";
    } else {
      this.sent = true;
      await this.deliverEmail({name: this.name, contact: this.contact, message: this.message});
    }
  }

  renderForm() {
    return (
      <form class="xxx p2x md+p12x" onsubmit={this.send}>
        <h2 class="xx c3 sm-f3 f6 ff5"> Com qual setor você quer falar? </h2>
        <p class="xx c11 m1t"> Brinks, deixe sua mensagem abaixo ou envie um email para </p>
        <div class="xx m5b">
          <a href="mailto:contato@codase.com.br" class="c3 x0 m1l">contato@codase.com.br</a>
        </div>
        <div class="xx m1t md+x6 md+p1r">
          <input bind="name" placeholder="Seu nome" class="p5x p3y s1" />
        </div>
        <div class="xx m1t md+x6">
          <input bind="contact" placeholder="Seu email ou telefone" class="p5x p3y s1" />
        </div>
        <div class="xx m1t">
          <textarea bind="message" rows="5" placeholder="Sua mensagem" class="p5x p3y s1" />
        </div>
        {!!this.error && <p class="xx c10 m5t"> {this.error} </p>}
        <div class="xx m5t">
          <button class="xx md+x0 bg6 c7 p5x p3y s1"> Enviar Mensagem </button>
        </div>
      </form>
    )
  }

  renderThanks() {
    return (
      <div class="xx">
        <p class="xx c3 sm-f3 f6 ff5"> Obrigado por nos enviar uma mensagen! </p>
        <p class="xx ff5"> Entraremos em contato em breve. </p>
      </div>
    )
  }

  render() {
    return (
      <section id="contato" class="xl sm-p8t sm-p4b md+p10t md+p8b p4x bg1">
        {!this.sent && <Form />}
        {this.sent && <Thanks />}
      </section>
    )
  }


}

export default Contact;