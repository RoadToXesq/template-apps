<template>
  <div id="firstPage">
    <nav class="nav">
      <img src="logo.png" />
      <div class="saldo">
        <span id="saldo-txt">R$ 20,00</span>
      </div>
    </nav>

    <div class="conteudo">
      <div class="box" id="marca1">
        <div class="titulo">
          <svg
            style="width: 15px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-4 text-slate-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            ></path>
          </svg>
          Perguntas
        </div>

        <img class="produto" src="iphone.png" alt="iphone" />

        <h2
          >De 0 a 5, que nota você dá para o Iphone 15 Pro Max lançado
          recentemente?</h2
        >

        <div class="notas">
          <a class="nota nota-1 text-white">
            <i class="far fa-tired"></i>
          </a>

          <a class="nota nota-2 text-white">
            <i class="far fa-frown"></i>
          </a>

          <a class="nota nota-3 text-white">
            <i class="far fa-meh"></i>
          </a>

          <a class="nota nota-4 text-white">
            <i class="far fa-smile"></i>
          </a>
          <a class="nota nota-5 text-white"
            ><i class="far fa-laugh-beam"></i>
          </a>
        </div>

        <h2>Em um celular, você prefere Bateria ou Câmera?</h2>

        <div class="sim_nao">
          <a class="sim_nao sim_nao-A">Bateria</a>
          <a class="sim_nao sim_nao-B">Câmera</a>
        </div>

        <h2>Você pagaria R$11.200,00 neste celular?</h2>

        <div class="sim_nao">
          <a class="sim_nao sim_nao-A">Sim</a>
          <a class="sim_nao sim_nao-B">Não</a>
        </div>

        <button type="button" id="enviar-marca1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            style="width: 20px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            ></path>
          </svg>

          <span> Enviar respostas </span>
        </button>
      </div>

      <div id="modal-marca1" class="modal">
        <div class="modal-content">
          <div class="checkmark-container">
            <div class="checkmark">
              <svg
                class="confetti"
                height="19"
                viewBox="0 0 19 19"
                width="19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                  fill="#00C8E5"
                />
              </svg>
              <svg
                class="confetti"
                height="19"
                viewBox="0 0 19 19"
                width="19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                  fill="#00C8E5"
                />
              </svg>
              <svg
                class="confetti"
                height="19"
                viewBox="0 0 19 19"
                width="19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                  fill="#00C8E5"
                />
              </svg>
              <svg
                class="confetti"
                height="19"
                viewBox="0 0 19 19"
                width="19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                  fill="#00C8E5"
                />
              </svg>
              <svg
                class="confetti"
                height="19"
                viewBox="0 0 19 19"
                width="19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                  fill="#00C8E5"
                />
              </svg>
              <svg
                class="confetti"
                height="19"
                viewBox="0 0 19 19"
                width="19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                  fill="#00C8E5"
                />
              </svg>
              <svg
                class="checkmark__check"
                height="36"
                viewBox="0 0 48 36"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.248 3.9L43.906.667a2.428 2.428 0 0 0-3.344 0l-23.63 23.09-9.554-9.338a2.432 2.432 0 0 0-3.345 0L.692 17.654a2.236 2.236 0 0 0 .002 3.233l14.567 14.175c.926.894 2.42.894 3.342.01L47.248 7.128c.922-.89.922-2.34 0-3.23"
                />
              </svg>
              <svg
                class="checkmark__back"
                height="115"
                viewBox="0 0 120 115"
                width="120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M107.332 72.938c-1.798 5.557 4.564 15.334 1.21 19.96-3.387 4.674-14.646 1.605-19.298 5.003-4.61 3.368-5.163 15.074-10.695 16.878-5.344 1.743-12.628-7.35-18.545-7.35-5.922 0-13.206 9.088-18.543 7.345-5.538-1.804-6.09-13.515-10.696-16.877-4.657-3.398-15.91-.334-19.297-5.002-3.356-4.627 3.006-14.404 1.208-19.962C10.93 67.576 0 63.442 0 57.5c0-5.943 10.93-10.076 12.668-15.438 1.798-5.557-4.564-15.334-1.21-19.96 3.387-4.674 14.646-1.605 19.298-5.003C35.366 13.73 35.92 2.025 41.45.22c5.344-1.743 12.628 7.35 18.545 7.35 5.922 0 13.206-9.088 18.543-7.345 5.538 1.804 6.09 13.515 10.696 16.877 4.657 3.398 15.91.334 19.297 5.002 3.356 4.627-3.006 14.404-1.208 19.962C109.07 47.424 120 51.562 120 57.5c0 5.943-10.93 10.076-12.668 15.438z"
                  fill="#00C8E5"
                />
              </svg>
            </div>
          </div>

          <h2>Parabéns!</h2>
          <span class="mb-3"
            >Você acaba de ganhar <b>R$ 128,84</b> da Apple por ter respondido a
            pesquisa</span
          >
          <span
            >Para liberar o saldo assista o vídeo com as instruções clicando no
            botão abaixo</span
          >

          <a id="assistir">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 194 194"
              style="enable-background: new 0 0 194 194"
              xml:space="preserve"
              width="25px"
              height="25px"
              fill="white"
            >
              <g>
                <path
                  id="path2376_2_"
                  d="M147.04,144.34c-7.02,0-13.6-2.7-18.57-7.67L101.7,109.9c-1.84-1.84-5.18-1.84-7.02,0L67.8,136.78  c-4.97,4.97-11.55,7.67-18.57,7.67h-5.29l34.01,34.01c10.58,10.58,27.85,10.58,38.43,0l34.11-34.11L147.04,144.34L147.04,144.34z"
                ></path>
                <path
                  id="path2380_2_"
                  d="M49.12,49.55c7.02,0,13.6,2.7,18.57,7.67L94.57,84.1c1.94,1.94,5.07,1.94,7.02,0l26.88-26.77  c4.97-4.97,11.55-7.67,18.57-7.67h3.24l-34.11-34.11c-10.58-10.58-27.85-10.58-38.43,0L43.72,49.55H49.12L49.12,49.55z"
                ></path>
                <path
                  id="path2384_2_"
                  d="M178.45,77.84l-20.62-20.62c-0.43,0.22-0.97,0.32-1.51,0.32h-9.39c-4.86,0-9.61,1.94-12.95,5.4  L107.2,89.71c-2.48,2.48-5.83,3.78-9.07,3.78c-3.35,0-6.59-1.3-9.07-3.78L62.18,62.83c-3.45-3.45-8.2-5.4-12.95-5.4H37.68  c-0.54,0-0.97-0.11-1.4-0.32L15.55,77.84c-10.58,10.58-10.58,27.85,0,38.43l20.62,20.62c0.43-0.22,0.86-0.32,1.4-0.32h11.55  c4.86,0,9.61-1.94,12.95-5.4l26.88-26.88c4.86-4.86,13.39-4.86,18.24,0l26.77,26.77c3.45,3.45,8.2,5.4,12.95,5.4h9.39  c0.54,0,0.97,0.11,1.51,0.32l20.62-20.62C189.03,105.58,189.03,88.42,178.45,77.84"
                ></path>
              </g>
            </svg>
            ASSISTIR VÍDEO
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="secondPage" class="d-none">
    <nav class="nav">
      <img src="logo.png" />
      <div class="saldo">
        <span id="saldo-txt">R$ 148,84</span>
      </div>
    </nav>
    <div class="box">
      <div
        style="margin-top: 0px"
        class="elementor-element elementor-element-f14370e elementor-widget elementor-widget-text-editor"
        data-id="f14370e"
        data-element_type="widget"
        data-widget_type="text-editor.default"
      >
        <div class="elementor-widget-container">
          <div>
            <p
              style="
                text-align: center;
                font-family: 'Roboto', sans-serif;
                font-size: 23px;
                font-weight: bolder;
                line-height: 25px;
                margin: 20px 0 0 0px;
              "
            >
              <span style="color: black"
                >Aproveite seu tempo livre e receba uma renda de até
              </span>
              <span style="color: #8f58c5">&nbsp;5 salários todo mês</span>
              <span style="color: black"
                >&nbsp;avaliando produtos com essa</span
              >
              <span style="color: #8f58c5">&nbsp;novidade!</span>
              <br />
            </p>
          </div>
        </div>
      </div>
      <section
        class="elementor-section elementor-top-section elementor-element elementor-element-64283ec2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        style="padding: 0; width: 100%"
        data-id="64283ec2"
        data-element_type="section"
        data-settings='{"background_background":"gradient"}'
      >
        <div
          id="vid_656b8df69a77b500094c058f"
          style="position: relative; width: 100%; padding: 56.25% 0 0"
          ><img
            id="thumb_656b8df69a77b500094c058f"
            src="https://images.converteai.net/49b97fd8-9aab-457f-9cda-ba4063b69007/players/656b8df69a77b500094c058f/thumbnail.jpg"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
            "
          />
          <div
            id="backdrop_656b8df69a77b500094c058f"
            style="
              position: absolute;
              top: 0;
              width: 100%;
              height: 100%;
              -webkit-backdrop-filter: blur(5px);
              backdrop-filter: blur(5px);
            "
          >
          </div>
        </div>
        <p
          style="
            text-align: center;
            font-size: 15px;
            font-weight: 400;
            color: #1f1f1f;
            margin-top: 10px;
          "
        >
          Assista até o final para que seu acesso seja liberado
        </p>
      </section>
      <section
        class="elementor-section elementor-top-section elementor-element elementor-element-6a7e294c atrasado elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="6a7e294c"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div class="elementor-container elementor-column-gap-default">
          <div
            class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7cf314f5"
            data-id="7cf314f5"
            data-element_type="column"
            data-settings='{"background_background":"classic"}'
          >
            <div class="elementor-widget-wrap"> </div>
          </div>
        </div>
      </section>
    </div>

    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-24b2ff4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="24b2ff4"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-default">
        <div
          class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-64f50365"
          data-id="64f50365"
          data-element_type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-4ee57b24 elementor-widget elementor-widget-spacer"
              data-id="4ee57b24"
              data-element_type="widget"
              data-widget_type="spacer.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-spacer">
                  <div class="elementor-spacer-inner"></div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-4e5cae94 elementor-widget elementor-widget-spacer"
              data-id="4e5cae94"
              data-element_type="widget"
              data-widget_type="spacer.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-spacer">
                  <div class="elementor-spacer-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  setup() {}
};
</script>

