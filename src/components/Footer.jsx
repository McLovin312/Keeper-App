import React from "react";

function Footer(date) {
  return <footer>Copyright © {date}</footer>;
}

const date = new Date();
const currentYear = date.getFullYear();

Footer(currentYear);

export default Footer;
