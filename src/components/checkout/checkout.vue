<template>
  <Pix v-if="showPix" :payerData="payerData" />
  <!-- PRE LOADER -->
  <div class="checkout-preloader">
    <div class="preloader-container">
      <div class="spin-load-lg"></div>
      <div class="preloader-icon">
        <img src="./assets/img/pepper/pepper-beta.png" />
      </div>
    </div>
  </div>

  <!-- Page container -->
  <main class="main-container d-block px-0" id="checkoutCerto">
    <!-- COUNTDOWN -->
    <div
      id="countdownNav"
      style="display: none; background-color: rgb(0, 0, 13)"
    >
      <div class="countdown-content">
        <div class="col-auto ms-2">
          <span class="h2" id="timerCount" style="color: rgb(255, 255, 255)"
            >00:09:44</span
          >
        </div>
        <div class="svg-countdown-container" id="countdownSvg">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
            style="fill: rgb(255, 0, 0)"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M2651 5004 c-69 -19 -108 -43 -161 -100 -136 -148 -114 -380 48 -499 26 -19 64 -40 85 -47 l37 -11 0 -127 0 -127 -72 -18 c-233 -56 -514 -194 -723 -354 -76 -58 -243 -218 -308 -296 l-50 -60 -383 -5 -382 -5 -26 -24 c-50 -48 -39 -133 21 -160 16 -7 129 -11 323 -11 165 0 300 -2 300 -4 0 -2 -24 -50 -54 -107 -29 -57 -68 -143 -86 -191 l-33 -88 -563 0 -563 0 -26 -22 c-34 -30 -44 -88 -20 -124 35 -53 41 -54 601 -54 l516 0 -6 -22 c-7 -27 -33 -217 -42 -300 l-5 -58 -230 0 c-250 0 -274 -4 -297 -55 -15 -33 -15 -57 0 -90 23 -51 47 -55 301 -55 l234 0 7 -80 c6 -77 42 -275 52 -292 3 -4 -141 -8 -321 -8 -353 0 -377 -3 -410 -54 -24 -36 -14 -94 20 -124 26 -22 27 -22 401 -22 l375 0 11 -32 c20 -58 115 -244 168 -329 194 -313 487 -575 825 -739 491 -239 1018 -271 1550 -95 87 29 331 145 408 195 81 52 96 124 35 175 -40 34 -83 32 -143 -6 -94 -60 -265 -140 -382 -179 -540 -179 -1129 -100 -1598 215 -748 503 -1014 1475 -626 2290 248 520 710 879 1291 1002 114 25 145 27 350 27 206 0 236 -2 351 -27 183 -39 296 -78 464 -162 168 -84 286 -164 417 -285 628 -579 769 -1532 334 -2263 -55 -94 -62 -118 -46 -158 21 -49 93 -74 141 -49 25 14 77 97 143 228 342 83 271 1498 -185 2112 -77 104 -247 281 -349 363 -214 173 -482 310 -743 379 l-87 23 0 125 0 125 56 24 c71 31 139 97 172 169 37 81 38 193 0 273 -36 79 -89 133 -166 171 l-67 33 -415 2 c-341 2 -425 0 -469 -13z m839 -190 c43 -9 97 -65 106 -108 8 -46 -10 -96 -47 -132 l-30 -29 -410 -3 c-399 -3 -412 -2 -444 18 -64 39 -84 129 -42 191 45 68 49 69 463 69 204 0 386 -3 404 -6z m-150 -576 l0 -103 -240 0 -240 0 0 103 0 102 240 0 240 0 0 -102z"
              ></path>
              <path
                d="M2910 3663 c-207 -33 -359 -81 -520 -164 -419 -216 -710 -601 -812 -1073 -32 -148 -32 -455 1 -606 90 -422 331 -774 686 -1002 507 -326 1163 -326 1670 0 355 228 596 580 686 1002 33 151 33 458 1 606 -138 637 -632 1117 -1260 1225 -106 18 -372 25 -452 12z m405 -208 c584 -96 1030 -550 1121 -1140 19 -121 14 -343 -10 -455 -59 -273 -180 -496 -375 -690 -198 -197 -414 -314 -684 -371 -135 -29 -380 -32 -510 -6 -187 38 -372 115 -527 220 -41 29 -123 99 -181 157 -195 194 -316 417 -375 690 -24 112 -29 334 -10 455 90 586 537 1043 1115 1140 106 18 328 18 436 0z"
              ></path>
              <path
                d="M3051 3276 c-37 -20 -50 -55 -51 -129 0 -76 17 -118 57 -136 32 -15 59 -14 92 3 38 20 51 55 51 142 0 70 -2 78 -29 105 -33 32 -78 38 -120 15z"
              ></path>
              <path
                d="M3765 2916 c-16 -8 -142 -127 -279 -264 l-249 -250 -40 14 c-49 17 -150 17 -197 -1 l-35 -13 -126 124 c-116 114 -129 124 -163 124 -48 0 -72 -13 -91 -50 -31 -60 -24 -74 110 -209 l124 -126 -14 -49 c-32 -106 -8 -216 66 -299 120 -137 338 -137 458 0 74 83 98 193 66 299 l-15 49 260 260 c255 256 260 262 260 302 0 30 -7 47 -26 67 -15 14 -32 26 -40 26 -7 0 -18 2 -26 5 -7 2 -26 -2 -43 -9z m-589 -720 c40 -40 45 -83 15 -132 -57 -93 -201 -47 -201 65 0 51 54 101 110 101 34 0 48 -6 76 -34z"
              ></path>
              <path
                d="M1965 2196 c-46 -46 -43 -112 7 -149 29 -22 108 -33 161 -23 84 16 116 108 58 167 -28 28 -34 29 -116 29 -78 0 -88 -2 -110 -24z"
              ></path>
              <path
                d="M4009 2191 c-21 -22 -29 -39 -29 -66 0 -79 45 -109 158 -103 69 3 76 6 103 36 31 35 36 66 17 107 -18 40 -57 55 -143 55 -71 0 -79 -2 -106 -29z"
              ></path>
              <path
                d="M3073 1243 c-12 -2 -34 -18 -48 -34 -22 -27 -25 -40 -25 -110 0 -73 2 -81 29 -111 33 -37 82 -43 125 -14 35 22 46 53 46 126 0 32 -4 70 -10 84 -15 40 -70 68 -117 59z"
              ></path>
              <path
                d="M63 1595 c-99 -43 -71 -185 36 -185 96 0 138 124 59 173 -37 24 -61 27 -95 12z"
              ></path>
              <path
                d="M4389 831 c-38 -39 -39 -87 -3 -130 21 -26 33 -31 68 -31 49 0 79 18 96 59 40 98 -85 177 -161 102z"
              ></path>
            </g>
          </svg>
        </div>
        <div id="textCounter" style="color: rgb(255, 255, 255)"></div>
      </div>
      <div id="progressBar" style="background-color: rgb(130, 9, 3)">
        <div class="bar" style="overflow: hidden; width: 100%">9:44</div>
      </div>
    </div>

    <div class="container-lg" style="padding-right: 3vw; padding-left: 3vw">
      <section class="checkout col-lg-10 mx-auto pb-4">
        <!-- Image banner top -->
        <div class="banner-img-topo">
          <img id="mainImage" />
        </div>

        <!-- Product Information -->
        <div class="div-top-product-info shadow-lg">
          <label>Você está adquirindo:</label>
          <div class="info-product-content">
            <div class="col-auto">
              <!-- Product Image -->
              <img class="product-img-top" id="productImage" />
            </div>
            <div class="col col-product-info-top">
              <!-- Product Name -->
              <p class="product-name-top" id="productName"></p>
              <!-- Product Price -->
              <div class="product-price-top">
                <span class="product-installments"></span>
                <span class="h3" id="installmentValue"></span>
              </div>
              <!-- <span class="product-full-price"
                >ou <span id="amountAtOnce"></span
              ></span> -->
            </div>
          </div>
        </div>

        <!-- Checkout fields starts here -->
        <div class="checkout-div pt-4 shadow-lg">
          <!-- STEP 1 -->
          <div class="checkout-pepper-step ms-n1">
            <div class="checkout-step-number">1</div>
            <div class="checkout-step-text">Dados pessoais</div>
          </div>

          <form
            class="d-flex flex-column align-items-center"
            id="payment-form"
            novalidate
          >
            <div class="row g-0 g-md-2">
              <!-- CLEAR SALES SESSION ID -->
              <input type="hidden" id="csid" value="" />

              <!-- Input NAME -->
              <div>
                <label>Nome completo</label>
                <div class="position-relative mb-2">
                  <input
                    type="text"
                    class="form-control icone-before valid-no-bg"
                    inputmode="latin-name"
                    placeholder=""
                    id="nome"
                    name="nome"
                  />
                  <div class="input-form-icon-before">
                    <img
                      src="https://pepper.com.br/checkout/assets/svg/user.svg"
                      class="svg-icon-20"
                    />
                  </div>
                  <div class="invalid-feedback" id="nome-error"
                    >Este campo é obrigatório.</div
                  >
                </div>
              </div>

              <!-- Input E-MAIL -->
              <div>
                <label>Seu e-mail</label>
                <div class="position-relative mb-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="icone-before form-control valid-no-bg"
                    inputmode="email"
                    placeholder=""
                  />
                  <div class="input-form-icon-before">
                    <img
                      src="https://pepper.com.br/checkout/assets/svg/mail.svg"
                      class="svg-icon-18"
                    />
                  </div>
                  <div class="invalid-feedback" id="email-error">
                    O e-mail informado é inválido.
                  </div>
                </div>
              </div>

              <!-- Input CPF / CNPJ -->
              <div class="col-md-6">
                <label>CPF</label>
                <div class="position-relative mb-2">
                  <input
                    type="text"
                    inputmode="tel"
                    id="key"
                    name="cpf"
                    placeholder=""
                    class="form-control icone-before valid-no-bg"
                  />
                  <div class="input-form-icon-before">
                    <img
                      src="https://pepper.com.br/checkout/assets/svg/padlock.svg"
                      class="svg-icon-18"
                    />
                  </div>
                  <span class="invalid-feedback" id="key-error"
                    >Digite um documento válido.</span
                  >
                </div>
              </div>

              <!-- Input phone -->
              <div class="col-md-6">
                <label>Celular</label>
                <div class="position-relative mb-2">
                  <input
                    type="tel"
                    inputmode="tel"
                    name="telephone"
                    id="phone"
                    class="form-control icone-before valid-no-bg"
                    placeholder=""
                    maxlength="15"
                    required
                  />
                  <div class="input-form-icon-before">
                    <img
                      src="https://pepper.com.br/checkout/assets/svg/phone.svg"
                      class="svg-icon-16"
                    />
                  </div>
                  <div class="invalid-feedback" id="phone-error">
                    Preencha com um telefone válido.
                  </div>
                </div>
              </div>

              <!-- Payment Methods -->
              <div class="payment-container" id="paymentCollapse">
                <div class="pt-4">
                  <!-- STEP 2 -->
                  <div class="checkout-pepper-step mb-3 ms-n1">
                    <div class="checkout-step-number"> 2 </div>
                    <div class="checkout-step-text"> Dados de pagamento </div>
                  </div>

                  <!-- Payment TABS -->
                  <input id="tabs" type="hidden" name="tabs" value="1" />
                  <ul
                    class="nav nav-pills nav-jus5tified mb-3 row row-cols-3 row-cols-sm-4 g-1 mt-2 formas--pagamento"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation" id="pixTab">
                      <button
                        class="flex-sm-fill text-sm-center nav-link main-btn btn-light active px-3 py-2 text-wrap"
                        id="pills-PIX-tab"
                        style="border: 1px solid #00ba59"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-PIX"
                        type="button"
                        role="tab"
                        aria-controls="pills-PIX"
                        aria-selected="false"
                      >
                        <img
                          src="https://pepper.com.br/checkout/assets/svg/pay-pix.svg"
                          class="svg-icon-20 opacity-80"
                        />
                        <span class="payment-type-btn"> PIX </span>
                      </button>
                    </li>
                  </ul>
                </div>

                <div class="tab-content" id="pills-tabContent">
                  <!-- TAB CREDIT CARD -->
                  <div
                    class="tab-pane fade pt-2"
                    id="pills-cartao"
                    role="tabpanel"
                    aria-labelledby="pills-cartao-tab"
                  >
                    <div
                      class="row g-2 mx-auto align-items-start"
                      id="row-credit-card"
                    >
                      <div id="pay-loader" style="display: none">
                        <div
                          class="spinner-border"
                          style="width: 3.5rem; height: 3.5rem"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>

                      <!-- Input CREDIT CARD NUMBER -->
                      <div class="field px-0 px-md-1">
                        <label>Número do cartão</label>
                        <div class="position-relative mb-2">
                          <input
                            type="tel"
                            inputmode="tel"
                            id="cc-number"
                            placeholder="Somente números"
                            data-payment="cc-number"
                            class="cardFields form-control icone-before valid-no-bg"
                          />
                          <div class="input-form-icon-before">
                            <img
                              src="https://pepper.com.br/checkout/assets/svg/card.svg"
                              class="svg-icon-18"
                            />
                          </div>
                          <div class="invalid-feedback" id="cc-number-error">
                            Insira um cartão válido.
                          </div>
                        </div>
                      </div>

                      <!-- Input CARDHOLDER NAME -->
                      <div class="px-0 px-md-1">
                        <label>Nome do titular</label>
                        <div class="position-relative mb-2">
                          <input
                            type="text"
                            inputmode="latin-name"
                            class="cardFields form-control icone-before valid-no-bg"
                            placeholder="Nome como está escrito no cartão"
                            id="cardholder"
                            name="cardholder"
                            pattern="([a-zA-ZÁÉÍÓÚáéíóúÃÕãõñÂÊÔÛÎâêîôû']+\s){1,}([a-zA-ZÁÉÍÓÚáéíóúÃÕãõñÂÊÔÛÎâêîôû'\s]+)"
                          />
                          <div class="input-form-icon-before">
                            <img
                              src="https://pepper.com.br/checkout/assets/svg/user.svg"
                              class="svg-icon-20"
                            />
                          </div>
                          <div class="invalid-feedback">
                            Digite o nome escrito no cartão.
                          </div>
                        </div>
                      </div>

                      <div class="col-6 px-0 px-md-1 mb-2">
                        <div class="d-flex flex-row align-items-end">
                          <!-- Input CARD MONTH -->
                          <div class="col-6 pe-1 pe-md-2">
                            <label>Validade</label>
                            <div class="position-relative">
                              <select
                                id="cc-exp-month"
                                class="form-select"
                                required
                              >
                                <option selected disabled>Mês</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                              </select>
                            </div>
                          </div>

                          <!-- Input CARD YEAR -->
                          <div class="col-6 h-100">
                            <div class="position-relative">
                              <select
                                id="cc-exp-year"
                                class="form-select"
                                required
                              >
                                <option selected disabled>Ano</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                                <option value="2034">2034</option>
                                <option value="2035">2035</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div
                          class="invalid-exp-date fs-xs mt-1 text-danger"
                          style="display: none"
                          >Data de vencimento inválida.</div
                        >
                      </div>

                      <!-- Input CVV -->
                      <div class="col-6 pe-0 pe-md-1 mb-2">
                        <label>Cód. Segurança</label>
                        <div class="position-relative">
                          <input
                            inputmode="tel"
                            type="tel"
                            id="cc-cvc"
                            placeholder=""
                            data-payment="cc-cvc"
                            class="cardFields form-control valid-no-bg bg-none only-numbers icon-md"
                            maxlength="4"
                          />
                          <div class="input-form-icon-before d-none d-md-flex">
                            <img
                              src="https://pepper.com.br/checkout/assets/svg/padlock.svg"
                              class="svg-icon-18"
                            />
                          </div>
                          <div class="input-form-icon-before-right">
                            <div
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Código de segurança de 3 ou 4 dígitos no seu cartão."
                            >
                              <img
                                src="https://pepper.com.br/checkout/assets/svg/tooltip.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- TAB PIX -->
                  <div
                    class="tab-pane fade show active px-2 pt-1"
                    id="pills-PIX"
                    role="tabpanel"
                    aria-labelledby="pills-PIX-tab"
                  >
                    <div class="panel mb-3">
                      <h6 class="text-dark fw-bold mb-3">Pague no PIX</h6>
                      <span class="pix-li">
                        <img
                          src="https://pepper.com.br/checkout/assets/svg/pix-imediato.svg"
                          class="me-1"
                          style="margin-bottom: 2px"
                        />
                        IMEDIATO
                      </span>
                      <small>
                        Ao selecionar a opção Gerar Pix o código para pagamento
                        estará disponível.
                      </small>
                      <span class="pix-li">
                        <img
                          src="https://pepper.com.br/checkout/assets/svg/pix-pagamento.svg"
                          class="me-1"
                          style="margin-bottom: 2px"
                        />
                        PAGAMENTO SIMPLES
                      </span>
                      <small>
                        Para pagar basta abrir o aplicativo do seu banco,
                        procurar pelo PIX e escanear o QRcode.
                      </small>
                      <span class="pix-li">
                        <img
                          src="https://pepper.com.br/checkout/assets/svg/pix-seguro.svg"
                          class="me-1"
                          style="margin-bottom: 2px"
                        />
                        100% SEGURO
                      </span>
                      <small>
                        O pagamento com PIX foi desenvolvido pelo Banco Central
                        para facilitar suas compras.
                      </small>
                    </div>
                  </div>

                  <!-- TAB BILLET -->
                  <div
                    class="tab-pane fade px-2 pt-1"
                    id="pills-billet"
                    role="tabpanel"
                    aria-labelledby="pills-billet-tab"
                  >
                    <div class="panel mb-3">
                      <h6 class="fw-bold text-dark mb-3">
                        Boleto Bancário (somente à vista)
                      </h6>
                      <div class="pt-2">
                        <img
                          src="https://pepper.com.br/checkout/assets/svg/check-boleto.svg"
                          class="me-1"
                        />
                        <small
                          >Pagamentos com Boleto Bancário levam até 3 dias úteis
                          para serem compensados e então terem os produtos
                          liberados</small
                        >
                      </div>
                      <div class="mt-2">
                        <img
                          src="https://pepper.com.br/checkout/assets/svg/check-boleto.svg"
                          class="me-1"
                        />
                        <small
                          >Atente-se ao vencimento do boleto. Você pode pagar o
                          boleto em qualquer banco ou casa lotérica até o dia do
                          vencimento</small
                        >
                      </div>
                      <div class="mt-2">
                        <img
                          src="https://pepper.com.br/checkout/assets/svg/check-boleto.svg"
                          class="me-1"
                        />
                        <small
                          >Depois do pagamento, verifique seu e-mail para
                          receber os dados de acesso ao produto (verifique
                          também a caixa de SPAM)</small
                        >
                      </div>
                    </div>
                  </div>

                  <!-- PAYMENT TABS ## END -->
                </div>
              </div>

              <!-- Installments -->
              <div
                class="pt-2 px-0 px-lg-2 zindex-3"
                id="showInstallments"
                style="display: none"
              >
                <label class="mb-2 pt-1">Opções de parcelamento</label>
                <div class="pepper-dropdown">
                  <span class="pepper-dropdown-title"
                    >Selecione a opção desejada</span
                  >
                  <ul id="installments"> </ul>
                </div>
              </div>
            </div>

            <div>
              <button
                id="buyButton"
                class="pepper-buy-button mt-4"
                @click="buy"
              >
                COMPRAR E RECEBER AGORA
              </button>
            </div>

            <div class="footer-disclaimer"
              >Ambiente criptografado e 100% seguro.</div
            >
          </form>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <div class="footer-payment pb-4 px-3 d-flex flex-column">
      <div class="row mx-auto justify-content-center mt-3">
        <div class="col-auto d-flex flex-row align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="me-1"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"
            ></path>
          </svg>
          <p class="mb-0 lh-1">Compra segura</p>
        </div>
        <div class="col-auto d-flex flex-row align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style="margin-right: 0.35rem"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
            />
          </svg>
          <p class="mb-0 lh-1">Dados protegidos</p>
        </div>
      </div>
      <div class="footer-disclaimer flex-column align-items-start mb-3">
        <!-- <p style="max-width: 700px"
          >Compra processada por Pepper © 2023 - Todos os direitos reservados.
          <b>*</b>Taxa de 2,99% a.m.
        </p> -->
      </div>
    </div>
  </main>
</template>

<script>
import Pix from './pix.vue';
import { onMounted, ref } from 'vue';

