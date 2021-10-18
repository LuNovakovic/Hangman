import { useSelector } from "react-redux"
import { Score } from "./Score";

export const Scores = () => {
    const scores = useSelector(state => state.scores.scores);
    return (
        <div className="scores">
            {scores.map(
                (score) => <Score key={score.id} score={score} />
            )}
        </div>
    )
}