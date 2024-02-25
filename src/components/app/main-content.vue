<template>
  <div id="__next">
    <div v-if="adv && !logged" class="container">
      <div
        style="position: fixed; top: 0px; right: 0px; left: 0px; z-index: 1030"
      >
        <img src="/menu.jpg" alt="" style="width: 100%; height: auto" />
      </div>
      <div class="row justify-content-center" style="padding-top: 80px">
        <div class="col-12 fs-2 fw-bold" style="color: #e63888">
          Feirão Limpa Nome 2024: <br />
          Atendimento Virtual da Serasa
        </div>
        <div class="col-12 mt-4 text-base">
          O presidente Luiz Inácio Lula da Silva (PT) afirmou nesta sexta-feira
          que o <label for="" class="fw-bold">Ferião Limpa Nome </label> já
          zerou a dívida de mais de 2 milhões de pessoas em três dias. O
          programa de renegociação de dívidas lançado pelo governo federal
          começou a valer na última sexta-feira (16/02/2024).
        </div>
        <div class="col-12 mt-3">
          <div style="padding: 56.25% 0 0 0; position: relative"
            ><iframe
              class="rounded"
              frameborder="0"
              allowfullscreen
              src="https://scripts.converteai.net/a109efc7-b7a9-44c6-b490-697409a191ef/players/65d26200c6528500078b9629/embed.html"
              id="ifr_65d26200c6528500078b9629"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              "
              referrerpolicy="origin"
            ></iframe
          ></div>
        </div>
        <div
          class="col-12 ps-3 mt-2 text-secondary fw-normal"
          style="font-size: 11px"
        >
          Presidente Lula falando sobre o 'Feirão Limpa Nome' — Fonte: Serasa
        </div>
        <div class="col-12 mt-2" style="color: #cccccc">
          <div style="border-bottom: 1px solid !important" />
        </div>
        <div class="col-12 mt-4 text-center d-grid">
          <button
            @click="toLogin"
            class="btn text-white fw-bold py-2"
            style="background-color: #e63888"
          >
            Consultar CPF
            <i class="ms-2 fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div class="col-12 mt-4 text-base">
          O <label class="fw-bold">Feirão Limpa Nome</label> está disponível nos
          canais digitais, e a negociação segue aberta e disponível até hoje
          <label class="fw-bold">23:59 de {{ currentDate }}</label
          >.
        </div>
        <div class="col-12 mt-3 text-center">
          <img
            src="/lulinha.png"
            class="rounded"
            style="width: 100%; height: auto"
          />
        </div>
        <div class="col-12 mt-4 fs-5 fw-bold" style="color: #e63888">
          Veja abaixo como participar:
        </div>
        <div class="col-12 mt-2 text-base">
          Clique em <label for="" class="fw-bold">"Consultar CPF"</label> e
          digite o seu CPF para acessar sua conta, em seguida, você irá escolher
          falar com uma atendente da Serasa. <br /><br />
          Ao final do atendimento, a equipe da
          <label for="" class="fw-bold">Serasa</label> encontrará o melhor
          acordo e você será direcionado para efetuar o pagamento.<br /><br />
          Caso opte pela opção do <label for="" class="fw-bold">PIX</label>, a
          efetivação é muito simples e rápida e seu nome ficará
          <label for="" class="fw-bold">limpo em até 2 horas!</label>
          Para pagar com o PIX, clique em
          <label for="" class="fw-bold">“Copiar chave PIX”</label> e cole no
          aplicativo da instituição bancária de sua preferência para
          prosseguir.<br /><br />
          Caso contrário selecione cartão e insira os dados normalmente, mas
          atenção, acordos pagos com cartão podem demorar até
          <label for="" class="fw-bold">7 dias para compensar</label> o débito
          das dívidas<br /><br />

          <label for="" class="fw-bold">
            Não perca tempo! Clique no botão abaixo e consulte seu acordo agora.
          </label>
        </div>
        <div class="col-12 mt-2" style="color: #cccccc">
          <div style="border-bottom: 1px solid !important" />
        </div>
        <div class="col-12 mt-4 text-center d-grid">
          <button
            @click="toLogin"
            class="btn text-white fw-bold py-2"
            style="background-color: #e63888"
          >
            Confira os acordos disponíveis
            <i class="ms-2 fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div class="col-12 mt-4 fs-5 fw-bold" style="color: #e63888">
          Saiba mais sobre o Feirão da Serasa:
        </div>
        <div class="col-12 mt-3 text-base">
          O feirão reúne 546 parceiros, como bancos, telefonia, varejo,
          universidades e outros segmentos que oferecem, segundo a Serasa, mais
          de 200 milhões de ofertas com descontos em dívidas atrasadas ou
          negativadas que podem ser negociadas em até três minutos. <br /><br />
          E agora a próxima história a ser contada pode ser sua! Agora em
          dezembro 68,39 milhões de pessoas estavam com o nome negativado,
          segundo o Mapa da Inadimplência e Negociação de Dívidas da Serasa.
        </div>
      </div>
      <div class="col-12 mt-4" style="color: #cccccc">
        <div style="border-bottom: 1px solid !important" />
      </div>
      <div class="col-12 mt-4 text-center">
        <img
          src="/info.png"
          class="rounded"
          style="width: 100%; height: auto"
        />
      </div>
      <div class="col-12 mt-4" style="color: #cccccc">
        <div style="border-bottom: 1px solid !important" />
      </div>
      <div class="col-12 mt-4 text-center d-grid">
        <button
          @click="toLogin"
          class="btn text-white fw-bold py-2"
          style="background-color: #e63888"
        >
          Consultar CPF
          <i class="ms-2 fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div class="col-12 mt-4 fs-5 fw-bold" style="color: #e63888">
        Negocie dívidas com as seguintes empresas:
      </div>
      <div class="col-12 mt-3 text-base">
        Bancos, financeiras, redes de telefonia, varejo, empresas de recuperação
        de crédito e outras.
      </div>
      <div class="col-12 text-center">
        <img
          src="/empresas.webp"
          class="rounded"
          style="width: 100%; height: auto"
        />
      </div>
      <div class="row">
        <img
          src="/footer_serasa.png"
          class="p-0"
          style="width: 100%; height: auto"
        />
      </div>
    </div>

    <div
      v-if="!adv && !logged"
      class="jsx-2555939233 jsx-198070795 jsx-3245007174 jsx-359316987 jsx-2521071326 jsx-1146511973 jsx-867263301 jsx-2446720300 jsx-1679404770"
    >
      <div class="jsx-1444901347 layout">
        <header class="jsx-1437436062 header">
          <a class="jsx-1437436062" href="https://www.serasa.com.br/"
            ><img
              src="/assets/images/serasa-logo.png"
              alt="Ir para página inicial"
              title="Ir para página inicial"
              width="100"
              height="42.5"
              class="jsx-1437436062"
          /></a>
        </header>
        <div class="jsx-2119886246 content">
          <div class="jsx-2723299336 container">
            <div class="jsx-1369224449 eu-grid__inner eu-fjc-center">
              <div class="jsx-1670084299 sign-in">
                <div class="jsx-1255997722 card jsx-1670084299 sign-in__card">
                  <div class="jsx-1670084299 sign-in__content">
                    <h1
                      tabindex="-1"
                      class="jsx-1670084299 sign-in__title --align-center eu-sm-2 ea-typography ea-typography--heading-m et-text-dark-high"
                    >
                      Entrar na Serasa
                    </h1>
                    <p
                      class="jsx-1670084299 sign-in__description --align-center eu-sm-3 ea-typography ea-typography--body-m et-text-dark-medium"
                    >
                      Olá! Identifique-se para acessar sua conta Serasa.
                    </p>
                    <div
                      class="jsx-1222364814 ec-form jsx-1222364814 jsx-2110056567 eu-sm-1"
                    >
                      <div class="jsx-2024470100 jsx-2024470100 eu-sm-2 field">
                        <label
                          for="f-cpf"
                          class="field-label jsx-3370773923 field-label--md ea-typography ea-typography--emphasys ea-typography--body-m et-text-dark-high"
                          >CPF</label
                        >
                        <div
                          id="cpfContainer"
                          :class="[
                            'jsx-2024470100 jsx-2024470100 field__content field--md',
                            { 'field--error': !validCpf && cpf.length === 14 },
                          ]"
                        >
                          <input
                            v-model="cpf"
                            v-maska
                            data-maska="###.###.###-##"
                            name="cpf"
                            placeholder="Digite seu CPF"
                            maxlength="14"
                            spellcheck="false"
                            id="f-cpf"
                            class="jsx-2024470100 field__input ea-typography ea-typography--body-m et-text-dark-medium"
                          />
                        </div>
                        <div
                          :class="[
                            'jsx-1299902653 field-error',
                            {
                              'field-error--show':
                                !validCpf && cpf.length === 14,
                            },
                          ]"
                        >
                          <p
                            role="alert"
                            class="field-error__item jsx-1299902653 ea-typography ea-typography--emphasys ea-typography--caption et-text-dark-medium"
                            >CPF inválido</p
                          >
                        </div>
                      </div>
                      <div
                        class="jsx-1222364814 ec-form-submit jsx-2110056567 sign-in-form --align-center"
                      >
                        <button
                          @click="continuar"
                          :disabled="!validCpf"
                          class="ea-button ea-button--solid ea-button--size-lg jsx-2110056567 btn-submit"
                        >
                          Continuar
                        </button>
                      </div>
                    </div>
                    <br />
                    <br />
                    <p
                      class="jsx-564433028 redirectToB2b ea-typography ea-typography--body-p et-text-dark-medium"
                    >
                      <label
                        class="ea-typography ea-typography--emphasys ea-typography--body-p et-accent"
                        style="color: #e63888"
                      >
                        Fale com uma de nossas atendentes
                      </label>
                      <br />
                      e confira às ofertas disponíveis para você.
                    </p>

                    <!-- <p
                      class="jsx-564433028 redirectToB2b ea-typography ea-typography--body-p et-text-dark-medium"
                    >
                      <a
                        aria-label="Veja aqui as soluções para a sua empresa."
                        href="https://empresas.serasaexperian.com.br/"
                        class="ea-typography ea-typography--emphasys ea-typography--body-p et-accent"
                        >Veja aqui</a
                      >soluções para a sua empresa.
                    </p> -->
                  </div>
                </div>
              </div>
              <div
                role="dialog"
                aria-labelledby="modal-m-acc-title"
                aria-modal="true"
                class="jsx-2857347777 modal modal--hide"
              >
                <section
                  class="jsx-2857347777 modal__main modal__main--half-mobile"
                >
                  <div class="jsx-2857347777 modal__title title-padding">
                    <p
                      id="modal-m-acc-title"
                      class="ea-typography ea-typography--subheading et-text-dark-low"
                    >
                      Algo deu errado
                    </p>
                    <button
                      type="button"
                      aria-label="Fechar"
                      class="jsx-2857347777 modal__button__close jsx-2857347777"
                    >
                      <img
                        alt="Fechar"
                        width="24"
                        height="24"
                        class="jsx-2857347777"
                      />
                    </button>
                  </div>
                  <div
                    id="modal-m-acc-description"
                    class="jsx-2857347777 modal__body"
                  ></div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <footer class="jsx-695939317 footer">
          <p class="eu-sm-1 ea-typography et-text-dark-medium">
            Nós protegemos a sua privacidade
            <span aria-hidden="true" class="jsx-695939317">❤</span>
          </p>
          <a
            href="https://www.serasa.com.br/app/politica-de-privacidade/"
            class="ea-typography ea-typography--emphasys et-accent"
            >Termos de uso e privacidade</a
          >
        </footer>
      </div>
    </div>
    <div v-else-if="logged" class="container">
      <div
        class="row py-3 align-items-center justify-content-between bg-white"
        style="position: fixed; top: 0; right: 10px; left: 10px; z-index: 1030"
      >
        <div class="ms-4 col-8">
          <div class="row align-items-center">
            <div
              class="user"
              :style="{
                backgroundImage:
                  sexo === 'Masculino' ? 'url(/home.png)' : 'url(/muie.png)',
              }"
            />
            <div class="col-8" style="font-size: 17px; line-height: 1.3">
              <div class="fw-bold">Olá, {{ nome }}.</div>
              <div style="font-size: 13px">CPF: {{ cpfHeader }}</div>
            </div>
          </div>
        </div>
        <div class="col-3 text-center">
          <img
            src="/assets/images/serasa-logo.png"
            alt="Ir para página inicial"
            title="Ir para página inicial"
            width="50"
            height="25"
            class="jsx-1437436062"
          />
        </div>
      </div>
      <!-- <div
        class="row justify-content-center"
        style="padding-top: 100px"
        @click="scrollToBottom"
      >
        <div
          class="p-3 col-10 text-white"
          style="background-color: #e63888; border-radius: 10px"
        >
          <div class="row">
            <div class="col fw-bolder">
              <i class="fa-solid fa-trophy me-2" />
              Acordo Encontrado!
            </div>
          </div>
          <div class="row mt-2" style="font-size: 14px; line-height: 1.3">
            <div
              class="col"
              style="text-align: justify; text-justify: inter-word"
            >
              Esta é uma conquista notável. Você obteve um desconto
              surpreendente de <label class="fw-bold">98,64%</label> para limpar
              seu nome e restaurar sua situação financeira. Este desconto
              respresenta um passo importante em direção à sua estabilidade
              financeira. Parabéns por essa realização.
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div
        class="mt-4 row justify-content-center"
        @click="scrollToBottom"
        style="padding-top: 100px"
      >
        <div
          class="p-3 col-10 text-dark bg-white"
          style="
            border-radius: 10px;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3) !important;
          "
        >
          <div class="row">
            <div class="col fw-bolder">
              <i class="fa-solid fa-wallet me-2"></i>
              Débito Encontrado!
            </div>
          </div>
          <div class="row mt-2" style="font-size: 14px; line-height: 1.3">
            <div
              class="col"
              style="text-align: justify; text-justify: inter-word"
            >
              Seu débito foi categorizado como:
              <label class="fw-bold">NEGOCIÁVEL</label>
              (débitos encontrados entre R$1.798,34 à R$ 9.542,21),
              <label class="fw-bold">APROVEITE</label> está oportunidade para
              <label class="fw-bold">REGULARIZAR</label> sua situação financeira
              e ter seu <label class="fw-bold">NOME LIMPO!</label>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div
        class="mt-4 row justify-content-center"
        @click="scrollToBottom"
        style="padding-top: 100px"
      >
        <div
          class="p-3 col-10 text-white"
          style="
            background-color: #e63888;
            border-radius: 10px;
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.5) !important;
          "
        >
          <div class="row">
            <div class="col fw-bolder">
              <i class="fa-solid fa-gift me-2"></i>
              Desconto incrível de 98,64%!
            </div>
          </div>
          <div class="row mt-2" style="font-size: 14px; line-height: 1.3">
            <div
              class="col"
              style="text-align: justify; text-justify: inter-word"
            >
              Converse com umas de nossas atendentes e verifique o melhor acordo
              para garantir a
              <label class="fw-bold">regularização completa</label> do seu
              <label class="fw-bold">CPF</label>. Esta é uma decisão importante
              para retomar sua
              <label class="fw-bold">estabilidade financeira</label> e cumprir
              com suas obrigações legais. Não subestime a importância de um
              <label class="fw-bold">CPF</label> em conformidade. Evite futuros
              inconvenientes e regularize já. <br /><br />
              Promoção válida até
              <label class="fw-bold">23:59 de {{ currentDate }}</label>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="row mt-4 fw-bold fs-5">
        <div class="col text-center">
          Converse com uma atendente abaixo, <br />
          e consulte seu <label style="color: #e63888">acordo</label>!
        </div>
      </div> -->
      <div
        class="row justify-content-center mt-4"
        style="padding-bottom: 120px; padding-top: 40px"
      >
        <div
          class="col-12 bg-white"
          style="
            /* border: 1px solid #e63888 !important; */
            /* border-radius: 20px;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3) !important; */
          "
        >
          <typebot-standard
            ref="typebotRef"
            style="width: 100%; height: 700px; padding: 10px 0"
          >
          </typebot-standard>
        </div>
      </div>
      <!-- <div
        @click="scrollToBottom"
        style="
          position: fixed;
          bottom: -7px;
          right: 0px;
          left: 0px;
          z-index: 1030;
        "
      >
        <img src="/sddas.png" alt="" style="width: 100%; height: auto" />
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { vMaska } from 'maska';
import { computed, onMounted, ref } from 'vue';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import axios from 'axios';
import { setShowLoader } from '@/shared/loader';
import { sleep } from '@/shared/sleep';

