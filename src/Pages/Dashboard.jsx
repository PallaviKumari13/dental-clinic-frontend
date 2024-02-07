import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      filterName: "",
      filterDate: "",
      appointment: {},
      loading: false,
      isAuthenticated: false,
    };
    this.dateInput = React.createRef();
    this.timeInput = React.createRef();
  }

  componentDidMount() {
    this.getAppointments();
  }

  getAppointments = () => {
    const token = localStorage.getItem("lcl-stg-tkn");
    if (token) {
      this.setState({
        loading: true,
        isAuthenticated: true,
      });

      axios
        .get("/appointments", {
          headers: {
            "Content-type": "application/json",
            "x-auth-token": token,
          },
        })
        .then((res) =>
          this.setState({
            appointments: res.data,
            loading: false,
          })
        )
        .catch((err) => console.log(err));
    } else {
      this.props.history.push("/login");
    }
  };

  deleteAppointment = (id) => {
    axios
      .delete(`/appointment/${id}`, {
        headers: {
          "Content-type": "application/json",
          "x-auth-token": localStorage.getItem("lcl-stg-tkn"),
        },
      })
      .then((res) => {
        const newAppointments = this.state.appointments.filter(
          (appointment) => appointment._id !== id
        );
        this.setState({ appointments: newAppointments });
        alert(res.data.msg);
      })
      .catch((err) => console.log(err));
  };

  editAppointment = () => {
    const { _id } = this.state.appointment;
    const updatedValues = {
      date: this.dateInput.current.value,
      time: this.timeInput.current.value,
    };

    axios
      .put(`/appointment/${_id}`, updatedValues, {
        headers: {
          "Content-type": "application/json",
          "x-auth-token": localStorage.getItem("lcl-stg-tkn"),
        },
      })
      .then((res) => {
        const updatedAppointments = this.state.appointments.map((appointment) =>
          appointment._id === _id ? { ...appointment, ...updatedValues } : appointment
        );
        this.setState({ appointments: updatedAppointments });
        alert(res.data.msg);
      })
      .catch((err) => console.log(err));
  };

  render() {
    let nr = 1;
    const { filterName, filterDate, loading, appointment } = this.state;
    const { fullname, date, time } = this.state.appointment;
    return (
      <div className="flex flex-col items-center justify-center">
        {/* Your JSX content */}
      </div>
    );
  }
}

export default Dashboard;
