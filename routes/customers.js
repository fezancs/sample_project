var express = require('express');
var router = express.Router();
var db=require('../db');

router.get('/', function(req, res, next) {

 var query='SELECT * FROM  customers';

 db.query(query, function(err,rows,fields){
    if(err) throw err;
    res.json(rows);
   // res.render('products', { title: 'Products', products: rows});
    })
});

router.post('/', function(req, res, next) {
    console.log('hiiiiiiii');
    console.log(req.body.email);
    var sql = "INSERT INTO customers (email,_website,_store,account_type,confirmation,created_at,created_in,disable_auto_group_change,dob,firstname,gender,group_id,lastname,middlename,password_created_at,password_hash,prefix,rp_customer_id,rp_token,rp_token_created_at,store_id,suffix,taxvat,website_id,password,_address_city,_address_company,_address_country_id,_address_fax,_address_firstname,_address_lastname,_address_middlename,_address_postcode,_address_prefix,_address_region,_address_street,_address_suffix,_address_telephone,_address_vat_id,_address_default_billing_,_address_default_shipping_) VALUES ('" + req.body.email + "','base','default',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL)"; 
    db.query(sql, function(err, result) {  
      if (err) throw err;
      
      console.log(req.body);
      res.send('record inserted');
   });
});


module.exports = router;