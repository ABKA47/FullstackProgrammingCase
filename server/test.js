const request = require("supertest");

const app = require("./server");

/**
 * Testing get all user endpoint
 */
describe("GET /users", () => {
    it("respond with json containing a list of all users", (done) => {
        request(app)
            .get("/")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });
});

/**
 * Testing user endpoint by giving an existing user
 */
describe("GET /users/:id", () => {
    it("respond with json containing a single user", (done) => {
        request(app)
            .get("/61561949e9fd5ec5367fae20")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });

    it("respond with json user not found when the user does not exists", (done) => {
        request(app)
            .get("/61561949e9fd5ec5367fae20")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(404)
            .expect('"user not found"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

/**
 * Testing POST users endpoint
 */
describe("POST /add-user", () => {
    it("respond with 201 created", (done) => {
        const data = {
            name: "Abdullah",
            surname: "KARACAOĞLU",
            username: "ABKA47",
            title: "Junior FullStack Java Software Engineer",
            email: "abdullahkaracaoglu7@gmail.com",
            role: "Admin"
        };
        request(app)
            .post("/")
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it("respond with 400 on bad request", (done) => {
        const data = {
            // no data
        };
        request(app)
            .post("/users")
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .expect('"user not created"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});