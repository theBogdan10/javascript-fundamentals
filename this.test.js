describe('THIS', () => {
  it('Should invoke function with specific this', () => {
    // DON'T CHANGE
    const a = { msg: 'aaa' };
    const b = { msg: 'bbb' };

    // DON'T CHANGE
    function example() {
      return this.msg + ' ' + this.msg;
    }

    expect(example.call(a)).toBe('aaa aaa');
    expect(example.call(b)).toBe('bbb bbb');
  });

  it('Should create function  connected with specific this', () => {
    // DON'T CHANGE
    function fn() {
      return this.name;
    }
    // DON'T CHANGE
    const tom = { name: 'Tom', age: 22 };
    const bob = { name: 'Bob', get: 50 };

    // TODO: fix
    const getTomName = ()=>fn.call(tom);
    const getBobName = ()=>fn.call(bob);

    expect(getTomName()).toBe('Tom');
    expect(getBobName()).toBe('Bob');
  });

  test('Function from object method. Fix me', () => {
    // DON'T CHANGE
    const person = {
      firstName: 'Ivan',
      secondName: 'Ivanov',
      age: 20,

      sayHello: function() {
        return `Hi, ${this.firstName}!`;
      }
    };

    // TODO: FIX ME
    const sayHello = ()=>person.sayHello.call(person);

    expect(sayHello()).toBe(person.sayHello());
  });
});
