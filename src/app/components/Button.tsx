import { type } from "os";
import React from "react";
type Props = {
  type: "button" | "submit" | "reset" | undefined;
  additionalStyles: string;
  clickHandler:(e: React.SyntheticEvent)=>void;
  children: React.ReactNode;
  
};

export default function Button({ type, additionalStyles, children, clickHandler}: Props) {
  return (
    <button type={type} onClick={clickHandler} className={`${additionalStyles} bg-accent-blue font-bold text-white rounded-md text-center py-2 tracking-widest`}>
      {children}
    </button>
  );
}
