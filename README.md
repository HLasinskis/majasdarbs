## WRITING A JAVASCRIPT FUNCTION AND A SUITE OF TESTS

There are long and short forms of numbers. For example, 10000 can also be written as 10 K, or
100000000 can be written as 100 M.

**Write a "value shortening" JavaScript function which converts a raw number into an
appropriate shortened number and shortened unit, and create an appropriate suite of tests
verifying this function behaves as expected.** For the purpose of this exercise, the function
should simply return an object containing the relevant value and valueUnit.

For example:

- shortening(10000) should return { value: 10, valueUnit: "K" }
- shortening(100000000) should return { value: 100, valueUnit: "M" }

Requirements for the function in more detail:

- The function should take 2 parameters for the value and the desiredValueUnit.
- The supported valueUnits should be "" (no units), "K" (thousands), "M" (millions), "bn"
    (billions) and "T" (trillions).
- If a valid desiredValueUnit is given, then the value should be converted into that unit.
    For example, shortening(123, "K") should return { value: 0.123, valueUnit: "K" }


- If an invalid desiredValueUnit is passed as a parameter, then the given value and
    valueUnit should be returned as-is. For example, shortening(1234, "not a real unit")
    should return { value: 1234, valueUnit: "not a real unit" }
- If the desiredValueUnit is undefined or null, then it should automatically select the
    largest valueUnit which the value has at least one unit of. For example,
    shortening(999999999) should return { value: 999.999999, valueUnit: "M" } since the
    value is at least 1 million, but less than 1 billion.
- If the given value itself is invalid, then the value and valueUnits should be returned as-is.
    For example, shortening(undefined, "K") should return return { value: undefined,
    valueUnit: "K" }
- If the given value itself is invalid and the desiredValueUnit is undefined or null, then the
    automatic valueUnit should be "" (no units) and the value should be returned as-is. For
    example, shortening(undefined) should return { value: undefined, valueUnit: "" }

For the testing, the function should have automated tests created which ensure the function
passes all of the above requirements. It should be verified to be robust to all valid and invalid
inputs, and any calculations should be robust to reasonable margins of floating point arithmetic
errors.

The deliverable for this task is .js files containing the function and the corresponding test suite
scripts.
