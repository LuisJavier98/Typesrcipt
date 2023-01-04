(() => {

    class Apocalipsis {
        static instance: Apocalipsis;
        private constructor(public name: string) {
        }
        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('soy apocalipsis unico')
            }
            return Apocalipsis.instance
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis()
    // const apocalipsis2 = new Apocalipsis('soy apocalipsis2...el unico')
    // const apocalipsis3 = new Apocalipsis('soy apocalipsis3...el unico')

    // console.log(apocalipsis);
    // console.log(apocalipsis2);
    // console.log(apocalipsis3);
})()