// translation script for the website

document.addEventListener('DOMContentLoaded', () => {
    // Define translations for different languages
    const translations = {
        en: {
            nameDisplay: "Ayoze Kitajima",
            greetPhrase: "Hello, Visitor - Welcome to my page!",
            navHome: "Home",
            navSkills: "Skills",
            navProjects: "Projects",
            navAbout: "About me",
            navContact: "Contact",
            skillsTitle: "Skills",
            projectsTitle: "Projects",
            aboutTitle: "About me",
            aboutDescription: "A passionate and dedicated web developer with a focus on Front-End development. With a strong foundation in building intuitive and user-friendly websites, I am constantly expanding my skills and exploring new technologies to create clean, functional, and aesthetically pleasing web experiences. Sooner than later, I will transition to <strong>Full-Stack Development</strong>.<br><br>My <strong>goal</strong> is to contribute to innovative projects while continuing to grow as a developer. Among these projects, I aim to develop further my skills to possess a broader set of unique skills that can create safe and adaptable websites.",
            connectSection: "Connect with me"
        },
        ja: {
            nameDisplay: "北島 あよせ",
            greetPhrase: "こんにちは、訪問者様 - 私のページへようこそ！",
            navHome: "ホーム",
            navSkills: "スキル",
            navProjects: "プロジェクト",
            navAbout: "私について",
            navContact: "連絡先",
            skillsTitle: "スキル",
            projectsTitle: "プロジェクト",
            aboutTitle: "私について",
            aboutDescription: "フロントエンド開発に焦点を当てた、情熱的で献身的なウェブ開発者です。直感的でユーザーフレンドリーなウェブサイトを構築する強固な基盤を持ち、クリーンで機能的で美しいウェブ体験を作るために、常にスキルを拡大し、新しい技術を探求しています。近い将来、<strong>フルスタック</strong>開発に移行する予定です。<br><br>私の<strong>目標</strong>は、開発者として成長を続けながら、革新的なプロジェクトに貢献することです。これらのプロジェクトの中で、私はスキルをさらに発展させ、より広範で独自のスキルセットを持ち、安全で適応性のあるウェブサイトを構築できるようになることを目指しています。",
            connectSection: "連絡先"
        },
        es: {
            nameDisplay: "Ayoze Kitajima",
            greetPhrase: "Hola, Visitante - ¡Bienvenido a mi página!",
            navHome: "Inicio",
            navSkills: "Habilidades",
            navProjects: "Proyectos",
            navAbout: "Sobre mí",
            navContact: "Contacto",
            skillsTitle: "Habilidades",
            projectsTitle: "Proyectos",
            aboutTitle: "Sobre mí",
            aboutDescription: "Un desarrollador web apasionado y dedicado con un enfoque en el desarrollo Front-End. Con una base sólida en la creación de sitios web intuitivos y fáciles de usar, estoy expandiendo constantemente mis habilidades y explorando nuevas tecnologías para crear experiencias web limpias, funcionales y estéticamente agradables. Más temprano que tarde, me convertiré en un desarrollador <strong>Full-Stack</strong>.<br><br>Mi <strong>objetivo</strong> es contribuir a proyectos innovadores mientras continúo creciendo como desarrollador. Entre estos proyectos, mi objetivo es desarrollar aún más mis habilidades para poseer un conjunto de habilidades únicas más amplias que puedan crear sitios web seguros y adaptables.",
            connectSection: "Conéctate conmigo"
        }
    };

    // Get the user's language setting from localStorage or default to English
    let selectedLang = localStorage.getItem('selectedLanguage') || 'en';

    // Apply the selected language translations
    const applyTranslations = (lang) => {
        document.getElementById('name-sentence').textContent = translations[lang].nameDisplay;
        document.getElementById('greeting-phrase').textContent = translations[lang].greetPhrase;
        document.getElementById('nav-home').textContent = translations[lang].navHome;
        document.getElementById('nav-skills').textContent = translations[lang].navSkills;
        document.getElementById('nav-projects').textContent = translations[lang].navProjects;
        document.getElementById('nav-about').textContent = translations[lang].navAbout;
        document.getElementById('nav-contact').textContent = translations[lang].navContact;
        document.getElementById('skills-title').textContent = translations[lang].skillsTitle;
        document.getElementById('projects-title').textContent = translations[lang].projectsTitle;
        document.getElementById('about-title').textContent = translations[lang].aboutTitle;
        document.getElementById('about-description').innerHTML = translations[lang].aboutDescription; // Use innerHTML to handle HTML tags
        document.getElementById('connect-section').textContent = translations[lang].connectSection;

        // Add or remove the japanese-text class based on the language
        const elementsToUpdate = [
            'name-sentence',
            'greeting-phrase',
            'nav-home',
            'nav-skills',
            'nav-projects',
            'nav-about',
            'nav-contact',
            'skills-title',
            'projects-title',
            'about-title',
            'about-description',
            'connect-section'
        ];

        elementsToUpdate.forEach((id) => {
            const element = document.getElementById(id);
            if (lang === 'ja') {
                element.classList.add('japanese-text');
            } else {
                element.classList.remove('japanese-text');
            }
        });
    };

    // Apply translations on page load
    applyTranslations(selectedLang);

    // Add event listeners to language buttons to change language and store preference
    document.getElementById('lang-en').addEventListener('click', () => {
        selectedLang = 'en';
        localStorage.setItem('selectedLanguage', selectedLang);
        applyTranslations(selectedLang);
    });

    document.getElementById('lang-ja').addEventListener('click', () => {
        selectedLang = 'ja';
        localStorage.setItem('selectedLanguage', selectedLang);
        applyTranslations(selectedLang);
    });

    document.getElementById('lang-es').addEventListener('click', () => {
        selectedLang = 'es';
        localStorage.setItem('selectedLanguage', selectedLang);
        applyTranslations(selectedLang);
    });

});


