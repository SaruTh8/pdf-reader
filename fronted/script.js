const { dialog } = require('electron').remote;
const fs = require('fs');

const btn = document.getElementById('btn');
const ausgabe = document.getElementById('ausgabe');

btn.addEventListener('click', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile']
  });

  if (!result.canceled) {
    const inhalt = fs.readFileSync(result.filePaths[0], 'utf-8');
    ausgabe.textContent = inhalt;
  }
});