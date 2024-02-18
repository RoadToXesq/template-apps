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
                readonly=""
                v-model="qrCodeCopyCode"
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
                <div class="mx-auto mt-4" v-if="qrCodeBase64">
                  <img :src="qrCodeBase64" width="300" height="300" />
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

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
  name: 'Pix',
  props: {
    payerData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const qrCodeBase64 = ref('');
    const qrCodeCopyCode = ref('');

    onMounted(async () => {
      const parsedCpf = props.payerData.identification.replace(/[^\d]/g, '');

      const payload = {
        transaction_amount: 67.89,
        description: 'ebook',
        payment_method_id: 'pix',
        payer: {
          email: props.payerData.email,
          first_name: props.payerData.name,
          identification: {
            type: 'CPF',
            number: parsedCpf,
          },
        },
        external_reference: '123456789',
        notification_url:
          'https://play.svix.com/in/e_q3XbAuZPlwknoIOeEMwbcgbDb2B/',
      };

      const headers = {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization:
          'Bearer APP_USR-1486813874890350-123016-b8a7a3ae6e1df721ce5e8dc0fb13935a-193789381',
        'X-Idempotency-Key': 'SOME_UNIQUE_VALUE',
      };

      const response = await axios.post(
        'https://api.mercadopago.com/v1/payments',
        payload,
        {
          headers: headers,
        }
      );

      const qrCodeBase64Hash =
        response?.data?.point_of_interaction?.transaction_data
          ?.qr_code_base64 ?? '';

      qrCodeBase64.value = `data:image/png;base64,${qrCodeBase64Hash}`;
      qrCodeCopyCode.value =
        response?.data?.point_of_interaction?.transaction_data?.qr_code ?? '';
    });

    const selectPix = () => {
      $('#inputPIXcode').select();
    };

    const copyPix = (e) => {
      var $temp = $('<input>');
      $('body').append($temp);
      $temp.val(qrCodeCopyCode.value).select();
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
        var docWidth = $(document).width();

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
      qrCodeBase64,
      qrCodeCopyCode,
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
