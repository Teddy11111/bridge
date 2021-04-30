import { app, BrowserWindow, ipcMain } from 'electron';
import { exec } from 'child_process';

declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

const processCmd = (win: BrowserWindow) => {
  exec("git status", { timeout: 10000, maxBuffer: 20000 * 1024 },
    function (error, stdout, stderr) {
      const out = stdout.toString();
      win.webContents.send('ping', out)
    });
}

ipcMain.on('asynchronous-message', (event, arg) => {
  // console.log("heyyyy", arg) 
    exec("git status", { timeout: 10000, maxBuffer: 20000 * 1024 },
      function (error, stdout, stderr) {
        const out = stdout.toString();
        console.log("heyyyy", out) 
      });
  }
})

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 900,
    width: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
      }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools({ mode: 'bottom' });
  // processCmd(mainWindow)
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
