function printtoConsole(constructor: Function) {
  console.log(constructor)
}
const pritntoConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printtoConsole;
  }
  else {
    return () => { }
  }
}

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}
function CheckValidPokemonId() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethos = descriptor.value
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('el id es de 1 a 800')
      } else {
        return originalMethos(id)
      }
    }
  }
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this, 'getter')
        return 'Fer'
      },
      set(this, val) {
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        })
      }
    }
    return descriptor
  }
}

@bloquearPrototipo
@pritntoConsoleConditional(false)


export class Pokemon {
  @readOnly()
  public publicApi: string = 'http://pokeapi.co'
  constructor(public name: string) {
  }
  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`pokemon guardado en base de datos ${id}`)
  }

}