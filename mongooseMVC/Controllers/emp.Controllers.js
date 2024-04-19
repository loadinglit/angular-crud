const {empModel } = require('../Models/emp.Models.js');

const greet = (req, res) => {
    res.send("Hello!");
};

const addEmp = async (req, res) => {
    try {
        console.log("Adding new employee..");
        const empData = req.body;
        console.log(empData);
        const data = new empModel(empData);
        const result = await data.save();
        console.log("New employee added:", result);
        res.status(201).send("New employee added successfully");
    } catch (error) {
        console.error("Error adding employee:", error);
        res.status(500).send("Failed to add new employee");
    }
};

const updateEmp = async (req, res) => {
    try {
        const id = Number(req.params.id);
        let { Name, Salary } = req.body;
        Salary = Number(Salary);
        console.log(`Updating employee with ID ${id}..`);
        const updatedData = await empModel.updateOne({ id: id }, { $set: { Name: Name, Salary: Salary } });
        console.log("Employee updated:", updatedData);
        res.send("Employee data updated successfully");
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).send("Failed to update employee data");
    }
};

const deleteEmp = async (req, res) => {
    try {
        const id = Number(req.params.id);
        console.log(`Deleting employee `);
        const deletedData = await empModel.deleteOne({ id: id });
        console.log("Employee deleted:", deletedData);
        res.send("Employee data deleted successfully");
    } catch (error) {
        console.error("Error deleting employee:", error);
        res.status(500).send("Failed to delete employee data");
    }
};

const showEmp = async (req, res) => {
    try {
        console.log("Fetching all employees..");
        const showData = await empModel.find();
        console.log("Employees:", showData);
        res.send(showData);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).send("Failed to fetch employee data");
    }
};

const showByID = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(`Fetching employee with ID ${id}..`);
        const showData = await empModel.find({ id: id });
        console.log("Employee:", showData);
        if (showData.length === 0) {
            res.status(404).send("Employee not found");
        } else {
            res.send(showData);
        }
    } catch (error) {
        console.error("Error fetching employee:", error);
        res.status(500).send("Failed to fetch employee data");
    }
};

module.exports = { greet, addEmp, updateEmp, deleteEmp, showEmp, showByID };
