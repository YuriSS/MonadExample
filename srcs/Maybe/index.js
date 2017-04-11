'use strict'


/* Type Maybe
 * | Just a
 * | Nothing
 * */


const Just = a =>
  ({ a
   , map: f => validate (a) ? Just (f (a)) : Nothing
   , chain: f => validate (a) ? f (a) : Nothing
   , fold: (f, g) => g (a)
   , ap: other => other.map (a)
  })


const Nothing =
  { a: 'Nothing'
  , map: f => Nothing
  , chain: f => Nothing
  , fold: (f, g) => f ()
  , ap: other => Nothing
  }


// validate :  a -> Bool
const validate = x =>
  (x !== null) && (x !== undefined)


const of = x =>
  validate (x) ? Just (x) : Nothing


// withDefault : b -> Maybe a -> b || a
const withDefault = b => ma =>
  ma.fold (always (b), identity)


// isNothing : Maybe a -> Bool
const isNothing = m =>
  m.fold (always (true), always (false))



const always = a => _ => a
const identity = a => a



// head : List a -> a
const head = xs =>
  of (xs [0])


// pluck : List String -> {a} -> a
const pluck = xs => a =>
  xs.reduce
    ( (m, key) => m.chain (object => of (object [key]))
    , of (a)
    )


module.exports =
  { Just
  , Nothing
  , head
  , pluck
  , withDefault
  , of
  }