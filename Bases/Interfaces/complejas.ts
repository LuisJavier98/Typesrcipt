(() => {
    interface Client {
        name: string,
        age?: number,
        address: Adress,
        getfullAdress(id:string):string,
    }
    interface Adress {
        id: number,
        zip: string,
        city: string
    }
    const client: Client = {
        name: 'fernando',
        age: 25,
        address: {
            id: 120,
            zip: 'toronto',
            city: 'otawa',
        },
        getfullAdress(id:string){
            return this.address.zip
        }
    }


})()