const request = require("supertest");
const app = require("../app");

describe("JUST 테스트", () => {
  // it("AUTH API KEY PASS", (done) => {
  //   request(app)
  //     .get("/api/v1/user/email/validate?email=dev.seunggyu@gmail.com")
  //     .set(
  //       "x-api-key",
  //       "dd29771d9da1133deb625006590bd83373df0355fb4f791bdebbe9f93537f78f"
  //     )
  //     .expect(200, done);
  // });

  it("AUTH API KEY FAIL", (done) => {
    request(app)
      .get("/api/v1/")
      .set("x-api-key", "api key fail")
      .expect(401)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
