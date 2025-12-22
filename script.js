// ===== HOGWARTS QUIZ GAME ===== //

class HogwartsQuiz {
    constructor() {
        this.currentLevel = 0;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.levelScores = [0, 0, 0]; // Easy, Medium, Hard
        this.wizardName = '';
        this.selectedOption = null;
        this.questions = this.initializeQuestions();
        
        this.initializeEventListeners();
        this.showScreen('start-screen');
    }

    initializeQuestions() {
        return {
            easy: [
                {
                    question: "What is Harry's owl called?",
                    options: ["Errol", "Hedwig", "Crookshanks", "Pigwidgeon"],
                    correct: 1
                },
                {
                    question: "Which house is Harry in?",
                    options: ["Slytherin",  "Hufflepuff", "Ravenclaw","Gryffindor"],
                    correct: 3
                },
                {
                    question: "Who teaches Potions in Harry's first year?",
                    options: ["Snape", "Dumbledore", "McGonagall", "Hagrid"],
                    correct: 0
                },
                {
                    question: "What platform does the Hogwarts Express depart from?",
                    options: ["9", "9¾", "10", "11"],
                    correct: 1
                },
                {
                    question: "Who is Harry's best female friend?",
                    options: ["Ginny", "Cho", "Hermione", "Luna"],
                    correct: 2
                },
                {
                    question: "What shape is Harry's scar?",
                    options: ["Star", "Lightning", "Moon", "Circle"],
                    correct: 1
                },
                {
                    question: "Who is the headmaster of Hogwarts?",
                    options: ["Snape", "McGonagall", "Filch","Dumbledore"],
                    correct: 3
                },
                {
                    question: "What sport is popular at Hogwarts?",
                    options: ["Soccer", "Quidditch", "Chess", "Gobstones"],
                    correct: 1
                },
                {
                    question: "Which magical creature guards Gringotts?",
                    options: [ "Goblin", "Troll", "Centaur","Dragon",],
                    correct: 3
                },
                {
                    question: "What is the name of Hermione's pet cat?",
                    options: ["Crookshanks", "Mrs Norris", "Scabbers", "Hedwig"],
                    correct: 0
                }
            ],
            medium: [
                {
                    question: "Who betrays Harry's parents?",
                    options: ["Voldemort", "Sirius", "Snape", "Pettigrew"],
                    correct: 3
                },
                {
                    question: "Which potion grants luck?",
                    options: ["Felix Felicis", "Polyjuice", "Amortentia", "Veritaserum"],
                    correct: 0
                },
                {
    question: "Which potion forces the drinker to tell the truth?",
    options: ["Felix Felicis", "Veritaserum", "Polyjuice", "Amortentia"],
    correct: 1
},
                {
                    question: "Who is the Half-Blood Prince?",
                    options: ["Harry", "Snape", "Dumbledore", "Tom Riddle"],
                    correct: 1
                },
                {
                    question: "Which vault number is the Philosopher's Stone hidden in?",
                    options: [ "666", "100", "999","713",],
                    correct: 3
                },
                {
                    question: "Who teaches Defense Against the Dark Arts in 3rd year?",
                    options: [ "Lockhart", "Moody","Lupin", "Umbridge"],
                    correct: 2
                },
                {
                    question: "What magical map shows everyone in Hogwarts?",
                    options: ["Marauder's Map", "Wizard Map", "Hog Map", "Secret Map"],
                    correct: 0
                },
                {
                    question: "Which creature pulls the carriages at Hogwarts?",
                    options: [ "Hippogriffs", "Dragons", "Thestrals","Unicorns"],
                    correct: 2
                },
                {
                    question: "Who kills Dumbledore?",
                    options: ["Voldemort", "Snape", "Bellatrix", "Malfoy"],
                    correct: 1
                },
                {
                    question: "What magical object shows deepest desires?",
                    options: ["Mirror of Erised", "Pensieve", "Time-Turner", "Invisibility Cloak"],
                    correct: 0
                },
            ],
            hard: [
                {
                    question: "What is the core of Harry's wand?",
                    options: ["Dragon heartstring", "Phoenix feather", "Unicorn hair", "Thestral tail hair"],
                    correct: 1
                },
                {
    question: "Which decision ultimately led to Snape’s death?",
    options: [
        "Voldemort believing Snape was master of the Elder Wand",
        "Snape killing Dumbledore",
        "Nagini sensing betrayal",
        "Snape refusing to flee Hogwarts"
    ],
    correct: 0
},
                {
                    question: "Who is the keeper of keys at Hogwarts?",
                    options: ["Filch", "Hagrid", "Dumbledore", "Flitwick"],
                    correct: 1
                },
                {
                    question: "Who retrieves the sword from the sorting hat in the Chamber of Secrets?",
                    options: [ "Ron", "Hermione","Harry", "Neville"],
                    correct: 2
                },
                {
    question: "Which action actually transferred the ownership of the Elder Wand to Draco Malfoy?",
    options: [
        "Disarming Dumbledore",
        "Killing Dumbledore",
        "Touching the Elder Wand",
        "Being present at Dumbledore’s death"
    ],
    correct: 0
},
                
                {
                    question: "What creature is Aragog?",
                    options: ["Giant Spider", "Basilisk", "Troll", "Dragon"],
                    correct: 0
                },
                {
                    question: "Who founded Slytherin House?",
                    options: [ "Godric", "Helga", "Rowena","Salazar"],
                    correct: 3
                },
                {
                    question: "What potion is used to control someone?",
                    options: ["Veritaserum", "Polyjuice", "Amortentia", "None"],
                    correct: 3
                },
                {
    question: "Which creature can only be seen by those who have witnessed death?",
    options: ["Hippogriff", "Thestral", "Basilisk", "Dementor"],
    correct: 1
},
                {
    question: "Which Deathly Hallow was passed down through generations of the Peverell family?",
    options: ["Elder Wand", "Resurrection Stone", "Invisibility Cloak", "Pensieve"],
    correct: 2
},
            ]
        };
    }

