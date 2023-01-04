interface Carro {
    carroceria: string,
    modelo: string,
    antibalas: boolean,
    pasajeros: number,
    disparar?: () => void
}
// Objetos
const batimovi: Carro = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};