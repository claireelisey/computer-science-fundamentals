
####Exercises

> What is a hash table?

A: A collection of similar data.

> What is hashing?

A: Hashing is a process that takes arbitrary data and converts it into fixed-length code using a hashing function.

> How does a hash table store data?

A: A key is converted into a hash code using a hash function, it then mods the hash code to get an array index, and then stores the value in the array index.

> How are hash tables and objects different?

A: Hash tables contain data with a variable number of formatted values, each with an identifier; whereas objects contain data that contains a static number of distinct values of different types.

> Determine whether you would use a hash table or an object to store each of the following pieces of data:

* A list of pets and their unique names.

A: Hash table

* The name, age, and the birthday of your best friend.

A: Object

* The name and location of every company in a given city.

A: Hash table

* All of the books checked out from a library by a particular individual.

A: Hash table

* The primary and secondary phone numbers for a contact.

A: Object

> Build a system that allows a sales associate to enter a customer's name, address, and phone number into the system and look up customers using their phone numbers. Store this information in a hash table.

A: 

‘’’js

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

‘’’

> Build a system that allows a store owner to track their store's inventory using a hash table for storage.

A:

‘’’js

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
  
    this.add = function(key, value) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [
          [key, value]
        ];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([key, value]);
        }
      }
    };
  
    this.remove = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index].length === 1 && storage[index][0][0] === key) {
        delete storage[index];
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            delete storage[index][i];
          }
        }
      }
    };
  
    this.lookup = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            return storage[index][i][1];
          }
        }
      }
    };
  
  };
  
  var inventory = new HashTable();
  inventory.add("Bananas", "20");
  inventory.add("Veggie Burgers", "15");
  inventory.add("Avocados", "45");
  inventory.lookup("Bananas");

‘’’

> Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date. Use hash tables to store the necessary data.

A:

‘’’js

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
  
    this.add = function(key, value) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [
          [key, value]
        ];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([key, value]);
        }
      }
    };
  
    this.remove = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index].length === 1 && storage[index][0][0] === key) {
        delete storage[index];
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            delete storage[index][i];
          }
        }
      }
    };
  
    this.lookup = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            return storage[index][i][1];
          }
        }
      }
    };

    this.lookupDate = function(value) {
        var index = hash(value, storageLimit);
        if (storage[index] === undefined) {
          return undefined;
        } else {
          for (var i = 0; i < storage[index].length; i++) {
            if (storage[index][i][0] === value) {
              return storage[index][i][2];
            }
          }
        }
      };
  
  };
  
  
  var digitalCopies = [{
    publisher: "",
    publicationDate: ""
  }];
  
  var newspaperTable = new HashTable();
  newspaperTable.add("Chicago-Tribune-August-2018", "2018");
  newspaperTable.lookup("Chicago-Tribune-August-2018");
  newspaperTable.lookupDate("2018");
  
  console.log(newspaperTable.lookup("Chicago-Tribune-August-2018"));

‘’’