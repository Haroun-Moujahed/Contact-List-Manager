const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// CRUD
// Create/Add contact
router.post("/addContact", (req, res) => {
    const { firstName, lastName, phone, email } = req.body;
    Contact.create(
        {
            firstName,
            lastName,
            phone,
            email,
        },
        (err, data) => {
            if (err) throw err;
            res.json({
                status: 200,
                msg: "Contact added successfully",
                data: data,
            });
        }
    );
});

// Read/GET Contact
router.get("/getContacts", (req, res) => {
    Contact.find({}, (err, data) => {
        if (err) throw err;
        res.json({ status: 200, msg: "all contacts:", data });
    });
});

// Update Contact
router.put("/updateContact/:id", (req, res) => {
    const { id } = req.params;
    Contact.findOneAndUpdate(
        { _id: id },
        { $set: { ...req.body } },
        (err, data) => {
            if (err) throw err;
            res.json({
                status: 200,
                msg: "contact updated",
                data,
            });
        }
    );
});

// delete Contact
router.delete("/deleteContact/:id", (req, res) => {
    const { id } = req.params;
    Contact.findByIdAndDelete(id, (err, data) => {
        if (err) throw err;
        res.send({ status: 200, msg: "contact deleted successfully", data });
    });
});

module.exports = router;
