import PropTypes from "prop-types"
import "./FeedbackOption.scss"

export default function FeedbackOptions(props) {
    const { good, setGood, neutral, setNeutral, bad, setBad } = props;
    return (
        <>
            <button className='btn success' onClick={() => { setGood(good + 1) }}>good</button>
            <button  className='btn warning' onClick={() => { setNeutral(neutral + 1) }}>neutral</button>
            <button className='btn danger' onClick={()=>{ setBad(bad + 1)}}>bad</button>          
        </>
    )
}

FeedbackOptions.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    setGood: PropTypes.func.isRequired,
    setNeutral: PropTypes.func.isRequired,
    setBad: PropTypes.func.isRequired,
}