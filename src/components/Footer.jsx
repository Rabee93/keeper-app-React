import React from "react"




function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return(
<footer>
    <p> Copy write by Rabee {year} </p>
  </footer>
)

}



export default Footer;
