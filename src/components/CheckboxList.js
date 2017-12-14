import React from 'react';

export default class CheckboxList extends React.Component {
    componentWillMount = () => {
      this.selectedCheckboxes = new Set();
    }
  
    toggleCheckbox = label => {
      if (this.selectedCheckboxes.has(label)) {
        this.selectedCheckboxes.delete(label);
      } else {
        this.selectedCheckboxes.add(label);
      }
      console.log("hit")
      let value=[]
      for (const checkbox of this.selectedCheckboxes) {
        console.log(checkbox, 'is selected.');
      }
    }
  
    createCheckbox = label => (
      <Checkbox
              label={label}
              handleCheckboxChange={this.toggleCheckbox}
              key={label}
          />
    )
  
    createCheckboxes = () => (
         this.props.items.map(this.createCheckbox)
    )
  
    render() {
      return (
        <div className="container">
            {this.createCheckboxes()}
        </div>
      );
    }
  }
  
  
  class Checkbox extends React.Component {
    state = {
      isChecked: false,
    }
  
    toggleCheckboxChange = () => {
      const { handleCheckboxChange, label } = this.props;
  
      this.setState(({ isChecked }) => (
        {
          isChecked: !isChecked,
        }
      ));
  
      handleCheckboxChange(label);
    }
  
    render() {
      const { label } = this.props;
      const { isChecked } = this.state;
  
      return (
        <div className="checkbox">
          <label>
            <input
                type="checkbox"
                value={label}
                checked={isChecked}
                onChange={this.toggleCheckboxChange}
            />
            {label}
          </label>
        </div>
      );
    }
  }
  
