"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Button from "./Button";

type Props = {};

export default function Form({}: Props) {
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidMessage, setIsValidMessage] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);
  const statusMessageRef = useRef<HTMLSpanElement>(null);
  const username = useRef<HTMLSpanElement>(null);
  const email = useRef<HTMLSpanElement>(null);
  const message = useRef<HTMLSpanElement>(null);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const isFormValid = isValidName && isValidEmail && isValidMessage;
    statusMessageRef.current?.classList.remove("hidden");
    statusMessageRef.current?.classList.add("flex", "flex-row", "gap-2");
    setIsFormValid(isFormValid);
    if (form.current && isFormValid) {
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
    } else {
      console.log("Invalid Form Input");
    }
  };

  const focusHandler = (ref: React.RefObject<HTMLSpanElement>) => {
    ref.current?.classList.add("hidden");
    setIsFocused(true);
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

    switch (event.target.name) {
      case "user_name":
        setIsValidName(validateString(event));
        break;
      case "user_email":
        setIsValidEmail(validateEmail(event));
        break;
      case "message":
        setIsValidMessage(validateString(event));
        break;
    }
    event.target.type === "email"
      ? validateEmail(event)
      : validateString(event);
  };
  const validateEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): boolean =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value);

  const validateString = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): boolean => Boolean(e.target.value);

  return (
    <>
      <form ref={form} className="flex flex-col gap-y-2  mb-[470px]">
        <section className="formSection h-12 ">
          <label>
            <span ref={username} className="formSpan">
              Name
            </span>
            {isFocused &&
              (isValidName ? (
                <Image
                  src={"/icons/check-circle.svg"}
                  alt={"Correct Input"}
                  width={18}
                  height={18}
                  className="absolute bottom-1 right-1 z-10"
                />
              ) : (
                <Image
                  src={"/icons/delete-circle.svg"}
                  alt={"Correct Input"}
                  width={18}
                  height={18}
                  className="absolute bottom-1 right-1 z-10"
                />
              ))}

            <input
              type="text"
              name="user_name"
              className="formInputs"
              onFocus={() => focusHandler(username)}
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
            {isFocused &&
              (isValidEmail ? (
                <Image
                  src={"/icons/check-circle.svg"}
                  alt={"Correct Input"}
                  width={18}
                  height={18}
                  className="absolute bottom-1 right-1 z-10"
                />
              ) : (
                <Image
                  src={"/icons/delete-circle.svg"}
                  alt={"Correct Input"}
                  width={18}
                  height={18}
                  className="absolute bottom-1 right-1 z-10"
                />
              ))}
            <input
              type="email"
              name="user_email"
              className="formInputs"
              onFocus={() => focusHandler(email)}
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
            {isFocused &&
              (isValidMessage ? (
                <Image
                  src={"/icons/check-circle.svg"}
                  alt={"Correct Input"}
                  width={18}
                  height={18}
                  className="absolute bottom-1 right-1 z-10 "
                />
              ) : (
                <Image
                  src={"/icons/delete-circle.svg"}
                  alt={"Correct Input"}
                  width={18}
                  height={18}
                  className="absolute bottom-1 right-1 z-10"
                />
              ))}
            <textarea
              name="message"
              className="formInputs h-full w-full p-2"
              onFocus={() => focusHandler(message)}
              onBlur={(event) => blurHandler(event, message)}
              onChange={(event) => changeHandler(event, message)}
            />
          </label>
        </section>
        <Button
          type="submit"
          additionalStyles={"mt-5"}
          clickHandler={sendEmail}
        >
          Send
        </Button>
        <span ref={statusMessageRef} className={`hidden`}>
          {isFormValid ? (
            <span className="text-green-500">Message Sent</span>
          ) : (
            <span className="text-red-500">There are invalid inputs</span>
          )}
          {isFormValid ? (
            <Image
              src={"/icons/check-circle.svg"}
              alt={"Correct Input"}
              width={18}
              height={18}
            />
          ) : (
            <Image
              src={"/icons/delete-circle.svg"}
              alt={"Correct Input"}
              width={18}
              height={18}
            />
          )}
        </span>
      </form>
    </>
  );
}
