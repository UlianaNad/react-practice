import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRcodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRCode = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <div className="container mx-auto">
      <h1>QR Code Generator</h1>
      <div className="flex justify-center items-center mt-2 mb-2">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQRCode}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRcodeGenerator;
