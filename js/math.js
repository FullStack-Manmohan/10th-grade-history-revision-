/* =============================================
   Class 10 Math - JavaScript
   NCERT Complete Content with Visual Learning
   ============================================= */

// ==========================================
// MATH CHAPTERS DATA
// ==========================================

const MATH_CHAPTERS = [
    { id: 'RN', title: 'Real Numbers', icon: '🔢' },
    { id: 'PL', title: 'Polynomials', icon: '📈' },
    { id: 'LE', title: 'Pair of Linear Equations', icon: '📐' },
    { id: 'QE', title: 'Quadratic Equations', icon: '📊' },
    { id: 'AP', title: 'Arithmetic Progressions', icon: '🔄' },
    { id: 'TR', title: 'Triangles', icon: '📐' },
    { id: 'CG', title: 'Coordinate Geometry', icon: '📍' },
    { id: 'TG', title: 'Introduction to Trigonometry', icon: '📏' },
    { id: 'TA', title: 'Some Applications of Trigonometry', icon: '🏔️' },
    { id: 'CI', title: 'Circles', icon: '⭕' },
    { id: 'CN', title: 'Constructions', icon: '✏️' },
    { id: 'AA', title: 'Areas Related to Circles', icon: '🎯' },
    { id: 'SV', title: 'Surface Areas and Volumes', icon: '📦' },
    { id: 'ST', title: 'Statistics', icon: '📊' },
    { id: 'PR', title: 'Probability', icon: '🎲' }
];

// ==========================================
// FORMULAS BY CHAPTER
// ==========================================

const MATH_FORMULAS = {
    quadratic: [
        { name: 'Standard Form', formula: 'ax² + bx + c = 0', note: 'where a ≠ 0' },
        { name: 'Quadratic Formula', formula: 'x = (-b ± √(b²-4ac)) / 2a', note: 'Roots of equation' },
        { name: 'Discriminant', formula: 'D = b² - 4ac', note: 'D>0: 2 roots, D=0: 1 root, D<0: no real roots' },
        { name: 'Sum of Roots', formula: 'α + β = -b/a', note: '' },
        { name: 'Product of Roots', formula: 'αβ = c/a', note: '' }
    ],
    ap: [
        { name: 'nth Term', formula: 'aₙ = a + (n-1)d', note: 'a=first term, d=common difference' },
        { name: 'Sum of n Terms', formula: 'Sₙ = n/2 [2a + (n-1)d]', note: '' },
        { name: 'Sum (Alt Form)', formula: 'Sₙ = n/2 (a + l)', note: 'l = last term' },
        { name: 'Common Difference', formula: 'd = aₙ - aₙ₋₁', note: '' }
    ],
    trigonometry: [
        { name: 'sin θ', formula: 'Opposite / Hypotenuse', note: 'SOH' },
        { name: 'cos θ', formula: 'Adjacent / Hypotenuse', note: 'CAH' },
        { name: 'tan θ', formula: 'Opposite / Adjacent = sin θ / cos θ', note: 'TOA' },
        { name: 'Pythagorean Identity', formula: 'sin²θ + cos²θ = 1', note: '' },
        { name: 'sec²θ Identity', formula: '1 + tan²θ = sec²θ', note: '' },
        { name: 'cosec²θ Identity', formula: '1 + cot²θ = cosec²θ', note: '' }
    ],
    coordinate: [
        { name: 'Distance Formula', formula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]', note: '' },
        { name: 'Midpoint', formula: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)', note: '' },
        { name: 'Section Formula', formula: '((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))', note: 'Ratio m:n' },
        { name: 'Area of Triangle', formula: '½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|', note: '' }
    ],
    circles: [
        { name: 'Circumference', formula: 'C = 2πr', note: '' },
        { name: 'Area of Circle', formula: 'A = πr²', note: '' },
        { name: 'Arc Length', formula: 'l = (θ/360°) × 2πr', note: 'θ in degrees' },
        { name: 'Area of Sector', formula: 'A = (θ/360°) × πr²', note: '' },
        { name: 'Area of Segment', formula: 'Area of Sector - Area of Triangle', note: '' }
    ],
    volumes: [
        { name: 'Cube Volume', formula: 'V = a³', note: 'a = side' },
        { name: 'Cuboid Volume', formula: 'V = l × b × h', note: '' },
        { name: 'Cylinder Volume', formula: 'V = πr²h', note: '' },
        { name: 'Cone Volume', formula: 'V = (1/3)πr²h', note: '' },
        { name: 'Sphere Volume', formula: 'V = (4/3)πr³', note: '' },
        { name: 'Hemisphere Volume', formula: 'V = (2/3)πr³', note: '' }
    ],
    statistics: [
        { name: 'Mean (Direct)', formula: 'x̄ = Σfᵢxᵢ / Σfᵢ', note: '' },
        { name: 'Mean (Assumed)', formula: 'x̄ = a + (Σfᵢdᵢ / Σfᵢ)', note: 'a = assumed mean' },
        { name: 'Median', formula: 'l + [(n/2 - cf)/f] × h', note: 'l=lower limit, h=class size' },
        { name: 'Mode', formula: 'l + [(f₁-f₀)/(2f₁-f₀-f₂)] × h', note: '' }
    ],
    probability: [
        { name: 'Probability', formula: 'P(E) = Favorable outcomes / Total outcomes', note: '' },
        { name: 'Range', formula: '0 ≤ P(E) ≤ 1', note: '' },
        { name: 'Complement', formula: 'P(not E) = 1 - P(E)', note: '' }
    ]
};

