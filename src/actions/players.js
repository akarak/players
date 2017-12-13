import uuid from 'uuid'

export const addPlayer = (
    {
        firstname = "",
        initial = "",
        surname = "???",
        country = "GBR",
        favourite = true,
        notes = '',
        value = 0,
        dob = 0,
        wins = 0
    } = {}
) => ({
    type: 'ADD_PLAYER',
    player: {
        id: uuid(),
        firstname,
        initial,
        surname,
        country,
        favourite,   // checkbox
        notes,
        value,      // decimal points
        dob,        // date
        wins,       // numeric
        
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