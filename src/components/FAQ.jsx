import React from "react";
import SingleQuestion from "../components/Questions";
import { questions } from "../components/index";

const FAQ = () => {
  return (
    <div className="mt-[50px] flex flex-col items-center sm:mx-4">
      <div className="md:max-w-[540px] sm:max-w-[400px]">
        <h1 className="md:text-5xl font-semibold text-center sm:text-[2rem] sm:leading-9 sm:font-semibold">
          Millions of customers rely on our domains and web hosting to get their
          ideas online.
        </h1>
        <h3 className="my-[16px] text-3xl font-medium text-center sm:text-[1.6rem] sm:leading-9 sm:font-semibold">
          Frequently Asked Questions
        </h3>
      </div>

      <section className="mb-16 sm:w-full sm:px-8 lg:px-72 md:px-32">
        {questions.map((question) => {
          return (
            <section>
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default FAQ;
