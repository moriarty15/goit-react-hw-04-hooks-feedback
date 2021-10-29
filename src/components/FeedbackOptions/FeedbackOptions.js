import PropTypes from "prop-types";
import "./FeedbackOption.scss";

export default function FeedbackOptions(props) {
    const { onLeaveFeedback, options } = props;
    return (
    <>
      {options.map((name) => {
        return (
          <button key={name} className={`btn ${name}`} onClick={()=>onLeaveFeedback(name)}>
            {name}
          </button>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),    
}; 

