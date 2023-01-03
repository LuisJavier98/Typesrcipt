(() => {

    type Avenger = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    const avenger: Avenger = {
        nick: 'samuel',
        ironman: 'Robert',
        vision: 'Paul',
        activo: true,
        poder: 1500,
    }
    const { poder, vision } = avenger
    console.log(poder, vision.toLocaleUpperCase())

    const printAvenger = ({ ironman }: Avenger) => {
        console.log(ironman)
    }
    printAvenger(avenger)

    const avengersArr: string[] = ['cap america', 'iron man', 'hulk']

    const [capitan, ironman, hulk] = avengersArr
    console.log(ironman)

})()