import React from 'react';
import CountrySelector from './CountrySelector'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';

ThemedStyleSheet.registerInterface(aphroditeInterface);

export default class PlayerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: props.player ? props.player.firstname : '',
            initial: props.player ? props.player.initial : '',
            surname: props.player ? props.player.surname : '',
            country: props.player ? props.player.country : '',
            value: props.player ? (props.player.value  / 100).toString() : '',
            notes: props.player ? props.player.notes : '',
            dob: props.player ? moment(props.player.dob) : moment(),
            calendarFocused: false,
            
            message: ''
        }
    }
    onFirstnameChange = (e) => {
        const firstName = e.target.value
        this.setState(() => ({
            firstname: firstName
        }))
    }
    onInitialChange = (e) => {
        const initial = e.target.value
        this.setState(() => ({ initial }))
    }
    onSurnameChange = (e) => {
        const surname = e.target.value
        this.setState(() => ({ surname }))
    }

    onValueChange = (e) => {
        const value = e.target.value
        if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ value }))
        }
    }
    onCountryChange = (e) => {
        const country = e.target.value
        console.log("Country:", country)
        this.setState(() => ({ country }))
    }
    onDateChange = (dob) => {
        if (dob) {
          this.setState(() => ({ dob }));
        }
      };

      onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };
    
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
                initial: this.state.initial,
                surname: this.state.surname,
                country:  this.state.country,
                amount: parseFloat(this.state.amount, 10) * 100,
                dob: this.state.createdAt.valueOf(),
                notes: this.state.notes
        
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
                        placeholder='?'
                        value={this.state.initial}
                        onChange={this.onInitialChange}
                    />
                    <input
                        type='text'
                        placeholder='Surname'
                        value={this.state.surname}
                        onChange={this.onSurnameChange}
                    />
                    <input
                        type='text'
                        placeholder='Value'
                        value={this.state.value}
                        onChange={this.onValueChange}
                    />
                    <CountrySelector onChange={this.onCountryChange} />
                    <SingleDatePicker
                        date={this.state.dob}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note (optional)"
                        value={this.state.notes}
                        onChange={this.onNoteChange}
                    >
                    </textarea>

                    <button>Save</button>

                    {this.state.message ? this.state.message : null}
                </form>
            </div>
        )
    }
}

