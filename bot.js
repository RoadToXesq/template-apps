import Whatsapp from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal';
import fs from 'fs';
import numbersHistory from './numbersHistory.json' assert { type: "json" };

const { Client, LocalAuth, MessageMedia } = Whatsapp;

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox'],
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    // executablePath: '/usr/bin/chromium-browser', // linux
  }
});

const historyFilePath = './numbersHistory.json';

export const initializeBot = () => {
  client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
  });

  client.on('authenticated', () => {
    console.log('AUTHENTICATED');
  });

  client.on('auth_failure', msg => {
    console.error('AUTHENTICATION FAILURE', msg);
  });

  client.on('ready', () => {
    console.log('Client is ready!');
  });

  client.on('message', async (msg) => {
    try {
      const senderNumber = msg.from;
      let numberHistory = numbersHistory.find(
        numberHistory => numberHistory.senderNumber === senderNumber
      );
      const senderAlreadySentMessage = !!numberHistory;
      const isAppDelivered = numberHistory?.isAppDelivered;
      const isChatInProgress = numberHistory?.isChatInProgress;
  
      if (isChatInProgress) return;
  
      if (!senderAlreadySentMessage) {
        const newHistory = {
          senderNumber,
          isChatInProgress: true,
          isAppDelivered: false,
        };
  
        numbersHistory.push(newHistory);
  
        saveNumbersHistory();
      }
  
      numberHistory = numbersHistory.find(
        numberHistory => numberHistory.senderNumber === senderNumber
      );
      numberHistory.isChatInProgress = true;
      saveNumbersHistory();
  
      if (isAppDelivered) {  
        numberHistory.isChatInProgress = false;
        saveNumbersHistory();
  
        return;
      }
  
      if (msg.hasMedia && senderAlreadySentMessage && !isAppDelivered) {
        await timeout(2000);
  
        await sendAsyncMessage(msg, `Perfeito, para acessar seu aplicativo de sinais, acesse o link abaixo:\n\nhttps://t.me/+cAtyU9KvP2Q0MjMx`);
        await sendAsyncMessage(msg, `É de extrema importância que você siga os sinais dentro do prazo estabelecido.`);
        await sendAsyncMessage(msg, `Espero ter ajudado, aproveite sua nova fonte de renda extra!! 💰💰`);
  
        numberHistory.isAppDelivered = true;
        numberHistory.isChatInProgress = false;
        saveNumbersHistory();
  
        return;
      }
  
      if (senderAlreadySentMessage) {
        await sendAsyncMessage(msg, `Antes de liberarmos o App, preciso que siga os passos abaixo:`);
        await sendAsyncMessage(msg, `*1)* Realize seu cadastro na plataforma do App, utilize o link abaixo:\n\nhttps://go.aff.7k-partners.com/cwmrdib7\n\n*2)* Recarregue a sua conta com *R$ 50,00* para ativar o Aplicativo (etapa mais importante)`);
        await sendAsyncMessage(msg, `E Lembra de me enviar o comprovante dos R$ 50,00 para eu liberar o acesso pra você, ok?`);
  
        numberHistory.isChatInProgress = false;
        saveNumbersHistory();
  
        return;
      }
  
      await timeout(1500);
  
      const audio1 = MessageMedia.fromFilePath('./assets/audio1.ogg');
      client.sendMessage(msg.from, audio1);
  
      await timeout(18000);
  
      await sendAsyncMessage(msg, `*1)* Realize seu cadastro na plataforma do App, utilize o link abaixo:\n\nhttps://go.aff.7k-partners.com/cwmrdib7\n\n*2)* Recarregue a sua conta com *R$ 50,00* para ativar o Aplicativo (etapa mais importante)`);

      await timeout(2000);

      const audio2 = MessageMedia.fromFilePath('./assets/audio2.ogg');
      client.sendMessage(msg.from, audio2);
  
      await timeout(30000);

      await sendAsyncMessage(msg, `Só me envia o comprovante dos R$ 50,00 e aguarde meu retorno porque eu vou liberar o acesso pra você, ok?`);
      await sendAsyncMessage(msg, `Ahhh, e aproveita que os nossos clientes estão forraaando 🤑`);
  
      await timeout(2000);
  
      const relato1 = MessageMedia.fromFilePath('./assets/relato1.mp4');
      client.sendMessage(msg.from, relato1);
  
      await timeout(3000);
  
      const relato2 = MessageMedia.fromFilePath('./assets/relato2.mp4');
      client.sendMessage(msg.from, relato2);
  
      numberHistory.isChatInProgress = false;
      saveNumbersHistory();
    } catch (error) {
      console.log('Ocorreu um erro no bot: ', error);
    }
  });

  client.initialize();
};

const saveNumbersHistory = () => {
  fs.writeFileSync(historyFilePath, JSON.stringify(numbersHistory, null, 2), 'utf8');
}

const getNumbersHistory = () => {
  if (fs.existsSync(historyFilePath)) {
    numbersHistory = JSON.parse(fs.readFileSync(historyFilePath, 'utf8'));
  }
}

export const onSaleApprove = (customerNumber, customerName) => {
  const chatId = customerNumber + '@c.us';

  client.sendMessage(chatId, `Oie ${customerName}, preciso falar com você, tá por aí? É do suporte do App!`);
}

const sendAsyncMessage = async (msg, myMessage) => {
  await timeout(1000);

  const chat = await msg.getChat();

  chat.sendStateTyping();

  const timeMs = myMessage.length * 30;
  
  await timeout(timeMs);

  client.sendMessage(msg.from, myMessage);
}

const timeout = (timeMs) => {
  return new Promise(resolve => setTimeout(resolve, timeMs));
}