export default {
  name: 'MainContent',
  directives: { maska: vMaska },
  setup() {
    const adv = ref(true);
    const cpf = ref('');
    const sexo = ref('');
    const nome = ref('');
    const logged = ref(false);
    const isLoading = ref(false);
    const cpfHeader = ref('');
    const typebotRef = ref();

    const scrollToBottom = () =>
      typebotRef.value?.scrollIntoView({ behavior: 'smooth' });

    const currentDate = computed(() => {
      const agora = new Date();

      const dia = String(agora.getDate()).padStart(2, '0');
      const mes = String(agora.getMonth() + 1).padStart(2, '0');
      const ano = agora.getFullYear();

      return dia + '/' + mes + '/' + ano;
    });

    const validCpf = computed(() => cpfValidator.isValid(cpf.value));

    const toLogin = async () => {
      setShowLoader(true);
      await sleep(2);
      adv.value = false;
      setShowLoader(false);
    };

    onMounted(async () => {
      const urlObj = new URL(window.location.href);

      if (urlObj.searchParams.has('cpf')) {
        logged.value = true;
      }

      sexo.value = getParamUrl('sexo');
      cpfHeader.value = getParamUrl('cpf')?.substring(0, 8) + '***';
      nome.value = capitalizeFirstLetter(getParamUrl('nome')?.split(' ')[0]);

      const typebotInitScript = document.createElement('script');
      typebotInitScript.type = 'module';
      typebotInitScript.innerHTML = `import Typebot from './web.js'
      
    Typebot.initStandard({ typebot: "asares-do-roi", apiHost: "https://api.portaloficial-oferta.me" });
    `;
      document.body.append(typebotInitScript);

      if (logged.value) {
        setShowLoader(true);
        await sleep(2);
        setShowLoader(false);
      }
    });

    const capitalizeFirstLetter = (value: string = '') => {
      if (value.length === 0) return '';

      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    };

    const consultCpf = async () => {
      const url = `https://ucct4ky27iqfm3l2xq5mojrr6y0jxbeu.lambda-url.us-east-2.on.aws/?cpf=${cpf.value.replace(
        /\D/g,
        ''
      )}`;

      try {
        const response = await axios.get(url);

        return response.data;
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    const getParamUrl = (param: string) => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      return urlParams.get(param) ?? '';
    };

    const continuar = async () => {
      setShowLoader(true);

      const result = await consultCpf();

      const utmSource = getParamUrl('utm_source');
      const utmMedium = getParamUrl('utm_medium');
      const utmCampaign = getParamUrl('utm_campaign');

      const src = `${utmSource}|${utmMedium}|${utmCampaign}`;
      let redirectUrl = `/acordo-feirao/?src=${src}&cpf=${result.cpf}&nome=${result.nome}&sexo=${result.sexo}&nascimento=${result.nascimento}&mae=${result.mae}`;

      if (result.error) redirectUrl += '&error=true';

      window.location.href = redirectUrl;
      setShowLoader(false);
    };

    return {
      toLogin,
      adv,
      scrollToBottom,
      sexo,
      typebotRef,
      nome,
      cpfHeader,
      currentDate,
      cpf,
      logged,
      validCpf,
      isLoading,
      continuar,
    };
  },
};
</script>

<style>
.text-base {
  font-size: 15px;
  color: #616161;
  line-height: 1.2;
  text-align: justify;
  text-justify: inter-word;
}

.bg-color {
  background-color: #e0e0e0;
}

.user {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.header.jsx-1437436062 {
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 6rem;
  padding: 1.5rem 5.125rem;
  background-color: rgb(var(--theme-snow));
  border-bottom: solid 1px rgba(214, 215, 220);
}
@media screen and (max-width: 960px) {
  .header.jsx-1437436062 {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 64px;
  }
}

.field-label.jsx-3370773923 {
  display: block;
  margin-bottom: 0.5rem;
}
.field-label--sm.jsx-3370773923 {
  margin-bottom: 0.25rem;
}

.field-error.jsx-1299902653 {
  position: relative;
  opacity: 0;
  min-height: 0;
  width: 100%;
  overflow: hidden;
  -webkit-transition: var(--theme-transition);
  transition: var(--theme-transition);
}
.field-error--show.jsx-1299902653 {
  opacity: 1;
  min-height: 2rem;
  margin: 0.5rem 0 -1rem;
}
.field-error__item.jsx-1299902653 {
  position: absolute;
  color: rgb(var(--theme-chilli));
  top: 0;
  left: 0;
}

.field__input.jsx-2024470100 {
  width: 100%;
  height: 3.5rem;
  padding: 1rem;
  border: 1px solid rgba(var(--theme-silver));
  border-radius: var(--theme-border-radius);
  -webkit-transition: var(--theme-transition);
  transition: var(--theme-transition);
  -webkit-transition-property: border, box-shadow;
  transition-property: border, box-shadow;
}
.field__input.jsx-2024470100:hover,
.field__input.jsx-2024470100:focus {
  border-color: rgba(var(--theme-blue));
}
.field__input.jsx-2024470100:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(var(--theme-blue), 0.2);
}
.field__content.jsx-2024470100 {
  position: relative;
  z-index: 0;
}
.field--sm.jsx-2024470100 .field__input.jsx-2024470100 {
  height: 3rem;
  padding: 0.75rem 1rem;
}
.field--loading.jsx-2024470100 .field__input.jsx-2024470100,
.field--error.jsx-2024470100 .field__input.jsx-2024470100 {
  padding-right: 3.5rem;
}
.field--error.jsx-2024470100 .field__input.jsx-2024470100 {
  border-color: rgba(var(--theme-chilli));
}
.field--error.jsx-2024470100 .field__input.jsx-2024470100:focus {
  box-shadow: 0 0 0 4px rgba(var(--theme-chilli), 0.2);
}
.field--loading.jsx-2024470100:after,
.field--error.jsx-2024470100:after {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  right: 1.062rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: -0.75rem;
  background: transparent no-repeat center center;
  background-size: contain;
  z-index: 1;
  pointer-events: none;
}
.field--error.jsx-2024470100:after {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNENjEwM0IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDBjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnMtNS4zNzMgMTItMTIgMTJTMCAxOC42MjcgMCAxMiA1LjM3MyAwIDEyIDB6bTAgMTVjLS44MjggMC0xLjUuNjcyLTEuNSAxLjVTMTEuMTcyIDE4IDEyIDE4czEuNS0uNjcyIDEuNS0xLjVTMTIuODI4IDE1IDEyIDE1em0wLTguNWMtLjgyOCAwLTEuNS42NzItMS41IDEuNXY0bC4wMDcuMTQ0Yy4wNzMuNzYxLjcxMyAxLjM1NiAxLjQ5MyAxLjM1Ni44MjggMCAxLjUtLjY3MiAxLjUtMS41VjhsLS4wMDctLjE0NEMxMy40MiA3LjA5NSAxMi43OCA2LjUgMTIgNi41eiIvPgo8L3N2Zz4K');
}
.field--loading.jsx-2024470100:after {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE3IDE3IDY2IDY2IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMwIiBzdHJva2U9InJnYmEoMCwgOCwgMzgsIDAuMTYpIiBzdHJva2Utd2lkdGg9IjciIGZpbGw9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMwIiBzdHJva2U9IiMwYjY0ZTAiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiB0cmFuc2Zvcm09InJvdGF0ZSg0OC45MjUgNTAgNTApIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS41IiB2YWx1ZXM9IjAgNTAgNTA7MTgwIDUwIDUwOzcyMCA1MCA1MCIga2V5VGltZXM9IjA7MC41OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaGFycmF5IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjUiIHZhbHVlcz0iMTguODQ5NTU1OTIxNTM4NzYgMTY5LjY0NjAwMzI5Mzg0ODgyOzk0LjI0Nzc3OTYwNzY5MzggOTQuMjQ3Nzc5NjA3NjkzNzc7MTguODQ5NTU1OTIxNTM4NzYgMTY5LjY0NjAwMzI5Mzg0ODgyIiBrZXlUaW1lcz0iMDswLjU7MSI+PC9hbmltYXRlPjwvY2lyY2xlPjwvc3ZnPg==');
}

.ec-form-submit.jsx-1222364814 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  -webkit-box-pack: end;
  -webkit-justify-content: end;
  -ms-flex-pack: end;
  justify-content: end;
}
.ec-form-submit.--align-center.jsx-1222364814 {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.ec-form-submit.jsx-1222364814 > * {
  margin: 0 0 0 1.5rem;
  width: 14.25rem;
}
.ec-form-submit.jsx-1222364814 > *:first-child:last-child,
.ec-form-submit.jsx-1222364814 > * ~ * {
  margin: 0;
}
@media (max-width: 1015px) {
  .ec-form.jsx-1222364814,
  .ec-form-submit.jsx-1222364814 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .ec-form-submit.jsx-1222364814 > * {
    width: 100%;
    margin: 0;
  }
  .ec-form-submit.jsx-1222364814 > * ~ * {
    margin: 1rem 0 0;
  }
  .ec-form-submit.--submit-align-bottom.jsx-1222364814 {
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  .ec-form-submit.--submit-align-bottom.jsx-1222364814 > * {
    margin: 0 0 1rem;
  }
  .ec-form-submit.--submit-align-bottom.jsx-1222364814 > *:first-child {
    margin: auto 0 0;
  }
}

.btn-submit.jsx-2110056567 {
  width: 100%;
}
button.btn-try-again.jsx-2110056567,
.ec-form-submit a.btn-signup {
  width: 100%;
}
input[name='cpf']:disabled {
  cursor: not-allowed;
}

.redirectToB2b.jsx-564433028 {
  margin-top: 7rem;
  text-align: center;
}
@media screen and (min-width: 960px) {
  .redirectToB2b.jsx-564433028 {
    margin-top: 9.125rem;
  }
}

.card.jsx-1255997722 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: rgba(var(--theme-surface-snow));
  border-radius: var(--theme-border-radius);
  position: relative;
}
.--with-padding.jsx-1255997722 {
  padding: 1rem;
}
.card__link.jsx-1255997722 {
  display: block;
  text-align: left;
  padding: 1rem;
}
.card__link.jsx-1255997722:not(:hover):not(:active):not(:focus) {
  border-top: 1px solid rgba(var(--theme-surface-palegray));
  --theme-button-border-radius: 0 0 var(--theme-border-radius)
    var(--theme-border-radius);
}

.sign-in.jsx-1670084299 {
  width: 24.5rem;
  min-height: 31.75rem;
  background-color: rgb(var(--theme-snow));
  /* border: solid 1px rgb(var(--theme-lightgray)); */
  border-radius: 0.5rem;
  box-shadow: 0 4px 9px 0 rgba(var(--theme-black), 0.1);
}
.sign-in.jsx-1670084299 .sign-in__card.jsx-1670084299 {
  height: 100%;
}
.sign-in.jsx-1670084299 .sign-in__title.small.jsx-1670084299 {
  font-size: 1.5rem;
  -webkit-letter-spacing: -0.053rem;
  -moz-letter-spacing: -0.053rem;
  -ms-letter-spacing: -0.053rem;
  letter-spacing: -0.053rem;
}
.sign-in.jsx-1670084299 .sign-in__content.jsx-1670084299 {
  padding: 1.5rem;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.sign-in.jsx-1670084299 .--align-center.jsx-1670084299 {
  text-align: center;
}
.sign-in__forgot.jsx-1670084299 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 3rem;
  padding-right: 0.5rem;
}
.sign-in__icon.jsx-1670084299 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.fullWidth.jsx-1670084299 {
  width: 100%;
}
.--align-center.jsx-1670084299 {
  text-align: center;
}
@media screen and (max-width: 960px) {
  .sign-in.jsx-1670084299 {
    max-width: 392px;
    width: 100%;
    border: none !important;
    box-shadow: none;
  }
  .sign-in.jsx-1670084299 .sign-in__content.jsx-1670084299 {
    padding: 0 0.5rem;
  }
  .sign-in.jsx-1670084299 .sign-in__title.jsx-1670084299 {
    font-size: 1.5rem;
  }
}

.modal.jsx-2857347777 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--theme-dark-low));
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  z-index: 9999;
}
.modal__title.jsx-2857347777 {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(var(--theme-snow));
  text-align: center;
  z-index: 20;
}
.title-padding.jsx-2857347777 {
  padding: 1rem;
}
.modal__main.jsx-2857347777 {
  position: fixed;
  background: rgba(var(--theme-snow));
  min-width: 30rem;
  max-width: 80%;
  height: auto;
  max-height: 90%;
  top: 50%;
  left: 50%;
  overflow-y: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: var(--theme-border-radius);
}
.modal__main--small.jsx-2857347777 {
  max-width: 45.75rem;
}
.modal.jsx-2857347777 .modal__button__close.jsx-2857347777 {
  color: rgba(var(--theme-dark-low));
  right: 0.5rem;
  top: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(var(--theme-snow));
  border-radius: var(--theme-border-radius);
  cursor: pointer;
  position: absolute;
}
.modal.jsx-2857347777 .modal__button__close.jsx-2857347777 img.jsx-2857347777 {
  height: 1.5rem;
  width: 1.5rem;
  opacity: 0.44;
}
.modal__body.jsx-2857347777 {
  padding: 1rem 1.5rem 1.5rem 1.5rem;
}
.modal--show.jsx-2857347777 {
  display: block;
}
.modal--hide.jsx-2857347777 {
  display: none;
}
@media (max-width: 480px) {
  .modal__main--mobile.jsx-2857347777,
  .modal__main--half-mobile.jsx-2857347777 {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }
  .modal__main--mobile.jsx-2857347777 {
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
  .modal__main--half-mobile.jsx-2857347777 {
    top: auto;
    left: 0;
    bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    -webkit-transform: translate(0%, 0%);
    -ms-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
  }
  .title-padding.jsx-2857347777 {
    padding: 1.125rem;
  }
}

.form-loader.jsx-1078615936 {
  text-align: center;
  margin: auto;
}
.form-loader.jsx-1078615936 .form-loader-icon {
  font-size: 4rem;
  margin: auto;
}

.eu-grid__inner.jsx-1369224449 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  margin: 0 calc(var(--grid-gutter) / 2 * -1);
}

