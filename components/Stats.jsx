import { BiX, BiCheck, BiStopwatch } from "react-icons/bi";

const Stats = ({ stats }) => {
  return (
    <div className="stats-container">
      <div>
        <BiX size="120" color="#ca0216" />
        <span className="highlight"> {stats.misses}</span>
      </div>
      <div>
        <BiCheck size="120" color="#2b8802" />
        <span className="highlight"> {stats.correct}</span>
      </div>
      <div>
        <BiStopwatch size="120" color="#ca5202" />
        <span className="highlight"> {FormatTime(stats.startTime)}</span>
      </div>
    </div>
  );
};
/**
 *
 * @param {Date} time
 */
const FormatTime = (time) => {
  time = time.getTime();
  const diff = new Date().getTime() - time;
  const minutes = Math.floor(diff / 1000 / 60);
  const seconds = Math.floor(diff / 1000) % 60;
  const miliseconds = diff.toString().substring(0, 2);
  return `${minutes}:${seconds}.${miliseconds}`;
};

export default Stats;
