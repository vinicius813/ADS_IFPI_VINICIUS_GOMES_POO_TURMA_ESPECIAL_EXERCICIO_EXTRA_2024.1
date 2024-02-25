var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira(valorCreditos, valorDebitos) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }
    SituacaoFinanceira.prototype.calcularSaldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    SituacaoFinanceira.prototype.obterStatus = function () {
        var saldo = this.calcularSaldo();
        var saldoFormatado = saldo.toLocaleString('pt-BR', { style: 'currency', currency: currency });
        if (saldo > 0) {
            return "Situa\u00E7\u00E3o Positiva (".concat(saldoFormatado, ")");
        }
        else if (saldo < 0) {
            return "Situa\u00E7\u00E3o Negativa (".concat(saldoFormatado, ")");
        }
        else {
            return "Situa\u00E7\u00E3o Neutra";
        }
    };
    return SituacaoFinanceira;
}());
// Exemplo de uso do STATUS de minha Situação Financeira no Banco
var situacaofinanceira = new situacaofinanceira(7000, 1000);
var saldo = situacaofinanceira.calcularSaldo();
var status = situacaofinanceira.obterStatus();
console.log("O meu saldo em conta-corente ser\u00E1 R$ ".concat(saldo.toLocaleString('pt-BR', { style: 'currency', currency: currency })));
console.log('E, de acordo com o novo métdo dado, o status de minha  conta-corrente será:  R$ ', situacaofinanceira.status());
