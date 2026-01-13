/* =============================================
   Class 10 NCERT Study App - Main JavaScript
   Shared utilities, storage, and navigation
   ============================================= */

// Storage Keys
const STORAGE_KEY = 'ncert_study_app_v2';

// ==========================================
// STORAGE MANAGEMENT
// ==========================================

class StorageManager {
    constructor() {
        this.data = this.load();
    }

    load() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (e) {
            console.warn('Failed to load storage:', e);
        }
        return this.getDefaultData();
    }

    save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
        } catch (e) {
            console.warn('Failed to save storage:', e);
        }
    }

    getDefaultData() {
        return {
            theme: 'dark',
            streak: 0,
            lastStudyDate: null,
            subjects: {
                sst: {
                    flashcards: {},
                    quizScores: [],
                    completedChapters: [],
                    totalStudyTime: 0
                },
                science: {
                    flashcards: {},
                    quizScores: [],
                    completedChapters: [],
                    totalStudyTime: 0
                },
                math: {
                    flashcards: {},
                    quizScores: [],
                    completedChapters: [],
                    totalStudyTime: 0
                }
            }
        };
    }

    reset() {
        this.data = this.getDefaultData();
        this.save();
    }

    // Flashcard Leitner Box System
    getCardBox(subject, cardId) {
        return this.data.subjects[subject]?.flashcards[cardId] || 1;
    }

    setCardBox(subject, cardId, box) {
        if (!this.data.subjects[subject]) {
            this.data.subjects[subject] = { flashcards: {}, quizScores: [], completedChapters: [], totalStudyTime: 0 };
        }
        this.data.subjects[subject].flashcards[cardId] = Math.max(1, Math.min(4, box));
        this.save();
    }

    rateCard(subject, cardId, rating) {
        const currentBox = this.getCardBox(subject, cardId);
        let newBox;
        
        switch(rating) {
            case 'again':
                newBox = 1;
                break;
            case 'hard':
                newBox = Math.max(1, currentBox - 1);
                break;
            case 'good':
                newBox = Math.min(4, currentBox + 1);
                break;
            case 'easy':
                newBox = 4;
                break;
            default:
                newBox = currentBox;
        }
        
        this.setCardBox(subject, cardId, newBox);
        return newBox;
    }

    getBoxCounts(subject, cards) {
        const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
        cards.forEach(card => {
            const box = this.getCardBox(subject, card.id);
            counts[box]++;
        });
        return counts;
    }

    // Quiz Scores
    addQuizScore(subject, score, total) {
        if (!this.data.subjects[subject]) {
            this.data.subjects[subject] = { flashcards: {}, quizScores: [], completedChapters: [], totalStudyTime: 0 };
        }
        this.data.subjects[subject].quizScores.push({
            score,
            total,
            percentage: Math.round((score / total) * 100),
            date: new Date().toISOString()
        });
        this.save();
    }

    // Streak Management
    updateStreak() {
        const today = new Date().toISOString().split('T')[0];
        const lastDate = this.data.lastStudyDate;
        
        if (!lastDate) {
            this.data.streak = 1;
        } else if (lastDate === today) {
            // Same day, no change
        } else {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];
            
            if (lastDate === yesterdayStr) {
                this.data.streak++;
            } else {
                this.data.streak = 1;
            }
        }
        
        this.data.lastStudyDate = today;
        this.save();
        return this.data.streak;
    }

    getStreak() {
        return this.data.streak || 0;
    }

    // Theme
    getTheme() {
        return this.data.theme || 'dark';
    }

    setTheme(theme) {
        this.data.theme = theme;
        this.save();
    }
}

// Global storage instance
const storage = new StorageManager();

// ==========================================
// THEME MANAGEMENT
// ==========================================

function initTheme() {
    const theme = storage.getTheme();
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon();
}

