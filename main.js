class Veiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    abstract() {
      throw new Error("Método abstract não implementado");
    }
  
    getInformacoes() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
  }

  class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
      super(marca, modelo);
      this.portas = portas;
    }
  
    abstract() {
      return `Carro: ${this.getInformacoes()}, Portas: ${this.portas}`;
    }
  }

  class Moto extends Veiculo {
    constructor(marca, modelo, cilindrada) {
      super(marca, modelo);
      this.cilindrada = cilindrada;
    }
  
    abstract() {
      return `Moto: ${this.getInformacoes()}, Cilindrada: ${this.cilindrada}cc`;
    }
  }

  // Carros
const carro1 = new Carro("Volkswagen", "Gol", 4);
const carro2 = new Carro("Ford", "Fiesta", 2);
const carro3 = new Carro("Toyota", "Corolla", 4);

// Motos
const moto1 = new Moto("Honda", "CG 160", 160);
const moto2 = new Moto("Yamaha", "YZF-R6", 600);
const moto3 = new Moto("Kawasaki", "Ninja 300", 300);

// Exibindo informações
console.log(carro1.abstract());
console.log(carro2.abstract());
console.log(carro3.abstract());

console.log(moto1.abstract());
console.log(moto2.abstract());
console.log(moto3.abstract());