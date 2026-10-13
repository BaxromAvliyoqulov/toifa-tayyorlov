// UZBMB / DEMOTEST 2026 STANDARTI BO'YICHA TO'LIQ 50 TALIK RASMIY MOCK IMTIHON BAZASI
// Strukturasi:
// 1-35 savollar: Grammatika va Leksika (CEFR B2-C1: Inversion, Conditionals, Causatives, Gerund/Inf, Participles, Modals, Passive, Prepositions, Phrasal verbs)
// 36-40 savollar: Reading Comprehension (B2-C1 Matn tahlili va savollar)
// 41-47 savollar: Pedagogik mahorat va ELT Metodika (TKT, PPP, TBL, CLT, Bloom, Assessment, Classroom Management)
// 48-50 savollar: Milliy baholash, O'qituvchi kasbiy standarti va Attestatsiya me'yoriy hujjatlari

const MOCK_EXAM_50 = {
  title: "🏆 RASMIY ATTESTATSIYA IMTIHONI (UZBMB / DEMOTEST STANDARTI)",
  durationMinutes: 100, // 100 daqiqa rasmiy vaqt
  passingScore2ndTier: 70, // 2-toifa o'tish chegarasi
  totalQuestions: 50,
  questions: [
    {
      id: 1,
      section: "Grammar & Lexis",
      question: "Seldom _______ such overwhelming hospitality during their international research expeditions.",
      options: ["they experienced", "had they experienced", "did they experienced", "they had experienced"],
      correct: 1,
      explanation: "'Seldom' inkor so'zi gap boshida kelsa inversiya bo'ladi: 'had they experienced'."
    },
    {
      id: 2,
      section: "Grammar & Lexis",
      question: "No sooner _______ the agreement _______ the opposing party raised unexpected objections.",
      options: ["had they signed / when", "did they sign / then", "had they signed / than", "they had signed / than"],
      correct: 2,
      explanation: "'No sooner had + S + V3' qolipida ikkinchi bog'lovchi faqat 'THAN' bo'lishi shart."
    },
    {
      id: 3,
      section: "Grammar & Lexis",
      question: "Only by working cooperatively _______ the project within the strict governmental deadline.",
      options: ["we can finish", "can we finish", "we could finish", "finish we can"],
      correct: 1,
      explanation: "'Only by + V-ing' gap boshida kelganda asosiy gapda inversiya bo'ladi: 'can we finish'."
    },
    {
      id: 4,
      section: "Grammar & Lexis",
      question: "_______ you encounter any difficulties during the online registration, please call support.",
      options: ["Were", "Had", "Should", "Would"],
      correct: 2,
      explanation: "Type 1 shart gapida 'If you encounter' o'rniga 'Should you encounter' inversiyasi qo'yiladi."
    },
    {
      id: 5,
      section: "Grammar & Lexis",
      question: "Were the government to reduce corporate taxes, foreign investments _______ dramatically.",
      options: ["would increase", "will increase", "would have increased", "increased"],
      correct: 0,
      explanation: "Type 2 shart gapida inversiya: 'Were + Ega + to + V1', natija qismida esa 'would + V1' bo'ladi."
    },
    {
      id: 6,
      section: "Grammar & Lexis",
      question: "If I _______ your advice last winter, I would not be facing these legal troubles today.",
      options: ["followed", "had followed", "would follow", "have followed"],
      correct: 1,
      explanation: "Mixed Conditional: O'tmishdagi shart ('had followed last winter') hozirgi natijaga ('today') sabab bo'lgan."
    },
    {
      id: 7,
      section: "Grammar & Lexis",
      question: "Unless the candidates _______ the minimum threshold, they cannot proceed to the interview stage.",
      options: ["don't pass", "pass", "will pass", "passed"],
      correct: 1,
      explanation: "'Unless' o'zida inkor bor ('if not'), shuning uchun undan keyin 'pass' (Present Simple) qo'yiladi."
    },
    {
      id: 8,
      section: "Grammar & Lexis",
      question: "We took additional warm clothes with us _______ the weather in the mountains turned chilly.",
      options: ["unless", "in case", "as long as", "provided that"],
      correct: 1,
      explanation: "'In case' ehtiyot chorasi sifatida 'mabodo sovuq bo'lib qolsa degan maqsadda' degan ma'noni beradi."
    },
    {
      id: 9,
      section: "Grammar & Lexis",
      question: "The minister insisted that the new curriculum _______ implemented nationwide without delay.",
      options: ["is", "was", "be", "being"],
      correct: 2,
      explanation: "Subjunctive Mood: 'insisted that' talab fe'lidan keyin fe'l asosiy shaklda 'be' bo'lib turadi."
    },
    {
      id: 10,
      section: "Grammar & Lexis",
      question: "The director had the confidential report _______ by three independent external auditors.",
      options: ["verify", "to verify", "verified", "verifying"],
      correct: 2,
      explanation: "'Have something done' causativ qolipi: fe'l V3 shaklida ('verified') bo'ladi."
    },
    {
      id: 11,
      section: "Grammar & Lexis",
      question: "The teacher got all reluctant students _______ active participants in the classroom debate.",
      options: ["become", "to become", "becoming", "became"],
      correct: 1,
      explanation: "'Get somebody TO DO': 'get' bilan shaxs kelsa, 'to become' qo'yiladi."
    },
    {
      id: 12,
      section: "Grammar & Lexis",
      question: "While traveling through Samarkand, we stopped _______ some historic madrasahs.",
      options: ["photographing", "to photograph", "photograph", "for photograph"],
      correct: 1,
      explanation: "Boshqa bir ishni qilish maqsadida to'xtalgani uchun: 'stopped to photograph'."
    },
    {
      id: 13,
      section: "Grammar & Lexis",
      question: "The former president bitterly regrets _______ confidential state matters to foreign journalists.",
      options: ["to reveal", "revealing", "reveal", "having been revealed"],
      correct: 1,
      explanation: "O'tmishda qilingan ishdan pushaymon bo'lish ma'nosida: 'regrets revealing'."
    },
    {
      id: 14,
      section: "Grammar & Lexis",
      question: "_______ all the required documents, the applicant patiently waited for the committee's decision.",
      options: ["Having submitted", "Submitted", "Submit", "Being submitted"],
      correct: 0,
      explanation: "Perfect Participle: Birinchi harakat to'liq tugaganini ko'rsatish uchun 'Having submitted' (topshirib bo'lgach) ishlatiladi."
    },
    {
      id: 15,
      section: "Grammar & Lexis",
      question: "I wish I _______ more time to prepare for this professional attestation exam last month.",
      options: ["have had", "had had", "had", "would have"],
      correct: 1,
      explanation: "'Wish' orqali o'tgan zamondagi voqeaga afsuslanish ifodalanganda Past Perfect ('had had') bo'ladi."
    },
    {
      id: 16,
      section: "Grammar & Lexis",
      question: "It is high time the educational department _______ modern interactive facilities for rural schools.",
      options: ["provides", "provided", "has provided", "will provide"],
      correct: 1,
      explanation: "'It is high time + Ega' dan keyin doim Past Simple ('provided') ishlatiladi."
    },
    {
      id: 17,
      section: "Grammar & Lexis",
      question: "The newly built solar power plant is believed _______ thousands of megawatts by next year.",
      options: ["to generate", "to have generated", "generating", "generated"],
      correct: 0,
      explanation: "Reporting passive kelasi/hozirgi zamon uchun: 'is believed to generate'."
    },
    {
      id: 18,
      section: "Grammar & Lexis",
      question: "The renowned professor, _______ lectures attracted thousands of students, published a new textbook.",
      options: ["who", "whom", "whose", "which"],
      correct: 2,
      explanation: "Egalik nisbati uchun 'whose lectures' (ma'ruzalari bo'lgan professor) ishlatiladi."
    },
    {
      id: 19,
      section: "Grammar & Lexis",
      question: "You _______ all this expensive equipment; the school had already ordered enough for everyone.",
      options: ["must not buy", "needn't have bought", "didn't need buy", "should buy"],
      correct: 1,
      explanation: "'Needn't have bought': keraksiz bo'lgan ishni behuda qilib qo'yganlikni bildiradi."
    },
    {
      id: 20,
      section: "Grammar & Lexis",
      question: "The lights in the laboratory are still on; the scientists _______ late tonight.",
      options: ["must be working", "can have worked", "should work", "would work"],
      correct: 0,
      explanation: "Kuchli mantiqiy xulosa (Hozirgi zamon): 'must be working' (ishlayotgan bo'lsalar kerak)."
    },
    {
      id: 21,
      section: "Grammar & Lexis",
      question: "Modern language learners are deeply accustomed _______ digital applications during self-study.",
      options: ["with using", "to use", "to using", "in using"],
      correct: 2,
      explanation: "'Accustomed to' dan keyin gerund (V-ing) keladi: 'to using'."
    },
    {
      id: 22,
      section: "Grammar & Lexis",
      question: "The committee congratulated Dr. Aliyev _______ his groundbreaking discovery in green chemistry.",
      options: ["for", "on", "at", "about"],
      correct: 1,
      explanation: "'Congratulate somebody ON something' bog'lanishidir."
    },
    {
      id: 23,
      section: "Grammar & Lexis",
      question: "The local administration decided to _______ the old historical theater due to safety hazards.",
      options: ["pull down", "put out", "turn off", "break down"],
      correct: 0,
      explanation: "'Pull down' — binoni buzib tashlash ma'nosidagi phrasal verb."
    },
    {
      id: 24,
      section: "Grammar & Lexis",
      question: "The school had to _______ the annual sports competition because of unexpected heavy snowfall.",
      options: ["call off", "put off", "take off", "give up"],
      correct: 0,
      explanation: "'Call off' — tadbirni bekor qilmoq (cancel) degani."
    },
    {
      id: 25,
      section: "Grammar & Lexis",
      question: "He always tries to _______ excuses whenever he submits his academic homework late.",
      options: ["do", "make", "create", "have"],
      correct: 1,
      explanation: "'Make an excuse' (bahona qilmoq) barqaror birikma."
    },
    {
      id: 26,
      section: "Grammar & Lexis",
      question: "Please lie down and rest; don't _______ your heavy schoolbag on the wet floor.",
      options: ["lay", "lie", "lain", "laid"],
      correct: 0,
      explanation: "'Lay' — biror narsani qo'ymoq (o'timli fe'l: lay something)."
    },
    {
      id: 27,
      section: "Grammar & Lexis",
      question: "_______ of the two applicants possessed the specialized qualifications required for the job.",
      options: ["None", "Neither", "Both not", "Either not"],
      correct: 1,
      explanation: "Ikki kishidan hech biri degan ma'noda 'Neither of the two' ishlatiladi."
    },
    {
      id: 28,
      section: "Grammar & Lexis",
      question: "_______ having limited financial resources, the school managed to build a modern robotics lab.",
      options: ["Despite", "Although", "In spite", "Even though"],
      correct: 0,
      explanation: "'Despite + V-ing' ishlatiladi ('Although' dan keyin to'liq gap ega+kesim kelishi kerak)."
    },
    {
      id: 29,
      section: "Grammar & Lexis",
      question: "Neither the headteacher nor the assistant instructors _______ present at yesterday's briefing.",
      options: ["was", "were", "is", "are"],
      correct: 1,
      explanation: "Neither... nor da fe'l o'ziga yaqin turgan ko'plikdagi egaga ('instructors') moslashadi: 'were'."
    },
    {
      id: 30,
      section: "Grammar & Lexis",
      question: "The police found very _______ evidence at the crime scene, making it hard to prosecute.",
      options: ["few", "a few", "little", "a little"],
      correct: 2,
      explanation: "'Evidence' sanalmaydi, deyarli yo'q darajada kam ma'nosida 'little' bo'ladi."
    },
    {
      id: 31,
      section: "Grammar & Lexis",
      question: "The doctor advised him _______ alcohol until his liver enzymes returned to normal levels.",
      options: ["avoid", "to avoid", "avoiding", "that he avoids"],
      correct: 1,
      explanation: "'Advise somebody TO DO': 'to avoid'."
    },
    {
      id: 32,
      section: "Grammar & Lexis",
      question: "Little _______ that their confidential conversations were being recorded by investigators.",
      options: ["did they know", "they knew", "had they known", "knew they"],
      correct: 0,
      explanation: "'Little did they know' — deyarli bilmasdilar."
    },
    {
      id: 33,
      section: "Grammar & Lexis",
      question: "Hardly _______ into the station when the announcement regarding the delay was made.",
      options: ["the train pulled", "had the train pulled", "did the train pull", "pulled the train"],
      correct: 1,
      explanation: "'Hardly had + S + V3': 'had the train pulled'."
    },
    {
      id: 34,
      section: "Grammar & Lexis",
      question: "If she _______ more diligently earlier in the semester, she wouldn't be stressed out now.",
      options: ["worked", "had worked", "would work", "has worked"],
      correct: 1,
      explanation: "Mixed conditional: 'had worked' (o'tmish sharti) hozirgi natijaga ta'sir qilmoqda."
    },
    {
      id: 35,
      section: "Grammar & Lexis",
      question: "Under no circumstances _______ without wearing proper protective goggles in this laboratory.",
      options: ["experiments should be performed", "should experiments be performed", "experiments are performed", "can perform experiments"],
      correct: 1,
      explanation: "'Under no circumstances' inkor so'zi bilan modal fe'l 'should' egadan oldinga o'tadi."
    },

    // 36-40: READING COMPREHENSION
    {
      id: 36,
      section: "Reading Comprehension",
      question: "[Text excerpt: 'Adaptive learning environments analyze real-time student performance to dynamically alter instructional pacing and difficulty. Rather than enforcing a monolithic curriculum, they prioritize individualized mastery.']\n\nAccording to the text, what is the primary feature of adaptive learning environments?",
      options: [
        "Enforcing a rigid, identical curriculum for all learners",
        "Modifying teaching speed and difficulty according to student performance",
        "Completely eliminating teachers from modern classrooms",
        "Focusing exclusively on end-of-year summative exams"
      ],
      correct: 1,
      explanation: "Matnda aniq aytilgan: 'dynamically alter instructional pacing and difficulty' (o'quvchi tezligi va qiyinligini moslashtirish)."
    },
    {
      id: 37,
      section: "Reading Comprehension",
      question: "In the passage, the word 'monolithic' is closest in meaning to:",
      options: ["Uniform and inflexible", "Highly diverse", "Modern and digital", "Student-friendly"],
      correct: 0,
      explanation: "'Monolithic' bu yerda bir xil, o'zgarmas, qotib qolgan (rigid/uniform) ma'nosida kelgan."
    },
    {
      id: 38,
      section: "Reading Comprehension",
      question: "Which of the following can be inferred about traditional curricula from the text?",
      options: [
        "They adapt instantly to individual student needs",
        "They often treat all students with a one-size-fits-all approach",
        "They are proven to be superior to adaptive systems",
        "They require sophisticated digital algorithms"
      ],
      correct: 1,
      explanation: "An'anaviy ta'lim ko'pincha hamma uchun bir xil (one-size-fits-all) andazada ishlaydi."
    },
    {
      id: 39,
      section: "Reading Comprehension",
      question: "Reading technique: When a teacher asks students to quickly look through an article just to find a specific telephone number, which reading skill is being practiced?",
      options: ["Skimming for gist", "Scanning for specific information", "Extensive reading for pleasure", "Critical inferring"],
      correct: 1,
      explanation: "Aniq ma'lumotni (telefon raqam, sana, ism) tezda qidirib topish — bu 'Scanning' deb ataladi."
    },
    {
      id: 40,
      section: "Reading Comprehension",
      question: "When a reader reads a headline and introductory paragraph to grasp the general topic without reading every word, they are:",
      options: ["Scanning", "Skimming", "Translating", "Proofreading"],
      correct: 1,
      explanation: "Matnning umumiy mazmunini (gist) tezda ilg'ab olish — bu 'Skimming' deyiladi."
    },

    // 41-47: PEDAGOGIK MAHORAT VA METODIKA
    {
      id: 41,
      section: "Pedagogy & Methodology",
      question: "In a PPP (Presentation, Practice, Production) lesson, during which stage is 'Accuracy' the primary pedagogical focus?",
      options: ["Warm-up stage", "Presentation stage", "Practice stage", "Production stage"],
      correct: 2,
      explanation: "Practice (Mashq) bosqichida asosiy diqqat xatosiz, to'g'ri shaklga (Accuracy) qaratiladi."
    },
    {
      id: 42,
      section: "Pedagogy & Methodology",
      question: "In Task-Based Learning (TBL), what happens during the 'Language Focus' stage?",
      options: [
        "The teacher introduces grammar rules before setting the task",
        "Students memorize vocabulary lists in isolation",
        "Specific language features and errors are examined after the task is completed",
        "Students are strictly forbidden from asking grammatical questions"
      ],
      correct: 2,
      explanation: "TBL da til shakli va grammatika faqat topshiriq to'liq tugagach, oxirgi 'Language Focus' bosqichida tahlil qilinadi."
    },
    {
      id: 43,
      section: "Pedagogy & Methodology",
      question: "According to Bloom's Revised Taxonomy, which cognitive skill represents the highest level of thinking?",
      options: ["Understanding", "Analyzing", "Evaluating", "Creating"],
      correct: 3,
      explanation: "Bloom taksonomiyasining eng yuqori pog'onasi — 'Creating' (Yaratish, sintez qilish) hisoblanadi."
    },
    {
      id: 44,
      section: "Pedagogy & Methodology",
      question: "What is the primary characteristic of 'Formative Assessment'?",
      options: [
        "Assigning ranking grades at the end of an academic semester",
        "Providing diagnostic feedback during learning to support progress",
        "Conducting standardized national certification tests",
        "Evaluating teachers' institutional compliance"
      ],
      correct: 1,
      explanation: "Formative (shakllantiruvchi) baholash dars jarayonida o'quvchiga rivojlanish uchun fikr-mulohaza (feedback) berishga xizmat qiladi."
    },
    {
      id: 45,
      section: "Pedagogy & Methodology",
      question: "Concept Checking Questions (CCQs) are used by teachers primarily to:",
      options: [
        "Test students' spelling of complex vocabulary",
        "Verify students' understanding of a target concept without asking 'Do you understand?'",
        "Discipline disruptive students during lectures",
        "Determine the final grades of learners"
      ],
      correct: 1,
      explanation: "CCQs — o'quvchi haqiqatan qoidani tushunganini tekshirish uchun beriladigan qisqa va mantiqiy savollardir."
    },
    {
      id: 46,
      section: "Pedagogy & Methodology",
      question: "In Communicative Language Teaching (CLT), which classroom arrangement best fosters authentic peer interaction?",
      options: [
        "Rows of single desks facing the blackboard silently",
        "Pair work and small group discussions with flexible seating",
        "Teacher standing on the podium lecturing continuously",
        "Students working solely on individual grammar drills"
      ],
      correct: 1,
      explanation: "CLT da o'quvchilar o'zaro muloqot qilishi uchun juftlik va guruh ishlari (pair/group work) eng samarali vositadir."
    },
    {
      id: 47,
      section: "Pedagogy & Methodology",
      question: "When should a teacher use 'Delayed Error Correction' during a fluency-based speaking activity?",
      options: [
        "Interrupting immediately as soon as a student mispronounces a word",
        "Taking notes quietly and reviewing common mistakes with the class after the activity ends",
        "Ignoring errors completely and never correcting them",
        "Publicly embarrassing the student in front of their peers"
      ],
      correct: 1,
      explanation: "Delayed error correction: so'zlovchining nutqini bo'lmasdan, suhbat tugagach umumiy xatolarni tahlil qilish."
    },

    // 48-50: MILLIY ME'YORIY STANDARTLAR VA QONUNCHILIK
    {
      id: 48,
      section: "National Standards & Policy",
      question: "O'zbekiston Respublikasi Vazirlar Mahkamasining pedagog kadrlarni attestatsiyadan o'tkazish tartibiga ko'ra, 2-malaka toifasiga da'vogar mutaxassis uchun minimal o'tish balli qaysi oraliqda belgilanadi?",
      options: ["50 balldan yuqori", "60 balldan yuqori", "70 balldan yuqori", "80 balldan yuqori"],
      correct: 1,
      explanation: "Amaldagi nizomga ko'ra, 2-toifa uchun o'tish balli 60 ball (yoki tegishli toifa chegarasiga muvofiq 60-70 ball oralig'i) deb belgilangan."
    },
    {
      id: 49,
      section: "National Standards & Policy",
      question: "Yangi Milliy o'quv dasturi (National Curriculum) bo'yicha chet tili o'qitishning bosh mezoni nima?",
      options: [
        "Qoidalarni quruq yodlash va tarjima qilish",
        "4 ta asosiy nutq ko'nikmasini (Listening, Speaking, Reading, Writing) hayotiy muloqotda kompetensiyaviy integratsiya qilish",
        "Faqat grammatik testlarni yechish tezligi",
        "Darslikdagi barcha matnlarni o'zbek tiliga to'liq o'girish"
      ],
      correct: 1,
      explanation: "Milliy o'quv dasturining o'zagi — kompetensiyaviy yondashuv va 4 ta ko'nikmani real muloqotga integratsiya qilishdir."
    },
    {
      id: 50,
      section: "National Standards & Policy",
      question: "Pedagogning kasbiy etikasiga ko'ra, dars jarayonida o'quvchining past natijasi yoki xatosi yuzaga kelganda o'qituvchining eng to'g'ri harakati qaysi?",
      options: [
        "O'quvchini butun sinf oldida izza qilish",
        "Xatoni o'rganish imkoniyati sifatida qabul qilib, konstruktiv rag'batlantiruvchi individual yondashuv ko'rsatish",
        "O'quvchini darsdan chiqarib yuborish",
        "Ota-onasiga darhol jazo choralari ko'rishni talab qilish"
      ],
      correct: 1,
      explanation: "Pedagogik etika talabi: xatoni jazo emas, rivojlanish imkoniyati deb bilish va o'quvchiga ijobiy, qo'llab-quvvatlovchi munosabatda bo'lish."
    }
  ]
};
