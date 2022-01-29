
import { faqData } from './../../../data/FaqData';
import SingleFaq from './SingleFaq';
import {useState } from "react"

function AllFaq() {

    const [selectedFaq, setSelectedFaq] = useState(0)
    console.log(selectedFaq);

  return (
    <section className="container mt-5">
      {faqData.map((data, index) => (
        <SingleFaq data={data} activeKey ={index} key={index} selectedFaq={selectedFaq} setSelectedFaq={setSelectedFaq} />
      ))}
    </section>
  );
}

export default AllFaq;
