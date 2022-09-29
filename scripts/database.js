const database = {
  heads: [
    { id: 1, name: "Lion", price: 5.0, isCarnivore: true },
    { id: 2, name: "Eagle", price: 7.5, isCarnivore: true },
    { id: 3, name: "Snake", price: 2.5, isCarnivore: true },
    { id: 4, name: "Goat", price: 1.49, isCarnivore: false }
  ],
  torsos: [
    { id: 1, name: "Camel", price: 0.45, hasWings: false },
    { id: 2, name: "Bear", price: 0.35, hasWings: false },
    { id: 3, name: "Lion", price: 0.29, hasWings: false },
    { id: 4, name: "Eagle", price: 0.62, hasWings: true }
  ],
  legs: [
    { id: 1, name: "Horse", price: 3.79, isBipedal: false },
    { id: 2, name: "Lizard", price: 2.5, isBipedal: false },
    { id: 3, name: "Ostrich", price: 1.99, isBipedal: true }
  ],
  tails: [
    { id: 1, name: "Scorpion", price: 0.8, isVenomous: true },
    { id: 2, name: "Peacock", price: 0.72, isVenomous: false },
    { id: 3, name: "Lion", price: 0.94, isVenomous: false },
    { id: 4, name: "Lemur", price: 0.61, isVenomous: false }
  ],
  arms: [
    { id: 1, name: "Scorpion", price: 0.05, hasFingers: false },
    { id: 2, name: "Gorilla", price: 0.07, hasFingers: true },
    { id: 3, name: "Sloth", price: 0.03, hasFingers: true },
    { id: 4, name: "Praying Mantis", price: 0.09, hasFingers: false }
  ],
  powers: [
    { id: 1, size: "Lightning Breath" },
    { id: 2, size: "Ice Breath" },
    { id: 3, size: "Fire Breath" }
  ],
  completedMonsters: [{
    id: 1,
    headId: 1,
    torsoId: 1,
    legId: 1,
    tailId: 1,
    armId: 1,
    powerId: 1
  }],
  buildMonster: {}
};

export const getHeads = () => {
  return database.heads.map(head => ({...head}))
}
export const getTails = () => {
  return database.tails.map(tail => ({...tail}))
}
export const getTorsos = () => {
  return database.torsos.map(torso => ({...torso}))
}
export const getLegs = () => {
  return database.legs.map(leg => ({...leg}))
}
export const getArms = () => {
  return database.arms.map(arm => ({...arm}))
}
export const getPowers = () => {
  return database.powers.map(power => ({...power}))
}
export const setHead = (id) => {
  database.buildMonster.headId = id
}
export const setTail = (id) => {
  database.buildMonster.tailId = id
}
export const setArm = (id) => {
  database.buildMonster.armId = id
}
export const setLeg = (id) => {
  database.buildMonster.legId = id
}
export const setTorso = (id) => {
  database.buildMonster.torsoId = id
}
export const setPower = (id) => {
  database.buildMonster.powerId = id
}

export const createChimera = () => {
  const newChimera = {...database.buildMonster}

  const lastIndex = database.completedMonsters.length - 1
  newChimera.id = database.completedMonsters[lastIndex].id + 1

  database.completedMonsters.push(newChimera)

  database.completedMonsters = {}

  document.dispatchEvent(new CustomEvent("stateChanged"))
}
