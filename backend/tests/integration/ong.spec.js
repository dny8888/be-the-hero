const request = require("supertest");
const app = require("../../src/app");
const testDatabase = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await testDatabase.migrate.rollback();
    await testDatabase.migrate.latest();
  });
  afterAll(async () => {
    await testDatabase.destroy();
  });
  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APADrxdkfr",
        email: "contato@padrrr.com.br",
        whatsapp: "41996549974",
        city: "Curitiba",
        uf: "PR"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
