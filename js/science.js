/* =============================================
   Class 10 Science - JavaScript
   NCERT Complete Content with Interactive Diagrams
   ============================================= */

// ==========================================
// SCIENCE CHAPTERS DATA
// ==========================================

const SCIENCE_CHAPTERS = [
    { id: 'CHR', title: 'Chemical Reactions and Equations', unit: 'Chemistry', icon: '⚗️' },
    { id: 'ABS', title: 'Acids, Bases and Salts', unit: 'Chemistry', icon: '🧪' },
    { id: 'MNM', title: 'Metals and Non-metals', unit: 'Chemistry', icon: '🔩' },
    { id: 'CCO', title: 'Carbon and its Compounds', unit: 'Chemistry', icon: '⬡' },
    { id: 'PCE', title: 'Periodic Classification', unit: 'Chemistry', icon: '📊' },
    { id: 'LFP', title: 'Life Processes', unit: 'Biology', icon: '🫀' },
    { id: 'CNC', title: 'Control and Coordination', unit: 'Biology', icon: '🧠' },
    { id: 'REP', title: 'How do Organisms Reproduce', unit: 'Biology', icon: '🧬' },
    { id: 'HEV', title: 'Heredity and Evolution', unit: 'Biology', icon: '🧬' },
    { id: 'LRR', title: 'Light - Reflection and Refraction', unit: 'Physics', icon: '💡' },
    { id: 'HEY', title: 'Human Eye and Colourful World', unit: 'Physics', icon: '👁️' },
    { id: 'ELC', title: 'Electricity', unit: 'Physics', icon: '⚡' },
    { id: 'MGE', title: 'Magnetic Effects of Electric Current', unit: 'Physics', icon: '🧲' },
    { id: 'SEN', title: 'Sources of Energy', unit: 'Physics', icon: '☀️' },
    { id: 'ENV', title: 'Our Environment', unit: 'Environment', icon: '🌿' },
    { id: 'NRM', title: 'Management of Natural Resources', unit: 'Environment', icon: '♻️' }
];

// ==========================================
// FORMULAS & KEY CONCEPTS
// ==========================================

const SCIENCE_FORMULAS = {
    electricity: [
        { name: "Ohm's Law", formula: "V = I × R", units: "V (Volts), I (Amperes), R (Ohms)" },
        { name: "Power", formula: "P = V × I = I²R = V²/R", units: "P (Watts)" },
        { name: "Resistance (Series)", formula: "R = R₁ + R₂ + R₃", units: "" },
        { name: "Resistance (Parallel)", formula: "1/R = 1/R₁ + 1/R₂ + 1/R₃", units: "" },
        { name: "Electrical Energy", formula: "E = P × t = V × I × t", units: "E (Joules or kWh)" },
        { name: "Heat Produced", formula: "H = I²Rt", units: "H (Joules)" }
    ],
    light: [
        { name: "Mirror Formula", formula: "1/f = 1/v + 1/u", units: "f, v, u in cm" },
        { name: "Magnification (Mirror)", formula: "m = -v/u = h'/h", units: "" },
        { name: "Lens Formula", formula: "1/f = 1/v - 1/u", units: "" },
        { name: "Magnification (Lens)", formula: "m = v/u = h'/h", units: "" },
        { name: "Power of Lens", formula: "P = 1/f (in metres)", units: "P (Dioptres)" },
        { name: "Refractive Index", formula: "n = sin i / sin r = c/v", units: "" }
    ]
};

// ==========================================
// FLASHCARDS
// ==========================================

