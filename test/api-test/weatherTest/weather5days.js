const assert = require("chai").expect;
const request = require("supertest");
const Ajv = require("ajv");
const schema = require("../jsonScema/weatherSchema");
const config = require("../../../config");
const ajv = new Ajv();

describe("Weather Feature", function () {

  it("Verify user can get 5 day weather forecast of Jakarta Selatan", async () => {
    const responseHome = await request(config.url)
      .get("/data/2.5/forecast")
      .query({
        lat: "-6.28381815",
        lon: "106.80486324917382",
        appid: config.appid
      })
      .timeout(10000);

      // 1. Assert Response Body
    assert(responseHome.body).to.include.keys("cod", "message", "list");  // Asserts keys exist

    // Assert that 'cod' is either a string or number and equals '200'
    assert(String(responseHome.body.cod)).to.eql("200");

    assert(responseHome.body.list).to.be.an("array");  // Ensure 'list' is an array

    // 2. Assert Status Code
    assert(responseHome.status).to.eql(200);  // Ensure HTTP status code is 200

    // 4. Assert JSON Schema
    const valid = ajv.validate(schema, responseHome.body);  // Validate against the schema
    assert(valid, `Response schema is invalid: ${ajv.errorsText()}`);  // Assert schema validity

    // 5. Additional Assertions (example: required fields within list)
    responseHome.body.list.forEach(item => {
      assert(item).to.include.keys("dt", "main");  // Each item in 'list' should have 'dt' and 'main'
      assert(item.main).to.include.keys("temp", "feels_like");  // Ensure 'temp' and 'feels_like' exist
    });

  }).timeout(10000);
});
