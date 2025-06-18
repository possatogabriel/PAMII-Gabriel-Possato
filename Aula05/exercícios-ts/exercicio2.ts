var Capitais: string[] = [
    'SP. São Paulo',
    'RJ. Rio de Janeiro',
    'ES. Vitória',
    'BA. Salvador',
    'RN. Natal'
]

function Listar(lista: string[]){
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
};

Listar(Capitais);