function calcularPartidasRankeadas(vitorias, derrotas) {
    // 1. Calculo do saldo de vitorias
    const saldoVitorias = vitorias - derrotas;
    
    // 2. Variável para armazenar o nível
    let nivel = "";

    // 3. Estrutura de repetição que verifica o saldo e atribui a patente
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // 4. Retorna um Objeto ou Texto com as informações necessárias
    return { saldoVitorias, nivel };
}

// Uso da função
const resultado = calcularRank(85, 5); // Exemplo: 80 vitórias de saldo

// Saída
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);