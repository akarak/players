import React from 'react';
import { connect } from 'react-redux'
import PlayerListItem from './PlayerListItem'
import selectPlayers from '../selectors/players'

const PlayersList = (props) => (
  <div>
        <h3>Players list</h3>
        {props.text}
        {props.players.map((player) => {
            return <PlayerListItem {...player } />
        })}
  </div>
);

const mapStateToProps = (state) => {
    return {
        players: selectPlayers(state.players, state.filters),
        text: state.filters.text
    }
}

export default connect(mapStateToProps)(PlayersList)
