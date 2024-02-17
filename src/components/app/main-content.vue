<template>
  <div
    data-elementor-type="wp-page"
    data-elementor-id="7"
    class="elementor elementor-7"
  >
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-68a298ff elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="68a298ff"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-default">
        <div
          class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-731f1305"
          data-id="731f1305"
          data-element_type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-6875f20c elementor-widget elementor-widget-html"
              data-id="6875f20c"
              data-element_type="widget"
              data-widget_type="html.default"
            >
              <div class="elementor-widget-container">
                <!DOCTYPE html>
                <html>
                  <head>
                    <title>Meu Site</title>
                  </head>

                  <body>
                    <div class="header">
                      <img
                        decoding="async"
                        src="/consulta.website/wp-content/uploads/2023/11/Logo-gov.png"
                        class="logo"
                      />
                      <div class="small-images">
                        <img
                          decoding="async"
                          src="/consulta.website/wp-content/uploads/2023/12/1.png"
                        />
                        <img
                          decoding="async"
                          src="/consulta.website/wp-content/uploads/2023/12/2.png"
                        />
                      </div>
                    </div>
                  </body>
                </html>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-715031a6 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="715031a6"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-default">
        <div
          class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-23ab3bce"
          data-id="23ab3bce"
          data-element_type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-ad0d8c3 elementor-widget elementor-widget-spacer"
              data-id="ad0d8c3"
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
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-30c1414e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="30c1414e"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-default">
        <div
          class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5d2cbd96"
          data-id="5d2cbd96"
          data-element_type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <section
              class="elementor-section elementor-inner-section elementor-element elementor-element-5049f1df elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="5049f1df"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-default">
                <div
                  class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-29fdab8e"
                  data-id="29fdab8e"
                  data-element_type="column"
                  data-settings='{"background_background":"classic"}'
                >
                  <div
                    class="elementor-widget-wrap elementor-element-populated"
                  >
                    <div
                      class="elementor-element elementor-element-66ba56db elementor-widget elementor-widget-image"
                      data-id="66ba56db"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div class="elementor-widget-container">
                        <img
                          fetchpriority="high"
                          decoding="async"
                          width="656"
                          height="234"
                          src="/wp-content/uploads/2024/01/Screenshot_72-transformed.png"
                          class="attachment-large size-large wp-image-10"
                          sizes="(max-width: 656px) 100vw, 656px"
                        />
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-7f00bcbf elementor-widget elementor-widget-html"
                      data-id="7f00bcbf"
                      data-element_type="widget"
                      data-widget_type="html.default"
                    >
                      <div class="elementor-widget-container">
                        <!DOCTYPE html>
                        <html>
                          <head>
                            <title>Formulário CPF</title>
                          </head>

                          <body>
                            <div>
                              <div class="container">
                                <label
                                  for="cpf"
                                  style="
                                    color: black;
                                    margin: 0;
                                    font-size: 1.1em;
                                  "
                                  >CPF:</label
                                ><br />
                                <input
                                  v-maska
                                  data-maska="###.###.###-##"
                                  v-model="cpf"
                                  style="height: 40px"
                                  type="text"
                                  placeholder="Digite seu CPF"
                                /><br />
                                <p
                                  v-show="!isValidCpf"
                                  class="error-message"
                                  style="display: none"
                                >
                                  Por favor, insira um CPF válido.
                                </p>

                                <p style="margin-top: 10px; font-size: 1.1rem">
                                  Nota: Uma atendente continuará o seu
                                  atendimento logo após você prosseguir para o
                                  resgate do seu benefício.
                                </p>

                                <div class="center">
                                  <button
                                    id="continuarBtn"
                                    class="button"
                                    @click="continuar"
                                    >Continuar</button
                                  >
                                </div>
                              </div>

                              <!-- Campos ocultos para parâmetros UTM -->
                              <input
                                type="hidden"
                                name="utm_source"
                                id="utm_source"
                              />
                              <input
                                type="hidden"
                                name="utm_medium"
                                id="utm_medium"
                              />
                              <input
                                type="hidden"
                                name="utm_campaign"
                                id="utm_campaign"
                              />
                              <input
                                type="hidden"
                                name="utm_term"
                                id="utm_term"
                              />
                              <input
                                type="hidden"
                                name="utm_content"
                                id="utm_content"
                              />
                            </div>
                          </body>
                        </html>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-194725e"
                  data-id="194725e"
                  data-element_type="column"
                  data-settings='{"background_background":"classic"}'
                >
                  <div
                    class="elementor-widget-wrap elementor-element-populated"
                  >
                    <div
                      class="elementor-element elementor-element-456a874a elementor-widget elementor-widget-image"
                      data-id="456a874a"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div class="elementor-widget-container">
                        <img
                          decoding="async"
                          width="656"
                          height="686"
                          src="/wp-content/uploads/2024/01/Screenshot_78-transformed.png"
                          class="attachment-large size-large wp-image-11"
                          sizes="(max-width: 656px) 100vw, 656px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import { onlyNumbers } from '@/shared/numbers';

