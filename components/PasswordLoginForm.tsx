import React from "react";

export const PasswordLoginForm: React.FC = () => {
  return (
    <form>
      <label>
        Email
        <input name="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};
