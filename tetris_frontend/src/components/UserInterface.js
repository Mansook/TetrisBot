import { useEffect } from "react";

const UserInterface = ({ data }) => {
  const { stage, level, score } = data;
  return (
    <div className="scoreboard">
      <div>단계</div>
      <div className="texts">{stage}</div>
      <div>레벨</div>
      <div className="texts">{level}</div>
      <div>점수</div>
      <div className="texts">{score}</div>
    </div>
  );
};
export default UserInterface;
