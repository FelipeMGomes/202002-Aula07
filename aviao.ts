import Veiculo from "./veiculos";

export class Aviao extends Veiculo{
    
    private num_passageiros: number;

    constructor(marca: string, modelo: string, placa: string, velocidade: number, velocidade_Max: number, num_passageiros: number){
        super(marca, modelo, placa, velocidade, velocidade_Max);
        this.num_passageiros = num_passageiros;
    }

    public getNum_passageiros(): number{
        return this.num_passageiros
    }
    public setNum_passageiros(num_passageiros: number){
        this.num_passageiros = num_passageiros;
    }

    public imprimiAviao(){
        this.imprimirDados();
        console.log(`numero de passageiros: ${this.num_passageiros}`);
    }
    
}