const SCIENCE_CARDS = [
    // Chemistry - Chemical Reactions
    { id: 'SC01', chapter: 'CHR', front: 'What is a chemical reaction?',
      back: 'A process where substances (reactants) change into new substances (products) with different properties. Signs: color change, gas evolution, precipitate, temperature change.',
      mnemonic: 'CGPT: Color, Gas, Precipitate, Temperature' },
    
    { id: 'SC02', chapter: 'CHR', front: 'What are the types of chemical reactions?',
      back: '1) Combination (A+B→AB) 2) Decomposition (AB→A+B) 3) Displacement (A+BC→AC+B) 4) Double Displacement (AB+CD→AD+CB) 5) Redox (oxidation-reduction)',
      mnemonic: 'CD-DD-R: Combination, Decomposition, Displacement, Double Displacement, Redox' },
    
    { id: 'SC03', chapter: 'CHR', front: 'What is oxidation and reduction?',
      back: 'Oxidation: Gain of oxygen OR Loss of hydrogen OR Loss of electrons. Reduction: Loss of oxygen OR Gain of hydrogen OR Gain of electrons. They always occur together (Redox).',
      mnemonic: 'OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons)' },
    
    // Acids, Bases, Salts
    { id: 'SC04', chapter: 'ABS', front: 'What is pH scale?',
      back: 'Scale from 0-14 measuring acidity/basicity. pH 7 = Neutral. pH < 7 = Acidic. pH > 7 = Basic. Lower pH = more acidic, Higher pH = more basic.',
      mnemonic: 'pH 7 = Water (neutral). Below = Acidic, Above = Basic' },
    
    { id: 'SC05', chapter: 'ABS', front: 'What happens when acid reacts with base?',
      back: 'Neutralization reaction: Acid + Base → Salt + Water. Example: HCl + NaOH → NaCl + H₂O. Heat is released (exothermic).',
      mnemonic: 'A + B = S + W (Acid + Base = Salt + Water)' },
    
    { id: 'SC06', chapter: 'ABS', front: 'Name common acids and their sources',
      back: 'HCl (stomach), H₂SO₄ (car batteries), HNO₃ (fertilizers), CH₃COOH (vinegar), Citric acid (citrus fruits), Lactic acid (curd)',
      mnemonic: 'HCl=tummy, Vinegar=CH₃COOH, Lemon=Citric' },
    
    // Metals and Non-metals
    { id: 'SC07', chapter: 'MNM', front: 'Properties of Metals vs Non-metals',
      back: 'Metals: Lustrous, malleable, ductile, conduct heat/electricity, sonorous. Non-metals: Dull, brittle, non-conductors (except graphite). Metals form cations, non-metals form anions.',
      mnemonic: 'Metals = LMDCS (Lustrous, Malleable, Ductile, Conductor, Sonorous)' },
    
    { id: 'SC08', chapter: 'MNM', front: 'What is reactivity series?',
      back: 'Arrangement of metals by reactivity: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au. More reactive metal displaces less reactive from solution.',
      mnemonic: 'King Nahum Called Me A Zany Fellow. Please Help Call Her Agents' },
    
    // Carbon Compounds
    { id: 'SC09', chapter: 'CCO', front: 'What is a homologous series?',
      back: 'Family of organic compounds with same functional group, similar properties, differ by CH₂. Example: Methane, Ethane, Propane... (Alkanes differ by CH₂)',
      mnemonic: 'Homologous = Same family, differ by CH₂' },
    
    { id: 'SC10', chapter: 'CCO', front: 'Name the first 4 alkanes',
      back: 'Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈), Butane (C₄H₁₀). General formula: CₙH₂ₙ₊₂. All have single bonds (saturated).',
      mnemonic: 'MEPB: Meth(1), Eth(2), Prop(3), But(4)' },
    
    // Life Processes
    { id: 'SC11', chapter: 'LFP', front: 'What are the main life processes?',
      back: 'Nutrition, Respiration, Transportation, Excretion, Growth, Reproduction. These processes maintain life and help organisms survive.',
      mnemonic: 'NRTEGR: Nutrition, Respiration, Transport, Excretion, Growth, Reproduction' },
    
    { id: 'SC12', chapter: 'LFP', front: 'Difference between Arteries and Veins',
      back: 'Arteries: Carry blood away from heart, thick walls, no valves (except aorta), oxygenated blood (except pulmonary). Veins: Carry to heart, thin walls, have valves, deoxygenated.',
      mnemonic: 'Arteries = Away from heart, thick. Veins = to heart, Valves' },
    
    { id: 'SC13', chapter: 'LFP', front: 'What is photosynthesis equation?',
      back: '6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂. Occurs in chloroplasts. Light-dependent (in thylakoids) and light-independent (in stroma) reactions.',
      mnemonic: 'CO2 + Water + Light = Sugar + O2 (Plants make food)' },
    
    // Control and Coordination
    { id: 'SC14', chapter: 'CNC', front: 'Parts of a neuron',
      back: 'Dendrite (receives signals), Cell body (nucleus), Axon (transmits signals), Axon terminal (releases neurotransmitters). Synapse = gap between neurons.',
      mnemonic: 'D-C-A-T: Dendrite receives, Cell body processes, Axon transmits, Terminal releases' },
    
    { id: 'SC15', chapter: 'CNC', front: 'Difference between reflex and voluntary action',
      back: 'Reflex: Automatic, fast, through spinal cord, not controlled by brain (e.g., pulling hand from hot object). Voluntary: Conscious, controlled by brain (e.g., writing).',
      mnemonic: 'Reflex = Rapid + Spinal, Voluntary = Via brain' },
    
    // Light
    { id: 'SC16', chapter: 'LRR', front: 'Laws of Reflection',
      back: '1) Angle of incidence = Angle of reflection (∠i = ∠r). 2) Incident ray, reflected ray, and normal all lie in the same plane.',
      mnemonic: 'i = r, same plane' },
    
    { id: 'SC17', chapter: 'LRR', front: 'Convex vs Concave Mirror',
      back: 'Concave: Converging, cave inward, used in torches/headlights. Convex: Diverging, bulge outward, used in rearview mirrors (wider field).',
      mnemonic: 'Concave = Cave in = Converges. Convex = bulge out = diverges' },
    
    { id: 'SC18', chapter: 'LRR', front: 'Mirror formula and sign convention',
      back: '1/f = 1/v + 1/u. All distances from pole. Distances in direction of light = +ve. Against light = -ve. For concave: f is -ve. For convex: f is +ve.',
      mnemonic: 'Focus, image, object: 1/f = 1/v + 1/u' },
    
    // Electricity
    { id: 'SC19', chapter: 'ELC', front: "State Ohm's Law",
      back: 'At constant temperature, current through conductor is directly proportional to potential difference. V = IR. Resistance R = V/I (in Ohms, Ω).',
      mnemonic: 'V = IR (Voltage = Current × Resistance)' },
    
    { id: 'SC20', chapter: 'ELC', front: 'Series vs Parallel circuit',
      back: 'Series: Same current, voltage divides, R = R₁+R₂, if one breaks all stop. Parallel: Same voltage, current divides, 1/R = 1/R₁+1/R₂, independent paths.',
      mnemonic: 'Series = Same I, add R. Parallel = Same V, add 1/R' },
    
    { id: 'SC21', chapter: 'ELC', front: 'What is electric power?',
      back: 'Rate of doing work. P = VI = I²R = V²/R. Unit: Watt (W). 1 kWh = 1 unit of electricity. P = Work/Time.',
      mnemonic: 'P = VI = I²R = V²/R. 1000W for 1 hour = 1 unit' },
    
    // Magnetic Effects
    { id: 'SC22', chapter: 'MGE', front: 'What is electromagnetic induction?',
      back: 'Production of electric current by changing magnetic field. Discovered by Faraday. Basis of generators and transformers.',
      mnemonic: 'Moving magnet near coil = Current induced (Faraday)' },
    
    { id: 'SC23', chapter: 'MGE', front: 'Right hand thumb rule',
      back: 'If thumb points in direction of current, curled fingers show direction of magnetic field lines around the conductor.',
      mnemonic: 'Thumb = Current, Fingers = Magnetic field' },
    
    // Heredity
    { id: 'SC24', chapter: 'HEV', front: "What are Mendel's Laws?",
      back: '1) Law of Dominance: One allele dominates. 2) Law of Segregation: Alleles separate during gamete formation. 3) Law of Independent Assortment: Genes for different traits separate independently.',
      mnemonic: 'DSI: Dominance, Segregation, Independent Assortment' },
    
    { id: 'SC25', chapter: 'HEV', front: 'What is a monohybrid cross ratio?',
      back: 'Cross between organisms differing in one trait. F2 ratio: 3:1 (phenotype), 1:2:1 (genotype). Example: Tall × Dwarf pea plants.',
      mnemonic: 'Mono = 1 trait. F2 = 3:1 (TT:Tt:tt = 1:2:1)' }
];

