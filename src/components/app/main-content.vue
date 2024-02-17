<template>
  <div class="loading-overlay" id="loadingOverlay">
    <div class="loading-icon">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
  </div>
  <div class="mb-4">
    <div id="mainScreen" style="overflow-x: hidden">
      <div id="menu" class="row text-white">
        <div id="navbar" class="pt-2 pb-2" style="background-color: #d82b80">
          <div class="col-12 text-center">
            <a class="navbar-brand" href="#">
              <img
                src="https://www.serasa.com.br/lno/static-webfiles/common/products/limpa-nome-white.svg"
                style="max-width: 140px"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        class="row justify-content-center text-white"
        style="background-color: #d82b80"
      >
        <div
          class="mainTitle default-font"
          style="width: 90%; margin-bottom: 0.5rem"
        >
          <span
            >Serasa Limpa Nome: consulte suas dívidas e negocie com
            segurança</span
          >
        </div>
        <div class="subtitle default-font" style="width: 90%">
          <span
            >Foi liberado! Busque hoje mesmo o acordo mais viável para você logo
            abaixo.</span
          >
        </div>
        <div class="text-center" style="padding-bottom: 5rem">
          <img src="./images/mulher.png" class="homemImg" />
        </div>
      </div>
      <div class="card cardClass ms-3 me-3">
        <div class="card-body">
          <h5
            class="card-title text-center mb-0 fw-bold default-font"
            style="font-size: 24px"
          >
            Entrar na Serasa
          </h5>
          <p class="text-center mb-2" style="font-size: 12px">
            Consulte grátis as ofertas disponíveis para você!
          </p>
          <div class="form-group mb-2">
            <label class="inputLabel"
              >Nome completo: <span style="color: red">*</span></label
            >
            <input
              id="nome"
              type="text"
              class="form-control"
              placeholder="Digite seu nome completo"
            />
          </div>
          <div class="form-group mb-3">
            <label class="inputLabel"
              >CPF/CNPJ: <span style="color: red">*</span></label
            >
            <input
              id="cpf"
              type="text"
              class="form-control"
              placeholder="Digite seu CPF/CNPJ"
              maxlength="18"
            />
          </div>
          <button
            class="btn text-white w-100 mb-4 p-2 fw-bold pulse"
            onclick="showDeal()"
            style="background-color: #e50680; border-radius: 10px"
          >
            <i class="fas fa-search me-2"></i>
            Buscar Acordo
          </button>
        </div>
      </div>
      <div class="mb-3">
        <div class="text-center text-muted mt-3" style="font-size: 15px">
          Nós protegemos a sua privacidade.
        </div>
        <div
          class="text-center"
          style="
            color: #d82b80;
            font-size: 12px;
            line-height: 1.9em;
            font-weight: 700;
            font-family: 'Roboto', Sans-serif;
          "
        >
          Termos de Uso - Privacidade
        </div>
      </div>
      <div>
        <img
          src="./images/ofertas.jpg"
          width="945"
          height="1024"
          style="max-width: 100%; height: auto"
        />
      </div>
      <div class="d-flex mt-3 justify-content-center">
        <div>
          <img
            class="ms-2 me-2"
            src="./images/google_play.png"
            width="125"
            style="max-width: 100%; height: auto"
          />
        </div>
        <div>
          <img
            class="ms-2 me-2"
            src="./images/appstore.jpg"
            width="125"
            style="max-width: 100%; height: auto; margin-top: 6px"
          />
        </div>
      </div>
      <div class="container">
        <div
          class="pb-2 pt-2"
          style="font-size: 0.875rem; line-height: 1.25rem"
        >
          Endereços da Serasa (sem atendimento ao público):
        </div>
        <div class="text-muted pb-2" style="font-size: 0.75rem">
          © Serasa Experian - São Paulo -Av das Nações Unidas, 14.401 - Torre
          Sucupira - 24º andar - Chácara Sto. Antônio - São Paulo -SP - CEP
          04794-000 - CNPJ 62.173.620/0001-80
        </div>
        <div class="text-muted pb-2" style="font-size: 0.75rem">
          © Serasa Experian - São Carlos -Av. Dr. Heitor José Reali, 360 -
          Chácara Sto. Antônio - São Carlos -SP - CEP 13571-385 - CNPJ
          62.173.620/0093-06
        </div>
        <div class="text-muted pb-2" style="font-size: 0.75rem">
          © Serasa Experian - Blumenau -Rua Dr. Léo de Carvalho, 74 - Sala 1105
          - Bairro Velha - Blumenau -SC - CEP 89036-239 - CNPJ
          62.173.620/0104-95
        </div>
        <div class="text-muted" style="font-size: 0.75rem">
          © Serasa Experian - Brasília -ST SCN, S/N, Qd 02, Bl C, 109 – Sala 301
          - Bairro Asa Sul - Brasília -DF - CEP 70302-911 - CNPJ
          62.173.620/0131-68
        </div>
      </div>
    </div>
  </div>
  <div
    id="second-screen"
    class="default-font d-none"
    style="overflow-x: hidden"
  >
    <div
      class="d-flex align-items-center justify-content-between pe-2 pt-2 pb-3 borda"
    >
      <div class="ms-2 d-flex">
        <img
          width="40"
          src="./images/icon.jpg"
          class="attachment-large me-2 size-large wp-image-43 rounded"
        />
        <div class="d-flex flex-column">
          <span
            id="nomeOutput"
            style="
              font-size: 13px;
              color: #5c5c5c;
              font-family: 'Roboto', Sans-serif;
              font-weight: 500;
            "
          ></span>
          <span
            id="cpfOutput"
            style="
              font-size: 12px;
              color: #727272;
              font-family: 'Roboto', Sans-serif;
              font-weight: 400;
            "
          ></span>
        </div>
      </div>
      <div>
        <svg
          aria-hidden="true"
          class="e-font-icon-svg e-fas-user-circle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          fill="#727272"
          width="40"
        >
          <path
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          class="ms-2 e-font-icon-svg e-fas-angle-down"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          fill="#727272"
          width="15"
        >
          <path
            d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
          ></path>
        </svg>
      </div>
    </div>

    <div style="background-color: #f5f7f9" class="pt-4">
      <div class="card ms-3 me-3 border-0">
        <div class="card-body text-center">
          <img src="./images/proposta-1.png" width="50" />
          <h2
            class="mb-1"
            style="
              font-size: inherit;
              font-weight: 700;
              color: #333951;
              font-size: 19px;
              line-height: 19px;
            "
          >
            Suas propostas
          </h2>
          <h2
            class="mb-2"
            style="
              font-size: inherit;
              font-weight: 500;
              color: #333951;
              font-size: 14px;
              line-height: 14px;
            "
          >
            Veja suas propostas para remoção das restrições em seu nome.
          </h2>
        </div>
      </div>

      <div
        onclick="redirectToCheckout()"
        class="card ms-3 me-3"
        style="margin-top: 2rem; border-radius: 15px"
      >
        <div
          class="text-center text-white p-1 fw-bold"
          style="
            font-size: 19px;
            background-color: #d82b80;
            border-top-right-radius: 15px;
            border-top-left-radius: 15px;
          "
        >
          OFERTA DO FEIRÃO
        </div>
        <div class="d-flex justify-content-between mt-2 mb-2">
          <div class="ms-3">
            <div style="line-height: 1; font-size: 12px">
              De R$ 5.641,25 por
            </div>
            <div class="fw-bold mt-1" style="font-size: 25px; line-height: 1">
              R$ 97,54
            </div>
            <div
              class="fw-bold mt-1"
              style="color: red; font-size: 12px; line-height: 1"
            >
              Dívida negativada
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center me-4">
            <img
              src="https://www.serasa.com.br/lno/static-webfiles/logo/serasa.svg"
              style="width: 7rem"
            />
          </div>
        </div>
      </div>

      <div
        class="card ms-3 me-3"
        style="margin-top: 1.5rem; border-radius: 15px"
      >
        <div
          class="text-center text-white p-1 fw-bold"
          style="
            font-size: 15px;
            background-color: #d82b80;
            border-top-right-radius: 15px;
            border-top-left-radius: 15px;
          "
        >
          Seu Desconto é de 99%
        </div>
        <div class="ms-3 me-3 mt-3">
          <button
            class="btn text-white w-100 mb-3 p-2 fw-bold pulseGreen"
            onclick="redirectToCheckout()"
            style="background-color: #0d9f48; border-radius: 10px"
          >
            <i class="fa-solid fa-money-bill"></i>
            Realizar Pagamento do Acordo
          </button>
        </div>
        <div class="text-center mb-2 fw-bold" style="font-size: 10px">
          Você receberá a lista de débitos quitados após a confirmação de
          pagamento.
        </div>
      </div>

      <div
        onclick="redirectToCheckout()"
        class="card ms-3 me-3"
        style="margin-top: 1.5rem; border-radius: 15px"
      >
        <div class="pt-2 d-flex justify-content-between">
          <div class="d-flex flex-column justify-content-between ms-4">
            <div class="text-center fw-bold" style="font-size: 19px">
              Cartão de Crédito
            </div>
            <div class="mb-4">
              <div
                style="font-size: 15px; font-style: italic; font-weight: 400"
              >
                Solicitar cartão
              </div>
              <div
                class="fw-bold text-white text-center"
                style="
                  background-color: red;
                  border-radius: 5px;
                  font-size: 25px;
                "
              >
                Indisponível
              </div>
            </div>
          </div>
          <img src="./images/cartao.png" width="100" />
        </div>
      </div>

      <div class="text-center" style="margin-top: 7rem">
        <div class="d-flex align-items-center justify-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.2 10.2402V14.0802H12.8V10.2402C12.8 9.85618 13.312 7.80818 16 7.68018C18.688 7.80818 19.2 9.85618 19.2 10.2402ZM14.464 20.7362C13.952 20.0962 13.952 19.0722 14.464 18.4322C14.976 17.7922 15.744 17.7922 16.256 18.4322C16.768 19.0722 16.768 20.0962 16.256 20.7362V21.8882C16.256 22.5282 15.872 23.0402 15.36 23.0402C14.848 23.0402 14.464 22.5282 14.464 21.8882V20.7362Z"
              fill="#4EA802"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.168 7.168 0 16 0C24.832 0 32 7.168 32 16C32 24.832 24.832 32 16 32C7.168 32 0 24.832 0 16ZM19.584 26.368C21.76 26.368 23.552 24.576 23.552 22.4V18.432C23.552 17.024 22.784 15.744 21.632 15.104V10.112C21.376 8.576 20.096 5.632 16.256 5.376H15.744C11.904 5.504 10.496 8.448 10.368 10.112V14.848C9.216 15.616 8.448 16.896 8.448 18.304V22.4C8.448 24.576 10.24 26.368 12.416 26.368H19.584Z"
              fill="#4EA802"
            ></path>
          </svg>
          <div class="d-flex flex-column">
            <div class="fw-bold" style="font-size: 14px; line-height: 1.2">
              SITE BLINDADO
            </div>
            <div style="font-size: 14px; font-weight: 400; line-height: 1.2">
              100% SEGURO
            </div>
          </div>
        </div>
      </div>

      <div class="mt-2 pb-3" style="background-color: #313750">
        <div class="d-flex justify-content-center pt-3 pb-3 bordaWhite">
          <div
            class="p-2 me-2"
            style="background-color: #52576c; border-radius: 5px"
          >
            <img src="./images/apple.png" />
          </div>
          <div
            class="p-2 ms-2"
            style="background-color: #52576c; border-radius: 5px"
          >
            <img src="./images/apple.png" />
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-2" style="opacity: 0.3; align-self: center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M520.531 927.989h-73.64c-21.899 0-39.641-18.389-39.641-41.201v-76.612c0-22.809 17.747-41.232 39.641-41.232h73.64c21.875 0 39.641 18.441 39.641 41.232v76.612c0 22.809-17.75 41.201-39.641 41.201z"
              ></path>
              <path
                d="M353.316 723.278h-62.292c-18.493 0-33.573-15.566-33.573-34.925v-64.724c0-19.332 15.046-34.977 33.573-34.977h62.292c18.493 0 33.539 15.618 33.539 34.977v64.724c0 19.325-15.046 34.925-33.539 34.925z"
              ></path>
              <path
                d="M363.039 503.106h-101.958c-30.297 0-54.872-25.472-54.872-57.076v-106.111c0-31.493 24.577-57.089 54.872-57.089h101.958c30.297 0 54.872 25.597 54.872 57.089v106.111c0 31.597-24.577 57.076-54.872 57.076z"
              ></path>
              <path
                d="M597.501 291.741h-90.667c-26.969 0-48.79-22.732-48.79-50.717v-94.31c0-28.009 21.821-50.702 48.79-50.702h90.667c26.917 0 48.741 22.708 48.741 50.702v94.31c0 28.009-21.829 50.717-48.741 50.717z"
              ></path>
              <path
                d="M790.364 330.324h-51.029c-15.15 0-27.437-12.81-27.437-28.532v-53.005c0-15.759 12.277-28.556 27.437-28.556h51.029c15.15 0 27.412 12.797 27.412 28.556v53.005c0 15.722-12.238 28.532-27.412 28.532z"
              ></path>
              <path
                d="M620.017 546.361c-17.996-10.262-36.485-19.689-54.372-30.141-7.246-4.23-14.295-9.378-20.105-15.514-13.728-14.511-11.458-35.809 4.542-45.205 4.902-2.826 10.756-4.542 16.346-5.322 16.606-2.35 31.815 2.254 46.349 10.886 7.246 4.33 15.499 7.506 23.693 9.326 8.546 1.859 16.065-2.226 21.377-9.638 5.166-7.298 5.166-15.514 0.85-22.861-3.45-5.842-8.078-11.5-13.33-15.636-20.313-15.857-43.749-22.497-68.88-23.277-18.441 0.33-36.017 4.282-52.277 13.694-35.061 20.313-48.722 59.728-33.677 98.103 7.35 18.649 20.781 31.961 37.317 41.617 14.578 8.515 29.777 15.878 44.729 23.761 12.498 6.57 24.681 13.694 34.509 24.421 12.118 13.174 14.659 28.217 6.674 40.577-5.967 9.222-15.046 13.226-25.212 14.976-20.084 3.346-38.289-1.934-55.412-12.862-5.894-3.793-11.926-7.732-18.389-10.262-18.493-7.291-35.653 6.778-32.169 26.085 1.578 8.546 6.778 14.89 12.934 20.433 32.088 28.851 90.288 36.069 128.886 16.027 41.461-21.613 55.932-67.759 34.585-110.739-8.65-17.472-22.861-29.205-38.985-38.445z"
              ></path>
              <path
                d="M761.713 661.608c2.566 0 4.802 2.358 4.802 5.010v35.913c0 1.859-1.37 3.242-3.19 3.242-1.734 0-3.19-1.443-3.19-3.242v-27.073c-1.521 4.594-3.866 11.874-5.634 17.334-3.062 9.409-3.346 10.262-3.398 10.418-0.746 1.727-1.83 2.618-3.19 2.618-1.734 0-2.774-1.346-3.177-2.594l-9.1-27.853v27.125c0 1.859-1.37 3.242-3.19 3.242-1.786 0-3.222-1.443-3.222-3.242v-35.913c0-2.666 2.254-5.010 4.833-5.010 2.042 0 3.97 1.526 4.594 3.695l9.222 28.113 9.144-28.113c0.642-2.15 2.586-3.695 4.674-3.695zM720.686 661.85c1.77 0 3.086 1.422 3.086 3.346 0 1.838-1.37 3.294-3.086 3.294h-7.402v34.041c0 1.838-1.37 3.23-3.222 3.23-1.734 0-3.19-1.422-3.19-3.23v-34.041h-7.298c-1.724 0-3.086-1.474-3.086-3.294 0-1.908 1.318-3.346 3.086-3.346h21.145z"
              ></path>
            </svg>
          </div>
          <div class="col-9 ms-2" style="color: #adafb9; line-height: 1">
            <div class="fw-bold pb-2" style="font-size: 9px">
              Endereços da Serasa (sem atendimento ao público):
            </div>
            <div style="font-size: 8px">
              <div class="pb-1">
                © Serasa Experian - São Paulo -Av das Nações Unidas, 14.401 -
                Torre Sucupira - 24º andar - Chácara Sto. Antônio - São Paulo
                -SP - CEP 04794-000 - CNPJ 62.173.620/0001-80
              </div>
              <div class="pb-1">
                © Serasa Experian - São Carlos -Av. Dr. Heitor José Reali, 360 -
                Chácara Sto. Antônio - São Carlos -SP - CEP 13571-385 - CNPJ
                62.173.620/0093-06
              </div>
              <div class="pb-1">
                © Serasa Experian - Blumenau -Rua Dr. Léo de Carvalho, 74 - Sala
                1105 - Bairro Velha - Blumenau -SC - CEP 89036-239 - CNPJ
                62.173.620/0104-95
              </div>
              <div>
                © Serasa Experian - Brasília -ST SCN, S/N, Qd 02, Bl C, 109 –
                Sala 301 - Bairro Asa Sul - Brasília -DF - CEP 70302-911 - CNPJ
                62.173.620/0131-68
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  setup() {},
};
</script>