function toggleTheme() {
    const current = storage.getTheme();
    const newTheme = current === 'dark' ? 'light' : 'dark';
    storage.setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const btn = document.getElementById('themeBtn');
    if (btn) {
        const theme = storage.getTheme();
        btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
}

// ==========================================
// NAVIGATION & TABS
// ==========================================

function initTabs(tabSelector, contentPrefix, defaultTab = 'overview') {
    const tabs = document.querySelectorAll(tabSelector);
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding content
            const sections = document.querySelectorAll(`[id^="${contentPrefix}"]`);
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            
            const targetSection = document.getElementById(`${contentPrefix}${tabId}`);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        });
    });
    
    // Activate default tab
    const defaultTabBtn = document.querySelector(`${tabSelector}[data-tab="${defaultTab}"]`);
    if (defaultTabBtn) {
        defaultTabBtn.click();
    }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Shuffle array (Fisher-Yates)
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Generate unique ID
function generateId() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
}

// Format date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

// Show toast notification
function showToast(message, type = 'info') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 3000);
}

// Create element helper
function createElement(tag, className, innerHTML) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
}

// ==========================================
// QUIZ SYSTEM
// ==========================================

class QuizEngine {
    constructor(subject, questions) {
        this.subject = subject;
        this.allQuestions = questions;
        this.currentQuiz = [];
        this.answers = {};
        this.submitted = false;
    }

    generateQuiz(count = 10, chapter = 'ALL') {
        let pool = [...this.allQuestions];
        
        if (chapter !== 'ALL') {
            pool = pool.filter(q => q.chapter === chapter);
        }
        
        this.currentQuiz = shuffleArray(pool).slice(0, count);
        this.answers = {};
        this.submitted = false;
        
        return this.currentQuiz;
    }

    selectAnswer(questionIndex, optionIndex) {
        if (!this.submitted) {
            this.answers[questionIndex] = optionIndex;
        }
    }

    submit() {
        this.submitted = true;
        let correct = 0;
        
        this.currentQuiz.forEach((q, i) => {
            if (this.answers[i] === q.correct) {
                correct++;
            }
        });
        
        storage.addQuizScore(this.subject, correct, this.currentQuiz.length);
        
        return {
            correct,
            total: this.currentQuiz.length,
            percentage: Math.round((correct / this.currentQuiz.length) * 100)
        };
    }

    getResults() {
        return this.currentQuiz.map((q, i) => ({
            question: q,
            selected: this.answers[i],
            isCorrect: this.answers[i] === q.correct
        }));
    }

    renderQuiz(container) {
        container.innerHTML = '';
        
        this.currentQuiz.forEach((q, qIndex) => {
            const questionDiv = createElement('div', 'quiz-question');
            
            questionDiv.innerHTML = `
                <div class="quiz-number">${qIndex + 1}</div>
                <div class="quiz-text">${q.question}</div>
                <div class="quiz-options">
                    ${q.options.map((opt, oIndex) => `
                        <div class="quiz-option" data-question="${qIndex}" data-option="${oIndex}">
                            <div class="quiz-option-marker">${String.fromCharCode(65 + oIndex)}</div>
                            <div>${opt}</div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            container.appendChild(questionDiv);
        });
        
        // Add click handlers
        container.querySelectorAll('.quiz-option').forEach(opt => {
            opt.addEventListener('click', () => {
                if (this.submitted) return;
                
                const qIndex = parseInt(opt.dataset.question);
                const oIndex = parseInt(opt.dataset.option);
                
                // Remove previous selection
                container.querySelectorAll(`.quiz-option[data-question="${qIndex}"]`)
                    .forEach(o => o.classList.remove('selected'));
                
                // Select this option
                opt.classList.add('selected');
                this.selectAnswer(qIndex, oIndex);
            });
        });
    }

    showResults(container) {
        const results = this.getResults();
        
        container.querySelectorAll('.quiz-option').forEach(opt => {
            const qIndex = parseInt(opt.dataset.question);
            const oIndex = parseInt(opt.dataset.option);
            const q = this.currentQuiz[qIndex];
            
            if (oIndex === q.correct) {
                opt.classList.add('correct');
            } else if (this.answers[qIndex] === oIndex) {
                opt.classList.add('wrong');
            }
        });
    }
}

// ==========================================
// FLASHCARD SYSTEM
// ==========================================

class FlashcardEngine {
    constructor(subject, cards) {
        this.subject = subject;
        this.allCards = cards;
        this.deck = [];
        this.currentIndex = 0;
        this.isFlipped = false;
    }

