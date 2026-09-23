import React from "react";

function Footer(date) {
  return (
    <footer>
      <p> Copyright © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
