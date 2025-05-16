const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar os listeners de eventos aqui, se necessário
    },
    video: true,                 // ✅ Ativa a gravação de vídeos
    videoCompression: 32,        // ✅ Aplica compressão ao vídeo (reduz tamanho sem perder muita qualidade)
    videoUploadOnPasses: false,  
    experimentalRunAllSpecs: true,

  },
});
