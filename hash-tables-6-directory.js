var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };
  
  let HashTable = function() {
  
    let storage = [];
    const storageLimit = 100;
    
    this.print = function() {
      console.log(storage)
    }
  
    this.add = function(phone, name, address) {
      var index = hash(phone, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [
          [phone, name, address]
        ];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === phone) {
            storage[index][i][1] = address;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([phone, name, address]);
        }
      }
    };
  
    this.remove = function(phone) {
      var index = hash(phone, storageLimit);
      if (storage[index].length === 1 && storage[index][0][0] === phone) {
        delete storage[index];
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === phone) {
            delete storage[index][i];
          }
        }
      }
    };
  
    this.lookup = function(phone) {
      var index = hash(phone, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === phone) {
            return storage[index][i][1];
          }
        }
      }
    };
  
};
  
var customers = new HashTable();
customers.add("123-456-7891", "Mike Smith", "123 Day Road");
customers.add("213-564-7892", "Mary Jones", "366 Stonebridge Drive");
customers.add("312-773-8965", "John Phillips", "230 N. Michigan Ave.");
customers.lookup("123-456-7891");