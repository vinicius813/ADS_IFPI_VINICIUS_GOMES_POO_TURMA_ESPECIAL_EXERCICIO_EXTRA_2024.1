class SituacaoFinanceira {
    private valorCreditos : number;
    private valorDebitos : number;

    constructor (valorCreditos : number, valorDebitos : number) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    calcularSaldo() : number {
        return this.valorCreditos - this.valorDebitos;
    }

    obterStatus() : string {
        const saldo = this.calcularSaldo();
        const saldoFormatado = saldo.toLocaleString('pt-BR', {style: 'currency', currency = 'BRL'});

    if (saldo > 0) {
        return `Situação Positiva (${saldoFormatado})`;
    } else if (saldo < 0) {
        return `Situação Negativa (${saldoFormatado})`;
    } else {
        return `Situação Neutra`;
    }
    }
}

// Exemplo de uso do STATUS de minha Situação Financeira no Banco
const situacaofinanceira = new situacaofinanceira(7000, 1000);
const saldo = situacaofinanceira.calcularSaldo();
const status = situacaofinanceira.obterStatus();

console.log(`O meu saldo em conta-corente será R$ ${saldo.toLocaleString('pt-BR', {style: 'currency', currency = 'BRL'})}`);
console.log('E, de acordo com o novo métdo dado, o status de minha  conta-corrente será:  R$ ', situacaofinanceira.status());


