export const Score = ({ score }) => (
    <div className="score">
        <strong>Score: </strong> <br />
        <strong>Player: </strong> {score.userName} <br />
        <strong>Errors: </strong> {score.errors} <br />
        <strong>Duration(s): </strong> {Math.ceil(score.duration / 1000)} <br />

    </div>
)