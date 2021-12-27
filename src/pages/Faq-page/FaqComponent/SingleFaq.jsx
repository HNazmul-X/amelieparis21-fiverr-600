import React from "react";
import { InlineIcon } from "@iconify/react";

function SingleFaq({ data, activeKey, setSelectedFaq, selectedFaq }) {
  return (
    <article onClick={() => setSelectedFaq(activeKey)} className={`single-faq ${selectedFaq === activeKey ? "align-items-start" :"align-items-center"} `}>
      <div className="icon">
        <InlineIcon
          icon={
            selectedFaq === activeKey
              ? "ant-design:minus-outlined"
              : "akar-icons:plus"
          }
        />
      </div>
      <div>
        <h3 className="faq-question">{data.question}</h3>
        <p
          className={`${
            selectedFaq === activeKey ? "d-block" : "d-none"
          } faq-answer`}
        >
          {data.answer}
        </p>
      </div>
    </article>
  );
}

export default SingleFaq;