// ==========================================
// TRIG VALUES TABLE
// ==========================================

const TRIG_TABLE = [
    { angle: '0°', sin: '0', cos: '1', tan: '0' },
    { angle: '30°', sin: '1/2', cos: '√3/2', tan: '1/√3' },
    { angle: '45°', sin: '1/√2', cos: '1/√2', tan: '1' },
    { angle: '60°', sin: '√3/2', cos: '1/2', tan: '√3' },
    { angle: '90°', sin: '1', cos: '0', tan: '∞' }
];

// ==========================================
// FLASHCARDS
// ==========================================

const MATH_CARDS = [
    // Real Numbers
    { id: 'M01', chapter: 'RN', front: 'What is Euclid\'s Division Lemma?',
      back: 'For any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b.',
      mnemonic: 'a = bq + r (Dividend = Divisor × Quotient + Remainder)' },
    
    { id: 'M02', chapter: 'RN', front: 'How to find HCF using Euclid\'s algorithm?',
      back: 'Divide larger by smaller. If remainder = 0, divisor is HCF. If not, divide divisor by remainder. Repeat until remainder = 0.',
      mnemonic: 'Keep dividing until remainder is 0' },
    
    { id: 'M03', chapter: 'RN', front: 'What is the Fundamental Theorem of Arithmetic?',
      back: 'Every composite number can be expressed as a product of primes in a unique way (ignoring order). Example: 12 = 2² × 3',
      mnemonic: 'Every number = Unique prime factorization' },
    
    // Polynomials
    { id: 'M04', chapter: 'PL', front: 'Relationship between zeroes and coefficients (quadratic)',
      back: 'For ax² + bx + c: Sum of zeroes (α + β) = -b/a. Product of zeroes (αβ) = c/a.',
      mnemonic: 'Sum = -b/a, Product = c/a' },
    
    { id: 'M05', chapter: 'PL', front: 'What is the degree of a polynomial?',
      back: 'The highest power of the variable. Linear: degree 1. Quadratic: degree 2. Cubic: degree 3.',
      mnemonic: 'Degree = Highest exponent' },
    
    // Linear Equations
    { id: 'M06', chapter: 'LE', front: 'When do linear equations have unique solution?',
      back: 'a₁/a₂ ≠ b₁/b₂ → Unique solution (lines intersect). a₁/a₂ = b₁/b₂ ≠ c₁/c₂ → No solution (parallel). a₁/a₂ = b₁/b₂ = c₁/c₂ → Infinite solutions (same line).',
      mnemonic: 'Intersect=1, Parallel=0, Coincident=∞' },
    
    // Quadratic Equations
    { id: 'M07', chapter: 'QE', front: 'What is the quadratic formula?',
      back: 'x = (-b ± √(b² - 4ac)) / 2a. Gives the roots of ax² + bx + c = 0.',
      mnemonic: 'Negative b, plus or minus root of b² minus 4ac, all over 2a' },
    
    { id: 'M08', chapter: 'QE', front: 'What does the discriminant tell us?',
      back: 'D = b² - 4ac. If D > 0: Two distinct real roots. D = 0: Two equal roots. D < 0: No real roots.',
      mnemonic: 'D>0 = 2 roots, D=0 = 1 root, D<0 = imaginary' },
    
    // AP
    { id: 'M09', chapter: 'AP', front: 'What is an Arithmetic Progression?',
      back: 'A sequence where each term differs from the previous by a constant (common difference d). Example: 2, 5, 8, 11... (d = 3)',
      mnemonic: 'AP = Same difference between consecutive terms' },
    
    { id: 'M10', chapter: 'AP', front: 'Formula for nth term of AP?',
      back: 'aₙ = a + (n-1)d, where a = first term, d = common difference, n = position.',
      mnemonic: 'aₙ = a + (n-1)d → First + (position-1) × difference' },
    
    { id: 'M11', chapter: 'AP', front: 'Formula for sum of n terms of AP?',
      back: 'Sₙ = n/2 [2a + (n-1)d] OR Sₙ = n/2 (a + l), where l = last term.',
      mnemonic: 'Sₙ = n/2 × (first + last) OR n/2[2a + (n-1)d]' },
    
    // Triangles
    { id: 'M12', chapter: 'TR', front: 'What is the Basic Proportionality Theorem (BPT)?',
      back: 'If a line is drawn parallel to one side of a triangle, it divides the other two sides proportionally. DE ∥ BC → AD/DB = AE/EC.',
      mnemonic: 'Parallel line → Proportional division' },
    
    { id: 'M13', chapter: 'TR', front: 'Criteria for similarity of triangles?',
      back: 'AAA (Angle-Angle-Angle), SSS (Side-Side-Side ratio), SAS (Side-Angle-Side ratio). Similar triangles have equal angles and proportional sides.',
      mnemonic: 'AAA, SSS, SAS for similarity' },
    
    { id: 'M14', chapter: 'TR', front: 'State Pythagoras Theorem',
      back: 'In a right-angled triangle, the square of the hypotenuse equals the sum of squares of other two sides: a² + b² = c².',
      mnemonic: 'a² + b² = c² (legs squared = hypotenuse squared)' },
    
    // Coordinate Geometry
    { id: 'M15', chapter: 'CG', front: 'What is the distance formula?',
      back: 'Distance between (x₁, y₁) and (x₂, y₂) = √[(x₂-x₁)² + (y₂-y₁)²]',
      mnemonic: 'Root of (x-diff squared + y-diff squared)' },
    
    { id: 'M16', chapter: 'CG', front: 'What is the midpoint formula?',
      back: 'Midpoint of (x₁, y₁) and (x₂, y₂) = ((x₁+x₂)/2, (y₁+y₂)/2)',
      mnemonic: 'Average of x-coordinates, average of y-coordinates' },
    
    // Trigonometry
    { id: 'M17', chapter: 'TG', front: 'What are sin, cos, tan?',
      back: 'sin θ = Opposite/Hypotenuse. cos θ = Adjacent/Hypotenuse. tan θ = Opposite/Adjacent.',
      mnemonic: 'SOH-CAH-TOA' },
    
    { id: 'M18', chapter: 'TG', front: 'Values of sin 30°, cos 60°, tan 45°?',
      back: 'sin 30° = 1/2. cos 60° = 1/2. tan 45° = 1. (sin and cos are complementary: sin 30° = cos 60°)',
      mnemonic: 'sin 30° = cos 60° = 1/2, tan 45° = 1' },
    
    { id: 'M19', chapter: 'TG', front: 'State the Pythagorean identities',
      back: 'sin²θ + cos²θ = 1. 1 + tan²θ = sec²θ. 1 + cot²θ = cosec²θ.',
      mnemonic: 'sin² + cos² = 1 (the master identity)' },
    
    // Circles
    { id: 'M20', chapter: 'CI', front: 'What is a tangent to a circle?',
      back: 'A line that touches the circle at exactly one point. The tangent is perpendicular to the radius at the point of contact.',
      mnemonic: 'Tangent ⊥ Radius at touching point' },
    
    { id: 'M21', chapter: 'AA', front: 'Formula for area of sector?',
      back: 'Area = (θ/360°) × πr², where θ is the angle at center in degrees.',
      mnemonic: 'Fraction of angle × Full circle area' },
    
    // Statistics
    { id: 'M22', chapter: 'ST', front: 'What is Mean, Median, Mode?',
      back: 'Mean: Average of all values. Median: Middle value when arranged. Mode: Most frequent value.',
      mnemonic: 'Mean = Average, Median = Middle, Mode = Most common' },
    
    { id: 'M23', chapter: 'ST', front: 'Formula for median of grouped data?',
      back: 'Median = l + [(n/2 - cf)/f] × h. l = lower limit of median class, cf = cumulative frequency before median class, f = frequency of median class, h = class size.',
      mnemonic: 'l + [(n/2 - cf)/f] × h' },
    
    // Probability
    { id: 'M24', chapter: 'PR', front: 'What is probability?',
      back: 'P(E) = Number of favorable outcomes / Total number of outcomes. Range: 0 ≤ P(E) ≤ 1. P(sure event) = 1, P(impossible) = 0.',
      mnemonic: 'Favorable / Total' },
    
    { id: 'M25', chapter: 'PR', front: 'What is complementary probability?',
      back: 'P(not E) = 1 - P(E). The probability of an event not happening equals 1 minus probability of it happening.',
      mnemonic: 'P(not) = 1 - P(yes)' }
];

