import PropTypes from "prop-types";
import { useState } from "react";
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

function ItemsList({ list }) {
  return (
    <>
      {list
        .filter((item) => item.value)
        .map((item, index) => (
          <li key={index}>{answersSet[item.name]}</li>
        ))}
    </>
  );
}

ItemsList.propTypes = {
  list: PropTypes.array,
};

// This is the main component being exported from this file
export default function AnswersItem(
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  props
) {
  const color = props.answerItem.formData.color;

  const swimming = props.answerItem.formData.swimming;
  const bathing = props.answerItem.formData.bathing;
  const chatting = props.answerItem.formData.chatting;
  const notime = props.answerItem.formData.notime;

  const list = [
    { name: "swimming", value: swimming },
    { name: "bathing", value: bathing },
    { name: "chatting", value: chatting },
    { name: "noTime", value: notime },
  ];

  return (
    <li>
      <article className="answer">
        <h3>{props.answerItem.formData.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}/4</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <span className="answer__line">
            <ItemsList list={list} />
          </span>
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">
            {props.answerItem.formData.review}
          </span>
        </p>
      </article>
    </li>
  );
}

AnswersItem.propTypes = {
  answerItem: PropTypes.object,
  username: PropTypes.string,
  color: PropTypes.string,
  timeSpent: PropTypes.array,
  review: PropTypes.string,

  formData: PropTypes.object,
  listOfAnswers: PropTypes.array,
};
