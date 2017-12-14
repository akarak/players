import React from 'react';
import CountrySelector from './CountrySelector'
import CheckboxList from './CheckboxList'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'


export default class PlayerForm extends React.Component {
    constructor(props) {
        super(props)
        moment.updateLocale('en', {
            longDateFormat : {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY"
            }
        });

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

    onNotesChange = (e) => {
        const notes = e.target.value
        this.setState(() => ({ notes }))
    }

    onValueChange = (e) => {
        const value = e.target.value
        if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ value }))
        }
    }
    onCountryChange = (e) => {
        const country = e.target.value
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
                value: parseFloat(this.state.value, 10) * 100,
                dob: this.state.dob.valueOf(),
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
                    <CountrySelector
                        optionState = {this.state.country} 
                        onChange={this.onCountryChange} />

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
                        onChange={this.onNotesChange}
                    >
                    </textarea>

                    <CheckboxList items={['red','green', 'blue']} />

                    <button>Save</button>

                    {this.state.message ? this.state.message : null}
                </form>
            </div>
        )
    }
}

