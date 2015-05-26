describe ('leapYear', function() {
  it("is false for a year that is not divisible by four", function() {
    expect(leapYear(1999)).to.equal(false);
  });
});
