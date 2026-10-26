import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-page">
      <div className="clock-card">
        <div className="clock-icon">⏰</div>

        <h1>Digital Clock</h1>

        <p className="subtitle">
          Current Time
        </p>

        <div className="clock-display">
          <div className="time">
            {time.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })}
          </div>

          <div className="date">
            📅{" "}
            {time.toLocaleDateString("en-US", {
              weekday: "long",
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;