.container.jsx-2723299336 {
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: var(--grid-container-max-width);
  padding-left: var(--grid-margin);
  padding-right: var(--grid-margin);
}

.content.jsx-2119886246 {
  margin: 2rem 0;
}

.footer.jsx-695939317 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  padding-top: 1rem;
  margin-top: auto;
  background: rgb(var(--theme-snow));
  border-top: solid 1px rgba(214, 215, 220);
}
@media screen and (max-width: 960px) {
  .footer.jsx-695939317 {
    height: 5rem;
  }
}

:root {
  --theme-white: 255, 255, 255;
  --theme-black: 0, 0, 0;
  --theme-text-dark-high: 0, 0, 0, 0.8;
  --theme-text-dark-medium: 0, 0, 0, 0.66;
  --theme-text-dark-low: 0, 0, 0, 0.44;
  --theme-text-light-solid: 255, 255, 255;
  --theme-text-light-high: 255, 255, 255, 0.8;
  --theme-surface-snow: 255, 255, 255;
  --theme-surface-palegray: 247, 247, 247;
  --theme-surface-lightgray: 236, 236, 236;
  --theme-surface-silver: 216, 216, 216;
  --theme-surface-darkgrey: 87, 87, 85;
  --theme-primary-300: 231, 66, 142;
  --theme-primary: 230, 56, 136;
  --theme-primary-700: 228, 43, 128;
  --theme-secondary-300: 231, 66, 142;
  --theme-secondary: 230, 56, 136;
  --theme-secondary-700: 228, 43, 128;
  --theme-accent-300: 231, 66, 142;
  --theme-accent: 230, 56, 136;
  --theme-accent-700: 228, 43, 128;
}

