const calculateBonus = require("./hw3_1");

describe("calculateBonus - Test Suite with Test Design Techniques", () => {

  // Test 1 - Sum less than 50
  test("returns sum when sum is less than 50", () => {
    expect(calculateBonus(20, 25)).toBe(45);
  });

  // Test 2 - Sum equal to 50
  test("returns sum when sum is exactly 50", () => {
    expect(calculateBonus(30, 20)).toBe(50); 
  });

  // Test 3 - Sum greater than 50
  test("returns 50 when sum is greater than 50", () => {
    expect(calculateBonus(40, 20)).toBe(50); 
  });

  // Test 4 - Sum just below the threshold (49)
  test("returns sum when sum is just below 50", () => {
    expect(calculateBonus(24, 25)).toBe(49); 
  });

  // Test 5 - Sum just above the threshold (51)
  test("returns 50 when sum is just above 50", () => {
    expect(calculateBonus(26, 25)).toBe(50); 
  });

  // Test 6 - One input is zero
  test("returns correct bonus when one input is zero", () => {
    expect(calculateBonus(0, 30)).toBe(30); 
  });

  // Test 7 - Both inputs are negative
  test("returns correct bonus when both inputs are negative", () => {
    expect(calculateBonus(-10, -20)).toBe(-30); 
  });

  // Test 8 - Both inputs are large positive numbers
  test("returns 50 when both inputs are large numbers", () => {
    expect(calculateBonus(1000, 2000)).toBe(50); 
  });

  // Test 9 - Inputs that sum to exactly 0
  test("returns correct bonus when inputs sum to zero", () => {
    expect(calculateBonus(-10, 10)).toBe(0);
  });

  // Test 10 - Sum of exactly 50
  test("returns 50 when sum is exactly 50", () => {
    expect(calculateBonus(50, 0)).toBe(50);
  });

});
