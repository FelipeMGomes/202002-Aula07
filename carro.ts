import Veiculo from "./veiculos";

export class Carro extends Veiculo{

    private portas: number;

    constructor(marca: string, modelo: string, placa: string, velocidade: number, velocidade_Max: number, portas: number){
        super(marca, modelo, placa, velocidade, velocidade_Max);
        this.portas = portas;
    }

    public getPortas(): number{
        return this.portas
    }
    public setPortas(portas: number){
        this.portas = portas;
    }

    public imprimiCarro(){
        this.imprimirDados();
        console.log(`Portas: ${this.portas}`);
    }

}