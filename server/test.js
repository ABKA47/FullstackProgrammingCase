const request = require("supertest");

const app = require("./server.js");

/**
 * Testing get all user endpoint
 */
describe("GET /users", () => {
    it("respond with json containing a list of all users", (done) => {
        request(app)
            .get("/users")
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
            .get("/users/61561949e9fd5ec5367fae20")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });

    it("respond with json user not found when the user does not exists", (done) => {
        request(app)
            .get("/users/61561949e9fd5ec5367fa435")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(404)
            .expect('{"message":"Not found user with id=61561949e9fd5ec5367fa435"}')
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
    it("respond with 200 created", (done) => {
        const data = {
            name: "Abdullah",
            surname: "KARACAOĞLU",
            username: "ABKA47",
            title: "Junior FullStack Java Software Engineer",
            email: "abdullahkaracaoglu7@gmail.com",
            role: "Admin"
        };
        request(app)
            .post("/add-user")
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

});

describe("PUT /update-user/:id", () => {
    it("respond with 200 created", (done) => {
        const data = {
            name: "Abdullah",
            surname: "KARACAOĞLU",
            username: "ABKA47",
            title: "Junior FullStack Java Software Engineer",
            email: "abdullahkaracaoglu7@gmail.com",
            role: "Admin"
        };
        request(app)
            .put("/update-user/61561949e9fd5ec5367fae20")            
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe("DELETE /delete-user/:id", () => {
    it("respond with 200 created", (done) => {      
        request(app)
            .delete("/delete-user/61561949e9fd5ec5367fae20")             
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});