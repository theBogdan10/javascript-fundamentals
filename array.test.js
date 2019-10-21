 describe('Array', () => {
    it('Should find the position of the first occurrence', () => {
      const arr1 = [1, 5, 8, 3, 2];
      expect(arr1.indexOf(5)).toBe(1);
      expect(arr1.indexOf(3)).toBe(3);
      expect(arr1.indexOf(9)).toBe(-1);
      expect(arr1.indexOf(2)).toBe(4);
    });
  
    it('Should return the specified array twice', () => {
      let arr1 = [1, 2, 3];
      let arr2 = [0];
      expect([...arr1, ...arr1]).toStrictEqual([1, 2, 3, 1, 2, 3]);
      expect([...arr2, ...arr2]).toStrictEqual([0, 0]);
    });
  
    it('Convert the number array to  the array of string values', () => {
      function convertToStringArr(arr) {
        return arr.map(i => typeof(i) == 'object' ? JSON.stringify(i) : i += '');
      }
  
      expect(convertToStringArr([1, 2, 3])).toStrictEqual(['1', '2', '3']);
      expect(convertToStringArr(['a', 'b', 'c'])).toStrictEqual(['a', 'b', 'c']);
      expect(convertToStringArr([{a:1}, {b:2}, {c:3}])).toStrictEqual(['{"a":1}', '{"b":2}', '{"c":3}']);
    });
  
    it('Should return the number of all occurrences of specified item in an array', () => {
      function calculateOccurences(arr, value) {
        return arr.filter(i => i === value).length;
      }
      
      expect(calculateOccurences([1, 2, 1, 4, 1], 1)).toBe(3);
      expect(calculateOccurences([1, 1, 1, 1, 1], 1)).toBe(5);
      expect(calculateOccurences([], 1)).toBe(0);
    });
  
    it('Should convert strings from specified array to uppercase', () => {
      function toUppercase(arr) {
        return arr.map(i => i.toUpperCase());
      }
      expect(toUppercase(["aaaa", "abc"])).toStrictEqual(['AAAA', 'ABC']);
    });
  
    it('Insert an item at specified position', () => {
      function insert(arr, value, pos) {
        arr.splice(pos, 0, value);
        return arr;
      }
      expect(insert([1, 2, 4], 3, 2)).toStrictEqual([1, 2, 3, 4]);
    });
  
    it('Should return the n last items from the specified array', () => {
      function last(arr, pos) {
        return arr.splice(arr.length - pos, pos);
      }
      expect(last([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7]);
    });
  
    it('Return the 3 largest items from integer array', () => {
      function find3Largest(arr) {
        let res = [];
        let sortArr = (arr.slice()).sort((a, b) => a > b).splice(arr.length - 3);
        arr.forEach(i => sortArr.includes(i) && res.push(i));
        return res;
      }
      expect(find3Largest([1, 3, 8, 3, 29, 11, 2, 17, 9, 1])).toStrictEqual(
        [29, 11, 17]
      );
    });
  
    it('Sort numbers array by using array method', () => {
      function sort1(arr) {
        return arr.sort((a, b) => a < b);
      }
      function sort2(arr) {
        let flag = false;
        while (!flag) {
          flag = true;
          for (let j = 1; j < arr.length; j++) {
            if (arr[j - 1] < arr[j]) {
              flag = false;
              [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
          }
        }
        return arr;
      }
      expect(sort1([2, 3, 1, 8, 4, 5])).toStrictEqual([8, 5, 4, 3, 2, 1]);
      expect(sort2([2, 3, 1, 8, 4, 5])).toStrictEqual([8, 5, 4, 3, 2, 1]);
    });
  
    it('Should summarize of all items of numbers array', () => {
      function sum(arr) {
        return arr.reduce((acc, curr) => acc + curr);
      }
      expect(sum([1, 5, 7, 9, 3])).toBe(25);
    });
  
    it('Should return the numbers of falsy value in the specified array', () => {
      function getNumberOfFalsy(arr) {
        return arr.map(i => !i).filter(j => j).length;
      }
      expect(getNumberOfFalsy([1, 0, "", null, "hello", "0"])).toBe(3);
    });
  
    it('Should return an array of unique items from the specified array', () => {
      function unique1(arr) {
        return arr.filter((v, i, a) => a.indexOf(v) === i);
      }
      function unique2(arr) {
        return [...new Set(arr)];
      }
      expect(unique1(["a", "b", "a", "c", "e", "b", "o"])).toStrictEqual([
        'a',
        'b',
        'c',
        'e',
        'o'
      ]);
      expect(unique2(["a", "b", "a", "c", "e", "b", "o"])).toStrictEqual([
        'a',
        'b',
        'c',
        'e',
        'o'
      ]);
    });
  
    it('Should return a map of grouped data by key and value selector', function() {
      function group(arr, key) {
        let res = [];
        let ulist = new Set();
        let other = Object.keys(arr[0]).filter(i => i != key);
        arr.forEach(o => ulist.add(o[key]));
        res = [...ulist].map(i => [i]);
        ulist.forEach(i => {
          let list = [];
          arr.forEach(o => o[key] === i && list.push(o[other]));
          res[[...ulist].indexOf(i)].push(list);
        });
        return res;
      }
  
      let arr = [
        { country: 'Belarus', city: 'Brest' },
        { country: 'Russia', city: 'Omsk' },
        { country: 'Russia', city: 'Samara' },
        { country: 'Belarus', city: 'Grodno' },
        { country: 'Belarus', city: 'Minsk' },
        { country: 'Poland', city: 'Lodz' }
      ];
  
      expect(group(arr, 'country')).toStrictEqual([
        ['Belarus', ['Brest', 'Grodno', 'Minsk']],
        ['Russia', ['Omsk', 'Samara']],
        ['Poland', ['Lodz']]
      ]);
    });
  
    it('Should creates an array with all falsy values removed.', () => {
      function compact(arr) {
        return arr.filter(i => !!i);
      }
      expect(compact([1, 0, null, "a"])).toStrictEqual([1, 'a']);
    });
  
    it('Should flattens array a single level deep', () => {
      let res = [];
      function flatten(arr) {
        if (typeof(arr[0]) != 'object' && typeof(arr[arr.length - 1]) != 'object') {
          arr.forEach(i => res.push(i));
        } else {
          arr.forEach(i => (typeof(i) === 'object') ? flatten(i) : res.push(i));
        }
        return res;
      }
      expect(flatten([1, [2, [3, [4]], 5], 7])).toStrictEqual([
        1,
        2,
        [3, [4]],
        5
      ]);
    });
  
    it('Should recursively flattens array.', () => {
      let res = [];
      function flattenDeep(arr) {
        arr.forEach(i => (typeof(i) === 'object') ? flattenDeep(i) : res.push(i));
        return res;
      }
      expect(flattenDeep([1, [2, [3, [4]], 5]])).toStrictEqual([
        1,
        2,
        3,
        4,
        5
      ]);
    });
  
    it('Should creates an array of unique values that are included in all given', () => {
      function intersection(arr1, arr2) {
        return arr1.filter(value => arr2.includes(value));
      }
      expect(intersection([1, 2, 3, 4], [8, 3, 1, 0, 9])).toStrictEqual([
        1,
        3
      ]);
    });
  
    it('Should remove all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with two arguments: (value, index).', () => {
      const arr = [1, 7, 5, 2, 8];
      const gt5 = v => v > 5;
  
      function remove(arr, cond) {
        let deleted = [];
        arr.map((v, i) => {
          if (cond(v)) {
            deleted.push(v);
            arr.splice(i, 1);
          }
        })
        return deleted;
      }
  
      let removed = remove(arr, gt5);
      expect(arr).toStrictEqual([1, 5, 2]);
      expect(removed).toStrictEqual([7, 8]);
    });
  });