export default {
  name: 'Checkout',
  components: {
    Pix,
  },
  setup() {
    const showPix = ref(false);

    const payerData = ref({
      email: '',
      name: '',
      identification: '',
    });

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const buy = async (event) => {
      event.preventDefault();

      var hasError = false;

      $('.form-control:not(#cc-exp-month):not(#cc-exp-year)').each(
        (i, element) => {
          if (
            element.validationMessage != '' &&
            hasError == false &&
            element.required == true
          ) {
            element.focus();
            hasError = true;
          }
        }
      );

      var paymentForm = document.querySelector('#payment-form');
      paymentForm.classList.add('was-validated');

      if (!hasError) {
        payerData.value.email = $('#email').val();
        payerData.value.name = $('#nome').val();
        payerData.value.identification = $('#key').val();

        var checkoutPreloader = $('.checkout-preloader');
        window.scrollTo({ top: 0 });
        checkoutPreloader.fadeIn(400);
        $('main').delay(400).addClass('main-loading');
        await sleep(2000);
        checkoutPreloader.fadeOut(400);
        $('main').delay(400).removeClass('main-loading');
        $('#checkoutCerto').remove();

        showPix.value = true;
      }
    };

    onMounted(() => {
      const price = 67.89;
      const image = '../assets/images/image.webp';
      const banner = '../assets/images/banner.webp';

      if (!$('#mainImage').attr('src')) {
        $('#mainImage').css('border-color', 'transparent');
      }
      $('main').addClass('main-loading');

      var checkoutPreloader = $('.checkout-preloader');
      var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

      // Função de correção de e-mails
      function fixEmail(email) {
        if (/@gmail$/.test(email)) {
          // Verifica se o e-mail termina em "@gmail" sem ".com"
          email = email + '.com';
        } else if (/@hotmail$/.test(email)) {
          // Verifica se o e-mail termina em "@hotmail" sem ".com"
          email = email + '.com';
        } else if (/@email.com$/.test(email)) {
          // Email termina em "@email" sem ".com"
          email = email.split('@')[0] + '@gmail.com';
        } else if (/@email$/.test(email)) {
          // Email termina em "@email.com"
          email = email.split('@')[0] + '@gmail.com';
        } else if (/@g$/.test(email)) {
          // Email termina em "@g" sem ".com"
          email = email.split('@')[0] + '@gmail.com';
        } else if (/@gmailcom$/.test(email)) {
          // Email termina em @gmailcom
          email = email.split('@')[0] + '@gmail.com';
        } else if (/@gmil$/.test(email)) {
          // Email termina em @gmil
          email = email.split('@')[0] + '@gmail.com';
        } else if (/.com.b$/.test(email)) {
          // Email termina em .com.b, adiciona o r
          email = email + 'r';
        }

        // Retira todos os números ao final do e-mail
        do {
          if (!isNaN(email[email.length - 1])) {
            email = email.substring(0, email.length - 1);
          }
        } while (!isNaN(email[email.length - 1]));

        return email.toLowerCase();
      }

      // Disable Button on Submit
      var buyingTxt = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Carregando...`;

      window.preTransaction = async function preTransaction() {
        // Quando der Submit :
        $('#buyButton')
          .attr('disabled', true)
          .addClass('opacity-70')
          .html(buyingTxt);

        var email = $('#email').val();
        $('.pepper-dropdown-title').attr('data-drop-value');

        fixEmail(email);

        const paymentMethod = parseInt($('#tabs').val());
        window.paymentMethod = paymentMethod;
      };

      checkoutPreloader.fadeOut(500);
      $('main').delay(400).removeClass('main-loading');
      $('#cardTab').css('display', 'none');
      $('#boletoTab').css('display', 'none');
      $('#productImage').prop('src', image);
      $('#productName').html('Resgate Saldo');
      $('.container-lg').addClass('mt-4');
      $('#mainImage').prop('src', banner);
      var bgCover = `<div class="bg-top-cover"><div class="bg-top-gradient"></div></div>`;
      // var bgCover = `<div class="bg-top-cover" style="background-image: url(${banner});"><div class="bg-top-gradient"></div></div>`;
      // var bgCover = `<div class="bg-top-cover"><div class="bg-top-gradient"></div></div>`;
      var bgCover = `<div class="bg-top-cover" style="background-image: url(${banner});"><div class="bg-top-gradient"></div></div>`;
      $('main').prepend(bgCover);
      var twelveInstallmentValue = calculateInstallmentValue(
        parseFloat(price),
        12
      );
      twelveInstallmentValue = 67.89;
      $('#amountAtOnce').html(formatter.format(price) + ' à vista');
      $('#installmentValue').html(formatter.format(twelveInstallmentValue));

      $('input.only-numbers').on('input', function () {
        this.value = this.value
          .replace(/[^0-9.]/g, '')
          .replace(/(\..*)\./g, '$1');
      });
      $('input.only-numbers').attr('pattern', '[0-9]+');

      function calculateInstallmentValue(amount, installments) {
        return (
          (Math.pow(1.0299, installments - 1) * amount) /
          installments
        ).toFixed(2);
      }

      $('input.form-control:visible')
        .prop('required', true)
        .on('keydown', function (e) {
          if (e.keyCode == 9) {
            e.preventDefault();

            var nextI = $('input.form-control:visible').index(this) + 1,
              next = $('input.form-control:visible').eq(nextI);
            next.focus();

            // Last input visible
            if ($(this)[0] == $('input.form-control:visible').last()[0]) {
              $(this).blur();
            } else {
              $('html').animate(
                {
                  scrollTop: next.offset().top - 160,
                },
                200
              );
            }
          }
        });

      const tel = document.getElementById('phone');

      tel?.addEventListener('keyup', (e) => mascaraTelefone(e.target.value));
      tel?.addEventListener('change', (e) => mascaraTelefone(e.target.value));

      const mascaraTelefone = (valor) => {
        valor = valor.replace(/\D/g, '');

        if (valor.length <= 1) {
          valor = valor.replace('0', '');
        }

        valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
        valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
        tel.value = valor; // Insere o(s) valor(es) no campo
      };

      var inputNome = document.querySelector('#nome');
      var inputEmail = document.querySelector('#email');
      var inputDoc = document.querySelector('#key');
      var inputPhone = document.querySelector('#phone');

      function get_mask(input_value) {
        input_value.replace(/\D+/g, '');
        return '000.000.000-00';
      }

      $('#key').mask(get_mask, {
        onKeyPress: function (input_value, event, element, options) {
          element.mask(get_mask, options);
        },
      });

      function nomeValidate() {
        var nomes = inputNome.value.split(' ');

        // Caso o nome contenha apenas espaços
        if (inputNome.value.replace(/\s/g, '') == '') {
          inputNome.setCustomValidity('Informe seu nome completo.');
          return;
        }

        if (nomes.length < 1) {
          inputNome.setCustomValidity('Informe seu nome completo.');
        } else {
          inputNome.setCustomValidity('');
        }
      }

      function emailValidate() {
        var re =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        inputEmail.value = inputEmail.value.replace(' ', '');
        if (!re.test(inputEmail.value)) {
          inputEmail.setCustomValidity('Informe seu nome completo.');
        } else {
          inputEmail.setCustomValidity('');
        }
      }

      function docValidate() {
        if (!validaCpfCnpj(inputDoc.value)) {
          inputDoc.setCustomValidity('Informe seu nome completo.');
        } else {
          inputDoc.setCustomValidity('');
        }
      }

      function validaCpfCnpj(val) {
        if (val.length == 14) {
          var cpf = val.trim();

          cpf = cpf.replace(/\./g, '');
          cpf = cpf.replace('-', '');
          cpf = cpf.split('');

          var v1 = 0;
          var v2 = 0;
          var aux = false;

          for (var i = 1; cpf.length > i; i++) {
            if (cpf[i - 1] != cpf[i]) {
              aux = true;
            }
          }

          if (aux == false) {
            return false;
          }

          for (var i2 = 0, p = 10; cpf.length - 2 > i2; i2++, p--) {
            v1 += cpf[i2] * p;
          }

          v1 = (v1 * 10) % 11;

          if (v1 == 10) {
            v1 = 0;
          }

          if (v1 != cpf[9]) {
            return false;
          }

          for (var i3 = 0, p2 = 11; cpf.length - 1 > i3; i3++, p2--) {
            v2 += cpf[i3] * p2;
          }

          v2 = (v2 * 10) % 11;

          if (v2 == 10) {
            v2 = 0;
          }

          if (v2 != cpf[10]) {
            return false;
          } else {
            return true;
          }
        } else if (val.length == 18) {
          var cnpj = val.trim();

          cnpj = cnpj.replace(/\./g, '');
          cnpj = cnpj.replace('-', '');
          cnpj = cnpj.replace('/', '');
          cnpj = cnpj.split('');

          var v1_ = 0;
          var v2_ = 0;
          var aux_ = false;

          for (var i4 = 1; cnpj.length > i4; i4++) {
            if (cnpj[i4 - 1] != cnpj[i4]) {
              aux_ = true;
            }
          }

          if (aux_ == false) {
            return false;
          }

          for (
            var i5 = 0, p1 = 5, p2_ = 13;
            cnpj.length - 2 > i5;
            i5++, p1--, p2_--
          ) {
            if (p1 >= 2) {
              v1_ += cnpj[i5] * p1;
            } else {
              v1_ += cnpj[i5] * p2_;
            }
          }

          v1_ = v1_ % 11;

          if (v1_ < 2) {
            v1_ = 0;
          } else {
            v1_ = 11 - v1_;
          }

          if (v1_ != cnpj[12]) {
            return false;
          }

          for (
            var i6 = 0, p1_ = 6, p3_ = 14;
            cnpj.length - 1 > i6;
            i6++, p1_--, p3_--
          ) {
            if (p1_ >= 2) {
              v2_ += cnpj[i6] * p1_;
            } else {
              v2_ += cnpj[i6] * p3_;
            }
          }

          v2_ = v2_ % 11;

          if (v2_ < 2) {
            v2_ = 0;
          } else {
            v2_ = 11 - v2_;
          }

          if (v2_ != cnpj[13]) {
            return false;
          } else {
            return true;
          }
        } else {
          return false;
        }
      }

      function phoneValidate() {
        if (!(inputPhone.value.length >= 14)) {
          inputPhone.setCustomValidity('Informe seu nome completo.');
        } else {
          inputPhone.setCustomValidity('');
        }
      }

      inputNome?.addEventListener('keyup', nomeValidate);
      inputNome?.addEventListener('blur', nomeValidate);

      inputEmail?.addEventListener('keyup', emailValidate);
      inputEmail?.addEventListener('blur', emailValidate);

      inputDoc?.addEventListener('keyup', docValidate);
      inputDoc?.addEventListener('blur', docValidate);

      inputPhone?.addEventListener('keyup', phoneValidate);
      inputPhone?.addEventListener('blur', phoneValidate);
    });

    return {
      buy,
      showPix,
      payerData,
    };
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden !important;
  max-width: 100vw !important;
}
:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #9397ad;
  --bs-gray-dark: #4c4e5e;
  --bs-gray-100: #f3f6ff;
  --bs-gray-200: #eff2fc;
  --bs-gray-300: #e2e5f1;
  --bs-gray-400: #d4d7e5;
  --bs-gray-500: #b4b7c9;
  --bs-gray-600: #9397ad;
  --bs-gray-700: #585c7b;
  --bs-gray-800: #3e4265;
  --bs-gray-900: #131022;
  --bs-primary: #6366f1;
  --bs-secondary: #eff2fc;
  --bs-success: #22c55e;
  --bs-info: #4c82f7;
  --bs-warning: #ffba08;
  --bs-danger: #ef4444;
  --bs-light: #fff;
  --bs-dark: #131022;
  --bs-primary-rgb: 244, 81, 82;
  --bs-secondary-rgb: 239, 242, 252;
  --bs-success-rgb: 34, 197, 94;
  --bs-info-rgb: 76, 130, 247;
  --bs-warning-rgb: 255, 186, 8;
  --bs-danger-rgb: 239, 68, 68;
  --bs-light-rgb: 255, 255, 255;
  --bs-dark-rgb: 19, 16, 34;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-body-color-rgb: 88, 92, 123;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.6;
  --bs-body-color: #585c7b;
  --bs-body-bg: #ececec;
  --primary-red: #e93636;
  --primary-red-dark: #ec2121;
  --primary-red-light: #f45152;
  --primary-blue: #6366f1;
}
*,
::after,
::before {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
hr {
  margin: 0 0;
  color: #e2e5f1;
  background-color: currentColor;
  border: 0;
  opacity: 1;
}
hr:not([size]) {
  height: 1px;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 800;
  line-height: 1.3;
  color: #131022;
}
.h1,
h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  .h1,
  h1 {
    font-size: 2.5rem;
  }
}
.h2,
h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  .h2,
  h2 {
    font-size: 2rem;
  }
}
.h3,
h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  .h3,
  h3 {
    font-size: 1.75rem;
  }
}
.h4,
h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  .h4,
  h4 {
    font-size: 1.5rem;
  }
}
.h5,
h5 {
  font-size: 1.25rem;
}
.h6,
h6 {
  font-size: 1rem;
}
p {
  margin-top: 0;
  margin-bottom: 1.25rem;
}
abbr[data-bs-original-title],
abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}
address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}
ol,
ul {
  padding-left: 2rem;
}
dl,
ol,
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
ol ol,
ol ul,
ul ol,
ul ul {
  margin-bottom: 0;
}
dt {
  font-weight: 800;
}
dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
blockquote {
  margin: 0 0 1rem;
}
b,
strong {
  font-weight: bolder;
}
.small,
small {
  font-size: 0.875em;
}
a {
  color: var(--primary-red-light);
  text-decoration: none;
}
a:hover {
  color: var(--primary-red-dark);
  text-decoration: none;
}
a:not([href]):not([class]),
a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}
img,
svg {
  vertical-align: middle;
}
table {
  caption-side: bottom;
  border-collapse: collapse;
}
caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #9397ad;
  text-align: left;
}
th {
  font-weight: 700;
  text-align: inherit;
  text-align: -webkit-match-parent;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}
label {
  display: inline-block;
}
button {
  border-radius: 0;
}
button:focus:not(:focus-visible) {
  outline: 0;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
select {
  text-transform: none;
}
[role='button'] {
  cursor: pointer;
}
select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}
[type='button'],
[type='reset'],
[type='submit'],
button {
  -webkit-appearance: button;
}
[type='button']:not(:disabled),
[type='reset']:not(:disabled),
[type='submit']:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
[hidden] {
  display: none !important;
}
.lead {
  font-size: calc(1.275rem + 0.3vw);
  font-weight: 400;
}
@media (min-width: 1200px) {
  .lead {
    font-size: 1.5rem;
  }
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.img-thumbnail {
  padding: 0.5rem;
  background-color: #fff;
  border: 0 solid #e2e5f1;
  border-radius: 0.5rem;
  box-shadow: 0 0.275rem 0.75rem -0.0625rem rgba(19, 16, 34, 0.06),
    0 0.125rem 0.4rem -0.0625rem rgba(19, 16, 34, 0.03);
  max-width: 100%;
  height: auto;
}
.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 500px) {
  .container,
  .container-sm {
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 100%;
  }
}
@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 100%;
  }
}
@media (min-width: 1400px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 1320px;
  }
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}
.col {
  flex: 1 0 0%;
}
.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}
.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}
.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}
.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}
.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}
.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}
.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}
.col-auto {
  flex: 0 0 auto;
  width: auto;
}
.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}
.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}
.col-3 {
  flex: 0 0 auto;
  width: 25%;
}
.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}
.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}
.col-6 {
  flex: 0 0 auto;
  width: 50%;
}
.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}
.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}
.col-9 {
  flex: 0 0 auto;
  width: 75%;
}
.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}
.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}
.col-12 {
  flex: 0 0 auto;
  width: 100%;
}
.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}
.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}
.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}
.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}
.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}
.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}
.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}
.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}
.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}
.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}
.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}
.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}
@media (min-width: 500px) {
  .col-sm {
    flex: 1 0 0%;
  }
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .g-sm-0,
  .gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .g-sm-0,
  .gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .g-sm-1,
  .gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-sm-1,
  .gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-sm-2,
  .gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-sm-2,
  .gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-sm-3,
  .gx-sm-3 {
    --bs-gutter-x: 1rem;
  }
  .g-sm-3,
  .gy-sm-3 {
    --bs-gutter-y: 1rem;
  }
  .g-sm-4,
  .gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-sm-4,
  .gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-sm-5,
  .gx-sm-5 {
    --bs-gutter-x: 3rem;
  }
  .g-sm-5,
  .gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .g-md-0,
  .gx-md-0 {
    --bs-gutter-x: 0;
  }
  .g-md-0,
  .gy-md-0 {
    --bs-gutter-y: 0;
  }
  .g-md-1,
  .gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-md-1,
  .gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-md-2,
  .gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-md-2,
  .gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-md-3,
  .gx-md-3 {
    --bs-gutter-x: 1rem;
  }
  .g-md-3,
  .gy-md-3 {
    --bs-gutter-y: 1rem;
  }
  .g-md-4,
  .gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-md-4,
  .gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-md-5,
  .gx-md-5 {
    --bs-gutter-x: 3rem;
  }
  .g-md-5,
  .gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .g-lg-0,
  .gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .g-lg-0,
  .gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .g-lg-1,
  .gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-lg-1,
  .gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-lg-2,
  .gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-lg-2,
  .gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-lg-3,
  .gx-lg-3 {
    --bs-gutter-x: 1rem;
  }
  .g-lg-3,
  .gy-lg-3 {
    --bs-gutter-y: 1rem;
  }
  .g-lg-4,
  .gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-lg-4,
  .gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-lg-5,
  .gx-lg-5 {
    --bs-gutter-x: 3rem;
  }
  .g-lg-5,
  .gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .g-xl-0,
  .gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .g-xl-0,
  .gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .g-xl-1,
  .gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xl-1,
  .gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xl-2,
  .gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xl-2,
  .gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xl-3,
  .gx-xl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xl-3,
  .gy-xl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xl-4,
  .gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xl-4,
  .gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xl-5,
  .gx-xl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xl-5,
  .gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }
  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .g-xxl-0,
  .gx-xxl-0 {
    --bs-gutter-x: 0;
  }
  .g-xxl-0,
  .gy-xxl-0 {
    --bs-gutter-y: 0;
  }
  .g-xxl-1,
  .gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xxl-1,
  .gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xxl-2,
  .gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xxl-2,
  .gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xxl-3,
  .gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xxl-3,
  .gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xxl-4,
  .gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xxl-4,
  .gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xxl-5,
  .gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xxl-5,
  .gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.form-label {
  margin-bottom: 0.3125rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #131022;
}
.form-text {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #9397ad;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  color: #585c7b;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d4d7e5;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
.form-control:focus {
  color: #585c7b;
  background-color: #fff;
  border-color: var(--input-focus-border-color);
  outline: 0;
  transition: 0.3s ease all;
}
.form-control::-webkit-date-and-time-value {
  height: 1.6em;
}
.form-control::-moz-placeholder {
  color: #b4b7c9;
  opacity: 1;
}
.form-control::placeholder {
  color: #b4b7c9;
  opacity: 1;
}
.form-control:disabled,
.form-control[readonly] {
  background-color: initial;
  opacity: 1;
}
.form-control-sm {
  min-height: calc(1.6em + 0.95rem + 2px);
  padding: 0.475rem 0.875rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
}
.form-control-lg {
  min-height: calc(1.6em + 1.57rem + 2px);
  padding: 0.785rem 1.125rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}
@media (max-width: 575px) {
  .form-select {
    padding: 0.625rem 2rem 0.625rem 0.7rem !important;
    font-size: 14px !important;
  }
}
.form-select {
  display: block;
  width: 100%;
  padding: 0.625rem 3rem 0.625rem 1rem;
  -moz-padding-start: calc(1rem - 3px);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  color: #585c7b;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23585c7b' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 16px 12px;
  border: 1px solid #d4d7e5;
  border-radius: 0.375rem !important;
  box-shadow: none !important;
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-select[disabled] {
  opacity: 0.4;
}
.form-select:focus {
  border-color: rgba(99, 102, 241, 0.35);
  outline: 0;
  box-shadow: inset 0 0 0 transparent, 0 0 0 0 rgba(99, 102, 241, 0.25);
}
.form-select[multiple],
.form-select[size]:not([size='1']) {
  padding-right: 1rem;
  background-image: none;
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #585c7b;
}
.form-select-sm {
  padding-top: 0.475rem;
  padding-bottom: 0.475rem;
  padding-left: 0.875rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
}
.form-select-lg {
  padding-top: 0.785rem;
  padding-bottom: 0.785rem;
  padding-left: 1.125rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}
.form-check {
  display: block;
  min-height: 1.6rem;
  padding-left: 1.5rem;
  margin-bottom: 0.25rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5rem;
}
.form-check-input {
  width: 1rem;
  height: 1rem;
  margin-top: 0.3rem;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 2px solid #b4b7c9;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}
.form-check-input[type='checkbox'] {
  border-radius: 0.1875em;
  transition: background-color 0.15s ease-in-out,
    background-position 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
.form-check-input[type='radio'] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  outline: 0;
}
.form-check-input:checked[type='checkbox'] {
  background-color: var(--green-success);
  border-color: var(--green-success);
  background-size: 120%;
  background-position: center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type='radio'] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type='checkbox']:indeterminate {
  background-color: #6366f1;
  border-color: #6366f1;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.55;
}
.form-check-input:disabled ~ .form-check-label,
.form-check-input[disabled] ~ .form-check-label {
  opacity: 0.55;
}
.form-switch {
  padding-left: 3.375em;
}
.form-switch .form-check-input {
  width: 2.875em;
  margin-left: -3.375em;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2.875em;
  transition: background-position 0.15s ease-in-out;
}
.form-switch .form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}
.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check:disabled + .btn,
.btn-check[disabled] + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}
.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 1rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
.form-floating > .form-control {
  padding: 1rem 1rem;
}
.form-floating > .form-control::-moz-placeholder {
  color: transparent;
}
.form-floating > .form-control::placeholder {
  color: transparent;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus,
.form-floating > .form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
  opacity: 0.7;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 0.7;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  opacity: 0.7;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus {
  z-index: 3;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 3;
}
.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  color: #585c7b;
  text-align: center;
  white-space: nowrap;
  background-color: #fff;
  border: 1px solid #d4d7e5;
  border-radius: 0.375rem;
}
.input-group-lg > .btn,
.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text {
  padding: 0.785rem 1.125rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}
.input-group-sm > .btn,
.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text {
  padding: 0.475rem 0.875rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
}
.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 4rem;
}
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3),
.input-group:not(.has-validation)
  > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4),
.input-group.has-validation
  > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group
  > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(
    .valid-feedback
  ):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #22c55e;
}
.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.75rem;
  color: #000;
  background-color: rgba(34, 197, 94, 0.9);
  border-radius: 0.25rem;
}
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip,
.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip {
  display: block;
}
.form-control.is-valid,
.was-validated .form-control:valid {
  border-color: #22c55e;
  padding-right: calc(1.6em + 1.25rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%2322c55e'%3e%3cpath d='M10 1.667c-4.595 0-8.333 3.738-8.333 8.333S5.405 18.333 10 18.333s8.333-3.738 8.333-8.333S14.595 1.667 10 1.667zm0 15c-3.676 0-6.667-2.991-6.667-6.667S6.324 3.333 10 3.333 16.667 6.324 16.667 10 13.676 16.667 10 16.667zm-1.668-5.345L6.416 9.41 5.24 10.59l3.094 3.088 5.588-5.588-1.178-1.178-4.412 4.412z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.4em + 0.3125rem) center;
  background-size: calc(0.8em + 0.625rem) calc(0.8em + 0.625rem);
}
.form-control.is-valid:focus,
.was-validated .form-control:valid:focus {
  border-color: #22c55e;
}
.was-validated textarea.form-control:valid,
textarea.form-control.is-valid {
  padding-right: calc(1.6em + 1.25rem);
  background-position: top calc(0.4em + 0.3125rem) right calc(0.4em + 0.3125rem);
}
.input-group .form-control.is-valid,
.input-group .form-select.is-valid,
.was-validated .input-group .form-control:valid,
.was-validated .input-group .form-select:valid {
  z-index: 1;
}
.input-group .form-control.is-valid:focus,
.input-group .form-select.is-valid:focus,
.was-validated .input-group .form-control:valid:focus,
.was-validated .input-group .form-select:valid:focus {
  z-index: 3;
}
.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #ef4444;
}
.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.75rem;
  color: #000;
  background-color: rgba(239, 68, 68, 0.9);
  border-radius: 0.25rem;
}
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip,
.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip {
  display: block;
}
.form-control.is-invalid,
.was-validated .form-control:invalid {
  border-color: #ef4444;
  padding-right: calc(1.6em + 1.25rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23ef4444'%3e%3cpath d='M7.643 13.535L10 11.178l2.357 2.357 1.178-1.178L11.178 10l2.357-2.357-1.178-1.178L10 8.822 7.643 6.465 6.465 7.643 8.822 10l-2.357 2.357 1.178 1.178zM10 18.333c4.595 0 8.333-3.738 8.333-8.333S14.595 1.667 10 1.667 1.667 5.405 1.667 10 5.405 18.333 10 18.333zm0-15c3.676 0 6.667 2.991 6.667 6.667S13.676 16.667 10 16.667 3.333 13.676 3.333 10 6.324 3.333 10 3.333z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.4em + 0.3125rem) center;
  background-size: calc(0.8em + 0.625rem) calc(0.8em + 0.625rem);
}
.form-control.is-invalid:focus,
.was-validated .form-control:invalid:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.25);
}
.was-validated textarea.form-control:invalid,
textarea.form-control.is-invalid {
  padding-right: calc(1.6em + 1.25rem);
  background-position: top calc(0.4em + 0.3125rem) right calc(0.4em + 0.3125rem);
}
.form-select.is-invalid,
.was-validated .form-select:invalid {
  border-color: #ef4444;
}
.form-select.is-invalid:focus,
.was-validated .form-select:invalid:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.25);
}
.input-group .form-control.is-invalid,
.input-group .form-select.is-invalid,
.was-validated .input-group .form-control:invalid,
.was-validated .input-group .form-select:invalid {
  z-index: 2;
}
.input-group .form-control.is-invalid:focus,
.input-group .form-select.is-invalid:focus,
.was-validated .input-group .form-control:invalid:focus,
.was-validated .input-group .form-select:invalid:focus {
  z-index: 3;
}
.btn {
  display: inline-block;
  font-weight: 600;
  line-height: 1.6;
  color: #585c7b;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.625rem 1.75rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.btn:hover {
  color: #585c7b;
}
.btn-check:focus + .btn,
.btn:focus {
  outline: 0;
  box-shadow: unset;
}
.btn-check:active + .btn,
.btn-check:checked + .btn,
.btn.active,
.btn:active {
  box-shadow: unset;
}
.btn-check:active + .btn:focus,
.btn-check:checked + .btn:focus,
.btn.active:focus,
.btn:active:focus {
  box-shadow: unset, unset;
}
.btn.disabled,
.btn:disabled,
fieldset:disabled .btn {
  pointer-events: none;
  opacity: 0.65;
  box-shadow: none;
}
.btn-primary {
  color: #000;
  background-color: var(--primary-red);
  border-color: var(--primary-red);
  box-shadow: unset;
}
.btn-primary:hover {
  color: #000;
  background-color: var(--primary-red-dark);
  border-color: var(--primary-red-dark);
}
.btn-check:focus + .btn-primary,
.btn-primary:focus {
  color: #000;
  background-color: var(--primary-red-dark);
  border-color: var(--primary-red-dark);
  box-shadow: unset, 0 0 0 0 rgba(205, 88, 84, 0.5);
}
.btn-check:active + .btn-primary,
.btn-check:checked + .btn-primary,
.btn-primary.active,
.btn-primary:active,
.show > .btn-primary.dropdown-toggle {
  color: #000;
  background-color: var(--primary-red-dark);
  border-color: var(--primary-red-dark);
}
.btn-check:active + .btn-primary:focus,
.btn-check:checked + .btn-primary:focus,
.btn-primary.active:focus,
.btn-primary:active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(205, 84, 84, 0.5);
}
.btn-primary.disabled,
.btn-primary:disabled {
  color: #000;
  background-color: #6366f1;
  border-color: #6366f1;
}
.btn-secondary {
  color: #000;
  background-color: #eff2fc;
  border-color: #eff2fc;
  box-shadow: unset;
}
.btn-secondary:hover {
  color: #000;
  background-color: #f1f4fc;
  border-color: #f1f3fc;
}
.btn-check:focus + .btn-secondary,
.btn-secondary:focus {
  color: #000;
  background-color: #f1f4fc;
  border-color: #f1f3fc;
  box-shadow: unset, 0 0 0 0 rgba(203, 206, 214, 0.5);
}
.btn-check:active + .btn-secondary,
.btn-check:checked + .btn-secondary,
.btn-secondary.active,
.btn-secondary:active,
.show > .btn-secondary.dropdown-toggle {
  color: #000;
  background-color: #f2f5fd;
  border-color: #f1f3fc;
}
.btn-check:active + .btn-secondary:focus,
.btn-check:checked + .btn-secondary:focus,
.btn-secondary.active:focus,
.btn-secondary:active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(203, 206, 214, 0.5);
}
.btn-secondary.disabled,
.btn-secondary:disabled {
  color: #000;
  background-color: #eff2fc;
  border-color: #eff2fc;
}
.btn-success {
  color: #000;
  background-color: #22c55e;
  border-color: #22c55e;
  box-shadow: unset;
}
.btn-success:hover {
  color: #000;
  background-color: #43ce76;
  border-color: #38cb6e;
}
.btn-check:focus + .btn-success,
.btn-success:focus {
  color: #000;
  background-color: #43ce76;
  border-color: #38cb6e;
  box-shadow: unset, 0 0 0 0 rgba(29, 167, 80, 0.5);
}
.btn-check:active + .btn-success,
.btn-check:checked + .btn-success,
.btn-success.active,
.btn-success:active,
.show > .btn-success.dropdown-toggle {
  color: #000;
  background-color: #4ed17e;
  border-color: #38cb6e;
}
.btn-check:active + .btn-success:focus,
.btn-check:checked + .btn-success:focus,
.btn-success.active:focus,
.btn-success:active:focus,
.show > .btn-success.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(29, 167, 80, 0.5);
}
.btn-success.disabled,
.btn-success:disabled {
  color: #000;
  background-color: #22c55e;
  border-color: #22c55e;
}
.btn-info {
  color: #000;
  background-color: #4c82f7;
  border-color: #4c82f7;
  box-shadow: unset;
}
.btn-info:hover {
  color: #000;
  background-color: #6795f8;
  border-color: #5e8ff8;
}
.btn-check:focus + .btn-info,
.btn-info:focus {
  color: #000;
  background-color: #6795f8;
  border-color: #5e8ff8;
  box-shadow: unset, 0 0 0 0 rgba(65, 111, 210, 0.5);
}
.btn-check:active + .btn-info,
.btn-check:checked + .btn-info,
.btn-info.active,
.btn-info:active,
.show > .btn-info.dropdown-toggle {
  color: #000;
  background-color: #709bf9;
  border-color: #5e8ff8;
}
.btn-check:active + .btn-info:focus,
.btn-check:checked + .btn-info:focus,
.btn-info.active:focus,
.btn-info:active:focus,
.show > .btn-info.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(65, 111, 210, 0.5);
}
.btn-info.disabled,
.btn-info:disabled {
  color: #000;
  background-color: #4c82f7;
  border-color: #4c82f7;
}
.btn-warning {
  color: #000;
  background-color: #ffba08;
  border-color: #ffba08;
  box-shadow: unset;
}
.btn-warning:hover {
  color: #000;
  background-color: #ffc42d;
  border-color: #ffc121;
}
.btn-check:focus + .btn-warning,
.btn-warning:focus {
  color: #000;
  background-color: #ffc42d;
  border-color: #ffc121;
  box-shadow: unset, 0 0 0 0 rgba(217, 158, 7, 0.5);
}
.btn-check:active + .btn-warning,
.btn-check:checked + .btn-warning,
.btn-warning.active,
.btn-warning:active,
.show > .btn-warning.dropdown-toggle {
  color: #000;
  background-color: #ffc839;
  border-color: #ffc121;
}
.btn-check:active + .btn-warning:focus,
.btn-check:checked + .btn-warning:focus,
.btn-warning.active:focus,
.btn-warning:active:focus,
.show > .btn-warning.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(217, 158, 7, 0.5);
}
.btn-warning.disabled,
.btn-warning:disabled {
  color: #000;
  background-color: #ffba08;
  border-color: #ffba08;
}
.btn-danger {
  color: #000;
  background-color: #ef4444;
  border-color: #ef4444;
  box-shadow: unset;
}
.btn-danger:hover {
  color: #000;
  background-color: #f16060;
  border-color: #f15757;
}
.btn-check:focus + .btn-danger,
.btn-danger:focus {
  color: #000;
  background-color: #f16060;
  border-color: #f15757;
  box-shadow: unset, 0 0 0 0 rgba(203, 58, 58, 0.5);
}
.btn-check:active + .btn-danger,
.btn-check:checked + .btn-danger,
.btn-danger.active,
.btn-danger:active,
.show > .btn-danger.dropdown-toggle {
  color: #000;
  background-color: #f26969;
  border-color: #f15757;
}
.btn-check:active + .btn-danger:focus,
.btn-check:checked + .btn-danger:focus,
.btn-danger.active:focus,
.btn-danger:active:focus,
.show > .btn-danger.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(203, 58, 58, 0.5);
}
.btn-danger.disabled,
.btn-danger:disabled {
  color: #000;
  background-color: #ef4444;
  border-color: #ef4444;
}
.btn-light {
  color: #000;
  background-color: #fff;
  border-color: #fff;
  box-shadow: unset;
}
.btn-light:hover {
  color: #000;
  background-color: #fff;
  border-color: #fff;
}
.btn-check:focus + .btn-light,
.btn-light:focus {
  color: #000;
  background-color: #fff;
  border-color: #fff;
  box-shadow: unset, 0 0 0 0 rgba(217, 217, 217, 0.5);
}
.btn-check:active + .btn-light,
.btn-check:checked + .btn-light,
.btn-light.active,
.btn-light:active,
.show > .btn-light.dropdown-toggle {
  color: #000;
  background-color: #fff;
  border-color: #fff;
}
.btn-check:active + .btn-light:focus,
.btn-check:checked + .btn-light:focus,
.btn-light.active:focus,
.btn-light:active:focus,
.show > .btn-light.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(217, 217, 217, 0.5);
}
.btn-light.disabled,
.btn-light:disabled {
  color: #000;
  background-color: #fff;
  border-color: #fff;
}
.btn-dark {
  color: #fff;
  background-color: #131022;
  border-color: #131022;
  box-shadow: unset;
}
.btn-dark:hover {
  color: #fff;
  background-color: #100e1d;
  border-color: #0f0d1b;
}
.btn-check:focus + .btn-dark,
.btn-dark:focus {
  color: #fff;
  background-color: #100e1d;
  border-color: #0f0d1b;
  box-shadow: unset, 0 0 0 0 rgba(54, 52, 67, 0.5);
}
.btn-check:active + .btn-dark,
.btn-check:checked + .btn-dark,
.btn-dark.active,
.btn-dark:active,
.show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #0f0d1b;
  border-color: #0e0c1a;
}
.btn-check:active + .btn-dark:focus,
.btn-check:checked + .btn-dark:focus,
.btn-dark.active:focus,
.btn-dark:active:focus,
.show > .btn-dark.dropdown-toggle:focus {
  box-shadow: unset, 0 0 0 0 rgba(54, 52, 67, 0.5);
}
.btn-dark.disabled,
.btn-dark:disabled {
  color: #fff;
  background-color: #131022;
  border-color: #131022;
}
.btn-outline-primary {
  color: var(--primary-red-light);
  border-color: var(--primary-red);
}
.btn-outline-primary:hover {
  color: #fff;
  background-color: var(--primary-red);
  border-color: var(--primary-red);
}
.btn-check:focus + .btn-outline-primary,
.btn-outline-primary:focus {
  box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.5);
}
.btn-check:active + .btn-outline-primary,
.btn-check:checked + .btn-outline-primary,
.btn-outline-primary.active,
.btn-outline-primary.dropdown-toggle.show,
.btn-outline-primary:active {
  color: #000;
  background-color: #6366f1;
  border-color: #6366f1;
}
.btn-check:active + .btn-outline-primary:focus,
.btn-check:checked + .btn-outline-primary:focus,
.btn-outline-primary.active:focus,
.btn-outline-primary.dropdown-toggle.show:focus,
.btn-outline-primary:active:focus {
  box-shadow: unset, 0 0 0 0 rgba(99, 102, 241, 0.5);
}
.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
  color: #6366f1;
  background-color: transparent;
}
.btn-outline-secondary {
  color: #eff2fc;
  border-color: #eff2fc;
}
.btn-outline-secondary:hover {
  color: #000;
  background-color: #eff2fc;
  border-color: #eff2fc;
}
.btn-check:focus + .btn-outline-secondary,
.btn-outline-secondary:focus {
  box-shadow: 0 0 0 0 rgba(239, 242, 252, 0.5);
}
.btn-check:active + .btn-outline-secondary,
.btn-check:checked + .btn-outline-secondary,
.btn-outline-secondary.active,
.btn-outline-secondary.dropdown-toggle.show,
.btn-outline-secondary:active {
  color: #000;
  background-color: #eff2fc;
  border-color: #eff2fc;
}
.btn-check:active + .btn-outline-secondary:focus,
.btn-check:checked + .btn-outline-secondary:focus,
.btn-outline-secondary.active:focus,
.btn-outline-secondary.dropdown-toggle.show:focus,
.btn-outline-secondary:active:focus {
  box-shadow: unset, 0 0 0 0 rgba(239, 242, 252, 0.5);
}
.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
  color: #eff2fc;
  background-color: transparent;
}
.btn-outline-success {
  color: #22c55e;
  border-color: #22c55e;
}
.btn-outline-success:hover {
  color: #000;
  background-color: #22c55e;
  border-color: #22c55e;
}
.btn-check:focus + .btn-outline-success,
.btn-outline-success:focus {
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
}
.btn-check:active + .btn-outline-success,
.btn-check:checked + .btn-outline-success,
.btn-outline-success.active,
.btn-outline-success.dropdown-toggle.show,
.btn-outline-success:active {
  color: #000;
  background-color: #22c55e;
  border-color: #22c55e;
}
.btn-check:active + .btn-outline-success:focus,
.btn-check:checked + .btn-outline-success:focus,
.btn-outline-success.active:focus,
.btn-outline-success.dropdown-toggle.show:focus,
.btn-outline-success:active:focus {
  box-shadow: unset, 0 0 0 0 rgba(34, 197, 94, 0.5);
}
.btn-outline-success.disabled,
.btn-outline-success:disabled {
  color: #22c55e;
  background-color: transparent;
}
.btn-outline-info {
  color: #4c82f7;
  border-color: #4c82f7;
}
.btn-outline-info:hover {
  color: #000;
  background-color: #4c82f7;
  border-color: #4c82f7;
}
.btn-check:focus + .btn-outline-info,
.btn-outline-info:focus {
  box-shadow: 0 0 0 0 rgba(76, 130, 247, 0.5);
}
.btn-check:active + .btn-outline-info,
.btn-check:checked + .btn-outline-info,
.btn-outline-info.active,
.btn-outline-info.dropdown-toggle.show,
.btn-outline-info:active {
  color: #000;
  background-color: #4c82f7;
  border-color: #4c82f7;
}
.btn-check:active + .btn-outline-info:focus,
.btn-check:checked + .btn-outline-info:focus,
.btn-outline-info.active:focus,
.btn-outline-info.dropdown-toggle.show:focus,
.btn-outline-info:active:focus {
  box-shadow: unset, 0 0 0 0 rgba(76, 130, 247, 0.5);
}
.btn-outline-info.disabled,
.btn-outline-info:disabled {
  color: #4c82f7;
  background-color: transparent;
}
.btn-outline-warning {
  color: #ffba08;
  border-color: #ffba08;
}
.btn-outline-warning:hover {
  color: #000;
  background-color: #ffba08;
  border-color: #ffba08;
}
.btn-check:focus + .btn-outline-warning,
.btn-outline-warning:focus {
  box-shadow: 0 0 0 0 rgba(255, 186, 8, 0.5);
}
.btn-check:active + .btn-outline-warning,
.btn-check:checked + .btn-outline-warning,
.btn-outline-warning.active,
.btn-outline-warning.dropdown-toggle.show,
.btn-outline-warning:active {
  color: #000;
  background-color: #ffba08;
  border-color: #ffba08;
}
.btn-check:active + .btn-outline-warning:focus,
.btn-check:checked + .btn-outline-warning:focus,
.btn-outline-warning.active:focus,
.btn-outline-warning.dropdown-toggle.show:focus,
.btn-outline-warning:active:focus {
  box-shadow: unset, 0 0 0 0 rgba(255, 186, 8, 0.5);
}
.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
  color: #ffba08;
  background-color: transparent;
}
.btn-outline-danger {
  color: #ef4444;
  border-color: #ef4444;
}
.btn-outline-danger:hover {
  color: #000;
  background-color: #ef4444;
  border-color: #ef4444;
}
.btn-check:focus + .btn-outline-danger,
.btn-outline-danger:focus {
  box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.5);
}
.btn-check:active + .btn-outline-danger,
.btn-check:checked + .btn-outline-danger,
.btn-outline-danger.active,
.btn-outline-danger.dropdown-toggle.show,
.btn-outline-danger:active {
  color: #000;
  background-color: #ef4444;
  border-color: #ef4444;
}
.btn-check:active + .btn-outline-danger:focus,
.btn-check:checked + .btn-outline-danger:focus,
.btn-outline-danger.active:focus,
.btn-outline-danger.dropdown-toggle.show:focus,
.btn-outline-danger:active:focus {
  box-shadow: unset, 0 0 0 0 rgba(239, 68, 68, 0.5);
}
.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
  color: #ef4444;
  background-color: transparent;
}
.btn-outline-light {
  color: #fff;
  border-color: #fff;
}
.btn-outline-light:hover {
  color: #000;
  background-color: #fff;
  border-color: #fff;
}
.btn-check:focus + .btn-outline-light,
.btn-outline-light:focus {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}
.btn-check:active + .btn-outline-light,
.btn-check:checked + .btn-outline-light,
.btn-outline-light.active,
.btn-outline-light.dropdown-toggle.show,
.btn-outline-light:active {
  color: #000;
  background-color: #fff;
  border-color: #fff;
}
.btn-check:active + .btn-outline-light:focus,
.btn-check:checked + .btn-outline-light:focus,
.btn-outline-light.active:focus,
.btn-outline-light.dropdown-toggle.show:focus,
.btn-outline-light:active:focus {
  box-shadow: unset, 0 0 0 0 rgba(255, 255, 255, 0.5);
}
.btn-outline-light.disabled,
.btn-outline-light:disabled {
  color: #fff;
  background-color: transparent;
}
.btn-outline-dark {
  color: #131022;
  border-color: #131022;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #131022;
  border-color: #131022;
}
.btn-check:focus + .btn-outline-dark,
.btn-outline-dark:focus {
  box-shadow: 0 0 0 0 rgba(19, 16, 34, 0.5);
}
.btn-check:active + .btn-outline-dark,
.btn-check:checked + .btn-outline-dark,
.btn-outline-dark.active,
.btn-outline-dark.dropdown-toggle.show,
.btn-outline-dark:active {
  color: #fff;
  background-color: #131022;
  border-color: #131022;
}
.btn-check:active + .btn-outline-dark:focus,
.btn-check:checked + .btn-outline-dark:focus,
.btn-outline-dark.active:focus,
.btn-outline-dark.dropdown-toggle.show:focus,
.btn-outline-dark:active:focus {
  box-shadow: unset, 0 0 0 0 rgba(19, 16, 34, 0.5);
}
.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
  color: #131022;
  background-color: transparent;
}
.btn-link {
  font-weight: 400;
  color: var(--primary-red-light);
  text-decoration: underline;
}
.btn-link:hover {
  color: var(--primary-red-dark);
  text-decoration: none;
}
.btn-link:focus {
  text-decoration: none;
}
.btn-link.disabled,
.btn-link:disabled {
  color: #9397ad;
}
.btn-group-lg > .btn,
.btn-lg {
  padding: 0.785rem 2rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}
.btn-group-sm > .btn,
.btn-sm {
  padding: 0.475rem 1.25rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
}
.fade {
  transition: opacity 0.15s linear;
}
.fade:not(.show) {
  opacity: 0;
}
.collapse:not(.show) {
  display: none;
}
.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
.collapsing.collapse-horizontal {
  width: 0;
  height: auto;
  transition: width 0.35s ease;
}
.dropdown,
.dropend,
.dropstart,
.dropup {
  position: relative;
}
.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 12rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 0.875rem;
  color: #585c7b;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.275rem 1.25rem rgba(19, 16, 34, 0.05),
    0 0.25rem 0.5625rem rgba(19, 16, 34, 0.03);
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: 0.25rem;
}
.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}
.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.25rem;
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.25rem;
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}
.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.25rem;
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.375rem 1rem;
  clear: both;
  font-weight: 400;
  color: #3e4265;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav-link {
  display: block;
  padding: 0.535rem 1rem;
  font-weight: 600;
  color: #3e4265;
  text-decoration: none;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
}
.nav-link:focus,
.nav-link:hover {
  color: #6366f1;
}
.nav-link.disabled {
  color: #9397ad;
  pointer-events: none;
  cursor: default;
}
.nav-tabs {
  border-bottom: 0 solid transparent;
}
.nav-tabs .nav-link {
  margin-bottom: 0;
  background: 0 0;
  border: 0 solid transparent;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
  border-color: transparent;
  isolation: isolate;
}
.nav-tabs .nav-link.disabled {
  color: #9397ad;
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #fff;
  background-color: #6366f1;
  border-color: transparent;
}
.nav-tabs .dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.nav-pills .nav-link {
  background: 0 0;
  border: 0;
  border-radius: 50rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #6366f1;
}
.nav-fill .nav-item,
.nav-fill > .nav-link {
  flex: 1 1 auto;
  text-align: center;
}
.nav-justified .nav-item,
.nav-justified > .nav-link {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}
.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
#pills-billet .panel img {
  filter: hue-rotate(-80deg);
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #e2e5f1;
  border-radius: 0.5rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.5rem - 1px);
  border-top-right-radius: calc(0.5rem - 1px);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.5rem - 1px);
  border-bottom-left-radius: calc(0.5rem - 1px);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}
.card-body {
  flex: 1 1 auto;
  padding: 1.5rem 1.25rem;
}
.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  color: #131022;
  text-align: left;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    border-radius 0.15s ease;
}
.accordion-button:not(.collapsed) {
  color: #131022;
  background-color: #fff;
  box-shadow: inset 0 -1px 0 #e2e5f1;
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' fill='%23fff'%3e%3cpath d='M225.813 48.907L128 146.72 30.187 48.907 0 79.093l128 128 128-128z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}
.accordion-button::after {
  flex-shrink: 0;
  width: 0.625rem;
  height: 0.625rem;
  margin-left: auto;
  content: '';
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' fill='%233e4265'%3e%3cpath d='M225.813 48.907L128 146.72 30.187 48.907 0 79.093l128 128 128-128z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 0.625rem;
  transition: transform 0.2s ease-in-out;
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  border-color: rgba(99, 102, 241, 0.35);
  outline: 0;
  box-shadow: unset;
}
.accordion-header {
  margin-bottom: 0;
}
.accordion-item {
  background-color: #fff;
  border: 1px solid #e2e5f1;
}
.accordion-item:first-of-type {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: calc(0.5rem - 1px);
  border-top-right-radius: calc(0.5rem - 1px);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: calc(0.5rem - 1px);
  border-bottom-left-radius: calc(0.5rem - 1px);
}
.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.accordion-body {
  padding: 1rem 1.5rem;
}
.accordion-flush .accordion-collapse {
  border-width: 0;
}
.accordion-flush .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush .accordion-item .accordion-button {
  border-radius: 0;
}
.badge {
  display: inline-block;
  padding: 0.35em 0.6em;
  font-size: 0.8125em;
  font-weight: 600;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
.badge:empty {
  display: none;
}
.btn .badge {
  position: relative;
  top: -1px;
}
.alert {
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
}
.alert-heading {
  color: inherit;
}
.alert-link {
  font-weight: 600;
}
.alert-dismissible {
  padding-right: 3rem;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
}
.alert-primary {
  color: #595cd9;
  background-color: #eff0fe;
  border-color: #b1b3f8;
}
.alert-primary .alert-link {
  color: #474aae;
}
.alert-secondary {
  color: #d7dae3;
  background-color: #fdfeff;
  border-color: #f7f9fe;
}
.alert-secondary .alert-link {
  color: #acaeb6;
}
.alert-success {
  color: #1fb155;
  background-color: #e9f9ef;
  border-color: #91e2af;
}
.alert-success .alert-link {
  color: #198e44;
}
.alert-info {
  color: #4475de;
  background-color: #edf3fe;
  border-color: #a6c1fb;
}
.alert-info .alert-link {
  color: #365eb2;
}
.alert-warning {
  color: #daa520;
  background-color: #fff8e69c;
  border-color: #ffdd84;
}
.alert-warning .alert-link {
  color: #b88606;
}
.alert-danger {
  color: #d73d3d;
  background-color: #fdecec;
  border-color: #f7a2a2;
}
.alert-danger .alert-link {
  color: #ac3131;
}
.alert-light {
  color: #e6e6e6;
  background-color: #fff;
  border-color: #fff;
}
.alert-light .alert-link {
  color: #b8b8b8;
}
.alert-dark {
  color: #110e1f;
  background-color: #e7e7e9;
  border-color: #898891;
}
.alert-dark .alert-link {
  color: #0e0b19;
}
.btn-close {
  box-sizing: content-box;
  width: 0.75em;
  height: 0.75em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/.75em auto no-repeat;
  border: 0;
  border-radius: 0.375rem;
  opacity: 0.5;
}
.btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.btn-close:focus {
  outline: 0;
  box-shadow: none;
  opacity: 1;
}
.btn-close.disabled,
.btn-close:disabled {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  opacity: 0.25;
}
.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.2s ease-out;
  transform: scale(0.9);
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}
.modal-dialog-scrollable {
  height: calc(100% - 1rem);
}
.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}
.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 0 solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 0.275rem 1.25rem rgba(19, 16, 34, 0.05),
    0 0.25rem 0.5625rem rgba(19, 16, 34, 0.03);
  outline: 0;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: 0.65;
}
.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1.125rem 1.5rem;
  border-bottom: 1px solid #e2e5f1;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.modal-header .btn-close {
  padding: 0.5625rem 0.75rem;
  margin: -0.5625rem -0.75rem -0.5625rem auto;
}
.modal-title {
  margin-bottom: 0;
  line-height: 1.6;
}
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1.5rem;
}
.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 1.125rem;
  border-top: 1px solid #e2e5f1;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.modal-footer > * {
  margin: 0.375rem;
}
@media (min-width: 500px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  .modal-dialog-scrollable {
    height: calc(100% - 3.5rem);
  }
  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }
  .modal-content {
    box-shadow: 0 0.275rem 1.25rem rgba(19, 16, 34, 0.05),
      0 0.25rem 0.5625rem rgba(19, 16, 34, 0.03);
  }
  .modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
  .modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}
.tooltip {
  position: absolute;
  z-index: 1080;
  display: block;
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.8125rem;
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: 0.9;
}
.tooltip .tooltip-arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}
.tooltip .tooltip-arrow::before {
  position: absolute;
  content: '';
  border-color: transparent;
  border-style: solid;
}
.bs-tooltip-auto[data-popper-placement^='top'],
.bs-tooltip-top {
  padding: 0.4rem 0;
}
.bs-tooltip-auto[data-popper-placement^='top'] .tooltip-arrow,
.bs-tooltip-top .tooltip-arrow {
  bottom: 0;
}
.bs-tooltip-auto[data-popper-placement^='top'] .tooltip-arrow::before,
.bs-tooltip-top .tooltip-arrow::before {
  top: -1px;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}
.bs-tooltip-auto[data-popper-placement^='right'],
.bs-tooltip-end {
  padding: 0 0.4rem;
}
.bs-tooltip-auto[data-popper-placement^='right'] .tooltip-arrow,
.bs-tooltip-end .tooltip-arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-auto[data-popper-placement^='right'] .tooltip-arrow::before,
.bs-tooltip-end .tooltip-arrow::before {
  right: -1px;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}
.bs-tooltip-auto[data-popper-placement^='bottom'],
.bs-tooltip-bottom {
  padding: 0.4rem 0;
}
.bs-tooltip-auto[data-popper-placement^='bottom'] .tooltip-arrow,
.bs-tooltip-bottom .tooltip-arrow {
  top: 0;
}
.bs-tooltip-auto[data-popper-placement^='bottom'] .tooltip-arrow::before,
.bs-tooltip-bottom .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}
.bs-tooltip-auto[data-popper-placement^='left'],
.bs-tooltip-start {
  padding: 0 0.4rem;
}
.bs-tooltip-auto[data-popper-placement^='left'] .tooltip-arrow,
.bs-tooltip-start .tooltip-arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-auto[data-popper-placement^='left'] .tooltip-arrow::before,
.bs-tooltip-start .tooltip-arrow::before {
  left: -1px;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}
.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
}
@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  border: 0.15em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: 0.75s linear infinite spinner-border;
  animation: 0.75s linear infinite spinner-border;
}
.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.1em;
}
.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}
.clearfix::after {
  display: block;
  clear: both;
  content: '';
}
.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
.text-transform-none {
  text-transform: none !important;
}
.align-baseline {
  vertical-align: baseline !important;
}
.align-top {
  vertical-align: top !important;
}
.align-middle {
  vertical-align: middle !important;
}
.align-bottom {
  vertical-align: bottom !important;
}
.align-text-bottom {
  vertical-align: text-bottom !important;
}
.align-text-top {
  vertical-align: text-top !important;
}
.float-start {
  float: left !important;
}
.float-end {
  float: right !important;
}
.opacity-8 {
  opacity: 0.08 !important;
}
.opacity-10 {
  opacity: 0.1 !important;
}
.opacity-15 {
  opacity: 0.15 !important;
}
.opacity-20 {
  opacity: 0.2 !important;
}
.opacity-25 {
  opacity: 0.25 !important;
}
.opacity-35 {
  opacity: 0.35 !important;
}
.opacity-40 {
  opacity: 0.4 !important;
}
.opacity-50 {
  opacity: 0.5 !important;
}
.opacity-60 {
  opacity: 0.6 !important;
}
.opacity-70 {
  opacity: 0.7 !important;
}
.opacity-75 {
  opacity: 0.75 !important;
}
.opacity-80 {
  opacity: 0.8 !important;
}
.opacity-90 {
  opacity: 0.9 !important;
}
.opacity-100 {
  opacity: 1 !important;
}
.overflow-auto {
  overflow: auto !important;
}
.overflow-hidden {
  overflow: hidden !important;
}
.overflow-visible {
  overflow: visible !important;
}
.d-inline-block {
  display: inline-block !important;
}
.d-block {
  display: block !important;
}
.d-grid {
  display: grid !important;
}
.d-table {
  display: table !important;
}
.d-table-row {
  display: table-row !important;
}
.d-table-cell {
  display: table-cell !important;
}
.d-flex {
  display: flex !important;
}
.d-inline-flex {
  display: inline-flex !important;
}
.d-none {
  display: none !important;
}
.shadow {
  box-shadow: 0 0.275rem 1.25rem rgba(19, 16, 34, 0.05),
    0 0.25rem 0.5625rem rgba(19, 16, 34, 0.03) !important;
}
.shadow-sm {
  box-shadow: 0 0.275rem 0.75rem -0.0625rem rgba(19, 16, 34, 0.06),
    0 0.125rem 0.4rem -0.0625rem rgba(19, 16, 34, 0.03) !important;
}
.shadow-lg {
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(19, 16, 34, 0.1),
    0 0.25rem 0.8125rem -0.125rem rgba(19, 16, 34, 0.06) !important;
}
.shadow-none {
  box-shadow: none !important;
}
.shadow-primary {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgb(241 99 99 / 55%) !important;
}
.shadow-blue {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgb(99 102 241 / 90%) !important;
}
.shadow-secondary {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(19, 16, 34, 0.15) !important;
}
.shadow-info {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(76, 130, 247, 0.9) !important;
}
.shadow-success {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(34, 197, 94, 0.9) !important;
}
.shadow-warning {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(255, 186, 8, 0.9) !important;
}
.shadow-danger {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(239, 68, 68, 0.9) !important;
}
.position-relative {
  position: relative !important;
}
.position-absolute {
  position: absolute !important;
}
.position-fixed {
  position: fixed !important;
}
.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}
.top-0 {
  top: 0 !important;
}
.top-50 {
  top: 50% !important;
}
.top-100 {
  top: 100% !important;
}
.bottom-0 {
  bottom: 0 !important;
}
.bottom-50 {
  bottom: 50% !important;
}
.bottom-100 {
  bottom: 100% !important;
}
.start-0 {
  left: 0 !important;
}
.start-50 {
  left: 50% !important;
}
.start-100 {
  left: 100% !important;
}
.end-0 {
  right: 0 !important;
}
.end-50 {
  right: 50% !important;
}
.end-100 {
  right: 100% !important;
}
.border {
  border: 1px solid #e2e5f1 !important;
}
.border-0 {
  border: 0 !important;
}
.border-top {
  border-top: 1px solid #e2e5f1 !important;
}
.border-top-0 {
  border-top: 0 !important;
}
.border-end {
  border-right: 1px solid #e2e5f1 !important;
}
.border-end-0 {
  border-right: 0 !important;
}
.border-bottom {
  border-bottom: 1px solid #e2e5f1 !important;
}
.border-bottom-0 {
  border-bottom: 0 !important;
}
.border-start {
  border-left: 1px solid #e2e5f1 !important;
}
.border-start-0 {
  border-left: 0 !important;
}
.border-primary {
  border-color: rgb(241, 99, 99, 0.41) !important;
}
.border-success {
  border-color: rgba(34, 197, 94, 0.35) !important;
}
.border-info {
  border-color: rgba(76, 130, 247, 0.35) !important;
}
.border-warning {
  border-color: rgba(255, 186, 8, 0.35) !important;
}
.border-danger {
  border-color: rgba(239, 68, 68, 0.35) !important;
}
.border-light {
  border-color: rgba(255, 255, 255, 0.15) !important;
}
.border-dark {
  border-color: rgba(19, 16, 34, 0.35) !important;
}
.border-white {
  border-color: rgba(255, 255, 255, 0.35) !important;
}
.border-1 {
  border-width: 1px !important;
}
.border-2 {
  border-width: 2px !important;
}
.border-3 {
  border-width: 3px !important;
}
.border-4 {
  border-width: 4px !important;
}
.border-5 {
  border-width: 5px !important;
}
.w-25 {
  width: 25% !important;
}
.w-50 {
  width: 50% !important;
}
.w-75 {
  width: 75% !important;
}
.w-100 {
  width: 100% !important;
}
.w-auto {
  width: auto !important;
}
.mw-100 {
  max-width: 100% !important;
}
.vw-100 {
  width: 100vw !important;
}
.min-vw-100 {
  min-width: 100vw !important;
}
.h-25 {
  height: 25% !important;
}
.h-50 {
  height: 50% !important;
}
.h-75 {
  height: 75% !important;
}
.h-100 {
  height: 100% !important;
}
.h-auto {
  height: auto !important;
}
.h-1 {
  height: 1px !important;
}
.mh-100 {
  max-height: 100% !important;
}
.vh-100 {
  height: 100vh !important;
}
.min-vh-100 {
  min-height: 100vh !important;
}
.flex-row {
  flex-direction: row !important;
}
.flex-column {
  flex-direction: column !important;
}
.flex-row-reverse {
  flex-direction: row-reverse !important;
}
.flex-column-reverse {
  flex-direction: column-reverse !important;
}
.flex-wrap {
  flex-wrap: wrap !important;
}
.flex-nowrap {
  flex-wrap: nowrap !important;
}
.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
.justify-content-start {
  justify-content: flex-start !important;
}
.justify-content-end {
  justify-content: flex-end !important;
}
.justify-content-center {
  justify-content: center !important;
}
.justify-content-between {
  justify-content: space-between !important;
}
.justify-content-around {
  justify-content: space-around !important;
}
.justify-content-evenly {
  justify-content: space-evenly !important;
}
.align-items-start {
  align-items: flex-start !important;
}
.align-items-end {
  align-items: flex-end !important;
}
.align-items-center {
  align-items: center !important;
}
.align-items-baseline {
  align-items: baseline !important;
}
.align-items-stretch {
  align-items: stretch !important;
}
.m-0 {
  margin: 0 !important;
}
.m-1 {
  margin: 0.25rem !important;
}
.m-2 {
  margin: 0.5rem !important;
}
.m-3 {
  margin: 1rem !important;
}
.m-4 {
  margin: 1.5rem !important;
}
.m-5 {
  margin: 3rem !important;
}
.m-auto {
  margin: auto !important;
}
.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}
.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}
.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}
.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}
.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}
.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}
.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}
.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}
.mt-0 {
  margin-top: 0 !important;
}
.mt-1 {
  margin-top: 0.25rem !important;
}
.mt-2 {
  margin-top: 0.5rem !important;
}
.mt-3 {
  margin-top: 1rem !important;
}
.mt-4 {
  margin-top: 1.5rem !important;
}
.mt-5 {
  margin-top: 3rem !important;
}
.mt-auto {
  margin-top: auto !important;
}
.me-0 {
  margin-right: 0 !important;
}
.me-1 {
  margin-right: 0.25rem !important;
}
.me-2 {
  margin-right: 0.5rem !important;
}
.me-3 {
  margin-right: 1rem !important;
}
.me-4 {
  margin-right: 1.5rem !important;
}
.me-5 {
  margin-right: 3rem !important;
}
.me-auto {
  margin-right: auto !important;
}
.mb-0 {
  margin-bottom: 0 !important;
}
.mb-1 {
  margin-bottom: 0.25rem !important;
}
.mb-2 {
  margin-bottom: 0.5rem !important;
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.mb-5 {
  margin-bottom: 3rem !important;
}
.mb-auto {
  margin-bottom: auto !important;
}
.ms-0 {
  margin-left: 0 !important;
}
.ms-1 {
  margin-left: 0.25rem !important;
}
.ms-2 {
  margin-left: 0.5rem !important;
}
.ms-3 {
  margin-left: 1rem !important;
}
.ms-4 {
  margin-left: 1.5rem !important;
}
.ms-5 {
  margin-left: 3rem !important;
}
.ms-auto {
  margin-left: auto !important;
}
.m-n1 {
  margin: -0.25rem !important;
}
.m-n2 {
  margin: -0.5rem !important;
}
.m-n3 {
  margin: -1rem !important;
}
.m-n4 {
  margin: -1.5rem !important;
}
.m-n5 {
  margin: -3rem !important;
}
.mx-n1 {
  margin-right: -0.25rem !important;
  margin-left: -0.25rem !important;
}
.mx-n2 {
  margin-right: -0.5rem !important;
  margin-left: -0.5rem !important;
}
.mx-n3 {
  margin-right: -1rem !important;
  margin-left: -1rem !important;
}
.mx-n4 {
  margin-right: -1.5rem !important;
  margin-left: -1.5rem !important;
}
.mx-n5 {
  margin-right: -3rem !important;
  margin-left: -3rem !important;
}
.my-n1 {
  margin-top: -0.25rem !important;
  margin-bottom: -0.25rem !important;
}
.my-n2 {
  margin-top: -0.5rem !important;
  margin-bottom: -0.5rem !important;
}
.my-n3 {
  margin-top: -1rem !important;
  margin-bottom: -1rem !important;
}
.my-n4 {
  margin-top: -1.5rem !important;
  margin-bottom: -1.5rem !important;
}
.my-n5 {
  margin-top: -3rem !important;
  margin-bottom: -3rem !important;
}
.mt-n1 {
  margin-top: -0.25rem !important;
}
.mt-n2 {
  margin-top: -0.5rem !important;
}
.mt-n3 {
  margin-top: -1rem !important;
}
.mt-n4 {
  margin-top: -1.5rem !important;
}
.mt-n5 {
  margin-top: -3rem !important;
}
.me-n1 {
  margin-right: -0.25rem !important;
}
.me-n2 {
  margin-right: -0.5rem !important;
}
.me-n3 {
  margin-right: -1rem !important;
}
.me-n4 {
  margin-right: -1.5rem !important;
}
.me-n5 {
  margin-right: -3rem !important;
}
.mb-n1 {
  margin-bottom: -0.25rem !important;
}
.mb-n2 {
  margin-bottom: -0.5rem !important;
}
.mb-n3 {
  margin-bottom: -1rem !important;
}
.mb-n4 {
  margin-bottom: -1.5rem !important;
}
.mb-n5 {
  margin-bottom: -3rem !important;
}
.ms-n1 {
  margin-left: -0.25rem !important;
}
.ms-n2 {
  margin-left: -0.5rem !important;
}
.ms-n3 {
  margin-left: -1rem !important;
}
.ms-n4 {
  margin-left: -1.5rem !important;
}
.ms-n5 {
  margin-left: -3rem !important;
}
.p-0 {
  padding: 0 !important;
}
.p-1 {
  padding: 0.25rem !important;
}
.p-2 {
  padding: 0.5rem !important;
}
.p-3 {
  padding: 1rem !important;
}
.p-4 {
  padding: 1.5rem !important;
}
.p-5 {
  padding: 3rem !important;
}
.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}
.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}
.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}
.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}
.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
.pt-0 {
  padding-top: 0 !important;
}
.pt-1 {
  padding-top: 0.25rem !important;
}
.pt-2 {
  padding-top: 0.5rem !important;
}
.pt-3 {
  padding-top: 1rem !important;
}
.pt-4 {
  padding-top: 1.5rem !important;
}
.pt-5 {
  padding-top: 3rem !important;
}
.pe-0 {
  padding-right: 0 !important;
}
.pe-1 {
  padding-right: 0.25rem !important;
}
.pe-2 {
  padding-right: 0.5rem !important;
}
.pe-3 {
  padding-right: 1rem !important;
}
.pe-4 {
  padding-right: 1.5rem !important;
}
.pe-5 {
  padding-right: 3rem !important;
}
.pb-0 {
  padding-bottom: 0 !important;
}
.pb-1 {
  padding-bottom: 0.25rem !important;
}
.pb-2 {
  padding-bottom: 0.5rem !important;
}
.pb-3 {
  padding-bottom: 1rem !important;
}
.pb-4 {
  padding-bottom: 1.5rem !important;
}
.pb-5 {
  padding-bottom: 3rem !important;
}
.ps-0 {
  padding-left: 0 !important;
}
.ps-1 {
  padding-left: 0.25rem !important;
}
.ps-2 {
  padding-left: 0.5rem !important;
}
.ps-3 {
  padding-left: 1rem !important;
}
.ps-4 {
  padding-left: 1.5rem !important;
}
.ps-5 {
  padding-left: 3rem !important;
}
.fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}
.fs-2 {
  font-size: calc(1.325rem + 0.9vw) !important;
}
.fs-3 {
  font-size: calc(1.3rem + 0.6vw) !important;
}
.fs-4 {
  font-size: calc(1.275rem + 0.3vw) !important;
}
.fs-5 {
  font-size: 1.25rem !important;
}
.fs-6 {
  font-size: 1rem !important;
}
.fs-xl {
  font-size: 1.25rem !important;
}
.fs-lg {
  font-size: 1.125rem !important;
}
.fs-base {
  font-size: 1rem !important;
}
.fs-sm {
  font-size: 0.875rem !important;
}
.fs-xs {
  font-size: 0.75rem !important;
}
.fw-light {
  font-weight: 300 !important;
}
.fw-lighter {
  font-weight: lighter !important;
}
.fw-normal {
  font-weight: 400 !important;
}
.fw-bold {
  font-weight: 700 !important;
}
.fw-bolder {
  font-weight: bolder !important;
}
.fw-500 {
  font-weight: 500 !important;
}
.fw-medium {
  font-weight: 600 !important;
}
.fw-semibold {
  font-weight: 700 !important;
}
.lh-1 {
  line-height: 1 !important;
}
.text-start {
  text-align: left !important;
}
.text-end {
  text-align: right !important;
}
.text-center {
  text-align: center !important;
}
.text-decoration-none {
  text-decoration: none !important;
}
.text-decoration-underline {
  text-decoration: underline !important;
}
.text-lowercase {
  text-transform: lowercase !important;
}
.text-uppercase {
  text-transform: uppercase !important;
}
.text-capitalize {
  text-transform: capitalize !important;
}
.text-wrap {
  white-space: normal !important;
}
.text-nowrap {
  white-space: nowrap !important;
}
.text-primary {
  color: var(--primary-red-light) !important;
}
.text-blue {
  color: var(--primary-blue) !important;
}
.text-secondary {
  color: #eff2fc !important;
}
.text-success {
  color: #22c55e !important;
}
.text-info {
  color: #4c82f7 !important;
}
.text-warning {
  color: #ffba08 !important;
}
.text-danger {
  color: #ef4444 !important;
}
.text-white {
  color: #fff !important;
}
.text-body {
  color: #585c7b !important;
}
.text-muted {
  color: #878a9b !important;
}
.text-nav {
  color: #3e4265 !important;
}
.text-border {
  color: #e2e5f1 !important;
}
.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(
    var(--bs-primary-rgb),
    var(--bs-bg-opacity)
  ) !important;
}
.bg-secondary {
  --bs-bg-opacity: 1;
  background-color: rgb(144 145 231 / 17%) !important;
}
.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(
    var(--bs-success-rgb),
    var(--bs-bg-opacity)
  ) !important;
}
.bg-info {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
}
.bg-warning {
  --bs-bg-opacity: 1;
  background-color: rgba(
    var(--bs-warning-rgb),
    var(--bs-bg-opacity)
  ) !important;
}
.bg-danger {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
}
.bg-light {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}
.bg-dark {
  --bs-bg-opacity: 1;
  background-color: #131022 !important;
}
.bg-black {
  --bs-bg-opacity: 1;
  background-color: #000 !important;
}
.bg-white {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
}
.bg-transparent {
  --bs-bg-opacity: 1;
  background-color: transparent !important;
}
.rounded {
  border-radius: 0.375rem !important;
}
.rounded-0 {
  border-radius: 0 !important;
}
.rounded-1 {
  border-radius: 0.25rem !important;
}
.rounded-2 {
  border-radius: 0.375rem !important;
}
.rounded-3 {
  border-radius: 0.5rem !important;
}
.rounded-circle {
  border-radius: 50% !important;
}
.rounded-pill {
  border-radius: 50rem !important;
}
.rounded-top {
  border-top-left-radius: 0.375rem !important;
  border-top-right-radius: 0.375rem !important;
}
.rounded-top-0 {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
.rounded-end {
  border-top-right-radius: 0.375rem !important;
  border-bottom-right-radius: 0.375rem !important;
}
.rounded-end-0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.rounded-bottom {
  border-bottom-right-radius: 0.375rem !important;
  border-bottom-left-radius: 0.375rem !important;
}
.rounded-bottom-0 {
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.rounded-start {
  border-bottom-left-radius: 0.375rem !important;
  border-top-left-radius: 0.375rem !important;
}
.rounded-start-0 {
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
}
.bg-faded-primary {
  background-color: rgba(99, 102, 241, 0.12) !important;
}
.bg-faded-success {
  background-color: rgba(34, 197, 94, 0.12) !important;
}
.bg-faded-info {
  background-color: rgba(76, 130, 247, 0.12) !important;
}
.bg-faded-warning {
  background-color: rgba(255, 186, 8, 0.12) !important;
}
.bg-faded-danger {
  background-color: rgba(239, 68, 68, 0.12) !important;
}
.zindex-1 {
  z-index: 1 !important;
}
.zindex-2 {
  z-index: 2 !important;
}
.zindex-3 {
  z-index: 3 !important;
}
.zindex-4 {
  z-index: 4 !important;
}
.zindex-5 {
  z-index: 5 !important;
}
@media (min-width: 500px) {
  .float-sm-start {
    float: left !important;
  }
  .float-sm-end {
    float: right !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
  .d-sm-none {
    display: none !important;
  }
  .border-sm {
    border: 1px solid #e2e5f1 !important;
  }
  .border-sm-0 {
    border: 0 !important;
  }
  .border-top-sm {
    border-top: 1px solid #e2e5f1 !important;
  }
  .border-top-sm-0 {
    border-top: 0 !important;
  }
  .border-end-sm {
    border-right: 1px solid #e2e5f1 !important;
  }
  .border-end-sm-0 {
    border-right: 0 !important;
  }
  .border-bottom-sm {
    border-bottom: 1px solid #e2e5f1 !important;
  }
  .border-bottom-sm-0 {
    border-bottom: 0 !important;
  }
  .border-start-sm {
    border-left: 1px solid #e2e5f1 !important;
  }
  .border-start-sm-0 {
    border-left: 0 !important;
  }
  .w-sm-25 {
    width: 25% !important;
  }
  .w-sm-50 {
    width: 50% !important;
  }
  .w-sm-75 {
    width: 75% !important;
  }
  .w-sm-100 {
    width: 100% !important;
  }
  .w-sm-auto {
    width: auto !important;
  }
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .justify-content-sm-start {
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    justify-content: center !important;
  }
  .justify-content-sm-between {
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    justify-content: space-around !important;
  }
  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-sm-start {
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    align-items: center !important;
  }
  .align-items-sm-baseline {
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    align-items: stretch !important;
  }
  .m-sm-0 {
    margin: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem !important;
  }
  .m-sm-2 {
    margin: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 1rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 3rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-sm-0 {
    margin-top: 0 !important;
  }
  .mt-sm-1 {
    margin-top: 0.25rem !important;
  }
  .mt-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mt-sm-3 {
    margin-top: 1rem !important;
  }
  .mt-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mt-sm-5 {
    margin-top: 3rem !important;
  }
  .mt-sm-auto {
    margin-top: auto !important;
  }
  .me-sm-0 {
    margin-right: 0 !important;
  }
  .me-sm-1 {
    margin-right: 0.25rem !important;
  }
  .me-sm-2 {
    margin-right: 0.5rem !important;
  }
  .me-sm-3 {
    margin-right: 1rem !important;
  }
  .me-sm-4 {
    margin-right: 1.5rem !important;
  }
  .me-sm-5 {
    margin-right: 3rem !important;
  }
  .me-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-0 {
    margin-bottom: 0 !important;
  }
  .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-sm-3 {
    margin-bottom: 1rem !important;
  }
  .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }
  .mb-sm-auto {
    margin-bottom: auto !important;
  }
  .ms-sm-0 {
    margin-left: 0 !important;
  }
  .ms-sm-1 {
    margin-left: 0.25rem !important;
  }
  .ms-sm-2 {
    margin-left: 0.5rem !important;
  }
  .ms-sm-3 {
    margin-left: 1rem !important;
  }
  .ms-sm-4 {
    margin-left: 1.5rem !important;
  }
  .ms-sm-5 {
    margin-left: 3rem !important;
  }
  .ms-sm-auto {
    margin-left: auto !important;
  }
  .m-sm-n1 {
    margin: -0.25rem !important;
  }
  .m-sm-n2 {
    margin: -0.5rem !important;
  }
  .m-sm-n3 {
    margin: -1rem !important;
  }
  .m-sm-n4 {
    margin: -1.5rem !important;
  }
  .m-sm-n5 {
    margin: -3rem !important;
  }
  .mx-sm-n1 {
    margin-right: -0.25rem !important;
    margin-left: -0.25rem !important;
  }
  .mx-sm-n2 {
    margin-right: -0.5rem !important;
    margin-left: -0.5rem !important;
  }
  .mx-sm-n3 {
    margin-right: -1rem !important;
    margin-left: -1rem !important;
  }
  .mx-sm-n4 {
    margin-right: -1.5rem !important;
    margin-left: -1.5rem !important;
  }
  .mx-sm-n5 {
    margin-right: -3rem !important;
    margin-left: -3rem !important;
  }
  .my-sm-n1 {
    margin-top: -0.25rem !important;
    margin-bottom: -0.25rem !important;
  }
  .my-sm-n2 {
    margin-top: -0.5rem !important;
    margin-bottom: -0.5rem !important;
  }
  .my-sm-n3 {
    margin-top: -1rem !important;
    margin-bottom: -1rem !important;
  }
  .my-sm-n4 {
    margin-top: -1.5rem !important;
    margin-bottom: -1.5rem !important;
  }
  .my-sm-n5 {
    margin-top: -3rem !important;
    margin-bottom: -3rem !important;
  }
  .mt-sm-n1 {
    margin-top: -0.25rem !important;
  }
  .mt-sm-n2 {
    margin-top: -0.5rem !important;
  }
  .mt-sm-n3 {
    margin-top: -1rem !important;
  }
  .mt-sm-n4 {
    margin-top: -1.5rem !important;
  }
  .mt-sm-n5 {
    margin-top: -3rem !important;
  }
  .me-sm-n1 {
    margin-right: -0.25rem !important;
  }
  .me-sm-n2 {
    margin-right: -0.5rem !important;
  }
  .me-sm-n3 {
    margin-right: -1rem !important;
  }
  .me-sm-n4 {
    margin-right: -1.5rem !important;
  }
  .me-sm-n5 {
    margin-right: -3rem !important;
  }
  .mb-sm-n1 {
    margin-bottom: -0.25rem !important;
  }
  .mb-sm-n2 {
    margin-bottom: -0.5rem !important;
  }
  .mb-sm-n3 {
    margin-bottom: -1rem !important;
  }
  .mb-sm-n4 {
    margin-bottom: -1.5rem !important;
  }
  .mb-sm-n5 {
    margin-bottom: -3rem !important;
  }
  .ms-sm-n1 {
    margin-left: -0.25rem !important;
  }
  .ms-sm-n2 {
    margin-left: -0.5rem !important;
  }
  .ms-sm-n3 {
    margin-left: -1rem !important;
  }
  .ms-sm-n4 {
    margin-left: -1.5rem !important;
  }
  .ms-sm-n5 {
    margin-left: -3rem !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .p-sm-1 {
    padding: 0.25rem !important;
  }
  .p-sm-2 {
    padding: 0.5rem !important;
  }
  .p-sm-3 {
    padding: 1rem !important;
  }
  .p-sm-4 {
    padding: 1.5rem !important;
  }
  .p-sm-5 {
    padding: 3rem !important;
  }
  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-sm-0 {
    padding-top: 0 !important;
  }
  .pt-sm-1 {
    padding-top: 0.25rem !important;
  }
  .pt-sm-2 {
    padding-top: 0.5rem !important;
  }
  .pt-sm-3 {
    padding-top: 1rem !important;
  }
  .pt-sm-4 {
    padding-top: 1.5rem !important;
  }
  .pt-sm-5 {
    padding-top: 3rem !important;
  }
  .pe-sm-0 {
    padding-right: 0 !important;
  }
  .pe-sm-1 {
    padding-right: 0.25rem !important;
  }
  .pe-sm-2 {
    padding-right: 0.5rem !important;
  }
  .pe-sm-3 {
    padding-right: 1rem !important;
  }
  .pe-sm-4 {
    padding-right: 1.5rem !important;
  }
  .pe-sm-5 {
    padding-right: 3rem !important;
  }
  .pb-sm-0 {
    padding-bottom: 0 !important;
  }
  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }
  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }
  .ps-sm-0 {
    padding-left: 0 !important;
  }
  .ps-sm-1 {
    padding-left: 0.25rem !important;
  }
  .ps-sm-2 {
    padding-left: 0.5rem !important;
  }
  .ps-sm-3 {
    padding-left: 1rem !important;
  }
  .ps-sm-4 {
    padding-left: 1.5rem !important;
  }
  .ps-sm-5 {
    padding-left: 3rem !important;
  }
  .text-sm-start {
    text-align: left !important;
  }
  .text-sm-end {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .float-md-start {
    float: left !important;
  }
  .float-md-end {
    float: right !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
  .d-md-none {
    display: none !important;
  }
  .border-md {
    border: 1px solid #e2e5f1 !important;
  }
  .border-md-0 {
    border: 0 !important;
  }
  .border-top-md {
    border-top: 1px solid #e2e5f1 !important;
  }
  .border-top-md-0 {
    border-top: 0 !important;
  }
  .border-end-md {
    border-right: 1px solid #e2e5f1 !important;
  }
  .border-end-md-0 {
    border-right: 0 !important;
  }
  .border-bottom-md {
    border-bottom: 1px solid #e2e5f1 !important;
  }
  .border-bottom-md-0 {
    border-bottom: 0 !important;
  }
  .border-start-md {
    border-left: 1px solid #e2e5f1 !important;
  }
  .border-start-md-0 {
    border-left: 0 !important;
  }
  .w-md-25 {
    width: 25% !important;
  }
  .w-md-50 {
    width: 50% !important;
  }
  .w-md-75 {
    width: 75% !important;
  }
  .w-md-100 {
    width: 100% !important;
  }
  .w-md-auto {
    width: auto !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    justify-content: center !important;
  }
  .justify-content-md-between {
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    justify-content: space-around !important;
  }
  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-md-start {
    align-items: flex-start !important;
  }
  .align-items-md-end {
    align-items: flex-end !important;
  }
  .align-items-md-center {
    align-items: center !important;
  }
  .align-items-md-baseline {
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    align-items: stretch !important;
  }
  .m-md-0 {
    margin: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem !important;
  }
  .m-md-2 {
    margin: 0.5rem !important;
  }
  .m-md-3 {
    margin: 1rem !important;
  }
  .m-md-4 {
    margin: 1.5rem !important;
  }
  .m-md-5 {
    margin: 3rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-md-0 {
    margin-top: 0 !important;
  }
  .mt-md-1 {
    margin-top: 0.25rem !important;
  }
  .mt-md-2 {
    margin-top: 0.5rem !important;
  }
  .mt-md-3 {
    margin-top: 1rem !important;
  }
  .mt-md-4 {
    margin-top: 1.5rem !important;
  }
  .mt-md-5 {
    margin-top: 3rem !important;
  }
  .mt-md-auto {
    margin-top: auto !important;
  }
  .me-md-0 {
    margin-right: 0 !important;
  }
  .me-md-1 {
    margin-right: 0.25rem !important;
  }
  .me-md-2 {
    margin-right: 0.5rem !important;
  }
  .me-md-3 {
    margin-right: 1rem !important;
  }
  .me-md-4 {
    margin-right: 1.5rem !important;
  }
  .me-md-5 {
    margin-right: 3rem !important;
  }
  .me-md-auto {
    margin-right: auto !important;
  }
  .mb-md-0 {
    margin-bottom: 0 !important;
  }
  .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-md-3 {
    margin-bottom: 1rem !important;
  }
  .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-md-5 {
    margin-bottom: 3rem !important;
  }
  .mb-md-auto {
    margin-bottom: auto !important;
  }
  .ms-md-0 {
    margin-left: 0 !important;
  }
  .ms-md-1 {
    margin-left: 0.25rem !important;
  }
  .ms-md-2 {
    margin-left: 0.5rem !important;
  }
  .ms-md-3 {
    margin-left: 1rem !important;
  }
  .ms-md-4 {
    margin-left: 1.5rem !important;
  }
  .ms-md-5 {
    margin-left: 3rem !important;
  }
  .ms-md-auto {
    margin-left: auto !important;
  }
  .m-md-n1 {
    margin: -0.25rem !important;
  }
  .m-md-n2 {
    margin: -0.5rem !important;
  }
  .m-md-n3 {
    margin: -1rem !important;
  }
  .m-md-n4 {
    margin: -1.5rem !important;
  }
  .m-md-n5 {
    margin: -3rem !important;
  }
  .mx-md-n1 {
    margin-right: -0.25rem !important;
    margin-left: -0.25rem !important;
  }
  .mx-md-n2 {
    margin-right: -0.5rem !important;
    margin-left: -0.5rem !important;
  }
  .mx-md-n3 {
    margin-right: -1rem !important;
    margin-left: -1rem !important;
  }
  .mx-md-n4 {
    margin-right: -1.5rem !important;
    margin-left: -1.5rem !important;
  }
  .mx-md-n5 {
    margin-right: -3rem !important;
    margin-left: -3rem !important;
  }
  .my-md-n1 {
    margin-top: -0.25rem !important;
    margin-bottom: -0.25rem !important;
  }
  .my-md-n2 {
    margin-top: -0.5rem !important;
    margin-bottom: -0.5rem !important;
  }
  .my-md-n3 {
    margin-top: -1rem !important;
    margin-bottom: -1rem !important;
  }
  .my-md-n4 {
    margin-top: -1.5rem !important;
    margin-bottom: -1.5rem !important;
  }
  .my-md-n5 {
    margin-top: -3rem !important;
    margin-bottom: -3rem !important;
  }
  .mt-md-n1 {
    margin-top: -0.25rem !important;
  }
  .mt-md-n2 {
    margin-top: -0.5rem !important;
  }
  .mt-md-n3 {
    margin-top: -1rem !important;
  }
  .mt-md-n4 {
    margin-top: -1.5rem !important;
  }
  .mt-md-n5 {
    margin-top: -3rem !important;
  }
  .me-md-n1 {
    margin-right: -0.25rem !important;
  }
  .me-md-n2 {
    margin-right: -0.5rem !important;
  }
  .me-md-n3 {
    margin-right: -1rem !important;
  }
  .me-md-n4 {
    margin-right: -1.5rem !important;
  }
  .me-md-n5 {
    margin-right: -3rem !important;
  }
  .mb-md-n1 {
    margin-bottom: -0.25rem !important;
  }
  .mb-md-n2 {
    margin-bottom: -0.5rem !important;
  }
  .mb-md-n3 {
    margin-bottom: -1rem !important;
  }
  .mb-md-n4 {
    margin-bottom: -1.5rem !important;
  }
  .mb-md-n5 {
    margin-bottom: -3rem !important;
  }
  .ms-md-n1 {
    margin-left: -0.25rem !important;
  }
  .ms-md-n2 {
    margin-left: -0.5rem !important;
  }
  .ms-md-n3 {
    margin-left: -1rem !important;
  }
  .ms-md-n4 {
    margin-left: -1.5rem !important;
  }
  .ms-md-n5 {
    margin-left: -3rem !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .p-md-1 {
    padding: 0.25rem !important;
  }
  .p-md-2 {
    padding: 0.5rem !important;
  }
  .p-md-3 {
    padding: 1rem !important;
  }
  .p-md-4 {
    padding: 1.5rem !important;
  }
  .p-md-5 {
    padding: 3rem !important;
  }
  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-md-0 {
    padding-top: 0 !important;
  }
  .pt-md-1 {
    padding-top: 0.25rem !important;
  }
  .pt-md-2 {
    padding-top: 0.5rem !important;
  }
  .pt-md-3 {
    padding-top: 1rem !important;
  }
  .pt-md-4 {
    padding-top: 1.5rem !important;
  }
  .pt-md-5 {
    padding-top: 3rem !important;
  }
  .pe-md-0 {
    padding-right: 0 !important;
  }
  .pe-md-1 {
    padding-right: 0.25rem !important;
  }
  .pe-md-2 {
    padding-right: 0.5rem !important;
  }
  .pe-md-3 {
    padding-right: 1rem !important;
  }
  .pe-md-4 {
    padding-right: 1.5rem !important;
  }
  .pe-md-5 {
    padding-right: 3rem !important;
  }
  .pb-md-0 {
    padding-bottom: 0 !important;
  }
  .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-md-3 {
    padding-bottom: 1rem !important;
  }
  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-md-5 {
    padding-bottom: 3rem !important;
  }
  .ps-md-0 {
    padding-left: 0 !important;
  }
  .ps-md-1 {
    padding-left: 0.25rem !important;
  }
  .ps-md-2 {
    padding-left: 0.5rem !important;
  }
  .ps-md-3 {
    padding-left: 1rem !important;
  }
  .ps-md-4 {
    padding-left: 1.5rem !important;
  }
  .ps-md-5 {
    padding-left: 3rem !important;
  }
  .text-md-start {
    text-align: left !important;
  }
  .text-md-end {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .float-lg-start {
    float: left !important;
  }
  .float-lg-end {
    float: right !important;
  }
  .float-lg-none {
    float: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
  .d-lg-none {
    display: none !important;
  }
  .border-lg {
    border: 1px solid #e2e5f1 !important;
  }
  .border-lg-0 {
    border: 0 !important;
  }
  .border-top-lg {
    border-top: 1px solid #e2e5f1 !important;
  }
  .border-top-lg-0 {
    border-top: 0 !important;
  }
  .border-end-lg {
    border-right: 1px solid #e2e5f1 !important;
  }
  .border-end-lg-0 {
    border-right: 0 !important;
  }
  .border-bottom-lg {
    border-bottom: 1px solid #e2e5f1 !important;
  }
  .border-bottom-lg-0 {
    border-bottom: 0 !important;
  }
  .border-start-lg {
    border-left: 1px solid #e2e5f1 !important;
  }
  .border-start-lg-0 {
    border-left: 0 !important;
  }
  .w-lg-25 {
    width: 25% !important;
  }
  .w-lg-50 {
    width: 50% !important;
  }
  .w-lg-75 {
    width: 75% !important;
  }
  .w-lg-100 {
    width: 100% !important;
  }
  .w-lg-auto {
    width: auto !important;
  }
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-lg-start {
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    justify-content: center !important;
  }
  .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    justify-content: space-around !important;
  }
  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-lg-start {
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    align-items: center !important;
  }
  .align-items-lg-baseline {
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    align-items: stretch !important;
  }
  .m-lg-0 {
    margin: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem !important;
  }
  .m-lg-2 {
    margin: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 1rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 3rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-lg-0 {
    margin-top: 0 !important;
  }
  .mt-lg-1 {
    margin-top: 0.25rem !important;
  }
  .mt-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mt-lg-3 {
    margin-top: 1rem !important;
  }
  .mt-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mt-lg-5 {
    margin-top: 3rem !important;
  }
  .mt-lg-auto {
    margin-top: auto !important;
  }
  .me-lg-0 {
    margin-right: 0 !important;
  }
  .me-lg-1 {
    margin-right: 0.25rem !important;
  }
  .me-lg-2 {
    margin-right: 0.5rem !important;
  }
  .me-lg-3 {
    margin-right: 1rem !important;
  }
  .me-lg-4 {
    margin-right: 1.5rem !important;
  }
  .me-lg-5 {
    margin-right: 3rem !important;
  }
  .me-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-0 {
    margin-bottom: 0 !important;
  }
  .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-lg-3 {
    margin-bottom: 1rem !important;
  }
  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }
  .mb-lg-auto {
    margin-bottom: auto !important;
  }
  .ms-lg-0 {
    margin-left: 0 !important;
  }
  .ms-lg-1 {
    margin-left: 0.25rem !important;
  }
  .ms-lg-2 {
    margin-left: 0.5rem !important;
  }
  .ms-lg-3 {
    margin-left: 1rem !important;
  }
  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }
  .ms-lg-5 {
    margin-left: 3rem !important;
  }
  .ms-lg-auto {
    margin-left: auto !important;
  }
  .m-lg-n1 {
    margin: -0.25rem !important;
  }
  .m-lg-n2 {
    margin: -0.5rem !important;
  }
  .m-lg-n3 {
    margin: -1rem !important;
  }
  .m-lg-n4 {
    margin: -1.5rem !important;
  }
  .m-lg-n5 {
    margin: -3rem !important;
  }
  .mx-lg-n1 {
    margin-right: -0.25rem !important;
    margin-left: -0.25rem !important;
  }
  .mx-lg-n2 {
    margin-right: -0.5rem !important;
    margin-left: -0.5rem !important;
  }
  .mx-lg-n3 {
    margin-right: -1rem !important;
    margin-left: -1rem !important;
  }
  .mx-lg-n4 {
    margin-right: -1.5rem !important;
    margin-left: -1.5rem !important;
  }
  .mx-lg-n5 {
    margin-right: -3rem !important;
    margin-left: -3rem !important;
  }
  .my-lg-n1 {
    margin-top: -0.25rem !important;
    margin-bottom: -0.25rem !important;
  }
  .my-lg-n2 {
    margin-top: -0.5rem !important;
    margin-bottom: -0.5rem !important;
  }
  .my-lg-n3 {
    margin-top: -1rem !important;
    margin-bottom: -1rem !important;
  }
  .my-lg-n4 {
    margin-top: -1.5rem !important;
    margin-bottom: -1.5rem !important;
  }
  .my-lg-n5 {
    margin-top: -3rem !important;
    margin-bottom: -3rem !important;
  }
  .mt-lg-n1 {
    margin-top: -0.25rem !important;
  }
  .mt-lg-n2 {
    margin-top: -0.5rem !important;
  }
  .mt-lg-n3 {
    margin-top: -1rem !important;
  }
  .mt-lg-n4 {
    margin-top: -1.5rem !important;
  }
  .mt-lg-n5 {
    margin-top: -3rem !important;
  }
  .me-lg-n1 {
    margin-right: -0.25rem !important;
  }
  .me-lg-n2 {
    margin-right: -0.5rem !important;
  }
  .me-lg-n3 {
    margin-right: -1rem !important;
  }
  .me-lg-n4 {
    margin-right: -1.5rem !important;
  }
  .me-lg-n5 {
    margin-right: -3rem !important;
  }
  .mb-lg-n1 {
    margin-bottom: -0.25rem !important;
  }
  .mb-lg-n2 {
    margin-bottom: -0.5rem !important;
  }
  .mb-lg-n3 {
    margin-bottom: -1rem !important;
  }
  .mb-lg-n4 {
    margin-bottom: -1.5rem !important;
  }
  .mb-lg-n5 {
    margin-bottom: -3rem !important;
  }
  .ms-lg-n1 {
    margin-left: -0.25rem !important;
  }
  .ms-lg-n2 {
    margin-left: -0.5rem !important;
  }
  .ms-lg-n3 {
    margin-left: -1rem !important;
  }
  .ms-lg-n4 {
    margin-left: -1.5rem !important;
  }
  .ms-lg-n5 {
    margin-left: -3rem !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem !important;
  }
  .p-lg-2 {
    padding: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 1rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 3rem !important;
  }
  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-lg-0 {
    padding-top: 0 !important;
  }
  .pt-lg-1 {
    padding-top: 0.25rem !important;
  }
  .pt-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pt-lg-3 {
    padding-top: 1rem !important;
  }
  .pt-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pt-lg-5 {
    padding-top: 3rem !important;
  }
  .pe-lg-0 {
    padding-right: 0 !important;
  }
  .pe-lg-1 {
    padding-right: 0.25rem !important;
  }
  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pe-lg-3 {
    padding-right: 1rem !important;
  }
  .pe-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pe-lg-5 {
    padding-right: 3rem !important;
  }
  .pb-lg-0 {
    padding-bottom: 0 !important;
  }
  .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-lg-3 {
    padding-bottom: 1rem !important;
  }
  .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }
  .ps-lg-0 {
    padding-left: 0 !important;
  }
  .ps-lg-1 {
    padding-left: 0.25rem !important;
  }
  .ps-lg-2 {
    padding-left: 0.5rem !important;
  }
  .ps-lg-3 {
    padding-left: 1rem !important;
  }
  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }
  .ps-lg-5 {
    padding-left: 3rem !important;
  }
  .text-lg-start {
    text-align: left !important;
  }
  .text-lg-end {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-start {
    float: left !important;
  }
  .float-xl-end {
    float: right !important;
  }
  .float-xl-none {
    float: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-grid {
    display: grid !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
  .d-xl-none {
    display: none !important;
  }
  .border-xl {
    border: 1px solid #e2e5f1 !important;
  }
  .border-xl-0 {
    border: 0 !important;
  }
  .border-top-xl {
    border-top: 1px solid #e2e5f1 !important;
  }
  .border-top-xl-0 {
    border-top: 0 !important;
  }
  .border-end-xl {
    border-right: 1px solid #e2e5f1 !important;
  }
  .border-end-xl-0 {
    border-right: 0 !important;
  }
  .border-bottom-xl {
    border-bottom: 1px solid #e2e5f1 !important;
  }
  .border-bottom-xl-0 {
    border-bottom: 0 !important;
  }
  .border-start-xl {
    border-left: 1px solid #e2e5f1 !important;
  }
  .border-start-xl-0 {
    border-left: 0 !important;
  }
  .w-xl-25 {
    width: 25% !important;
  }
  .w-xl-50 {
    width: 50% !important;
  }
  .w-xl-75 {
    width: 75% !important;
  }
  .w-xl-100 {
    width: 100% !important;
  }
  .w-xl-auto {
    width: auto !important;
  }
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .gap-xl-0 {
    gap: 0 !important;
  }
  .gap-xl-1 {
    gap: 0.25rem !important;
  }
  .gap-xl-2 {
    gap: 0.5rem !important;
  }
  .gap-xl-3 {
    gap: 1rem !important;
  }
  .gap-xl-4 {
    gap: 1.5rem !important;
  }
  .gap-xl-5 {
    gap: 3rem !important;
  }
  .justify-content-xl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    justify-content: center !important;
  }
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    justify-content: space-around !important;
  }
  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xl-start {
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    align-items: center !important;
  }
  .align-items-xl-baseline {
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    align-items: stretch !important;
  }
  .m-xl-0 {
    margin: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem !important;
  }
  .m-xl-2 {
    margin: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 1rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 3rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xl-0 {
    margin-top: 0 !important;
  }
  .mt-xl-1 {
    margin-top: 0.25rem !important;
  }
  .mt-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mt-xl-3 {
    margin-top: 1rem !important;
  }
  .mt-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mt-xl-5 {
    margin-top: 3rem !important;
  }
  .mt-xl-auto {
    margin-top: auto !important;
  }
  .me-xl-0 {
    margin-right: 0 !important;
  }
  .me-xl-1 {
    margin-right: 0.25rem !important;
  }
  .me-xl-2 {
    margin-right: 0.5rem !important;
  }
  .me-xl-3 {
    margin-right: 1rem !important;
  }
  .me-xl-4 {
    margin-right: 1.5rem !important;
  }
  .me-xl-5 {
    margin-right: 3rem !important;
  }
  .me-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-xl-3 {
    margin-bottom: 1rem !important;
  }
  .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-xl-5 {
    margin-bottom: 3rem !important;
  }
  .mb-xl-auto {
    margin-bottom: auto !important;
  }
  .ms-xl-0 {
    margin-left: 0 !important;
  }
  .ms-xl-1 {
    margin-left: 0.25rem !important;
  }
  .ms-xl-2 {
    margin-left: 0.5rem !important;
  }
  .ms-xl-3 {
    margin-left: 1rem !important;
  }
  .ms-xl-4 {
    margin-left: 1.5rem !important;
  }
  .ms-xl-5 {
    margin-left: 3rem !important;
  }
  .ms-xl-auto {
    margin-left: auto !important;
  }
  .m-xl-n1 {
    margin: -0.25rem !important;
  }
  .m-xl-n2 {
    margin: -0.5rem !important;
  }
  .m-xl-n3 {
    margin: -1rem !important;
  }
  .m-xl-n4 {
    margin: -1.5rem !important;
  }
  .m-xl-n5 {
    margin: -3rem !important;
  }
  .mx-xl-n1 {
    margin-right: -0.25rem !important;
    margin-left: -0.25rem !important;
  }
  .mx-xl-n2 {
    margin-right: -0.5rem !important;
    margin-left: -0.5rem !important;
  }
  .mx-xl-n3 {
    margin-right: -1rem !important;
    margin-left: -1rem !important;
  }
  .mx-xl-n4 {
    margin-right: -1.5rem !important;
    margin-left: -1.5rem !important;
  }
  .mx-xl-n5 {
    margin-right: -3rem !important;
    margin-left: -3rem !important;
  }
  .my-xl-n1 {
    margin-top: -0.25rem !important;
    margin-bottom: -0.25rem !important;
  }
  .my-xl-n2 {
    margin-top: -0.5rem !important;
    margin-bottom: -0.5rem !important;
  }
  .my-xl-n3 {
    margin-top: -1rem !important;
    margin-bottom: -1rem !important;
  }
  .my-xl-n4 {
    margin-top: -1.5rem !important;
    margin-bottom: -1.5rem !important;
  }
  .my-xl-n5 {
    margin-top: -3rem !important;
    margin-bottom: -3rem !important;
  }
  .mt-xl-n1 {
    margin-top: -0.25rem !important;
  }
  .mt-xl-n2 {
    margin-top: -0.5rem !important;
  }
  .mt-xl-n3 {
    margin-top: -1rem !important;
  }
  .mt-xl-n4 {
    margin-top: -1.5rem !important;
  }
  .mt-xl-n5 {
    margin-top: -3rem !important;
  }
  .me-xl-n1 {
    margin-right: -0.25rem !important;
  }
  .me-xl-n2 {
    margin-right: -0.5rem !important;
  }
  .me-xl-n3 {
    margin-right: -1rem !important;
  }
  .me-xl-n4 {
    margin-right: -1.5rem !important;
  }
  .me-xl-n5 {
    margin-right: -3rem !important;
  }
  .mb-xl-n1 {
    margin-bottom: -0.25rem !important;
  }
  .mb-xl-n2 {
    margin-bottom: -0.5rem !important;
  }
  .mb-xl-n3 {
    margin-bottom: -1rem !important;
  }
  .mb-xl-n4 {
    margin-bottom: -1.5rem !important;
  }
  .mb-xl-n5 {
    margin-bottom: -3rem !important;
  }
  .ms-xl-n1 {
    margin-left: -0.25rem !important;
  }
  .ms-xl-n2 {
    margin-left: -0.5rem !important;
  }
  .ms-xl-n3 {
    margin-left: -1rem !important;
  }
  .ms-xl-n4 {
    margin-left: -1.5rem !important;
  }
  .ms-xl-n5 {
    margin-left: -3rem !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem !important;
  }
  .p-xl-2 {
    padding: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 1rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 3rem !important;
  }
  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-xl-0 {
    padding-top: 0 !important;
  }
  .pt-xl-1 {
    padding-top: 0.25rem !important;
  }
  .pt-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pt-xl-3 {
    padding-top: 1rem !important;
  }
  .pt-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pt-xl-5 {
    padding-top: 3rem !important;
  }
  .pe-xl-0 {
    padding-right: 0 !important;
  }
  .pe-xl-1 {
    padding-right: 0.25rem !important;
  }
  .pe-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pe-xl-3 {
    padding-right: 1rem !important;
  }
  .pe-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pe-xl-5 {
    padding-right: 3rem !important;
  }
  .pb-xl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-xl-3 {
    padding-bottom: 1rem !important;
  }
  .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-xl-5 {
    padding-bottom: 3rem !important;
  }
  .ps-xl-0 {
    padding-left: 0 !important;
  }
  .ps-xl-1 {
    padding-left: 0.25rem !important;
  }
  .ps-xl-2 {
    padding-left: 0.5rem !important;
  }
  .ps-xl-3 {
    padding-left: 1rem !important;
  }
  .ps-xl-4 {
    padding-left: 1.5rem !important;
  }
  .ps-xl-5 {
    padding-left: 3rem !important;
  }
  .text-xl-start {
    text-align: left !important;
  }
  .text-xl-end {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1400px) {
  .float-xxl-start {
    float: left !important;
  }
  .float-xxl-end {
    float: right !important;
  }
  .float-xxl-none {
    float: none !important;
  }
  .d-xxl-inline {
    display: inline !important;
  }
  .d-xxl-inline-block {
    display: inline-block !important;
  }
  .d-xxl-block {
    display: block !important;
  }
  .d-xxl-grid {
    display: grid !important;
  }
  .d-xxl-table {
    display: table !important;
  }
  .d-xxl-table-row {
    display: table-row !important;
  }
  .d-xxl-table-cell {
    display: table-cell !important;
  }
  .d-xxl-flex {
    display: flex !important;
  }
  .d-xxl-inline-flex {
    display: inline-flex !important;
  }
  .d-xxl-none {
    display: none !important;
  }
  .border-xxl {
    border: 1px solid #e2e5f1 !important;
  }
  .border-xxl-0 {
    border: 0 !important;
  }
  .border-top-xxl {
    border-top: 1px solid #e2e5f1 !important;
  }
  .border-top-xxl-0 {
    border-top: 0 !important;
  }
  .border-end-xxl {
    border-right: 1px solid #e2e5f1 !important;
  }
  .border-end-xxl-0 {
    border-right: 0 !important;
  }
  .border-bottom-xxl {
    border-bottom: 1px solid #e2e5f1 !important;
  }
  .border-bottom-xxl-0 {
    border-bottom: 0 !important;
  }
  .border-start-xxl {
    border-left: 1px solid #e2e5f1 !important;
  }
  .border-start-xxl-0 {
    border-left: 0 !important;
  }
  .w-xxl-25 {
    width: 25% !important;
  }
  .w-xxl-50 {
    width: 50% !important;
  }
  .w-xxl-75 {
    width: 75% !important;
  }
  .w-xxl-100 {
    width: 100% !important;
  }
  .w-xxl-auto {
    width: auto !important;
  }
  .flex-xxl-row {
    flex-direction: row !important;
  }
  .flex-xxl-column {
    flex-direction: column !important;
  }
  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }
  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xxl-center {
    justify-content: center !important;
  }
  .justify-content-xxl-between {
    justify-content: space-between !important;
  }
  .justify-content-xxl-around {
    justify-content: space-around !important;
  }
  .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xxl-start {
    align-items: flex-start !important;
  }
  .align-items-xxl-end {
    align-items: flex-end !important;
  }
  .align-items-xxl-center {
    align-items: center !important;
  }
  .align-items-xxl-baseline {
    align-items: baseline !important;
  }
  .align-items-xxl-stretch {
    align-items: stretch !important;
  }
  .m-xxl-0 {
    margin: 0 !important;
  }
  .m-xxl-1 {
    margin: 0.25rem !important;
  }
  .m-xxl-2 {
    margin: 0.5rem !important;
  }
  .m-xxl-3 {
    margin: 1rem !important;
  }
  .m-xxl-4 {
    margin: 1.5rem !important;
  }
  .m-xxl-5 {
    margin: 3rem !important;
  }
  .m-xxl-auto {
    margin: auto !important;
  }
  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xxl-0 {
    margin-top: 0 !important;
  }
  .mt-xxl-1 {
    margin-top: 0.25rem !important;
  }
  .mt-xxl-2 {
    margin-top: 0.5rem !important;
  }
  .mt-xxl-3 {
    margin-top: 1rem !important;
  }
  .mt-xxl-4 {
    margin-top: 1.5rem !important;
  }
  .mt-xxl-5 {
    margin-top: 3rem !important;
  }
  .mt-xxl-auto {
    margin-top: auto !important;
  }
  .me-xxl-0 {
    margin-right: 0 !important;
  }
  .me-xxl-1 {
    margin-right: 0.25rem !important;
  }
  .me-xxl-2 {
    margin-right: 0.5rem !important;
  }
  .me-xxl-3 {
    margin-right: 1rem !important;
  }
  .me-xxl-4 {
    margin-right: 1.5rem !important;
  }
  .me-xxl-5 {
    margin-right: 3rem !important;
  }
  .me-xxl-auto {
    margin-right: auto !important;
  }
  .mb-xxl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-xxl-3 {
    margin-bottom: 1rem !important;
  }
  .mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-xxl-5 {
    margin-bottom: 3rem !important;
  }
  .mb-xxl-auto {
    margin-bottom: auto !important;
  }
  .ms-xxl-0 {
    margin-left: 0 !important;
  }
  .ms-xxl-1 {
    margin-left: 0.25rem !important;
  }
  .ms-xxl-2 {
    margin-left: 0.5rem !important;
  }
  .ms-xxl-3 {
    margin-left: 1rem !important;
  }
  .ms-xxl-4 {
    margin-left: 1.5rem !important;
  }
  .ms-xxl-5 {
    margin-left: 3rem !important;
  }
  .ms-xxl-auto {
    margin-left: auto !important;
  }
  .m-xxl-n1 {
    margin: -0.25rem !important;
  }
  .m-xxl-n2 {
    margin: -0.5rem !important;
  }
  .m-xxl-n3 {
    margin: -1rem !important;
  }
  .m-xxl-n4 {
    margin: -1.5rem !important;
  }
  .m-xxl-n5 {
    margin: -3rem !important;
  }
  .mx-xxl-n1 {
    margin-right: -0.25rem !important;
    margin-left: -0.25rem !important;
  }
  .mx-xxl-n2 {
    margin-right: -0.5rem !important;
    margin-left: -0.5rem !important;
  }
  .mx-xxl-n3 {
    margin-right: -1rem !important;
    margin-left: -1rem !important;
  }
  .mx-xxl-n4 {
    margin-right: -1.5rem !important;
    margin-left: -1.5rem !important;
  }
  .mx-xxl-n5 {
    margin-right: -3rem !important;
    margin-left: -3rem !important;
  }
  .my-xxl-n1 {
    margin-top: -0.25rem !important;
    margin-bottom: -0.25rem !important;
  }
  .my-xxl-n2 {
    margin-top: -0.5rem !important;
    margin-bottom: -0.5rem !important;
  }
  .my-xxl-n3 {
    margin-top: -1rem !important;
    margin-bottom: -1rem !important;
  }
  .my-xxl-n4 {
    margin-top: -1.5rem !important;
    margin-bottom: -1.5rem !important;
  }
  .my-xxl-n5 {
    margin-top: -3rem !important;
    margin-bottom: -3rem !important;
  }
  .mt-xxl-n1 {
    margin-top: -0.25rem !important;
  }
  .mt-xxl-n2 {
    margin-top: -0.5rem !important;
  }
  .mt-xxl-n3 {
    margin-top: -1rem !important;
  }
  .mt-xxl-n4 {
    margin-top: -1.5rem !important;
  }
  .mt-xxl-n5 {
    margin-top: -3rem !important;
  }
  .me-xxl-n1 {
    margin-right: -0.25rem !important;
  }
  .me-xxl-n2 {
    margin-right: -0.5rem !important;
  }
  .me-xxl-n3 {
    margin-right: -1rem !important;
  }
  .me-xxl-n4 {
    margin-right: -1.5rem !important;
  }
  .me-xxl-n5 {
    margin-right: -3rem !important;
  }
  .mb-xxl-n1 {
    margin-bottom: -0.25rem !important;
  }
  .mb-xxl-n2 {
    margin-bottom: -0.5rem !important;
  }
  .mb-xxl-n3 {
    margin-bottom: -1rem !important;
  }
  .mb-xxl-n4 {
    margin-bottom: -1.5rem !important;
  }
  .mb-xxl-n5 {
    margin-bottom: -3rem !important;
  }
  .ms-xxl-n1 {
    margin-left: -0.25rem !important;
  }
  .ms-xxl-n2 {
    margin-left: -0.5rem !important;
  }
  .ms-xxl-n3 {
    margin-left: -1rem !important;
  }
  .ms-xxl-n4 {
    margin-left: -1.5rem !important;
  }
  .ms-xxl-n5 {
    margin-left: -3rem !important;
  }
  .p-xxl-0 {
    padding: 0 !important;
  }
  .p-xxl-1 {
    padding: 0.25rem !important;
  }
  .p-xxl-2 {
    padding: 0.5rem !important;
  }
  .p-xxl-3 {
    padding: 1rem !important;
  }
  .p-xxl-4 {
    padding: 1.5rem !important;
  }
  .p-xxl-5 {
    padding: 3rem !important;
  }
  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-xxl-0 {
    padding-top: 0 !important;
  }
  .pt-xxl-1 {
    padding-top: 0.25rem !important;
  }
  .pt-xxl-2 {
    padding-top: 0.5rem !important;
  }
  .pt-xxl-3 {
    padding-top: 1rem !important;
  }
  .pt-xxl-4 {
    padding-top: 1.5rem !important;
  }
  .pt-xxl-5 {
    padding-top: 3rem !important;
  }
  .pe-xxl-0 {
    padding-right: 0 !important;
  }
  .pe-xxl-1 {
    padding-right: 0.25rem !important;
  }
  .pe-xxl-2 {
    padding-right: 0.5rem !important;
  }
  .pe-xxl-3 {
    padding-right: 1rem !important;
  }
  .pe-xxl-4 {
    padding-right: 1.5rem !important;
  }
  .pe-xxl-5 {
    padding-right: 3rem !important;
  }
  .pb-xxl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-xxl-3 {
    padding-bottom: 1rem !important;
  }
  .pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-xxl-5 {
    padding-bottom: 3rem !important;
  }
  .ps-xxl-0 {
    padding-left: 0 !important;
  }
  .ps-xxl-1 {
    padding-left: 0.25rem !important;
  }
  .ps-xxl-2 {
    padding-left: 0.5rem !important;
  }
  .ps-xxl-3 {
    padding-left: 1rem !important;
  }
  .ps-xxl-4 {
    padding-left: 1.5rem !important;
  }
  .ps-xxl-5 {
    padding-left: 3rem !important;
  }
  .text-xxl-start {
    text-align: left !important;
  }
  .text-xxl-end {
    text-align: right !important;
  }
  .text-xxl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .fs-1 {
    font-size: 2.5rem !important;
  }
  .fs-2 {
    font-size: 2rem !important;
  }
  .fs-3 {
    font-size: 1.75rem !important;
  }
  .fs-4 {
    font-size: 1.5rem !important;
  }
}
html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,
html {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
.page-wrapper {
  flex: 1 0 auto;
}
a {
  transition: color 0.2s ease-in-out;
}
a:focus {
  outline: 0;
}
a[class*='bg-']:not(.btn),
a[class^='bg-']:not(.btn) {
  transition: background-color 0.25s ease;
}
figure,
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
svg {
  max-width: 100%;
}
::-moz-selection {
  background: rgba(99, 102, 241, 0.22);
}
::selection {
  background: rgba(99, 102, 241, 0.22);
}
::-moz-selection {
  background: rgba(99, 102, 241, 0.22);
}
b,
strong {
  font-weight: 800;
}
.small,
small {
  font-weight: inherit;
}
button:focus {
  outline: 0;
}
.fs-4,
.fs-5,
.fs-6,
.h4,
.h5,
.h6,
h4,
h5,
h6 {
  line-height: 1.4;
}
.h1 > a,
.h2 > a,
.h3 > a,
.h4 > a,
.h5 > a,
.h6 > a,
h1 > a,
h2 > a,
h3 > a,
h4 > a,
h5 > a,
h6 > a {
  color: #3e4265;
  text-decoration: none;
}
.h1 > a:hover,
.h2 > a:hover,
.h3 > a:hover,
.h4 > a:hover,
.h5 > a:hover,
.h6 > a:hover,
h1 > a:hover,
h2 > a:hover,
h3 > a:hover,
h4 > a:hover,
h5 > a:hover,
h6 > a:hover {
  color: #6366f1;
}
dt {
  color: #131022;
}
.form-select:focus {
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(99, 102, 241, 0.2);
}
.form-control:disabled,
.form-select:disabled {
  cursor: not-allowed;
  box-shadow: none !important;
}
.form-control:disabled,
.form-control[readonly] {
  box-shadow: none !important;
}
.form-control:disabled::-moz-placeholder,
.form-control[readonly]::-moz-placeholder {
  color: #9397ad;
}
.form-control:disabled::placeholder,
.form-control[readonly]::placeholder {
  color: #9397ad;
}
label {
  font-size: 0.875rem;
}
.form-floating > label {
  font-weight: 600;
}
.input-group-text .form-check-input {
  margin-top: 0;
}
.valid-tooltip {
  position: static;
  background-color: rgba(34, 197, 94, 0.12);
  color: #22c55e;
}
.invalid-tooltip {
  position: static;
  background-color: rgba(239, 68, 68, 0.12);
  color: #ef4444;
}
.is-invalid ~ .invalid-tooltip,
.is-valid ~ .valid-tooltip,
.was-validated :invalid ~ .invalid-tooltip,
.was-validated :valid ~ .valid-tooltip {
  display: table;
}
.is-valid:not(:required):not(.btn):focus,
.was-validated :valid:not(:required):not(.btn):focus {
  border-color: rgba(99, 102, 241, 0.35) !important;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(99, 102, 241, 0.2);
}
.was-validated .input-group .form-control:invalid,
.was-validated .input-group .form-control:valid {
  z-index: 4;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn:not([class^='btn-outline-']):not([class*=' btn-outline-']):not(
    .btn-secondary
  ):not(.btn-light):not(.btn-link) {
  color: #fff;
}
.btn.disabled,
.btn:disabled,
.btn:hover {
  box-shadow: none !important;
}
.btn-primary.active,
.btn-primary.show,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:hover {
  background-color: var(--primary-red-dark);
  border-color: var(--primary-red-dark);
  color: #fff;
}
.btn-secondary.active,
.btn-secondary.show,
.btn-secondary:active,
.btn-secondary:focus,
.btn-secondary:hover {
  background-color: #cfd8f6;
  border-color: #cfd8f6;
  color: #fff;
}
.btn-success.active,
.btn-success.show,
.btn-success:active,
.btn-success:focus,
.btn-success:hover {
  background-color: #1ca44e;
  border-color: #1ca44e;
  color: #fff;
}
.btn-info.active,
.btn-info.show,
.btn-info:active,
.btn-info:focus,
.btn-info:hover {
  background-color: #2768f5;
  border-color: #2768f5;
  color: #fff;
}
.btn-warning.active,
.btn-warning.show,
.btn-warning:active,
.btn-warning:focus,
.btn-warning:hover {
  background-color: #e1a200;
  border-color: #e1a200;
  color: #fff;
}
.btn-danger.active,
.btn-danger.show,
.btn-danger:active,
.btn-danger:focus,
.btn-danger:hover {
  background-color: #ec2121;
  border-color: #ec2121;
  color: #fff;
}
.btn-light.active,
.btn-light.show,
.btn-light:active,
.btn-light:focus,
.btn-light:hover {
  background-color: #ececec;
  border-color: #ececec;
  color: #fff;
}
.btn-dark.active,
.btn-dark.show,
.btn-dark:active,
.btn-dark:focus,
.btn-dark:hover {
  background-color: #040408;
  border-color: #040408;
  color: #fff;
}
.btn-light,
.btn-secondary {
  color: #3e4265;
}
.btn-light.active,
.btn-light.show,
.btn-light:active,
.btn-light:focus,
.btn-light:hover,
.btn-secondary.active,
.btn-secondary.show,
.btn-secondary:active,
.btn-secondary:focus,
.btn-secondary:hover {
  color: #131022;
}
.btn-light.disabled,
.btn-light:disabled,
.btn-secondary.disabled,
.btn-secondary:disabled {
  color: #585c7b;
}
[class*=' btn-outline-'].active,
[class*=' btn-outline-'].dropdown-toggle.show,
[class*=' btn-outline-']:active,
[class*=' btn-outline-']:hover,
[class^='btn-outline-'].active,
[class^='btn-outline-'].dropdown-toggle.show,
[class^='btn-outline-']:active,
[class^='btn-outline-']:hover {
  color: #fff;
}
.btn-outline-primary {
  border-color: rgb(241, 99, 99, 0.41);
}
.btn-outline-success {
  border-color: rgba(34, 197, 94, 0.35);
}
.btn-outline-info {
  border-color: rgba(76, 130, 247, 0.35);
}
.btn-outline-warning {
  border-color: rgba(255, 186, 8, 0.35);
}
.btn-outline-danger {
  border-color: rgba(239, 68, 68, 0.35);
}
.btn-outline-light {
  border-color: rgba(255, 255, 255, 0.15);
}
.btn-outline-dark {
  border-color: rgba(19, 16, 34, 0.35);
}
.btn-outline-white {
  border-color: rgba(255, 255, 255, 0.35);
}
.btn-outline-secondary {
  border-color: #d4d7e5;
  color: #3e4265;
}
.btn-outline-secondary.active,
.btn-outline-secondary.show,
.btn-outline-secondary:active,
.btn-outline-secondary:focus,
.btn-outline-secondary:hover {
  border-color: #e2e5f1;
  background-color: #e2e5f1;
  color: #131022 !important;
}
.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
  color: #585c7b;
}
.btn-outline-light {
  border-color: rgba(255, 255, 255, 0.25);
}
.btn-outline-light.active,
.btn-outline-light.show,
.btn-outline-light:active,
.btn-outline-light:focus,
.btn-outline-light:hover {
  background-color: #fff;
  color: #3e4265;
}
.btn-link {
  font-weight: 600;
  text-decoration: none;
}
.btn-close {
  transition: opacity 0.25s ease-in-out;
}
.nav-tabs-alt > .nav-item > .dropdown-menu {
  margin-top: -0.125rem !important;
  border-top-color: transparent;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.nav-item {
  margin-bottom: 0;
}
.nav-link {
  display: flex;
  align-items: center;
}
.nav-link.active {
  color: var(--primary-red-light);
}
.nav-link.active:not([data-bs-toggle='dropdown']) {
  pointer-events: none;
  cursor: default;
}
.nav-tabs {
  margin-bottom: 0.75rem;
}
.nav-tabs .nav-item {
  margin-bottom: 0.75rem;
}
.nav-tabs .nav-link {
  border-radius: 0.375rem;
  background-color: #eff2fc;
  color: #3e4265;
}
.nav-tabs .nav-link.show:not(.active),
.nav-tabs .nav-link:hover:not(.active) {
  background-color: rgba(99, 102, 241, 0.12);
  color: #6366f1;
}
.nav-tabs .nav-link.disabled,
.nav-tabs .nav-link[disabled] {
  background-color: #f3f6ff;
}
.nav-tabs .dropdown-menu {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.nav-tabs-alt {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e2e5f1;
}
.nav-tabs-alt .nav-item {
  margin-bottom: -1px;
}
.nav-tabs-alt .nav-link {
  padding: 0.8025rem 1rem;
  border-bottom: 1px solid transparent;
}
.nav-tabs-alt .nav-link.active {
  border-bottom-color: var(--primary-red-light);
}
.nav-pills .nav-item,
.nav-tabs .nav-item {
  margin-right: 0.75rem;
}
.nav-pills .nav-item:last-child,
.nav-tabs .nav-item:last-child {
  margin-right: 0;
}
.nav-pills.justify-content-center .nav-item,
.nav-tabs.justify-content-center .nav-item {
  margin-right: 0.375rem;
  margin-left: 0.375rem;
}
.nav-pills.justify-content-end .nav-item,
.nav-tabs.justify-content-end .nav-item {
  margin-right: 0;
  margin-left: 0.75rem;
}
.nav-pills.flex-column .nav-item,
.nav-tabs.flex-column .nav-item {
  margin-right: 0;
  margin-bottom: 0.75rem;
  margin-left: 0;
}
.nav-pills.flex-column .nav-item:last-child,
.nav-tabs.flex-column .nav-item:last-child {
  margin-bottom: 0;
}
.bg-faded-primary-hover {
  transition: background-color 0.2s ease-in-out;
}
.bg-faded-primary-hover:hover {
  background-color: rgba(99, 102, 241, 0.12) !important;
}
@-webkit-keyframes dropdown-show {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes dropdown-show {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.accordion-button {
  transition: none;
  font-weight: 600;
}
.accordion-button:not(.collapsed) {
  box-shadow: inset 0 -1px 0 #e2e5f1;
}
.accordion-button::after {
  width: 2.25rem;
  height: 2.25rem;
  background-position: center;
  background-color: #f3f6ff;
  transition: all 0.35s;
  border-radius: 50%;
}
.accordion-button:not(.collapsed)::after {
  background-color: #6366f1;
  box-shadow: 0 -0.5rem 1.125rem -0.5rem rgba(99, 102, 241, 0.9);
}
.badge {
  color: #fff;
}
.badge.bg-light,
.badge.bg-secondary {
  color: #3e4265;
}
a.badge {
  text-decoration: none;
}
.btn .badge {
  top: 1px;
}
.alert-secondary {
  background-color: #f3f5fd;
}
.alert-light,
.alert-secondary {
  border-color: #e2e5f1;
  color: #3e4265;
}
.alert-light .alert-link,
.alert-secondary .alert-link {
  color: #131022;
}
.alert-dismissible .btn-close {
  padding: 1.375rem 1rem;
}
.alert-primary .btn-close {
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%231419e4'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/.75em auto no-repeat;
}
.alert-success .btn-close {
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23147739'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/.75em auto no-repeat;
}
.alert-info .btn-close {
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230a4ddd'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/.75em auto no-repeat;
}
.alert-warning .btn-close {
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ab7b00'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/.75em auto no-repeat;
}
.alert-danger .btn-close {
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23c61111'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/.75em auto no-repeat;
}
.modal-content {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}
.modal-footer,
.modal-header {
  padding-right: 0;
  padding-left: 0;
}
.modal-body {
  margin-right: -1.5rem;
  margin-left: -1.5rem;
}
.oferta--image {
  width: 50px;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
}
.to-1l {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.btn-arrow::after {
  content: '\e9b4';
  margin-left: 0.5rem;
  font-family: boxicons !important;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
  display: inline-block;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  transform: rotate(180deg);
}
.btn-arrow {
  position: relative;
}
.text-75 {
  color: rgb(0 0 0 / 75%);
}
.btn-primary:disabled {
  background-color: var(--primary-red);
  border-color: var(--primary-red);
}
p {
  margin: 0 0 1em;
}
.svg-pix {
  fill: #32bbad;
  width: 17px;
}
.icon-input {
  padding-left: 2.5rem !important;
  padding-top: 0.685rem;
}
.icon-before {
  position: absolute;
  top: 0;
  width: 2.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-before-end {
  position: absolute;
  top: 0;
  right: 0.5rem;
  width: 2.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-blue {
  background-color: var(--primary-blue);
  border-color: var(--primary-blue);
  color: #fff;
}
.fw-400 {
  font-weight: 400 !important;
}
.fw-500 {
  font-weight: 500 !important;
}
.fw-600 {
  font-weight: 600 !important;
}
.fw-700 {
  font-weight: 700 !important;
}
.fw-800 {
  font-weight: 800 !important;
}
.cursor-default {
  cursor: default !important;
}
.fs-9 {
  font-size: 0.9rem;
}
html {
  scroll-behavior: smooth;
}
/* @font-face{font-family:"FFBase";font-style:normal;font-weight:400;font-display:swap;src:url('../../../assets/fonts/ff-base/ff-400.woff2') format('woff2')}
@font-face{font-family:"FFBase";font-style:normal;font-weight:600;font-display:swap;src:url('../../../assets/fonts/ff-base/ff-600.woff2') format('woff2')}
@font-face{font-family:"FFBase";font-style:normal;font-weight:700;font-display:swap;src:url('../../../assets/fonts/ff-base/ff-700.woff2') format('woff2')} */
:root {
  --bs-font-sans-serif: 'FFBase', -apple-system, 'BlinkMacSystemFont',
    'Helvetica', 'Lato', 'Arial', 'Segoe UI', 'Verdana', sans-serif;
  --font-titles-checkout: 'FFBase', -apple-system, 'BlinkMacSystemFont',
    'Helvetica', 'Lato', 'Arial', 'Segoe UI', 'Verdana', sans-serif;
  --red-accent: #ec1e1f;
  --green-lime: #3dc705;
  --green-dark: #283930;
  --green-success: #08be4b;
  --green-buy: #08cb50;
  --blue-buy: #0247e3;
  --green-success-faded: #edf7f2;
  --input-focus-border-color: #85b7d9;
  --font-monospace: 'Azeret Mono', monospace;
}
* {
  box-sizing: border-box;
  max-width: 100%;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
@media (max-width: 575px) {
  .top-product-name {
    padding: 0.5rem 1rem !important;
  }
}
.top-product-name {
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
}
.icon-top {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
}
#countdownNav #timerCount {
  font-family: var(--font-monospace);
  letter-spacing: -0.5px;
}
#btnCollapse {
  background-color: #f8f9fa;
}
.border-gray {
  border: 1px solid #bbb !important;
}
.main-section {
  margin-top: 130px !important;
}
.text-dark {
  color: #353535 !important;
}
.fw-300 {
  font-weight: 300 !important;
}
.fw-400 {
  font-weight: 400 !important;
}
.fw-500 {
  font-weight: 500 !important;
}
.fw-600 {
  font-weight: 600 !important;
}
.fw-700 {
  font-weight: 700 !important;
}
.fw-800 {
  font-weight: 800 !important;
}
.border-light {
  border: 1px solid #99999933 !important;
}
.bg-cover {
  background-size: cover !important;
}
.fs-12 {
  font-size: 12px !important;
}
.fs-14 {
  font-size: 14px !important;
}
.fs-16 {
  font-size: 16px !important;
}
.fs-18 {
  font-size: 18px !important;
}
.cursor-pointer {
  cursor: pointer;
}
.field div.position-relative {
  margin-bottom: 0.25rem;
}
.row > * {
  margin-top: 0 !important;
}
.svg-icon-20 {
  width: 20px;
  height: 20px;
  opacity: 0.7;
}
.svg-icon-18 {
  width: 18px;
  height: 18px;
  opacity: 0.7;
}
.svg-icon-16 {
  width: 16px;
  height: 16px;
  opacity: 0.7;
}
.svg-icon-14 {
  width: 14px;
  height: 14px;
  opacity: 0.7;
}
input.icone-before {
  padding-left: 2.35rem;
}
.input-form-icon-before {
  position: absolute;
  top: 0;
  width: 2.35rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-form-icon-before-right {
  position: absolute;
  top: 0;
  right: 12px;
  height: 45px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.was-validated input#cc-number.form-control:valid,
input#cc-number.form-control.is-valid {
  background-image: none;
}
.form-select,
.input-form-icon-before,
input.form-control.icone-before {
  height: 45px;
  border-radius: 5px;
}
.form-select:focus,
input.form-control:focus {
  border-color: var(--input-focus-border-color);
}
.form-control.is-invalid:focus,
.was-validated .form-control:invalid:focus {
  border-color: #dc3545c7;
}
.is-valid.valid-no-bg,
.was-validated .valid-no-bg:valid {
  background-image: none;
  border: 1px solid #ced4da;
}
@media (min-width: 768px) {
  input.icon-md {
    padding-left: 2.25rem !important;
  }
}
.form-control.is-valid.input-no-bg,
.was-validated .form-control.input-no-bg:valid {
  border: 1px solid #ced4da !important;
}
.form-control.input-no-bg.is-valid:focus,
.is-valid.valid-no-bg:focus,
.was-validated .form-control.input-no-bg:valid:focus,
.was-validated .valid-no-bg:valid:focus {
  border-color: var(--input-focus-border-color) !important;
}
.tooltip-inner {
  font-size: 0.8rem;
}
label {
  display: inline-block;
  margin-bottom: 0.35rem;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.25px;
  font-weight: 700;
  color: #555;
}
label:not(.order-bump) {
  font-family: var(--font-titles-checkout);
}
.checkout .form-control,
.checkout .form-select {
  font-size: 1rem;
  font-weight: 500;
  height: 47px !important;
  color: var(--bs-gray-dark);
}
.form-check-input:focus {
  transition: 0.5s ease all;
}
.payment-container label {
  text-transform: uppercase !important;
}
i.icon:before {
  background: 0 0 !important;
}
.pepper-buy-button {
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 0.785rem 1vw 0.9rem 1vw;
  border-radius: 6px;
  color: #fff;
  font-weight: 700 !important;
  font-size: 16px;
  box-shadow: inset 0 -4px 0 0 #00000022;
  background-color: #03d952;
  border-color: #0ad458;
}
@media (max-width: 575px) {
  .valid-no-bg {
    padding-right: 0.75rem !important;
  }
}
#buyButton:hover,
.pepper-buy-button:hover {
  background-color: #00ba45;
  transition: all 0.3s ease;
}
.nav-pills .nav-link.main-btn.btn-light {
  background-color: #f8f9fa;
  color: #999;
  transition: 0.4s ease-in-out;
}
.formas--pagamento .main-btn:focus {
  box-shadow: none !important;
}
.formas--pagamento .main-btn.active:hover,
.formas--pagamento .main-btn:hover {
  border: 1px solid var(--green-success);
}
.formas--pagamento .main-btn {
  line-height: initial;
  display: flex;
  border-radius: 7px;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  border: 1px solid var(--green-success);
  color: #00ba59 !important;
  background-color: #f9fafb !important;
}
.formas--pagamento .main-btn.active {
  border: 1px solid var(--green-success);
  color: #00ba59 !important;
  background-color: #f9fafb !important;
}
.formas--pagamento img,
.formas--pagamento svg {
  margin-bottom: 7px;
}
.formas--pagamento.row .main-btn:not(.active) img,
.formas--pagamento.row .main-btn:not(.active) svg {
  opacity: 0.5;
  filter: grayscale(1);
  transition: 0.4s ease-in-out;
}
.formas--pagamento button[aria-selected='true'] * {
  color: #06733a !important;
}
.formas--pagamento
  .nav-link.main-btn:not(.active):not(.nav-link.main-btn:hover) {
  border: 1px solid #dee2e685;
}
.formas--pagamento .main-btn.active span {
  color: #000;
}
@media (min-width: 575px) {
  .formas--pagamento .main-btn .fw-normal {
    font-size: 14px;
  }
}
.pix-li {
  font-size: 1rem;
  width: 100%;
  font-family: var(--font-titles-checkout);
  font-weight: 700;
  text-transform: uppercase;
  color: #00d3c7;
  display: inline-flex;
  align-items: center;
  margin-top: 0.75rem;
}
/* .ic-mastercard{width:52px!important;filter:brightness(1.1) contrast(1.25);background-image:url(svg/card-mastercard.svg);background-size:contain;background-repeat:no-repeat;background-position:center;right:4px!important;top:0!important;content:'';height:100%!important;z-index:1099!important} */
/* .ic-visa{width:52px!important;background-image:url(svg/card-visa.svg);background-size:contain;background-repeat:no-repeat;background-position:center;right:4px!important;top:0!important;content:'';height:100%!important;z-index:1099!important} */
.input-form-icon-before {
  font-size: 20px;
}
.input-form-icon-before span {
  font-size: 20px;
  margin-top: 5px !important;
  background-color: #fff;
  padding-right: 4px;
  padding-left: 12px;
}
.card-hover-order {
  transition: 0.3s ease-in-out;
}
.order-bump .form-check .form-check-input {
  margin-left: 0 !important;
  margin-top: 0;
  width: 1.5em;
  height: 1.5em;
  transition: 0.5s ease all;
}
.small,
small {
  font-size: 14px;
}
.order-bump .small,
.order-bump small {
  font-size: 14px !important;
}
.order-bump .fw-bold {
  line-height: 1.35;
  letter-spacing: 0.2px;
}
.order-bump p.fs-6.text-dark {
  letter-spacing: -0.15px;
  font-size: 17px !important;
}
.order-bump .form-check {
  min-height: 1.5rem;
  min-width: 1.5rem;
  padding-left: 0;
  padding-right: 0.5rem;
}
@media (min-width: 575px) {
  .order-bump .form-check {
    padding-left: 0.5rem !important;
  }
}
.orders-container .text-center.fw-bold.text-dark.justify-content-center {
  line-height: 1.4;
  font-size: 17px;
}
.orders-container {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding: 0 !important;
  margin-top: -3px !important;
  margin: 0;
  border: 3px dashed var(--red-accent);
}
.border-dashed-danger {
  border: 3px dashed var(--red-accent);
}
.orders-container label:not(label:last-child) {
  border-bottom: 1px solid #e2e5f1;
}
.order-bump span.order-bump-price {
  margin-left: 0.25rem;
  letter-spacing: -0.1px;
}
.order-bump .card-hover-order:hover {
  transition: 0.3s ease-in-out;
  background-color: #f1f1f1;
  cursor: pointer;
}
.order-bump-cta {
  width: 100%;
  font-family: var(--font-titles-checkout);
  font-size: 16px;
  font-weight: 800;
  display: block;
  text-align: center;
  padding: 1rem;
  margin: 0;
  margin-top: 0.75rem;
  border-top-left-radius: 0.35rem;
  border-top-right-radius: 0.35rem;
  font-weight: 800;
  color: #fff;
  background-color: var(--red-accent);
}
label.save-payment-info {
  font-weight: 500;
  text-transform: none !important;
}
@media (max-width: 575px) {
  label.save-payment-info {
    font-size: 12px;
  }
  .order-bump-cta {
    font-size: 14px !important;
  }
}
@media (min-width: 575px) {
  label.save-payment-info {
    font-size: 14px;
  }
}
input.input-no-bg {
  background-image: none !important;
}
#progressBar {
  width: 100%;
  margin-top: 20px;
  height: 10px;
  background-color: #1a0dc5;
}
#progressBar div {
  height: 100%;
  text-align: right;
  padding: 0 10px;
  line-height: 10px;
  width: 0;
  background-color: var(--green-success);
  box-sizing: border-box;
  color: transparent;
}
section.checkout .checkout-div {
  border-radius: 0.5rem;
  background-color: #fff !important;
}
@media (max-width: 992px) {
  section.checkout .checkout-div {
    padding: 2.25rem 0.9rem;
  }
}
@media (min-width: 992px) {
  section.checkout .checkout-div {
    padding: 2.5rem 2rem;
  }
}
input::placeholder {
  color: #888 !important;
  font-size: 1rem !important;
  font-weight: 500;
}
@media (max-width: 575px) {
  input::placeholder {
    font-size: 0.9rem !important;
  }
  span.payment-type-btn {
    font-size: 0.825rem !important;
  }
}
section.checkout .nav-pills .nav-item,
section.checkout .nav-tabs .nav-item {
  margin-right: 0 !important;
  max-width: 195px;
}
span.payment-type-btn {
  font-weight: 500;
  font-family: var(--font-titles-checkout);
  font-size: 0.9rem;
  line-height: 1.25;
  margin-bottom: 0.25rem;
}
.text-black-75,
.text-dark-75 {
  color: rgba(0, 0, 0, 0.75) !important;
}
.text-black-50,
.text-dark-50 {
  color: rgba(0, 0, 0, 0.5) !important;
}
#pills-cartao-tab.active img {
  filter: hue-rotate(286deg);
}
.pepper-dropdown ::selection,
.pepper-dropdown::selection {
  background: 0 0;
}
.pepper-dropdown {
  width: 100%;
  background-color: #fff;
  display: inline-block;
  padding: 0.625rem 1rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #d4d7e5;
  border-radius: 0.4rem;
  cursor: pointer;
  visibility: visible;
  opacity: 1;
  z-index: 1;
  transform: translateY(0);
  transition: 0.3s all ease-in-out;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280, 0, 0, 0.27%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-position: 98% center;
  background-size: 14px;
  background-repeat: no-repeat;
}
@media (max-width: 768px) {
  .pepper-dropdown {
    background-position: 95% center;
  }
  .pepper-dropdown * {
    font-size: 14px !important;
  }
}
.pepper-dropdown:hover {
  border: 1px solid var(--input-focus-border-color) !important;
  transition: 0.3s all ease-in-out;
  outline: 0 !important;
  box-shadow: none !important;
}
.pepper-dropdown ul {
  border: 1px solid var(--input-focus-border-color);
  list-style: none;
  border-radius: 0.4rem;
  margin: 0;
  padding: 0;
  background-color: #fff;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: -1px;
  width: calc(100% + 2px);
  max-width: none;
  z-index: 2;
  transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.2s,
    z-index 0s linear 10ms;
}
.pepper-dropdown ul.ul-bottom {
  bottom: 95%;
  transform: translateY(-4em);
}
.pepper-dropdown ul.ul-top {
  top: 95%;
  transform: translateY(4em);
}
.pepper-dropdown.open ul.ul-top {
  box-shadow: 0 1.3rem 1.525rem -0.375rem rgb(56 30 188 / 11%),
    0 0.95rem 0.8125rem -0.125rem rgb(66 52 135 / 33%);
}
.pepper-dropdown.open ul.ul-bottom {
  box-shadow: 0.5rem -0.83rem 1.525rem -0.375rem rgb(150 143 188 / 11%),
    0 -1.19rem 2.125rem -1.25rem rgb(128 125 142 / 33%);
}
.pepper-dropdown.open ul.ul-top {
  transform: translateY(4px);
}
.pepper-dropdown.open ul.ul-bottom {
  transform: translateY(-4px);
}
.pepper-dropdown ul.ul-top li:last-child {
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
}
.pepper-dropdown ul.ul-top li:first-child {
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
}
.pepper-dropdown ul.ul-bottom li:last-child {
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
}
.pepper-dropdown ul.ul-bottom li:first-child {
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
}
.pepper-dropdown ul li {
  padding: 0.4em 1em;
  font-size: 14px;
  color: #4c4c4c;
  background-color: #fff;
  transition: 0.3s all ease-in-out;
  transition: all 0.3s ease-in-out, font-weight 0.2s ease-in-out;
}
.pepper-dropdown ul li:hover {
  background-color: #d4e7f9;
  transition: all 0.3s ease-in-out;
}
.pepper-dropdown ul li.selected {
  background-color: #d4e7f9;
  font-weight: 600;
  transition: all 0.3s ease-in-out, font-weight 0.2s ease-in-out;
}
.pepper-dropdown.open ul {
  visibility: visible;
  opacity: 1;
  transition: all 0.3s ease-in-out 0.2s, visibility 0s linear 0.1s,
    z-index 0s linear 10ms;
}
.pepper-dropdown.open {
  border-color: var(--input-focus-border-color);
  transition: all 0.3s ease-in-out 0.2s;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' style='transform:rotate(180deg)' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280, 0, 0, 0.27%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
}
.zindex-99 {
  z-index: 99;
}
.checkout-pepper-step {
  display: inline-flex;
  margin-bottom: 1.5rem;
  align-items: center;
  position: relative;
  width: 100%;
}
.checkout-pepper-step .checkout-step-text {
  font-size: 16px;
  z-index: 1;
  font-family: var(--font-titles-checkout);
  font-weight: 700;
  color: var(--green-dark);
  background-color: var(--green-success-faded);
  padding: 0.4rem 1.5rem 0.4rem 2.75rem;
  left: 0.75rem;
  position: absolute;
  text-transform: uppercase;
  border-radius: 35px;
}
.checkout-pepper-step .checkout-step-number {
  font-size: 20px;
  position: relative;
  z-index: 2;
  font-family: var(--font-titles-checkout);
  font-weight: 900;
  color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 45px;
  background-color: var(--green-success);
}
.logo-checkout-footer {
  max-width: 90px;
  filter: opacity(0.9) grayscale(0.1) brightness(1.1) contrast(0.95);
}
@media (max-width: 575px) {
  .logo-checkout-footer {
    max-width: 80px !important;
  }
}
.footer-payment {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.footer-payment .footer-processed {
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
}
.footer-payment svg {
  fill: #777 !important;
}
.footer-payment .footer-processed i.bxs-badge-check {
  font-size: 1.125rem;
  margin-right: 0.25rem;
  color: var(--bs-info);
  margin-bottom: 2px;
}
.footer-payment .footer-processed label {
  letter-spacing: 0;
  margin-bottom: 0;
  color: var(--bs-gray-dark);
}
.footer-disclaimer.flex-column.align-items-start p {
  margin-bottom: 0.25rem;
}
.footer-disclaimer.flex-column.align-items-start {
  padding-left: 0.45rem;
  padding-right: 0.45rem;
}
.footer-disclaimer {
  font-family: var(--font-titles-checkout);
  color: #999;
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
}
@media (min-width: 768px) {
  .footer-disclaimer.flex-column.align-items-start p {
    margin-left: auto;
    margin-right: auto;
  }
}
.banner-img-topo {
  margin-bottom: 0.5rem;
  width: 100%;
  padding: 0;
}
.banner-img-topo img {
  border-radius: 0.4rem;
  width: 100%;
  border: 1px solid #d4d7e54f;
  margin: 0;
}
#countdownNav {
  width: 100%;
  background-color: #ff3838;
  color: #fff;
  text-align: center;
  font-weight: 800;
  font-size: 1.25rem;
  margin: 0;
  min-height: 65px;
  z-index: 2000;
  align-items: center;
  justify-content: center;
  position: fixed;
  flex-direction: column;
}
.countdown-content {
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  max-width: 550px;
}
#countdownNav #countdownSvg {
  width: 40px;
  height: 40px;
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}
@media (max-width: 575px) {
  #countdownNav #timerCount {
    font-size: 1.5rem;
  }
  #textCounter {
    font-size: 14px !important;
    line-height: 1.2 !important;
  }
  .product-img-top {
    width: 75px !important;
    height: 75px !important;
  }
  .mt-12 {
    margin-top: 115px !important;
  }
  .info-product-content .col-auto {
    margin-right: 0.75rem !important;
  }
}
.top-product-name label {
  color: var(--primary-red-light) !important;
}
.product-img-top {
  width: 90px;
  height: 90px;
  border-radius: 0.25rem;
  object-fit: cover;
  object-position: center;
}
.product-name-top {
  margin-top: 0;
  font-weight: 700;
  margin-bottom: 0;
  font-size: 16px;
  color: #4c4c4c;
  font-family: var(--bs-body-font-family);
}
.col-product-info-top {
  font-family: var(--font-titles-checkout) !important;
}
#textCounter {
  font-weight: 700;
  margin-bottom: 0;
  float: left;
  text-align: left;
  font-size: 1.1rem;
  flex: 0 0 auto;
  width: 41.66666667%;
  line-height: 1.2;
}
.mt-12 {
  margin-top: 130px;
}
.product-price-top {
  display: inline-flex;
  align-items: flex-end;
  font-weight: 800;
  width: 100%;
  margin-bottom: -0.25rem;
}
.product-price-top .h3 {
  margin-bottom: 0;
  font-weight: 700 !important;
  font-size: 1.55rem;
}
.product-full-price,
.product-price-top .product-installments {
  font-size: 13px;
  font-weight: 500;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
}
#countdownNav .countdown-content .col-auto {
  text-align: center;
  min-width: 35%;
}
.div-top-product-info {
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 0.4rem;
  background-color: #fff;
}
@media (max-width: 992px) {
  .div-top-product-info {
    padding: 0.5rem 1rem 1rem 1rem;
  }
}
@media (min-width: 992px) {
  .div-top-product-info {
    padding: 1rem 1.75rem 1.5rem 1.75rem;
  }
}
.div-top-product-info label {
  color: var(--bs-danger);
  margin-bottom: 0.75rem;
}
.info-product-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.info-product-content .col-auto {
  margin-right: 1rem;
}
#wppLeft,
#wppRight {
  text-decoration: none;
  width: auto;
  position: fixed;
  bottom: 15px;
  z-index: 3;
}
#wppRight {
  right: 15px;
}
#wppLeft {
  left: 15px;
}
#wppLeft .btn-zap,
#wppRight .btn-zap {
  width: 3.25rem;
  height: 3.25rem;
  color: #fff;
  flex-shrink: 0;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50% !important;
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(19 16 34 / 10%),
    0 0.25rem 0.8125rem -0.125rem rgb(19 16 34 / 6%) !important;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.6;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  text-align: center;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  background-color: var(--green-success);
  border-color: var(--green-success);
}
.order-bump .form-check {
  margin-top: 0.25rem;
}
.flex-inline-center {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
label.order-bump {
  width: 100%;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: none;
}
.ob-product-title {
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 0.2rem;
  color: #131022;
  letter-spacing: 0.2px;
}
.ob-original-price {
  color: var(--bs-danger);
  font-weight: 700;
  font-size: 14px;
  text-decoration: line-through;
}
.order-bump img {
  border-radius: 0.25rem;
  width: 45px;
  height: 45px;
  border: 1px solid #99999922;
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(19 16 34 / 10%),
    0 0.25rem 0.8125rem -0.125rem rgb(19 16 34 / 6%);
}
.bg-none {
  background-image: none !important;
}
@media (max-width: 575px) {
  .bg-none-sm-down {
    background-image: none !important;
  }
}
.obrigado-icon-header {
  width: 60px;
  max-width: 55%;
  margin-bottom: 1rem;
  filter: hue-rotate(-15deg) brightness(1.35);
}
.obrigado-h2 {
  font-family: var(--font-titles-checkout);
  color: var(--green-success);
  text-align: center;
}
.obrigado-h5 {
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.obrigado-hand {
  width: 24px;
  height: 24px;
  margin-bottom: 3px;
  margin-right: 6px;
}
.obrigado-text {
  text-align: center;
  font-size: 0.875rem;
}
@media (max-width: 575px) {
  .obrigado-text {
    margin-bottom: 0.5rem;
  }
}
.main-obrigado {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5a5a5b;
  justify-content: center;
}
.checkout-obrigado {
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  margin-top: 3rem;
  padding-bottom: 1.5rem;
}
@media (min-width: 992px) {
  .checkout-obrigado {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .main-obrigado {
    min-height: 100vh;
  }
  .main-obrigado .container-lg {
    width: 900px;
    max-width: 100%;
  }
}
.link-privacy {
  font-weight: 600;
  color: inherit;
}
.badges-checkout-container {
  max-width: 240px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
  flex: 0 0 auto;
  width: 83.33333333%;
}
.badges-checkout {
  filter: hue-rotate(-10deg);
}
#payment-overlay {
  position: relative;
}
#pay-loader {
  position: absolute;
  top: 0;
  left: -5px;
  width: 105%;
  max-width: 105%;
  height: 105%;
  background-color: #ffffffbd;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
#pay-loader .spinner-border {
  border-color: var(--green-success);
  border-right-color: transparent;
  border-width: 0.2rem;
}
#copy-billet-input {
  height: auto !important;
}
.tooltip-copy {
  transform: translate(0, -130%);
  display: none;
  position: absolute;
  color: #000;
  font-weight: 700;
  background-color: #fff;
  border: none;
  border-radius: 0.4rem;
  font-size: 0.875rem;
  padding: 0.25rem 0.35rem;
  z-index: 10;
  display: block;
  width: 100%;
  max-width: 170px;
  top: 0;
  left: 50%;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--bs-gray-400);
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(19 16 34 / 20%),
    0 0.25rem 0.8125rem -0.125rem rgb(19 16 34 / 36%) !important;
}
.tooltip-copy i {
  color: var(--bs-success);
  font-weight: 400;
}
#copy-billet-btn {
  background-color: #209a27;
  border-color: #209a27;
}
.checkout-preloader {
  background-color: #ffffffee;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main-loading {
  overflow: hidden !important;
  filter: blur(3px);
}
.checkout-preloader .preloader-container {
  position: relative;
  width: 72px;
  height: 72px;
}
.checkout-preloader .preloader-container .preloader-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.96;
}
.checkout-preloader .preloader-container .preloader-icon img {
  width: 46%;
  height: auto;
}
.spin-load {
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 3px solid rgba(255, 0, 0, 0.63);
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.9s linear infinite;
  -webkit-animation: spin 0.9s linear infinite;
}
.spin-load-lg {
  display: inline-block;
  width: 72px;
  height: 72px;
  border-top: 2px solid #e8464e;
  border-left: 2px solid #e8464e;
  border-right: 2px solid rgb(232, 70, 78, 0);
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.9s linear infinite;
  -webkit-animation: spin 0.9s linear infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
.pepper-dropdown ul.ul-bottom {
  flex-direction: column-reverse;
  display: flex;
}
.pix-li img,
.pix-li svg {
  filter: hue-rotate(-40deg) brightness(0.9) !important;
  margin-right: 0.5rem !important;
}
.pix-li {
  color: var(--green-success) !important;
}
.pepper-dropdown .pepper-dropdown-title {
  transition: all 0.3s ease;
}
.pepper-dropdown.open .pepper-dropdown-title {
  opacity: 0.5;
}
.footer-payment .row {
  width: 100%;
  max-width: 700px;
  color: #555;
  flex-wrap: nowrap;
}
.footer-payment .row .col-auto p {
  color: #7c7c7c;
  font-weight: 600;
  letter-spacing: -0.3px !important;
}
@media (min-width: 992px) {
  .bg-top-cover {
    background-size: 100% auto;
    background-repeat: no-repeat;
    filter: blur(15px);
    width: 100%;
    height: 60vh;
    position: absolute;
    z-index: -1;
    opacity: 0.75;
    top: -5rem;
  }
  .bg-top-gradient {
    background-image: linear-gradient(
      to top,
      var(--bs-body-bg),
      transparent 40%
    );
    background-size: 100%;
    height: 100%;
    width: 100%;
  }
}
@media (max-width: 575px) {
  .footer-payment img {
    margin-top: 15px;
  }
  .product-name-top {
    font-size: 14px !important;
    line-height: 1.2;
    margin-bottom: 0.25rem;
  }
}
.lh-2 {
  line-height: 2;
}
.btn-pix {
  font-weight: 700 !important;
  font-size: 16px;
  letter-spacing: 0.25px;
  background-color: #3166e0;
  border-color: #3166e0;
  font-family: var(--font-titles-checkout);
}
section.checkout {
  max-width: 100%;
  width: 900px;
}
.label-orderbumps {
  min-height: 50px;
  padding: 0 !important;
  width: 100%;
  border-radius: 0.5rem;
  border: 2px dashed #ff000099;
  padding: 1rem;
  box-shadow: none;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  margin-bottom: 1rem;
}
.label-orderbumps:hover {
  box-shadow: 2px 3px 30px 0 #00000022;
}
.label-orderbumps .orderbump-title-wrapper {
  width: 100%;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  padding: 0.25rem 1rem;
  text-align: center;
  background-color: #eee;
}
.label-orderbumps .orderbump-box h6,
.label-orderbumps .orderbump-box p {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.25rem;
  display: inline-block;
  line-height: 1.4;
}
.label-orderbumps .orderbump-title-wrapper h6 {
  font-size: 1.1rem;
  line-height: 1.3;
  margin: 0.85rem 0;
}
.label-orderbumps * {
  text-transform: none;
}
@media (max-width: 575px) {
  .orderbump-box {
    padding: 0.5rem 0.85rem 1rem 0.85rem !important;
  }
  .orderbump-box-wrapper {
    padding: 1rem 0.75rem !important;
  }
  .orderbump-box .form-check-input {
    width: 0.9rem !important;
    height: 0.9rem !important;
  }
  .orderbump-box-wrapper svg {
    width: 36px !important;
    height: 36px !important;
  }
}
.orderbump-box-wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.orderbump-box-wrapper svg {
  width: 40px;
  height: 40px;
}
.orderbump-box {
  box-shadow: rgb(107 110 176 / 26%) 0 -5px 0 inset;
  border: 1px solid rgb(209 210 229);
  border-radius: 6px;
  background: #ffffff77;
  padding: 0.5rem 1rem 1rem 1rem;
}
.orderbump-box img {
  border: 1px solid #99999922;
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(19 16 34 / 10%),
    0 0.25rem 0.8125rem -0.125rem rgb(19 16 34 / 6%);
  max-width: 100%;
  width: 64px;
  height: 64px;
  object-fit: cover;
  object-position: center;
  margin: 0.5rem auto;
}
.orderbump-box input[type='checkbox'] {
  margin: 0.2rem 0.5rem 0 0 !important;
}
.orderbumps-arrow {
  fill: #e63640 !important;
}
.orderbump-checkbox {
  display: block;
  margin: 0.15rem 0.5rem 0rem -0.1rem;
  aspect-ratio: 1;
  padding: 0 !important;
}
.orderbump-subheading {
  font-weight: 300;
  font-size: 0.875rem;
  text-align: center;
  margin: 0;
  padding: 0 1rem 1rem 1rem;
}
</style>