<style scoped>
.skip-link.screen-reader-text {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  word-wrap: normal !important;
}

.skip-link.screen-reader-text:focus {
  background-color: #eee;
  clip: auto !important;
  clip-path: none;
  color: #444;
  display: block;
  font-size: 1em;
  height: auto;
  left: 5px;
  line-height: normal;
  padding: 15px 23px 14px;
  text-decoration: none;
  top: 5px;
  width: auto;
  z-index: 100000;
}

.elementor-invisible {
  transition: transform 0.2s ease-in-out;
}

.elementor-invisible:hover {
  transform: scale(1.1);
}

.elementor-widget-text-editor.elementor-drop-cap-view-stacked
  .elementor-drop-cap {
  background-color: #818a91;
  color: #fff;
}

.elementor-widget-text-editor.elementor-drop-cap-view-framed
  .elementor-drop-cap {
  color: #818a91;
  border: 3px solid;
  background-color: transparent;
}

.elementor-widget-text-editor:not(.elementor-drop-cap-view-default)
  .elementor-drop-cap {
  margin-top: 8px;
}

.elementor-widget-text-editor:not(.elementor-drop-cap-view-default)
  .elementor-drop-cap-letter {
  width: 1em;
  height: 1em;
}

.elementor-widget-text-editor .elementor-drop-cap {
  float: left;
  text-align: center;
  line-height: 1;
  font-size: 50px;
}

