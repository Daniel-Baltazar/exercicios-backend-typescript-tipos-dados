const etiquetaCreator = (item: { produto: string, lote: number, ano: number, quantidade: number }): string[] => {
    const etiquetas: string[] = [];

    for (let i = 1; i <= item.quantidade; i++) {
        const numString: string = i + '';

        etiquetas.push(`${item.lote}-${item.ano}-${numString.padStart(3, '0')}`);
    }

    return etiquetas;
}

const item = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    quantidade: 5
}

console.log(etiquetaCreator(item));
