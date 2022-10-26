const { Router } = require("express");
const nodeMailer = require("nodemailer");

async function create(req, res) {
  const { clientName, clientEmail, clientMessage, agentEmail } = req.body;

  const transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "stacey.collier64@ethereal.email", // draft
      pass: "3hNEgt6RvzgRxDmP6H"
    }
  });

  try {
    await transporter.sendMail({
      from: `${clientName} <${clientEmail}>`,
      to: agentEmail,
      subject: "Moving Estate",
      text: clientMessage,
    });

    res.send(JSON.stringify("Thank you!"));
  } catch (error) {
    res.status(404).json({ error: "Message could not be sent" });
  }
}

module.exports = Router()
  .post("/", create);
