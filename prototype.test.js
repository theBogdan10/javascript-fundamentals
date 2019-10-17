describe('Prototype', () => {
  it('Should use Function constructor without prototype', () => {
    // TODO: implement
    function User(name) {
      this.name=name;
      this.sayHello= function (){
        return "Hello, "+ name;
      }
    }

    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello !== user2.sayHello).toBe(true);
  });

  it('Should use prototype', () => {
    // TODO: implement
    function User(name) {
      this.name=name;
    }
    
    User.prototype.sayHello=function(){
      return "Hello, " + this.name;
    }

    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello === user2.sayHello).toBe(true);
  });

  it('Create class ArticleList with 2 methods add and articleCount', () => {
    // TODO: implement
    function ArticleList() {
      this.list=[];
    }

    ArticleList.prototype.add = function(value) {
      this.list.push(value);
    }
    
    ArticleList.prototype.articleCount = function() {
      return this.list.length;
    }

    const list1 = new ArticleList();
    const list2 = new ArticleList();
    list1.add('aaaa');
    list2.add('bbb');
    expect(list1.list.length).toBe(1);
  });

  it('Extend using prototype', () => {
    /*
      Component should has following methods:
      render -  returns empty string
      getData - return data
      constructor - accept object width property data, that should be returned from getData
    */

    // TODO: implement

    /*
       UserComponent should extends Component
       override render method
       add 2 following methods:
       login - set data.name
       logout - set data.name undefined
     */


    // TODO: implement

    class Component {
      constructor(obj) {
        this.data = obj.data;
      }
      setData(obj) {
        Object.assign(this.data, obj);
      }
      getData() {
        return this.data;
      }
      render() {
        return '';
      }
    }
    
    class UserComponent extends Component {
      render() {
        return `${this.data.msg}, ${this.data.name ? this.data.name : 'guest'}!`;
      }
      login(name) {
        this.data.name = name;
      }
      logout() {
        this.data.name = null;
      }
    }

    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should extend Child class from Parent ', () => {
    // Component and  UserComponent has requirement from previous test
    function Component(obj) {
      this.data = obj.data;
    }
    Component.prototype.setData = function(obj) {
      Object.assign(this.data, obj);
    }
    Component.prototype.getData = function() {
      return this.data;
    }
    Component.prototype.render = function() {
      return '';
    }
    
    function UserComponent() {
      UserComponent.superclass.constructor.apply(this, arguments)
    }
    
    function extend(Child, Parent) {
      var F = function() {};
      F.prototype = Parent.prototype;
      Child.prototype = new F();
      Child.prototype.constructor = Child;
      Child.superclass = Parent.prototype;
    }

    extend(UserComponent, Component);

    UserComponent.prototype.render = function() {
      return `${this.data.msg}, ${this.data.name ? this.data.name : 'guest'}!`;
    }
    UserComponent.prototype.login = function(name) {
      this.data.name = name;
    }
    UserComponent.prototype.logout = function() {
      this.data.name = null;
    }

    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should use Class declaration for Component and UserComponent', () => {
    class Component {
      constructor(obj) {
        this.data = obj.data;
      }
      setData(obj) {
        Object.assign(this.data, obj);
      }
      getData() {
        return this.data;
      }
      render() {
        return '';
      }
    }
    
    class UserComponent extends Component {
      render() {
        return `${this.data.msg}, ${this.data.name ? this.data.name : 'guest'}!`;
      }
      login(name) {
        this.data.name = name;
      }
      logout() {
        this.data.name = null;
      }
    }

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should use Object.create for extending one object from another', () => {
    // DON'T CHANGE
    const greetings = {
      msg: 'Hello',
      name: 'guest',

      greetings: function() {
        return `${this.msg}, ${this.name}!`;
      }
    };

    let helloTom = Object.create(greetings, {
      'name': {value: 'Tom'}
    });
    let greetingsBob = Object.create(greetings, {
      'name': {value: 'Bob'},
      'msg': {value: 'Greetings'}
    });

    expect(helloTom.greetings()).toBe('Hello, Tom!');
    expect(greetingsBob.greetings()).toBe('Greetings, Bob!');
    expect(greetings.greetings()).toBe('Hello, guest!');
  });
});