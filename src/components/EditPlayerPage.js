import React from 'react';
import { connect } from 'react-redux'
import PlayerForm from './PlayerForm'
import { updatePlayer, removePlayer } from '../actions/players'

const EditPlayerPage = (props) => {
    console.log(props)
    return (
    <div>
        This is the update player component
        <PlayerForm
            player={props.player}
            onSubmit={(pp) => {
                props.dispatch(updatePlayer(props.player.id, pp))
                props.history.push('/players')
            }}
        />
        <button onClick={() => {
            props.dispatch(removePlayer({id: props.player.id}))
            props.history.push('/players')
        }}>Remove</button>
    </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        player: state.players.find((player) => player.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditPlayerPage);
