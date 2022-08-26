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
      onClick={(e) => e.stopPropagation()}
    >
      <div className={active ? "modal_content active" : "modal_content"}>
        <div className="modal_content_header">
          <div>
            <p className="modal_content_title">Our orders</p>
          </div>
          <div>
            <a
              href="#"
              className="fas fa-times"
              onClick={() => setActive(false)}
            ></a>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
