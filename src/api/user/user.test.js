const userRoute = require('./index');
const db = require('../../conn/sqldb');
const { User } = db;


describe("User API Unit Testing", () => {
  it("should retrieve a user with specific id", done => {
    chai.request(app)
    .get("/api/users/1")
      .end((err, res) => {
        console.log("-----------------------------")
        console.log(res);
        console.log("-----------------------------")

        expect(res).to.have.status(200);
        expect(res.body.id).to.equals(1)
        done();
      });
  });
});

