import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import axios from 'axios';
// import myEventsList from '../../utils/events';
import moment from 'moment';
import API_BASE_URL from '../../utils/api-helper';
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

    let tempArr = []

    const prefs = axios.get(API_BASE_URL + '/api/setuppref')
    .then(function(response) {
      console.log(response);

      let schedPrefs = response.data[0]
      var today = new Date()
      var todaysDay = today.getDay()


      for (var prop in schedPrefs) {
        if (schedPrefs[prop] === 'false') {
          tempArr.push({
            'title': 'Unavailable',
            'allDay': true,
            'start': new Date(),
            'end': new Date()
          })

        }

      }
      console.log(tempArr);
    })


    console.log(new Date);
    return (
      <div>
        <BigCalendar

        startAccessor='start'
        endAccessor='end'
        style={{height: '420px'}}
        timeslots={8}
        events={tempArr}
        />
      </div>
    )
  }
}


export default MyCalendar;
