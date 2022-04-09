"use strict";

const apiEndpoint = "thenewinquiry.com";

export default {
  appTitleShort: "L.A. Star",
  appTitle: "Los Angeles Star",
  appTitleShort: "LA-Star",
  appDescription: "Nuxt Headless with Wordpress REST API",
  appThemeColor: "#f7f7f7 ",
  appBgColor: "#00172c ",
  appIcon: "static/icon.png",
  // these are the rest api endpoints and your wordpress url
  client: `https://${apiEndpoint}`,
  wpDomain: `https://${apiEndpoint}/wp-json`,
  url: "https://losangelesstar.netlify.com/", // your website url
  // loadDbName: "[starter_wp]", // db name if needed
  api: {
    homePage: "/wp/v2/pages/2", // the [page_id] from WordPress
  }
};
