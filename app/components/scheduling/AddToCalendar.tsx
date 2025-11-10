'use client';

import { Button } from "@/components/ui/button";
import { CalendarPlus } from "lucide-react";

interface CalendarEvent {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  location: string;
}

// Function to format date for Google Calendar URL
const formatGoogleCalendarDate = (date: Date): string => {
  return date.toISOString().replace(/-|:|\.\d{3}/g, '');
};

export default function AddToCalendar({ title, description, startTime, endTime, location }: CalendarEvent) {
  const handleAddToCalendar = () => {
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${formatGoogleCalendarDate(startTime)}/${formatGoogleCalendarDate(
      endTime
    )}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(
      location
    )}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <Button onClick={handleAddToCalendar} className="flex-1 bg-[#FFDE59] text-[#3334B] hover:bg-[#ffe680] flex items-center gap-2">
      <CalendarPlus className="w-4 h-4" />
      Add to calendar
    </Button>
  );
}