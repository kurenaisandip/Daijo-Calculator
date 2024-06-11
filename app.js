const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow()
{
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true // This enables Node.js integration in Electron
        }
    });

    // Load the Angular app.
    mainWindow.loadURL(
        url.format({
            pathname: path.join('dist/DAIJO-CALCULATOR/index.html'), // Adjust this path based on your Angular app's structure
            protocol: 'file:',
            slashes: true
        })
    );

    // Open DevTools - Remove this for production
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function ()
    {
        mainWindow = null;
    });
}

// This method will be called when Electron has finished initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function ()
{
    if (process.platform !== 'darwin')
    {
        app.quit();
    }
});

app.on('activate', function ()
{
    if (mainWindow === null)
    {
        createWindow();
    }
});
