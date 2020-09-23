import { Carro } from "./carro";
import { Aviao } from "./aviao";
import Veiculo from "./veiculos";


let concessionaria: Carro [] = [];
let galpao: Aviao [] = [];

for(let i: number = 0 ; i < 10 ; i++){
    concessionaria[i] = (new Carro('marca: ' + i, 'carro: ' + i, 'ABC1D23', 0 , 100, 2));
}

for(let i: number = 0 ; i < 5 ; i++){
    galpao[i] = (new Aviao('embraer', 'jatinho', 'Avião: ' + i, 0 , 700, 10));
}


console.log(concessionaria);
console.log(galpao);
console.log(Veiculo.imprimir_Veiculos_intanciados());