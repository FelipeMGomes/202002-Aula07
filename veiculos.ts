export default class Veiculo {


    public  marca: string;
    public  modelo: string;
    private  placa: string;
    private velocidade: number;
    protected  velocidade_Max: number;
    static Num_veiculos_intanciados: number = 0;


    constructor(marca: string, modelo: string, placa: string, velocidade: number, Velocidade_Max: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.velocidade = velocidade;
        this.velocidade_Max = Velocidade_Max;

        Veiculo.Num_veiculos_intanciados++;
    }

    
    //#region GET/SET
    public getPlaca(): string {
        return this.placa;
    }
    public getVelocidade(): number {
        return this.velocidade;
    }
    public getVelocidade_Max(): number {
        return this.velocidade_Max;
    }
    public setPlaca(placa: string){
        this.placa = placa;
    }
    public setVelocidade(velocidade: number){
        this.velocidade = velocidade;
    }
    public setVelocidade_Max(velocidade_max: number){
        this.velocidade_Max = velocidade_max;
    }
    //#endregion


    public acelerar(Velo: number): void {

        if (Velo <= 10) {

            if (this.velocidade < this.velocidade_Max) {

                this.velocidade += Velo;
                console.log('o carro foi acelerado');

                if(this.velocidade == this.velocidade_Max){
                    console.log('o carro chegou na velocidade maxima!')
                }
            }
            else if(this.velocidade == this.velocidade_Max){
                console.log('O carro está na velocidade maxima!');
            }
             
        }
        else{
            console.log('O limite de aceleração é de 10 KM/h');
        }            
    }

    public frear(): number {
        let tempo = this.velocidade

        this.velocidade = 0

        return (tempo / 10);
    }

    public imprimirDados(): void {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Placa: ${this.placa}`);
        console.log(`Velocidade atual: ${this.velocidade}`);
        console.log(`Velocidade máxima: ${this.velocidade_Max}`);
    }

    public static imprimir_Veiculos_intanciados(): void{
        console.log(`quantidade de veiculos intanciados: ${Veiculo.Num_veiculos_intanciados}`);
    }

}