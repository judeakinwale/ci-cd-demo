const request = require("supertest");
const server = require("./server");

describe("Server", () => {
  afterAll(() => {
    server.close();
  });

  it('should respond with "Hello, world!" on the root path', async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, world!");
  });
});