    loadDeck(chapter = 'ALL', shuffle = true) {
        let cards = [...this.allCards];
        
        if (chapter !== 'ALL') {
            cards = cards.filter(c => c.chapter === chapter);
        }
        
        this.deck = shuffle ? shuffleArray(cards) : cards;
        this.currentIndex = 0;
        this.isFlipped = false;
        
        return this.deck;
    }

    getCurrentCard() {
        return this.deck[this.currentIndex] || null;
    }

    next() {
        if (this.currentIndex < this.deck.length - 1) {
            this.currentIndex++;
            this.isFlipped = false;
            return true;
        }
        return false;
    }

    previous() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.isFlipped = false;
            return true;
        }
        return false;
    }

    flip() {
        this.isFlipped = !this.isFlipped;
    }

    rate(rating) {
        const card = this.getCurrentCard();
        if (card) {
            storage.rateCard(this.subject, card.id, rating);
            storage.updateStreak();
        }
    }

    getProgress() {
        return {
            current: this.currentIndex + 1,
            total: this.deck.length,
            percentage: Math.round(((this.currentIndex + 1) / this.deck.length) * 100)
        };
    }

    getBoxCounts() {
        return storage.getBoxCounts(this.subject, this.allCards);
    }

    renderCard(container) {
        const card = this.getCurrentCard();
        if (!card) {
            container.innerHTML = '<div class="text-center p-3"><p>No cards available</p></div>';
            return;
        }

        const progress = this.getProgress();
        const box = storage.getCardBox(this.subject, card.id);
        
        container.innerHTML = `
            <div class="flashcard ${this.isFlipped ? 'flipped' : ''}" id="currentFlashcard">
                <div class="text-muted mb-1" style="font-size: 0.85rem;">
                    Card ${progress.current} of ${progress.total} • Box ${box}
                    ${card.chapter ? `• ${card.chapter}` : ''}
                </div>
                <div class="flashcard-question">${card.front}</div>
                <div class="flashcard-answer ${this.isFlipped ? '' : 'hidden'}">
                    ${card.back}
                    ${card.mnemonic ? `<div class="flashcard-hint">💡 ${card.mnemonic}</div>` : ''}
                </div>
                <div class="text-center mt-2 text-muted" style="font-size: 0.9rem;">
                    ${this.isFlipped ? '' : 'Click to reveal answer'}
                </div>
            </div>
            
            <div class="progress-bar mt-2">
                <div class="progress-fill" style="width: ${progress.percentage}%"></div>
            </div>
            
            <div class="rating-buttons ${this.isFlipped ? '' : 'hidden'}" id="ratingButtons">
                <button class="rating-btn again" data-rating="again">❌ Again</button>
                <button class="rating-btn hard" data-rating="hard">😅 Hard</button>
                <button class="rating-btn good" data-rating="good">👍 Good</button>
                <button class="rating-btn easy" data-rating="easy">⚡ Easy</button>
            </div>
        `;

        // Add click to flip
        const flashcardEl = container.querySelector('#currentFlashcard');
        flashcardEl.addEventListener('click', () => {
            this.flip();
            this.renderCard(container);
        });

        // Add rating buttons
        container.querySelectorAll('.rating-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.rate(btn.dataset.rating);
                if (this.next()) {
                    this.renderCard(container);
                } else {
                    container.innerHTML = `
                        <div class="card text-center p-3">
                            <h2>🎉 Deck Complete!</h2>
                            <p class="text-muted mt-2">Great job! You've reviewed all cards.</p>
                            <button class="btn btn-primary mt-2" onclick="location.reload()">Start Over</button>
                        </div>
                    `;
                }
                this.updateBoxDisplay();
            });
        });
    }

    updateBoxDisplay() {
        const counts = this.getBoxCounts();
        ['box1', 'box2', 'box3', 'box4'].forEach((id, i) => {
            const el = document.getElementById(id);
            if (el) el.textContent = counts[i + 1];
        });
    }
}

// ==========================================
// SVG DIAGRAM HELPERS
// ==========================================

