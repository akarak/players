import React from 'react';
import { connect } from 'react-redux'
import PlayerForm from './PlayerForm'
import { addPlayer } from '../actions/players'

const AddPlayerPage = (props) => (
  <div>
    This is the add player component
    <PlayerForm
        onSubmit={(pp) => {
            props.dispatch(addPlayer(pp))
            props.history.push('/players')
        }}
    />
  </div>
);

export default connect()(AddPlayerPage);
