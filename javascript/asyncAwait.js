// function downloadFile(filename, callback) {
//     console.log(`Starting to download ${filename}...`);
//     setTimeout(() => { callback(`${filename} is downloaded`) }, 2000);
// }

// // function displayMessage(message) {
// //     console.log(message);
// // }

// // downloadFile("video.mp4", (message1) => {
// //     console.log('message1');
// //     downloadFile("image.png", (message2) => {
// //         console.log('message2')
// //     })
// // });


// //downloadFile('vid.mp4', displayMessage)
// downloadFile('vid.mp4', (message1) => {
//     console.log(message1);
//     downloadFile('image.png', (message2) => {
//         console.log(message2);
//         downloadFile('image3', (message3) => {
//             console.log(message3)
//         });
//     });
// });

// function greetUser(namae, formatter) {
//     const greeting = formatter(namae);
//     console.log(greeting);
// }

// function casualGreeting(namae) {
//     return `Hey ${namae}`
// }

// greetUser('Ichigo', (namae) => {
//     return `Hello ${namae}`
// })

// LEVEL 2 SIMULATED DAYS

// function loadData(callback){
//     console.log("Loading data ....")
//     setTimeout(() => {
//         callback("Data loaded!");
//     }, 3000);
// }

// loadData((message) => {
//     console.log(message)
// })

// CHALLENGE 3 COOK A MEAL IN STEPS

// function makeStep(step, callback) {
//     setTimeout(() => {
//         console.log(`✅ ${step}`);
//         callback();
//     }, 3000)
// }

// makeStep('Get bread', () => {
//     makeStep('Add peanut butter', () => {
//         makeStep('Add Jelly', () => {
//             makeStep('Close sandwich', () => console.log ('Sandwich is ready'));
//         });
//     });
// });
// makeStep

// CALLENGE 4 CHECK SERVER 

// function checkServer(callback) {
//     setTimeout(() => {
//         const isUp = Math.random() > 0.5;
//         if (isUp) {
//             callback("server is up!!");
//         }
//         else {
//             callback("server is down, retrying....");
//             checkServer(callback)
//         }
//     }, 1500);
// }

// checkServer((message) => {
//     console.log(message)
//     if (message === "server is up!!"){
//         console.log("You can proceed...")
//     }
// })

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve("Data fetched!");
//             reject("something went wrong");
//         } ,1000);
//     });
// }

// fetchData()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));


// 1. Basic Promise Usage

// ✅ Task: Create a function downloadFile() that returns a promise and resolves with "File downloaded" after 2 seconds.

// function downloadFile() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('File downloaded')
//         }, 2000)
//     })
// }

// downloadFile()
//     .then(data => console.log(data))
// 2. Handle Failure

// ✅ Task: Modify downloadFile() to randomly fail using reject() with "Download failed".

// function downloadFile() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random()
//             if (success > 0.5) {
//                 resolve("File downloaded");
//             } else {
//                 reject("Download failed");
//             }
//         }, 2000);
//     })
// }

// downloadFile()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// 3. Chain Promises

// ✅ Task: Simulate downloading 3 files one after another using .then() chaining (no nesting).

// function downloadFile(filename) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${filename} is downloaded`);
//         }, 2000);
//     });
// }

// downloadFile('file1')
//     .then(data => {
//         console.log(data)
//         return downloadFile('file2')
//     })
//     .then(data1 => {
//         console.log(data1);
//         return downloadFile('file3')
//     })
//     .then(data2 => {
//         console.log(data2);
//         console.log("You are done downloading...");
//     })
//     .catch(error => {
//     console.log(`You have an error: ${error}`);
//     })

// function downloadFile(filename){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${filename} downloaded`);
//         },2000);
//     });
// }

// downloadFile('video.mp4')
//     .then((download1) => {
//         console.log(download1);
//         return downloadFile('image.png');
//     })
//     .then((download2) => {
//         console.log(download2);
//         return downloadFile('document.pdf');
//     })
//     .then((download3) => {
//         console.log(download3);
//         console.log("All files are downloaded!!");
//     })
//     .catch((error) => console.log(`Your error: ${error}`));


// function downloadFile(filename) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${filename} downloaded`);
//         }, 2000);
//     });
// }

// async function getData() {
//     const result = await(downloadFile('video.mp4'));
//     console.log(result);

//     const result1 = await(downloadFile('image.png'));
//     console.log(result1)

//     const result2 = await(downloadFile('document.pdf'))
//     console.log(result2)

//     console.log('All file are downloaded');
// }

// getData()

// 🎯 Task 3 (Challenge):

// Use try...catch around each file so even if one fails, 
// the rest continue (just like the
// .then() version we discussed earlier).

// function downloaadFile(filename) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${filename} is downloaded!!`)
//         }, 2000);
//     })
// }

// const downloadStatus = async () => {
//     try {
//         const file1 = await downloaadFile("Video.mp4");
//         console.log(file1);
//     }
//     catch (error) {
//         console.error(error)
//     }
//     try {
//         const file2 = await downloaadFile("image.png")
//         console.log(file2);
//     }
//     catch (error) {
//         console.error(error)
//     }
//     try {
//         const file3 = await downloaadFile('document.pdf');
//         console.log(file3);
//     }
//     catch (error) {
//         console.error(error)
//     }
//     console.log("Done downloading");

// }

// downloadStatus()



// ======================== FINAL TESTS ============================//


// 🚀 Challenge: Batch File Downloader with Status Tracker

// Skills Covered:

//     async/await

//     try...catch

//     loops

//     arrays

//     string interpolation

//     DOM manipulation (optional)

// 🧠 Scenario:

// You are building a mini downloader tool that:

//     Downloads multiple files from a list.

//     Tracks the download status of each.

//     Handles failures gracefully.

//     Logs the final report.

// ✅ Goal:

// You’ll:

//     Create an array of filenames.

//     Loop through them using for...of.

//     Download each using await downloadFile(...).

//     Log success or failure for each.

//     Show a summary at the end.


let filenames = ["Stochiastic processes.pdf", "Statistical modelling2",
    "Non-parametric methods", "Timeseries analysis",
    "Multivariate analysus", "Big data analysis", "Cloud computing"
]

const downloadFile = (filename) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random()
            if (success >= 0.5) {
                resolve(`${filename} downloaded!!`);
            } else {
                reject(`${filename} hasn't been downloaded`)
            }
        }, 2000);
    })

}

const downloadAllFiles = async () => {
    for (const file of filenames) {
        try{    
            const downloaded = await downloadFile(file)
            console.log(downloaded)
        }
        catch(error){
            console.log(error)
        }


    }
}


downloadAllFiles()
// filenames.forEach(async (file) => {
//     try{
//     files = await downloadFile(file)
//     console.log(file)
//     }
//     catch(error) {)
//         console.error(error)
//     }
// });

