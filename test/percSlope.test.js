import PercSlope from "../components/PercSlope";

test("Percent Slope test using rise/run * 100 to get percentage.", () => {
    expect(PercSlope(14.89, 13.5, 125)).toBeCloseTo(1.112);
});