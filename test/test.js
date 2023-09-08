const Product = require("../models/Product");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();

chai.use(chaiHttp);

describe("Products", () => {
    beforeEach((done) => {
        Product.deleteMany({});
        done();
    });
    describe("/GET product", () => {
        it("it should GET all the products", (done) => {
            chai
                .request(app)
                .get("/api/products")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("array");
                    //res.body.data.length.should.be.eql(0);
                    done();
                });
        });
    });
    describe("/POST product", () => {
        it("it should new POST a product", (done) => {
            let product = {
                name: "This is the first product",
                description: "This is a product",
                price: 10,
                createdBy: 1,
                updatedBy: 1,
            };
            chai
                .request(app)
                .post("/api/products")
                .send(product)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("object");
                    res.body.status.should.be.eql("success");
                    done();
                });
        });
    });
    describe("/GET/:id product", () => {
        it("it should GET a product by the id", (done) => {

            let product = new Product({
                name: "This is the first product",
                description: "This is a product",
                price: 10,
                createdBy: 1,
                updatedBy: 1,
            });
            product.save();
            chai
                .request(app)
                .get("/api/products/" + product.id)
                .send(product)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("object");
                    res.body.status.should.be.eql("success");
                    done();
                });

        });
    });
    describe("/PUT/:id product", () => {
        it("it should UPDATE a product given the id", (done) => {
            let product = new Product({
                name: "This is the first product",
                description: "This is a product",
                price: 10,
                createdBy: 1,
                updatedBy: 1,
            });
            product.save();
            console.log(product.id);
            chai
                .request(app)
                .put("/api/products/" + product.id)
                .send({
                    name: "The first product was updated",
                    description: "This is a product",
                    price: 10,
                    createdBy: 1,
                    updatedBy: 1,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("object");
                    res.body.status.should.be.eql("success");
                    done();
                });

        });
    });
    describe("/DELETE/:id product", () => {
        it("it should DELETE a product given the id", (done) => {
            let product = new Product({
                name: "This is the first product",
                description: "This is a product",
                price: 10,
                createdBy: 1,
                updatedBy: 1,
            });
            product.save();
            chai
                .request(app)
                .delete("/api/products/" + product.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("object");
                    res.body.status.should.be.eql("success");
                    done();
                });
        });
    });
});
