/* =============================================
   Class 10 SST (Social Science) - JavaScript
   NCERT Complete Content with Visual Learning
   ============================================= */

// ==========================================
// SST CHAPTERS DATA
// ==========================================

const SST_CHAPTERS = [
    // HISTORY
    { id: 'EU', title: 'The Rise of Nationalism in Europe', subject: 'History', icon: '🏰' },
    { id: 'IN', title: 'Nationalism in India', subject: 'History', icon: '🇮🇳' },
    { id: 'GW', title: 'The Making of a Global World', subject: 'History', icon: '🌍' },
    { id: 'AI', title: 'The Age of Industrialisation', subject: 'History', icon: '🏭' },
    { id: 'PC', title: 'Print Culture and the Modern World', subject: 'History', icon: '📰' },
    
    // GEOGRAPHY
    { id: 'RD', title: 'Resources and Development', subject: 'Geography', icon: '🗺️' },
    { id: 'FR', title: 'Forest and Wildlife Resources', subject: 'Geography', icon: '🌲' },
    { id: 'WR', title: 'Water Resources', subject: 'Geography', icon: '💧' },
    { id: 'AG', title: 'Agriculture', subject: 'Geography', icon: '🌾' },
    { id: 'MI', title: 'Minerals and Energy Resources', subject: 'Geography', icon: '⛏️' },
    { id: 'MN', title: 'Manufacturing Industries', subject: 'Geography', icon: '🏗️' },
    { id: 'LT', title: 'Lifelines of National Economy', subject: 'Geography', icon: '🚂' },
    
    // CIVICS
    { id: 'PS', title: 'Power Sharing', subject: 'Civics', icon: '⚖️' },
    { id: 'FD', title: 'Federalism', subject: 'Civics', icon: '🏛️' },
    { id: 'DM', title: 'Democracy and Diversity', subject: 'Civics', icon: '🤝' },
    { id: 'GR', title: 'Gender, Religion and Caste', subject: 'Civics', icon: '👥' },
    { id: 'PP', title: 'Political Parties', subject: 'Civics', icon: '🗳️' },
    { id: 'OD', title: 'Outcomes of Democracy', subject: 'Civics', icon: '📊' },
    
    // ECONOMICS
    { id: 'DV', title: 'Development', subject: 'Economics', icon: '📈' },
    { id: 'SE', title: 'Sectors of Indian Economy', subject: 'Economics', icon: '💼' },
    { id: 'MC', title: 'Money and Credit', subject: 'Economics', icon: '💰' },
    { id: 'GL', title: 'Globalisation and Indian Economy', subject: 'Economics', icon: '🌐' },
    { id: 'CR', title: 'Consumer Rights', subject: 'Economics', icon: '🛡️' }
];

// ==========================================
// TIMELINE EVENTS (History)
// ==========================================

