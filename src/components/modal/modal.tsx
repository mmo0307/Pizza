import React, { Dispatch, SetStateAction } from "react";
import "./modal.css";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface Props {
  active: boolean;
  setActive: Dispatcher<boolean>;
  children: any;
}

export function Modal({ active, setActive, children }: Props) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
