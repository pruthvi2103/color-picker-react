import { events } from "@/staticData/data";

export const getEvents = (calendarId: string) => {
  const selectedEvents = events.filter(
    (event) => event.calendar_id === calendarId
  );
  if (selectedEvents) {
    return selectedEvents;
  }

  throw Error("Events Not found");
};
