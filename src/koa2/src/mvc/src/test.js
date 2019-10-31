const {assert} = require("chai");
const supertest = require("supertest");
const app = require("./app.js");
const request = supertest(app.listen());
request
    .get("/api")
    .expect(200)
    .end((err,res)=>{
        err?console.log(err):console.log(res);
    });
const far = "fhao";
const bahaiver = {hfa:23};
assert.typeOf(far,"string");
assert.typeOf(far,"string","foo is string");
assert.typeOf(bahaiver,"object");
assert.equal(far,"fhao","foo==='fhao'");
