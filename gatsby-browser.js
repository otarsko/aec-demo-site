exports.onRouteUpdate = ({ location, prevLocation }) => {
  let viewName = location.pathname.substr(1, location.pathname.length - 2) || "home";

  // Validate if the Target Libraries are available on your website
  if (typeof adobe != 'undefined' && adobe.target && typeof adobe.target.triggerView === 'function') {
    adobe.target.triggerView(viewName);
  }
}
