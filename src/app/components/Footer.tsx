import React from "react";
import Form from "./Form";

type Props = {};

export default function Footer({}: Props) {


  return (
    <div className="mt-10" >
      <h2>Contact</h2>
      <p>
        I am excited to connect with like-minded individuals, businesses, or
        organizations, so please don't hesitate to contact me. 
      </p>
    <Form />
    </div>
  );
}
