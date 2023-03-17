const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://www.ioerj.com.br/portal/modules/conteudoonline/busca_do.php');

  // Preencha os campos do formulário com os dados desejados
  await page.type('*textobusca', 'valor1');
  await page.type('#campo2', 'valor2');
  await page.type('#campo3', 'valor3');

  // Envie o formulário
  await page.click('#botao-enviar');

  await browser.close();
})();