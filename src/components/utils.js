export const calculatePrice = items => items.reduce((acc, game) => acc += game.price, 0)