.et-white {
  color: rgb(var(--theme-white));
}
.et-black {
  color: rgb(var(--theme-black));
}
.et-text-dark-high {
  color: rgba(var(--theme-text-dark-high));
}
.et-text-dark-medium {
  color: rgba(var(--theme-text-dark-medium));
}
.et-text-dark-low {
  color: rgba(var(--theme-text-dark-low));
}
.et-text-light-solid {
  color: rgb(var(--theme-text-light-solid));
}
.et-text-light-high {
  color: rgba(var(--theme-text-light-high));
}
.et-surface-snow {
  color: rgb(var(--theme-surface-snow));
}
.et-surface-palegray {
  color: rgb(var(--theme-surface-palegray));
}
.et-surface-lightgray {
  color: rgb(var(--theme-surface-lightgray));
}
.et-surface-silver {
  color: rgb(var(--theme-surface-silver));
}
.et-surface-darkgrey {
  color: rgb(var(--theme-surface-darkgrey));
}
.et-primary-300 {
  color: rgb(var(--theme-primary-300));
}
.et-primary {
  color: rgb(var(--theme-primary));
}
.et-primary-700 {
  color: rgb(var(--theme-primary-700));
}
.et-secondary-300 {
  color: rgb(var(--theme-secondary-300));
}
.et-secondary {
  color: rgb(var(--theme-secondary));
}
.et-secondary-700 {
  color: rgb(var(--theme-secondary-700));
}
.et-accent-300 {
  color: rgb(var(--theme-accent-300));
}
.et-accent {
  color: rgb(var(--theme-accent));
}
.et-accent-700 {
  color: rgb(var(--theme-accent-700));
}

