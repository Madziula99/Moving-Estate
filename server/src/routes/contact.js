const { Router } = require("express");
const nodeMailer = require("nodemailer");
const config = require("config");
const MAIL = config.get("mail");
const db = require("../models")

async function create(req, res) {
  const { clientName, clientEmail, clientMessage, agentEmail, propertyId } = req.body;

  const createdAt = new Date();
  const updatedAt = new Date();

  db.Message.create({
    client_name: clientName,
    client_email: clientEmail,
    message: clientMessage,
    property_id: propertyId,
    createdAt,
    updatedAt
  })

  //db.Message.findAll().then(messages => messages.map(message => console.log(message.get())))

  const transporter = nodeMailer.createTransport(MAIL);

  try {
    await transporter.sendMail({
      from: `${clientName} <${clientEmail}>`,
      to: agentEmail,
      subject: `Property ${propertyId}`,
      text: clientMessage,
    });

    res.json({ message: "Thank you!" });
  } catch (error) {
    res.status(404).json({ error: "Message could not be sent" });
  }
}

module.exports = Router()
  .post("/", create);
