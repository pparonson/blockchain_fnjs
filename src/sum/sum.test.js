const expect = require("expect");

import * as sum from "./sum";
// const add = require("./sum.js");

describe("blockchain_fnjs", () => {
  describe("testing environment status", () => {
    it("should properly run tests", () => {
      expect(1).toBe(1);
    });
  });

  describe("sum", () => {
    it("should return 3", () => {
      let result = sum.add(1, 2);
      expect(result).toBe(3);
    });
  });


});