'use strict'

require ('./index.html')

const { Just, Nothing, head, pluck, of, withDefault } = require ('./Maybe/')


const datas =
    [ { name: "Joazinho", age: 25 }
    , { names: "Pedrinho", age: 30 }
    , { name: "Zequinha", age: 23 }
    ]

const user =
    { name: "Joazinho"
    , age: 25
    , address:
        { street: "Franklin"
        , number: "3000"
        , cep: {
            street: "dsasdsdasda"
          }
        }
    }



const result = user =>
  of (street => number => street.concat (', ') .concat (number))
    .ap (pluck (['address', 'cep', 'street']) (user))
    .ap (pluck (['address', 'number']) (user))




const app =
  withDefault ('Sem nome')
    (result (user))


console.log (app)
