import { color } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { motion, LayoutGroup } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <LayoutGroup>
        <h2>
          Any Questions? <span>FAQ</span>
        </h2>
        <Toggle title="Can I learn from scratch?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Do I need prior experience?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </Toggle>
        <Toggle title="How long does it take?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 3rem;
  }
  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    width: 100%;
    margin: 1rem 0rem;
  }
`;

export default FaqSection;
