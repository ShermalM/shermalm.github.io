const app = Vue.createApp({
    data(){
        return {
            projects: [
                {
                    name: 'Online File Explorer',
                    description: 'Created a web application using HTML, Bootstrap, and Pure Node.js. Deployed on Heroku PaaS',
                    imageSrc: 'images/onlinefileexplorer.png',
                    imageAlt: 'onlinefileexplorer',
                    githubLink: 'https://github.com/ShermalM/Online-File-Explorer-Web-App',
                    projectLink: 'https://shermals-file-explorer.herokuapp.com/',
                },
                {
                    name: 'Online Calculator',
                    description: 'Created a web application using React',
                    imageSrc: 'images/onlinecalculator.png',
                    imageAlt: 'onlinecalculator',
                    githubLink: 'https://github.com/ShermalM/Online-Calculator',
                    projectLink: 'https://shermalm.github.io/Online-Calculator/',
                },
                {
                    name: 'Stopwatch App',
                    description: 'Created a web application using HTML, jQuery, and Bootstrap',
                    imageSrc: 'images/stopwatchwebsite.png',
                    imageAlt: 'stopwatchwebsite',
                    githubLink: 'https://github.com/ShermalM/Stopwatch-Website',
                    projectLink: 'https://shermalm.github.io/Stopwatch-Website/',
                },
                {
                    name: 'Fruits Slice Game',
                    description: 'Created a web application using HTML, CSS, and jQuery',
                    imageSrc: 'images/fruitslicegame.png',
                    imageAlt: 'fruitslicegame',
                    githubLink: 'https://github.com/ShermalM/Fruit-Slice-Game',
                    projectLink: 'https://shermalm.github.io/Fruit-Slice-Game/',
                },
                {
                    name: 'Math Game',
                    description: 'Created a web application using HTML, CSS, and JavaScript',
                    imageSrc: 'images/mathgame.png',
                    imageAlt: 'mathgame',
                    githubLink: 'https://github.com/ShermalM/Math-Game',
                    projectLink: 'https://shermalm.github.io/Math-Game/',
                },
                {
                    name: 'Drawing App',
                    description: 'Created a web application using HTML, CSS, jQuery, jQuery UI, Canvas, and Local Storage',
                    imageSrc: 'images/drawingapp.png',
                    imageAlt: 'drawingapp',
                    githubLink: 'https://github.com/ShermalM/Drawing-App',
                    projectLink: 'https://shermalm.github.io/Drawing-App/',
                },
                {
                    name: 'Android Homies App',
                    description: 'Worked with a team of four to create an Android Application using Java, XML, and Firebase',
                    imageSrc: 'images/project_android_app_whole.png',
                    imageAlt: 'homiesandroidapp',
                    githubLink: 'https://github.com/ShermalM/Homies-Android-Application-',
                    projectLink: null,
                },
                {
                    name: 'Homies Smart Lock (IoT Project)',
                    description: 'Worked with a team of four to create a Smart Lock controlled by an Android/iOS mobile app using C, Javascript, Node.js, and Blynk IoT Platform',
                    imageSrc: 'images/project_lock.png',
                    imageAlt: 'homiessmartlock',
                    githubLink: 'https://github.com/ShermalM/Homies-Smart-Lock',
                    projectLink: null,
                },
            ]
        }
    }
});

app.mount('#projects');