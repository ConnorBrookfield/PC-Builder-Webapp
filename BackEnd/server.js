const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://Admin:ED0X5B0zjIwgqThr@cluster0-5yrpw.mongodb.net/partsDb?retryWrites=true&w=majority";

// Connecting to the MongoDB
mongoose.connect(mongoDB,{useNewUrlParser:true});

// Cors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse Application/Json
app.use(bodyParser.json())

// Database Schemas
const Schema = mongoose.Schema;
const caseSchema = new Schema({
    brand:String,
    name:String,
    price:String,
    size:String,
    artwork:String
})
const motherboardSchema = new Schema({
    brand:String,
    name:String,
    price:String,
    size:String,
    artwork:String
})
const cpuSchema = new Schema({
    brand:String,
    name:String,
    price:String,
    clockspeed:String,
    cores:String,
    socket:String,
    artwork:String
})
const ramSchema = new Schema({
    brand:String,
    name:String,
    price:String,
    clockspeed:String,
    memory:String,
    artwork:String
})
const gpuSchema = new Schema({
    brand:String,
    name:String,
    price:String,
    clockspeed:String,
    memory:String,
    artwork:String
})
const coolerSchema = new Schema({
    brand:String,
    name:String,
    price:String,
    type:String,
    artwork:String
})
const storageSchema = new Schema({
    brand:String,
    name:String,
    price:String,
    type:String,
    capacity:String,
    artwork:String
})
const psuSchema = new Schema({
    brand:String,
    name:String,
    price:String,
    type:String,
    watts:String,
    artwork:String
})

// Mongoose Models
const CaseModel = mongoose.model('case', caseSchema);
const MotherboardModel = mongoose.model('motherboard', motherboardSchema);
const CpuModel = mongoose.model('cpu', cpuSchema);
const RamModel = mongoose.model('ram', ramSchema);
const GpuModel = mongoose.model('gpu', gpuSchema);
const CoolerModel = mongoose.model('cooler', coolerSchema);
const StorageModel = mongoose.model('storage', storageSchema);
const PsuModel = mongoose.model('psu', psuSchema);

// Handling various requests from client, to the server, to the relevent databases.
// Get Requests
app.get('/partsDb', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/api/cases', (req, res) => {
    CaseModel.find((error, data) =>{
        res.json({cases:data});
    })
})
app.get('/api/cases:id', (req, res) => {
    console.log(req.params.id);

    CaseModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})
app.get('/api/motherboards', (req, res) => {
    MotherboardModel.find((error, data) =>{
        res.json({motherboards:data});
    })
})
app.get('/api/motherboards:id', (req, res) => {
    console.log(req.params.id);

    MotherboardModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})
app.get('/api/cpus', (req, res) => {
    CpuModel.find((error, data) =>{
        res.json({cpus:data});
    })
})
app.get('/api/cpus:id', (req, res) => {
    console.log(req.params.id);

    CpuModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})
app.get('/api/rams', (req, res) => {
    RamModel.find((error, data) =>{
        res.json({rams:data});
    })
})
app.get('/api/rams:id', (req, res) => {
    console.log(req.params.id);

    RamModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})
app.get('/api/gpus', (req, res) => {
    GpuModel.find((error, data) =>{
        res.json({gpus:data});
    })
})
app.get('/api/gpus:id', (req, res) => {
    console.log(req.params.id);

    GpuModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})
app.get('/api/coolers', (req, res) => {
    CoolerModel.find((error, data) =>{
        res.json({coolers:data});
    })
})
app.get('/api/coolers:id', (req, res) => {
    console.log(req.params.id);

    CoolerModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})
app.get('/api/storages', (req, res) => { 
    StorageModel.find((error, data) =>{
        res.json({storages:data});
    })
})
app.get('/api/storages:id', (req, res) => {
    console.log(req.params.id);

    StorageModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})
