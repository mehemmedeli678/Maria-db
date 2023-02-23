const connection=require('../Configurations/Db')
const mariadb =require('mariadb')

// const pool = mariadb.createPool({
//     host: 'localhost', 
//     user:'root',
//     password: 'Aliyev_123',
//     database:'mydbs',
//     connectionLimit: 5
// });

const pool=mariadb.createPool({
    driver: "mysql",
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Aliyev_123",
    database: "mydbs"
})

const query=async(query)=>{
    let conn;
    try {
        conn=await pool.getConnection();
	const res = await conn.query(query);
     await conn.release();
    return {success:true,data:res};
    } catch (error) {
        if (conn) conn.release();
        return {success:false,message:error.message}
    }
}

module.exports=query;