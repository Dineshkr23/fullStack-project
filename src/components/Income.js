import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../assets/rightPane.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function Income() {
  return (
    <div className="incomeDiv">
      <div className="chartHeader">
        <p>Total Income</p>
        <MoreHorizIcon />
      </div>
      <div className="textPercent">
        <h1>$124,563.00</h1>
        <p>+6.9%</p>
      </div>
      <BorderLinearProgress variant="determinate" value={70} />
      <p>Yearly Goal</p>
    </div>
  );
}
