export const user = {
  id: 1,
  email: "pruthvishetty5656@gmail.com",
  displayName: "Pruthvi Shetty",
  avatarUrl: "https://avatars.githubusercontent.com/u/29141140",
};

export const calendars = [
  {
    id: "c01",
    config: {
      working_hours: [
        { day_name: "Monday", slot_start: "", slot_end: "" },
        { day_name: "Tuesday", slot_start: "", slot_end: "" },
        { day_name: "Wednesday", slot_start: "", slot_end: "" },
        { day_name: "Thursday", slot_start: "", slot_end: "" },
        { day_name: "Friday", slot_start: "", slot_end: "" },
        { day_name: "Saturday", slot_start: "", slot_end: "" },
        { day_name: "Sunday", slot_start: "", slot_end: "" },
      ],
      specialDates: [
        {
          date: "10-10-24",
          description: "Taking a day off",
        },
      ],
      eventTypes: [
        {
          id: "et01",
          name: "1:1s",
          duration: 1800,
        },
        {
          id: "et02",
          name: "Mentorship",
          duration: 3600,
        },
      ],
    },
  },
];

export const events = [
  {
    id: "e01",
    calendar_id: "c01",
    datetime: "2024-10-09T14:12:07.819Z",
    eventName: "1:1s",
    eventType: "et01",
    eventDescription: "1:1s with John Doe",
    eventDuration: 1800,
    eventStart: "2024-10-09T14:12:07.819Z",
    eventEnd: "2024-10-09T14:12:07.819Z",
  },
];
