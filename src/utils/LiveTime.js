import React from "react";

export const LiveTime = () => {
    const locale = 'en';
    const [today, setDate] = React.useState(new Date());
  
    React.useEffect(() => {
        const timer = setInterval(() => {
        setDate(new Date());
      }, 100);
      return () => {
        clearInterval(timer);
      }
    }, []);
  
    // const day = today.toLocaleDateString(locale, { weekday: 'long' });
    // const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
    const hour = today.getHours();
    const wish = `Met ${(hour < 12 && 'Pagi Cuy!') || (hour < 17 && 'Siang Cuy!') || 'Sore Cuy!'}. `;
  
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: '2-digit' });
  
    return <div className="d-inline-block">
        <p style={{fontSize: 12}}>{time}</p>
        <p style={{fontSize: 10}}>{wish}</p>
    </div>
    };