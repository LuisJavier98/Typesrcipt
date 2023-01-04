(() => {
    abstract class mutante {
        constructor(
            public name: string,
            public realName: string) {

        }
    }

    class Xmen extends mutante {
        salvarMundo() {
            return 'mundo a salvo'
        }
    }
    class villian extends mutante {
        conquistaMundo() {
            return 'mundo conquistado'
        }
    }

    let wolverine = new Xmen('wolverine', 'logan');
    let magneto = new villian('magneto', 'magnus')
    //console.log(wolverine.salvarMundo())
    //console.log(magneto.conquistaMundo())
    const printName = (character: mutante) => {
        console.log(character.realName)
    }
    //printName(magneto)
})()