
describe('calculateMonthlyPayment tests', () =>{
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment(10000,1,5)).toEqual('856.07')

    expect(calculateMonthlyPayment(0,0,0)).toEqual("Please make sure the inputed values are real numbers and greater than 0 ")

    expect(calculateMonthlyPayment(0,0)).toEqual("Please make sure the inputed values are real numbers and greater than 0 ")

    expect(calculateMonthlyPayment(-10000,1,5)).toEqual("Please make sure the inputed values are real numbers and greater than 0 ")
  });


  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment(10000,1,5)).toEqual('856.07')
  });

})



