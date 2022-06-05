var Store = [
  {
    type: "folder",
    name: "node_modules",
    content: [
      {
        type: "txt",
        name: "node_modules",
        content: ["Директория с библиотеками для работы проекта"],
        getSize: 35,
        newName(name) {
          this.name = name;
        },
        dateLastEditing: "29.07.2017 22:22",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
    ],
    getSize: 35,
    newName(name) {
      this.name = name;
    },
    addNewFile: function (fileName, fileType, content) {
      this.content.push({
        type: fileType,
        name: fileName,
        content: [content],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
      });
    },
    dateLastEditing: "29.07.2017 22:22",
    newDateLastEditing() {
      let today = new Date();
      let current_date = today.getDate();
      let current_month = today.getMonth() + 1;
      let current_year = today.getFullYear();
      let current_hours = today.getHours();
      let current_minute = today.getMinutes();
      this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
    },
  },
  {
    type: "folder",
    name: "public",
    content: [
      {
        type: "img",
        name: "favicon.ico",
        content: ["image"],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "29.07.2017 22:22",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
      {
        type: "txt",
        name: "index.htmt",
        content: [
          `<!DOCTYPE html>
            <html lang="en">
            
            <head>
              <meta charset="utf-8" />
              <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="theme-color" content="#000000" />
              <meta name="description" content="Web site created using create-react-app" />
              <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />
              <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
              <title>File Manager</title>
            </head>
            
            <body>
              <noscript>You need to enable JavaScript to run this app.</noscript>
              <div id="root"></div>
            </body>
            
            </html>`,
        ],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "29.07.2017 22:22",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
      {
        type: "img",
        name: "logo192.png",
        content: ["image"],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "29.07.2017 22:22",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
      {
        type: "img",
        name: "logo512.png",
        content: ["image"],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "29.07.2017 22:22",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
      {
        type: "txt",
        name: "manifest.json",
        content: [
          `{
            "short_name": "React App",
            "name": "Create React App Sample",
            "icons": [
              {
                "src": "favicon.ico",
                "sizes": "64x64 32x32 24x24 16x16",
                "type": "image/x-icon"
              },
              {
                "src": "logo192.png",
                "type": "image/png",
                "sizes": "192x192"
              },
              {
                "src": "logo512.png",
                "type": "image/png",
                "sizes": "512x512"
              }
            ],
            "start_url": ".",
            "display": "standalone",
            "theme_color": "#000000",
            "background_color": "#ffffff"
          }
          `,
        ],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "29.07.2017 22:22",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
      {
        type: "txt",
        name: "robots",
        content: [
          `# https://www.robotstxt.org/robotstxt.html
        User-agent: *
        Disallow:
        `,
        ],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "29.07.2017 22:22",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
    ],
    getSize: 35,
    addNewFile: function (fileName, fileType, content) {
      this.content.push({
        type: fileType,
        name: fileName,
        content: [content],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
      });
    },
    dateLastEditing: "22.06.2011 22:22",
    newDateLastEditing() {
      let today = new Date();
      let current_date = today.getDate();
      let current_month = today.getMonth() + 1;
      let current_year = today.getFullYear();
      let current_hours = today.getHours();
      let current_minute = today.getMinutes();
      this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
    },
  },
  {
    type: "txt",
    name: ".gitignore",
    content: [],
    getSize: 35,
    newName: function (name) {
      this.name = name;
    },
    dateLastEditing: "29.07.2017 22:22",
    newDateLastEditing() {
      let today = new Date();
      let current_date = today.getDate();
      let current_month = today.getMonth() + 1;
      let current_year = today.getFullYear();
      let current_hours = today.getHours();
      let current_minute = today.getMinutes();
      this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
    },
  },
  {
    type: "txt",
    name: "package-lock",
    content: [],
    getSize: 35,
    newName: function (name) {
      this.name = name;
    },
    dateLastEditing: "29.07.2017 22:22",
    newDateLastEditing() {
      let today = new Date();
      let current_date = today.getDate();
      let current_month = today.getMonth() + 1;
      let current_year = today.getFullYear();
      let current_hours = today.getHours();
      let current_minute = today.getMinutes();
      this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
    },
  },
  {
    type: "txt",
    name: "package",
    content: [],
    getSize: 35,
    newName: function (name) {
      this.name = name;
    },
    dateLastEditing: "29.07.2017 22:22",
    newDateLastEditing() {
      let today = new Date();
      let current_date = today.getDate();
      let current_month = today.getMonth() + 1;
      let current_year = today.getFullYear();
      let current_hours = today.getHours();
      let current_minute = today.getMinutes();
      this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
    },
  },
  {
    type: "txt",
    name: "README",
    content: [],
    getSize: 35,
    newName: function (name) {
      this.name = name;
    },
    dateLastEditing: "29.07.2017 22:22",
    newDateLastEditing() {
      let today = new Date();
      let current_date = today.getDate();
      let current_month = today.getMonth() + 1;
      let current_year = today.getFullYear();
      let current_hours = today.getHours();
      let current_minute = today.getMinutes();
      this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
    },
  },
  {
    type: "folder",
    name: "src",
    content: [
      {
        type: "txt",
        name: "App.css",
        content: ["Директория с библиотеками для работы проекта"],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "31.06.2022 21:46",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
      {
        type: "txt",
        name: "App.js",
        content: ["Директория с библиотеками для работы проекта"],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "31.06.2022 21:46",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
      {
        type: "txt",
        name: "App.test.js",
        content: ["Директория с библиотеками для работы проекта"],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "31.06.2022 21:46",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
      {
        type: "txt",
        name: "index.css",
        content: ["Директория с библиотеками для работы проекта"],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "31.06.2022 21:46",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
      {
        type: "txt",
        name: "index.js",
        content: ["Директория с библиотеками для работы проекта"],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "31.06.2022 21:46",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
      {
        type: "img",
        name: "logo.svg",
        content: ["Директория с библиотеками для работы проекта"],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "31.06.2022 21:46",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
      {
        type: "txt",
        name: "reportWebVitals.js",
        content: ["Директория с библиотеками для работы проекта"],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "31.06.2022 21:46",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
      {
        type: "txt",
        name: "setupTests.js",
        content: ["Директория с библиотеками для работы проекта"],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
        dateLastEditing: "31.06.2022 21:46",
        newDateLastEditing() {
          let today = new Date();
          let current_date = today.getDate();
          let current_month = today.getMonth() + 1;
          let current_year = today.getFullYear();
          let current_hours = today.getHours();
          let current_minute = today.getMinutes();
          this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
        },
      },
    ],
    getSize: 35,
    newName: function (name) {
      this.name = name;
    },
    addNewFile: function (fileName, fileType, content) {
      this.content.push({
        type: fileType,
        name: fileName,
        content: [content],
        getSize: 35,
        newName: function (name) {
          this.name = name;
        },
      });
    },
    dateLastEditing: "29.07.2017 22:22",
    newDateLastEditing() {
      let today = new Date();
      let current_date = today.getDate();
      let current_month = today.getMonth() + 1;
      let current_year = today.getFullYear();
      let current_hours = today.getHours();
      let current_minute = today.getMinutes();
      this.dateLastEditing = `${current_date}.${current_month}.${current_year} ${current_hours}:${current_minute}`;
    },
  },
];
export default Store;
