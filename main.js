const {app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow() {
    
    mainWindow = new BrowserWindow({
        width: 300,
        height: 320,
        resizable: false,
        title: "La caracola Magica",
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.removeMenu()
    mainWindow.loadFile('index.html')
    require('child_process').exec("./env/configure-env.sh $(whoami)")
}

app.whenReady().then(createWindow);
