import React, {
    Component
} from 'react';
import BigCalendar from 'react-big-calendar';
import axios from 'axios';
import moment from 'moment';
;
import 'react-big-calendar/lib/css/react-big-calendar.css'
import later from 'later'
import './booking.css'

BigCalendar.momentLocalizer(moment);


class MyCalendar extends Component {

    constructor(props) {
        super(props)
        this.state = {
          events: []
        }
        let tempArr = []



        axios.get('/api/setuppref/' + this.props.useridfromparent)
                .then((response) => {

                    console.log(response);

                    let schedPrefs = response.data[0]


                    var occurrences;

                    function sched(num) {
                        return later.parse.recur().on(num).dayOfWeek();
                    }
                    var  stateSetter = (occurence, idx) => {
                      occurrences = later.schedule(sched(occurence)).next(100);

                      this.setState({events:[...this.state.events,{
                          'title': '',
                          'allDay': true,
                          'start': occurrences[idx],
                          'end': occurrences[idx]
                      }]})
                    }
                    for (var prop in schedPrefs) {
                        for (var i = 0; i < 30; i++) {
                            if (schedPrefs[prop] === 'false') {
                                switch (prop) {
                                  case 'pa_monday':
                                      stateSetter(3, i)
                                      break;

                                    case 'pa_tuesday':
                                        stateSetter(4, i)
                                        break;
                                    case 'pa_wednesday':
                                      stateSetter(5, i)
                                        break;
                                    case 'pa_thursday':
                                        stateSetter(6, i)
                                        break;
                                  case 'pa_friday':
                                      stateSetter(7, i)
                                      break;
                                    case 'pa_saturday':
                                        stateSetter(1, i)
                                        break;
                                  case 'pa_sunday':
                                      stateSetter(2, i)
                                      break;
                                  default:
                                  break;
                                }
                            }
                        }
                    }
                    console.log(tempArr);
                })
    }

    render() {
        return ( <
            div >
            <
            BigCalendar

            startAccessor='start'
            endAccessor='end'
            style={
                {
                    height: '420px'
                }
            }
            timeslots={
                8
            }
            events={
                this.state.events
            }
            />
            </div>
        )
    }
}


export default MyCalendar;
