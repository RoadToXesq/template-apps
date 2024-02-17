import express from 'express';
import { initializeBot, onSaleApprove } from './bot.js';

const PORT = 3002;
const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});

app.post('/on-sale-approve', async (req, res) => {
  try {
    const countryCode = '55';
    const areaCode = req.body.customer.phone_area_code;
    let number = req.body.customer.phone_number;
    if (number.length === 9) {
      number = number.substring(1);
    }
  
    const name = req.body.customer.full_name;
  
    await onSaleApprove(`${countryCode}${areaCode}${number}`, name);
  
    res.send();
  } catch (error) {
    console.log('Ocorreu um erro ao enviar o sale-approve: ', error);

    res.send();
  }
});

initializeBot();
