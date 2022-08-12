import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { setOrigin, setDestination } from "../../actions";
import { Container, Table } from "react-bootstrap";
import { getMethodBackendAPI, postMethodBackendAPI, putMethodBackendAPI, deleteMethodBackendAPI } from '../../util/util.js';

import { useNavigate } from "react-router-dom";
import "./Calendar.css";

const scheduleData = [
  {
    Id: 1,
    Subject: "Present Artemis Camping App",
    Location: "Futureproof",
    StartTime: "12-08-2022T16:00:00.000Z",
    EndTime: "12-08-2022T16:30:00.000Z",
    CategoryColor: "#9ab4a9",
  },
  {
    Id: 2,
    Subject: "Party Time!",
    Location: "Everywhere!",
    StartTime: "12-08-2022T18:00:00.000Z",
    EndTime: "13-08-2022T08:30:00.000Z",
    CategoryColor: "#2090a4",
  },
  { 
    Id: 3,
    Subject: "Lake District",
    Location: "Windermere",
    StartTime: "2021-01-10T04:00:00.000Z",
    EndTime: "2021-01-10T05:30:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 2,
    Subject: "Peak District",
    Location: "Sheffield",
    StartTime: "2021-01-11T06:30:00.000Z",
    EndTime: "2021-01-11T08:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 4,
    Subject: "Thetford",
    Location: "",
    StartTime: "2021-01-12T04:00:00.000Z",
    EndTime: "2021-01-12T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },  
];

const CalendarComponent = ({id}) => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const route = useSelector(state => state.routeReducer);
  const [trip, setTrip] = useState(null);

    useEffect(()=>{
        if (id !== undefined && id !== null) {
            const path = 'trip/' + id;
            getMethodBackendAPI(path).then((ret)=>{
                if (ret.ok) {
                    ret.json().then((res)=>{
                        setTrip(res[0]);
                        console.log(res)
                    });
                }
            }).catch((err)=>{
            });
        }
    }, [id]);



  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  const renderHTML = () => {
    return (
      <>
      <Container className="calendar-container">
      
        <ScheduleComponent
          className="calendar-schedule"
          ref={(schedule) => setScheduleObj(schedule)}
          selectedDate={new Date(12, 8, 2022)}
          eventSettings={{ dataSource: scheduleData }}
          dragStart={onDragStart}
          role="schedule"
        >
          <ViewsDirective>
            {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => (
              <ViewDirective  key={item} option={item} />
            ))}
          </ViewsDirective>
          <Inject 
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>

        <Table striped bordered >
          <tbody className="calendar-table-body">
            <tr style={{ height: "50px" }}>
              <td style={{ width: "100%" }}>
                <DatePickerComponent      className="calendar-table" 
                  value={new Date(12, 8, 2022)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </Table>
     
      </Container>
      </>
    );
  };

  return renderHTML();
};

export default CalendarComponent;
