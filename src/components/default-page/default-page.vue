<template>
  <div class="preloader">
    <div class="loader_34">
      <div class="ytp-spinner">
        <div class="ytp-spinner-container">
          <div class="ytp-spinner-rotator">
            <div class="ytp-spinner-left">
              <div class="ytp-spinner-circle"></div>
            </div>
            <div class="ytp-spinner-right">
              <div class="ytp-spinner-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--====== PRELOADER ENDS START ======-->

  <!--====== HEADER PART START ======-->

  <header id="home" class="header-area pt-100">
    <div class="shape header-shape-one">
      <img src="./assets/images/banner/shape/shape-1.png" alt="shape" />
    </div>
    <!-- header shape one -->

    <div class="shape header-shape-tow animation-one">
      <img src="./assets/images/banner/shape/shape-2.png" alt="shape" />
    </div>
    <!-- header shape tow -->

    <div class="shape header-shape-three animation-one">
      <img src="./assets/images/banner/shape/shape-3.png" alt="shape" />
    </div>
    <!-- header shape three -->

    <div class="shape header-shape-fore">
      <img src="./assets/images/banner/shape/shape-4.png" alt="shape" />
    </div>
    <!-- header shape three -->

    <div class="navigation-bar">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="#">
                <img src="./assets/images2/logo.png" alt="Logo" width="250" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul id="nav" class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="page-scroll" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#about">Sobre</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#service">Serviços</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#contact">Contato</a>
                  </li>
                  <li class="nav-item" id="responsivePayNow">
                    <a
                      class="page-scroll"
                      href="https://pay.vida-facil.me/NDr8gmOXvPZBmjd"
                      >Pagar agora</a
                    >
                  </li>
                </ul>
                <!-- navbar nav -->
              </div>
              <div class="navbar-btn ml-20 d-none d-sm-block pulse">
                <a
                  id="defaultPayNow"
                  class="main-btn"
                  href="https://pay.vida-facil.me/NDr8gmOXvPZBmjd"
                >
                  Pagar Agora</a
                >
              </div>
            </nav>
            <!-- navbar -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- navigation bar -->

    <div class="header-banner d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-9 col-sm-10">
            <div class="banner-content">
              <h4
                class="sub-title wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="1s"
                >Liberte suas finanças</h4
              >
              <h1
                class="banner-title mt-10 wow fadeInUp"
                style="color: #eb3656"
                data-wow-duration="1.5s"
                data-wow-delay="2s"
              >
                <span></span> Um novo começo</h1
              >
              <a
                class="banner-contact mt-2 wow fadeInUp"
                style="color: black"
                data-wow-duration="1.5s"
                data-wow-delay="2.3s"
                href="#contact"
                >Fale Conosco</a
              >
            </div>
            <!-- banner content -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
      <div
        class="banner-image bg_cover"
        :style="`background-image: url(${capa1Image})`"
      ></div>
    </div>
    <!-- header banner -->
  </header>

  <!--====== HEADER PART ENDS ======-->

  <!--====== ABOUT PART START ======-->

  <section id="about" class="about-area pt-80 pb-130">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="about-image mt-50 clearfix">
            <div class="single-image float-left">
              <img src="./assets/images2/sobre_nos_1.png" alt="About" />
            </div>
            <!-- single image -->
            <div data-aos="fade-right" class="about-btn">
              <a class="main-btn" href="#" @click.prevent
                ><span>5</span> Anos de Mercado</a
              >
            </div>
            <div class="single-image image-tow float-right">
              <img src="./assets/images2/sobre_nos_2.png" alt="About" />
            </div>
            <!-- single image -->
          </div>
          <!-- about image -->
        </div>
        <div class="col-lg-6">
          <div class="about-content mt-45">
            <h4 class="about-welcome">Sobre nós </h4>
            <h3 class="about-title mt-10">Por Quê Devo Comprar?</h3>
            <p class="mt-25" style="text-indent: 2em; text-align: justify">
              Há 5 anos, nossa empresa se estabeleceu no mercado com uma missão
              clara: iluminar o caminho daqueles que buscam compreender o
              complexo mundo das finanças. Desde então, nos consolidamos como
              uma referência no setor, ajudando milhares de clientes a tomar
              decisões financeiras mais informadas e seguras. Nossa paixão pelo
              conhecimento e compromisso com a excelência refletem-se em cada
              página de nossos ebooks.
            </p>
            <p class="mt-25" style="text-indent: 2em; text-align: justify">
              Ao adquirir nosso ebook, você não estará apenas comprando um
              livro, mas investindo em seu futuro financeiro. Nossos conteúdos
              são meticulosamente pesquisados e atualizados, garantindo
              informações precisas e relevantes no cenário econômico atual. Cada
              capítulo é projetado para ser prático e fácil de entender,
              independentemente do seu nível de experiência em finanças. Seja
              você um iniciante ou um investidor experiente, nosso ebook
              fornecerá insights valiosos que podem transformar sua abordagem em
              relação ao dinheiro.
            </p>
            <a
              class="main-btn mt-25"
              href="https://pay.vida-facil.me/NDr8gmOXvPZBmjd"
              >PAGAR ACORDO</a
            >
          </div>
          <!-- about content -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>

  <!--====== ABOUT PART ENDS ======-->

  <!--====== SERVICES PART START ======-->

  <section id="service" class="services-area pt-125 pb-130 gray-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center pb-20">
            <h5 class="sub-title mb-15">Nosso Conteúdo</h5>
            <h2 class="title">Quais Benefícios Você Terá?</h2>
          </div>
          <!-- section title -->
        </div>
      </div>
      <!-- row -->
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div
            class="single-services text-center mt-30 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.4s"
          >
            <div class="services-icon">
              <i class="fa-regular fa-credit-card"></i>
            </div>
            <div class="services-content mt-15">
              <h4 class="services-title">Liberdade Financeira</h4>
              <p class="mt-20"
                >Com as ferramentas certas, trace um caminho sólido rumo à
                independência e estabilidade financeira.</p
              >
            </div>
          </div>
          <!-- single services -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div
            class="single-services text-center mt-30 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.8s"
          >
            <div class="services-icon">
              <i class="fa-solid fa-bullseye"></i>
            </div>
            <div class="services-content mt-15">
              <h4 class="services-title">Estratégias de Investimento</h4>
              <p class="mt-20"
                >Descubra métodos comprovados e inovadores para maximizar seus
                retornos e expandir seu portfólio.</p
              >
            </div>
          </div>
          <!-- single services -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div
            class="single-services text-center mt-30 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="1.2s"
          >
            <div class="services-icon">
              <i class="fa-solid fa-land-mine-on"></i>
            </div>
            <div class="services-content mt-15">
              <h4 class="services-title">Proteção contra Armadilhas</h4>
              <p class="mt-20"
                >Fique alerta aos erros comuns e armadilhas financeiras,
                garantindo uma jornada de investimento mais tranquila.</p
              >
            </div>
          </div>
          <!-- single services -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div
            class="single-services text-center mt-30 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.4s"
          >
            <div class="services-icon">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div class="services-content mt-15">
              <h4 class="services-title">Redução de Riscos</h4>
              <p class="mt-20"
                >Aprenda a identificar, minimizar e gerenciar riscos
                financeiros, protegendo seu patrimônio e investimentos.</p
              >
            </div>
          </div>
          <!-- single services -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div
            class="single-services text-center mt-30 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.8s"
          >
            <div class="services-icon">
              <i class="fa-regular fa-handshake"></i>
            </div>
            <div class="services-content mt-15">
              <h4 class="services-title">Abordagem Prática</h4>
              <p class="mt-20"
                >Com uma linguagem clara e exemplos concretos, aplique o
                aprendizado diretamente em sua vida financeira.</p
              >
            </div>
          </div>
          <!-- single services -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div
            class="single-services text-center mt-30 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="1.2s"
          >
            <div class="services-icon">
              <i class="fa-regular fa-clock"></i>
            </div>
            <div class="services-content mt-15">
              <h4 class="services-title">Economia de Tempo</h4>
              <p class="mt-20"
                >Aprenda técnicas que otimizam sua gestão financeira, alcançando
                seus objetivos mais rapidamente.</p
              >
            </div>
          </div>
          <!-- single services -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>

  <!--====== SERVICES PART ENDS ======-->

  <!--====== PROJECT PART START ======-->

  <section id="project" class="project-area pt-125 pb-130">
    <!-- <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center pb-50">
            <h5 class="sub-title mb-15">Featured Works</h5>
            <h2 class="title">Projects You May Love</h2>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="container-fluid">
      <div class="row project-active">
        <div class="col-lg-4">
          <div class="single-project">
            <div class="project-image">
              <img src="assets/images/project/p-1.jpg" alt="Project" />
            </div>
            <div class="project-content">
              <a class="project-title" href="#">Home Interior Design</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-project">
            <div class="project-image">
              <img src="assets/images/project/p-2.jpg" alt="Project" />
            </div>
            <div class="project-content">
              <a class="project-title" href="#">Home Interior Design</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-project">
            <div class="project-image">
              <img src="assets/images/project/p-3.jpg" alt="Project" />
            </div>
            <div class="project-content">
              <a class="project-title" href="#">Home Interior Design</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-project">
            <div class="project-image">
              <img src="assets/images/project/p-4.jpg" alt="Project" />
            </div>
            <div class="project-content">
              <a class="project-title" href="#">Home Interior Design</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-project">
            <div class="project-image">
              <img src="assets/images/project/p-5.jpg" alt="Project" />
            </div>
            <div class="project-content">
              <a class="project-title" href="#">Home Interior Design</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-project">
            <div class="project-image">
              <img src="assets/images/project/p-2.jpg" alt="Project" />
            </div>
            <div class="project-content">
              <a class="project-title" href="#">Home Interior Design</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-project">
            <div class="project-image">
              <img src="assets/images/project/p-4.jpg" alt="Project" />
            </div>
            <div class="project-content">
              <a class="project-title" href="#">Home Interior Design</a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </section>

  <!--====== PROJECT PART ENDS ======-->

  <!--====== TESTIMONIAL PART START ======-->

  <section id="testimonial" class="testimonial-area pt-130 pb-130">
    <div class="shape shape-one">
      <img src="./assets/images/testimonial/shape.png" alt="testimonial" />
    </div>
    <div class="shape shape-tow">
      <img src="./assets/images/testimonial/shape.png" alt="testimonial" />
    </div>
    <div class="shape shape-three">
      <img src="./assets/images/testimonial/shape.png" alt="testimonial" />
    </div>
    <div class="container">
      <div
        class="testimonial-bg bg_cover pt-80 pb-80"
        :style="`background-image: url(${notebookImage})`"
      >
        <div class="row">
          <div
            class="col-xl-4 offset-xl-7 col-lg-5 offset-lg-6 col-md-8 offset-md-2 col-sm-10 offset-sm-1"
          >
            <div class="testimonial-active">
              <div class="single-testimonial text-center">
                <div class="testimonial-image">
                  <img
                    src="./assets/images2/user_masculino.png"
                    width="90"
                    alt="Testimonial"
                  />
                  <div class="quota">
                    <i class="lni-quotation"></i>
                  </div>
                </div>
                <div class="testimonial-content mt-20">
                  <p
                    >Sou empresário e estava buscando maneiras de melhorar a
                    gestão financeira do meu negócio. O ebook foi uma verdadeira
                    revelação! Com ele, aprendi não só sobre investimentos e
                    otimização de recursos, mas também sobre a importância de
                    uma visão estratégica nas finanças. Hoje, sinto que tenho as
                    ferramentas necessárias para tomar decisões mais informadas
                    e garantir o crescimento sustentável da minha empresa.</p
                  >
                  <h5 class="testimonial-name mt-15">Lucas</h5>
                  <span class="sub-title">Cliente</span>
                </div>
              </div>
              <!-- single-testimonial -->
              <div class="single-testimonial text-center">
                <div class="testimonial-image">
                  <img
                    src="./assets/images2/user_masculino.png"
                    width="90"
                    alt="Testimonial"
                  />
                  <div class="quota">
                    <i class="lni-quotation"></i>
                  </div>
                </div>
                <div class="testimonial-content mt-20">
                  <p
                    >Durante anos, deixei minha situação financeira ao sabor do
                    destino, vivendo de salário em salário e enfrentando
                    dificuldades para equilibrar as contas no final do mês. Por
                    isso, gostaria de agradecer por todas as dicas e exemplos
                    disponibilizados, comecei a reformular minha visão sobre
                    dinheiro e investimentos. Hoje, tenho um orçamento bem
                    estruturado, estou economizando de forma consistente e, pela
                    primeira vez, estou explorando oportunidades de investimento
                    que antes pareciam inatingíveis.</p
                  >
                  <h5 class="testimonial-name mt-15">Israel</h5>
                  <span class="sub-title">Cliente</span>
                </div>
              </div>
              <!-- single-testimonial -->
              <div class="single-testimonial text-center">
                <div class="testimonial-image">
                  <img
                    src="./assets/images2/user_feminino.png"
                    width="90"
                    alt="Testimonial"
                  />
                  <div class="quota">
                    <i class="lni-quotation"></i>
                  </div>
                </div>
                <div class="testimonial-content mt-20">
                  <p
                    >Nunca fui muito ligada em finanças e, honestamente,
                    investir parecia algo distante e complicado. Depois de ler o
                    ebook, tudo mudou! Os conceitos são apresentados de forma
                    clara e didática, tornando o mundo dos investimentos muito
                    mais acessível. Com as dicas e estratégias fornecidas,
                    consegui montar minha carteira de investimentos e estou
                    vendo meu dinheiro render mais do que nunca.</p
                  >
                  <h5 class="testimonial-name mt-15">Joana</h5>
                  <span class="sub-title">Cliente</span>
                </div>
              </div>
              <!-- single-testimonial -->
            </div>
            <!--  testimonial active -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- testimonial bg -->
    </div>
    <!-- container -->
  </section>

  <!--====== TESTIMONIAL PART ENDS ======-->

  <!--====== CONTACT PART START ======-->

  <section id="contact" class="contact-area pt-125 pb-130 gray-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center pb-20">
            <h5 class="sub-title mb-15">Fale Conosco</h5>
            <h2 class="title">ENTRE EM CONTATO</h2>
          </div>
          <!-- section title -->
        </div>
      </div>
      <!-- row -->
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="contact-form">
            <form
              id="contact-form"
              @submit.prevent="onSendMessage"
              method="post"
              data-toggle="validator"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="single-form form-group">
                    <input
                      type="text"
                      v-model="messageForm.name"
                      name="name"
                      placeholder="Seu Nome"
                      data-error="Informe um nome."
                      required="required"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                  <!-- single form -->
                </div>
                <div class="col-md-6">
                  <div class="single-form form-group">
                    <input
                      type="email"
                      v-model="messageForm.email"
                      name="email"
                      placeholder="Seu Email"
                      data-error="Informe um e-mail válido."
                      required="required"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                  <!-- single form -->
                </div>
                <div class="col-md-6">
                  <div class="single-form form-group">
                    <input
                      type="text"
                      v-model="messageForm.subject"
                      name="subject"
                      placeholder="Assunto"
                      data-error="Informe um assunto."
                      required="required"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                  <!-- single form -->
                </div>
                <div class="col-md-6">
                  <div class="single-form form-group">
                    <input
                      type="text"
                      v-model="messageForm.phone"
                      name="phone"
                      placeholder="Telefone"
                      data-error="Informe um telefone."
                      required="required"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                  <!-- single form -->
                </div>
                <div class="col-md-12">
                  <div class="single-form form-group">
                    <textarea
                      placeholder="Sua Mensagem"
                      v-model="messageForm.message"
                      name="message"
                      data-error="Escreva uma mensagem."
                      required="required"
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                  <!-- single form -->
                </div>
                <p class="form-message"></p>
                <div class="col-md-12">
                  <div class="single-form form-group text-center">
                    <button type="submit" class="main-btn"
                      >Enviar Mensagem</button
                    >
                  </div>
                  <!-- single form -->
                </div>
              </div>
            </form>
            <!-- row -->
          </div>
          <!-- row -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>

  <!--====== CONTACT PART ENDS ======-->

  <!--====== MAP PART START ======-->

  <section id="map" class="map-area">
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Rua Rio Jacuí Xangri-lá 95588-000&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
    <div
      class="map-bg bg_cover d-none d-lg-block"
      :style="`background-image: url(${escritorioImage})`"
    ></div>
  </section>

  <!--====== MAP PART ENDS ======-->

  <!--====== FOOTER PART START ======-->

  <footer id="footer" class="footer-area">
    <div class="footer-widget pt-80 pb-130">
      <div class="container" id="footerContainer">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-8">
            <div class="footer-logo mt-50">
              <a href="#">
                <img src="./assets/images2/logo.png" alt="Logo" width="250px" />
              </a>
              <ul class="footer-info">
                <li>
                  <div class="single-info">
                    <div class="info-icon">
                      <i class="lni-envelope"></i>
                    </div>
                    <div class="info-content">
                      <p>libertesuasfinancas@hotmail.com</p>
                    </div>
                  </div>
                  <!-- single info -->
                </li>
                <li>
                  <div class="single-info">
                    <div class="info-icon">
                      <i class="lni-map"></i>
                    </div>
                    <div class="info-content">
                      <p
                        >Rua Rio Jacuí, 5667 - Xangri-lá - Rio Grande Do Sul -
                        95588-000 - Brasil</p
                      >
                    </div>
                  </div>
                  <!-- single info -->
                </li>
              </ul>
              <ul class="footer-social mt-20">
                <li
                  ><a href="https://www.instagram.com/libertesuasfinancas_/"
                    ><i class="fa-brands fa-instagram"></i></a
                ></li>
                <li
                  ><a href="mailto:libertesuasfinancas@hotmail.com"
                    ><i class="fa-regular fa-envelope"></i></a
                ></li>
                <li
                  ><a href="https://pay.vida-facil.me/NDr8gmOXvPZBmjd"
                    ><i class="fa-regular fa-credit-card"></i></a
                ></li>
              </ul>
            </div>
            <!-- footer logo -->
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="footer-link mt-45">
              <div class="f-title">
                <h4 class="title">Benefícios Extras</h4>
              </div>
              <ul class="mt-15" @click.prevent>
                <li
                  ><a href="#" style="cursor: inherit"
                    >Mentoria Financeira Individual</a
                  ></li
                >
                <li
                  ><a href="#" style="cursor: inherit"
                    >Acesso antecipado à novos lançamentos</a
                  ></li
                >
                <li><a href="#" style="cursor: inherit">FAQ</a></li>
                <li
                  ><a href="#" style="cursor: inherit"
                    >Biblioteca de Recursos Extras</a
                  ></li
                >
                <li
                  ><a href="#" style="cursor: inherit"
                    >Recebimento das principais notificações do mercado</a
                  ></li
                >
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-8">
            <div class="footer-newsleter mt-45">
              <div class="f-title">
                <h4 class="title">Últimas Notícias</h4>
              </div>
              <div class="footer-link" @click.prevent>
                <ul class="mt-15">
                  <li
                    ><a href="#" style="cursor: inherit"
                      >Produto premiado: Já alcançamos a marca de mais de 2.000
                      exemplares vendidos.</a
                    ></li
                  >
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- footer widget -->
    <div class="copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright text-center">
              <p>LIBERTE SUAS FINANCAS©2023 - Todos os direitos reservados</p>
            </div>
            <!-- copyright -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- copyright-area -->
  </footer>

  <!--====== FOOTER PART ENDS ======-->

  <!--====== BACK TO TOP PART START ======-->

  <a href="#" class="back-to-top"><i class="lni-chevron-up"></i></a>
