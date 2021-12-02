import "./header.css";
import React, { useState } from "react";
import { format } from "date-fns";
import { useAuth } from "../contexts/auth";

import Avatar from "../../assets/image/avataradmin.png";

function Header(props) {
  const { user } = useAuth();
  const [hora, setHora] = useState();
  const [period, setPeriod] = useState("");

  function relogio() {
    let now = new Date();
    let hor = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if (hor >= 12) {
      setPeriod("PM");
    } else {
      setPeriod("AM");
    }

    let hours;
    let minutes;
    let seconds;

    if (hor <= 9) {
      hours = `0${hor}`;
    } else {
      hours = hor;
    }

    if (min <= 9) {
      minutes = `0${hor}`;
    } else {
      minutes = min;
    }

    if (sec <= 9) {
      seconds = `0${sec}`;
    } else {
      seconds = sec;
    }

    let horas = `${hours}:${minutes}:${seconds}`;

    setHora(horas);
  }

  let dateM = new Date();

  const date = format(dateM, "dd/MM/yyyy");

  setInterval(relogio, 1000);

  const fullName = `${user.firstname} ${user.lastname}`;
  return (
    <header className="header d-none d-sm-flex flex-column">
      <div className="content">
        <div className="contentHeader">
          <h1 className="mt3">
            <i className={`fa fa-${props.icon}`}></i>
            {props.title}
          </h1>
          <p className="lead text-muted">{props.subtitle}</p>
        </div>

        <div className="time-base">
          <div className="time">
            <p className="date">{date}</p>
            <p className="hour">
              {hora} <span>{period}</span>
            </p>
          </div>
        </div>

        <div className="avatarContent">
          <div className="user">
            <p className="fullName">{fullName}</p>
            <p style={{ fontSize: 22 }}>{user.usertype}</p>
          </div>
          <img
            src={user.avatar ? user.avatar : Avatar}
            alt="avatar"
            className="header-avatar"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
