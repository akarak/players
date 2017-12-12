import React from 'react';
import { Link } from 'react-router-dom';

const PlayerListItem = (props) => (
    <div>
        <Link to={`/player/${props.id}`}>
            <div>Edit</div>
        </Link>
        {props.firstname} - {props.surname} : {props.country}
    </div>
)

export default PlayerListItem