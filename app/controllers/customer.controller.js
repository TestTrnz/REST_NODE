const customers = {
    customer1: {
      firstname: "Subhashree",
      lastname: "Sahu",
      age: 26,
      id: 1
    },
    customer2: {
      firstname: "Adinarayana",
      lastname: "Immidisetti",
      age: 29,
      id: 2
    },
    customer3: {
      firstname: "Arun",
      lastname: "Sahu",
      age: 31,
      id: 3
    },
    customer4: {
      firstname: "Pooja",
      lastname: "Nayak",
      age: 27,
      id: 4
    }
  }

exports.create = function(req, res) {
const newCustomer = req.body;
customers["customer" + newCustomer.id] = newCustomer;
console.log("--->After Post, customers:\n" + JSON.stringify(customers, null, 4));
res.end("Post Successfully: \n" + JSON.stringify(newCustomer, null, 4));
};

exports.findAll = function(req, res) {
console.log("--->Find All: \n" + JSON.stringify(customers, null, 4));
res.end("All Customers: \n" + JSON.stringify(customers, null, 4));  
};

exports.findOne = function(req, res) {
const customer = customers["customer" + req.params.id];
console.log("--->Find customer: \n" + JSON.stringify(customer, null, 4));
res.end( "Find a Customer:\n" + JSON.stringify(customer, null, 4));
};

exports.update = function(req, res) {
const id = parseInt(req.params.id);
const updatedCustomer = req.body; 
if(customers["customer" + id] != null){
// update data
customers["customer" + id] = updatedCustomer;

console.log("--->Update Successfully, customers: \n" + JSON.stringify(customers, null, 4))

// return
res.end("Update Successfully! \n" + JSON.stringify(updatedCustomer, null, 4));
}else{
res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedCustomer, null, 4));
}
};

exports.delete = function(req, res) {
const deleteCustomer = customers["customer" + req.params.id];
delete customers["customer" + req.params.id];
console.log("--->After deletion, customer list:\n" + JSON.stringify(customers, null, 4) );
res.end( "Deleted customer: \n" + JSON.stringify(deleteCustomer, null, 4));
};