.elementor-widget-text-editor .elementor-drop-cap-letter {
  display: inline-block;
}

.box {
  display: flex;
  text-align: center;
  position: relative;
  margin: 5px;
  padding: 0.25rem;
  padding-top: 0.8rem;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  gap: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.box h1 {
  line-height: 1.2em;
  color: #a06cf7;
  margin: 5px 0;
  font-size: 24px;
}

.box h2 {
  font-size: 1rem;
  line-height: 1.2em;
  color: rgb(71, 85, 105);
}

nav.nav {
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #000000;
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1.25rem;
}

.nav img {
  object-fit: contain;
  width: 9rem;
  height: 3rem;
}
</style>

<style scoped>
.opcoes {
  display: inline-flex;
  align-items: center;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  animation-name: modalopen;
  animation-duration: 0.5s;
}

@keyframes modalopen {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.checkmark-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-bottom: 0px;
}

.confetti {
  position: absolute;
  animation: grow 1.4s cubic-bezier(0.42, 0, 0.275, 1.155) both
    alternate-reverse infinite;
}
.confetti:nth-child(1) {
  width: 12px;
  height: 12px;
  left: 12px;
  top: 16px;
}
.confetti:nth-child(2) {
  width: 18px;
  height: 18px;
  left: 168px;
  top: 84px;
}
.confetti:nth-child(3) {
  width: 10px;
  height: 10px;
  left: 32px;
  top: 162px;
}
.confetti:nth-child(4) {
  width: 20px;
  height: 20px;
  left: 82px;
  top: -12px;
}
.confetti:nth-child(5) {
  width: 14px;
  height: 14px;
  left: 125px;
  top: 162px;
}
.confetti:nth-child(6) {
  width: 10px;
  height: 10px;
  left: 16px;
  top: 16px;
}
.confetti:nth-child(1) {
  animation-delay: 0.7s;
}
.confetti:nth-child(2) {
  animation-delay: 1.4s;
}
.confetti:nth-child(3) {
  animation-delay: 2.1s;
}
.confetti:nth-child(4) {
  animation-delay: 2.8s;
}
.confetti:nth-child(5) {
  animation-delay: 3.5s;
}
.confetti:nth-child(6) {
  animation-delay: 4.2s;
}

.checkmark {
  position: relative;
  padding: 30px;
}

.checkmark__check {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate3d(-50%, -50%, 0);
  fill: #fff;
}

.checkmark__back {
  animation: rotate 35s linear both infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes grow {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
@keyframes checkmark {
  0%,
  100% {
    opacity: 0;
    transform: scale(0);
  }
  10%,
  50%,
  90% {
    opacity: 1;
    transform: scale(1);
  }
}

@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk&amp;display=swap');

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: 'Hanken Grotesk', sans-serif;
}

body {
  background-color: rgb(241, 245, 249);
}

.conteudo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.75rem;
}

nav.nav {
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #000000;
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1.25rem;
}

.nav img {
  object-fit: contain;
  width: 9rem;
  height: 3rem;
}

.saldo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  align-items: center;
  height: 2rem;
  border-radius: 999px;
  background: #a06cf7;
  white-space: nowrap;
}

