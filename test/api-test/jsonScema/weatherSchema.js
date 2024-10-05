// weatherSchema.js
module.exports = {
    type: "object",
    properties: {
      cod: { type: ["string"] },
      message: { type: "string" },
      list: {
        type: "array",
        items: {
          type: "object",
          properties: {
            dt: { type: "number" },
            main: {
              type: "object",
              properties: {
                temp: { type: "number" },
                feels_like: { type: "number" }
              },
              required: ["temp", "feels_like"]
            }
          },
          required: ["dt", "main"]
        }
      }
    },
    required: ["cod", "message", "list"]
  };
  