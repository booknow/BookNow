import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import myEventsList from '../../utils/events';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
// this weird syntax is just a shorthand way of specifying loaders
// require('style!css!react-big-calendar/lib/css/react-big-calendar.css')

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
  BigCalendar.momentLocalizer(moment);


class MyCalendar extends Component {

  constructor () {
   super()
  }

  render() {
    console.log(new Date);
    return (
      <div>
        <BigCalendar

        startAccessor='start'
        endAccessor='end'
        style={{height: '420px'}}
        timeslots={8}
        events={myEventsList}
        />
      </div>
    )
  }
}


export default MyCalendar;