// ==========================================
// QUIZ QUESTIONS
// ==========================================

const MATH_QUIZ = [
    { chapter: 'RN', question: 'HCF of 96 and 404 is:',
      options: ['4', '12', '2', '8'], correct: 0 },
    
    { chapter: 'RN', question: 'If HCF(a,b) = 12 and a × b = 1800, then LCM(a,b) is:',
      options: ['12', '150', '1800', '21600'], correct: 1 },
    
    { chapter: 'PL', question: 'If α and β are zeroes of x² - 5x + 6, then α + β is:',
      options: ['5', '-5', '6', '-6'], correct: 0 },
    
    { chapter: 'PL', question: 'A quadratic polynomial with zeroes 2 and -3 is:',
      options: ['x² + x - 6', 'x² - x - 6', 'x² + x + 6', 'x² - x + 6'], correct: 0 },
    
    { chapter: 'QE', question: 'The discriminant of 2x² - 5x + 3 = 0 is:',
      options: ['1', '-1', '25', '49'], correct: 0 },
    
    { chapter: 'QE', question: 'The roots of x² - 4x + 4 = 0 are:',
      options: ['2, 2', '2, -2', '-2, -2', '4, 0'], correct: 0 },
    
    { chapter: 'AP', question: 'The 10th term of AP 2, 5, 8, 11... is:',
      options: ['29', '32', '26', '35'], correct: 0 },
    
    { chapter: 'AP', question: 'Sum of first 20 terms of AP 1, 4, 7, 10... is:',
      options: ['590', '570', '580', '600'], correct: 0 },
    
    { chapter: 'TR', question: 'In similar triangles, corresponding sides are:',
      options: ['Equal', 'Proportional', 'Parallel', 'Perpendicular'], correct: 1 },
    
    { chapter: 'CG', question: 'Distance between points (3, 4) and (0, 0) is:',
      options: ['5', '7', '25', '12'], correct: 0 },
    
    { chapter: 'CG', question: 'Midpoint of (2, 4) and (6, 8) is:',
      options: ['(4, 6)', '(8, 12)', '(3, 5)', '(2, 2)'], correct: 0 },
    
    { chapter: 'TG', question: 'Value of sin 45° is:',
      options: ['1/2', '1/√2', '√3/2', '1'], correct: 1 },
    
    { chapter: 'TG', question: 'If tan θ = 1, then θ is:',
      options: ['30°', '45°', '60°', '90°'], correct: 1 },
    
    { chapter: 'TG', question: 'sin²30° + cos²30° equals:',
      options: ['0', '1', '1/2', '2'], correct: 1 },
    
    { chapter: 'CI', question: 'A tangent to a circle is _____ to the radius at point of contact.',
      options: ['Parallel', 'Perpendicular', 'Equal', 'Coincident'], correct: 1 },
    
    { chapter: 'AA', question: 'Area of circle with radius 7 cm is (π = 22/7):',
      options: ['154 cm²', '44 cm²', '22 cm²', '308 cm²'], correct: 0 },
    
    { chapter: 'SV', question: 'Volume of sphere with radius 3 cm is:',
      options: ['36π cm³', '27π cm³', '12π cm³', '18π cm³'], correct: 0 },
    
    { chapter: 'ST', question: 'Mode of data 2, 3, 3, 5, 5, 5, 6 is:',
      options: ['2', '3', '5', '6'], correct: 2 },
    
    { chapter: 'PR', question: 'Probability of getting head in a coin toss is:',
      options: ['1', '0', '1/2', '2'], correct: 2 },
    
    { chapter: 'PR', question: 'If P(E) = 0.3, then P(not E) is:',
      options: ['0.3', '0.7', '1.3', '0'], correct: 1 }
];

