import React from 'react';

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
        }
      }

      var event = new CustomEvent('datalayer-complete');
      var obj = document.querySelector("body");
      obj.dispatchEvent(event);
    }
  }
}
