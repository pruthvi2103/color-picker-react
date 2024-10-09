import { getEvents } from "@/services/events-service";
import { useState } from "react";

export const useEvent = (calendarId: string) => {
  const data = getEvents(calendarId);

  const [eventData, setEventData] = useState(data);
  const modifyEvent = (eventId: string, newEvent: any) => {
    const newEventData = { ...eventData };
    const eventIndex = newEventData.findIndex((event) => event.id === eventId);
    if (eventIndex !== -1) {
      newEventData[eventIndex] = newEvent;
    }
    setEventData(newEventData);
  };
  return { eventData, modifyEvent };
};
