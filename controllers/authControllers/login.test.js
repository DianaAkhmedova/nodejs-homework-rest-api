const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");

const { User } = require("../../models");
const { DB_HOST_TEST, PORT = 3000 } = process.env;

describe("test /users/login route", () => {
  let server = null;

  beforeAll(async () => {
    server = app.listen(PORT);
    await mongoose.connect(DB_HOST_TEST);
  });

  afterAll(async () => {
    server.close();
    await mongoose.connection.close();
  });

  test("test login route with correct data ", async () => {
    const loginData = {
      email: "di@gmail.com",
      password: "123456",
    };

    const res = await request(app).post("/users/login").send(loginData);
    expect(res.statusCode).toBe(200);
    expect(res.body.user.email).toBe(loginData.email);

    const user = await User.findOne({ email: loginData.email });

    expect(res.body.user.subscription).toBe(user.subscription);
    expect(res.body.token).toBe(user.token);
    expect(typeof res.body.user.email === "string").toBe(true);
    expect(typeof res.body.user.subscription === "string").toBe(true);
  });
});
