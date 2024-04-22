const soletrando = (palavra: string): string => {
    const palavraSeparada: string[] = palavra.split('');

    let resultado: string = palavraSeparada[0];

    for (let i = 1; i < palavraSeparada.length; i++) {
        resultado += '-' + palavraSeparada[i];
    }

    return resultado;
}

console.log(soletrando('Baltazar'));
