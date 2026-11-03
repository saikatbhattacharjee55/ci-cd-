
const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("./app");

const PORT = 3001;
let server;
let baseUrl;

test.before(async () => {
    server = app.listen(PORT, "127.0.0.1");

    await new Promise((resolve, reject) => {
        server.once("listening", resolve);
        server.once("error", reject);
    });

    baseUrl = `http://127.0.0.1:${PORT}`;
});

test.after(async () => {
    if (server) {
        await new Promise((resolve, reject) => {
            server.close(error => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
});

test("GET / should return welcome message", async () => {
    const response = await fetch(`${baseUrl}/`);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.equal(data.status, "Running");
});

test("GET /health should return OK", async () => {
    const response = await fetch(`${baseUrl}/health`);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.equal(data.status, "OK");
});

test("GET /users should return users", async () => {
    const response = await fetch(`${baseUrl}/users`);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.equal(data.success, true);
    assert.ok(Array.isArray(data.data));
});

test("POST /users should create a user", async () => {
    const response = await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Test User",
            role: "Developer"
        })
    });

    const data = await response.json();

    assert.equal(response.status, 201);
    assert.equal(data.data.name, "Test User");
});

test("GET /users/99999 should return 404", async () => {
    const response = await fetch(`${baseUrl}/users/99999`);

    assert.equal(response.status, 404);
});

test("GET unknown route should return 404", async () => {
    const response = await fetch(`${baseUrl}/unknown`);

    assert.equal(response.status, 404);
});
