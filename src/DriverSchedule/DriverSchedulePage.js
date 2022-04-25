import React, {useState} from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import {format} from 'date-fns';
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import './DriverSchedulePage.css';
// import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";


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
    {
        title: "Big Meeting", 
        allDay: true, 
        start: new Date(2022,4,23),
        end: new Date(2022,6,2)
    },

    {
        title: "Vacation", 
        start: new Date(2022, 6, 0),
        end: new Date(2022, 7, 0)
    },

    {
        title: "Conference", 
        start: new Date(2022, 8, 0),
        end: new Date(2022, 9, 0)
    }
]
function DriverSchedulePage() {
    return (
        <div>
            <Calendar 
                localizer={localizer} 
                events={events} 
                startAccessor="start" 
                endAccessor="end" 
                // style={{height: 500, margin: "50px"}}
                />
        </div>
    )
}

export default DriverSchedulePage
