import React from 'react';
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css"

function sundays(day) {
  return day.getDay() === 0;
}

function today() {
  return new Date();
}

class MyComponent extends React.Component {
  state = {
    selectedDay: today(),
  }
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }
  handleDayClick(day, { disabled, selected }) {
    if (disabled) {
      return;
    }
    this.setState({
      selectedDay: selected ? null : day
    })
  }
  render() {
    return (
      <DayPicker
        initialMonth={ new Date() }
        disabledDays={ sundays }
        selectedDays={ this.state.selectedDay }
        onDayClick={ this.handleDayClick }
    />);
  }
}


export default MyComponent;
