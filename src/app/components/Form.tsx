"use client";
import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Button from "./Button";

type Props = {};

export default function Form({}: Props) {
  const form = useRef<HTMLFormElement | null>(null);
  const username = useRef<HTMLSpanElement>(null);
  const email = useRef<HTMLSpanElement>(null);
  const message = useRef<HTMLSpanElement>(null);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_yr6eqbn",
          "template_m7b2tdd",
          form.current,
          "dYUQXVdJldC9deaTx"
        )
        .then(
          (result: any) => {
            console.log(result);
            console.log(result.text);
            console.log(typeof result);
          },
          (error: any) => {
            console.log(error.text);
          }
        );
    }
  };

  const blurHandler = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    ref: React.RefObject<HTMLSpanElement>
  ) => {
    event.target.value || ref.current?.classList.remove("hidden");
  };

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ref: React.RefObject<HTMLSpanElement>
  ) => {
    event.target.value
      ? ref.current?.classList.add("hidden")
      : ref.current?.classList.remove("hidden");

    event.target.type === "email"
      ? validateEmail(event)
      : validateString(event);
  };
  const validateEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
      console.log("valid");
    } else {
      console.log("invalid");
    }
  };
  const validateString = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    e.target.value ? console.log("valid") : console.log("invalid");
  };
  return (
    <>
      <form ref={form} className="flex flex-col gap-y-2 ">
        <section className="formSection h-12 ">
          <label>
            <span ref={username} className="formSpan">
              Name
            </span>
            <Image
              src={"/icons/check-circle.svg"}
              alt={"Correct Input"}
              width={18}
              height={18}
              className="absolute bottom-1 right-1"
            />

            <input
              type="text"
              name="user_name"
              className="formInputs"
              onBlur={(event) => blurHandler(event, username)}
              onChange={(event) => changeHandler(event, username)}
            />
          </label>
        </section>
        <section className="formSection h-12">
          <label>
            <span ref={email} className="formSpan">
              E-mail
            </span>
            <Image
              src={"/icons/check-circle.svg"}
              alt={"Correct Input"}
              width={18}
              height={18}
              className="absolute bottom-1 right-1"
            />
            <input
              type="email"
              name="user_email"
              className="formInputs"
              onBlur={(event) => blurHandler(event, email)}
              onChange={(event) => changeHandler(event, email)}
            />
          </label>
        </section>
        <section className="formSection h-20 ">
          <label>
            <span
              ref={message}
              className="absolute top-2 left-4 font-bold z-10 opacity-50"
            >
              Message
            </span>
            <Image
              src={"/icons/check-circle.svg"}
              alt={"Correct Input"}
              width={18}
              height={18}
              className="absolute bottom-1 right-1 z-10"
            />
            <textarea
              name="message"
              className="formInputs h-full w-full"
              onBlur={(event) => blurHandler(event, message)}
              onChange={(event) => changeHandler(event, message)}
            />
          </label>
        </section>
        <Button
          type="submit"
          additionalStyles={"mt-5 mb-[470px]"}
          clickHandler={sendEmail}
        >
          Send
        </Button>
      </form>
    </>
  );
}
