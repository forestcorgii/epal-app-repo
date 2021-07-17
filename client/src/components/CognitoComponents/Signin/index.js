import businessLogic from "./bl";
import React from "react";

export default function LoginForm() {
  const { handleSubmit } = businessLogic();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>username:</label>
        <input name="username" value="seanivanf@gmail.com" />

        <label>password:</label>
        <input name="password" value="Shiny@2RECORD" type="password" />

        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}
