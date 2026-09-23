import React from "react";

function Footer(date) {
  return (
    <footer>
      <p> Copyright © {date}</p>
    </footer>
  );
}

const date = new Date();
const currentYear = date.getFullYear();

Footer(currentYear);

export default Footer;
