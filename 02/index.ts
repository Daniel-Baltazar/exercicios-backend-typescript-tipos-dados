const todosUsuarios: { nome: string, idade: number, status: boolean }[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

function filtroUsuarios(usuarios: { nome: string, idade: number, status: boolean }[], nome: string): { nome: string, idade: number, status: boolean }[] {

    const encontrados = [];

    for (let item of usuarios) {
        if (item.nome.toLowerCase().includes(nome.toLowerCase())) {
            encontrados.push(item);
        }
    }

    return encontrados;
}

console.log(filtroUsuarios(todosUsuarios, 'gui'));
