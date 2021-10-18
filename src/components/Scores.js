import { useSelector } from "react-redux"

export const Scores = () => {
    const scores = useSelector(state => state.scores.scores);
    return (
        <pre>
            {JSON.stringify(scores, null, 4)}
        </pre>
    )
}