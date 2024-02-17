import axios from 'axios';

export const consultCpf = async (cpf) => {
  const formattedCpf = getFormattedCpf(cpf);

  try {
    const response = await axios.get(`http://api1.beagafans.site:8080/api/cpfx?CPF=${cpf}`, { timeout: 4000 });

    if (!response || !response.data) {
      return {
        cpf: formattedCpf,
        nome: 'NÃO ENCONTRADO',
        sexo: 'NÃO ENCONTRADO',
        nascimento: 'NÃO ENCONTRADO',
        mae: 'NÃO ENCONTRADO',
        error: true
      }
    }

    const nome = getNome(response.data);

    if (nome === 'NÃO ENCONTRADO') {
      return {
        cpf: formattedCpf,
        nome: 'NÃO ENCONTRADO',
        sexo: 'NÃO ENCONTRADO',
        nascimento: 'NÃO ENCONTRADO',
        mae: 'NÃO ENCONTRADO',
        error: true
      }
    }

    return {
      cpf: formattedCpf,
      nome,
      sexo: getSexo(response.data),
      nascimento: getNascimento(response.data),
      mae: getMae(response.data)
    };
  } catch (error) {
    console.error('Erro ao realizar a requisição:', error);
    return {
      cpf: formattedCpf,
      nome: 'NÃO ENCONTRADO',
      sexo: 'NÃO ENCONTRADO',
      nascimento: 'NÃO ENCONTRADO',
      mae: 'NÃO ENCONTRADO',
      error: true
    };
  }
}

const getFormattedCpf = (cpf) => {
  cpf = cpf.replace(/[^\d]/g, "");

  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

const getNome = (result) => {
  if (!result.NOME || isEmptyResult(result.NOME)) return 'NÃO ENCONTRADO';

  return result.NOME;
}

const getSexo = (result) => {
  if (!result.SEXO || isEmptyResult(result.SEXO)) return 'NÃO ENCONTRADO';

  return result.SEXO;
}

const getNascimento = (result) => {
  if (!result.NASCIMENTO || isEmptyResult(result.NASCIMENTO)) return 'NÃO ENCONTRADO';

  return result.NASCIMENTO;
}

const getMae = (result) => {
  if (!result.MAE || isEmptyResult(result.MAE)) return 'NÃO ENCONTRADO';

  return result.MAE;
}

const isEmptyResult = (string) => {
  const stringWithNoSpaces = string.replace(/\s+/g, '');

  return stringWithNoSpaces === '';
}
