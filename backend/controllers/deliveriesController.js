const db = require('../models/db');

exports.getAllDeliveries = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM deliveries");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.createDelivery = async (req, res) => {
    const { date, location, frequency } = req.body;
    try {
        const [result] = await db.query("INSERT INTO deliveries (date, location, frequency) VALUES (?, ?, ?)", [date, location, frequency]);
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};
