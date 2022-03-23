import PercSlope from "../components/PercSlope";
import {ValidateInput, ValidateDot } from "../components/InputValidation";

test("Percent Slope test using rise/run * 100 to get percentage.", () => {
    expect(PercSlope(14.89, 13.5, 125)).toBeCloseTo(1.112);
});

test("Check if number has a '.' ", () => {
    expect(ValidateDot(100.1)).toBe(true);
})