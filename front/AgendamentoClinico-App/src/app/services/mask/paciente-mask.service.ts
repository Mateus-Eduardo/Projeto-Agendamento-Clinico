
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaskService {

  formatCPF(value: string): string {
    // Remove caracteres não numéricos da string
    const cleanedValue = value.replace(/\D/g, '');

    // Aplica a máscara ao valor numérico
    const formattedValue = this.applyCPFFormat(cleanedValue);

    return formattedValue;
  }

  applyCPFFormat(cpf: string | number): string {
    // Converte o valor para uma string se for um número
    const cpfString = typeof cpf === 'number' ? cpf.toString() : cpf;

    // Adiciona os pontos e o traço ao CPF
    return cpfString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
