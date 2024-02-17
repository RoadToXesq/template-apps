<template>
  <div
    style="
      height: 18vh;
      background-image: url('./page1.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-attachment: fixed;
    "
  >
  </div>
  <div
    ref="modalRef"
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div class="fw-medium my-2"> Saldo atualizado! </div>
          <div> Você recebeu: </div>
          <div class="fw-bold fs-3">
            {{
              Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(valorRecebido)
            }}
          </div>
        </div></div
      >
    </div>
  </div>
  <div class="row text-center align-items-center mx-2" v-if="showSaldo">
    <div class="col fw-bold fs-3">
      <div style="color: #3b5998" class="fw-bold">Saldo:</div>
      {{
        Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(saldo)
      }}
    </div>
    <div class="col-7">
      <button
        class="btn fw-bold fs-6"
        style="
          background: rgb(0, 202, 118);
          background: linear-gradient(
            180deg,
            rgba(0, 202, 118, 1) 0%,
            rgba(0, 231, 65, 1) 100%
          );
          color: white;
        "
      >
        Avalie anúncios para o Facebook
      </button>
    </div>
  </div>
  <div v-if="comecar">
    <div class="text-center align-items-center">
      <div
        class="col"
        style="
          margin-top: 30px;
          height: 23vh;
          background-image: url('./presente.png');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        "
      />
    </div>
    <div class="text-center fs-5" style="font-weight: 600">
      Você vai ganhar comissões para avaliar anúncios no Facebook!
    </div>
    <div style="margin-top: 20px" class="text-center fw-bold fs-3">
      Aproveite, você já ganhou <br />
      R$ 100,00!
    </div>
    <div style="margin-top: 20px" class="text-center fw-bold fs-3">
      Faça 4 avaliações e realize <br />
      seu primeiro saque!
    </div>
    <div class="text-center align-items-center">
      <div class="col">
        <button
          @click="
            async () => {
              setShowLoader(true);
              await sleep(1);
              setShowLoader(false);
              comecar = false;
              avaliando = true;
              ad1 = true;
            }
          "
          class="btn mt-4 fs-4"
          style="background-color: #0167fa; color: white"
        >
          COMEÇAR
        </button>
      </div>
    </div>
  </div>
  <div v-else-if="avaliando">
    <div class="text-center align-items-center" v-show="ad1">
      <div
        class="col"
        style="
          height: 40vh;
          background-image: url('./ad_1.png');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        "
      />
    </div>
    <div class="text-center align-items-center" v-show="ad2">
      <div
        class="col"
        style="
          height: 40vh;
          background-image: url('./ad_2.png');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        "
      />
    </div>
    <div class="text-center align-items-center" v-show="ad3">
      <div
        class="col"
        style="
          height: 40vh;
          background-image: url('./ad_3.png');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        "
      />
    </div>
    <div class="text-center align-items-center" v-show="ad4">
      <div
        class="col"
        style="
          height: 40vh;
          background-image: url('./ad_4.png');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        "
      />
    </div>
    <div
      class="row justify-content-center text-center"
      v-show="avaliando && (ad1 || ad2 || ad3 || ad4)"
    >
      <div class="col-5">
        <button
          @click="votar"
          class="btn fs-4"
          style="background-color: #0167fa; padding: 5px 60px"
        >
          👎
        </button>
      </div>
      <div class="col-5">
        <button
          @click="votar"
          class="btn fs-4"
          style="background-color: #0167fa; padding: 5px 60px"
        >
          👍
        </button>
      </div>
    </div>
  </div>
  <!-- <div v-else-if="pix">
    <div
      class="row text-center align-items-center mt-4"
      style="
        background-color: rgb(221, 221, 221);
        padding-top: 40px;
        padding-bottom: 40px;
        margin: 0 20px 0 20px;
        border-radius: 20px;
      "
    >
      <div class="mb-3 fw-medium">Parabéns pela conclusão!</div>
      <div class="col-3" />
      <div
        class="mb-3 p-3 col-6 text-white fw-medium"
        style="background-color: #0167fa; border-radius: 10px; font-size: 14px"
      >
        SALDO TOTAL:
        {{
          Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(saldo)
        }}
      </div>
      <div class="p-2 col-3" />
      <div>Por gentileza, coloque seu PIX abaixo:</div>
      <div class="input-group mb-3 px-5 pt-3">
        <input
          v-model="chavePix"
          type="number"
          class="form-control"
          placeholder="CPF ou DDD+Celular"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div
        class="fw-bold mb-3"
        style="line-height: 1.4; font-family: 'Montserrat'"
      >
        <label class="text-danger">Atenção:</label> Como forma de pré-validação,
        será depositado o valor de
        <label class="text-success">R$ 0,10</label> em sua conta.
      </div>

      <div class="col-1" />
      <div
        class="col-10 fw-bold mb-3"
        style="line-height: 1.4; font-family: 'Montserrat'"
      >
        Certifique-se de inserir corretamente a chave PIX, pois é por meio dela
        que você receberá o valor acumulado e os futuros pagamentos relacionados
        à Facebook Safespace®.
      </div>
      <div class="col-1" />
      <div class="d-grid gap-2 col-10 mx-auto">
        <button
          :disabled="disableButton"
          @click="receber"
          class="btn btn-block btn-success"
          style="background-color: #05a32f"
        >
          RECEBER
        </button>
      </div>
    </div>
  </div> -->
  <div v-else-if="pixFeito">
    <!-- <div
      class="row text-center align-items-center mt-4"
      style="
        background-color: rgb(221, 221, 221);
        padding-top: 40px;
        padding-bottom: 40px;
        margin: 0 20px 0 20px;
        border-radius: 20px;
      "
    >
      <div class="mb-3 fw-bold">✅ Conta validada!</div>
      <div class="mb- fw-bold">
        Enviamos <label class="text-success">R$ 0,10</label> para seu pix,
      </div>
      <div>por favor, confira em seu extrato.</div>
    </div> -->
    <div
      class="row text-center align-items-center mt-5"
      style="
        background-color: rgb(221, 221, 221);
        padding-top: 40px;
        padding-bottom: 40px;
        margin: 0 20px 0 20px;
        border-radius: 20px;
      "
    >
      <div class="mb-3 fs-4 fw-bold">Saldo a receber:</div>
      <div class="col-3"></div>
      <div
        class="mb-3 p-3 col-6 text-white fw-medium"
        style="background-color: #0167fa; border-radius: 10px; font-size: 20px"
      >
        SALDO TOTAL:
        <NumberAnimation
          ref="number1"
          :from="0"
          :to="saldo"
          :format="moneyFormat"
          :duration="3"
          autoplay
          easing="linear"
        />
      </div>
      <div style="line-height: 1.3; font-size: 17px">
        Para realizar o saque completo e ter acesso ao
        <label class="fw-bold">Facebook Safespace®</label>, assista a um
        <label class="fw-bold" style="color: #0167fa">
          vídeo de 4 minutos!
        </label>
      </div>
      <div class="pt-4">
        <button
          @click="toVsl"
          class="btn text-white fs-5 px-4 py-2 pulsante"
          style="background-color: #0167fa; border-radius: 10px"
        >
          ASSISTIR VÍDEO
        </button>
      </div>
    </div>
  </div>
  <div v-else-if="vsl">
    <div class="mt-3 mb-3 text-center">
      <label class="fw-bold" style="font-size: 16px">
        Assista o vídeo abaixo para
        <label style="color: #0167fa">liberar</label> o acesso!
      </label>
    </div>
    <div
      id="vid_65cadffe42b4b200085ede3b"
      style="position: relative; width: 100%; padding: 56.25% 0 0"
      ><img
        id="thumb_65cadffe42b4b200085ede3b"
        src="https://images.converteai.net/df0ecd4c-bfd1-4999-ae63-dc23cfdbc59d/players/65cadffe42b4b200085ede3b/thumbnail.jpg"
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        " /><div
        id="backdrop_65cadffe42b4b200085ede3b"
        style="
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
        "
      ></div
    ></div>
    <div>
      <img src="/prova_social.png" width="100%" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import { setShowLoader } from '@/shared/loader';
import { sleep } from '@/shared/sleep';
import NumberAnimation from 'vue-number-animation';

export default {
  name: 'MainContent',
  components: {
    NumberAnimation,
  },
  setup() {
    const vsl = ref(false);
    const showSaldo = ref(true);
    const pix = ref(false);
    const saldo = ref(100);
    const comecar = ref(true);
    const chavePix = ref('');
    const pixFeito = ref(false);
    const isLoading = ref(false);
    const avaliando = ref(false);
    const votoCounter = ref(0);
    const valorRecebido = ref(0);
    const myIframe = ref();

    const ad1 = ref(false);
    const ad2 = ref(false);
    const ad3 = ref(false);
    const ad4 = ref(false);

    const toVsl = () => {
      var s = document.createElement('script');
      (s.src =
        'https://scripts.converteai.net/df0ecd4c-bfd1-4999-ae63-dc23cfdbc59d/players/65cadffe42b4b200085ede3b/player.js'),
        (s.async = !0),
        document.head.appendChild(s);

      vsl.value = true;
      pixFeito.value = false;
      showSaldo.value = false;
    };

    const moneyFormat = (value: number) => {
      return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);
    };

    const disableButton = computed(() => {
      return !chavePix.value || isLoading.value;
    });

    const gerarNumeroDecimal = (min: number, max: number): number => {
      return min + Math.random() * (max - min);
    };

    const receber = async () => {
      isLoading.value = true;
    };

    const votar = async () => {
      setShowLoader(true);
      await sleep(1.5);
      setShowLoader(false);

      votoCounter.value++;

      if (votoCounter.value === 1) {
        ad1.value = false;
        ad2.value = true;
      }

      if (votoCounter.value === 2) {
        ad2.value = false;
        ad3.value = true;
      }

      if (votoCounter.value === 3) {
        ad3.value = false;
        ad4.value = true;
      }

      if (votoCounter.value === 4) {
        // pix.value = true;
        pixFeito.value = true;
        ad4.value = false;
        avaliando.value = false;
      }

      valorRecebido.value = gerarNumeroDecimal(10, 20);
      saldo.value += valorRecebido.value;
    };

    return {
      toVsl,
      vsl,
      pix,
      myIframe,
      saldo,
      votar,
      comecar,
      receber,
      chavePix,
      setShowLoader,
      pixFeito,
      avaliando,
      disableButton,
      valorRecebido,
      moneyFormat,
      showSaldo,
      ad1,
      ad2,
      ad3,
      ad4,
      sleep,
    };
  },
};
</script>

<style>
body {
  font-family: 'Poppins';
  line-height: 1;
}

.pulsante {
  animation: pulsar 1.5s infinite;
  /* Estilização adicional para o botão pode ser adicionada aqui */
  /* Exemplo: */
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

@keyframes pulsar {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
