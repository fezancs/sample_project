var db = require("../db");

let model = {
    signup: (input, cb) => {

        let data = {
            fname: input.fname,
            lname: input.lname,
        };
        
        return db.query("INSERT INTO users SET ?", [data], cb)
    }
}

module.exports = model;