const SST_EVENTS = [
    // Rise of Nationalism in Europe
    { id: 'EU1789', chapter: 'EU', year: '1789', anchor: true, title: 'French Revolution', 
      detail: 'Ideas of liberty, equality, fraternity spread. Citizens replace subjects. Beginning of modern nationalism.',
      people: ['French revolutionaries', 'Napoleon'], places: ['France'], tags: ['revolution', 'nationalism'] },
    
    { id: 'EU1804', chapter: 'EU', year: '1804', anchor: false, title: 'Napoleonic Code',
      detail: 'Legal reforms: equality before law, end of birth-based privileges, right to property.',
      people: ['Napoleon Bonaparte'], places: ['France', 'Europe'], tags: ['law', 'reforms'] },
    
    { id: 'EU1815', chapter: 'EU', year: '1815', anchor: true, title: 'Congress of Vienna',
      detail: 'Conservative forces restore monarchies after Napoleon\'s defeat. Redraw map of Europe.',
      people: ['Metternich', 'Duke of Wellington'], places: ['Vienna'], tags: ['politics', 'conservative'] },
    
    { id: 'EU1821', chapter: 'EU', year: '1821', anchor: false, title: 'Greek War of Independence',
      detail: 'Greeks fight for independence from Ottoman Empire. Supported by Western Europeans.',
      people: ['Greek nationalists'], places: ['Greece'], tags: ['independence', 'nationalism'] },
    
    { id: 'EU1830', chapter: 'EU', year: '1830', anchor: true, title: 'July Revolution (France)',
      detail: 'Bourbon kings overthrown. Belgium becomes independent. Liberal nationalism grows.',
      people: ['Revolutionaries'], places: ['France', 'Belgium'], tags: ['revolution'] },
    
    { id: 'EU1848', chapter: 'EU', year: '1848', anchor: true, title: 'Revolutions of 1848',
      detail: 'Liberal nationalists demand constitutions across Europe. Frankfurt Parliament attempts German unification.',
      people: ['Liberal nationalists'], places: ['Germany', 'Italy', 'France'], tags: ['revolution', 'liberalism'] },
    
    { id: 'EU1859', chapter: 'EU', year: '1859-1861', anchor: true, title: 'Unification of Italy',
      detail: 'Cavour\'s diplomacy + Garibaldi\'s military campaigns unite Italian states under Victor Emmanuel II.',
      people: ['Cavour', 'Garibaldi', 'Victor Emmanuel II', 'Mazzini'], places: ['Italy', 'Sardinia-Piedmont'], tags: ['unification'] },
    
    { id: 'EU1866', chapter: 'EU', year: '1866-1871', anchor: true, title: 'Unification of Germany',
      detail: 'Prussia under Bismarck defeats Austria & France. German Empire proclaimed at Versailles.',
      people: ['Otto von Bismarck', 'Kaiser William I'], places: ['Germany', 'Versailles'], tags: ['unification', 'war'] },
    
    // Nationalism in India
    { id: 'IN1857', chapter: 'IN', year: '1857', anchor: true, title: 'First War of Independence',
      detail: 'Sepoy mutiny becomes widespread revolt. Though crushed, seeds of nationalism planted.',
      people: ['Mangal Pandey', 'Rani Lakshmibai', 'Bahadur Shah Zafar'], places: ['Meerut', 'Delhi', 'Lucknow'], tags: ['revolt'] },
    
    { id: 'IN1885', chapter: 'IN', year: '1885', anchor: true, title: 'Indian National Congress Founded',
      detail: 'First all-India political organization. Moderate phase begins.',
      people: ['A.O. Hume', 'W.C. Bonnerjee'], places: ['Bombay'], tags: ['politics', 'congress'] },
    
    { id: 'IN1905', chapter: 'IN', year: '1905', anchor: true, title: 'Partition of Bengal & Swadeshi Movement',
      detail: 'Curzon partitions Bengal. Triggers mass movement for swadeshi and boycott of British goods.',
      people: ['Lord Curzon', 'Bal Gangadhar Tilak'], places: ['Bengal'], tags: ['movement', 'swadeshi'] },
    
    { id: 'IN1915', chapter: 'IN', year: '1915', anchor: true, title: 'Gandhi Returns to India',
      detail: 'M.K. Gandhi returns from South Africa with Satyagraha methods. New phase of nationalism.',
      people: ['M.K. Gandhi'], places: ['India'], tags: ['gandhi', 'satyagraha'] },
    
    { id: 'IN1917', chapter: 'IN', year: '1917', anchor: true, title: 'Champaran Satyagraha',
      detail: 'Gandhi\'s first civil disobedience in India. Helps indigo farmers against British planters.',
      people: ['M.K. Gandhi'], places: ['Champaran, Bihar'], tags: ['satyagraha', 'peasant'] },
    
    { id: 'IN1919a', chapter: 'IN', year: '1919', anchor: true, title: 'Rowlatt Act',
      detail: 'British pass repressive laws. Allows detention without trial. Nationwide protests begin.',
      people: ['British Government'], places: ['India'], tags: ['repression'] },
    
    { id: 'IN1919b', chapter: 'IN', year: '1919', anchor: true, title: 'Jallianwala Bagh Massacre',
      detail: 'General Dyer orders firing on peaceful gathering. 1000+ killed. Turning point in freedom struggle.',
      people: ['General Dyer', 'Rabindranath Tagore (returned knighthood)'], places: ['Amritsar'], tags: ['massacre', 'british atrocity'] },
    
    { id: 'IN1920', chapter: 'IN', year: '1920', anchor: true, title: 'Non-Cooperation Movement',
      detail: 'Gandhi launches mass movement. Boycott of British institutions, courts, schools. Linked with Khilafat.',
      people: ['M.K. Gandhi', 'Ali Brothers (Shaukat & Mohammad)'], places: ['Pan-India'], tags: ['movement', 'boycott'] },
    
    { id: 'IN1922', chapter: 'IN', year: '1922', anchor: true, title: 'Chauri Chaura Incident',
      detail: 'Mob violence kills policemen. Gandhi withdraws Non-Cooperation Movement.',
      people: ['M.K. Gandhi'], places: ['Chauri Chaura, UP'], tags: ['violence', 'withdrawal'] },
    
    { id: 'IN1929', chapter: 'IN', year: '1929', anchor: true, title: 'Lahore Congress - Purna Swaraj',
      detail: 'Congress demands complete independence. January 26 declared Independence Day.',
      people: ['Jawaharlal Nehru'], places: ['Lahore'], tags: ['purna swaraj', 'congress'] },
    
    { id: 'IN1930', chapter: 'IN', year: '1930', anchor: true, title: 'Dandi March & Civil Disobedience',
      detail: 'Gandhi walks 240 miles to Dandi to make salt. Breaks salt law. Mass civil disobedience begins.',
      people: ['M.K. Gandhi'], places: ['Dandi, Gujarat'], tags: ['salt march', 'civil disobedience'] },
    
    { id: 'IN1931', chapter: 'IN', year: '1931', anchor: false, title: 'Gandhi-Irwin Pact',
      detail: 'Civil Disobedience suspended. Gandhi attends Round Table Conference.',
      people: ['M.K. Gandhi', 'Lord Irwin'], places: ['Delhi', 'London'], tags: ['pact', 'negotiation'] },
    
    { id: 'IN1932', chapter: 'IN', year: '1932', anchor: true, title: 'Poona Pact',
      detail: 'Agreement between Gandhi and Ambedkar on representation of depressed classes.',
      people: ['M.K. Gandhi', 'B.R. Ambedkar'], places: ['Poona'], tags: ['dalit', 'representation'] },
    
    { id: 'IN1942', chapter: 'IN', year: '1942', anchor: true, title: 'Quit India Movement',
      detail: '"Do or Die" call by Gandhi. Mass uprising against British. Leaders arrested.',
      people: ['M.K. Gandhi', 'All Congress leaders'], places: ['Bombay', 'Pan-India'], tags: ['quit india', 'final push'] },
    
    { id: 'IN1947', chapter: 'IN', year: '1947', anchor: true, title: 'Independence',
      detail: 'India becomes independent on August 15. Partition creates India and Pakistan.',
      people: ['Nehru', 'Gandhi', 'Mountbatten'], places: ['Delhi'], tags: ['independence', 'partition'] },
    
    // Global World
    { id: 'GW1492', chapter: 'GW', year: '1492', anchor: false, title: 'Columbus Reaches Americas',
      detail: 'European expansion begins. Trade routes transform. New crops spread globally.',
      people: ['Christopher Columbus'], places: ['Americas', 'Europe'], tags: ['discovery', 'trade'] },
    
    { id: 'GW1600s', chapter: 'GW', year: '1600s', anchor: false, title: 'Atlantic Slave Trade',
      detail: 'Millions of Africans transported to Americas. Triangle trade between Europe, Africa, Americas.',
      people: ['European traders'], places: ['Africa', 'Americas', 'Caribbean'], tags: ['slavery', 'trade'] },
    
    { id: 'GW1830s', chapter: 'GW', year: '1830s', anchor: true, title: 'Indentured Labour Migration',
      detail: 'After slavery abolished, workers recruited from India to work on plantations worldwide.',
      people: ['Indian labourers'], places: ['Caribbean', 'Fiji', 'Mauritius', 'South Africa'], tags: ['migration', 'labour'] },
    
    { id: 'GW1885a', chapter: 'GW', year: '1885', anchor: false, title: 'Scramble for Africa',
      detail: 'European powers divide Africa at Berlin Conference. Colonialism intensifies.',
      people: ['European powers'], places: ['Africa'], tags: ['colonialism', 'partition'] },
    
    { id: 'GW1914', chapter: 'GW', year: '1914-1918', anchor: true, title: 'World War I',
      detail: 'First global industrial war. Disrupts trade. Colonial economies suffer. Mass deaths.',
      people: ['Allied & Central Powers'], places: ['Europe', 'World'], tags: ['war', 'economy'] },
    
    { id: 'GW1929', chapter: 'GW', year: '1929', anchor: true, title: 'Great Depression',
      detail: 'US stock market crash. Global demand collapses. Farmers and workers devastated worldwide.',
      people: ['Global population'], places: ['USA', 'World'], tags: ['depression', 'economy'] },
    
    { id: 'GW1944', chapter: 'GW', year: '1944', anchor: true, title: 'Bretton Woods Conference',
      detail: 'Creates IMF and World Bank. US dollar becomes world currency. New global economic order.',
      people: ['Allied powers'], places: ['Bretton Woods, USA'], tags: ['economy', 'institutions'] },
    
    // Industrialisation
    { id: 'AI1730', chapter: 'AI', year: '1730s', anchor: true, title: 'Industrial Revolution Begins',
      detail: 'Britain leads. Cotton textiles, iron, coal industries mechanize. Factory system emerges.',
      people: ['British industrialists'], places: ['Britain'], tags: ['industry', 'factories'] },
    
    { id: 'AI1764', chapter: 'AI', year: '1764', anchor: false, title: 'Spinning Jenny Invented',
      detail: 'James Hargreaves invents spinning jenny. Beginning of textile mechanization.',
      people: ['James Hargreaves'], places: ['Britain'], tags: ['invention', 'textile'] },
    
    { id: 'AI1769', chapter: 'AI', year: '1769', anchor: true, title: 'Steam Engine Improved',
      detail: 'James Watt improves steam engine. Powers factories and later railways.',
      people: ['James Watt'], places: ['Britain'], tags: ['invention', 'steam'] },
    
    { id: 'AI1850s', chapter: 'AI', year: '1850s', anchor: true, title: 'Indian Cotton Industry Grows',
      detail: 'First cotton mills in Bombay. Indian entrepreneurs begin competing with British goods.',
      people: ['Indian industrialists'], places: ['Bombay', 'Ahmedabad'], tags: ['india', 'textile'] },
    
    // Print Culture
    { id: 'PC1440', chapter: 'PC', year: '1440s', anchor: true, title: 'Gutenberg\'s Printing Press',
      detail: 'Moveable type printing invented. Books become cheaper. Knowledge spreads rapidly.',
      people: ['Johannes Gutenberg'], places: ['Germany'], tags: ['printing', 'invention'] },
    
    { id: 'PC1517', chapter: 'PC', year: '1517', anchor: true, title: 'Protestant Reformation',
      detail: 'Luther\'s ideas spread through printed pamphlets. Print helps religious change.',
      people: ['Martin Luther'], places: ['Germany', 'Europe'], tags: ['religion', 'print'] },
    
    { id: 'PC1780', chapter: 'PC', year: '1780', anchor: false, title: 'Vernacular Press in India',
      detail: 'First newspapers in Indian languages. Social reform ideas spread.',
      people: ['Indian reformers'], places: ['Calcutta', 'Bombay'], tags: ['newspapers', 'reform'] },
    
    { id: 'PC1878', chapter: 'PC', year: '1878', anchor: true, title: 'Vernacular Press Act',
      detail: 'British try to control Indian press. Limits freedom of vernacular newspapers.',
      people: ['British government'], places: ['India'], tags: ['censorship', 'press'] }
];

