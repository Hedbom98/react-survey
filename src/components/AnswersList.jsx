
import PropTypes from "prop-types"
import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const listOfAnswers = props.listOfAnswers;

  return (
    <ul>
      {listOfAnswers?.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  listOfAnswers: PropTypes.array
}