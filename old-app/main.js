const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
// var spawn =  require('child_process').spawn

// const child = spawn('git', ['status'], {
//   detached: true,
// });

// child.unref();

const processCmd = (win) => {
  var exec = require('child_process').exec;

  exec("node long.js", {timeout: 10000, maxBuffer: 20000*1024},
      function(error, stdout, stderr) {
          var out = stdout.toString();
          win.webContents.send('ping', out)
          // const outArray = out.split('\n');

          // let result = '<div class="text"'
          // outArray.forEach(e => {
          //     result += `<h3>${e}</h3>`
          // });
          // result += '</div>';
          // resultSection.innerHTML = result;
          // console.log(result)
      });
}


ipcMain.on('runCommand', async (event, arg) => {
  event.returnValue = await runCommand(arg);
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools({ mode: 'bottom' })
  processCmd(win)
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