// ==========================================
// FLASHCARDS
// ==========================================

const SST_CARDS = [
    // Rise of Nationalism in Europe
    { id: 'EU01', chapter: 'EU', front: 'What is a nation-state?', 
      back: 'A state where citizens share common identity, language, culture, and territory. Government represents the nation.',
      mnemonic: 'Nation = People feeling ONE | State = Government' },
    
    { id: 'EU02', chapter: 'EU', front: 'What was the French Revolution\'s impact on nationalism?',
      back: '1) Sovereignty transferred from king to people 2) Citizens replaced subjects 3) New symbols: French flag, La Marseillaise 4) Spread ideas across Europe via Napoleonic wars.',
      mnemonic: 'French Rev = LEFE: Liberty, Equality, Fraternity, End of monarchy' },
    
    { id: 'EU03', chapter: 'EU', front: 'What was the Congress of Vienna (1815)?',
      back: 'Meeting of conservative powers to restore pre-Napoleon order. Goals: 1) Restore monarchies 2) Create balance of power 3) Suppress liberal nationalism. Led by Metternich.',
      mnemonic: 'Vienna = "Victory for kings, not citizens"' },
    
    { id: 'EU04', chapter: 'EU', front: 'Who were the Liberals?',
      back: 'People who wanted: 1) Constitutional government 2) Freedom of speech/press 3) End of aristocratic privileges 4) Free markets. Mostly educated middle class.',
      mnemonic: 'Liberals = CFEM (Constitution, Freedom, Equality, Markets)' },
    
    { id: 'EU05', chapter: 'EU', front: 'How did Germany unify? Name key figures.',
      back: 'Prussia led unification under Bismarck\'s "blood and iron" policy. Three wars: Denmark (1864), Austria (1866), France (1871). Kaiser William I crowned at Versailles.',
      mnemonic: 'Bismarck\'s 3 Wars = DAF (Denmark, Austria, France)' },
    
    { id: 'EU06', chapter: 'EU', front: 'How did Italy unify? Name key figures.',
      back: 'Three key leaders: 1) Mazzini - ideas/inspiration 2) Cavour - diplomacy 3) Garibaldi - military. Victor Emmanuel II became king of unified Italy in 1861.',
      mnemonic: 'MCG = Italy United (Mazzini, Cavour, Garibaldi)' },
    
    // Nationalism in India
    { id: 'IN01', chapter: 'IN', front: 'What is Satyagraha?',
      back: 'Gandhi\'s method of non-violent resistance. "Truth-force" - appeal to conscience, not physical force. Used in Champaran, Kheda, Ahmedabad before national movements.',
      mnemonic: 'Satya (truth) + Agraha (insistence) = Peaceful resistance' },
    
    { id: 'IN02', chapter: 'IN', front: 'Why is Jallianwala Bagh (1919) a turning point?',
      back: '1) General Dyer killed 1000+ unarmed people 2) Trust in British shattered 3) Tagore returned knighthood 4) Mass anger led to Non-Cooperation Movement.',
      mnemonic: '1919 = "Blood stains British reputation forever"' },
    
    { id: 'IN03', chapter: 'IN', front: 'What was the Non-Cooperation Movement (1920)?',
      back: 'Gandhi\'s first mass movement. Boycott: 1) Schools/courts 2) Foreign cloth 3) Elections 4) Titles. Promote: Khadi, swadeshi, national schools. Linked with Khilafat.',
      mnemonic: 'NCM = SEEK (Schools, Elections, English goods, Khadi promotion)' },
    
    { id: 'IN04', chapter: 'IN', front: 'Why did Gandhi call off Non-Cooperation in 1922?',
      back: 'Chauri Chaura incident - mob killed 22 policemen. Gandhi believed movement turned violent, withdrew it. Criticized by many leaders for stopping when movement was strong.',
      mnemonic: 'Chauri Chaura = Violence → Gandhi stops NCM' },
    
    { id: 'IN05', chapter: 'IN', front: 'What was the Salt March / Dandi March (1930)?',
      back: 'Gandhi walked 240 miles from Sabarmati to Dandi with 78 followers. Made salt from seawater, breaking salt law. Symbol: even poorest affected by British taxes.',
      mnemonic: 'March 1930: 240 miles, 78 followers, making SALT = breaking the law' },
    
    { id: 'IN06', chapter: 'IN', front: 'What was the Quit India Movement (1942)?',
      back: '"Do or Die" call by Gandhi at Bombay. Demanded immediate British withdrawal. All leaders arrested. Spontaneous mass uprising. Crushed but showed British they must leave.',
      mnemonic: '1942: "Do or Die" = Final fight for freedom' },
    
    { id: 'IN07', chapter: 'IN', front: 'Who was B.R. Ambedkar and what was the Poona Pact?',
      back: 'Ambedkar: Leader of Dalits (depressed classes). Demanded separate electorates. Gandhi opposed, fasted. Poona Pact (1932): Reserved seats in general elections instead.',
      mnemonic: 'Poona Pact = Ambedkar + Gandhi compromise on Dalit representation' },
    
    // Geography
    { id: 'GE01', chapter: 'RD', front: 'What are the three types of resources by origin?',
      back: '1) Biotic: Living/organic (plants, animals, fish) 2) Abiotic: Non-living (water, minerals, land) 3) Human-made: Created by humans (roads, buildings, technology).',
      mnemonic: 'BAH: Biotic, Abiotic, Human-made' },
    
    { id: 'GE02', chapter: 'RD', front: 'What is sustainable development?',
      back: 'Development that meets present needs without compromising ability of future generations to meet their needs. Balance between economic growth and environment.',
      mnemonic: 'SD = Present + Future (not just NOW, think TOMORROW)' },
    
    { id: 'GE03', chapter: 'AG', front: 'Name India\'s major food crops and where they grow.',
      back: 'Rice: High rainfall areas (WB, Punjab, UP, coastal areas). Wheat: Winter crop, Punjab, Haryana, UP. Millets: Dry areas (jowar, bajra, ragi). Maize: All states.',
      mnemonic: 'Rice = Rain, Wheat = Winter, Millets = Minimal rain' },
    
    { id: 'GE04', chapter: 'WR', front: 'What are the main methods of water conservation?',
      back: '1) Rainwater harvesting 2) Dams and reservoirs 3) Drip irrigation 4) Rooftop collection 5) Watershed management. Traditional: tanks, ponds, johads.',
      mnemonic: 'RDDRT = Rain, Dams, Drip, Rooftop, Traditional' },
    
    // Civics
    { id: 'CI01', chapter: 'PS', front: 'What is power sharing? Why is it important?',
      back: 'Distribution of power among different organs, levels, and groups. Important because: 1) Reduces conflict 2) Gives voice to all 3) Strengthens democracy 4) Ensures stability.',
      mnemonic: 'Power Sharing = PEACE (Prevents conflict, Ensures all participate)' },
    
    { id: 'CI02', chapter: 'FD', front: 'What is Federalism?',
      back: 'System where power is divided between central and state governments. Both have independent powers. India: Union List, State List, Concurrent List.',
      mnemonic: 'Federalism = 3 Lists (Union=97, State=66, Concurrent=47 subjects)' },
    
    { id: 'CI03', chapter: 'PP', front: 'What are the functions of political parties?',
      back: '1) Contest elections 2) Form policies 3) Make laws (in power) 4) Opposition role (check government) 5) Shape public opinion 6) Provide access to government.',
      mnemonic: 'CPMOLS = Contest, Policies, Make laws, Opposition, Leaders, Shape opinion' },
    
    { id: 'CI04', chapter: 'PP', front: 'Name India\'s national parties.',
      back: 'BJP (Bharatiya Janata Party), INC (Indian National Congress), CPI (Communist Party of India), CPI-M, BSP (Bahujan Samaj Party), NCP (Nationalist Congress Party).',
      mnemonic: 'National = Must have 6% votes in 4+ states or 2% LS seats' },
    
    // Economics
    { id: 'EC01', chapter: 'DV', front: 'What is HDI (Human Development Index)?',
      back: 'Measure of development based on: 1) Per capita income 2) Life expectancy 3) Education (literacy rate + enrollment). Published by UNDP. Higher = better development.',
      mnemonic: 'HDI = ILE (Income, Life expectancy, Education)' },
    
    { id: 'EC02', chapter: 'SE', front: 'What are the three sectors of the economy?',
      back: 'Primary: Agriculture, fishing, mining. Secondary: Manufacturing, construction. Tertiary/Service: Trade, transport, banking, IT. India: Service sector largest now.',
      mnemonic: 'PST = Primary (grow), Secondary (make), Tertiary (serve)' },
    
    { id: 'EC03', chapter: 'MC', front: 'What is the difference between formal and informal credit?',
      back: 'Formal: Banks, cooperatives. Low interest, documents needed. Informal: Moneylenders, relatives. High interest, easy access. RBI supervises formal sector.',
      mnemonic: 'Formal = Low interest + Rules | Informal = High interest + No rules' },
    
    { id: 'EC04', chapter: 'GL', front: 'What is globalization?',
      back: 'Integration of economies worldwide through trade, investment, technology. MNCs spread production globally. Benefits: choice, technology. Challenges: local industries hurt.',
      mnemonic: 'Globalization = World becomes ONE market' },
    
    { id: 'EC05', chapter: 'CR', front: 'What are the rights of consumers?',
      back: '1) Right to Safety 2) Right to Information 3) Right to Choose 4) Right to be Heard 5) Right to Seek Redressal 6) Right to Consumer Education.',
      mnemonic: 'SICHRR = Safety, Information, Choose, Heard, Redressal, educatioN' }
];

