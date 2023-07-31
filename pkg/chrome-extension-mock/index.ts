import Cookies from "./cookies";
import Downloads from "./downloads";
import Notifications from "./notifications";
import Runtime from "./runtime";
import MockTab from "./tab";
import WebRequest from "./web_reqeuest";
import Storage from "./storage";
import I18n from "./i18n";

const chromeMock = {
  tabs: new MockTab(),
  runtime: new Runtime(),
  webRequest: new WebRequest(),
  notifications: new Notifications(),
  downloads: new Downloads(),
  cookies: new Cookies(),
  storage: new Storage(),
  i18n: new I18n(),
};
// @ts-ignore
global.chrome = chromeMock;

export default chromeMock;
