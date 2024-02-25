class Retangulo {
    private comprimento : number;
    private largura : number;

    constructor (comprimento: number, largura : number) {
        this.comprimento = comprimento;
        this.largura = largura;
    }

    calcularArea() : number {
        return (this.comprimento* this.largura);
    }

    calcularPerimetro() : number {
        return 2 * (this.comprimento + this.largura);
    }

// Agora, eu irei criar um método para verificar se o Retângulo é um Quadrado
    ehquadrado() : boolean {
        return this.comprimento === this.largura
    }
}

// Teste da classe RETÂNGULO
const retangulo1 = new Retangulo(5, 8);
console.log('A área do meu retângulo será: ', retangulo1.calcularArea());
console.log('O perímetro do meu retângulo será: ', retangulo1.calcularPerimetro());
console.log('Com isso, no teste, o retângulo será um quadrado? ', retangulo1.ehquadrado());

// Teste da classe RETÂNGULO com novos valores para comprvar se é um QUADRADO
const quadrado = new Retangulo(4, 4);
console.log('A área do meu quadrado será: ', quadrado.calcularArea());
console.log('O perímetro do meu quadrado será: ', quadrado.calcularPerimetro());
console.log('Com isso, de acordo com o teste dado acima, o meu novo retângulo  será um quadrado? ', quadrado.ehquadrado());

// Fim
