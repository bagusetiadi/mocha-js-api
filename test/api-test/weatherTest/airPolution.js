const assert = require("chai").expect;
const request = require("supertest");
const Ajv = require("ajv");
const schema = require("../jsonScema/airPolution");  // JSON schema for air pollution data
const config = require("../../../config");   // Config file with URL and appid
const ajv = new Ajv();

describe("Weather Feature", function () {

  it("Verify user can retrieve current air pollution data for Jakarta Selatan", async () => {
    const responseHome = await request(config.url)
      .get("/data/2.5/air_pollution")
      .query({
        lat: "-6.28381815",
        lon: "106.80486324917382",
        appid: config.appid
      })
      .timeout(10000);

      console.log(responseHome.body);

    // a. Assert Response Body
    assert(responseHome.body).to.be.an("object");  // Assert that response body is an object
    assert(responseHome.body).to.include.keys("coord", "list");  // Ensure "coord" and "list" keys are present

    // Assert coordinate data
    assert(responseHome.body.coord).to.include.keys("lon", "lat");  // Ensure "lon" and "lat" are present in "coord"
    assert(responseHome.body.coord.lon).to.be.a("number");  // Assert longitude is a number
    assert(responseHome.body.coord.lat).to.be.a("number");  // Assert latitude is a number

    // Assert list data
    assert(responseHome.body.list).to.be.an("array");  // Ensure "list" is an array
    assert(responseHome.body.list[0]).to.include.keys("main", "components", "dt");  // Assert keys in first item of "list"
    assert(responseHome.body.list[0].main.aqi).to.be.a("number");  // Assert AQI is a number

    // Assert components data
    const components = responseHome.body.list[0].components;
    assert(components).to.include.keys("co", "no", "no2", "o3", "so2", "pm2_5", "pm10", "nh3");  // Assert presence of air quality components
    assert(components.co).to.be.a("number");  // Assert carbon monoxide value is a number
    assert(components.pm2_5).to.be.a("number");  // Assert PM2.5 value is a number

    // b. Assert JSON Schema
    const valid = ajv.validate(schema, responseHome.body);  // Validate against the JSON schema
    assert(valid, `Response schema is invalid: ${ajv.errorsText()}`);  // Assert that the response matches the JSON schema

    // c. Other important attributes to check

    // Assert Status Code
    assert(responseHome.status).to.eql(200);  // Ensure the status code is 200

    // Assert Headers
    assert(responseHome.headers["content-type"]).to.include("application/json");  // Ensure the content type is JSON
  }).timeout(5000);  // Increase timeout to allow for possible network latency
});