// ==========================================
// QUIZ QUESTIONS
// ==========================================

const SCIENCE_QUIZ = [
    // Chemistry
    { chapter: 'CHR', question: 'Which gas is evolved when dilute HCl reacts with zinc?',
      options: ['Oxygen', 'Hydrogen', 'Chlorine', 'Carbon dioxide'], correct: 1 },
    
    { chapter: 'CHR', question: 'Rancidity can be prevented by:',
      options: ['Adding water', 'Adding antioxidants', 'Heating', 'Adding acids'], correct: 1 },
    
    { chapter: 'ABS', question: 'The pH of gastric juice is:',
      options: ['7', '14', '1.2', '8.5'], correct: 2 },
    
    { chapter: 'ABS', question: 'Plaster of Paris is:',
      options: ['CaSO₄', 'CaSO₄.½H₂O', 'CaSO₄.2H₂O', 'Ca(OH)₂'], correct: 1 },
    
    { chapter: 'MNM', question: 'Which metal is stored in kerosene?',
      options: ['Copper', 'Iron', 'Sodium', 'Aluminium'], correct: 2 },
    
    { chapter: 'MNM', question: 'An alloy of copper and zinc is:',
      options: ['Bronze', 'Brass', 'Solder', 'Steel'], correct: 1 },
    
    { chapter: 'CCO', question: 'Ethanoic acid is commonly known as:',
      options: ['Formic acid', 'Acetic acid', 'Citric acid', 'Lactic acid'], correct: 1 },
    
    { chapter: 'CCO', question: 'The functional group in alcohols is:',
      options: ['-CHO', '-COOH', '-OH', '-CO-'], correct: 2 },
    
    // Biology
    { chapter: 'LFP', question: 'The site of photosynthesis in a cell is:',
      options: ['Mitochondria', 'Chloroplast', 'Ribosome', 'Nucleus'], correct: 1 },
    
    { chapter: 'LFP', question: 'Pepsin is secreted by:',
      options: ['Liver', 'Pancreas', 'Stomach', 'Small intestine'], correct: 2 },
    
    { chapter: 'CNC', question: 'The gap between two neurons is called:',
      options: ['Dendrite', 'Synapse', 'Axon', 'Impulse'], correct: 1 },
    
    { chapter: 'CNC', question: 'Iodine deficiency causes:',
      options: ['Diabetes', 'Goitre', 'Dwarfism', 'Rickets'], correct: 1 },
    
    { chapter: 'HEV', question: 'The F2 phenotypic ratio in a monohybrid cross is:',
      options: ['1:1', '1:2:1', '3:1', '9:3:3:1'], correct: 2 },
    
    { chapter: 'HEV', question: 'The sex of a child is determined by:',
      options: ['Mother', 'Father', 'Both equally', 'Environment'], correct: 1 },
    
    // Physics
    { chapter: 'LRR', question: 'Image formed by a plane mirror is:',
      options: ['Real and inverted', 'Virtual and erect', 'Real and erect', 'Virtual and inverted'], correct: 1 },
    
    { chapter: 'LRR', question: 'Power of a lens is measured in:',
      options: ['Metres', 'Centimetres', 'Dioptres', 'Watts'], correct: 2 },
    
    { chapter: 'HEY', question: 'The defect of eye in which near objects are not seen clearly is:',
      options: ['Myopia', 'Hypermetropia', 'Presbyopia', 'Cataract'], correct: 1 },
    
    { chapter: 'ELC', question: 'Unit of electric current is:',
      options: ['Volt', 'Ohm', 'Ampere', 'Watt'], correct: 2 },
    
    { chapter: 'ELC', question: 'If resistance is doubled, current becomes:',
      options: ['Double', 'Half', 'Same', 'Zero'], correct: 1 },
    
    { chapter: 'ELC', question: '1 kWh equals:',
      options: ['1000 J', '3600 J', '3.6 × 10⁶ J', '1000 W'], correct: 2 },
    
    { chapter: 'MGE', question: 'The device that converts mechanical energy to electrical energy is:',
      options: ['Motor', 'Generator', 'Transformer', 'Galvanometer'], correct: 1 },
    
    { chapter: 'MGE', question: 'Electromagnetic induction was discovered by:',
      options: ['Newton', 'Faraday', 'Ohm', 'Ampere'], correct: 1 }
];

