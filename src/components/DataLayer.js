import React from 'react';
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

export default class DataLayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <></>
    )
  }

  componentDidMount() {
    const { pageTitle, pageType, pagePath } = this.props;

    {
      console.log("componentDidMount", this.props)
      window.digitalData = {
        page: {
          pageInfo: {
            pageName: pageTitle,
            pageType: pageType,
            pagePath: pagePath
          }
        }
      }

      var event = new CustomEvent('datalayer-complete');
      var obj = document.querySelector("body");
      obj.dispatchEvent(event);
    }
  }
}
