<template>
  <main class="main-obrigado pix-obrigado">
    <div class="container-lg">
      <section class="checkout checkout-obrigado mt-4">
        <div
          class="checkout-div px-4 px-lg-5 pt-4 mb-lg-4 shadow-lg text-center"
        >
          <div class="position-relative" id="overlay-container">
            <div id="obrigado-overlay" style="filter: none">
              <h3
                class="obrigado-h2 mt-3 mb-4"
                style="color: var(--bs-gray-900)"
              >
                Siga os passos para pagar:
              </h3>

              <p class="obrigado-text fs-base">
                <span class="pix-step-circle">1</span>
                Copie o código <b>PIX:</b>
              </p>
              <input
                id="inputPIXcode"
                inputmode="none"
                class="form-control form-control-sm fs-sm mb-2"
                style="height: auto !important"
                @click="selectPix"
              />

              <a
                id="copyPIXcode"
                @click="copyPix"
                href="javascript:void(0)"
                class="btn fs-sm btn-sm btn-pix px-4 px-lg-5"
              >
                <i class="bx bx-copy me-2" style="transform: scaleY(1.2)"></i>
                Copiar código PIX</a
              >

              <!-- <button
                  id="mobileToggleQRcode"
                  class="btn btn-sm fs-sm btn-outline-info d-block mx-auto mt-2 d-md-none"
                >
                  <span id="QRCodeIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16" >
                      <path d="M2 2h2v2H2V2Z"></path>
                      <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z"></path>
                      <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z"></path>
                      <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z"></path>
                      <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z"></path>
                      </svg>
                    </span>
                  Ver QR Code
                </button> -->

              <div class="d-flex justify-content-center">
                <div class="mx-auto mt-4">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="200.000000pt"
                    height="200.000000pt"
                    viewBox="0 0 600.000000 600.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M190 5135 l0 -675 675 0 675 0 0 675 0 675 -675 0 -675 0 0 -675z
m1160 0 l0 -485 -485 0 -485 0 0 485 0 485 485 0 485 0 0 -485z"
                      />
                      <path
                        d="M580 5130 l0 -290 290 0 290 0 0 290 0 290 -290 0 -290 0 0 -290z"
                      />
                      <path
                        d="M1930 5615 l0 -195 -95 0 -95 0 0 -580 0 -580 95 0 95 0 0 195 0 195
95 0 95 0 0 -95 0 -95 100 0 100 0 0 -100 0 -100 -100 0 -100 0 0 -95 0 -95
100 0 100 0 0 95 0 95 95 0 95 0 0 100 0 100 95 0 95 0 0 290 0 290 -95 0 -95
0 0 190 0 190 95 0 95 0 0 -95 0 -95 100 0 100 0 0 -95 0 -95 95 0 95 0 0
-100 0 -100 580 0 580 0 0 100 0 100 -95 0 -95 0 0 95 0 95 -95 0 -95 0 0 -95
0 -95 -100 0 -100 0 0 95 0 95 -95 0 -95 0 0 -95 0 -95 -95 0 -95 0 0 190 0
190 290 0 290 0 0 100 0 100 95 0 95 0 0 -100 0 -100 95 0 95 0 0 195 0 195
-190 0 -190 0 0 -95 0 -95 -290 0 -290 0 0 95 0 95 -295 0 -295 0 0 -95 0 -95
-95 0 -95 0 0 95 0 95 -95 0 -95 0 0 -95 0 -95 -100 0 -100 0 0 95 0 95 -95 0
-95 0 0 -195z m390 -385 l0 -190 95 0 95 0 0 -290 0 -290 -95 0 -95 0 0 290 0
290 -100 0 -100 0 0 -100 0 -100 -95 0 -95 0 0 195 0 195 95 0 95 0 0 95 0 95
100 0 100 0 0 -190z m770 95 l0 -95 -95 0 -95 0 0 95 0 95 95 0 95 0 0 -95z"
                      />
                      <path
                        d="M4450 5135 l0 -675 675 0 675 0 0 675 0 675 -675 0 -675 0 0 -675z
m1160 0 l0 -485 -485 0 -485 0 0 485 0 485 485 0 485 0 0 -485z"
                      />
                      <path
                        d="M4830 5130 l0 -290 290 0 290 0 0 290 0 290 -290 0 -290 0 0 -290z"
                      />
                      <path
                        d="M2900 4455 l0 -195 95 0 95 0 0 195 0 195 -95 0 -95 0 0 -195z"
                      />
                      <path
                        d="M3290 4360 l0 -290 -295 0 -295 0 0 -290 0 -290 100 0 100 0 0 -95 0
