export const ExtVersion = "0.10.0";

export const ExtServer =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/"
    : "https://ext.scriptcat.org/";

export const ExternalWhitelist = [
  "greasyfork.org",
  "scriptcat.org",
  "tampermonkey.net.cn",
  "openuserjs.org",
];

export const ExternalMessage = "externalMessage";
