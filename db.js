var mysql=require('mysql');


 var connection=mysql .createConnection({
     host:'35.239.119.185',  //localhost
     port:'3306',  //3307
     user:'fillcraft',  //root
     password: '123456789',   //''
     database:'swards_' //swordskingdom
 });

connection.connect(function(err){
    if(err) throw err;
    console.log('connected');
});

module.exports=connection;