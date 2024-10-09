import { calendars } from "@/staticData/data";

export const getCalendar = (id: string) => {
  const selectedCalendar = calendars.find((cal) => cal.id === id);
  if (selectedCalendar) {
    return selectedCalendar;
  }
  throw Error("Calendar Not found");
};
