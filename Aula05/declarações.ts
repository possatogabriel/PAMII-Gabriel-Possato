//Variáveis
let nome: string = 'João';
let idade: number = 25;
let ativo: boolean = true;

//Vetores
let números: number[] = [1,2,3,4];
let nomes: string[] = ['Ana', 'Bruno', 'Carlos'];
let misto: (string | number)[] = ['Ana', 25, 'Carlos', 30];
let misto2: Array<string | number> = ['Ana', 25, 'Carlos', 30];

//Tuplas
let pessoa: [string, number] =  ['Maria', 30];

//União de tipos
let id: number | string = 123;
id = 'ABC123';

//Interfaces
interface Usuário{
    nome: string,
    idade: number,
    email?: string; //opcional
}

//Utilização de interfaces
let novoUsuário: Usuário = {
    nome: 'Amanda',
    idade: 18
};
