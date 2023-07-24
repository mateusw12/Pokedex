import React, { useState } from "react";
import { Input, Button, Row, Col, notification } from "antd";
import sendEmail from "../utils/email/send-email";

const Suggestion = () => {
  const [emailBody, setEmailBody] = useState<string>("");
  const [sending, setSending] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmailBody(event.target.value);
  };

  const handleSendEmail = () => {
    if (emailBody.trim() === "") {
      alert("O corpo do e-mail não pode estar vazio!");
      return;
    }

    setSending(true);
    const success = sendEmail(emailBody);
    setSending(false);
    console.log("entrei", success);
    if (success) {
      setEmailBody("");
      void notification.open({
        type: "success",
        message: "E-mail enviado com sucesso!",
      });
    } else {
      void notification.open({
        type: "error",
        message: "Erro ao enviar o e-mail!",
      });
    }
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <div style={{ padding: "20px" }}>
            <h1>Sugestões:</h1>
            <Input.TextArea
              rows={4}
              value={emailBody}
              onChange={handleChange}
              placeholder="Digite sua sugestão aqui"
            />
            <div style={{ paddingTop: "10px" }}>
              <Button
                type="primary"
                disabled={sending}
                onClick={handleSendEmail}
              >
                Enviar
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <img
            src="/assets/suggestion/charizard.webp"
            alt="Imagem do Pokemon"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Suggestion;