// ==========================================
// QUIZ QUESTIONS
// ==========================================

const SST_QUIZ = [
    // History
    { id: 'Q01', chapter: 'EU', question: 'Who said "When France sneezes, the rest of Europe catches cold"?',
      options: ['Napoleon', 'Metternich', 'Bismarck', 'Garibaldi'], correct: 1 },
    
    { id: 'Q02', chapter: 'EU', question: 'The Napoleonic Code was introduced in which year?',
      options: ['1789', '1799', '1804', '1815'], correct: 2 },
    
    { id: 'Q03', chapter: 'EU', question: 'Who was the "Iron Chancellor" who unified Germany?',
      options: ['Kaiser William I', 'Otto von Bismarck', 'Metternich', 'Cavour'], correct: 1 },
    
    { id: 'Q04', chapter: 'EU', question: 'Which of these was NOT a leader of Italian unification?',
      options: ['Mazzini', 'Cavour', 'Garibaldi', 'Metternich'], correct: 3 },
    
    { id: 'Q05', chapter: 'IN', question: 'When did Gandhi return to India from South Africa?',
      options: ['1905', '1915', '1919', '1920'], correct: 1 },
    
    { id: 'Q06', chapter: 'IN', question: 'The Jallianwala Bagh massacre took place in which year?',
      options: ['1917', '1918', '1919', '1920'], correct: 2 },
    
    { id: 'Q07', chapter: 'IN', question: 'Which movement was linked with the Khilafat issue?',
      options: ['Civil Disobedience', 'Non-Cooperation', 'Quit India', 'Salt March'], correct: 1 },
    
    { id: 'Q08', chapter: 'IN', question: 'Gandhi withdrew the Non-Cooperation Movement after which incident?',
      options: ['Jallianwala Bagh', 'Chauri Chaura', 'Dandi March', 'Poona Pact'], correct: 1 },
    
    { id: 'Q09', chapter: 'IN', question: 'The Salt March began from which place?',
      options: ['Bombay', 'Champaran', 'Sabarmati Ashram', 'Dandi'], correct: 2 },
    
    { id: 'Q10', chapter: 'IN', question: 'Which slogan is associated with the Quit India Movement?',
      options: ['Jai Hind', 'Do or Die', 'Inquilab Zindabad', 'Swaraj is my birthright'], correct: 1 },
    
    { id: 'Q11', chapter: 'GW', question: 'The Great Depression started in which year?',
      options: ['1919', '1929', '1939', '1944'], correct: 1 },
    
    { id: 'Q12', chapter: 'GW', question: 'Bretton Woods Conference established which institutions?',
      options: ['UN and UNESCO', 'IMF and World Bank', 'WTO and GATT', 'NATO and Warsaw Pact'], correct: 1 },
    
    { id: 'Q13', chapter: 'AI', question: 'Where did the Industrial Revolution first begin?',
      options: ['France', 'Germany', 'Britain', 'USA'], correct: 2 },
    
    { id: 'Q14', chapter: 'PC', question: 'Who invented the printing press with moveable type?',
      options: ['Martin Luther', 'Johannes Gutenberg', 'William Caxton', 'James Watt'], correct: 1 },
    
    // Geography
    { id: 'Q15', chapter: 'RD', question: 'Which type of soil is best for cotton cultivation?',
      options: ['Alluvial', 'Black', 'Laterite', 'Red'], correct: 1 },
    
    { id: 'Q16', chapter: 'AG', question: 'Which crop is known as the "golden fibre"?',
      options: ['Cotton', 'Jute', 'Hemp', 'Silk'], correct: 1 },
    
    { id: 'Q17', chapter: 'AG', question: 'Rabi crops are harvested in which season?',
      options: ['June-July', 'September-October', 'March-April', 'December-January'], correct: 2 },
    
    { id: 'Q18', chapter: 'WR', question: 'Which river has the highest hydroelectric potential in India?',
      options: ['Ganga', 'Yamuna', 'Brahmaputra', 'Narmada'], correct: 2 },
    
    // Civics
    { id: 'Q19', chapter: 'PS', question: 'Power sharing is essential for democracy because:',
      options: ['It ensures quick decisions', 'It reduces conflict', 'It increases government power', 'It removes opposition'], correct: 1 },
    
    { id: 'Q20', chapter: 'FD', question: 'How many subjects are in the Union List?',
      options: ['47', '66', '97', '52'], correct: 2 },
    
    { id: 'Q21', chapter: 'PP', question: 'To be recognized as a national party, a party must:',
      options: ['Win in one state', 'Get 6% votes in 4+ states', 'Win parliamentary majority', 'Be 50 years old'], correct: 1 },
    
    // Economics
    { id: 'Q22', chapter: 'DV', question: 'HDI stands for:',
      options: ['High Development Index', 'Human Development Index', 'Health Development Index', 'Healthy Diet Index'], correct: 1 },
    
    { id: 'Q23', chapter: 'SE', question: 'Which sector contributes most to India\'s GDP today?',
      options: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'], correct: 2 },
    
    { id: 'Q24', chapter: 'MC', question: 'Which institution supervises formal sector loans in India?',
      options: ['SEBI', 'RBI', 'NABARD', 'Finance Ministry'], correct: 1 },
    
    { id: 'Q25', chapter: 'GL', question: 'MNC stands for:',
      options: ['Multinational Corporation', 'Modern National Company', 'Manufacturing New Commodities', 'Multiple National Centres'], correct: 0 }
];

// ==========================================
// CONCEPT MAPS DATA
// ==========================================

const SST_CONCEPTS = {
    nationalism_europe: {
        title: 'Rise of Nationalism in Europe',
        central: 'Nationalism',
        nodes: [
            { text: 'French Revolution (1789)', connects: 'central' },
            { text: 'Liberty, Equality, Fraternity', connects: 'French Revolution (1789)' },
            { text: 'Napoleonic Wars', connects: 'central' },
            { text: 'Congress of Vienna (1815)', connects: 'central' },
            { text: 'Conservative Order', connects: 'Congress of Vienna (1815)' },
            { text: 'Revolutions of 1848', connects: 'central' },
            { text: 'Unification', connects: 'central' },
            { text: 'Italy (1861)', connects: 'Unification' },
            { text: 'Germany (1871)', connects: 'Unification' }
        ]
    },
    nationalism_india: {
        title: 'Nationalism in India',
        central: 'Freedom Struggle',
        nodes: [
            { text: 'Gandhi Returns (1915)', connects: 'central' },
            { text: 'Satyagraha', connects: 'Gandhi Returns (1915)' },
            { text: 'Rowlatt Act (1919)', connects: 'central' },
            { text: 'Jallianwala Bagh', connects: 'Rowlatt Act (1919)' },
            { text: 'Non-Cooperation (1920)', connects: 'central' },
            { text: 'Khilafat Movement', connects: 'Non-Cooperation (1920)' },
            { text: 'Civil Disobedience (1930)', connects: 'central' },
            { text: 'Salt March', connects: 'Civil Disobedience (1930)' },
            { text: 'Quit India (1942)', connects: 'central' },
            { text: 'Independence (1947)', connects: 'central' }
        ]
    },
    economy_sectors: {
        title: 'Sectors of Indian Economy',
        central: 'Economy',
        nodes: [
            { text: 'Primary Sector', connects: 'central' },
            { text: 'Agriculture', connects: 'Primary Sector' },
            { text: 'Mining', connects: 'Primary Sector' },
            { text: 'Secondary Sector', connects: 'central' },
            { text: 'Manufacturing', connects: 'Secondary Sector' },
            { text: 'Construction', connects: 'Secondary Sector' },
            { text: 'Tertiary Sector', connects: 'central' },
            { text: 'Services', connects: 'Tertiary Sector' },
            { text: 'IT, Banking', connects: 'Tertiary Sector' }
        ]
    }
};

// ==========================================
// MAP DATA (for Geography visuals)
// ==========================================

const INDIA_REGIONS = [
    { name: 'Punjab', crops: ['Wheat', 'Rice', 'Cotton'], minerals: ['—'], specialty: 'Green Revolution' },
    { name: 'West Bengal', crops: ['Rice', 'Jute', 'Tea'], minerals: ['Coal'], specialty: 'Jute industry' },
    { name: 'Maharashtra', crops: ['Cotton', 'Sugarcane', 'Jowar'], minerals: ['Manganese'], specialty: 'Cotton textile' },
    { name: 'Gujarat', crops: ['Cotton', 'Groundnut'], minerals: ['Petroleum'], specialty: 'Dairy, Textiles' },
    { name: 'Karnataka', crops: ['Coffee', 'Silk', 'Ragi'], minerals: ['Iron ore', 'Gold'], specialty: 'IT hub' },
    { name: 'Jharkhand', crops: ['Rice'], minerals: ['Coal', 'Iron', 'Mica'], specialty: 'Mining' },
    { name: 'Odisha', crops: ['Rice'], minerals: ['Iron ore', 'Manganese', 'Bauxite'], specialty: 'Minerals' }
];

// ==========================================
// SST ENGINE CLASS
// ==========================================

class SSTEngine {
    constructor() {
        this.chapters = SST_CHAPTERS;
        this.events = SST_EVENTS;
        this.cards = SST_CARDS;
        this.quizQuestions = SST_QUIZ;
        
        this.flashcardEngine = new FlashcardEngine('sst', this.cards);
        this.quizEngine = new QuizEngine('sst', this.quizQuestions);
    }

    // Get events for timeline
    getTimelineEvents(chapter = 'ALL') {
        let events = [...this.events];
        if (chapter !== 'ALL') {
            events = events.filter(e => e.chapter === chapter);
        }
        return events.sort((a, b) => {
            const yearA = parseInt(String(a.year).replace(/\D/g, ''));
            const yearB = parseInt(String(b.year).replace(/\D/g, ''));
            return yearA - yearB;
        });
    }

    // Render timeline
    renderTimeline(container, chapter = 'ALL') {
        const events = this.getTimelineEvents(chapter);
        
        container.innerHTML = `
            <div class="timeline">
                ${events.map(event => `
                    <div class="timeline-item ${event.anchor ? 'anchor' : ''}">
                        <span class="timeline-year">${event.year}</span>
                        ${event.anchor ? '<span class="tag anchor" style="margin-left:8px">⭐ Anchor</span>' : ''}
                        <h4 class="timeline-title">${event.title}</h4>
                        <p class="timeline-desc">${event.detail}</p>
                        ${event.people ? `<div class="text-muted mt-1" style="font-size:0.85rem">👥 ${event.people.join(', ')}</div>` : ''}
                        ${event.places ? `<div class="text-muted" style="font-size:0.85rem">📍 ${event.places.join(', ')}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Render concept map
    renderConceptMap(container, mapKey) {
        const map = SST_CONCEPTS[mapKey];
        if (!map) return;
        
        container.innerHTML = `
            <div class="concept-map">
                <h3 style="text-align:center; margin-bottom:20px">${map.title}</h3>
                <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:10px; align-items:center;">
                    <div class="concept-node central">${map.central}</div>
                    <span class="concept-arrow">→</span>
                    ${map.nodes.map(node => `
                        <div class="concept-node">${node.text}</div>
                    `).join('<span class="concept-arrow">→</span>')}
                </div>
            </div>
        `;
    }

    // Render chapter accordion
    renderChapters(container) {
        const bySubject = {};
        this.chapters.forEach(ch => {
            bySubject[ch.subject] = bySubject[ch.subject] || [];
            bySubject[ch.subject].push(ch);
        });

        container.innerHTML = Object.entries(bySubject).map(([subject, chapters]) => `
            <div class="card mb-2">
                <h3>${subject}</h3>
                ${chapters.map(ch => `
                    <div class="accordion" data-chapter="${ch.id}">
                        <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
                            <span class="accordion-title">${ch.icon} ${ch.title}</span>
                            <span class="accordion-icon">▼</span>
                        </div>
                        <div class="accordion-content">
                            <p class="text-muted">Key events and concepts from this chapter.</p>
                            <div class="mt-2">
                                ${this.events.filter(e => e.chapter === ch.id).slice(0, 5).map(e => `
                                    <div class="step">
                                        <div class="step-number">${e.year}</div>
                                        <div class="step-content">
                                            <div class="step-title">${e.title}</div>
                                            <div class="step-desc">${e.detail}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <button class="btn btn-sst mt-2" onclick="sstApp.studyChapter('${ch.id}')">
                                Study This Chapter →
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');
    }

    // Study specific chapter
    studyChapter(chapterId) {
        const tab = document.querySelector('.tab[data-tab="flashcards"]');
        if (tab) tab.click();
        
        this.flashcardEngine.loadDeck(chapterId, true);
        const container = document.getElementById('flashcardArea');
        if (container) {
            this.flashcardEngine.renderCard(container);
        }
    }

    // Initialize the page
    init() {
        // Initialize tabs
        initTabs('.tab', 'section-', 'overview');
        
        // Render chapter list
        const chapterContainer = document.getElementById('chapterList');
        if (chapterContainer) {
            this.renderChapters(chapterContainer);
        }
        
        // Render timeline
        const timelineContainer = document.getElementById('timelineContainer');
        if (timelineContainer) {
            this.renderTimeline(timelineContainer);
        }
        
        // Setup timeline filter
        const timelineFilter = document.getElementById('timelineFilter');
        if (timelineFilter) {
            timelineFilter.innerHTML = `
                <option value="ALL">All Chapters</option>
                ${this.chapters.filter(c => c.subject === 'History').map(ch => 
                    `<option value="${ch.id}">${ch.title}</option>`
                ).join('')}
            `;
            timelineFilter.addEventListener('change', () => {
                this.renderTimeline(timelineContainer, timelineFilter.value);
            });
        }
        
        // Initialize flashcards
        const flashcardArea = document.getElementById('flashcardArea');
        if (flashcardArea) {
            this.flashcardEngine.loadDeck('ALL', true);
            this.flashcardEngine.renderCard(flashcardArea);
        }
        
        // Update box counts
        this.flashcardEngine.updateBoxDisplay();
        
        // Deck selector
        const deckSelect = document.getElementById('deckSelect');
        if (deckSelect) {
            deckSelect.innerHTML = `
                <option value="ALL">All Chapters</option>
                ${this.chapters.map(ch => 
                    `<option value="${ch.id}">${ch.icon} ${ch.title}</option>`
                ).join('')}
            `;
            deckSelect.addEventListener('change', () => {
                this.flashcardEngine.loadDeck(deckSelect.value, true);
                this.flashcardEngine.renderCard(flashcardArea);
            });
        }
        
        // Shuffle button
        const shuffleBtn = document.getElementById('shuffleBtn');
        if (shuffleBtn) {
            shuffleBtn.addEventListener('click', () => {
                const currentDeck = deckSelect ? deckSelect.value : 'ALL';
                this.flashcardEngine.loadDeck(currentDeck, true);
                this.flashcardEngine.renderCard(flashcardArea);
                showToast('Deck shuffled!', 'success');
            });
        }
        
        // Initialize quiz
        const quizArea = document.getElementById('quizArea');
        const newQuizBtn = document.getElementById('newQuizBtn');
        const submitQuizBtn = document.getElementById('submitQuizBtn');
        const quizScore = document.getElementById('quizScore');
        
        if (newQuizBtn) {
            newQuizBtn.addEventListener('click', () => {
                const quizFilter = document.getElementById('quizFilter');
                const chapter = quizFilter ? quizFilter.value : 'ALL';
                this.quizEngine.generateQuiz(10, chapter);
                this.quizEngine.renderQuiz(quizArea);
                quizScore.textContent = '0/10';
                submitQuizBtn.disabled = false;
            });
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
        
        // Quiz filter
        const quizFilter = document.getElementById('quizFilter');
        if (quizFilter) {
            quizFilter.innerHTML = `
                <option value="ALL">All Chapters</option>
                ${this.chapters.map(ch => 
                    `<option value="${ch.id}">${ch.icon} ${ch.title}</option>`
                ).join('')}
            `;
        }
        
        // Concept maps
        const conceptSelect = document.getElementById('conceptSelect');
        const conceptMapContainer = document.getElementById('conceptMapContainer');
        if (conceptSelect && conceptMapContainer) {
            conceptSelect.addEventListener('change', () => {
                this.renderConceptMap(conceptMapContainer, conceptSelect.value);
            });
            // Render first map
            this.renderConceptMap(conceptMapContainer, 'nationalism_europe');
        }
        
        // Initial quiz
        if (newQuizBtn) {
            newQuizBtn.click();
        }
    }
}

// Create global instance
const sstApp = new SSTEngine();

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    sstApp.init();
});