    initializeEventListeners() {
        // Start screen
        document.getElementById('start-quiz').addEventListener('click', () => this.startQuiz());
        document.getElementById('wizard-name').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.startQuiz();
        });

        // Quiz screen
        document.getElementById('next-question').addEventListener('click', () => this.nextQuestion());

        // Level complete screen
        document.getElementById('continue-quiz').addEventListener('click', () => this.continueToNextLevel());

        // Final results screen
        document.getElementById('download-certificate').addEventListener('click', () => this.downloadCertificate());
        document.getElementById('retake-quiz').addEventListener('click', () => this.retakeQuiz());
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    startQuiz() {
        const nameInput = document.getElementById('wizard-name');
        const name = nameInput.value.trim();
        
        if (!name) {
            this.showMagicalNotification('Please enter your wizard name!');
            nameInput.focus();
            return;
        }

        this.wizardName = name;
        this.currentLevel = 0;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.levelScores = [0, 0, 0];
        this.selectedOption = null;

        this.showScreen('quiz-screen');
        this.loadCurrentQuestion();
        this.createMagicalEffect();
    }

    loadCurrentQuestion() {
        const levels = ['easy', 'medium', 'hard'];
        const currentLevelName = levels[this.currentLevel];
        const questions = this.questions[currentLevelName];
        const currentQuestion = questions[this.currentQuestionIndex];

        // Update UI
        document.getElementById('current-level').textContent = currentLevelName.charAt(0).toUpperCase() + currentLevelName.slice(1);
        document.getElementById('level-number').textContent = this.currentLevel + 1;
        document.getElementById('current-score').textContent = this.score;
        document.getElementById('current-question').textContent = `${this.currentQuestionIndex + 1}/10`;
        document.getElementById('question-text').textContent = currentQuestion.question;

        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / 10) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `Question ${this.currentQuestionIndex + 1} of 10`;

        // Load options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.className = 'option-button';
            optionButton.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
            optionButton.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionButton);
        });

        // Reset next button
        document.getElementById('next-question').disabled = true;
        this.selectedOption = null;
    }

    selectOption(optionIndex) {
        const optionButtons = document.querySelectorAll('.option-button');
        
        // Remove previous selections
        optionButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Select current option
        optionButtons[optionIndex].classList.add('selected');
        this.selectedOption = optionIndex;
        
        // Enable next button
        document.getElementById('next-question').disabled = false;
        
        this.createSparkleEffect(event.target);
    }

    nextQuestion() {
        if (this.selectedOption === null) return;

        const levels = ['easy', 'medium', 'hard'];
        const currentLevelName = levels[this.currentLevel];
        const questions = this.questions[currentLevelName];
        const currentQuestion = questions[this.currentQuestionIndex];

        // Check answer
        if (this.selectedOption === currentQuestion.correct) {
            this.score++;
            this.levelScores[this.currentLevel]++;
            this.showCorrectAnswer(true);
        } else {
            this.showCorrectAnswer(false);
        }

        // Move to next question
        setTimeout(() => {
            this.currentQuestionIndex++;
            
            if (this.currentQuestionIndex >= 10) {
                // Level complete
                this.showLevelComplete();
            } else {
                this.loadCurrentQuestion();
            }
        }, 1500);
    }

    showCorrectAnswer(isCorrect) {
        const optionButtons = document.querySelectorAll('.option-button');
        const currentQuestion = this.questions[['easy', 'medium', 'hard'][this.currentLevel]][this.currentQuestionIndex];
        
        // Show correct answer
        optionButtons[currentQuestion.correct].classList.add('correct');
        
        // Show user answer
        if (!isCorrect) {
            optionButtons[this.selectedOption].classList.add('incorrect');
        }

        // Disable all buttons
        optionButtons.forEach(btn => btn.disabled = true);
        document.getElementById('next-question').disabled = true;
    }

    showLevelComplete() {
        const levelNames = ['Easy', 'Medium', 'Hard'];
        const levelScore = this.levelScores[this.currentLevel];
        
        document.getElementById('level-score-display').textContent = levelScore;
        
        // Set appropriate message based on score
        let message = '';
        if (levelScore >= 9) {
            message = "Outstanding! You're a true wizard!";
        } else if (levelScore >= 7) {
            message = "Excellent work! Your magical knowledge is impressive!";
        } else if (levelScore >= 5) {
            message = "Good job! You're learning well!";
        } else {
            message = "Keep studying! The magical world awaits!";
        }
        
        document.getElementById('level-message').textContent = message;
        
        this.showScreen('level-complete-screen');
        this.createMagicalEffect();
    }

    continueToNextLevel() {
        this.currentLevel++;
        this.currentQuestionIndex = 0;
        
        if (this.currentLevel >= 3) {
            // Quiz complete
            this.showFinalResults();
        } else {
            // Next level
            this.showScreen('quiz-screen');
            this.loadCurrentQuestion();
            this.createMagicalEffect();
        }
    }

    showFinalResults() {
        const wizardTitleData = this.calculateWizardTitle();
        
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('wizard-title').textContent = wizardTitleData.title;
        document.getElementById('wizard-description').textContent = wizardTitleData.description;
        document.getElementById('easy-score').textContent = `${this.levelScores[0]}/10`;
        document.getElementById('medium-score').textContent = `${this.levelScores[1]}/10`;
        document.getElementById('hard-score').textContent = `${this.levelScores[2]}/10`;
        
        this.showScreen('final-results-screen');
        this.createMagicalEffect();
    }

    calculateWizardTitle() {
        if (this.score >= 0 && this.score <= 10) {
            return {
                title: "Curious Muggle",
                description: "You have much to learn about the wizarding world!"
            };
        } else if (this.score >= 11 && this.score <= 18) {
            return {
                title: "Rising Half-Blood Wizard",
                description: "You're developing good magical knowledge!"
            };
        } else if (this.score >= 19 && this.score <= 25) {
            return {
                title: "Elite Wizard of Hogwarts",
                description: "You have impressive knowledge of the magical world!"
            };
        } else {
            return {
                title: "The Chosen Wizard",
                description: "You are a true master of the wizarding world!"
            };
        }
    }

    createCertificateElement() {
        const wizardTitleData = this.calculateWizardTitle();
        const today = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Create certificate container with fixed desktop dimensions
        const certificate = document.createElement('div');
        certificate.className = 'certificate-download';
        certificate.style.position = 'fixed';
        certificate.style.left = '-9999px';
        certificate.style.top = '0';
        
        certificate.innerHTML = `
            <div class="certificate-header">
                <div class="certificate-crest">
                    <i class="fas fa-crown"></i>
                </div>
                <h1 class="certificate-title">Hogwarts School of Witchcraft and Wizardry</h1>
                <h2 class="certificate-subtitle">Certificate of Magical Achievement</h2>
            </div>
            
            <div class="certificate-content">
                <p class="certificate-text">
                    This is to certify that
                </p>
                <h3 class="certificate-name">${this.wizardName}</h3>
                <p class="certificate-text">
                    has successfully completed the Hogwarts Quiz Challenge and has been awarded the title of
                </p>
                <h3 class="certificate-title-text">${wizardTitleData.title}</h3>
                <p class="certificate-text">
                    with a total score of <span>${this.score}</span> out of 30 points
                </p>
                <p class="certificate-date">
                    Awarded on <span>${today}</span>
                </p>
            </div>
            
            <div class="certificate-seal">
                <div class="seal-circle">
                    <i class="fas fa-star"></i>
                </div>
            </div>
            
            <div class="certificate-signature">
                <div class="signature-image">
                    <img src="images/dumbledore-signature.jpg" alt="Albus Dumbledore's signature" crossorigin="anonymous">
                </div>
                <p>Albus Dumbledore</p>
                <span>Headmaster</span>
            </div>
        `;
        
        document.body.appendChild(certificate);
        return certificate;
    }

    async downloadCertificate() {
        // Show loading notification
        this.showMagicalNotification('Generating your certificate...');
        
        const certificate = this.createCertificateElement();
        
        try {
            // Fixed A4 dimensions (landscape): 297mm x 210mm at 96 DPI
            const A4_WIDTH = 1123; // ~297mm at 96 DPI
            const A4_HEIGHT = 794;  // ~210mm at 96 DPI
            
            // Wait a bit for images to load
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Calculate scale to exactly match A4 dimensions
            const certificateRect = certificate.getBoundingClientRect();
            const scaleX = A4_WIDTH / certificateRect.width;
            const scaleY = A4_HEIGHT / certificateRect.height;
            
            // Use the larger scale to ensure certificate fills entire canvas
            const scale = Math.max(scaleX, scaleY);
            
            const canvas = await html2canvas(certificate, {
                scale: scale,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#F4E4BC',
                width: certificateRect.width,
                height: certificateRect.height,
                windowWidth: certificateRect.width,
                windowHeight: certificateRect.height,
                scrollX: 0,
                scrollY: 0
            });

            // Create final canvas at exact A4 size and stretch certificate to fill
            const finalCanvas = document.createElement('canvas');
            finalCanvas.width = A4_WIDTH;
            finalCanvas.height = A4_HEIGHT;
            const ctx = finalCanvas.getContext('2d');
            
            // Fill background
            ctx.fillStyle = '#F4E4BC';
            ctx.fillRect(0, 0, A4_WIDTH, A4_HEIGHT);
            
            // Draw certificate stretched to fill entire A4 canvas (no borders, no centering)
            ctx.drawImage(canvas, 0, 0, A4_WIDTH, A4_HEIGHT);
            
            const link = document.createElement('a');
            link.download = `Hogwarts-Certificate-${this.wizardName.replace(/\s+/g, '-')}.png`;
            link.href = finalCanvas.toDataURL('image/png');
            link.click();

            this.showMagicalNotification('Certificate downloaded successfully!');
        } catch (error) {
            console.error('Error generating certificate:', error);
            this.showMagicalNotification('Error generating certificate. Please try again.');
        } finally {
            // Remove the temporary certificate element
            certificate.remove();
        }
    }

    

    retakeQuiz() {
        this.currentLevel = 0;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.levelScores = [0, 0, 0];
        this.selectedOption = null;
        
        this.showScreen('start-screen');
        document.getElementById('wizard-name').value = this.wizardName;
        this.createMagicalEffect();
    }

    // ===== MAGICAL EFFECTS ===== //
    createMagicalEffect() {
        // Create floating particles
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.createFloatingParticle();
            }, i * 200);
        }
    }

    createFloatingParticle() {
        const particle = document.createElement('div');
        particle.className = 'sparkle';
        particle.style.position = 'fixed';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.background = '#D4AF37';
        particle.style.borderRadius = '50%';
        particle.style.animation = 'sparkle 2s ease-in-out';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }

    createSparkleEffect(element) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = (event.clientX - 2) + 'px';
        sparkle.style.top = (event.clientY - 2) + 'px';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }

    showMagicalNotification(message) {
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.background = 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)';
        notification.style.color = '#F4E4BC';
        notification.style.padding = '15px 20px';
        notification.style.borderRadius = '8px';
        notification.style.border = '2px solid #D4AF37';
        notification.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
        notification.style.zIndex = '10000';
        notification.style.fontFamily = 'Cinzel, serif';
        notification.style.fontSize = '1.1em';
        notification.style.maxWidth = '300px';
        notification.style.textAlign = 'center';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            notification.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

// ===== INITIALIZE QUIZ WHEN DOM IS LOADED ===== //
document.addEventListener('DOMContentLoaded', () => {
    // Add some magical CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% { opacity: 0; transform: scale(0) rotate(0deg); }
            50% { opacity: 1; transform: scale(1) rotate(180deg); }
            100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }
        
        .sparkle {
            position: absolute;
            width: 6px;
            height: 6px;
            background: #D4AF37;
            border-radius: 50%;
            animation: sparkle 1s ease-in-out;
            pointer-events: none;
            z-index: 9999;
        }
    `;
    document.head.appendChild(style);

    // Initialize the quiz
    new HogwartsQuiz();
});

// ===== EXPORTS FOR TESTING ===== //
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HogwartsQuiz;
}