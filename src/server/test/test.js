const request = require("supertest");
const app = require("../index");

describe("GET / ", () => {
  it("respond with Hello World", (done) => {
    request(app).get("/").expect("Github actions server test 1", done);
  });
});
