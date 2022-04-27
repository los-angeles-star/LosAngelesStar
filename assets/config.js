"use strict";

export const API_Endpoint = "thenewinquiry.com";

export const Config = {
  appTitle: "Los Angeles Star",
  appTitleShort: "L.A. Star",
  appDescription: "Los Angeles’ first newspaper since 1852.",
  appThemeColor: "#f7f7f7 ",
  appBgColor: "#00172c ",
  appIcon: "static/icon.png",
  // these are the rest api endpoints and your wordpress url
  client: `https://${API_Endpoint}`,
  wpDomain: `https://${API_Endpoint}/wp-json`,
  url: "https://losangelesstar.netlify.com", // your website url
  // loadDbName: "[starter_wp]", // db name if needed
  api: {
    homePage: "/wp/v2/pages/2", // the [page_id] from WordPress
    posts: "/wp/v2/posts",
    users: "/wp/v2/users/",
    media: "/wp/v2/media/",
    tags: "/wp/v2/tags"
  }
};
