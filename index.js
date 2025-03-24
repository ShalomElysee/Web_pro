document.addEventListener("DOMContentLoaded", function () {
    // 🌟 Gestion du défilement fluide
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                smoothScroll(targetElement, 1200); // Défilement sur 1.2s
            }
        });
    });

    function smoothScroll(target, duration) {
        let targetPosition = target.getBoundingClientRect().top + window.scrollY;
        let startPosition = window.scrollY;
        let distance = targetPosition - startPosition;
        let startTime = null;

        function animationScroll(currentTime) {
            if (startTime === null) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let scrollProgress = easeInOutQuad(timeElapsed, startPosition, distance, duration);

            window.scrollTo(0, scrollProgress);

            if (timeElapsed < duration) {
                requestAnimationFrame(animationScroll);
            }
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animationScroll);
    }

    // 🚀 Gestion des descriptions de projet au survol
    const projectCards = document.querySelectorAll(".project-card");
    const projectTitle = document.getElementById("project-title");
    const projectDescription = document.getElementById("project-description");

    // Afficher le premier projet par défaut
    if (projectCards.length > 0) {
        projectTitle.textContent = projectCards[0].getAttribute("data-title");
        projectDescription.textContent = projectCards[0].getAttribute("data-description");
    }

    projectCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            projectTitle.textContent = this.getAttribute("data-title");
            projectDescription.textContent = this.getAttribute("data-description");
        });
    });
});
function showSkillDescription(element) {
    const skillTitle = document.getElementById("skill-title");
    const skillDescription = document.getElementById("skill-description");

    // Mettre à jour le titre et la description
    skillTitle.textContent = element.getAttribute("data-title");
    skillDescription.textContent = element.getAttribute("data-description");
}

// Afficher la première compétence par défaut
document.addEventListener("DOMContentLoaded", function () {
    const firstSkill = document.querySelector(".skill");
    if (firstSkill) {
        showSkillDescription(firstSkill);
    }
});

function toggleCV() {
    const cvDisplay = document.getElementById("cv-display");
    const cvButton = document.querySelector(".cv-btn");

    if (cvDisplay.style.display === "none" || cvDisplay.style.display === "") {
        cvDisplay.style.display = "block";
        cvButton.textContent = "Hide My CV"; // Change le texte du bouton
    } else {
        cvDisplay.style.display = "none";
        cvButton.textContent = "View My CV"; // Remet le texte initial
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const sparkleContainer = document.querySelector(".sparkle-container");

    function createSparkle() {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        // Position aléatoire sur l'écran
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        // Taille aléatoire
        const size = Math.random() * 4 + 3; // Entre 3px et 7px
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        // Positionnement
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        // Couleur aléatoire (blanc ou #c99f83)
        const colors = ["white", "#c99f83"];
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Durée d'animation aléatoire
        const duration = Math.random() * 3 + 2; // Entre 2s et 5s
        sparkle.style.animationDuration = `${duration}s`;

        sparkleContainer.appendChild(sparkle);

        // Supprimer l'élément après l'animation
        setTimeout(() => {
            sparkle.remove();
        }, duration * 1000);
    }

    // Générer plusieurs étoiles en continu
    setInterval(createSparkle, 300); // Ajoute une étoile toutes les 300ms
});
