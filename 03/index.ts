const tabuadaCreator = (numeros: number[]): string => {
    let resultado: string = '';

    for (let numero of numeros) {
        for (let i = 0; i <= 10; i++) {
            resultado += `${numero} x ${i} = ${numero * i}\n`;
        }

        resultado += '---------------------\n';
    }

    return resultado;
}

const numeros = [1, 5, 2];

console.log(tabuadaCreator(numeros));
