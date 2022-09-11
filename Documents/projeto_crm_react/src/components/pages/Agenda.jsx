import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AppHeader, AppFooter } from "../organisms";

export default function Agenda() {
  return (
    <div>
      <AppHeader />

      <main>
        <Calendar />
      </main>

      <AppFooter />
    </div>
  );
}