* {
  box-sizing: border-box;
}
a,
abbr,
acronym,
address,
applet,
b,
big,
blockquote,
body,
caption,
center,
cite,
code,
dd,
del,
dfn,
div,
dl,
dt,
em,
fieldset,
font,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
object,
ol,
p,
pre,
q,
s,
samp,
small,
span,
strike,
strong,
sub,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
tr,
tt,
u,
ul,
var {
  margin: 0;
  padding: 0;
  outline: none;
  border: none !important;
  background: 0 0;
  vertical-align: baseline;
  font-size: 100%;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:after,
blockquote:before,
q:after,
q:before {
  content: '';
  content: none;
}
:focus {
  outline: none;
}
ins {
  -webkit-text-decoration: none;
  text-decoration: none;
}
del {
  -webkit-text-decoration: line-through;
  text-decoration: line-through;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
.ea-button,
body,
html {
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
.ea-button {
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0.75rem 1.25rem;
  min-width: 6rem;
  height: 2.5rem;
  outline: none;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  vertical-align: middle;
  text-align: center;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  font-size: 1rem;
  line-height: 1;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: background-color, color, box-shadow, color,
    border;
  transition-property: background-color, color, box-shadow, color, border;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-appearance: none;
}
.ea-button:disabled,
.ea-button[disabled] {
  cursor: not-allowed;
  pointer-events: none;
}
.ea-button::-moz-focus-inner {
  padding: 0;
  border: none !important;
}
.ea-button:active,
.ea-button:focus {
  outline: none;
}
.ea-button:hover {
  cursor: pointer;
}
.ea-button--size-sm {
  min-width: 4.5rem;
  height: 2.25rem;
  font-size: 0.875rem;
}
.ea-button--size-lg {
  min-width: 8rem;
  height: 3rem;
}
.ea-button--ghost {
  background: transparent;
  color: rgb(var(--theme-primary));
}
.ea-button--ghost:focus,
.ea-button--ghost:hover {
  background-color: rgba(var(--theme-primary), 0.08);
}
.ea-button--ghost:hover {
  color: rgb(var(--theme-primary-300));
}
.ea-button--ghost:focus {
  box-shadow: 0 0 0 4px rgba(var(--theme-primary), 0.16);
  color: rgb(var(--theme-primary-700));
}
.ea-button--ghost:active {
  background: transparent;
  box-shadow: 0 0 0 2px rgba(var(--theme-primary), 0.24);
  color: rgb(var(--theme-primary-300));
}
.ea-button--solid {
  background-color: rgb(var(--theme-primary));
  color: rgb(var(--theme-white));
}
.ea-button--solid:hover {
  background-color: rgb(var(--theme-primary-300));
}
.ea-button--solid:focus {
  background-color: rgb(var(--theme-primary-700));
  box-shadow: 0 0 0 4px rgba(var(--theme-primary), 0.16);
}
.ea-button--solid:active {
  border-color: hsla(0, 0%, 100%, 0.5);
  background-color: rgb(var(--theme-primary));
  box-shadow: 0 0 0 3px rgba(var(--theme-primary), 0.24);
}
.ea-button--solid:disabled,
.ea-button--solid[disabled] {
  background-color: rgba(var(--theme-black), 0.16);
}
.ea-button--outline {
  border-color: rgba(var(--theme-black), 0.16);
  background: transparent;
  color: rgb(var(--theme-primary));
}
.ea-button--outline:hover {
  border-color: rgb(var(--theme-primary));
  color: rgb(var(--theme-primary-300));
}
.ea-button--outline:focus {
  border-color: rgb(var(--theme-primary-700));
  background-color: rgba(var(--theme-primary), 0.08);
  box-shadow: 0 0 0 1px transparent, 0 0 0 4px rgba(var(--theme-primary), 0.16);
  color: rgb(var(--theme-primary-700));
}
.ea-button--outline:active {
  border-color: rgb(var(--theme-primary));
  background-color: rgba(var(--theme-primary), 0.08);
  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.5),
    0 0 0 3px rgba(var(--theme-primary), 0.2);
  color: rgb(var(--theme-primary));
}
.ea-button--outline:disabled,
.ea-button--outline[disabled] {
  border-color: rgba(var(--theme-black), 0.16);
}
.ea-typography,
body {
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
.ea-typography--display {
  -webkit-letter-spacing: -0.025rem;
  -moz-letter-spacing: -0.025rem;
  -ms-letter-spacing: -0.025rem;
  letter-spacing: -0.025rem;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 2.75rem;
}
@media (min-width: 960px) {
  .ea-typography--display {
    font-size: 3rem;
    line-height: 3.25rem;
  }
}
.ea-typography--heading-l {
  -webkit-letter-spacing: -0.022727272727273rem;
  -moz-letter-spacing: -0.022727272727273rem;
  -ms-letter-spacing: -0.022727272727273rem;
  letter-spacing: -0.022727272727273rem;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.25rem;
}
@media (min-width: 960px) {
  .ea-typography--heading-l {
    font-size: 2.5rem;
    line-height: 2.75rem;
  }
}
.ea-typography--heading-m {
  -webkit-letter-spacing: -0.022222222222222rem;
  -moz-letter-spacing: -0.022222222222222rem;
  -ms-letter-spacing: -0.022222222222222rem;
  letter-spacing: -0.022222222222222rem;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.75rem;
}
@media (min-width: 960px) {
  .ea-typography--heading-m {
    font-size: 2rem;
    line-height: 2.25rem;
  }
}
.ea-typography--heading-s {
  -webkit-letter-spacing: -0.021428571428571rem;
  -moz-letter-spacing: -0.021428571428571rem;
  -ms-letter-spacing: -0.021428571428571rem;
  letter-spacing: -0.021428571428571rem;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
}
@media (min-width: 960px) {
  .ea-typography--heading-s {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
}
.ea-typography--heading-xs {
  font-weight: 700;
  line-height: 1.5rem;
  font-size: 1.125rem;
}
@media (min-width: 960px) {
  .ea-typography--heading-xs {
    font-size: 1.25rem;
  }
}
.ea-typography--subheading {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
}
.ea-typography--body-m {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
}
.ea-typography--body-p {
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.ea-typography--caption {
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
}
.ea-typography--emphasys {
  font-weight: 700;
}

:root {
  --theme-black: 0, 8, 38;
  --theme-dark-blue: 29, 79, 145;
  --theme-dark-blue-lighter: 236, 239, 244;
  --theme-light-blue: 66, 109, 169;
  --theme-light-blue-lighter: 239, 240, 240;
  --theme-purple: 109, 32, 119;
  --theme-purple-lighter: 242, 237, 242;
  --theme-raspberry: 175, 22, 133;
  --theme-raspberry-lighter: 246, 234, 242;
  --theme-magenta: 230, 56, 136;
  --theme-magenta-lighter: 246, 234, 239;
  --theme-light-blue-5-s10-l10: 206, 219, 238;
  --theme-light-blue-5-s20-l20: 162, 190, 230;
  --theme-purple-5-s10-l10: 231, 208, 231;
  --theme-purple-5-s20-l20: 220, 168, 220;
  --theme-snow: 255, 255, 255;
  --theme-palegray: 245, 247, 249;
  --theme-silver: 212, 218, 224;
  --theme-lightgray: 230, 234, 238;
  --theme-surface-snow: var(--theme-snow);
  --theme-surface-palegray: var(--theme-palegray);
  --theme-surface-silver: var(--theme-silver);
  --theme-surface-lightgray: var(--theme-lightgray);
  --theme-orange: 255, 143, 28;
  --theme-orange-lighter: 249, 240, 231;
  --theme-lime: 183, 191, 16;
  --theme-lime-lighter: 246, 247, 233;
  --theme-credit-green: 0, 175, 125;
  --theme-credit-green-lighter: 231, 249, 244;
  --theme-happy-blue: 0, 158, 227;
  --theme-happy-blue-lighter: 231, 243, 249;
  --theme-blue: 11, 100, 224;
  --theme-blue-lighter: 232, 238, 248;
  --theme-forest-green: 78, 168, 2;
  --theme-forest-green-lighter: 239, 249, 231;
  --theme-chilli: 214, 16, 59;
  --theme-chilli-lighter: 247, 233, 236;
  --theme-pumpkin: 227, 109, 0;
  --theme-pumpkin-lighter: 249, 239, 231;
  --theme-violet: 172, 11, 229;
  --theme-violet-lighter: 243, 232, 248;
  --theme-accent: var(--theme-magenta);
  --theme-text-dark-low: var(--theme-black), 0.44;
  --theme-text-dark-medium: var(--theme-black), 0.6;
  --theme-text-dark-high: var(--theme-black), 0.8;
  --theme-dark-low: var(--theme-black), 0.44;
  --theme-dark-medium: var(--theme-black), 0.6;
  --theme-dark-medium-high: var(--theme-black), 0.7;
  --theme-dark-high: var(--theme-black), 0.8;
}
.et-text-accent {
  color: rgba(var(--theme-accent));
}
.et-snow {
  color: rgba(var(--theme-snow));
}
.et-palegray {
  color: rgba(var(--theme-palegray));
}
.et-lightgray {
  color: rgba(var(--theme-lightgray));
}
.et-dark-low {
  color: rgba(var(--theme-text-dark-low));
}
.et-dark-medium {
  color: rgba(var(--theme-text-dark-medium));
}
.et-dark-high {
  color: rgba(var(--theme-text-dark-high));
}
.et-light-high {
  color: rgba(var(--theme-text-light-high));
}
.et-light-solid {
  color: rgba(var(--theme-text-light-solid));
}
.et-dark-blue {
  color: rgba(var(--theme-dark-blue));
}
.et-dark-blue-lighter {
  color: rgba(var(--theme-dark-blue-lighter));
}
.et-magenta {
  color: rgba(var(--theme-magenta));
}
.et-magenta-lighter {
  color: rgba(var(--theme-magenta-lighter));
}
.et-light-blue {
  color: rgba(var(--theme-light-blue));
}
.et-light-blue-lighter {
  color: rgba(var(--theme-light-blue-lighter));
}
.et-purple {
  color: rgba(var(--theme-purple));
}
.et-purple-lighter {
  color: rgba(var(--theme-purple-lighter));
}
.et-raspberry {
  color: rgba(var(--theme-raspberry));
}
.et-raspberry-lighter {
  color: rgba(var(--theme-raspberry-lighter));
}
.et-orange {
  color: rgba(var(--theme-orange));
}
.et-orange-lighter {
  color: rgba(var(--theme-orange-lighter));
}
.et-lime {
  color: rgba(var(--theme-lime));
}
.et-lime-lighter {
  color: rgba(var(--theme-lime-lighter));
}
.et-happy-blue {
  color: rgba(var(--theme-happy-blue));
}
.et-credit-green-lighter {
  color: rgba(var(--theme-credit-green-lighter));
}
.et-credit-green {
  color: rgba(var(--theme-credit-green));
}
.et-happy-blue-lighter {
  color: rgba(var(--theme-happy-blue-lighter));
}
.et-blue {
  color: rgba(var(--theme-blue));
}
.et-blue-lighter {
  color: rgba(var(--theme-blue-lighter));
}
.et-forest-green {
  color: rgba(var(--theme-forest-green));
}
.et-forest-green-lighter {
  color: rgba(var(--theme-forest-green-lighter));
}
.et-chilli {
  color: rgba(var(--theme-chilli));
}
.et-chilli-lighter {
  color: rgba(var(--theme-chilli-lighter));
}
.et-pumpkin {
  color: rgba(var(--theme-pumpkin));
}
.et-pumpkin-lighter {
  color: rgba(var(--theme-pumpkin-lighter));
}
.et-violet {
  color: rgba(var(--theme-violet));
}
.et-violet-lighter {
  color: rgba(var(--theme-violet-lighter));
}

button {
  border: none !important;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  text-align: inherit;
  border-radius: 0;
  cursor: pointer;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
}
button:-moz-focus-inner {
  border: 0;
  padding: 0;
}
a {
  -webkit-text-decoration: none;
  text-decoration: none;
}

:root {
  --grid-margin-phone-sm: 0.5rem;
  --grid-margin-phone-md: 1rem;
  --grid-margin-desktop: 0;
  --grid-margin: var(--grid-margin-phone-sm);
  --grid-gutter-phone-sm: 1rem;
  --grid-gutter-phone-md: 1rem;
  --grid-gutter-desktop: 1.5rem;
  --grid-gutter: var(--grid-gutter-phone-sm);
  --grid-container-max-width: 984px;
}
@media (min-width: 360px) {
  :root {
    --grid-margin: var(--grid-margin-phone-md);
    --grid-gutter: var(--grid-gutter-phone-md);
  }
}
@media (min-width: 63.5rem) {
  :root {
    --grid-gutter: var(--grid-gutter-desktop);
    --grid-margin: var(--grid-margin-desktop);
  }
}

:root {
  --theme-border-radius: 10px;
  --theme-button-border-radius: var(--theme-border-radius);
  --theme-box-shadow: 0 1px 4px 0 rgba(0, 8, 38, 0.04);
  --theme-transition: 0.3s ease;
}
body {
  color: rgba(var(--theme-text-dark-high));
  background-color: rgba(var(--theme-snow));
  -webkit-tap-highlight-color: rgba(var(--theme-accent), 0.03);
}
a,
button {
  border: 1px solid transparent;
  border-radius: var(--theme-border-radius);
  -webkit-transition: var(--theme-transition);
  transition: var(--theme-transition);
  -webkit-transition-property: border, box-shadow;
  transition-property: border, box-shadow;
  padding: 0.5rem;
}
a:hover,
button:hover {
  border-color: rgba(var(--theme-blue));
}
a:focus,
button:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(var(--theme-blue), 0.2);
}
.eu-no-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.ea-button {
  border-radius: var(--theme-button-border-radius);
}
.ea-button:disabled {
  color: rgb(var(--theme-dark-low));
}
a.ea-button.ea-typography {
  -webkit-transition: var(--theme-transition);
  transition: var(--theme-transition);
  border-radius: var(--theme-border-radius);
  padding: 0.75rem;
}
a.ea-button.ea-typography:hover {
  color: rgb(var(--theme-primary-300));
}
a.ea-button.ea-typography:hover,
a.ea-button.ea-typography:focus {
  background-color: rgba(var(--theme-accent), 0.08);
}
a.ea-button.ea-typography:focus {
  box-shadow: 0 0 0 4px rgba(var(--theme-accent), 0.16);
  color: rgb(var(--theme-primary-700));
}
a.ea-button.ea-typography:active {
  background: transparent;
  box-shadow: 0 0 0 2px rgba(var(--theme-accent), 0.24);
  color: rgb(var(--theme-primary-300));
}
.ea-typography--emphasys {
  font-weight: bold;
}
.eu-w-100 {
  width: 100%;
}
.eu-w-80 {
  width: 80%;
}
.eu-text-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
.eu-text-center {
  text-align: center;
}
.eu-flex-r,
.eu-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.eu-inline-flex {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.eu-fd-column {
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: left;
  -webkit-justify-content: left;
  -ms-flex-pack: left;
  justify-content: left;
}
.eu-facc,
.eu-fjc-center {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.eu-facc,
.eu-fai-center {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.eu-fjc-left {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.eu-fjc-right {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.eu-modal-open {
  overflow: hidden;
}
@media (max-width: 1015px) {
  .eu-flex-r {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: left;
    -webkit-justify-content: left;
    -ms-flex-pack: left;
    justify-content: left;
  }
  .eu-d-none-mb {
    display: none !important;
  }
}
.eu-d-none {
  display: none;
}
@media (min-width: 1015px) {
  .eu-d-none-dsk {
    display: none !important;
  }
}
@media (max-width: 940px) {
  .layout__content .back-bar.backbar-close button {
    min-width: 20px;
    width: 20px;
    margin-left: 0.5rem;
    padding-left: 1.25rem;
  }
  .back-bar.backbar-close button i.ecs-icon {
    width: 20px;
    height: 20px;
    margin-right: 0;
  }
  .back-bar.backbar-close button i.ecs-icon svg {
    width: 20px;
    height: 20px;
  }
  .back-bar.sign-up__backbar {
    width: 100%;
  }
}
.advertising-wrapper {
  width: 100%;
  max-width: 728px;
}
@media (max-width: 77rem) {
  .advertising-wrapper,
  .advertising-wrapper iframe {
    max-width: 99%;
  }
}
.back-bar.sign-up__backbar {
  margin: 0 auto !important;
  width: 31.25rem;
}

:root {
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --space-5: 2.5rem;
  --space-6: 3rem;
}
.eu-sp-0 {
  padding-bottom: 0 !important;
}
.eu-sp-1 {
  padding-bottom: var(--space-1) !important;
}
.eu-sp-2 {
  padding-bottom: var(--space-2) !important;
}
.eu-sp-3 {
  padding-bottom: var(--space-3) !important;
}
.eu-sp-4 {
  padding-bottom: var(--space-4) !important;
}
.eu-sp-5 {
  padding-bottom: var(--space-5) !important;
}
.eu-sp-6 {
  padding-bottom: var(--space-6) !important;
}
.eu-sm-0-r,
.eu-sm-0 {
  margin-bottom: 0 !important;
}
.eu-sm-1-r,
.eu-sm-1 {
  margin-bottom: var(--space-1) !important;
}
.eu-sm-2-r,
.eu-sm-2 {
  margin-bottom: var(--space-2) !important;
}
.eu-sm-3-r,
.eu-sm-3 {
  margin-bottom: var(--space-3) !important;
}
.eu-sm-4 {
  margin-bottom: var(--space-4) !important;
}
.eu-sm-5 {
  margin-bottom: var(--space-5) !important;
}
.eu-sm-6 {
  margin-bottom: var(--space-6) !important;
}
.--align-center {
  text-align: center;
}
.w-100 {
  width: 100% !important;
}
@media (min-width: 63.5rem) {
  .eu-sm-0-r {
    margin-bottom: var(--space-1) !important;
  }
  .eu-sm-1-r {
    margin-bottom: var(--space-2) !important;
  }
  .eu-sm-2-r {
    margin-bottom: var(--space-3) !important;
  }
  .eu-sm-3-r {
    margin-bottom: var(--space-4) !important;
  }
}

#nprogress {
  pointer-events: none;
}
#nprogress .bar {
  background: rgba(var(--theme-accent));
  position: fixed;
  z-index: 1050;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
}
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px rgba(var(--theme-accent)),
    0 0 5px rgba(var(--theme-accent));
  opacity: 1;
  -webkit-transform: rotate(3deg) translate(0, -4px);
  -ms-transform: rotate(3deg) translate(0, -4px);
  -webkit-transform: rotate(3deg) translate(0, -4px);
  -ms-transform: rotate(3deg) translate(0, -4px);
  transform: rotate(3deg) translate(0, -4px);
}
#nprogress .spinner {
  display: none;
}
.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

body {
  background-color: rgb(var(--theme-palegray));
}
.layout.jsx-1444901347 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
}
@media screen and (max-width: 960px) {
  body {
    background-color: rgb(var(--theme-snow));
  }
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5g.woff)
    format('woff');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAA.woff)
    format('woff');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtvAA.woff)
    format('woff');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2)
    format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2)
    format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2)
    format('woff2');
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2)
    format('woff2');
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2)
    format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329,
    U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2)
    format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
    U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2)
    format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2)
    format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2)
    format('woff2');
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2)
    format('woff2');
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2)
    format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329,
    U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2)
    format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
    U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfCRc4AMP6lbBP.woff2)
    format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfABc4AMP6lbBP.woff2)
    format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfCBc4AMP6lbBP.woff2)
    format('woff2');
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfBxc4AMP6lbBP.woff2)
    format('woff2');
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfCxc4AMP6lbBP.woff2)
    format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329,
    U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfChc4AMP6lbBP.woff2)
    format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
    U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfBBc4AMP6lQ.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