<style scoped>
/* Estilo para o overlay */
.loading-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}

/* Estilo para o ícone de carregamento */
.loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 40px;
}

.pulse {
  animation: pulse-animation 0.7s infinite;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
  }

  100% {
    box-shadow: 0 0 0 10px rgba(229, 6, 128, 0.2);
  }
}

.pulseGreen {
  animation: pulse-animation-green 0.7s infinite;
}

@keyframes pulse-animation-green {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 201, 87, 0.2);
  }

  100% {
    box-shadow: 0 0 0 10px rgba(0, 201, 87, 0.2);
  }
}

.mainTitle {
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: left;
  width: 80%;
  max-width: 25rem;
  margin: 0 auto 1rem;
  font-weight: bold;
  letter-spacing: -0.022727272727273rem;
}

.subtitle {
  font-size: 1rem;
  line-height: 1.5rem;
}

.homemImg {
  width: 16rem;
}

.cardClass {
  border-radius: 10px !important;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-top: -5rem;
}

.inputLabel {
  font-size: 15px;
  font-family: "Roboto", Sans-serif;
  font-weight: 700;
}

.default-font {
  font-family: "Roboto", Sans-serif;
}

.borda {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #aaa;
}

.bordaWhite {
  border-width: 0px 0px 1px 0px;
  border-color: #6e7284;
  border-style: solid;
}
</style>
