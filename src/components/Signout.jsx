import { React } from "react";
import "./Signout.css";
import { useSignOut } from "react-auth-kit";

function Signout() {
  const signOut = useSignOut();
  return (
    <span className="button-wrapper">
      <button className="cta" onClick={signOut}>
        <span>Sign out</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </span>
  );
}

export default Signout;
