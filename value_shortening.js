function value_short(value, desiredValueUnit) {
    if (value === undefined || isNaN(value)) {
      return { value: value, valueUnit: desiredValueUnit || "" };
    }
  
    if (desiredValueUnit && !["", "K", "M", "bn", "T"].includes(desiredValueUnit)) {
      return { value: value, valueUnit: desiredValueUnit };
    }
  
    const units = ["", "K", "M", "bn", "T"];
    let selectedUnit = "";
  
    for (let i = units.length - 1; i >= 0; i--) {
      const threshold = Math.pow(1000, i);
      if (value >= threshold) {
        selectedUnit = units[i];
        break;
      }
    }
  
    const normalizedValue = value / Math.pow(1000, units.indexOf(selectedUnit));
    return { value: normalizedValue, valueUnit: selectedUnit };
  }
  
  function testValue_short() {
    // Valid inputs
    const validInputs = [
      { value: 10000, desiredUnit: "", expected: { value: 10, valueUnit: "K" } },
      { value: 10000, desiredUnit: "K", expected: { value: 10, valueUnit: "K" } },
      { value: 100000000, desiredUnit: "M", expected: { value: 100, valueUnit: "M" } },
      { value: 999999999, desiredUnit: undefined, expected: { value: 999.999999, valueUnit: "M" } },
    ];
  
    console.log("Valid Inputs:");
    validInputs.forEach((input) => {
      const result = value_short(input.value, input.desiredUnit);
      console.log(`shortening(${input.value}, "${input.desiredUnit}") =>`, result);
      assertObjectsEqual(result, input.expected);
    });
  
    // Invalid inputs
    const invalidInputs = [
      { value: undefined, desiredUnit: "K", expected: { value: undefined, valueUnit: "K" } },
      { value: undefined, desiredUnit: undefined, expected: { value: undefined, valueUnit: "" } },
      { value: 1234, desiredUnit: "not a real unit", expected: { value: 1234, valueUnit: "not a real unit" } },
    ];
  
    console.log("\nInvalid Inputs:");
    invalidInputs.forEach((input) => {
      const result = value_short(input.value, input.desiredUnit);
      console.log(`shortening(${input.value}, "${input.desiredUnit}") =>`, result);
      assertObjectsEqual(result, input.expected);
    });
  }
  
  // Helper function to compare objects for equality
  function assertObjectsEqual(actual, expected) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      console.error("Test failed:");
      console.error("Expected:", expected);
      console.error("Actual:", actual);
    } else {
      console.log("Test passed.");
    }
  }
  
  testValue_short();
  