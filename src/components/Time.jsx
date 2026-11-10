import React, { useEffect, useState } from 'react';
import { getTime } from '../api';

const Time = () => {
  const [time, setTime] = useState({});

  useEffect(() => {
    // Function to fetch the time
    const fetchTime = async () => {
      const result = await getTime();
      setTime(result);
      console.log("update waktu")
    };

    // Fetch the time initially
    fetchTime();

    // Fetch the time every 10 seconds
    const interval = setInterval(fetchTime, 10000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='text-1xl'>Date: {time.day}-{time.month}-{time.year}</div>
      <div className='text-1xl'>Time: {time.time} (GMT +7)</div>
    </div>
  );
};

export default Time;
