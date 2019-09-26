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
      window.digitalData = {
        page: {
          pageInfo: {
            pageName: pageTitle,
            pageType: pageType,
            pagePath: pagePath
          }
        },
        user: {
          userInfo: {
            age: localStorage.getItem('age') || '',
            likeCats: localStorage.getItem('likeCats') || "false"
          }
        }
      }

      var event = new CustomEvent('datalayer-complete');
      var obj = document.querySelector("body");
      obj.dispatchEvent(event);
    }
  }
}
