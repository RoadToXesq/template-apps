<template>
  <div class="d-flex flex-column align-items-center">
    <div class="box box1">
      <h1 class="box-heading">Garanta sua vaga</h1>
      <h1 class="nome-app"></h1>
    </div>
    <div class="box box2">
      <h1 class="section-heading">O QUE VOCÊ VAI LEVAR...</h1>
      <ul class="list">
        <li>
          Acesso ao Ebook Completo com todas as dicas para melhorar sua saúde
          financeira.
        </li>
        <li><strong>30 Dias</strong> de garantia de arrependimento.</li>
      </ul>
      <h2 class="sub-heading">Além disso...</h2>
      <h1 class="course-name">
        BÔNUS: Uma das vagas na lista de espera da versão Premium
      </h1>
      <div class="bonus-course">
        <span class="bonus-badge">de R$174,00</span>
        <span class="bonus-price">R$ 0,00</span>
      </div>
      <h4 class="bonus-description">
        Aprenda como alcançar a <strong>liberdade financeira</strong> em poucos
        passos
      </h4>
      <p class="video-button">
        <a
          href="https://pay.vidamaisfacil.net/NDr8gmOXvPZBmjd"
          target="_blank"
          class="btn btn-default pulse"
        >
          QUERO GARANTIR <br />
          MINHA VAGA POR R$ 97,54!
        </a>
      </p>
      <p class="video-buttons">
        <i class="fa fa-lock"></i>
        <small>Você será enviado para um ambiente totalmente seguro.</small>
      </p>
    </div>
    <footer class="footer">
      Copyright © 2023 | Todos os direitos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: "DefaultPage",
  setup() {},
};
</script>

<style scoped>
/* Reset de Estilos */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilos Gerais */
body {
  background-color: rgb(241, 245, 249);
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Estilos para as Caixas */
.box {
  width: 900px;
  max-width: 95%;
  background-color: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  margin-top: 20px;
}

/* Estilos para TÃ­tulos */
.box-heading,
.section-heading {
  font-size: 40px;
}

.nome-app {
  margin-top: 10px !important;
  color: rgb(124, 58, 237) !important;
}

/* Estilos para BÃ´nus */
.bonus-course {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.bonus-badge {
  font-weight: 700;
  color: #334155;
  font-size: 1.5rem;
  position: relative;
}

.bonus-badge:after {
  content: "";
  width: 100%;
  position: absolute;
  background: rgb(0, 0, 0);
  left: 0;
  top: 50%;
  transform: skew(-5deg, -5deg) scale(1.1);
  height: 1px;
}

.bonus-price {
  font-size: 1.8rem;
  color: #334155;
  font-weight: bold;
}

/* Estilos para Caixa 2 */
.box2 {
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
  border-top: 2px solid #7c3aed;
  border-bottom: 2px solid #7c3aed;
  background-color: white;
}
@media (max-width: 700px) {
  .box2 {
    padding: 2rem 1.6rem;
  }
}

/* Estilos para BotÃ£o */
#video-button-acesso {
  width: 100%;
  padding: 0 1rem;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

.video-button a {
  margin: 0 auto;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    rgb(109, 40, 217),
    rgb(124, 58, 237)
  );
  padding: 0.6rem 1rem;
  width: 100%;
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  gap: 5px;
  border-radius: 10px;
  animation: pulse 0.5s ease alternate infinite;
  box-shadow: 0px 5px 15px 0px rgba(124, 58, 237, 0.4);
  margin-bottom: 15px;
}

/* Estilos para DescriÃ§Ã£o do VÃ­deo */
.video-buttons {
  text-align: center;
  padding: 0 1rem;
  margin: 0 auto;
  width: fit-content;
  color: rgb(71, 85, 105);
}

/* Estilos para RodapÃ© */
.footer {
  font-size: 0.8rem;
  color: #64748b;
  text-align: center;
  margin-bottom: 12px;
}

/* Estilos para Caixa 1 */
.box1 {
  padding: 20px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.section-heading {
  color: #7c3aed;
  text-align: center;
  font-size: 2.5rem;
  margin: 10px 0 0 0;
  margin-bottom: 10px;
}
/* Resto dos estilos do seu CSS... */

.list {
  margin-top: 15px;
  text-align: left;
}

h2 {
  margin: 0;
  margin-top: 1.8rem;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #334155;
}

.course-name {
  margin: 0;
  font-size: 1.3rem !important;
  color: rgb(0, 165, 0);
  margin-bottom: 1rem;
  text-align: center;
}

.bonus-badge {
  font-weight: 700;
  color: rgb(51, 65, 85);
  font-size: 1.5rem;
  position: relative;
  font-size: 1.8rem;
  background-color: rgb(0, 165, 0);
  box-shadow: 0 3px 10px rgba(0, 165, 0, 0.5);
  padding: 1.4rem 1rem;
  box-shadow: rgba(124, 58, 237, 0.5) 0px 5px 10px;
  text-align: center;
  color: white !important;
  padding: 5px;
  border-radius: 8px;
}

.bonus-description {
  text-align: center;
  color: rgb(100, 116, 139);
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 24px;
}

.video-button {
  margin-top: 15px;
  width: 100%;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 1rem;
  padding-left: 1.6rem;
}

li {
  color: #64748b;
  font-size: 1rem;
}
</style>
