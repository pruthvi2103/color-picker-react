import { getCalendar } from "@/services/calendar-service";
import { useState } from "react";

export const useCalendar = (id: string) => {
  const data = getCalendar(id);
  const [calendarData, setCalendarData] = useState(data);
  const modifyWorkingHours = (
    dayName: string,
    slotStart: string,
    slotEnd: string
  ) => {
    const newCalendarData = { ...calendarData };
    const dayIndex = newCalendarData.config.working_hours.findIndex(
      (day) => day.day_name === dayName
    );
    if (dayIndex !== -1) {
      newCalendarData.config.working_hours[dayIndex].slot_start = slotStart;
      newCalendarData.config.working_hours[dayIndex].slot_end = slotEnd;
    }
    setCalendarData(newCalendarData);
  };
  const modifySpecialDates = (newDate: string, description: string) => {
    const newCalendarData = { ...calendarData };
    const specialDateIndex = newCalendarData.config.specialDates.findIndex(
      (specialDates) => specialDates.date === newDate
    );
    if (specialDateIndex !== -1) {
      newCalendarData.config.specialDates[specialDateIndex].description =
        description;
    }
    setCalendarData(newCalendarData);
  };
  const addSpecialDate = (newDate: string, description: string) => {
    const newCalendarData = { ...calendarData };
    newCalendarData.config.specialDates.push({ date: newDate, description });
    setCalendarData(newCalendarData);
  };
  const removeSpecialDate = (date: string) => {
    const newCalendarData = { ...calendarData };
    newCalendarData.config.specialDates =
      newCalendarData.config.specialDates.filter(
        (specialDates) => specialDates.date !== date
      );
  };
  const addEventType = (name: string, duration: number) => {
    const newCalendarData = { ...calendarData };
    newCalendarData.config.eventTypes.push({ name, duration });
    setCalendarData(newCalendarData);
  };
  const removeEventType = (name: string) => {
    const newCalendarData = { ...calendarData };
    newCalendarData.config.eventTypes =
      newCalendarData.config.eventTypes.filter(
        (eventTypes) => eventTypes.name !== name
      );
  };

  console.log(calendarData);

  return {
    calendarData,
    modifyWorkingHours,
    modifySpecialDates,
    addSpecialDate,
    removeSpecialDate,
    addEventType,
    removeEventType,
  };
};