// ==========================================
// MATH DIAGRAMS (SVG)
// ==========================================

const MathDiagrams = {
    drawQuadraticGraph(container) {
        container.innerHTML = `
            <svg viewBox="0 0 400 300" class="diagram-svg">
                <!-- Grid -->
                <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(100,116,139,0.2)" stroke-width="0.5"/>
                    </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid)"/>
                
                <!-- Axes -->
                <line x1="40" y1="250" x2="380" y2="250" stroke="#64748b" stroke-width="2"/>
                <line x1="200" y1="20" x2="200" y2="280" stroke="#64748b" stroke-width="2"/>
                <text x="385" y="255" fill="#64748b" font-size="14">x</text>
                <text x="205" y="18" fill="#64748b" font-size="14">y</text>
                
                <!-- Parabola y = x² (scaled) -->
                <path d="M 60 250 Q 130 20 200 250 Q 270 20 340 250" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                
                <!-- Vertex -->
                <circle cx="200" cy="250" r="5" fill="#22c55e"/>
                <text x="210" y="270" fill="#22c55e" font-size="12">Vertex (0, 0)</text>
                
                <!-- Roots -->
                <circle cx="100" cy="250" r="5" fill="#ef4444"/>
                <circle cx="300" cy="250" r="5" fill="#ef4444"/>
                <text x="80" y="275" fill="#ef4444" font-size="11">Root α</text>
                <text x="285" y="275" fill="#ef4444" font-size="11">Root β</text>
                
                <!-- Axis of symmetry -->
                <line x1="200" y1="20" x2="200" y2="250" stroke="#f59e0b" stroke-width="1" stroke-dasharray="5,5"/>
                <text x="145" y="40" fill="#f59e0b" font-size="11">Axis of symmetry</text>
                
                <!-- Labels -->
                <text x="200" y="290" text-anchor="middle" fill="#f1f5f9" font-size="14">Quadratic Graph: y = ax² + bx + c</text>
            </svg>
            <div class="callout mt-2">
                <strong>Key Points:</strong> Vertex is the minimum/maximum point. Roots are where graph crosses x-axis.
            </div>
        `;
    },

    drawTrigRatios(container) {
        container.innerHTML = `
            <svg viewBox="0 0 400 300" class="diagram-svg">
                <!-- Right triangle -->
                <polygon points="80,250 320,250 80,80" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="3"/>
                
                <!-- Right angle marker -->
                <path d="M 80 230 L 100 230 L 100 250" stroke="#64748b" stroke-width="2" fill="none"/>
                
                <!-- Angle theta -->
                <path d="M 280 250 A 40 40 0 0 1 260 220" stroke="#22c55e" stroke-width="2" fill="none"/>
                <text x="245" y="235" fill="#22c55e" font-size="16">θ</text>
                
                <!-- Labels for sides -->
                <text x="200" y="270" text-anchor="middle" fill="#f59e0b" font-size="14">Adjacent (b)</text>
                <text x="55" y="170" fill="#ef4444" font-size="14" transform="rotate(-90, 55, 170)">Opposite (a)</text>
                <text x="220" y="150" fill="#8b5cf6" font-size="14" transform="rotate(-35, 220, 150)">Hypotenuse (c)</text>
                
                <!-- Formulas -->
                <text x="320" y="50" fill="#22c55e" font-size="13">sin θ = a/c (Opp/Hyp)</text>
                <text x="320" y="75" fill="#3b82f6" font-size="13">cos θ = b/c (Adj/Hyp)</text>
                <text x="320" y="100" fill="#f59e0b" font-size="13">tan θ = a/b (Opp/Adj)</text>
                
                <!-- SOH CAH TOA -->
                <rect x="310" y="120" width="80" height="30" rx="5" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6"/>
                <text x="350" y="140" text-anchor="middle" fill="#8b5cf6" font-size="12" font-weight="bold">SOH-CAH-TOA</text>
                
                <text x="200" y="290" text-anchor="middle" fill="#f1f5f9" font-size="14">Trigonometric Ratios in Right Triangle</text>
            </svg>
        `;
    },

    drawCoordinatePlane(container) {
        container.innerHTML = `
            <svg viewBox="0 0 400 320" class="diagram-svg">
                <!-- Grid -->
                <defs>
                    <pattern id="coordGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(100,116,139,0.2)" stroke-width="0.5"/>
                    </pattern>
                </defs>
                <rect x="20" y="10" width="360" height="270" fill="url(#coordGrid)"/>
                
                <!-- Axes -->
                <line x1="20" y1="145" x2="380" y2="145" stroke="#64748b" stroke-width="2"/>
                <line x1="200" y1="10" x2="200" y2="280" stroke="#64748b" stroke-width="2"/>
                
                <!-- Axis labels -->
                <text x="385" y="150" fill="#64748b" font-size="14">x</text>
                <text x="205" y="20" fill="#64748b" font-size="14">y</text>
                <text x="205" y="160" fill="#64748b" font-size="12">O</text>
                
                <!-- Points -->
                <circle cx="290" cy="85" r="6" fill="#ef4444"/>
                <text x="300" y="80" fill="#ef4444" font-size="12">A(3, 2)</text>
                
                <circle cx="110" cy="205" r="6" fill="#22c55e"/>
                <text x="65" y="215" fill="#22c55e" font-size="12">B(-3, -2)</text>
                
                <!-- Distance line -->
                <line x1="110" y1="205" x2="290" y2="85" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,5"/>
                
                <!-- Midpoint -->
                <circle cx="200" cy="145" r="5" fill="#f59e0b"/>
                <text x="210" y="140" fill="#f59e0b" font-size="11">Midpoint</text>
                
                <!-- Quadrant labels -->
                <text x="280" y="60" fill="#64748b" font-size="11">Q1 (+,+)</text>
                <text x="80" y="60" fill="#64748b" font-size="11">Q2 (-,+)</text>
                <text x="80" y="240" fill="#64748b" font-size="11">Q3 (-,-)</text>
                <text x="280" y="240" fill="#64748b" font-size="11">Q4 (+,-)</text>
                
                <text x="200" y="305" text-anchor="middle" fill="#f1f5f9" font-size="14">Coordinate Geometry: Distance & Midpoint</text>
            </svg>
            <div class="formula-box mt-2">
                <div>Distance = √[(x₂-x₁)² + (y₂-y₁)²]</div>
            </div>
        `;
    },

    drawCircleTheorems(container) {
        container.innerHTML = `
            <svg viewBox="0 0 400 300" class="diagram-svg">
                <!-- Circle -->
                <circle cx="200" cy="140" r="100" fill="none" stroke="#3b82f6" stroke-width="3"/>
                
                <!-- Center -->
                <circle cx="200" cy="140" r="4" fill="#22c55e"/>
                <text x="210" y="145" fill="#22c55e" font-size="12">O</text>
                
                <!-- Radius -->
                <line x1="200" y1="140" x2="280" y2="90" stroke="#f59e0b" stroke-width="2"/>
                <text x="250" y="105" fill="#f59e0b" font-size="11">r</text>
                
                <!-- Tangent -->
                <line x1="240" y1="40" x2="320" y2="140" stroke="#ef4444" stroke-width="2"/>
                <text x="310" y="100" fill="#ef4444" font-size="12">Tangent</text>
                
                <!-- Point of contact -->
                <circle cx="280" cy="90" r="4" fill="#8b5cf6"/>
                <text x="290" y="85" fill="#8b5cf6" font-size="11">P</text>
                
                <!-- Right angle marker -->
                <path d="M 270 85 L 275 75 L 285 80" stroke="#64748b" stroke-width="1.5" fill="none"/>
                
                <!-- Chord -->
                <line x1="120" y1="80" x2="280" y2="180" stroke="#06b6d4" stroke-width="2"/>
                <text x="160" y="100" fill="#06b6d4" font-size="11">Chord</text>
                
                <!-- Perpendicular from center to chord -->
                <line x1="200" y1="140" x2="175" y2="110" stroke="#64748b" stroke-width="1" stroke-dasharray="4,2"/>
                
                <text x="200" y="280" text-anchor="middle" fill="#f1f5f9" font-size="14">Circle: Tangent ⊥ Radius at Point of Contact</text>
            </svg>
        `;
    }
};

