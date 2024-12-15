    document.addEventListener('DOMContentLoaded', () => {



    // Dicționar
    const translations = {
        en: {
            subtitle: 'Network Engineer',
            aboutMe: 'About Me',
            contactMe: 'Contact Me',
            sidebar: ['Home', 'About Me', 'Services', 'Portfolio', 'Contact'],
            formLabels: ['Name:', 'Email:', 'Message:'],
            contactHeading: 'Contact Me',
            sendMessage: 'Send Message',
            techTitles: ['My Main Technologies', 'Secondary Technologies'],
            techNames: ['Python', 'Java', 'Electronics', 'HTML / CSS', 'C', 'Microsoft Office'],
            languagesTitle: 'Languages I Speak',
            languagesNames: ['English', 'Romanian', 'Spanish'],
            toggleBtn: 'EN',

            // Personal Projects Section
            projectsTitle: 'My Personal Projects',
            project1: {
                name: 'Car Robot',
                description: 'This a car, who moves using an advanced moving algorithm detecting what is infront using infrared sensors. After detecting an obstacle he recalculates his trajectory.',
            },
            project2: {
                name: 'Agriculture Game',
                description: 'This concept is inspired by Stardew Valley, a game focused on farming.',
            },
            project3: {
                name: 'Survivor Game',
                description: 'This project is inspired by Vampire Survivor.',
            },
            project4: {
                name: 'Project 4',
                description: 'Description of Project 4.',
            },
        },
        ro: {
            subtitle: 'Inginer de Rețea',
            aboutMe: 'Despre Mine',
            contactMe: 'Contactează-mă',
            sidebar: ['Acasă', 'Despre Mine', 'Servicii', 'Portofoliu', 'Contact'],
            formLabels: ['Nume:', 'Email:', 'Mesaj:'],
            contactHeading: 'Contactează-mă',
            sendMessage: 'Trimite Mesaj',
            techTitles: ['Tehnologiile mele principale', 'Tehnologii secundare'],
            techNames: ['Python', 'Java', 'Electronică', 'HTML / CSS', 'C', 'Microsoft Office'],
            languagesTitle: 'Limbile pe care le vorbesc',
            languagesNames: ['Engleză', 'Română', 'Spaniolă'],
            toggleBtn: 'RO',
            // Proiecte Personale
            projectsTitle: 'Proiectele mele personale',
            project1: {
                name: 'Robot Autonom',
                description: 'Aceasta este o mașină care se mișcă folosind un algoritm avansat de mișcare, detectând obstacolele cu ajutorul senzorilor infraroșii. După detectarea unui obstacol, recalculează traiectoria.',
            },
            project2: {
                name: 'Joc Agricultura',
                description: 'Acest concept este inspirat din Stardew Valley, un joc axat pe agricultură.',
            },
            project3: {
                name: 'Joc Survivor',
                description: 'Acest proiect este inspirat din Vampire Survivor.',
            },
            project4: {
                name: 'Proiectul 4',
                description: 'Descrierea Proiectului 4.',
            },
        },
        es: {
            subtitle: 'Ingeniero de Redes',
            aboutMe: 'Sobre Mí',
            contactMe: 'Contáctame',
            sidebar: ['Inicio', 'Sobre Mí', 'Servicios', 'Portafolio', 'Contacto'],
            formLabels: ['Nombre:', 'Correo:', 'Mensaje:'],
            contactHeading: 'Contáctame',
            sendMessage: 'Enviar Mensaje',
            techTitles: ['Mis Tecnologías Principales', 'Tecnologías Secundarias'],
            techNames: ['Python', 'Java', 'Electrónica', 'HTML / CSS', 'C', 'Microsoft Office'],
            languagesTitle: 'Idiomas que Hablo',
            languagesNames: ['Inglés', 'Rumano', 'Español'],
            toggleBtn: 'ES',
            // Proiectos Personales
            projectsTitle: 'Mis Proyectos Personales',
            project1: {
                name: 'Robot Automático',
                description: 'Este es un coche que se mueve utilizando un algoritmo avanzado que detecta lo que hay delante usando sensores infrarrojos. Después de detectar un obstáculo, recalcula su trayectoria.',
            },
            project2: {
                name: 'Juego de Agricultura',
                description: 'Este concepto está inspirado en Stardew Valley, un juego centrado en la agricultura.',
            },
            project3: {
                name: 'Juego Survivor',
                description: 'Este proyecto está inspirado en Vampire Survivor.',
            },
            project4: {
                name: 'Proyecto 4',
                description: 'Descripción del Proyecto 4.',
            },
        }
    };


    /* variabile */
    const toggleButton = document.getElementById('toggleLangBtn');
    const subtitle = document.querySelector('.subtitlu');
    const aboutMeButton = document.getElementById('aboutMeBtn');
    const contactMeButton = document.getElementById('contactMeBtn');
    const bottomContactMeButton = document.getElementById('bottomContactMeBtn');
    const sidebarItems = document.querySelectorAll('.sidebar a');
    const formLabels = document.querySelectorAll('.contact-form label');
    const contactHeading = document.querySelector('.contact-form h3');
    const techTitles = document.querySelectorAll('.technologies h2');
    const techNames = document.querySelectorAll('.tech-name');
    const languagesTitle = document.querySelector('.languages-section h2');
    const languagesNames = document.querySelectorAll('.language-name');
    const sendButton = document.querySelector('.submit-button');
    /* continuarea programului */

    let currentLanguage = 'en'; 

    const updateLanguage = (lang) => {
    const t = translations[lang];
    subtitle.textContent = t.subtitle;
    aboutMeButton.textContent = t.aboutMe;
    contactMeButton.textContent = t.contactMe;
    bottomContactMeButton.textContent = t.contactMe;
    toggleButton.textContent = t.toggleBtn;
    sendButton.textContent = t.sendMessage;

    // Sidebar
    sidebarItems.forEach((item, index) => {
        item.textContent = t.sidebar[index];
    });

    // Form labels
    formLabels.forEach((label, index) => {
        label.textContent = t.formLabels[index];
    });

    // Contact heading
    contactHeading.textContent = t.contactHeading;

    // Technologies section
    techTitles.forEach((title, index) => {
        title.textContent = t.techTitles[index];
    });

    techNames.forEach((name, index) => {
        name.textContent = t.techNames[index];
    });

    // Languages section
    languagesTitle.textContent = t.languagesTitle;
    
    languagesNames.forEach((name, index) => {
        name.textContent = t.languagesNames[index];
    });

    // Personal Projects Section
    document.getElementById('projectsTitle').textContent = t.projectsTitle;

    const project1 = document.getElementById('project1');
    project1.querySelector('.project-name').textContent = t.project1.name;
    project1.querySelector('.project-description').textContent = t.project1.description;

    const project2 = document.getElementById('project2');
    project2.querySelector('.project-name').textContent = t.project2.name;
    project2.querySelector('.project-description').textContent = t.project2.description;

    const project3 = document.getElementById('project3');
    project3.querySelector('.project-name').textContent = t.project3.name;
    project3.querySelector('.project-description').textContent = t.project3.description;

    const project4 = document.getElementById('project4');
    project4.querySelector('.project-name').textContent = t.project4.name;
    project4.querySelector('.project-description').textContent = t.project4.description;
};


    toggleButton.addEventListener('click', () => {
        const nextLanguage = currentLanguage === 'en' ? 'ro' : currentLanguage === 'ro' ? 'es' : 'en';
        currentLanguage = nextLanguage;
        updateLanguage(currentLanguage);
    });

    // Set initial language
    updateLanguage(currentLanguage);
});



// toggleMenu.js
document.getElementById('toggleMenuBtn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    
    // Verifică dacă meniul este deschis sau închis
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Ascunde meniul
    } else {
        sidebar.style.left = '0px'; // Afișează meniul
    }
});

// scroll up

document.getElementById('scrollUpBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// scroll down
const contactButtons = document.querySelectorAll('#contactMeBtn, #bottomContactMeBtn');

contactButtons.forEach(button => {
    button.addEventListener('click', function() {
        const contactForm = document.querySelector('.contact-form');
        window.scrollTo({ top: contactForm.offsetTop, behavior: 'smooth' });
    });
});