export default {
  name: 'MainContent',
  setup() {
    const cpf = ref('');
    const isValidCpf = ref(true);

    const validateCpf = () => {
      var cpfRegex = /^(?:(\d{3}).(\d{3}).(\d{3})-(\d{2}))$/;
      if (!cpfRegex.test(cpf.value)) {
        return false;
      }

      var numeros = cpf.value.match(/\d/g).map(Number);
      var soma = numeros.reduce((acc, cur, idx) => {
        if (idx < 9) {
          return acc + cur * (10 - idx);
        }
        return acc;
      }, 0);

      var resto = (soma * 10) % 11;

      if (resto === 10 || resto === 11) {
        resto = 0;
      }

      if (resto !== numeros[9]) {
        return false;
      }

      soma = numeros.reduce((acc, cur, idx) => {
        if (idx < 10) {
          return acc + cur * (11 - idx);
        }
        return acc;
      }, 0);

      resto = (soma * 10) % 11;

      if (resto === 10 || resto === 11) {
        resto = 0;
      }

      if (resto !== numeros[10]) {
        return false;
      }

      return true;
    };

    const continuar = () => {
      console.log(isValidCpf.value);
      if (!validateCpf()) {
        isValidCpf.value = false;
        return;
      }

      isValidCpf.value = true;
      window.location.href = `https://vivabem-sempre.online/atendimento/?cpf=${onlyNumbers(
        cpf.value
      )}`;
    };

    return { cpf, continuar, isValidCpf };
  },
};
</script>

<style scoped>
@import url(/wp-content/uploads/elementor/css/global6157.css);
@import url(/wp-content/uploads/elementor/css/post-5a964.css);
@import url(/wp-content/uploads/elementor/css/post-7b234.css);
@import url(/wp-content/plugins/elementor/assets/css/frontend-lite.minf3b2.css);
@import url(/wp-content/plugins/elementor-pro/assets/css/frontend-lite.min1ac1.css);

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100vw;
  /* Largura de 100% da viewport */
  box-shadow: 0 4px 4px -2px gray;
  position: relative;
  /* Posicionamento relativo para ajuste de largura */
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  /* Centraliza o cabeçalho */
  margin-right: -50vw;
  background-color: #f9f9f9;
}

.logo {
  max-height: 60px;
  /* Tamanho padrão do logo para telas maiores */
  width: auto;
  /* Mantém a proporção */
}

.small-images {
  display: flex;
}

.small-images img {
  max-height: 15px;
  /* Tamanho ligeiramente aumentado das imagens menores */
  margin-left: 3px;
}

@media screen and (max-width: 600px) {
  .logo {
    max-height: 30px;
    /* Tamanho reduzido do logo para telas menores */
  }

  .small-images img {
    max-height: 12px;
    /* Ajusta o tamanho das imagens menores */
  }
}

/*! elementor - v3.18.0 - 20-12-2023 */
.elementor-column .elementor-spacer-inner {
  height: var(--spacer-size);
}

.e-con {
  --container-widget-width: 100%;
}

.e-con-inner > .elementor-widget-spacer,
.e-con > .elementor-widget-spacer {
  width: var(--container-widget-width, var(--spacer-size));
  --align-self: var(--container-widget-align-self, initial);
  --flex-shrink: 0;
}

.e-con-inner > .elementor-widget-spacer > .elementor-widget-container,
.e-con > .elementor-widget-spacer > .elementor-widget-container {
  height: 100%;
  width: 100%;
}

.e-con-inner
  > .elementor-widget-spacer
  > .elementor-widget-container
  > .elementor-spacer,
.e-con
  > .elementor-widget-spacer
  > .elementor-widget-container
  > .elementor-spacer {
  height: 100%;
}

.e-con-inner
  > .elementor-widget-spacer
  > .elementor-widget-container
  > .elementor-spacer
  > .elementor-spacer-inner,
.e-con
  > .elementor-widget-spacer
  > .elementor-widget-container
  > .elementor-spacer
  > .elementor-spacer-inner {
  height: var(--container-widget-height, var(--spacer-size));
}

.e-con-inner > .elementor-widget-spacer.elementor-widget-empty,
.e-con > .elementor-widget-spacer.elementor-widget-empty {
  position: relative;
  min-height: 22px;
  min-width: 22px;
}

.e-con-inner
  > .elementor-widget-spacer.elementor-widget-empty
  .elementor-widget-empty-icon,
.e-con
  > .elementor-widget-spacer.elementor-widget-empty
  .elementor-widget-empty-icon {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0;
  width: 22px;
  height: 22px;
}

/*! elementor - v3.18.0 - 20-12-2023 */
.elementor-widget-image {
  text-align: center;
}

.elementor-widget-image a {
  display: inline-block;
}

.elementor-widget-image a img[src$='.svg'] {
  width: 48px;
}

.elementor-widget-image img {
  vertical-align: middle;
  display: inline-block;
}

/* Estilos existentes */
.center {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

input[type='text'] {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 2px solid gray;
  border-radius: 4px;
}

.button {
  width: 100%;
  padding: 8px;
  background-color: #2a65af;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

.container {
  width: 320px;
  margin: auto;
}

p {
  color: black;
}

/* Estilo para mensagem de erro */
.error-message {
  color: red;
  margin: 5px 0;
}
</style>
