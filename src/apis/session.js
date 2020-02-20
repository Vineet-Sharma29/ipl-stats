import axios from "axios";

const CSRF_COOKIE_NAME = "csrftoken";
const CSRF_HEADER_NAME = "X-CSRFToken";

const session = axios.create({
  baseURL: "http://localhost:8000/",
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME
});

export default session;
