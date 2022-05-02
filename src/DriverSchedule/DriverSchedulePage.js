import React, {useState} from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import {format} from 'date-fns';
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import './DriverSchedulePage.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format, 
    parse, 
    startOfWeek, 
    getDay, 
    locales
})

const events = [
    // {
    //     title: "Big Meeting", 
    //     allDay: true, 
    //     start: new Date(2022,4,23),
    //     end: new Date(2022,6,2)
    // },

    // {
    //     title: "Vacation", 
    //     start: new Date(2022, 6, 0),
    //     end: new Date(2022, 7, 0)
    // },

    // {
    //     title: "Conference", 
    //     start: new Date(2022, 8, 0),
    //     end: new Date(2022, 9, 0)
    // }
]
function DriverSchedulePage() {
    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div className="driver_schedule">
            <h1>Calendar</h1>

            <h2>Add New Event</h2>

            <div>
                <input className="event_title" type="text" placeholder="Add Title" style={{width: "20%", marginRight: "10px"}}
                value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
                <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}}
                selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
                />
                <DatePicker placeholderText="End Date"
                selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}
                />
                <button style={{marginTop: "10px"}} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>

            <Calendar 
                localizer={localizer} 
                events={allEvents} 
                startAccessor="start" 
                endAccessor="end" 
                style={{height: 500, margin: "50px"}}
                />
        </div>
    );
}

export default DriverSchedulePage