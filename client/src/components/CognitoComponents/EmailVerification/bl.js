import  { useState } from "react";

export default function EmailVerifierBL() {
  const [code, setcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setcode(e.target.code.value);
  };
  return {handleSubmit,handleChange,code,setcode}
}
