import React, { useState, useEffect } from 'react';
import styles from '../styles/countdownTimer.module.css';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const calculateTimeLeft = (): TimeLeft => {
    const targetDateObj = new Date(targetDate);
    const difference = targetDateObj.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={styles.countdownTimer}>
      <div className={styles.outerBox}>
        <div className={styles.timeBox}>
          <p className={styles.timeNumber}>{timeLeft.days}</p>
          <p>Days</p>
        </div>
      </div>
      <div className={styles.outerBox}>
        <div className={styles.timeBox}>
          <p className={styles.timeNumber}>{timeLeft.hours}</p>
          <p>Hours</p>
        </div>
      </div>
      <div className={styles.outerBox}>
        <div className={styles.timeBox}>
          <p className={styles.timeNumber}>{timeLeft.minutes}</p>
          <p>Minutes</p>
        </div>
      </div>
      <div className={styles.outerBox}>
        <div className={styles.timeBox}>
          <p className={styles.timeNumber}>{timeLeft.seconds}</p>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};
