const express=require('express')
// const sql=require('mysql')
const db=require('./Configurations/Db')
const router=require('./server');
const {removeError,internalerror}=require('./ErrorHandle/api404Error')
const cors = require("cors");  
const bodyParser = require("body-parser");
const swaggerUI= require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");


const app=express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());
app.use(router);

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Library API",
        version: "1.0.0",
        description: "A simple Express Library API",
        termsOfService: "http://example.com/terms/",
        contact: {
          name: "API Support",
          url: "http://www.exmaple.com/support",
          email: "support@example.com",
        },
      },
  
      servers: [
        {
          url: "http://localhost:4000",
          description: "My API Documentation",
        },
      ],
    },
    apis: ["./SwagerSchema/*.js"],
  };
  
  const specs = swaggerJsDoc(options);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

  app.use(internalerror);
app.use(removeError);
app.listen(4000,()=>{
    console.log("App is listening on url http://localhost:" + 4000)
})