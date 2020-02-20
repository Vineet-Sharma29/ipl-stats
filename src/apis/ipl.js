import session from "./session";

export default {
  getStats() {
    return session.get("ipl/index");
  }
};
