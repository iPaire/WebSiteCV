document.addEventListener('DOMContentLoaded', () => {
    // Selectăm butoanele corect
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    const contactMeButtons = document.querySelectorAll('#contactMeBtn, #bottomContactMeBtn');

    // Scroll Up (sus)
    if (scrollUpBtn) {
        scrollUpBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Scroll Down (jos, la secțiunea de contact)
    if (contactMeButtons.length > 0) {
        contactMeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const contactForm = document.querySelector('.contact-form');
                if (contactForm) {
                    window.scrollTo({ top: contactForm.offsetTop, behavior: 'smooth' });
                }
            });
        });
    }

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
            techNames: ['Python', 'Java', 'Electronics', 'HTML / CSS', 'C / C#', 'Microsoft Office'],
            languagesTitle: 'Languages I Speak',
            languagesNames: ['English', 'Romanian', 'Spanish'],
            toggleBtn: 'EN',
            projectsTitle: 'My Personal Projects',
            project1: {
                name: 'Car Robot',
                description1: 'This is a car that moves using an advanced algorithm, detecting obstacles with infrared sensors.',
                description2: 'After detecting an obstacle, it recalculates its trajectory.'
            },
            project2: {
                name: 'Agriculture Game',
                description1: 'This concept is inspired by Stardew Valley, a game focused on farming.',
            },
            project3: {
                name: 'Survivor Game',
                description1: 'This project is inspired by Vampire Survivor.',
            },
            project4: {
                name: 'Project 4',
                description1: 'Description of Project 4.',
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
            techNames: ['Python', 'Java', 'Electronică', 'HTML / CSS', 'C / C#', 'Microsoft Office'],
            languagesTitle: 'Limbile pe care le vorbesc',
            languagesNames: ['Engleză', 'Română', 'Spaniolă'],
            toggleBtn: 'RO',
            projectsTitle: 'Proiectele mele personale',
            project1: {
                name: 'Robot Autonom',
                description1: 'Aceasta este o mașină care se mișcă folosind un algoritm avansat, detectând obstacolele cu senzori infraroșii.',
                description2: 'După detectarea unui obstacol, recalculează traiectoria.'
            },
            project2: {
                name: 'Joc Agricultură',
                description1: 'Acest concept este inspirat din Stardew Valley, un joc axat pe agricultură.',
            },
            project3: {
                name: 'Joc Survivor',
                description1: 'Acest proiect este inspirat din Vampire Survivor.',
            },
            project4: {
                name: 'Proiectul 4',
                description1: 'Descrierea Proiectului 4.',
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
            techNames: ['Python', 'Java', 'Electrónica', 'HTML / CSS', 'C / C#', 'Microsoft Office'],
            languagesTitle: 'Idiomas que Hablo',
            languagesNames: ['Inglés', 'Rumano', 'Español'],
            toggleBtn: 'ES',
            projectsTitle: 'Mis Proyectos Personales',
            project1: {
                name: 'Robot Automático',
                description1: 'Este es un coche que se mueve utilizando un algoritmo avanzado, detectando obstáculos con sensores infrarrojos.',
                description2: 'Después de detectar un obstáculo, recalcula su trayectoria.'
            },
            project2: {
                name: 'Juego de Agricultura',
                description1: 'Este concepto está inspirado en Stardew Valley, un juego centrado en la agricultura.',
            },
            project3: {
                name: 'Juego Survivor',
                description1: 'Este proyecto está inspirado en Vampire Survivor.',
            },
            project4: {
                name: 'Proyecto 4',
                description1: 'Descripción del Proyecto 4.',
            },
        }
    };

    let currentLanguage = 'en'; 

    const updateLanguage = (lang) => {
        const t = translations[lang];
        document.querySelector('.subtitlu').textContent = t.subtitle;
        document.getElementById('aboutMeBtn').textContent = t.aboutMe;
        document.getElementById('contactMeBtn').textContent = t.contactMe;
        document.getElementById('bottomContactMeBtn').textContent = t.contactMe;
        document.getElementById('toggleLangBtn').textContent = t.toggleBtn;
        document.querySelector('.submit-button').textContent = t.sendMessage;

        document.querySelectorAll('.sidebar a').forEach((item, index) => {
            item.textContent = t.sidebar[index];
        });

        document.querySelectorAll('.contact-form label').forEach((label, index) => {
            label.textContent = t.formLabels[index];
        });

        document.querySelector('.contact-form h3').textContent = t.contactHeading;

        document.querySelectorAll('.technologies h2').forEach((title, index) => {
            title.textContent = t.techTitles[index];
        });

        document.querySelectorAll('.tech-name').forEach((name, index) => {
            name.textContent = t.techNames[index];
        });

        document.querySelector('.languages-section h2').textContent = t.languagesTitle;

        document.querySelectorAll('.language-name').forEach((name, index) => {
            name.textContent = t.languagesNames[index];
        });

        // Eveniment pe fiecare imagine a limbii
        document.querySelectorAll('.language-icon').forEach(item => {
            item.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                
                // Verifică dacă limba selectată este deja limba curentă
                if (lang !== currentLanguage) {
                    debounce(() => {
                        currentLanguage = lang;
                        updateLanguage(currentLanguage);
                    }, 300);  // 300ms delay
                }
            });
        });

        // Debounce
            let debounceTimeout;
            const debounce = (func, delay) => {
                clearTimeout(debounceTimeout);
                debounceTimeout = setTimeout(func, delay);
            };
        // continuare

        document.getElementById('projectsTitle').textContent = t.projectsTitle;

        const updateProject = (id, projectData) => {
            const project = document.getElementById(id);
            const descriptions = project.querySelectorAll('.project-description');
            project.querySelector('.project-name').textContent = projectData.name;
            descriptions[0].textContent = projectData.description1;
            if (descriptions[1]) {
                descriptions[1].textContent = projectData.description2 || '';
            }
        };

        updateProject('project1', t.project1);
        updateProject('project2', t.project2);
        updateProject('project3', t.project3);
        updateProject('project4', t.project4);
    };

    document.getElementById('toggleLangBtn').addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'ro' : currentLanguage === 'ro' ? 'es' : 'en';
        updateLanguage(currentLanguage);
    });

    updateLanguage(currentLanguage);
});

window.addEventListener('load', () => {
    document.getElementById('contactForm').reset();
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    let sentEmails = localStorage.getItem('sentEmails') || 0;

    if (sentEmails >= 4) {
        alert('You have reached the limit of 4 emails per day.');
        e.preventDefault(); // Oprește trimiterea
        return;
    }

    sentEmails++;
    localStorage.setItem('sentEmails', sentEmails);
});