#saldo-txt {
  color: white;
  text-align: center;
  font-weight: 900 !important;
}

.headline {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #a06cf7;
  color: white;
  font-size: 0.8rem;
  width: 100%;
  border-radius: 10px;
  padding: 0 1rem;
  box-shadow: 0 5px 18px -3px rgb(0 0 0 / 50%);
}

.headline h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  color: white;
  font-weight: 700 !important;
}

.opcoes img {
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.opcoes span {
  font-size: 1.1rem;
  line-height: 1.2em;
  margin: 0 10px;
  color: rgb(71, 85, 105);
  opacity: 0.5;
}

.box {
  display: flex;
  text-align: center;
  position: relative;
  padding: 1.25rem;
  padding-top: 0.8rem;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  gap: 0.75rem;
  box-shadow: 0 5px 18px -3px rgb(0 0 0 / 30%);
}

.box h1 {
  line-height: 1.2em;
  color: #a06cf7;
  margin: 5px 0;
  font-size: 24px;
}

.box h2 {
  font-size: 1rem;
  line-height: 1.2em;
  color: rgb(71, 85, 105);
}

.titulo {
  font-size: 0.9rem;
  letter-spacing: normal;
  line-height: 1.2em;
  font-weight: bold;
  color: rgb(71, 85, 105);
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-right: auto;
}

.produto {
  height: 100%;
  width: 100%;
  max-width: 300px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  color: transparent;
}

.notas {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.5rem;
}

.nota {
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  transition-property: transform;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5px;
  text-decoration: none;
  transition: all 150ms ease;
}

.nota:hover {
  cursor: pointer;
}

.nota-1 {
  background: rgb(185, 28, 28);
}

.nota-2 {
  background: rgb(194, 65, 12);
}

.nota-3 {
  background: rgb(202, 138, 4);
}

.nota-4 {
  background: rgb(101, 163, 13);
}

.nota-5 {
  background: rgb(13, 148, 136);
}

.opaca {
  opacity: 0.3;
}

.clicado {
  opacity: 1 !important;
}

.sim_nao {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.sim_nao .sim_nao {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(226, 232, 240);
  width: 100%;
  padding: 0.6rem 0;
  font-weight: bold;
  border-radius: 0.25rem;
  color: rgb(51, 65, 85);
  transition: all 150ms ease;
}

.sim_nao .sim_nao:hover {
  cursor: pointer;
}

.sim_nao .clicado {
  display: flex;
  position: relative;

  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  gap: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: #a06cf7;
  transform: scale(1.05);
  color: white;
}

#enviar-marca1 {
  width: 100%;
  border: 0;
  background-color: #a06cf7;
  padding: 1.5rem 0;
  border-radius: 0.4rem;
  color: white;
  font-weight: 600;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 1rem;
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin-bottom: 100px;
  box-shadow: 0 5px 18px -3px rgb(0 0 0 / 50%);
}

#enviar-marca2 {
  width: 100%;
  border: 0;
  background-color: #a06cf7;
  padding: 1.5rem 0;
  border-radius: 0.4rem;
  color: white;
  font-weight: 600;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 1rem;
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin-bottom: 100px;
  box-shadow: 0 5px 18px -3px rgb(0 0 0 / 50%);
}

/* Estilos globais */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

/* Estilos para o modal */
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);

  align-items: center;
}

.modal-content {
  background-color: #fff;
  margin: 100px auto;
  padding: 20px;
  border-radius: 5px;
  width: 85%;
  max-width: 600px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

/* Estilos adicionais para melhorar a aparência */
button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

h2 {
  margin-top: 0;
}

p {
  margin-bottom: 0;
}

#assistir {
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #7c3aed;
  padding: 1rem 1rem;
  width: max-content;
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 1.4rem;
  gap: 5px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
}

#assistir:hover {
  cursor: pointer;
}

.modal {
  text-align: center;
}

.modal h2 {
  font-size: 1.2rem;
  color: rgb(51, 65, 85);
  margin: 0;
  margin-bottom: 15px;
}

.modal p {
  font-size: 0.9rem;
  color: rgba(51, 65, 85, 0.7);
  text-align: center;
  margin: 0;
  margin-bottom: 15px;
}

.check {
  margin: 15px;
  fill: green;
}

/* Classe para desabilitar o scroll */
.no-scroll {
  overflow: hidden;
}

a:not([href]):not([tabindex]),
a:not([href]):not([tabindex]) {
  text-decoration: none;
}
</style>