-95 95 0 95 0 0 -100 0 -100 195 0 195 0 0 -95 0 -95 -95 0 -95 0 0 -100 0
-100 95 0 95 0 0 -95 0 -95 95 0 95 0 0 -95 0 -95 -95 0 -95 0 0 -100 0 -100
195 0 195 0 0 195 0 195 -100 0 -100 0 0 95 0 95 100 0 100 0 0 100 0 100
-100 0 -100 0 0 95 0 95 195 0 195 0 0 -95 0 -95 95 0 95 0 0 -100 0 -100 290
0 290 0 0 100 0 100 -290 0 -290 0 0 485 0 485 390 0 390 0 0 95 0 95 190 0
190 0 0 95 0 95 -480 0 -480 0 0 -95 0 -95 -100 0 -100 0 0 290 0 290 -95 0
-95 0 0 -290 0 -290 -195 0 -195 0 0 95 0 95 -95 0 -95 0 0 195 0 195 -95 0
-95 0 0 -290z m190 -385 l0 -95 -95 0 -95 0 0 95 0 95 95 0 95 0 0 -95z m580
-385 l0 -290 -95 0 -95 0 0 95 0 95 -195 0 -195 0 0 -95 0 -95 -95 0 -95 0 0
190 0 190 190 0 190 0 0 100 0 100 195 0 195 0 0 -290z m-970 -5 l0 -95 -95 0
-95 0 0 95 0 95 95 0 95 0 0 -95z m580 -775 l0 -100 -95 0 -95 0 0 100 0 100
95 0 95 0 0 -100z"
                      />
                      <path
                        d="M3670 4555 l0 -95 100 0 100 0 0 95 0 95 -100 0 -100 0 0 -95z"
                      />
                      <path
                        d="M190 4165 l0 -95 95 0 95 0 0 95 0 95 -95 0 -95 0 0 -95z"
                      />
                      <path
                        d="M580 3875 l0 -385 95 0 95 0 0 -95 0 -95 -95 0 -95 0 0 -100 0 -100
