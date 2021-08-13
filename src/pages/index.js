import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import UpperMain from "../components/upper-main"
import MidMain from "../components/mid-main"
import LowerMain from "../components/lower-main"
import Newsletter from "../components/newsletter"
import Videos from "../components/videos"
import {Helmet} from "react-helmet"

const IndexPage = (props) => (
  <Layout>
    <Helmet title="Home | Chip Weinert" />
    <Nav pathExt={props.path} />
    <Banner />
    <UpperMain />
    <Videos/>
    <LowerMain />
    <MidMain />
    <Newsletter />
  </Layout>
)

export default IndexPage
