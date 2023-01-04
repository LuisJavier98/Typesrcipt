// Crear interfaces

interface Conducir {
  encender: boolean,
  velocidadMaxima: number,
  acelear(): void
}


// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Conducir): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Conducir = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir: boolean,
  comer?: boolean,
  llorar?: boolean
}

const guason = {
  reir: true,
  comer: true,
  llorar: false
}

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}

interface Gotica {
  (ciudadanos: string[]): number
}


// Cree una interfaz para la siguiente funcion

const ciudadGotica: Gotica = (ciudadanos: string[]): number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface C {
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio(): void
}

class Persona implements C {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;
  imprimirBio(): void {
    console.log('Hola')
  };
}