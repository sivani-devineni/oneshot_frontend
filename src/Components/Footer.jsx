import React from "react"
import { Link } from 'react-router-dom'

const Footer = () => {
return(
  <div style={{marginTop:"25%"}}>
<footer>
<ul className="footer_categories">
<li> <Link to="/posts/categories/Agriculture"> Agriculture</Link></li>
<li> <Link to="/posts/categories/Business"> Business </Link> </li>
<li> <Link to="/posts/categories/Education"> Education </Link> </li>
<li> <Link to="/posts/categories/Entertainment"> Entertainment </Link> </li>
<li> <Link to="/posts/categories/Art"> Art </Link> </li>
<li> <Link to="/posts/categories/Investment"> Investment </Link> </li>
<li> <Link to="/posts/categories/Uncategorised"> Uncategorised </Link> </li>
<li> <Link to="/posts/categories/Weather"> Weather </Link> </li>
</ul>

<div className="footer_discalimer">
  <small> Created for oneShot.ai Assignment</small>
</div>

</footer>
</div>
)
}
export default Footer;