// ==========================================
// MATH ENGINE CLASS
// ==========================================

class MathEngine {
    constructor() {
        this.chapters = MATH_CHAPTERS;
        this.cards = MATH_CARDS;
        this.quizQuestions = MATH_QUIZ;
        this.formulas = MATH_FORMULAS;
        
        this.flashcardEngine = new FlashcardEngine('math', this.cards);
        this.quizEngine = new QuizEngine('math', this.quizQuestions);
    }

    renderFormulas(container, category = 'quadratic') {
        const formulas = this.formulas[category] || [];
        container.innerHTML = `
            <div class="grid grid-2" style="gap:12px">
                ${formulas.map(f => `
                    <div class="formula-box">
                        <div class="formula-title">${f.name}</div>
                        <div style="font-size:1.3rem; margin:8px 0">${f.formula}</div>
                        ${f.note ? `<div style="font-size:0.85rem; color:var(--text-muted)">${f.note}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderTrigTable(container) {
        container.innerHTML = `
            <table style="width:100%; border-collapse:collapse; margin-top:12px;">
                <thead>
                    <tr style="background:var(--bg-elevated)">
                        <th style="padding:12px; border:1px solid var(--border-color)">Angle</th>
                        <th style="padding:12px; border:1px solid var(--border-color)">sin θ</th>
                        <th style="padding:12px; border:1px solid var(--border-color)">cos θ</th>
                        <th style="padding:12px; border:1px solid var(--border-color)">tan θ</th>
                    </tr>
                </thead>
                <tbody>
                    ${TRIG_TABLE.map(row => `
                        <tr>
                            <td style="padding:10px; border:1px solid var(--border-color); text-align:center; font-weight:600">${row.angle}</td>
                            <td style="padding:10px; border:1px solid var(--border-color); text-align:center">${row.sin}</td>
                            <td style="padding:10px; border:1px solid var(--border-color); text-align:center">${row.cos}</td>
                            <td style="padding:10px; border:1px solid var(--border-color); text-align:center">${row.tan}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    renderChapters(container) {
        container.innerHTML = this.chapters.map(ch => `
            <div class="accordion" data-chapter="${ch.id}">
                <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
                    <span class="accordion-title">${ch.icon} ${ch.title}</span>
                    <span class="accordion-icon">▼</span>
                </div>
                <div class="accordion-content">
                    <p class="text-muted">Key formulas and concepts from this chapter.</p>
                    <button class="btn btn-math mt-2" onclick="mathApp.studyChapter('${ch.id}')">
                        Study This Chapter →
                    </button>
                </div>
            </div>
        `).join('');
    }

    studyChapter(chapterId) {
        const tab = document.querySelector('.tab[data-tab="flashcards"]');
        if (tab) tab.click();
        
        this.flashcardEngine.loadDeck(chapterId, true);
        const container = document.getElementById('flashcardArea');
        if (container) this.flashcardEngine.renderCard(container);
    }

    init() {
        initTabs('.tab', 'section-', 'overview');
        
        // Chapters
        const chapterContainer = document.getElementById('chapterList');
        if (chapterContainer) this.renderChapters(chapterContainer);
        
        // Formulas
        const formulaContainer = document.getElementById('formulaArea');
        const formulaSelect = document.getElementById('formulaSelect');
        if (formulaContainer && formulaSelect) {
            formulaSelect.addEventListener('change', () => {
                this.renderFormulas(formulaContainer, formulaSelect.value);
            });
            this.renderFormulas(formulaContainer, 'quadratic');
        }
        
        // Trig table
        const trigTableContainer = document.getElementById('trigTable');
        if (trigTableContainer) this.renderTrigTable(trigTableContainer);
        
        // Diagrams
        const diagramContainer = document.getElementById('diagramArea');
        const diagramSelect = document.getElementById('diagramSelect');
        if (diagramContainer && diagramSelect) {
            diagramSelect.addEventListener('change', () => {
                const diagram = diagramSelect.value;
                if (MathDiagrams[diagram]) MathDiagrams[diagram](diagramContainer);
            });
            MathDiagrams.drawQuadraticGraph(diagramContainer);
        }
        
        // Flashcards
        const flashcardArea = document.getElementById('flashcardArea');
        if (flashcardArea) {
            this.flashcardEngine.loadDeck('ALL', true);
            this.flashcardEngine.renderCard(flashcardArea);
        }
        this.flashcardEngine.updateBoxDisplay();
        
        // Deck selector
        const deckSelect = document.getElementById('deckSelect');
        if (deckSelect) {
            deckSelect.innerHTML = `
                <option value="ALL">All Chapters</option>
                ${this.chapters.map(ch => `<option value="${ch.id}">${ch.icon} ${ch.title}</option>`).join('')}
            `;
            deckSelect.addEventListener('change', () => {
                this.flashcardEngine.loadDeck(deckSelect.value, true);
                this.flashcardEngine.renderCard(flashcardArea);
            });
        }
        
        // Shuffle
        const shuffleBtn = document.getElementById('shuffleBtn');
        if (shuffleBtn) {
            shuffleBtn.addEventListener('click', () => {
                const currentDeck = deckSelect ? deckSelect.value : 'ALL';
                this.flashcardEngine.loadDeck(currentDeck, true);
                this.flashcardEngine.renderCard(flashcardArea);
                showToast('Deck shuffled!', 'success');
            });
        }
        
        // Quiz
        const quizArea = document.getElementById('quizArea');
        const newQuizBtn = document.getElementById('newQuizBtn');
        const submitQuizBtn = document.getElementById('submitQuizBtn');
        const quizScore = document.getElementById('quizScore');
        
        if (newQuizBtn) {
            newQuizBtn.addEventListener('click', () => {
                this.quizEngine.generateQuiz(10, 'ALL');
                this.quizEngine.renderQuiz(quizArea);
                quizScore.textContent = '0/10';
                submitQuizBtn.disabled = false;
            });
            newQuizBtn.click();
        }
        
        if (submitQuizBtn) {
            submitQuizBtn.addEventListener('click', () => {
                const result = this.quizEngine.submit();
                this.quizEngine.showResults(quizArea);
                quizScore.textContent = `${result.correct}/${result.total}`;
                submitQuizBtn.disabled = true;
                showToast(`Score: ${result.percentage}%`, result.percentage >= 70 ? 'success' : 'error');
            });
        }
    }
}

const mathApp = new MathEngine();
document.addEventListener('DOMContentLoaded', () => mathApp.init());
