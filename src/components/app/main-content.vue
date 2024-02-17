<template>
  <div class="loading-overlay" id="loadingOverlay">
    <div class="loading-icon">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
  </div>
  <div class="container">
    <div id="header" class="row">
      <nav id="navbar" class="navbar fixed-top py-3 bg-zap">
        <div class="col-1 text-white text-center">
          <img src="./images/logo.png" style="max-width: 45px" />
        </div>
        <div
          id="saldo"
          class="col-4 fs-5 text-center py-1 bg-white fw-bold"
          style="color: #424242; border-radius: 10px"
        >
          R$ 0,00
        </div>
      </nav>
    </div>
    <div id="menu" style="margin-top: 75px" class="row bg-zap fixed-top">
      <div
        id="empresasCol"
        class="col-6 text-center text-white fs-5 fw-bold"
        onclick="toEmpresa()"
      >
        <a>Empresas</a>
        <div id="empresas" class="trapezium"></div>
      </div>
      <div id="saqueCol" class="col-6 text-center text-white fs-5">
        <a>Saque</a>
        <div id="saque"></div>
      </div>
    </div>
    <div id="contentPrincipal" class="row text-white" style="margin-top: 120px">
      <div
        id="content2"
        class="col-11 ms-3 mt-4"
        style="
          background-image: url('./images/pai_e_filha.jpg');
          height: 67vh !important;
          background-size: cover;
          background-position: center;
          border-radius: 20px;
          box-shadow: 10px 10px #388268;
        "
      >
        <div class="row text-center align-items-center">
          <div
            id="messageContent2"
            class="col-8 mx-auto my-2 fw-bold mt-5"
            style="font-size: 1.5rem"
            >É um prazer ter você aqui!</div
          >
          <div class="col-10 mx-auto my-2 fw-bold" style="font-size: 1.2rem">
            Empresas de todo o Brasil precisam de
            <label style="color: rgb(1, 210, 1)">você</label> e estão dispostas
            a pagar muito bem por isso!
          </div>
          <div class="col-12 text-center mb-5 mt-4">
            <img id="pix" src="./images/pix_coca.png" class="img-fluid" />
          </div>
          <div class="col-11 mx-auto">
            <button
              class="btn btn-lg text-white fw-bold py-0 px-3 pt-1 pb-1 pulse text-shadow"
              style="background-color: #388268; font-family: 'Poppins'"
              onclick="openCompanies()"
            >
              COMEÇAR AGORA
            </button>
          </div>
        </div>
      </div>
      <div id="content3" class="col-12 d-none mt-2 mb-3">
        <div
          class="row text-center m-1 p-3 box-shadow bg-white"
          style="border-radius: 6px"
        >
          <div
            class="col d-flex align-items-center justify-content-center"
            style="
              font-size: 19px;
              font-weight: 600;
              background-image: url('./images/pai_e_filha.jpg');
              background-position: center;
              background-size: cover;
              height: 130px;
              border-radius: 6px;
            "
          >
            Selecione a empresa <br />
            para gerar o relatório...
          </div>
        </div>
        <div
          id="empresa0"
          onclick="avaliar(0)"
          class="row text-center m-1 mt-4 p-3 bg-white box-shadow"
          style="border-radius: 6px"
        >
          <div class="col-4 ps-0">
            <div
              class="rounded-circle"
              style="
                width: 100px;
                height: 100px;
                background-image: url('./images/globo.png');
                background-position: center;
                background-size: cover;
              "
            ></div>
          </div>
          <div class="col">
            <div
              class="row fw-bold text-dark text-start"
              style="font-size: 20px; font-weight: 600"
            >
              <div class="col">Globo</div>
              <div id="notificacao1" class="col-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g filter="url(#filter0_d_6_40)">
                    <circle id="" cx="11" cy="7" r="7" fill="#388268" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_6_40"
                      x="0"
                      y="0"
                      width="22"
                      height="22"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_6_40"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_6_40"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              class="row mt-1 fw-bold text-secondary text-start"
              style="font-size: 11px; font-weight: 600"
            >
              <div id="aviso1" class="col">Você tem um novo relatório!</div>
            </div>
            <div class="row mt-1">
              <div class="col text-start">
                <label
                  id="marca0"
                  class="rounded px-2 py-1"
                  style="
                    background-color: #388268;
                    font-size: 12px;
                    font-weight: 600;
                  "
                >
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          id="empresa1"
          onclick="avaliar(1)"
          class="row text-center m-1 mt-4 p-3 bg-white box-shadow overlay-empresa"
          style="border-radius: 6px"
        >
          <div class="col-4 ps-0">
            <div
              class="rounded-circle"
              style="
                width: 100px;
                height: 100px;
                background-image: url('./images/nubank.png');
                background-position: center;
                background-size: cover;
              "
            ></div>
          </div>
          <div class="col">
            <div
              class="row fw-bold text-dark text-start"
              style="font-size: 20px; font-weight: 600"
            >
              <div class="col">Nubank</div>
              <div id="notificacao1" class="col-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g filter="url(#filter0_d_6_40)">
                    <circle id="" cx="11" cy="7" r="7" fill="#ff0000" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_6_40"
                      x="0"
                      y="0"
                      width="22"
                      height="22"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_6_40"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_6_40"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              class="row mt-1 fw-bold text-secondary text-start"
              style="font-size: 11px; font-weight: 600"
            >
              <div id="aviso1" class="col">Você tem um novo relatório!</div>
            </div>
            <div class="row mt-1">
              <div class="col text-start">
                <label
                  id="marca1"
                  class="rounded px-2 py-1"
                  style="
                    background-color: #388268;
                    font-size: 12px;
                    font-weight: 600;
                  "
                >
                  R$ 15,49
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          id="empresa2"
          onclick="avaliar(2)"
          class="row text-center m-1 mt-4 p-3 bg-white box-shadow overlay-empresa"
          style="border-radius: 6px"
        >
          <div class="col-4 ps-0">
            <div
              class="rounded-circle"
              style="
                width: 100px;
                height: 100px;
                background-image: url('./images/magazine.jpg');
                background-position: center;
                background-size: cover;
              "
            ></div>
          </div>
          <div class="col">
            <div
              class="row fw-bold text-dark text-start"
              style="font-size: 20px; font-weight: 600"
            >
              <div class="col">Magalu</div>
              <div id="notificacao2" class="col-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g filter="url(#filter0_d_6_40)">
                    <circle cx="11" cy="7" r="7" fill="#ff0000" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_6_40"
                      x="0"
                      y="0"
                      width="22"
                      height="22"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_6_40"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_6_40"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              class="row mt-1 fw-bold text-secondary text-start"
              style="font-size: 11px; font-weight: 600"
            >
              <div id="aviso2" class="col">Você tem um novo relatório!</div>
            </div>
            <div class="row mt-1">
              <div class="col text-start">
                <label
                  id="marca2"
                  class="rounded px-2 py-1"
                  style="
                    background-color: #388268;
                    font-size: 12px;
                    font-weight: 600;
                  "
                >
                  R$ 18,45
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          id="empresa3"
          onclick="avaliar(3)"
          class="row text-center m-1 mt-4 p-3 bg-white box-shadow overlay-empresa"
          style="border-radius: 6px"
        >
          <div class="col-4 ps-0">
            <div
              class="rounded-circle"
              style="
                width: 100px;
                height: 100px;
                background-image: url('./images/bradesco.png');
                background-position: center;
                background-size: contain;
              "
            ></div>
          </div>
          <div class="col">
            <div
              class="row fw-bold text-dark text-start"
              style="font-size: 20px; font-weight: 600"
            >
              <div class="col">Bradesco</div>
              <div id="notificacao3" class="col-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g filter="url(#filter0_d_6_40)">
                    <circle cx="11" cy="7" r="7" fill="#ff0000" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_6_40"
                      x="0"
                      y="0"
                      width="22"
                      height="22"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_6_40"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_6_40"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              class="row mt-1 fw-bold text-secondary text-start"
              style="font-size: 11px; font-weight: 600"
            >
              <div id="aviso3" class="col">Você tem um novo relatório!</div>
            </div>
            <div class="row mt-1">
              <div class="col text-start">
                <label
                  id="marca3"
                  class="rounded px-2 py-1"
                  style="
                    background-color: #388268;
                    font-size: 12px;
                    font-weight: 600;
                  "
                >
                  R$ 22,17
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          id="empresa4"
          onclick="avaliar(4)"
          class="row text-center m-1 mt-4 p-3 bg-white box-shadow overlay-empresa"
          style="border-radius: 6px"
        >
          <div class="col-4 ps-0">
            <div
              class="rounded-circle"
              style="
                width: 100px;
                height: 100px;
                background-image: url('./images/bk.webp');
                background-position: center;
                background-size: cover;
              "
            ></div>
          </div>
          <div class="col">
            <div
              class="row fw-bold text-dark text-start"
              style="font-size: 20px; font-weight: 600"
            >
              <div class="col">Burger King</div>
              <div id="notificacao4" class="col-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g filter="url(#filter0_d_6_40)">
                    <circle cx="11" cy="7" r="7" fill="#ff0000" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_6_40"
                      x="0"
                      y="0"
                      width="22"
                      height="22"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_6_40"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_6_40"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              class="row mt-1 fw-bold text-secondary text-start"
              style="font-size: 11px; font-weight: 600"
            >
              <div id="aviso4" class="col">Você tem um novo relatório!</div>
            </div>
            <div class="row mt-1">
              <div class="col text-start">
                <label
                  id="marca4"
                  class="rounded px-2 py-1"
                  style="
                    background-color: #388268;
                    font-size: 12px;
                    font-weight: 600;
                  "
                >
                  R$ 13,99
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          id="empresa5"
          onclick="avaliar(5)"
          class="row text-center m-1 mt-4 p-3 bg-white box-shadow overlay-empresa"
          style="border-radius: 6px"
        >
          <div class="col-4 ps-0">
            <div
              class="rounded-circle"
              style="
                width: 100px;
                height: 100px;
                background-image: url('./images/coca_cola.png');
                background-position: center;
                background-size: contain;
              "
            ></div>
          </div>
          <div class="col">
            <div
              class="row fw-bold text-dark text-start"
              style="font-size: 20px; font-weight: 600"
            >
              <div class="col">Coca-Cola</div>
              <div id="notificacao5" class="col-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g filter="url(#filter0_d_6_40)">
                    <circle cx="11" cy="7" r="7" fill="#ff0000" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_6_40"
                      x="0"
                      y="0"
                      width="22"
                      height="22"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_6_40"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_6_40"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              class="row mt-1 fw-bold text-secondary text-start"
              style="font-size: 11px; font-weight: 600"
            >
              <div id="aviso5" class="col">Você tem um novo relatório!</div>
            </div>
            <div class="row mt-1">
              <div class="col text-start">
                <label
                  id="marca5"
                  class="rounded px-2 py-1"
                  style="
                    background-color: #388268;
                    font-size: 12px;
                    font-weight: 600;
                  "
                >
                  R$ 31,64
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center m-1 mt-4">
          <button
            id="btnVsl"
            class="btn btn-lg btn-block text-white text-shadow fw-bold btn-gray"
            style="
              background-color: #388268;
              font-family: 'Poppins';
              font-size: 17px;
            "
            disabled
          >
            REALIZAR SAQUE!
          </button>
        </div>
      </div>
      <div id="content5" class="col-12 d-none text-center">
        <div class="row">
          <div class="col-12">
            <img
              src="./images/logo.png"
              style="max-width: 150px"
              class="mb-3"
            />
          </div>
        </div>
        <div class="row mb-1 text-center">
          <div
            class="col-12 fw-bold text-dark"
            style="font-size: 0.8rem !important"
          >
            <i class="fa-solid fa-lock" style="color: #388268 !important"></i>
            SEU SALDO SERÁ LIBERADO NO
            <a style="color: #388268 !important">FINAL DO VÍDEO</a>
          </div>
        </div>
        <div style="padding: 56.25% 0 0 0; position: relative">
          <iframe
            frameborder="0"
            allowfullscreen
            id="ifr_6478cf5047265d0009b215db"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            referrerpolicy="origin"
          ></iframe>
        </div>
        <div class="row mt-2 text-center">
          <div class="col-12">
            <button
              id="acessoBtn"
              class="mt-2 btn text-white pulse text-shadow fw-bold d-none"
              style="background-color: #388268; font-family: 'Poppins'"
              onclick="openCheckout()"
            >
              QUERO LUCRAR HOJE COM O WHATSPIX!
            </button>
          </div>
        </div>
      </div>
      <div id="mecanismo0" class="col-12 d-none mb-4">
        <section>
          <div class="card-container mb-3 pb-0" style="height: 120px">
            <div
              class="col text-center pt-1"
              style="
                font-size: 19px;
                font-weight: 600;
                background-image: url('./images/pai_e_filha.jpg');
                background-position: center;
                background-size: cover;
                border-radius: 6px;
              "
            >
              Preencha o relatório da empresa: <br />
            </div>
            <div class="col text-danger fw-bold" style="font-size: 13px">
              *Por gentileza responda com sinceridade
            </div>
          </div>
          <div class="card-container">
            <div class="card-title">
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

            <div class="img-container" style="height: 270px !important">
              <img
                loading="lazy"
                decoding="async"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  left: 0;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  object-fit: cover;
                  color: transparent;
                "
                sizes="100vw"
                src="./images/globo.png"
                class="mod adidas"
              />
            </div>
            <span class="card-grade-title"
              >De 0 a 5, que nota você dá para os programas da Globo?</span
            >

            <div class="grades">
              <a class="grade grade-1">
                <i class="far fa-tired" aria-hidden="true"></i>
              </a>

              <a class="grade grade-2">
                <i class="far fa-frown" aria-hidden="true"></i>
              </a>

              <a class="grade grade-3">
                <i class="far fa-meh" aria-hidden="true"></i>
              </a>

              <a class="grade grade-4">
                <i class="far fa-smile" aria-hidden="true"></i>
              </a>
              <a class="grade grade-5"
                ><i class="far fa-laugh-beam" aria-hidden="true"></i>
              </a>
            </div>

            <span class="card-grade-title"
              >Em uma emissora, você prefere mais filmes ou novelas?</span
            >

            <div class="booleans">
              <a class="bool"> Filmes </a>

              <a class="bool"> Novelas </a>
            </div>

            <span class="card-grade-title"
              >Globo é a sua emissora favorita?</span
            >

            <div class="booleans">
              <a class="bool"> Sim </a>

              <a class="bool"> Não </a>
            </div>

            <button type="button" id="submit-survey" onclick="enviaAvaliacao()">
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
        </section>
      </div>
      <div id="mecanismo5" class="col-12 d-none mb-4">
        <section>
          <div class="card-container">
            <div class="card-title">
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

            <div class="img-container" style="height: 180px">
              <img
                loading="lazy"
                decoding="async"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  left: 0;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  object-fit: cover;
                  color: transparent;
                "
                sizes="100vw"
                src="./images/coca_cola.png"
                class="mod adidas"
              />
            </div>
            <span class="card-grade-title"
              >De 0 a 5, que nota você dá para o sabor da Coca-Cola</span
            >

            <div class="grades">
              <a class="grade grade-1">
                <i class="far fa-tired" aria-hidden="true"></i>
              </a>

              <a class="grade grade-2">
                <i class="far fa-frown" aria-hidden="true"></i>
              </a>

              <a class="grade grade-3">
                <i class="far fa-meh" aria-hidden="true"></i>
              </a>

              <a class="grade grade-4">
                <i class="far fa-smile" aria-hidden="true"></i>
              </a>
              <a class="grade grade-5"
                ><i class="far fa-laugh-beam" aria-hidden="true"></i>
              </a>
            </div>

            <span class="card-grade-title"
              >Você prefere tomar Coca-Cola em ocasiões especiais ou os consome
              regularmente?</span
            >

            <div class="booleans">
              <a class="bool" style="font-size: 14px"> Ocasiões especiais </a>

              <a class="bool" style="font-size: 14px"> Regularmente </a>
            </div>

            <span class="card-grade-title"
              >Você já experimentou Coca-Cola com sabores incomuns ou
              exóticos?</span
            >

            <div class="booleans">
              <a class="bool"> Sim </a>

              <a class="bool"> Não </a>
            </div>

            <button type="button" id="submit-survey" onclick="enviaAvaliacao()">
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
        </section>
      </div>
      <div id="mecanismo2" class="col-12 d-none mb-4">
        <section>
          <div class="card-container">
            <div class="card-title">
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

            <div class="img-container" style="height: 190px !important">
              <img
                loading="lazy"
                decoding="async"
                style="
                  position: absolute;
                  width: 100%;
                  left: 0;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  object-fit: cover;
                  color: transparent;
                "
                sizes="100vw"
                src="./images/magazine.jpg"
              />
            </div>
            <span class="card-grade-title"
              >De 0 a 5, que nota você dá para o atendimento da Magazine
              Luiza?</span
            >

            <div class="grades">
              <a class="grade grade-1">
                <i class="far fa-tired" aria-hidden="true"></i>
              </a>

              <a class="grade grade-2">
                <i class="far fa-frown" aria-hidden="true"></i>
              </a>

              <a class="grade grade-3">
                <i class="far fa-meh" aria-hidden="true"></i>
              </a>

              <a class="grade grade-4">
                <i class="far fa-smile" aria-hidden="true"></i>
              </a>
              <a class="grade grade-5"
                ><i class="far fa-laugh-beam" aria-hidden="true"></i>
              </a>
            </div>

            <span class="card-grade-title"
              >Em uma loja de eletrodomésticos, você prefere mais móveis ou
              eletrônicos?</span
            >

            <div class="booleans">
              <a class="bool"> Móveis </a>

              <a class="bool"> Eletrônicos </a>
            </div>

            <span class="card-grade-title"
              >Com base na sua experiência geral, você recomendaria a Magazine
              Luiza a amigos e familiares?</span
            >

            <div class="booleans">
              <a class="bool"> Sim </a>

              <a class="bool"> Não </a>
            </div>

            <button type="button" id="submit-survey" onclick="enviaAvaliacao()">
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
        </section>
      </div>
      <div id="mecanismo1" class="col-12 d-none mb-4">
        <section>
          <div class="card-container">
            <div class="card-title">
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

            <div class="img-container" style="height: 190px !important">
              <img
                loading="lazy"
                decoding="async"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  left: 0;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  object-fit: cover;
                  color: transparent;
                "
                sizes="100vw"
                src="./images/nubank.png"
                class="mod adidas"
              />
            </div>
            <span class="card-grade-title"
              >De 0 a 5, que nota você dá para o atendimento da Nubank?</span
            >

            <div class="grades">
              <a class="grade grade-1">
                <i class="far fa-tired" aria-hidden="true"></i>
              </a>

              <a class="grade grade-2">
                <i class="far fa-frown" aria-hidden="true"></i>
              </a>

              <a class="grade grade-3">
                <i class="far fa-meh" aria-hidden="true"></i>
              </a>

              <a class="grade grade-4">
                <i class="far fa-smile" aria-hidden="true"></i>
              </a>
              <a class="grade grade-5"
                ><i class="far fa-laugh-beam" aria-hidden="true"></i>
              </a>
            </div>

            <span class="card-grade-title"
              >Em um banco, você prefere um cartão com limite maior ou menores
              taxas?</span
            >

            <div class="booleans">
              <a class="bool"> Limite maior </a>

              <a class="bool"> Menores taxas </a>
            </div>

            <span class="card-grade-title"
              >Você faria um empréstimo nesse banco?</span
            >

            <div class="booleans">
              <a class="bool"> Sim </a>

              <a class="bool"> Não </a>
            </div>

            <button type="button" id="submit-survey" onclick="enviaAvaliacao()">
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
        </section>
      </div>
      <div id="mecanismo4" class="col-12 d-none mb-4">
        <section>
          <div class="card-container">
            <div class="card-title">
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

            <div class="img-container" style="height: 190px">
              <img
                loading="lazy"
                decoding="async"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  left: 0;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  object-fit: cover;
                  color: transparent;
                "
                sizes="100vw"
                src="./images/bk.webp"
                class="mod adidas"
              />
            </div>
            <span class="card-grade-title"
              >De 0 a 5, que nota você dá para o atendimento do Burger
              King?</span
            >

            <div class="grades">
              <a class="grade grade-1">
                <i class="far fa-tired" aria-hidden="true"></i>
              </a>

              <a class="grade grade-2">
                <i class="far fa-frown" aria-hidden="true"></i>
              </a>

              <a class="grade grade-3">
                <i class="far fa-meh" aria-hidden="true"></i>
              </a>

              <a class="grade grade-4">
                <i class="far fa-smile" aria-hidden="true"></i>
              </a>
              <a class="grade grade-5"
                ><i class="far fa-laugh-beam" aria-hidden="true"></i>
              </a>
            </div>

            <span class="card-grade-title"
              >Em uma rede de fast-food, você prefere delivery ou consumir no
              local?</span
            >

            <div class="booleans">
              <a class="bool"> Delivery </a>

              <a class="bool"> No local </a>
            </div>

            <span class="card-grade-title"
              >Na hora de optar por um fast-food, o Burger King é uma das suas
              opções?</span
            >

            <div class="booleans">
              <a class="bool"> Sim </a>

              <a class="bool"> Não </a>
            </div>

            <button type="button" id="submit-survey" onclick="enviaAvaliacao()">
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
        </section>
      </div>
      <div id="mecanismo3" class="col-12 d-none mb-4">
        <section>
          <div class="card-container">
            <div class="card-title">
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

            <div class="img-container" style="height: 170px">
              <img
                loading="lazy"
                decoding="async"
                style="
                  position: absolute;
                  width: 100%;
                  left: 0;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  object-fit: cover;
                  color: transparent;
                "
                sizes="100vw"
                src="./images/bradesco.png"
                class="mod adidas"
              />
            </div>
            <span class="card-grade-title"
              >De 0 a 5, que nota você dá para o atendimento do Bradesco?</span
            >

            <div class="grades">
              <a class="grade grade-1">
                <i class="far fa-tired" aria-hidden="true"></i>
              </a>

              <a class="grade grade-2">
                <i class="far fa-frown" aria-hidden="true"></i>
              </a>

              <a class="grade grade-3">
                <i class="far fa-meh" aria-hidden="true"></i>
              </a>

              <a class="grade grade-4">
                <i class="far fa-smile" aria-hidden="true"></i>
              </a>
              <a class="grade grade-5"
                ><i class="far fa-laugh-beam" aria-hidden="true"></i>
              </a>
            </div>

            <span class="card-grade-title"
              >Em um banco, você prefere um cartão com limite maior ou menores
              taxas?</span
            >

            <div class="booleans">
              <a class="bool"> Limite maior </a>

              <a class="bool"> Menores taxas </a>
            </div>

            <span class="card-grade-title"
              >Você faria um empréstimo nesse banco?</span
            >

            <div class="booleans">
              <a class="bool"> Sim </a>

              <a class="bool"> Não </a>
            </div>

            <button type="button" id="submit-survey" onclick="enviaAvaliacao()">
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
        </section>
      </div>
      <div id="saque1" class="col-12 d-none">
        <section>
          <div class="card-container">
            <div class="card-title">
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
              Saque
            </div>
            <span
              class="card-grade-title m-0 p-0"
              style="
                font-size: 1.4rem;
                font-weight: 800;
                font-family: 'Poppins';
              "
              >Só mais um passo...</span
            >
            <div class="loading-bar">
              <div class="loading-text">90%</div>
              <div class="loading-fill"></div>
            </div>
            <div class="img-container">
              <img
                loading="lazy"
                decoding="async"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  left: 0;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  object-fit: cover;
                  color: transparent;
                "
                sizes="100vw"
                src="./Avaliador_Premiado_files/saque.jpg"
                class="mod withdraw"
              />
            </div>
            <span
              class="card-grade-title m-0 p-0"
              style="
                font-size: 1.3rem;
                font-weight: 800;
                font-family: 'Poppins';
              "
              >Para você não ter nenhuma dúvida CLIQUE ABAIXO para
              ASSISTIR!</span
            >
            <span class="card-grade-title mt-0 pt-0"
              >Veja esta curta apresentação para saber como essa função
              funciona...</span
            >

            <button
              type="button"
              id="submit-survey"
              onclick="verVsl()"
              class="mt-0 pulse"
            >
              <span> Clique aqui para Assistir a Apresentação </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
  <footer id="footerContent" class="p-3 d-none" style="margin-top: 200px">
    <div class="text-center" style="font-size: 0.8rem">
      2023 - Todos os Direitos Reservados &copy;<br />
      <a style="font-size: 0.7rem">Termos e Uso Políticas de Privacidade</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainContent',
  setup() {}
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&amp;display=swap');

body {
  font-family: 'Hanken Grotesk', sans-serif;
}

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.btn-gray {
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.pulse {
  animation: pulse-animation 0.6s infinite alternate-reverse;
}

@keyframes pulse-animation {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.05);
  }
}

.loading-bar {
  width: 100%;
  max-width: 400px;
  height: 20px;
  /* background-color: #890404; */
  background-color: #1a6b1e;
  border-radius: 10px;
  position: relative;
}

.loading-text {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 14px;
  color: #fff;
}

.loading-fill {
  width: 0;
  height: 100%;
  background-color: #29b930;
  border-radius: 10px;
}

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

.loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 40px;
}

a {
  text-decoration: none !important;
}

nav.navbar {
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

nav.navbar img {
  object-fit: contain;
  width: 9rem;
  height: 3rem;
}

nav.navbar .balance-container {
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
  background: #388268;
  white-space: nowrap;
}

nav.navbar .balance-container .balance {
  display: flex;
  color: #ffffff;
  align-items: center;
}

nav.navbar .balance-container .balance i {
  margin-right: 0.75rem;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #42ff47;
}

nav.navbar .balance-container span {
  color: #ffffff;
  text-align: center;
}

nav.navbar.invisible {
  visibility: hidden !important;
  position: relative !important;
}

section {
  position: relative;
  padding: 0.75rem;
}

section .title-container {
  display: flex;
  position: relative;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
  color: #000000;
  font-size: 1.25rem;
  line-height: 1.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

section .title-container i {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

section .title-container .title {
  font-weight: 600;
}

section .card-container {
  display: flex;
  position: relative;
  padding: 1rem;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  gap: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.box-shadow {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

section .card-container .img-container {
  position: relative;
  width: 100%;
  height: 250px;
}

section .card-container .img-container img {
  border-radius: 0.5rem;
  border-width: 2px;
}

section .card-container .card-title {
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

section .card-container .card-grade-title {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.9rem;
  letter-spacing: normal;
  line-height: 1.2em;
  font-weight: bold;
  color: rgb(71, 85, 105);
  text-align: center;
  margin-top: 0.8rem;
}

section .card-container .grades {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.5rem;
}

section .card-container .grades.disabled {
  pointer-events: none;
}

section .card-container .grades .grade {
  display: flex;
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

section .card-container .grades .grade i {
  pointer-events: none;
}

section .card-container .grades .grade span {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  color: #ffffff;
  font-weight: 800;
  letter-spacing: -0.025em;
}

section .card-container .grades .grade-1 {
  background: rgb(185, 28, 28);
}

section .card-container .grades .grade-2 {
  background: rgb(194, 65, 12);
}

section .card-container .grades .grade-3 {
  background: rgb(202, 138, 4);
}

section .card-container .grades .grade-4 {
  background: rgb(101, 163, 13);
}

section .card-container .grades .grade-5 {
  background: rgb(13, 148, 136);
}

a {
  cursor: pointer !important;
}

.presell-headline {
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.presell-headline .card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.presell-headline .alert {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #388268;
  color: white;
  font-size: 0.8rem;
  width: 100%;
  border-radius: 10px;
  padding: 0 1rem;
  box-shadow: 0 10px 15px -3px rgba(56, 130, 104, 0.4);
}

.presell-headline .card-container h1 {
  line-height: 1.2em;
  color: #388268;
  margin: 5px 0;
}

.presell-headline .card-container span {
  font-size: 1.1rem;
  line-height: 1.2em;
}

.presell-headline .card-container h2 {
  font-size: 1rem;
  line-height: 1.2em;
  color: rgb(71, 85, 105);
}

.presell-headline .card-container h5 {
  font-size: 1rem;
  line-height: 1.2em;
  font-weight: 700;
  margin-top: 0rem;
  margin-bottom: 0.8rem;
}

.presell-headline .card-container a {
  font-size: 1.6rem;
  line-height: 1.2em;
  font-weight: 800;
  margin-top: 0rem;
  color: white;
  background-color: #00ac05;
  padding: 0.6rem 1.4rem;
  border-radius: 0.8rem;
  box-shadow: 0px 8px 10px 0px #00ac0677;
  margin-bottom: 0.8rem;
}

.quiz-grid span {
  margin: 0 10px;
  color: rgb(71, 85, 105);
  opacity: 0.5;
}

.quiz-grid button {
  aspect-ratio: 1/1;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.grade.clicked {
  filter: brightness(125%);
  transform: scale(1.1);
}

.booleans {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.booleans.disabled {
  pointer-events: none;
}

.booleans .bool {
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

.bool.clicked {
  background-image: linear-gradient(
    to right,
    rgb(56, 130, 104),
    rgb(77, 132, 113)
  );
  color: white;
  transform: scale(1.05);
}

input.input {
  width: 100%;
  border: none;
  background-color: rgb(226, 232, 240);
  font-size: 0.9rem;
  border-radius: 0.25rem;
  padding: 0.8rem;
  font-weight: bold;
  font-family: 'Hanken Grotesk', sans-serif;
  color: rgb(51, 65, 85);
}

#submit-survey {
  width: 100%;
  border: 0;
  background-image: linear-gradient(
    to right,
    rgb(56, 130, 104),
    rgb(77, 132, 113)
  );
  padding: 0.7rem 0;
  border-radius: 0.4rem;
  color: white;
  font-weight: 600;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 0.9rem;
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  box-shadow: 0 10px 15px -3px rgba(56, 130, 104, 0.4);
}

.checkmark-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
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
  /* animation: checkmark 5.6s cubic-bezier(0.42, 0, 0.275, 1.155) both; */
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

.modal-text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.modal-text h1 {
  font-size: 1.2rem;
  color: rgb(51, 65, 85);
  margin: 0;
  margin-bottom: 15px;
}

.modal-text h2 {
  font-size: 0.9rem;
  color: rgba(51, 65, 85, 0.7);
  text-align: center;
  margin: 0;
  margin-bottom: 15px;
}

.modal-text a {
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #388268;
  padding: 0.6rem 1rem;
  width: max-content;
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 1.4rem;
  gap: 5px;
  border-radius: 10px;
  animation: pulse 1s ease alternate infinite;
}

.popupBank {
  display: flex;
  flex-direction: column;
  padding: 3%;
  width: 90%;
  margin: 2% 5%;
  background-color: rgba(192, 192, 192, 0.9);
  border-radius: 20px;
  position: fixed;
  top: -100%; /* Inicialmente oculto no topo da tela */
  transition: top 0.5s ease;
  z-index: 9999;
}

.popupBank img {
  width: 20px;
  border-radius: 2px;
  margin: 0;
}

.popupBank__header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
}

.popupBank__header p {
  margin: 3px;
}

.popupBank__main {
  display: flex;
  flex-direction: column;
}

.popupBank__main__title {
  margin: 0;
  font-weight: 1.2rem;
  font-weight: bold;
}

.popupBank__main__desc {
  margin: 0;
}
</style>