app.get('/api/psus', (req, res) => {
    PsuModel.find((error, data) =>{
        res.json({psus:data});
    })
})
app.get('/api/psus:id', (req, res) => {
    console.log(req.params.id);

    PsuModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

// Delete Requests
app.delete('/api/cases/:id', (req, res)=>{
    console.log(req.params.id);

    CaseModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})
app.delete('/api/motherboards/:id', (req, res)=>{
    console.log(req.params.id);

    MotherboardModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})
app.delete('/api/cpus/:id', (req, res)=>{
    console.log(req.params.id);

    CpuModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})
app.delete('/api/rams/:id', (req, res)=>{
    console.log(req.params.id);

    RamModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})
app.delete('/api/gpus/:id', (req, res)=>{
    console.log(req.params.id);

    GpuModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})
app.delete('/api/coolers/:id', (req, res)=>{
    console.log(req.params.id);

    CoolerModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})
app.delete('/api/storages/:id', (req, res)=>{
    console.log(req.params.id);

    StorageModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})
app.delete('/api/psus/:id', (req, res)=>{
    console.log(req.params.id);

    PsuModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})

// Post Requests
app.post('/api/cases', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.size);
    console.log(req.body.artwork);

    CaseModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        size:req.body.size,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/cases/:id', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.size);
    console.log(req.body.artwork);

    CaseModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        size:req.body.size,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/motherboards', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.size);
    console.log(req.body.artwork);

    MotherboardModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        size:req.body.size,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/motherboards/:id', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.size);
    console.log(req.body.artwork);

    MotherboardModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        size:req.body.size,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/cpus', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.clockspeed);
    console.log(req.body.cores);
    console.log(req.body.socket);
    console.log(req.body.artwork);

    CpuModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        clockspeed:req.body.clockspeed,
        cores:req.body.cores,
        socket:req.body.socket,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/cpus/:id', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.clockspeed);
    console.log(req.body.cores);
    console.log(req.body.socket);
    console.log(req.body.artwork);

    CpuModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        clockspeed:req.body.clockspeed,
        cores:req.body.cores,
        socket:req.body.socket,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/rams', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.clockspeed);
    console.log(req.body.memory);
    console.log(req.body.artwork);

    RamModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        clockspeed:req.body.clockspeed,
        memory:req.body.memory,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/rams/:id', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.clockspeed);
    console.log(req.body.memory);
    console.log(req.body.artwork);

    RamModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        clockspeed:req.body.clockspeed,
        memory:req.body.memory,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/gpus', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.clockspeed);
    console.log(req.body.memory);
    console.log(req.body.artwork);

    GpuModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        clockspeed:req.body.clockspeed,
        memory:req.body.memory,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/gpus/:id', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.clockspeed);
    console.log(req.body.memory);
    console.log(req.body.artwork);

    GpuModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        clockspeed:req.body.clockspeed,
        memory:req.body.memory,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/coolers', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.type);
    console.log(req.body.artwork);

    CoolerModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        type:req.body.type,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/coolers/:id', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.type);
    console.log(req.body.artwork);

    CoolerModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        type:req.body.type,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/storages', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.type);
    console.log(req.body.capacity);
    console.log(req.body.artwork);

    StorageModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        type:req.body.type,
        capacity:req.body.capacity,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/storages/:id', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.type);
    console.log(req.body.capacity);
    console.log(req.body.artwork);

    StorageModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        type:req.body.type,
        capacity:req.body.capacity,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/psus', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.type);
    console.log(req.body.watts);
    console.log(req.body.artwork);

    PsuModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        type:req.body.type,
        watts:req.body.watts,
        artwork:req.body.artwork
    })
    res.json('post received!');
})
app.post('/api/psus/:id', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.brand);
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.type);
    console.log(req.body.watts);
    console.log(req.body.artwork);

    PsuModel.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        type:req.body.type,
        watts:req.body.watts,
        artwork:req.body.artwork
    })
    res.json('post received!');
})

// Put Requests
app.put("/api/cases/:id", (req, res)=>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    CaseModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
        res.json(data);
    })
})
app.put("/api/motherboards/:id", (req, res)=>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    MotherboardModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
        res.json(data);
    })
})
app.put("/api/cpus/:id", (req, res)=>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    CpuModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
        res.json(data);
    })
})
app.put("/api/rams/:id", (req, res)=>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    RamModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
        res.json(data);
    })
})
app.put("/api/gpus/:id", (req, res)=>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    GpuModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
        res.json(data);
    })
})
app.put("/api/coolers/:id", (req, res)=>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    CoolerModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
        res.json(data);
    })
})
app.put("/api/storages/:id", (req, res)=>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    StorageModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
        res.json(data);
    })
})
app.put("/api/psus/:id", (req, res)=>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    PsuModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
        res.json(data);
    })
})

// Port Listener (Port 4000)
app.listen(port, () => console.log(`Listening on port ${port}!`))