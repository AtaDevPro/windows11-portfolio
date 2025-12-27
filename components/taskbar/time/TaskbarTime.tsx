"use client";

import { useState, useEffect } from "react";

export default function TaskbarTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeString = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: undefined,
  }).format(currentTime);

  const dateString = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(currentTime);

  return (
    <div className="flex flex-col gap-0.5 items-end text-white text-sm leading-tight cursor-default select-none">
      <div>{timeString}</div>
      <div>{dateString}</div>
    </div>
  );
}