const SVGHelper = {
    create(width, height, viewBox) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        svg.setAttribute('viewBox', viewBox || `0 0 ${width} ${height}`);
        svg.style.maxWidth = '100%';
        svg.style.height = 'auto';
        return svg;
    },

    rect(x, y, width, height, fill, stroke, rx = 0) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('fill', fill);
        if (stroke) rect.setAttribute('stroke', stroke);
        if (rx) rect.setAttribute('rx', rx);
        return rect;
    },

    circle(cx, cy, r, fill, stroke) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', r);
        circle.setAttribute('fill', fill);
        if (stroke) {
            circle.setAttribute('stroke', stroke);
            circle.setAttribute('stroke-width', '2');
        }
        return circle;
    },

    line(x1, y1, x2, y2, stroke, strokeWidth = 2) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', stroke);
        line.setAttribute('stroke-width', strokeWidth);
        return line;
    },

    text(x, y, content, fontSize = 14, fill = '#f1f5f9', anchor = 'middle') {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x);
        text.setAttribute('y', y);
        text.setAttribute('font-size', fontSize);
        text.setAttribute('fill', fill);
        text.setAttribute('text-anchor', anchor);
        text.setAttribute('dominant-baseline', 'middle');
        text.textContent = content;
        return text;
    },

    path(d, fill, stroke, strokeWidth = 2) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', fill);
        if (stroke) {
            path.setAttribute('stroke', stroke);
            path.setAttribute('stroke-width', strokeWidth);
        }
        return path;
    },

    arrow(x1, y1, x2, y2, color) {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Line
        g.appendChild(this.line(x1, y1, x2, y2, color, 2));
        
        // Arrowhead
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const headLength = 10;
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const x3 = x2 - headLength * Math.cos(angle - Math.PI / 6);
        const y3 = y2 - headLength * Math.sin(angle - Math.PI / 6);
        const x4 = x2 - headLength * Math.cos(angle + Math.PI / 6);
        const y4 = y2 - headLength * Math.sin(angle + Math.PI / 6);
        
        path.setAttribute('d', `M ${x2} ${y2} L ${x3} ${y3} M ${x2} ${y2} L ${x4} ${y4}`);
        path.setAttribute('stroke', color);
        path.setAttribute('stroke-width', '2');
        path.setAttribute('fill', 'none');
        
        g.appendChild(path);
        return g;
    }
};

// ==========================================
// CANVAS GRAPH HELPERS
// ==========================================

const CanvasHelper = {
    createContext(canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.font = '14px Inter, sans-serif';
        return ctx;
    },

    drawGrid(ctx, width, height, gridSize = 40) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        
        for (let x = 0; x <= width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        
        for (let y = 0; y <= height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
    },

    drawAxes(ctx, originX, originY, width, height) {
        ctx.strokeStyle = '#f1f5f9';
        ctx.lineWidth = 2;
        
        // X axis
        ctx.beginPath();
        ctx.moveTo(0, originY);
        ctx.lineTo(width, originY);
        ctx.stroke();
        
        // Y axis
        ctx.beginPath();
        ctx.moveTo(originX, 0);
        ctx.lineTo(originX, height);
        ctx.stroke();
    },

    plotFunction(ctx, fn, xMin, xMax, originX, originY, scaleX, scaleY, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        let first = true;
        for (let x = xMin; x <= xMax; x += 0.1) {
            const y = fn(x);
            const screenX = originX + x * scaleX;
            const screenY = originY - y * scaleY;
            
            if (first) {
                ctx.moveTo(screenX, screenY);
                first = false;
            } else {
                ctx.lineTo(screenX, screenY);
            }
        }
        
        ctx.stroke();
    }
};

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Theme toggle button
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    
    // Reset button
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                storage.reset();
                location.reload();
            }
        });
    }
    
    // Update streak display
    const streakEl = document.getElementById('streak');
    if (streakEl) {
        streakEl.textContent = storage.getStreak();
    }
    
    // Update streak on activity
    storage.updateStreak();
});

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        storage,
        StorageManager,
        QuizEngine,
        FlashcardEngine,
        SVGHelper,
        CanvasHelper,
        shuffleArray,
        showToast,
        createElement
    };
}
