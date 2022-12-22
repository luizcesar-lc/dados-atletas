class Atletas {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return `Infantil`;
    } else if (this.idade >= 12 && this.idade <= 13) {
      return `Juvenil`;
    } else if (this.idade >= 14 && this.idade <= 15) {
      return `Intermediário`;
    } else if (this.idade >= 16 && this.idade <= 30) {
      return `Adulto`;
    } else {
      return `Sem categoria`;
    }
  }

  calculaIMC() {
    let imc = this.peso / (this.altura * this.altura);
    return imc.toFixed(2);
  }

  calculaMediaValida() {
    let soma = 0;
    let i = 0;
    let notas = this.notas.sort();
    let notasComputadas = notas.slice(1, 4);

    notasComputadas.map((nota) => {
      soma = soma + nota;
      i++;
    });
    let mediaValida = soma / i;
    return mediaValida.toFixed(2);
  }

  obtemNomeAtleta() {
    return `Nome: ${this.nome}`;
  }

  obtemIdadeAtleta() {
    return `Idade: ${this.idade}`;
  }

  obtemPesoAtleta() {
    return `Peso: ${this.peso}`;
  }

  obtemAlturaAtleta() {
    return `Altura: ${this.altura}`;
  }

  obtemNotasAtleta() {
    return `Notas: ${this.notas}`;
  }

  obtemCategoria() {
    return `Categoria: ${this.calculaCategoria()}`;
  }

  obtemIMC() {
    return `IMC: ${this.calculaIMC()}`;
  }

  obtemMediaValida() {
    return `Média válida: ${this.calculaMediaValida()}`;
  }
}

let carlos = new Atletas(
  'Cesar Abascal',
  30,
  80,
  1.7,
  [10, 9.34, 8.42, 10, 7.88]
);

console.log(carlos.obtemNomeAtleta());
console.log(carlos.obtemIdadeAtleta());
console.log(carlos.obtemPesoAtleta());
console.log(carlos.obtemAlturaAtleta());
console.log(carlos.obtemNotasAtleta());
console.log(carlos.obtemCategoria());
console.log(carlos.obtemIMC());
console.log(carlos.obtemMediaValida());
