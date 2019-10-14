describe("Data types", () => {
  describe("Boolean", () => {
    it("Should define False and True boolean variables", () => {
      let a=true;
      let b=false;
      expect(b).toBeFalsy();
      expect(b).toBe("boolean");
      expect(a).toBeTruthy();
      expect(a).toBe("boolean");
    });

    it("Should use different logical operators with 2 boolean operands", () => {
      const FALSE = false;
      const TRUE = true;

      let useLogicalAnd = FALSE && TRUE;
      let useLogicalOr = FALSE || TRUE;
      let useLogicalNot= (!FALSE) && (!FALSE);
      let useDoubleLogicalNot=!!TRUE;

      expect(useLogicalAnd).toBe(false);
      expect(useLogicalOr).toBe(true);
      expect(useLogicalNot).toBe(true);
      expect(useDoubleLogicalNot).toBe(false);
    });

    it("Should use different logical operators with at least 3 boolean operands", () => {
      const a = false;
      const b = false;
      const c = true;
      const d = true;

      let cond1 = (a || c) && d;
      let cond2 = (b || c) &&a;
      let cond3 = (a && b)||c;
      let cond4 = !d && !a && !c;

      expect(cond1).toBe(true);
      expect(cond2).toBe(true);
      expect(cond3).toBe(false);
      expect(cond4).toBe(false);
    });
  });

  describe("Number", () => {
    it("Should define different numbers", () => {
      let a=10;
      let b=11001;
      let c=20.5;
      let d=-Infinity;
      let nan=NaN;

      expect(a).toBe(10);
      expect(!Number.isFinite(b)).toBe(true);
      expect(c).toBeGreaterThan(20);
      expect(c).toBeLessThan(21);
      expect(d).toBeLessThan(0);
      expect(nan).toBeNaN();
    });

    it("Should use base operators", () => {
      const a = 10;
      const b = 30;

      expect(a + b).toBe(40);
      expect(a-b).toBe(-20);
      expect(b-a).toBe(20);
      expect(a*b).toBe(300);
      expect(b/a).toBe(3);
      expect(a/b).toBeCloseTo(0.333);
    });

    it("Should combine base operators", () => {
      const a = 10;
      const b = 30;
      const c = 100;

      expect(a + b + c).toBe(140);
      expect(((a+b)*c)/a).toBe(400);
      expect((b-a)*c).toBe(2000);
      expect((b+b/a)*c).toBe(3300);
      expect(a*b*c).toBe(30000);
      expect((a-b)*c).toBe(-2000);
      expect((a+b)/a).toBe(4);
    });

    it("Should convert to number", () => {
      expect(Number("123")).toBe(123);
      expect(Number("12.3")).toBe(12.3);

      expect(Number("12")).toBe(12);
      expect(Number("12.3")).toBe(12.3);
      expect(Number("")).toBe(0);
      expect(Number("0")).toBe(0);
      expect(Number("0b11")).toBe(2833);
      expect(Number("foo")).toBe();
      expect(Number("Nan")).toBe(NaN);
      expect(Number("-Infinity")).toBe(Number.NEGATIVE_INFINITY);
    });
  });

  describe("String, object, null, undefined and symbols", () => {
    it("String", () => {
      let str1='string'; // Use single quote
      let str2 ="string"; // Use String(???)
      let str3=new String("hello"); // Use new String(???)
      let str4=`string`; // Use template string and str1 variable

      expect(str1).toBe("string");
      expect(str1 === str2).toBeTruthy();
      expect(str1 === str3).toBeFalsy();
      expect(str1 === str4).toBeTruthy();
      expect(typeof(str3)).toBe("object");
    });

    it("Should define object with 2 props", () => {
      let obj={
        nam1:"pet",
        age:18
      }; // Define object with 2 props

      expect(typeof obj).toBe("object");
      expect(Object.keys(obj).length).toBe(2);
      expect(obj.age).toBeLessThan(20);
    });

    it("Should define variable with Null and undefined values", () => {
      let nullVar=null; // Set null
      let undefinedVar=undefined; // Set undefined
      let someVar; // Do not define it!!!

      expect(typeof(nullVar)).toBeNull(null);
      expect(typeof(undefinedVar)).toBe(undefined);
      expect(someVar).toBe(undefined);
      expect(typeof(nullVar)).toBe("object");
      expect(typeof(undefinedVar)).toBe("undefined");
    });

    it("Should define 2 Symbol variable with the same description", () => {
      const smbl1 = Symbol("test");
      const smbl2 = Symbol("test");

      expect(typeof smbl1).toBe(/* ??? */);
      expect(typeof smbl2).toBe(/* ??? */);
      expect(/* Compare smbl1 and smbl2  */).toBe(/* ??? */);
    });
  });
});
