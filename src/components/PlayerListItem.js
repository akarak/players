import React from 'react';

const PlayerListItem = (props) => (
    <div>
        {props.firstname} - {props.surname} : {props.country}
    </div>
)

export default PlayerListItem