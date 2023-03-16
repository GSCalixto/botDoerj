const express = require('express');
const app = express();

app.get('/preencher-formulario', async (req, res) => {
  // Utilize o Puppeteer para preencher o formulário
  // ...

  res.send('Formulário preenchido e enviado');
});

app.get('/baixar-pdf', async (req, res) => {
  // Utilize o Puppeteer para baixar o PDF
  // Utilize o PDFKit para adicionar a marca d'água
  // ...

  res.send('PDF baixado e marcado');
});

app.get('/enviar-pdf', async (req, res) => {
  // Utilize o Twilio para enviar o PDF por WhatsApp
  // ...

  res.send('PDF enviado por WhatsApp');
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000')
});