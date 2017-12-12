import React from 'react';
import CountrySelector from './CountrySelector'

export default class PlayerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: props.player ? props.player.firstname : '',
            surname: props.player ? props.player.surname : '',
            country: props.player ? props.player.country : '',
            message: ''
        }
    }
    onFirstnameChange = (e) => {
        const firstName = e.target.value
        this.setState(() => ({
            firstname: firstName
        }))
    }
    onSurnameChange = (e) => {
        const surname = e.target.value
        this.setState(() => ({ surname }))
    }
    onCountryChange = (e) => {
        const country = e.target.value
        console.log("Country:", country)
        this.setState(() => ({ country }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.surname) {
            this.setState(() => ({
                message: 'Surname cannot be blank!'
            }))
        } else {    
            this.setState(() => ({
                message: ''
            }) )   
            this.props.onSubmit({
                firstname: this.state.firstname,
                surname: this.state.surname,
                country:  this.state.country
            })       
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        placeholder='First name'
                        autoFocus
                        value={this.state.firstname}
                        onChange={this.onFirstnameChange}
                    />
                    <input
                        type='text'
                        placeholder='Surname'
                        value={this.state.surname}
                        onChange={this.onSurnameChange}
                    />
                    <CountrySelector onChange={this.onCountryChange} />
                    <button>Save</button>
                    {this.state.message ? this.state.message : null}
                </form>
            </div>
        )
    }
}

