import { cpf as cpfValidator } from 'cpf-cnpj-validator';

export const validateCpf = (cpf?: string) => cpfValidator.isValid(cpf);
