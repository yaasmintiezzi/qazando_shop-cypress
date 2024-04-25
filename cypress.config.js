const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Outras configurações Cypress podem ser adicionadas aqui

  // Configuração para lidar com exceções não capturadas
  on: {
    'uncaught:exception': (err, runnable) => {
      // Retorne false para impedir que o Cypress falhe automaticamente
      return false;
    }
  },

  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});