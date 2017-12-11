import uuid from 'uuid'

export const addPlayer = (
    {
        firstname = "",
        surname = "???",
        country = "GBR",
        favourite = 0,
        wins = 0
    } = {}
) => ({
    type: 'ADD_PLAYER',
    player: {
        id: uuid(),
        firstname,
        surname,
        country,
        favourite,
        wins
    }
})

export const removePlayer = ({ id } = {}) => ({
    type: 'REMOVE_PLAYER',
    id
})

export const updatePlayer = (id, updates) => ({
    type: 'UPDATE_PLAYER',
    id,
    updates
})