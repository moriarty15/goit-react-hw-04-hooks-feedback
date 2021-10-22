import PropTypes from "prop-types"

export default function Statistics(props) {
    const { good, neutral, bad, total, positivePercentage } = props;
    return (
        <>
            <p>Good: <span>{good}</span></p>
            <p>Neutral: <span>{ neutral}</span></p>
            <p>Bad: <span>{bad}</span></p>
            <p>Total: <span>{total}</span></p>
            <p>Positive feedback: {total === 0 ? 0 : <span>{positivePercentage}</span> }%</p>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}