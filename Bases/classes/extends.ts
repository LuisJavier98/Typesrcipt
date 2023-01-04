(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            //console.log('first')
        }

        protected getFullname() {
            return `${this.name} ${this.realName}`
        }
    }
    class Xmen extends Avenger {
        constructor(
            public name: string,
            public realName: string,
            public isMutant: boolean
        ) {
            super(name, realName)
            //console.log('constructor llamado')
        }
        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            this.name = name;
        }

        getFullNameDesdeXmen() {
            console.log(super.getFullname())
        }
    }
    const wolverine = new Xmen('wolverine', 'logan', true)
    wolverine.fullName = 'fernando'
    //console.log(wolverine.fullName)
    //wolverine.getFullNameDesdeXmen()


})()