-100 0 -100 0 0 390 0 390 -95 0 -95 0 0 -390 0 -390 95 0 95 0 0 -95 0 -95
-95 0 -95 0 0 -580 0 -580 95 0 95 0 0 290 0 290 195 0 195 0 0 -195 0 -195
195 0 195 0 0 -95 0 -95 190 0 190 0 0 95 0 95 -95 0 -95 0 0 95 0 95 95 0 95
0 0 100 0 100 100 0 100 0 0 -195 0 -195 95 0 95 0 0 195 0 195 195 0 195 0 0
95 0 95 190 0 190 0 0 -195 0 -195 -290 0 -290 0 0 -190 0 -190 -190 0 -190 0
0 -100 0 -100 290 0 290 0 0 100 0 100 190 0 190 0 0 95 0 95 100 0 100 0 0
-95 0 -95 195 0 195 0 0 -100 0 -100 -100 0 -100 0 0 -95 0 -95 -95 0 -95 0 0
-95 0 -95 95 0 95 0 0 -100 0 -100 -195 0 -195 0 0 -95 0 -95 -190 0 -190 0 0
95 0 95 95 0 95 0 0 195 0 195 -95 0 -95 0 0 -95 0 -95 -100 0 -100 0 0 -100
0 -100 -95 0 -95 0 0 195 0 195 -95 0 -95 0 0 -385 0 -385 95 0 95 0 0 95 0
95 195 0 195 0 0 -95 0 -95 95 0 95 0 0 -100 0 -100 -95 0 -95 0 0 -95 0 -95
290 0 290 0 0 95 0 95 -100 0 -100 0 0 195 0 195 100 0 100 0 0 -95 0 -95 195
0 195 0 0 -100 0 -100 95 0 95 0 0 -95 0 -95 290 0 290 0 0 95 0 95 195 0 195
0 0 -95 0 -95 480 0 480 0 0 95 0 95 100 0 100 0 0 195 0 195 95 0 95 0 0 95
0 95 -95 0 -95 0 0 195 0 195 -100 0 -100 0 0 95 0 95 195 0 195 0 0 195 0
195 -95 0 -95 0 0 95 0 95 -100 0 -100 0 0 290 0 290 100 0 100 0 0 100 0 100
-100 0 -100 0 0 290 0 290 100 0 100 0 0 95 0 95 -100 0 -100 0 0 -95 0 -95
-190 0 -190 0 0 95 0 95 -100 0 -100 0 0 -95 0 -95 -95 0 -95 0 0 -95 0 -95
-95 0 -95 0 0 -100 0 -100 290 0 290 0 0 100 0 100 95 0 95 0 0 -195 0 -195
95 0 95 0 0 -100 0 -100 -95 0 -95 0 0 -95 0 -95 -195 0 -195 0 0 -95 0 -95
-95 0 -95 0 0 95 0 95 -290 0 -290 0 0 -195 0 -195 290 0 290 0 0 -95 0 -95
-290 0 -290 0 0 -195 0 -195 -95 0 -95 0 0 100 0 100 -100 0 -100 0 0 95 0 95
-385 0 -385 0 0 95 0 95 195 0 195 0 0 195 0 195 -295 0 -295 0 0 195 0 195
-190 0 -190 0 0 95 0 95 -100 0 -100 0 0 -95 0 -95 100 0 100 0 0 -100 0 -100
-100 0 -100 0 0 -95 0 -95 -95 0 -95 0 0 290 0 290 -95 0 -95 0 0 100 0 100
95 0 95 0 0 95 0 95 -95 0 -95 0 0 -95 0 -95 -100 0 -100 0 0 95 0 95 -95 0
-95 0 0 -95 0 -95 95 0 95 0 0 -100 0 -100 -190 0 -190 0 0 100 0 100 -100 0
-100 0 0 95 0 95 100 0 100 0 0 95 0 95 480 0 480 0 0 -95 0 -95 195 0 195 0
0 95 0 95 -95 0 -95 0 0 100 0 100 -195 0 -195 0 0 95 0 95 -195 0 -195 0 0
95 0 95 -480 0 -480 0 0 -385z m580 0 l0 -195 -100 0 -100 0 0 195 0 195 100
0 100 0 0 -195z m380 100 l0 -95 -95 0 -95 0 0 95 0 95 95 0 95 0 0 -95z
m-580 -775 l0 -100 -95 0 -95 0 0 100 0 100 95 0 95 0 0 -100z m-380 -390 l0
-100 -100 0 -100 0 0 100 0 100 100 0 100 0 0 -100z m1160 -95 l0 -195 95 0
95 0 0 -95 0 -95 -95 0 -95 0 0 95 0 95 -100 0 -100 0 0 -95 0 -95 -385 0
-385 0 0 190 0 190 195 0 195 0 0 -95 0 -95 190 0 190 0 0 95 0 95 -95 0 -95
0 0 100 0 100 195 0 195 0 0 -195z m3290 -485 l0 -100 190 0 190 0 0 -95 0
-95 -95 0 -95 0 0 -95 0 -95 -95 0 -95 0 0 190 0 190 -100 0 -100 0 0 100 0
100 100 0 100 0 0 -100z m-200 -770 l0 -290 -290 0 -290 0 0 290 0 290 290 0
290 0 0 -290z m-1350 -5 l0 -95 95 0 95 0 0 95 0 95 100 0 100 0 0 -190 0
-190 95 0 95 0 0 -100 0 -100 290 0 290 0 0 -95 0 -95 -95 0 -95 0 0 -95 0
-95 95 0 95 0 0 -100 0 -100 -95 0 -95 0 0 100 0 100 -195 0 -195 0 0 95 0 95
-95 0 -95 0 0 -195 0 -195 -195 0 -195 0 0 100 0 100 -95 0 -95 0 0 95 0 95
-100 0 -100 0 0 95 0 95 100 0 100 0 0 100 0 100 -100 0 -100 0 0 95 0 95 100
0 100 0 0 95 0 95 95 0 95 0 0 -95z m1930 -190 l0 -95 -95 0 -95 0 0 95 0 95
95 0 95 0 0 -95z m-380 -390 l0 -95 -100 0 -100 0 0 95 0 95 100 0 100 0 0
-95z m380 0 l0 -95 -95 0 -95 0 0 95 0 95 95 0 95 0 0 -95z m-380 -385 l0
-100 -100 0 -100 0 0 100 0 100 100 0 100 0 0 -100z m380 0 l0 -100 -95 0 -95
0 0 100 0 100 95 0 95 0 0 -100z"
                      />
                      <path
                        d="M4450 1455 l0 -95 95 0 95 0 0 95 0 95 -95 0 -95 0 0 -95z"
                      />
                      <path
                        d="M3480 1070 l0 -100 -95 0 -95 0 0 -95 0 -95 290 0 290 0 0 95 0 95
