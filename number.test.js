describe("Numbers", () => {
  it("Should use remainder operator '%' ", () => {
    const a = 15;
    const b = 10;

    expect(a%b).toBe(5);
    expect((a*b)%b).toBe(0);
  });

  test("Should get average of 3 numbers", () => {
    function average(a,b,c){
      return (a+b+c)/3;
    }
    expect(average(2, 4, 6)).toBe(4);
    expect(average(-5, 12, -7)).toBe(0);
  });

  test("Should get a last digit of the number", () => {
    function last(a){
     return a%10;
    }
    expect(last(123)).toBe(3);
    expect(last(3982)).toBe(2);
  });

  test("Should sum the digits of a given number", () => {
    function sumDigits(x){
      var sum = 0, tmp;
          while (x) {
              tmp = x% 10;
              x = (x - tmp) / 10;
              sum += tmp;
          }
      return sum;  
    }
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(53)).toBe(8);
  });

  test("Should return true if specified number is prime", () => {
    function isPrime(num){
      if(num>1 && num%num==0 && num%2!=0)
      return true;
      else return false;
    }
    expect(isPrime(7)).toBe(true);
    expect(isPrime(4)).toBe(false);

    // TODO: Write additional tests
    expect(isPrime(3)).toBe(false);
    expect(isPrime(0)).toBe(false);
  });

  test("Should convert string to number", () => {
    function convert(a){
      return  Number(a);
    }
    expect(convert('234')).toBe(234);
  });

  test("Should find highest value", () => {
    // TODO: Write 2 functions max and max2. Only one of them should use Math
    function max(a,b){
      return Math.max(a,b);
    }
    function max2(a,b,c,d,e){
      let m=[a,b,c,d,e];
      max=m[0];
      for (let i=1;i<m.length;i++){
        if (m[i]>m[0]){
          max=m[i];
        }
      }
      return max;
    }
    expect(max(1, 2)).toBe(2);
    expect(max2(1, 7, 2, 8, 5)).toBe(8);
  });

  test("Should find lowest value", () => {
    function min(a,b,c,d,e,f){
      return Math.min(a,b,c,d,e,f);
    }
    function min2(a,b,c,d,e,f){
      let m=[a,b,c,d,e];
      min=m[0];
      for (let i=1;i<m.length;i++){
        if (m[i]<m[0]){
          min=m[i];
        }
      }
      return min;
    }
    expect(min(2, 3, 9, 4, 1, 5)).toBe(1);
    expect(min2(2, 3, 9, 4, 1, 5)).toBe(1);
    // TODO: Write additional tests

  });

  test("Should round up a value to the nearest integer", () => {
    function r(a){
      return Math.round(a);
    }
    function r2(a){
       ////DO THIS !
    }
    expect(r(1)).toBe(1);
    expect(r(1.8)).toBe(2);
    expect(r(1.2)).toBe(1);
    expect(r(-1.2)).toBe(-1);
  });

  test("Should get the largest integer less than or equal to a given number.  ", () => {
    function f(a){
      return Math.floor(a);
    }
    function f2(a){
      ////DO THIS !
    }
    expect(r(1)).toBe(1);
    expect(r(1.2)).toBe(1);
    expect(r(1.8)).toBe(1);

    // TODO: Write additional tests
  });

  test("Should return the base10 representation of a binary string", function() {
    function foo(a){
      
      return parseInt(a,10);
    }
    expect(foo(11000000)).toBe(192);
  });

  test("Should convert an eight-bit string number to a binary string", function() {
    expect(/* ??? 127 */).toBe("1010111");
    expect(/* ??? 65 */).toBe("110101");
  });
});
