(() => {
    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: 'ironman',
        weapon: 'armorsuit'
    }

    const capAmerica: Avenger = {
        name: 'cap america',
        weapon: 'escudo'
    }
    let duncion=()=>{}

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }
    const avengers: Avenger[] = [ironman, capAmerica, thor]

    for (const avenger of avengers) {
        console.log(avenger)
    }
})()