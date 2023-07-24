import emailjs from "emailjs-com";

const EMAIL_SERVICE_ID = "service_m9z5ube"; // Substitua pelo ID do seu serviço de email
const EMAIL_TEMPLATE_ID = "template_uf6n7qc"; // Substitua pelo ID do seu template de email
const EMAIL_USER_ID = "vAF8ormN1depjC9zw"; // Substitua pelo seu User ID

const sendEmail = (body: string) => {
  const emailParams = {
    to_email: "mateus.walz@gmail.com",
    subject: "Sugestões Info Poké Stop",
    body,
  };

  try {
     emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      emailParams,
      EMAIL_USER_ID
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default sendEmail;