-100 0 -100 0 0 100 0 100 -95 0 -95 0 0 -100z"
                      />
                      <path
                        d="M5610 3975 l0 -95 95 0 95 0 0 95 0 95 -95 0 -95 0 0 -95z"
                      />
                      <path
                        d="M2510 3200 l0 -100 95 0 95 0 0 100 0 100 -95 0 -95 0 0 -100z"
                      />
                      <path
                        d="M5610 3200 l0 -100 95 0 95 0 0 100 0 100 -95 0 -95 0 0 -100z"
                      />
                      <path
                        d="M2900 2810 l0 -100 95 0 95 0 0 100 0 100 -95 0 -95 0 0 -100z"
                      />
                      <path
                        d="M5610 2425 l0 -95 95 0 95 0 0 95 0 95 -95 0 -95 0 0 -95z"
                      />
                      <path
                        d="M190 875 l0 -675 675 0 675 0 0 675 0 675 -675 0 -675 0 0 -675z
m1160 0 l0 -485 -485 0 -485 0 0 485 0 485 485 0 485 0 0 -485z"
                      />
                      <path
                        d="M580 880 l0 -290 290 0 290 0 0 290 0 290 -290 0 -290 0 0 -290z"
                      />
                      <path
                        d="M1740 295 l0 -95 95 0 95 0 0 95 0 95 -95 0 -95 0 0 -95z"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              <p class="obrigado-text fs-base mt-3">
                <span class="pix-step-circle">2</span>
                Abra o aplicativo do seu banco favorito
              </p>

              <p class="obrigado-text fs-base mt-3">
                <span class="pix-step-circle">3</span>
                Na seção de PIX, selecione a opção "<b>Pix Copia e Cola</b>"
              </p>

              <p class="obrigado-text fs-base mt-3">
                <span class="pix-step-circle">4</span>
                Cole o código
              </p>

              <p class="obrigado-text fs-base mt-3">
                <span class="pix-step-circle">5</span>
                Confirme o pagamento
              </p>

              <!-- <button
                id="verifyPayment"
                href="javascript:void(0)"
                class="btn btn-success fw-bold mt-3"
              >
                <i class="bx bx-cart me-2" id="paymentCart"></i>
                <span
                  class="spinner-border spinner-border-sm me-2"
                  style="display: none"
                  id="paymentSpinner"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span id="verifyPaymentText">Já fiz o pagamento</span>
              </button> -->
            </div>
            <div
              id="pay-loader"
              style="background: rgb(255, 255, 255); display: none"
            >
              <div
                class="spinner-border"
                style="width: 3.5rem; height: 3.5rem"
                role="status"
              ></div>
              <h5 class="mt-4 pt-2 mb-2">Estamos gerando o seu PIX...</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import $ from 'jquery';
import { onMounted, ref } from 'vue';

export default {
  name: 'Pix',
  setup() {
    const pixCode = ref('sexo');

    onMounted(() => {
      $('#inputPIXcode').val(pixCode.value);
    });

    const selectPix = () => {
      $('#inputPIXcode').select();
    };

    const copyPix = (e: any) => {
      var $temp = $('<input>');
      $('body').append($temp);
      $temp.val(pixCode.value).select();
      document.execCommand('copy');
      $temp.remove();
      $('#inputPIXcode').select();

      if ($('.tooltip-copy:visible').length == 0) {
        $(
          '<p class="tooltip-copy"><i class="bx bx-check-circle me-1"></i>Código copiado!</p>'
        )
          .fadeIn('slow')
          .appendTo('body')
          .delay(2000)
          .fadeOut(500);
        var mousex = e.pageX;
        var mousey = e.pageY;

        $('.tooltip-copy').width();
        var docWidth = $(document).width() ?? 0;

        if (docWidth < 600) {
          if (mousex > docWidth / 2) {
            $('.tooltip-copy').css({
              top: mousey,
              left: mousex / 2,
            });
          } else {
            $('.tooltip-copy').css({
              top: mousey,
              left: docWidth / mousex,
            });
          }
        } else {
          $('.tooltip-copy').css({
            top: mousey,
            left: mousex,
          });
        }
        // Remove tooltip from DOM
        setTimeout(function () {
          $('.tooltip-copy').remove();
        }, 5000);
      }
    };

    return {
      copyPix,
      selectPix,
    };
  },
};
</script>

<style scoped>
.btn:not([class^='btn-outline-']):not([class*=' btn-outline-']):not(
    .btn-secondary
  ):not(.btn-light):not(.btn-link) {
  color: #fff;
  background-color: #3166e0 !important;
}
</style>