</template>

<script>
import { ref } from 'vue';
import toast from '../../ui/toast.js';
import escritorioImage from './assets/images2/escritorio.jpg';
import notebookImage from './assets/images2/notebook.jpg';
import capa1Image from './assets/images2/capa1.png';

export default {
  name: 'DefaultPage',
  setup() {
    const setDefaultMessageFormData = () => ({
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: ''
    });

    const messageForm = ref(setDefaultMessageFormData());

    const onRedirectToDefaultCheckout = () => {
      // window.gtag('event', 'ButtonDefaultClick', {
      //   event_category: 'ButtonClick',
      //   event_label: 'ButtonDefaultClick'
      // });
    };

    const onSendMessage = () => {
      toast.success('Mensagem enviada com sucesso!');
      messageForm.value = setDefaultMessageFormData();
    };

    return {
      onRedirectToDefaultCheckout,
      onSendMessage,
      messageForm,
      escritorioImage,
      notebookImage,
      capa1Image
    };
  }
};
</script>

<style scoped>
@import './assets/css/bootstrap.min.css';
@import './assets/css/font-awesome.min.css';
@import './assets/css/LineIcons.css';
@import './assets/css/animate.css';
@import './assets/css/aos.css';
@import './assets/css/slick.css';
@import './assets/css/default.css';
@import './assets/css/style.css';

.pulse {
  animation: pulse 0.5s ease alternate infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

#defaultPayNow {
  display: block;
}

#responsivePayNow {
  display: none;
}

@media (max-width: 767px) {
  #defaultPayNow {
    display: none;
  }

  #responsivePayNow {
    display: block;
  }
}

@media (min-width: 768px) {
  #footerContainer {
    max-width: 900px !important;
  }
}
</style>
