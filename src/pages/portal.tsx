import { CountdownTimer } from "@/components/CountdownTimer";
import styles from "../styles/countdownTimer.module.css";

export default function portal() {
  console.log("current: ", new Date());

  const links = [
    {
      link: "https://marinamuse-2024.vercel.app/",
      buttonName: "MarinaMuse",
    },
    {
      link: "https://discord.gg/EQ2zUs33",
      buttonName: "Hackathon Discord",
    },
    {
      link: "https://marinahacks-4-0.devpost.com/?ref_feature=challenge&ref_medium=discover",
      buttonName: "DevPost",
    },
  ];
  return (
    <div
      style={{
        height: "100vh",
        paddingTop: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          paddingBottom: "10px",
        }}
        className={styles.timeNumber}
      >
        Hackathon Countdown:{" "}
      </h2>
      <CountdownTimer targetDate={"2024-10-27T11:00:00"} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        {links.map((link) => (
          <a
            key={link.buttonName}
            href={link.link}
            target="_blank"
            className={`${styles.applicationButton} btn btn-primary rounded-md text-2xl border-none px-10 py-2`}
            style={{
              backgroundColor: "#E276AA",
              textTransform: "none",
              margin: "10px 0px",
            }}
          >
            {link.buttonName}
          </a>
        ))}
      </div>
    </div>
  );
}
