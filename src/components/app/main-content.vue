<template>
  <div class="user-bar" ref="userBar"
    ><div class="back"><i class="zmdi zmdi-arrow-left"></i></div
    ><div class="avatar"
      ><img
        src="https://media.discordapp.net/attachments/1067900210543591444/1156276567689920612/Bruxo_Logo_Nova.png?ex=654134f8&amp;is=652ebff8&amp;hm=fa38a35d21a690c1c2bfa79b17ad85cec2739c1f90b2df49c90cb5bd0a670d5f&amp;=&amp;width=1000&amp;height=1000"
        alt="Anderson" /></div
    ><div class="name"
      ><span>Anderson</span>
      <span data-testid="psa-verified" data-icon="psa-verified" class="ms-1"
        ><svg
          viewBox="0 0 18 18"
          height="18"
          width="18"
          preserveAspectRatio="xMidYMid meet"
          class=""
          version="1.1"
          x="0px"
          y="0px"
          enable-background="new 0 0 18 18"
          xml:space="preserve"
        >
          <polygon
            id="Star-2"
            fill="#00DA60"
            points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "
          ></polygon>
          <polygon
            id="Check-Icon"
            fill="#FFFFFF"
            points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "
          ></polygon></svg></span
      ><span class="status">online</span></div
    ></div
  >
  <div>
    <div id="loadingIndicator"> Carregando... </div>
    <typebot-standard style="width: 100%; height: 100vh"></typebot-standard>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'MainContent',
  setup() {
    const userBar = ref(null);

    onMounted(() => {
      const typebotInitScript = document.createElement('script');
      typebotInitScript.type = 'module';
      typebotInitScript.innerHTML = `import Typebot from './web.js'
      
    Typebot.initStandard({ typebot: "sinais", apiHost: "https://api.portaloficial-oferta.me" });
    `;

      document.body.append(typebotInitScript);
    });

    return {
      userBar
    };
  }
};
</script>

<style scoped>
#loadingIndicator {
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
}
</style>

<style>
.user-bar {
  display: none;
}
</style>