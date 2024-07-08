import React from "react";

const Modal = ({ id, header, body, footer, close }) => {
  return (
    <div id={id || "Modal"} className="modal fixed z-[1] left-0 top-0 overflow-auto pt-32 w-full h-full bg-emerald-200 px-4">
      <div className="content relative bg-white mg-auto p-0 border-2 border-green-800 relative animate-animateModal">
      <span onClick={close} className="absolute right-2 top-2 cursor-pointer">&times;</span>
        <div className="header p-4 bg-blue-500">
          
            <h2>{header ? header : 'Header'}</h2>
        </div>
        <div className="body p-4 bg-blue-300">
            {
                body ? body : <p>This is body of modal</p>
            }
        </div>
        <div className="footer p-4 bg-blue-500">
        <h2> {footer ? footer : "Footer"} </h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
