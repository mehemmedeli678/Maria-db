const dotenv=require('dotenv')
dotenv.config();
const{MYSQLHOST,USER,PASSWORD,DATABASE}=process.env
const connection={
    host: MYSQLHOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
}   

module.exports=connection;