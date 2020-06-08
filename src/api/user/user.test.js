const userRoute = require('./index');
const db = require('../../conn/sqldb');
const { User } = db;


describe("User API Unit Testing", () => {
  it("should retrieve a user with specific id", done => {
    chai
      .request(userRoute)
      .get("/1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        // Please match the object here
        done();
      });
  });
});

