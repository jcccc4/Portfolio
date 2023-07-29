import React from "react";
import Form from "./Form";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div id="contacts" className="pt-10 mb-[500px] ">
      <h2>Contact</h2>
      <p>
        I am excited to connect with like-minded individuals, businesses, or
        organizations, so please don&apos;t hesitate to contact me.
      </p>
      <Form />
    </div>
  );
}
