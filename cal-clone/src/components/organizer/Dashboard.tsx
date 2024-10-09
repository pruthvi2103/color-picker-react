"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Plus } from "lucide-react";
import { OrganizerHeader } from "./OrganizerHeader";
import { useCalendar } from "@/hooks/use-calendar";
import { useEvent } from "@/hooks/use-event";
import { DateTime } from "luxon";
import { SlotForm } from "./SlotForm";

export function OrganizerDashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { eventData, modifyEvent } = useEvent("c01");
  const {
    calendarData,
    modifyWorkingHours,
    modifySpecialDates,
    addSpecialDate,
    removeSpecialDate,
    addEventType,
    removeEventType,
  } = useCalendar("c01");

  const getISODateinDDMMHHMM = (dateData: string) => {
    const dateString = new Date(dateData);
    const dateISO = DateTime.fromISO(dateString.toISOString());
    return {
      date: dateISO.toFormat("dd-MM-yyyy"),
      time: dateISO.toFormat("HH:mm"),
    };
  };

  return (
    <div className="flex flex-col min-h-screen">
      <OrganizerHeader />
      <main className="flex-1 p-4 md:p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Calendar Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Define Available Slots</CardTitle>
              <CardDescription>Set your recurring availability</CardDescription>
            </CardHeader>
            <CardContent>
              <SlotForm submitHandler={modifyWorkingHours} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Set Time Off</CardTitle>
              <CardDescription>Block out specific dates</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="time-off-date">Date</Label>
                  <Input type="date" id="time-off-date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time-off-reason">Reason (Optional)</Label>
                  <Input
                    type="text"
                    id="time-off-reason"
                    placeholder="e.g., Vacation, Holiday"
                  />
                </div>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Add Time Off
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="today" className="w-full">
              <TabsList>
                <TabsTrigger value="today">Today</TabsTrigger>
              </TabsList>
              <TabsContent value="today">
                <ScrollArea className="h-[300px]">
                  <div className="space-y-4">
                    {eventData.map((event, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100"
                      >
                        <Clock className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="font-medium">{event.eventName}</p>
                          <p className="text-sm text-gray-500">
                            {getISODateinDDMMHHMM(event.eventStart).date}
                          </p>
                          <p className="text-sm text-gray-500">
                            {getISODateinDDMMHHMM(event.eventStart).time} {"-"}{" "}
                            {getISODateinDDMMHHMM(event.eventEnd).date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
