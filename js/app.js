const app = Vue.createApp({
    data(){
        return {
            filters: ['JavaScript', 'jQuery', 'Nodejs', 'Vue', 'React', 'Bootstrap', 'MongoDB', 'Java', 'C'],
            activeFilters: {
                JavaScript: false,
                jQuery: false,
                Nodejs: false,
                Vue: false,
                React: false,
                Bootstrap: false,
                MongoDB: false,
                Java: false,
                C: false
            },
            filterOn: false,
            projects: [
                {
                    name: 'Natours',
                    techStack: ['Nodejs', 'JavaScript', 'MongoDB'],
                    description: 'Built a web application and RESTful API using Node.js, following the MVC architecture. Utilized tools and libraries including Express, Mongoose, MongoDB, Stripe, Sendgrid, Pug and more. Hosted on Heroku PaaS.',
                    imageSrc: 'images/natours.png',
                    imageAlt: 'natours',
                    githubLink: 'https://github.com/ShermalM/natours',
                    projectLink: 'https://shermal-natours.herokuapp.com/',
                },
                {
                    name: 'Find a Coach',
                    techStack: ['Vue'],
                    description: 'Created a web application using Vue',
                    imageSrc: 'images/findacoach.png',
                    imageAlt: 'findacoach',
                    githubLink: 'https://github.com/ShermalM/Find-A-Coach',
                    projectLink: 'https://vue-find-a-coach-3018d.web.app/coaches',
                },
                {
                    name: 'Online File Explorer',
                    techStack: ['Nodejs', 'Bootstrap'],
                    description: 'Created a web application using HTML, Bootstrap, and Pure Node.js. Deployed on Heroku PaaS',
                    imageSrc: 'images/onlinefileexplorer.png',
                    imageAlt: 'onlinefileexplorer',
                    githubLink: 'https://github.com/ShermalM/Online-File-Explorer-Web-App',
                    projectLink: 'https://shermals-file-explorer.herokuapp.com/',
                },
                {
                    name: 'Monster Slayer Game',
                    techStack: ['Vue'],
                    description: 'Created a web application using Vue',
                    imageSrc: 'images/monsterslayergame.png',
                    imageAlt: 'monsterslayergame',
                    githubLink: 'https://github.com/ShermalM/Monster-Slayer-Game',
                    projectLink: 'https://shermalm.github.io/Monster-Slayer-Game/',
                },
                {
                    name: 'Online Calculator',
                    techStack: ['React'],
                    description: 'Created a web application using React',
                    imageSrc: 'images/onlinecalculator.png',
                    imageAlt: 'onlinecalculator',
                    githubLink: 'https://github.com/ShermalM/Online-Calculator',
                    projectLink: 'https://shermalm.github.io/Online-Calculator/',
                },
                {
                    name: 'Stopwatch App',
                    techStack: ['jQuery', 'Bootstrap'],
                    description: 'Created a web application using HTML, jQuery, and Bootstrap',
                    imageSrc: 'images/stopwatchwebsite.png',
                    imageAlt: 'stopwatchwebsite',
                    githubLink: 'https://github.com/ShermalM/Stopwatch-Website',
                    projectLink: 'https://shermalm.github.io/Stopwatch-Website/',
                },
                {
                    name: 'Drawing App',
                    techStack: ['jQuery'],
                    description: 'Created a web application using HTML, CSS, jQuery, jQuery UI, Canvas, and Local Storage',
                    imageSrc: 'images/drawingapp.png',
                    imageAlt: 'drawingapp',
                    githubLink: 'https://github.com/ShermalM/Drawing-App',
                    projectLink: 'https://shermalm.github.io/Drawing-App/',
                },
                {
                    name: 'Fruits Slice Game',
                    techStack: ['jQuery'],
                    description: 'Created a web application using HTML, CSS, and jQuery',
                    imageSrc: 'images/fruitslicegame.png',
                    imageAlt: 'fruitslicegame',
                    githubLink: 'https://github.com/ShermalM/Fruit-Slice-Game',
                    projectLink: 'https://shermalm.github.io/Fruit-Slice-Game/',
                },
                {
                    name: 'Math Game',
                    techStack: ['JavaScript'],
                    description: 'Created a web application using HTML, CSS, and JavaScript',
                    imageSrc: 'images/mathgame.png',
                    imageAlt: 'mathgame',
                    githubLink: 'https://github.com/ShermalM/Math-Game',
                    projectLink: 'https://shermalm.github.io/Math-Game/',
                },
                {
                    name: 'Android Homies App',
                    techStack: ['Java'],
                    description: 'Worked with a team of four to create an Android Application using Java, XML, and Firebase',
                    imageSrc: 'images/project_android_app_whole.png',
                    imageAlt: 'homiesandroidapp',
                    githubLink: 'https://github.com/ShermalM/Homies-Android-Application-',
                    projectLink: null,
                },
                {
                    name: 'Homies Smart Lock (IoT Project)',
                    techStack: ['Nodejs', 'C'],
                    description: 'Worked with a team of four to create a Smart Lock controlled by an Android/iOS mobile app using C, Javascript, Node.js, and Blynk IoT Platform',
                    imageSrc: 'images/project_lock.png',
                    imageAlt: 'homiessmartlock',
                    githubLink: 'https://github.com/ShermalM/Homies-Smart-Lock',
                    projectLink: null,
                },
            ]
        }
    },
    methods: {
        setFilter(event){
            const inputID = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.activeFilters,
                [inputID]: isActive
            };
            this.activeFilters = updatedFilters;
        }
    },
    computed: {
        filteredProjects(){
            if(!this.filterOn){
                return this.projects;
            } else{
                return this.projects.filter(project => {
                    if(this.activeFilters.JavaScript && project.techStack.includes('JavaScript')){
                        return true;
                    }
                    if(this.activeFilters.jQuery && project.techStack.includes('jQuery')){
                        return true;
                    }
                    if(this.activeFilters.Nodejs && project.techStack.includes('Nodejs')){
                        return true;
                    }
                    if(this.activeFilters.Vue && project.techStack.includes('Vue')){
                        return true;
                    }
                    if(this.activeFilters.React && project.techStack.includes('React')){
                        return true;
                    }
                    if(this.activeFilters.Bootstrap && project.techStack.includes('Bootstrap')){
                        return true;
                    }
                    if(this.activeFilters.MongoDB && project.techStack.includes('MongoDB')){
                        return true;
                    }
                    if(this.activeFilters.Java && project.techStack.includes('Java')){
                        return true;
                    }
                    if(this.activeFilters.C && project.techStack.includes('C')){
                        return true;
                    }
                });
            }
        }
    },
    watch: {
        activeFilters(value){
            if(value.JavaScript || value.jQuery || value.Nodejs || value.Vue || value.React || value.Bootstrap || value.MongoDB || value.Java || value.C){
                this.filterOn = true;
            } else{
                this.filterOn = false;
            }
        }
    }
});

app.mount('#projects');