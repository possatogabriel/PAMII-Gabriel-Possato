function saudação(nome: string): string{
    return `Olá ${nome}`;
}

console.log(saudação("Leandro"));

function exibirUsuário(usuario: Usuário): void{
    console.log(`Nome:${usuario.nome}`);
    console.log(`Idade:${novoUsuário.idade}`);
}

exibirUsuário({nome: `Marcos`, idade: 22});

function listarNomes(nomes: string[]): void{
    nomes.forEach(nome => console.log(nome));
}

listarNomes(['Ana', 'Bruno', 'Carlos']);