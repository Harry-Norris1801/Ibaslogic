import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { slugify } from "../../util/utilityFunction"
import recentPostStyles from "./sidebar.module.scss"

const SidebarPostMarkup = ({ fluid, title, slug }) => {
  return (
    <li>
      <Img className={recentPostStyles.imgTumbnail} fluid={fluid} />
      <Link to={`/blog/${slugify(slug)}`}>{title}</Link>
    </li>
  )
}

export default SidebarPostMarkup