// ==========================================
// DIAGRAM GENERATORS (SVG)
// ==========================================

const ScienceDiagrams = {
    // Electric Circuit Diagram
    drawCircuit(container) {
        container.innerHTML = `
            <svg viewBox="0 0 400 300" class="diagram-svg">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
                    </marker>
                </defs>
                
                <!-- Battery -->
                <line x1="50" y1="100" x2="50" y2="200" stroke="#f59e0b" stroke-width="3"/>
                <line x1="40" y1="120" x2="60" y2="120" stroke="#f59e0b" stroke-width="4"/>
                <line x1="35" y1="140" x2="65" y2="140" stroke="#f59e0b" stroke-width="2"/>
                <line x1="40" y1="160" x2="60" y2="160" stroke="#f59e0b" stroke-width="4"/>
                <line x1="35" y1="180" x2="65" y2="180" stroke="#f59e0b" stroke-width="2"/>
                <text x="50" y="220" text-anchor="middle" fill="#f59e0b" font-size="12">Battery</text>
                <text x="70" y="130" fill="#22c55e" font-size="10">+</text>
                <text x="70" y="170" fill="#ef4444" font-size="10">−</text>
                
                <!-- Wires -->
                <line x1="50" y1="100" x2="200" y2="100" stroke="#94a3b8" stroke-width="2"/>
                <line x1="200" y1="100" x2="350" y2="100" stroke="#94a3b8" stroke-width="2"/>
                <line x1="350" y1="100" x2="350" y2="200" stroke="#94a3b8" stroke-width="2"/>
                <line x1="350" y1="200" x2="200" y2="200" stroke="#94a3b8" stroke-width="2"/>
                <line x1="200" y1="200" x2="50" y2="200" stroke="#94a3b8" stroke-width="2"/>
                
                <!-- Resistor -->
                <path d="M 160 100 L 170 90 L 180 110 L 190 90 L 200 110 L 210 90 L 220 110 L 230 90 L 240 100" 
                      stroke="#8b5cf6" stroke-width="2" fill="none"/>
                <text x="200" y="80" text-anchor="middle" fill="#8b5cf6" font-size="12">Resistor (R)</text>
                
                <!-- Ammeter -->
                <circle cx="200" cy="200" r="20" stroke="#3b82f6" stroke-width="2" fill="none"/>
                <text x="200" y="205" text-anchor="middle" fill="#3b82f6" font-size="14" font-weight="bold">A</text>
                <text x="200" y="240" text-anchor="middle" fill="#3b82f6" font-size="12">Ammeter</text>
                
                <!-- Bulb -->
                <circle cx="350" cy="150" r="15" stroke="#fbbf24" stroke-width="2" fill="rgba(251,191,36,0.2)"/>
                <path d="M 340 145 Q 350 135 360 145" stroke="#fbbf24" stroke-width="2" fill="none"/>
                <path d="M 342 155 Q 350 165 358 155" stroke="#fbbf24" stroke-width="2" fill="none"/>
                <text x="350" y="185" text-anchor="middle" fill="#fbbf24" font-size="12">Bulb</text>
                
                <!-- Current direction -->
                <path d="M 100 95 L 130 95" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="115" y="88" fill="#3b82f6" font-size="10">I (current)</text>
                
                <!-- Labels -->
                <text x="200" y="270" text-anchor="middle" fill="#f1f5f9" font-size="14">Simple Electric Circuit</text>
            </svg>
        `;
    },

    // Human Eye Diagram
    drawEye(container) {
        container.innerHTML = `
            <svg viewBox="0 0 450 300" class="diagram-svg">
                <!-- Eyeball outline -->
                <ellipse cx="200" cy="150" rx="120" ry="100" stroke="#64748b" stroke-width="2" fill="rgba(100,116,139,0.1)"/>
                
                <!-- Cornea -->
                <path d="M 80 100 Q 50 150 80 200" stroke="#06b6d4" stroke-width="3" fill="none"/>
                <text x="35" y="155" fill="#06b6d4" font-size="11">Cornea</text>
                
                <!-- Pupil -->
                <circle cx="100" cy="150" r="15" fill="#0f172a"/>
                <text x="100" y="180" text-anchor="middle" fill="#f1f5f9" font-size="10">Pupil</text>
                
                <!-- Iris -->
                <circle cx="100" cy="150" r="25" stroke="#8b5cf6" stroke-width="4" fill="none"/>
                <text x="100" y="120" text-anchor="middle" fill="#8b5cf6" font-size="10">Iris</text>
                
                <!-- Lens -->
                <ellipse cx="130" cy="150" rx="15" ry="35" stroke="#3b82f6" stroke-width="2" fill="rgba(59,130,246,0.2)"/>
                <text x="130" y="200" text-anchor="middle" fill="#3b82f6" font-size="10">Lens</text>
                
                <!-- Retina -->
                <path d="M 280 70 Q 320 150 280 230" stroke="#22c55e" stroke-width="3" fill="none"/>
                <text x="300" y="155" fill="#22c55e" font-size="11">Retina</text>
                
                <!-- Optic Nerve -->
                <line x1="320" y1="150" x2="380" y2="150" stroke="#f59e0b" stroke-width="4"/>
                <text x="350" y="140" fill="#f59e0b" font-size="11">Optic</text>
                <text x="350" y="165" fill="#f59e0b" font-size="11">Nerve</text>
                
                <!-- Vitreous humor -->
                <text x="200" y="155" text-anchor="middle" fill="#94a3b8" font-size="10">Vitreous Humor</text>
                
                <!-- Light rays -->
                <line x1="10" y1="130" x2="80" y2="150" stroke="#fbbf24" stroke-width="1" stroke-dasharray="5,3"/>
                <line x1="10" y1="170" x2="80" y2="150" stroke="#fbbf24" stroke-width="1" stroke-dasharray="5,3"/>
                <text x="20" y="120" fill="#fbbf24" font-size="10">Light</text>
                
                <!-- Title -->
                <text x="200" y="280" text-anchor="middle" fill="#f1f5f9" font-size="14">Structure of Human Eye</text>
            </svg>
        `;
    },

    // Refraction through glass slab
    drawRefraction(container) {
        container.innerHTML = `
            <svg viewBox="0 0 400 300" class="diagram-svg">
                <!-- Glass slab -->
                <rect x="100" y="80" width="200" height="140" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
                <text x="200" y="155" text-anchor="middle" fill="#3b82f6" font-size="12">Glass Slab</text>
                
                <!-- Incident ray -->
                <line x1="50" y1="30" x2="150" y2="80" stroke="#fbbf24" stroke-width="2"/>
                <text x="70" y="45" fill="#fbbf24" font-size="11">Incident Ray</text>
                
                <!-- Refracted ray inside glass -->
                <line x1="150" y1="80" x2="250" y2="220" stroke="#22c55e" stroke-width="2"/>
                
                <!-- Emergent ray -->
                <line x1="250" y1="220" x2="350" y2="270" stroke="#ef4444" stroke-width="2"/>
                <text x="320" y="255" fill="#ef4444" font-size="11">Emergent Ray</text>
                
                <!-- Normal lines -->
                <line x1="150" y1="40" x2="150" y2="120" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,2"/>
                <line x1="250" y1="180" x2="250" y2="260" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,2"/>
                <text x="160" y="55" fill="#94a3b8" font-size="10">Normal</text>
                
                <!-- Angles -->
                <path d="M 140 65 A 15 15 0 0 1 150 55" stroke="#fbbf24" stroke-width="1" fill="none"/>
                <text x="125" y="60" fill="#fbbf24" font-size="10">i</text>
                
                <path d="M 150 95 A 15 15 0 0 0 160 85" stroke="#22c55e" stroke-width="1" fill="none"/>
                <text x="165" y="100" fill="#22c55e" font-size="10">r</text>
                
                <!-- Lateral displacement -->
                <line x1="150" y1="80" x2="200" y2="180" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
                
                <!-- Labels -->
                <text x="80" y="90" fill="#64748b" font-size="10">Air</text>
                <text x="80" y="230" fill="#64748b" font-size="10">Air</text>
                
                <text x="200" y="290" text-anchor="middle" fill="#f1f5f9" font-size="14">Refraction through Glass Slab</text>
            </svg>
        `;
    },

    // Neuron Structure
    drawNeuron(container) {
        container.innerHTML = `
            <svg viewBox="0 0 500 250" class="diagram-svg">
                <!-- Dendrites -->
                <path d="M 50 80 Q 70 60 90 80" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                <path d="M 50 100 Q 70 80 90 100" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                <path d="M 50 120 Q 70 140 90 120" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                <path d="M 50 140 Q 70 160 90 140" stroke="#8b5cf6" stroke-width="2" fill="none"/>
                <text x="30" y="115" fill="#8b5cf6" font-size="10">Dendrites</text>
                
                <!-- Cell body -->
                <ellipse cx="130" cy="110" rx="40" ry="50" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" stroke-width="2"/>
                <circle cx="130" cy="100" r="15" fill="rgba(34,197,94,0.4)" stroke="#22c55e" stroke-width="1"/>
                <text x="130" y="145" text-anchor="middle" fill="#3b82f6" font-size="10">Cell Body</text>
                <text x="130" y="105" text-anchor="middle" fill="#22c55e" font-size="8">Nucleus</text>
                
                <!-- Axon -->
                <line x1="170" y1="110" x2="380" y2="110" stroke="#f59e0b" stroke-width="3"/>
                <text x="275" y="100" text-anchor="middle" fill="#f59e0b" font-size="11">Axon</text>
                
                <!-- Myelin sheath segments -->
                <ellipse cx="210" cy="110" rx="15" ry="20" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="1"/>
                <ellipse cx="260" cy="110" rx="15" ry="20" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="1"/>
                <ellipse cx="310" cy="110" rx="15" ry="20" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="1"/>
                <ellipse cx="360" cy="110" rx="15" ry="20" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="1"/>
                <text x="285" y="145" text-anchor="middle" fill="#fbbf24" font-size="9">Myelin Sheath</text>
                
                <!-- Axon terminals -->
                <circle cx="400" cy="90" r="8" fill="#ef4444"/>
                <circle cx="410" cy="110" r="8" fill="#ef4444"/>
                <circle cx="400" cy="130" r="8" fill="#ef4444"/>
                <text x="430" y="115" fill="#ef4444" font-size="10">Axon</text>
                <text x="430" y="128" fill="#ef4444" font-size="10">Terminals</text>
                
                <!-- Signal direction -->
                <path d="M 90 170 L 380 170" stroke="#06b6d4" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="235" y="190" text-anchor="middle" fill="#06b6d4" font-size="10">Direction of Nerve Impulse →</text>
                
                <text x="250" y="230" text-anchor="middle" fill="#f1f5f9" font-size="14">Structure of a Neuron</text>
            </svg>
        `;
    },

    // Heart Diagram
    drawHeart(container) {
        container.innerHTML = `
            <svg viewBox="0 0 400 350" class="diagram-svg">
                <!-- Heart outline -->
                <path d="M 200 280 Q 80 200 100 120 Q 120 60 200 100 Q 280 60 300 120 Q 320 200 200 280" 
                      fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="3"/>
                
                <!-- Septum -->
                <line x1="200" y1="100" x2="200" y2="250" stroke="#94a3b8" stroke-width="2"/>
                
                <!-- Chambers -->
                <text x="130" y="130" text-anchor="middle" fill="#3b82f6" font-size="11">Right</text>
                <text x="130" y="145" text-anchor="middle" fill="#3b82f6" font-size="11">Atrium</text>
                
                <text x="270" y="130" text-anchor="middle" fill="#ef4444" font-size="11">Left</text>
                <text x="270" y="145" text-anchor="middle" fill="#ef4444" font-size="11">Atrium</text>
                
                <text x="130" y="200" text-anchor="middle" fill="#3b82f6" font-size="11">Right</text>
                <text x="130" y="215" text-anchor="middle" fill="#3b82f6" font-size="11">Ventricle</text>
                
                <text x="270" y="200" text-anchor="middle" fill="#ef4444" font-size="11">Left</text>
                <text x="270" y="215" text-anchor="middle" fill="#ef4444" font-size="11">Ventricle</text>
                
                <!-- Blood vessels -->
                <path d="M 100 100 Q 80 60 100 30" stroke="#3b82f6" stroke-width="4" fill="none"/>
                <text x="60" y="50" fill="#3b82f6" font-size="10">Vena Cava</text>
                
                <path d="M 150 90 Q 150 50 120 30" stroke="#3b82f6" stroke-width="4" fill="none"/>
                <text x="160" y="40" fill="#8b5cf6" font-size="10">Pulmonary</text>
                <text x="160" y="52" fill="#8b5cf6" font-size="10">Artery</text>
                
                <path d="M 250 90 Q 250 50 280 30" stroke="#ef4444" stroke-width="4" fill="none"/>
                <text x="255" y="40" fill="#ec4899" font-size="10">Pulmonary</text>
                <text x="255" y="52" fill="#ec4899" font-size="10">Vein</text>
                
                <path d="M 300 100 Q 320 60 300 30" stroke="#ef4444" stroke-width="4" fill="none"/>
                <text x="320" y="50" fill="#ef4444" font-size="10">Aorta</text>
                
                <!-- Legend -->
                <rect x="30" y="290" width="15" height="15" fill="#3b82f6"/>
                <text x="50" y="302" fill="#f1f5f9" font-size="10">Deoxygenated Blood</text>
                
                <rect x="200" y="290" width="15" height="15" fill="#ef4444"/>
                <text x="220" y="302" fill="#f1f5f9" font-size="10">Oxygenated Blood</text>
                
                <text x="200" y="335" text-anchor="middle" fill="#f1f5f9" font-size="14">Human Heart - Blood Flow</text>
            </svg>
        `;
    }
};

