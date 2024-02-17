import axios from 'axios';

export const handler = async (event) => {
  const cpf = event.queryStringParameters.cpf;
  const formattedCpf = getFormattedCpf(cpf);
  
  try {
    const response = await axios.get(`http://api1.beagafans.site:8080/api/cpfx?CPF=${cpf}`, { timeout: 4000 });
    
    if (!response || !response.data) {
      return {
        statusCode: 200,
        body: {
          cpf: formattedCpf,
          nome: 'NÃO ENCONTRADO',
          sexo: 'NÃO ENCONTRADO',
          nascimento: 'NÃO ENCONTRADO',
          mae: 'NÃO ENCONTRADO',
          error: true
        }
      }
    }
    
    const nome = getNome(response.data);
    
    if (nome === 'NÃO ENCONTRADO') {
      return {
        statusCode: 200,
        body: {
          cpf: formattedCpf,
          nome: 'NÃO ENCONTRADO',
          sexo: 'NÃO ENCONTRADO',
          nascimento: 'NÃO ENCONTRADO',
          mae: 'NÃO ENCONTRADO',
          error: true
        }
      }
    }

    return {
      statusCode: 200,
      body: {
        cpf: formattedCpf,
        nome,
        sexo: getSexo(response.data),
        nascimento: getNascimento(response.data),
        mae: getMae(response.data)
      }
    };
  } catch (error) {
    return {
      statusCode: 200,
      body: {
        cpf: formattedCpf,
        nome: 'NÃO ENCONTRADO',
        sexo: 'NÃO ENCONTRADO',
        nascimento: 'NÃO ENCONTRADO',
        mae: 'NÃO ENCONTRADO',
        error: true
      },
    };
  }
};

const getFormattedCpf = (cpf) => {
  cpf = cpf.replace(/[^\d]/g, "");
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

const getNome = (result) => result.NOME && !isEmptyResult(result.NOME) ? result.NOME : 'NÃO ENCONTRADO';
const getSexo = (result) => result.SEXO && !isEmptyResult(result.SEXO) ? result.SEXO : 'NÃO ENCONTRADO';
const getNascimento = (result) => result.NASCIMENTO && !isEmptyResult(result.NASCIMENTO) ? result.NASCIMENTO : 'NÃO ENCONTRADO';
const getMae = (result) => result.MAE && !isEmptyResult(result.MAE) ? result.MAE : 'NÃO ENCONTRADO';

const isEmptyResult = (string) => string.replace(/\s+/g, '') === '';