import "./question.css";
import { Button } from "@mui/material";

const FinalScreen = ({ score }) => {
  return (
    <div className="result">
      <span className="title">Final score:{score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ width: 185 }}
        href="/quiz"
      >
        Go to HomePage
      </Button>
    </div>
  );
};

export default FinalScreen;