// ==========================================
// SCIENCE ENGINE CLASS
// ==========================================

class ScienceEngine {
    constructor() {
        this.chapters = SCIENCE_CHAPTERS;
        this.cards = SCIENCE_CARDS;
        this.quizQuestions = SCIENCE_QUIZ;
        this.formulas = SCIENCE_FORMULAS;
        
        this.flashcardEngine = new FlashcardEngine('science', this.cards);
        this.quizEngine = new QuizEngine('science', this.quizQuestions);
    }

    // Render formulas section
    renderFormulas(container, category = 'electricity') {
        const formulas = this.formulas[category] || [];
        container.innerHTML = `
            <div class="grid grid-2" style="gap:12px">
                ${formulas.map(f => `
                    <div class="formula-box">
                        <div class="formula-title">${f.name}</div>
                        <div style="font-size:1.4rem; margin:8px 0">${f.formula}</div>
                        ${f.units ? `<div style="font-size:0.85rem; color:var(--text-muted)">${f.units}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Render chapters
    renderChapters(container) {
        const byUnit = {};
        this.chapters.forEach(ch => {
            byUnit[ch.unit] = byUnit[ch.unit] || [];
            byUnit[ch.unit].push(ch);
        });

        container.innerHTML = Object.entries(byUnit).map(([unit, chapters]) => `
            <div class="card mb-2">
                <h3>${unit}</h3>
                ${chapters.map(ch => `
                    <div class="accordion" data-chapter="${ch.id}">
                        <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
                            <span class="accordion-title">${ch.icon} ${ch.title}</span>
                            <span class="accordion-icon">▼</span>
                        </div>
                        <div class="accordion-content">
                            <p class="text-muted">Key concepts and flashcards from this chapter.</p>
                            <button class="btn btn-science mt-2" onclick="scienceApp.studyChapter('${ch.id}')">
                                Study This Chapter →
                            </button>
                        </div>
                    </div>
                `).join('')}
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
            this.renderFormulas(formulaContainer, 'electricity');
        }
        
        // Diagrams
        const diagramContainer = document.getElementById('diagramArea');
        const diagramSelect = document.getElementById('diagramSelect');
        if (diagramContainer && diagramSelect) {
            diagramSelect.addEventListener('change', () => {
                const diagram = diagramSelect.value;
                if (ScienceDiagrams[diagram]) ScienceDiagrams[diagram](diagramContainer);
            });
            ScienceDiagrams.drawCircuit(diagramContainer);
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
                showToast(`Quiz complete! Score: ${result.percentage}%`, result.percentage >= 70 ? 'success' : 'error');
            });
        }
    }
}

const scienceApp = new ScienceEngine();
document.addEventListener('DOMContentLoaded', () => scienceApp.init());
