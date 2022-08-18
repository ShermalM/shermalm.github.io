const app = Vue.createApp({
    data(){
        return {
            filters: ['JavaScript', 'jQuery', 'Nodejs', 'Vue', 'React', 'Bootstrap', 'MongoDB', 'Firebase', 'Java', 'C'],
            activeFilters: {
                JavaScript: false,
                jQuery: false,
                Nodejs: false,
                Vue: false,
                React: false,
                Bootstrap: false,
                MongoDB: false,
                Firebase: false,
                Java: false,
                C: false
            },
            filterOn: false,
            projects: [
                {
                    name: 'Natours',
                    techStack: ['Nodejs', 'JavaScript', 'MongoDB'],
                    imageSrc: 'images/natours.png',
                    imageAlt: 'natours',
                    githubLink: 'https://github.com/ShermalM/natours',
                    projectLink: 'https://shermal-natours.herokuapp.com/',
                },
                {
                    name: 'Find a Coach',
                    techStack: ['Vue', 'Firebase'],
                    imageSrc: 'images/findacoach.png',
                    imageAlt: 'findacoach',
                    githubLink: 'https://github.com/ShermalM/Find-A-Coach',
                    projectLink: 'https://vue-find-a-coach-3018d.web.app/coaches',
                },
                {
                    name: 'Online File Explorer',
                    techStack: ['Nodejs', 'Bootstrap'],
                    imageSrc: 'images/onlinefileexplorer.png',
                    imageAlt: 'onlinefileexplorer',
                    githubLink: 'https://github.com/ShermalM/Online-File-Explorer-Web-App',
                    projectLink: 'https://shermals-file-explorer.herokuapp.com/',
                },
                {
                    name: 'Learning Resource Manager',
                    techStack: ['Vue'],
                    imageSrc: 'images/learningresourcemanager.png',
                    imageAlt: 'learningresourcemanager',
                    githubLink: 'https://github.com/ShermalM/Learning-Resource-Manager',
                    projectLink: 'https://shermals-learning-resource-manager.netlify.app/',
                },
                {
                    name: 'Monster Slayer Game',
                    techStack: ['Vue'],
                    imageSrc: 'images/monsterslayergame.png',
                    imageAlt: 'monsterslayergame',
                    githubLink: 'https://github.com/ShermalM/Monster-Slayer-Game',
                    projectLink: 'https://shermalm.github.io/Monster-Slayer-Game/',
                },
                {
                    name: 'Online Calculator',
                    techStack: ['React'],
                    imageSrc: 'images/onlinecalculator.png',
                    imageAlt: 'onlinecalculator',
                    githubLink: 'https://github.com/ShermalM/Online-Calculator',
                    projectLink: 'https://shermalm.github.io/Online-Calculator/',
                },
                {
                    name: 'Stopwatch App',
                    techStack: ['jQuery', 'Bootstrap'],
                    imageSrc: 'images/stopwatchwebsite.png',
                    imageAlt: 'stopwatchwebsite',
                    githubLink: 'https://github.com/ShermalM/Stopwatch-Website',
                    projectLink: 'https://shermalm.github.io/Stopwatch-Website/',
                },
                {
                    name: 'Drawing App',
                    techStack: ['jQuery'],
                    imageSrc: 'images/drawingapp.png',
                    imageAlt: 'drawingapp',
                    githubLink: 'https://github.com/ShermalM/Drawing-App',
                    projectLink: 'https://shermalm.github.io/Drawing-App/',
                },
                {
                    name: 'Fruits Slice Game',
                    techStack: ['jQuery'],
                    imageSrc: 'images/fruitslicegame.png',
                    imageAlt: 'fruitslicegame',
                    githubLink: 'https://github.com/ShermalM/Fruit-Slice-Game',
                    projectLink: 'https://shermalm.github.io/Fruit-Slice-Game/',
                },
                {
                    name: 'Math Game',
                    techStack: ['JavaScript'],
                    imageSrc: 'images/mathgame.png',
                    imageAlt: 'mathgame',
                    githubLink: 'https://github.com/ShermalM/Math-Game',
                    projectLink: 'https://shermalm.github.io/Math-Game/',
                },
                {
                    name: 'Android Homies App',
                    techStack: ['Java', 'Firebase'],
                    imageSrc: 'images/project_android_app_whole.png',
                    imageAlt: 'homiesandroidapp',
                    githubLink: 'https://github.com/ShermalM/Homies-Android-Application-',
                    projectLink: null,
                },
                {
                    name: 'Homies Smart Lock (IoT Project)',
                    techStack: ['Nodejs', 'C'],
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
                    if(this.activeFilters.Firebase && project.techStack.includes('Firebase')){
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
            if(value.JavaScript || value.jQuery || value.Nodejs || value.Vue || value.React || value.Bootstrap || value.MongoDB || value.Firebase || value.Java || value.C){
                this.filterOn = true;
            } else{
                this.filterOn = false;
            }
        }
    }
});

app.mount('#projects');