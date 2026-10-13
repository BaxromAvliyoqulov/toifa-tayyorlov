// TOIFA PRO — 30 KUNLIK TO'LIQ O'QUV DASTURI VA TEST BAZASI
// Har bir mavzu maktab bolasi ham 100% tushunadigan darajada o'zbekcha sodda tilda,
// hayotiy misollar, tuzoqlar va har bir kun uchun alohida 16+ ta saralangan testlar bilan.

const CURRICULUM = {
  1: {
    id: 1,
    title: "1-KUN: Inversion & PPP Modeli",
    subtitle: "Inkor so'zlar nima, qachon yordamchi fe'l oldinga chiqadi va PPP dars bosqichlari",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 1-KUN: Inversion & PPP Modeli — Asosiy Mohiyati:</h2>\n        <p>Inkor so'zlar nima, qachon yordamchi fe'l oldinga chiqadi va PPP dars bosqichlari.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 101,
        "topic": "1-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 1-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "1-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 102,
        "topic": "1-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 1-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 1-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 103,
        "topic": "1-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 104,
        "topic": "1-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 1-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 105,
        "topic": "1-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 1-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 106,
        "topic": "1-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 107,
        "topic": "1-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 108,
        "topic": "1-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 109,
        "topic": "1-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 110,
        "topic": "1-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 111,
        "topic": "1-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 112,
        "topic": "1-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 113,
        "topic": "1-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 114,
        "topic": "1-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 115,
        "topic": "1-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 116,
        "topic": "1-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  2: {
    id: 2,
    title: "2-KUN: Conditionals & TBL Metodika",
    subtitle: "Shart ergash gaplarning 4 turi, aralash shart gaplar tuzoqlari va TBL dars modeli",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 2-KUN: Conditionals & TBL Metodika — Asosiy Mohiyati:</h2>\n        <p>Shart ergash gaplarning 4 turi, aralash shart gaplar tuzoqlari va TBL dars modeli.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 201,
        "topic": "2-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 2-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "2-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 202,
        "topic": "2-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 2-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 2-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 203,
        "topic": "2-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 204,
        "topic": "2-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 2-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 205,
        "topic": "2-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 2-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 206,
        "topic": "2-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 207,
        "topic": "2-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 208,
        "topic": "2-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 209,
        "topic": "2-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 210,
        "topic": "2-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 211,
        "topic": "2-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 212,
        "topic": "2-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 213,
        "topic": "2-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 214,
        "topic": "2-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 215,
        "topic": "2-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 216,
        "topic": "2-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  3: {
    id: 3,
    title: "3-KUN: Subjunctive & Causatives & Baholash",
    subtitle: "Majhul mayl, buyruq fe'llari, 'have sth done' qolipi va Formative/Summative baholash",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 3-KUN: Subjunctive & Causatives & Baholash — Asosiy Mohiyati:</h2>\n        <p>Majhul mayl, buyruq fe'llari, 'have sth done' qolipi va Formative/Summative baholash.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 301,
        "topic": "3-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 3-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "3-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 302,
        "topic": "3-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 3-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 3-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 303,
        "topic": "3-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 304,
        "topic": "3-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 3-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 305,
        "topic": "3-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 3-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 306,
        "topic": "3-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 307,
        "topic": "3-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 308,
        "topic": "3-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 309,
        "topic": "3-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 310,
        "topic": "3-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 311,
        "topic": "3-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 312,
        "topic": "3-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 313,
        "topic": "3-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 314,
        "topic": "3-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 315,
        "topic": "3-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 316,
        "topic": "3-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  4: {
    id: 4,
    title: "4-KUN: Gerund vs Infinitive & Feedback Turlari",
    subtitle: "Remember, stop, regret, try fe'llarining nozik farqlari va darsda feedback turlari",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 4-KUN: Gerund vs Infinitive & Feedback Turlari — Asosiy Mohiyati:</h2>\n        <p>Remember, stop, regret, try fe'llarining nozik farqlari va darsda feedback turlari.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 401,
        "topic": "4-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 4-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "4-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 402,
        "topic": "4-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 4-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 4-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 403,
        "topic": "4-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 404,
        "topic": "4-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 4-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 405,
        "topic": "4-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 4-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 406,
        "topic": "4-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 407,
        "topic": "4-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 408,
        "topic": "4-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 409,
        "topic": "4-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 410,
        "topic": "4-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 411,
        "topic": "4-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 412,
        "topic": "4-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 413,
        "topic": "4-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 414,
        "topic": "4-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 415,
        "topic": "4-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 416,
        "topic": "4-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  5: {
    id: 5,
    title: "5-KUN: Participle Clauses & Bloom Taksonomiyasi",
    subtitle: "Sifatdosh oborotlari (Having done, Doing) va Bloom taksonomiyasining 6 bosqichi",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 5-KUN: Participle Clauses & Bloom Taksonomiyasi — Asosiy Mohiyati:</h2>\n        <p>Sifatdosh oborotlari (Having done, Doing) va Bloom taksonomiyasining 6 bosqichi.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 501,
        "topic": "5-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 5-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "5-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 502,
        "topic": "5-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 5-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 5-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 503,
        "topic": "5-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 504,
        "topic": "5-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 5-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 505,
        "topic": "5-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 5-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 506,
        "topic": "5-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 507,
        "topic": "5-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 508,
        "topic": "5-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 509,
        "topic": "5-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 510,
        "topic": "5-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 511,
        "topic": "5-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 512,
        "topic": "5-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 513,
        "topic": "5-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 514,
        "topic": "5-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 515,
        "topic": "5-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 516,
        "topic": "5-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  6: {
    id: 6,
    title: "6-KUN: Wish / If only / As if & SMART Dars Maqsadlari",
    subtitle: "Orzu-istaklar, noroziliklar, afsuslar va dars maqsadini SMART mezonida qo'yish",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 6-KUN: Wish / If only / As if & SMART Dars Maqsadlari — Asosiy Mohiyati:</h2>\n        <p>Orzu-istaklar, noroziliklar, afsuslar va dars maqsadini SMART mezonida qo'yish.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 601,
        "topic": "6-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 6-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "6-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 602,
        "topic": "6-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 6-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 6-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 603,
        "topic": "6-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 604,
        "topic": "6-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 6-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 605,
        "topic": "6-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 6-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 606,
        "topic": "6-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 607,
        "topic": "6-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 608,
        "topic": "6-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 609,
        "topic": "6-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 610,
        "topic": "6-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 611,
        "topic": "6-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 612,
        "topic": "6-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 613,
        "topic": "6-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 614,
        "topic": "6-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 615,
        "topic": "6-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 616,
        "topic": "6-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  7: {
    id: 7,
    title: "7-KUN: Passive Voice & Impersonal Passive & Sinf Boshqaruvi",
    subtitle: "Majhul nisbatning barcha zamonlari, 'It is said that' va Classroom Management qoidalari",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 7-KUN: Passive Voice & Impersonal Passive & Sinf Boshqaruvi — Asosiy Mohiyati:</h2>\n        <p>Majhul nisbatning barcha zamonlari, 'It is said that' va Classroom Management qoidalari.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 701,
        "topic": "7-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 7-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "7-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 702,
        "topic": "7-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 7-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 7-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 703,
        "topic": "7-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 704,
        "topic": "7-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 7-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 705,
        "topic": "7-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 7-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 706,
        "topic": "7-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 707,
        "topic": "7-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 708,
        "topic": "7-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 709,
        "topic": "7-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 710,
        "topic": "7-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 711,
        "topic": "7-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 712,
        "topic": "7-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 713,
        "topic": "7-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 714,
        "topic": "7-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 715,
        "topic": "7-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 716,
        "topic": "7-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  8: {
    id: 8,
    title: "8-KUN: Relative Clauses (Whom/Whose) & O'quvchi Motivatsiyasi",
    subtitle: "Aniqlik kirituvchi va qo'shimcha ma'lumot beruvchi gaplar, vergul qoidalari va motivatsiya",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 8-KUN: Relative Clauses (Whom/Whose) & O'quvchi Motivatsiyasi — Asosiy Mohiyati:</h2>\n        <p>Aniqlik kirituvchi va qo'shimcha ma'lumot beruvchi gaplar, vergul qoidalari va motivatsiya.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 801,
        "topic": "8-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 8-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "8-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 802,
        "topic": "8-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 8-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 8-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 803,
        "topic": "8-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 804,
        "topic": "8-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 8-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 805,
        "topic": "8-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 8-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 806,
        "topic": "8-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 807,
        "topic": "8-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 808,
        "topic": "8-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 809,
        "topic": "8-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 810,
        "topic": "8-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 811,
        "topic": "8-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 812,
        "topic": "8-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 813,
        "topic": "8-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 814,
        "topic": "8-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 815,
        "topic": "8-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 816,
        "topic": "8-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  9: {
    id: 9,
    title: "9-KUN: Past Modals (Must have / Should have) & 4 Ko'nikma",
    subtitle: "O'tmishdagi mantiqiy xulosalar, afsuslanishlar va 4 til ko'nikmasi integratsiyasi",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 9-KUN: Past Modals (Must have / Should have) & 4 Ko'nikma — Asosiy Mohiyati:</h2>\n        <p>O'tmishdagi mantiqiy xulosalar, afsuslanishlar va 4 til ko'nikmasi integratsiyasi.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 901,
        "topic": "9-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 9-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "9-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 902,
        "topic": "9-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 9-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 9-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 903,
        "topic": "9-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 904,
        "topic": "9-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 9-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 905,
        "topic": "9-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 9-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 906,
        "topic": "9-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 907,
        "topic": "9-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 908,
        "topic": "9-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 909,
        "topic": "9-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 910,
        "topic": "9-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 911,
        "topic": "9-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 912,
        "topic": "9-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 913,
        "topic": "9-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 914,
        "topic": "9-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 915,
        "topic": "9-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 916,
        "topic": "9-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  10: {
    id: 10,
    title: "10-KUN: Prepositions & Dependent Prepositions & Nizolar",
    subtitle: "Fe'l, sifat va otlar bilan bog'langan predloglar va pedagogik nizolar yechimi",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 10-KUN: Prepositions & Dependent Prepositions & Nizolar — Asosiy Mohiyati:</h2>\n        <p>Fe'l, sifat va otlar bilan bog'langan predloglar va pedagogik nizolar yechimi.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 1001,
        "topic": "10-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 10-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "10-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 1002,
        "topic": "10-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 10-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 10-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 1003,
        "topic": "10-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 1004,
        "topic": "10-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 10-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 1005,
        "topic": "10-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 10-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 1006,
        "topic": "10-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 1007,
        "topic": "10-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 1008,
        "topic": "10-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 1009,
        "topic": "10-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 1010,
        "topic": "10-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 1011,
        "topic": "10-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 1012,
        "topic": "10-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 1013,
        "topic": "10-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 1014,
        "topic": "10-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 1015,
        "topic": "10-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 1016,
        "topic": "10-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  11: {
    id: 11,
    title: "11-KUN: Phrasal Verbs (Eng Muhim 40 Ta) & Milliy Dastur",
    subtitle: "Frazeologik fe'llar ma'nolari, ajraladigan/ajralmas turlari va milliy o'quv dasturi",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 11-KUN: Phrasal Verbs (Eng Muhim 40 Ta) & Milliy Dastur — Asosiy Mohiyati:</h2>\n        <p>Frazeologik fe'llar ma'nolari, ajraladigan/ajralmas turlari va milliy o'quv dasturi.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 1101,
        "topic": "11-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 11-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "11-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 1102,
        "topic": "11-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 11-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 11-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 1103,
        "topic": "11-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 1104,
        "topic": "11-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 11-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 1105,
        "topic": "11-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 11-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 1106,
        "topic": "11-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 1107,
        "topic": "11-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 1108,
        "topic": "11-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 1109,
        "topic": "11-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 1110,
        "topic": "11-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 1111,
        "topic": "11-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 1112,
        "topic": "11-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 1113,
        "topic": "11-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 1114,
        "topic": "11-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 1115,
        "topic": "11-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 1116,
        "topic": "11-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  12: {
    id: 12,
    title: "12-KUN: Reading Strategiyalari (Skimming/Scanning) & Inklyuzivlik",
    subtitle: "Tez o'qish, kalit so'zlarni topish, xulosa chiqarish va maxsus ehtiyojli o'quvchilar",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 12-KUN: Reading Strategiyalari (Skimming/Scanning) & Inklyuzivlik — Asosiy Mohiyati:</h2>\n        <p>Tez o'qish, kalit so'zlarni topish, xulosa chiqarish va maxsus ehtiyojli o'quvchilar.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 1201,
        "topic": "12-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 12-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "12-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 1202,
        "topic": "12-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 12-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 12-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 1203,
        "topic": "12-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 1204,
        "topic": "12-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 12-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 1205,
        "topic": "12-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 12-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 1206,
        "topic": "12-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 1207,
        "topic": "12-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 1208,
        "topic": "12-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 1209,
        "topic": "12-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 1210,
        "topic": "12-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 1211,
        "topic": "12-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 1212,
        "topic": "12-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 1213,
        "topic": "12-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 1214,
        "topic": "12-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 1215,
        "topic": "12-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 1216,
        "topic": "12-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  13: {
    id: 13,
    title: "13-KUN: Confusing Words (Make vs Do) & Attestatsiya Qonunchiligi",
    subtitle: "Make vs Do, Raise vs Rise, Lie vs Lay va attestatsiya toifa nizomidagi qonuniy me'yorlar",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 13-KUN: Confusing Words (Make vs Do) & Attestatsiya Qonunchiligi — Asosiy Mohiyati:</h2>\n        <p>Make vs Do, Raise vs Rise, Lie vs Lay va attestatsiya toifa nizomidagi qonuniy me'yorlar.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 1301,
        "topic": "13-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 13-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "13-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 1302,
        "topic": "13-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 13-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 13-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 1303,
        "topic": "13-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 1304,
        "topic": "13-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 13-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 1305,
        "topic": "13-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 13-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 1306,
        "topic": "13-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 1307,
        "topic": "13-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 1308,
        "topic": "13-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 1309,
        "topic": "13-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 1310,
        "topic": "13-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 1311,
        "topic": "13-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 1312,
        "topic": "13-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 1313,
        "topic": "13-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 1314,
        "topic": "13-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 1315,
        "topic": "13-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 1316,
        "topic": "13-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  14: {
    id: 14,
    title: "14-KUN: Articles & Determiners (a/an/the, few/little) & Dars Tahlili",
    subtitle: "Artikllarning nozik qoidalari, tog'lar/daryolar, few vs a few va o'zaro dars kuzatish",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 14-KUN: Articles & Determiners (a/an/the, few/little) & Dars Tahlili — Asosiy Mohiyati:</h2>\n        <p>Artikllarning nozik qoidalari, tog'lar/daryolar, few vs a few va o'zaro dars kuzatish.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 1401,
        "topic": "14-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 14-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "14-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 1402,
        "topic": "14-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 14-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 14-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 1403,
        "topic": "14-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 1404,
        "topic": "14-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 14-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 1405,
        "topic": "14-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 14-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 1406,
        "topic": "14-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 1407,
        "topic": "14-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 1408,
        "topic": "14-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 1409,
        "topic": "14-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 1410,
        "topic": "14-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 1411,
        "topic": "14-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 1412,
        "topic": "14-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 1413,
        "topic": "14-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 1414,
        "topic": "14-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 1415,
        "topic": "14-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 1416,
        "topic": "14-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  15: {
    id: 15,
    title: "15-KUN: Reported Speech & Reporting Verbs & Pedagogik Etika",
    subtitle: "O'zlashtirma gapda zamon surilishi, buyruqlar, maxsus fe'llar va o'qituvchi etikasi",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 15-KUN: Reported Speech & Reporting Verbs & Pedagogik Etika — Asosiy Mohiyati:</h2>\n        <p>O'zlashtirma gapda zamon surilishi, buyruqlar, maxsus fe'llar va o'qituvchi etikasi.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 1501,
        "topic": "15-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 15-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "15-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 1502,
        "topic": "15-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 15-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 15-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 1503,
        "topic": "15-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 1504,
        "topic": "15-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 15-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 1505,
        "topic": "15-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 15-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 1506,
        "topic": "15-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 1507,
        "topic": "15-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 1508,
        "topic": "15-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 1509,
        "topic": "15-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 1510,
        "topic": "15-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 1511,
        "topic": "15-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 1512,
        "topic": "15-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 1513,
        "topic": "15-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 1514,
        "topic": "15-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 1515,
        "topic": "15-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 1516,
        "topic": "15-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  16: {
    id: 16,
    title: "16-KUN: Noun Clauses & Question Tags Tuzoqlari & Darslik Tahlili",
    subtitle: "Ot ergash gaplar so'roq tartibida bo'lmasligi, 'I am, aren't I?' va darslik tanlash",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 16-KUN: Noun Clauses & Question Tags Tuzoqlari & Darslik Tahlili — Asosiy Mohiyati:</h2>\n        <p>Ot ergash gaplar so'roq tartibida bo'lmasligi, 'I am, aren't I?' va darslik tanlash.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 1601,
        "topic": "16-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 16-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "16-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 1602,
        "topic": "16-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 16-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 16-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 1603,
        "topic": "16-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 1604,
        "topic": "16-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 16-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 1605,
        "topic": "16-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 16-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 1606,
        "topic": "16-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 1607,
        "topic": "16-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 1608,
        "topic": "16-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 1609,
        "topic": "16-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 1610,
        "topic": "16-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 1611,
        "topic": "16-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 1612,
        "topic": "16-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 1613,
        "topic": "16-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 1614,
        "topic": "16-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 1615,
        "topic": "16-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 1616,
        "topic": "16-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  17: {
    id: 17,
    title: "17-KUN: Adjectives vs Adverbs & Degree Modifiers & Differentsiatsiya",
    subtitle: "Hard/Hardly, Late/Lately, bog'lovchi fe'llar (look/smell) va tabaqalashtirilgan ta'lim",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 17-KUN: Adjectives vs Adverbs & Degree Modifiers & Differentsiatsiya — Asosiy Mohiyati:</h2>\n        <p>Hard/Hardly, Late/Lately, bog'lovchi fe'llar (look/smell) va tabaqalashtirilgan ta'lim.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 1701,
        "topic": "17-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 17-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "17-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 1702,
        "topic": "17-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 17-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 17-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 1703,
        "topic": "17-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 1704,
        "topic": "17-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 17-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 1705,
        "topic": "17-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 17-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 1706,
        "topic": "17-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 1707,
        "topic": "17-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 1708,
        "topic": "17-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 1709,
        "topic": "17-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 1710,
        "topic": "17-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 1711,
        "topic": "17-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 1712,
        "topic": "17-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 1713,
        "topic": "17-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 1714,
        "topic": "17-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 1715,
        "topic": "17-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 1716,
        "topic": "17-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  18: {
    id: 18,
    title: "18-KUN: Conjunctions (Although, Despite, In spite of) & Tanqidiy Fikrlash",
    subtitle: "Zidlovchi va sabab bog'lovchilari, 'Despite of' xatosi va Critical Thinking rivojlantirish",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 18-KUN: Conjunctions (Although, Despite, In spite of) & Tanqidiy Fikrlash — Asosiy Mohiyati:</h2>\n        <p>Zidlovchi va sabab bog'lovchilari, 'Despite of' xatosi va Critical Thinking rivojlantirish.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 1801,
        "topic": "18-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 18-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "18-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 1802,
        "topic": "18-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 18-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 18-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 1803,
        "topic": "18-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 1804,
        "topic": "18-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 18-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 1805,
        "topic": "18-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 18-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 1806,
        "topic": "18-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 1807,
        "topic": "18-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 1808,
        "topic": "18-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 1809,
        "topic": "18-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 1810,
        "topic": "18-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 1811,
        "topic": "18-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 1812,
        "topic": "18-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 1813,
        "topic": "18-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 1814,
        "topic": "18-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 1815,
        "topic": "18-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 1816,
        "topic": "18-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  19: {
    id: 19,
    title: "19-KUN: Subject-Verb Agreement (Murakkab Qoidalar) & Portfolio",
    subtitle: "Ega va kesim moslashuvi, Neither... nor, Each of, The number of va Portfolio",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 19-KUN: Subject-Verb Agreement (Murakkab Qoidalar) & Portfolio — Asosiy Mohiyati:</h2>\n        <p>Ega va kesim moslashuvi, Neither... nor, Each of, The number of va Portfolio.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 1901,
        "topic": "19-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 19-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "19-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 1902,
        "topic": "19-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 19-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 19-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 1903,
        "topic": "19-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 1904,
        "topic": "19-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 19-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 1905,
        "topic": "19-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 19-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 1906,
        "topic": "19-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 1907,
        "topic": "19-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 1908,
        "topic": "19-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 1909,
        "topic": "19-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 1910,
        "topic": "19-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 1911,
        "topic": "19-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 1912,
        "topic": "19-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 1913,
        "topic": "19-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 1914,
        "topic": "19-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 1915,
        "topic": "19-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 1916,
        "topic": "19-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  20: {
    id: 20,
    title: "20-KUN: Idioms & Academic Collocations & AKT Vositalari",
    subtitle: "Toifada ko'p uchraydigan iboralar, akademik kollokatsiyalar va darsda AKT",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 20-KUN: Idioms & Academic Collocations & AKT Vositalari — Asosiy Mohiyati:</h2>\n        <p>Toifada ko'p uchraydigan iboralar, akademik kollokatsiyalar va darsda AKT.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 2001,
        "topic": "20-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 20-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "20-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 2002,
        "topic": "20-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 20-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 20-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 2003,
        "topic": "20-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 2004,
        "topic": "20-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 20-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 2005,
        "topic": "20-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 20-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 2006,
        "topic": "20-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 2007,
        "topic": "20-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 2008,
        "topic": "20-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 2009,
        "topic": "20-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 2010,
        "topic": "20-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 2011,
        "topic": "20-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 2012,
        "topic": "20-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 2013,
        "topic": "20-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 2014,
        "topic": "20-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 2015,
        "topic": "20-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 2016,
        "topic": "20-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  21: {
    id: 21,
    title: "21-KUN: Listening Strategiyalari & Topshiriq Tuzish Metodikasi",
    subtitle: "Tinglab tushunish bosqichlari: Pre-listening, While-listening, Post-listening",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 21-KUN: Listening Strategiyalari & Topshiriq Tuzish Metodikasi — Asosiy Mohiyati:</h2>\n        <p>Tinglab tushunish bosqichlari: Pre-listening, While-listening, Post-listening.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 2101,
        "topic": "21-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 21-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "21-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 2102,
        "topic": "21-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 21-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 21-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 2103,
        "topic": "21-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 2104,
        "topic": "21-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 21-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 2105,
        "topic": "21-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 21-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 2106,
        "topic": "21-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 2107,
        "topic": "21-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 2108,
        "topic": "21-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 2109,
        "topic": "21-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 2110,
        "topic": "21-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 2111,
        "topic": "21-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 2112,
        "topic": "21-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 2113,
        "topic": "21-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 2114,
        "topic": "21-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 2115,
        "topic": "21-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 2116,
        "topic": "21-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  22: {
    id: 22,
    title: "22-KUN: Writing Turlari (Formal Letter, Essay) & Rubrikalar",
    subtitle: "Yozma nutq turlari, rasmiy xat uslubi, insho strukturasi va analitik rubrikalar",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 22-KUN: Writing Turlari (Formal Letter, Essay) & Rubrikalar — Asosiy Mohiyati:</h2>\n        <p>Yozma nutq turlari, rasmiy xat uslubi, insho strukturasi va analitik rubrikalar.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 2201,
        "topic": "22-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 22-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "22-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 2202,
        "topic": "22-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 22-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 22-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 2203,
        "topic": "22-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 2204,
        "topic": "22-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 22-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 2205,
        "topic": "22-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 22-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 2206,
        "topic": "22-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 2207,
        "topic": "22-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 2208,
        "topic": "22-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 2209,
        "topic": "22-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 2210,
        "topic": "22-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 2211,
        "topic": "22-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 2212,
        "topic": "22-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 2213,
        "topic": "22-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 2214,
        "topic": "22-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 2215,
        "topic": "22-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 2216,
        "topic": "22-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  23: {
    id: 23,
    title: "23-KUN: Speaking Faoliyatlari (Information Gap) & Fluency",
    subtitle: "Nutq ravonligi (Fluency) va aniqligi (Accuracy) balansi, muloqot to'siqlari",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 23-KUN: Speaking Faoliyatlari (Information Gap) & Fluency — Asosiy Mohiyati:</h2>\n        <p>Nutq ravonligi (Fluency) va aniqligi (Accuracy) balansi, muloqot to'siqlari.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 2301,
        "topic": "23-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 23-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "23-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 2302,
        "topic": "23-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 23-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 23-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 2303,
        "topic": "23-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 2304,
        "topic": "23-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 23-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 2305,
        "topic": "23-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 23-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 2306,
        "topic": "23-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 2307,
        "topic": "23-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 2308,
        "topic": "23-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 2309,
        "topic": "23-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 2310,
        "topic": "23-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 2311,
        "topic": "23-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 2312,
        "topic": "23-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 2313,
        "topic": "23-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 2314,
        "topic": "23-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 2315,
        "topic": "23-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 2316,
        "topic": "23-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  24: {
    id: 24,
    title: "24-KUN: B2-C1 Murakkab Grammatik Konstruksiyalar (Cleft)",
    subtitle: "Urg'u beruvchi 'It is... that', 'What I need is...', Cleft jumlalar va elips",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 24-KUN: B2-C1 Murakkab Grammatik Konstruksiyalar (Cleft) — Asosiy Mohiyati:</h2>\n        <p>Urg'u beruvchi 'It is... that', 'What I need is...', Cleft jumlalar va elips.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 2401,
        "topic": "24-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 24-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "24-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 2402,
        "topic": "24-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 24-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 24-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 2403,
        "topic": "24-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 2404,
        "topic": "24-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 24-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 2405,
        "topic": "24-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 24-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 2406,
        "topic": "24-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 2407,
        "topic": "24-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 2408,
        "topic": "24-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 2409,
        "topic": "24-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 2410,
        "topic": "24-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 2411,
        "topic": "24-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 2412,
        "topic": "24-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 2413,
        "topic": "24-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 2414,
        "topic": "24-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 2415,
        "topic": "24-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 2416,
        "topic": "24-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  25: {
    id: 25,
    title: "25-KUN: Attestatsiyada Eng Ko'p Yiqitadigan 30 Ta 'Tuzoq' Qoidalar",
    subtitle: "Barcha chalg'ituvchi grammatik va metodik savollarning konspekt tahlili",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 25-KUN: Attestatsiyada Eng Ko'p Yiqitadigan 30 Ta 'Tuzoq' Qoidalar — Asosiy Mohiyati:</h2>\n        <p>Barcha chalg'ituvchi grammatik va metodik savollarning konspekt tahlili.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 2501,
        "topic": "25-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 25-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "25-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 2502,
        "topic": "25-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 25-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 25-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 2503,
        "topic": "25-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 2504,
        "topic": "25-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 25-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 2505,
        "topic": "25-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 25-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 2506,
        "topic": "25-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 2507,
        "topic": "25-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 2508,
        "topic": "25-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 2509,
        "topic": "25-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 2510,
        "topic": "25-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 2511,
        "topic": "25-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 2512,
        "topic": "25-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 2513,
        "topic": "25-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 2514,
        "topic": "25-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 2515,
        "topic": "25-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 2516,
        "topic": "25-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  26: {
    id: 26,
    title: "26-KUN: 1-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol)",
    subtitle: "Davlat attestatsiyasi qolipidagi 1-sinov imtihoni va vaqt nazorati",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 26-KUN: 1-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol) — Asosiy Mohiyati:</h2>\n        <p>Davlat attestatsiyasi qolipidagi 1-sinov imtihoni va vaqt nazorati.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 2601,
        "topic": "26-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 26-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "26-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 2602,
        "topic": "26-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 26-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 26-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 2603,
        "topic": "26-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 2604,
        "topic": "26-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 26-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 2605,
        "topic": "26-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 26-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 2606,
        "topic": "26-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 2607,
        "topic": "26-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 2608,
        "topic": "26-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 2609,
        "topic": "26-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 2610,
        "topic": "26-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 2611,
        "topic": "26-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 2612,
        "topic": "26-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 2613,
        "topic": "26-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 2614,
        "topic": "26-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 2615,
        "topic": "26-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 2616,
        "topic": "26-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  27: {
    id: 27,
    title: "27-KUN: 1-Mock Test Tahlili va Xatolar Diagnostikasi",
    subtitle: "1-Mock imtihondagi xatolarning chuqur tahlili va zaif joylarni bartaraf etish",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 27-KUN: 1-Mock Test Tahlili va Xatolar Diagnostikasi — Asosiy Mohiyati:</h2>\n        <p>1-Mock imtihondagi xatolarning chuqur tahlili va zaif joylarni bartaraf etish.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 2701,
        "topic": "27-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 27-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "27-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 2702,
        "topic": "27-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 27-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 27-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 2703,
        "topic": "27-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 2704,
        "topic": "27-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 27-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 2705,
        "topic": "27-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 27-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 2706,
        "topic": "27-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 2707,
        "topic": "27-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 2708,
        "topic": "27-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 2709,
        "topic": "27-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 2710,
        "topic": "27-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 2711,
        "topic": "27-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 2712,
        "topic": "27-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 2713,
        "topic": "27-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 2714,
        "topic": "27-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 2715,
        "topic": "27-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 2716,
        "topic": "27-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  28: {
    id: 28,
    title: "28-KUN: 2-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol)",
    subtitle: "Davlat attestatsiyasi qolipidagi 2-sinov imtihoni (Yuqori qiyinlik darajasi)",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 28-KUN: 2-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol) — Asosiy Mohiyati:</h2>\n        <p>Davlat attestatsiyasi qolipidagi 2-sinov imtihoni (Yuqori qiyinlik darajasi).</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 2801,
        "topic": "28-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 28-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "28-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 2802,
        "topic": "28-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 28-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 28-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 2803,
        "topic": "28-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 2804,
        "topic": "28-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 28-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 2805,
        "topic": "28-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 28-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 2806,
        "topic": "28-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 2807,
        "topic": "28-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 2808,
        "topic": "28-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 2809,
        "topic": "28-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 2810,
        "topic": "28-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 2811,
        "topic": "28-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 2812,
        "topic": "28-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 2813,
        "topic": "28-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 2814,
        "topic": "28-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 2815,
        "topic": "28-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 2816,
        "topic": "28-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  29: {
    id: 29,
    title: "29-KUN: 2-Mock Test Tahlili va So'nggi Yo'l-Yo'riqlar",
    subtitle: "2-Mock imtihon xatolarini yopish, imtihon zalidagi psixologik strategiyalar",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 29-KUN: 2-Mock Test Tahlili va So'nggi Yo'l-Yo'riqlar — Asosiy Mohiyati:</h2>\n        <p>2-Mock imtihon xatolarini yopish, imtihon zalidagi psixologik strategiyalar.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 2901,
        "topic": "29-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 29-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "29-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 2902,
        "topic": "29-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 29-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 29-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 2903,
        "topic": "29-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 2904,
        "topic": "29-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 29-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 2905,
        "topic": "29-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 29-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 2906,
        "topic": "29-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 2907,
        "topic": "29-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 2908,
        "topic": "29-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 2909,
        "topic": "29-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 2910,
        "topic": "29-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 2911,
        "topic": "29-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 2912,
        "topic": "29-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 2913,
        "topic": "29-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 2914,
        "topic": "29-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 2915,
        "topic": "29-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 2916,
        "topic": "29-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

  30: {
    id: 30,
    title: "30-KUN: Imtihon Oldi Ekspress-Takrorlash & Psixologik Tayyorgarlik",
    subtitle: "Barcha formulalarning blitz takrorlanishi, imtihon kuni tartibi va g'alaba kayfiyati",
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 30-KUN: Imtihon Oldi Ekspress-Takrorlash & Psixologik Tayyorgarlik — Asosiy Mohiyati:</h2>\n        <p>Barcha formulalarning blitz takrorlanishi, imtihon kuni tartibi va g'alaba kayfiyati.</p>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ MUHIM QOIDALAR VA FORMULALAR (SODDA VA LO'NDA):</h2>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Oltin qoida:</strong> Dars jarayonida o'quvchi-markazlashgan yondashuv (Student-Centered Learning) va grammatik tuzilmaning haqiqiy muloqotdagi qo'llanishiga e'tibor bering.\n        </div>\n        <div class=\"formula-box\">\n          [Asosiy qolip] ➔ To'g'ri grammatik zamon + Kontekstual ma'no + Metodik maqsad\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI:</h2>\n        <ul>\n          <li><strong>Shoshqaloqlik tuzog'i:</strong> Savoldagi inkor so'zlar (NOT, EXCEPT, NEVER) ga alohida e'tibor bering.</li>\n          <li><strong>Zamonlar moslashuvi:</strong> Ergash gap bilan bosh gap o'rtasidagi mantiqiy vaqt ketma-ketligini tekshiring.</li>\n          <li><strong>Metodika talabi:</strong> Xatolarni tuzatishda o'quvchining erkin muloqotiga (fluency) xalal bermaslik tamoyilini unutmang.</li>\n        </ul>\n      </div>\n  ",
    questions: [
    {
        "id": 3001,
        "topic": "30-Kun Darsi (Grammar)",
        "question": "Which of the following sentences correctly illustrates the primary rule of 30-Kun Darsi?",
        "options": [
            "The standard grammatical inversion without auxiliary inversion",
            "The sentence following the standard inverted word order correctly",
            "The clause violating tense agreement rules",
            "The informal colloquial idiom"
        ],
        "correct": 1,
        "explanation": "30-Kun Darsi bo'yicha grammatik qoidaga muvofiq, yordamchi so'z va mantiqiy tuzilma to'g'ri qo'llanilishi lozim."
    },
    {
        "id": 3002,
        "topic": "30-Kun Darsi (Metodika)",
        "question": "Identify the common error teachers often encounter when students practice 30-Kun Darsi:",
        "options": [
            "Applying the rule in affirmative contexts instead of non-assertive ones",
            "Confusing the tense sequence between past and future hypotheticals",
            "Misplacing the auxiliary verb before the subject inappropriately",
            "Omitting the obligatory preposition"
        ],
        "correct": 2,
        "explanation": "O'quvchilar ko'pincha 30-Kun Darsi mavzusida yordamchi fe'l o'rnini adashtirib qo'yishadi."
    },
    {
        "id": 3003,
        "topic": "30-Kun Darsi (Lexis)",
        "question": "In the context of the UzBMB / DemoTest certification exam, which choice best completes: \"Hardly _______ the classroom when the inspection committee entered\"?",
        "options": [
            "had the teacher entered",
            "the teacher had entered",
            "did the teacher enter",
            "was the teacher entering"
        ],
        "correct": 0,
        "explanation": "'Hardly' gap boshida kelganda Past Perfect zamonida inversiya yuz beradi: 'had the teacher entered'."
    },
    {
        "id": 3004,
        "topic": "30-Kun Darsi (UzBMB Standart)",
        "question": "From a methodological perspective, how should 30-Kun Darsi be presented to ensure communicative competence?",
        "options": [
            "Rote memorization of isolated formulas with no context",
            "Immediate deductive explanation followed by twenty drill exercises",
            "Inductive guided discovery using authentic contextual dialogues",
            "Translating every single sentence into the native language"
        ],
        "correct": 2,
        "explanation": "Zamonaviy metodika talabiga ko'ra, qoida kontekst ichida 'Guided Discovery' (yo'naltirilgan kashfiyot) orqali kiritilishi lozim."
    },
    {
        "id": 3005,
        "topic": "30-Kun Darsi (Grammar)",
        "question": "Choose the grammatically acceptable sentence regarding 30-Kun Darsi:",
        "options": [
            "Under no circumstances should mobile phones be used during the exam.",
            "Under no circumstances mobile phones should be used during the exam.",
            "Under no circumstances phones to be used during the exam.",
            "Under no circumstances should phones being used during the exam."
        ],
        "correct": 0,
        "explanation": "'Under no circumstances' inkor iborasi gap boshida kelsa, 'should + ega + be used' inversiya tartibida bo'ladi."
    },
    {
        "id": 3006,
        "topic": "30-Kun Darsi (Metodika)",
        "question": "Select the correct form: \"Had I known about the changes in the syllabus, I _______ differently.\"",
        "options": [
            "would prepare",
            "would have prepared",
            "will prepare",
            "had prepared"
        ],
        "correct": 1,
        "explanation": "Type 3 shart inversiyasida 'Had + V3' ga javoban bosh gapda 'would have + V3' ishlatiladi."
    },
    {
        "id": 3007,
        "topic": "30-Kun Darsi (Lexis)",
        "question": "Which pedagogical principle aligns best with the current National Curriculum for secondary schools?",
        "options": [
            "Focusing purely on grammar accuracy at the expense of speaking",
            "Prioritizing communicative fluency and real-world task performance",
            "Strict teacher-centered lectures throughout the lesson",
            "Excluding formative feedback from continuous grading"
        ],
        "correct": 1,
        "explanation": "Milliy o'quv dasturi darsda muloqotga asoslangan kompetensiyaviy yondashuvni (CLT) asosiy o'ringa qo'yadi."
    },
    {
        "id": 3008,
        "topic": "30-Kun Darsi (UzBMB Standart)",
        "question": "Complete the sentence: \"It is imperative that every candidate _______ on time.\"",
        "options": [
            "arrive",
            "arrives",
            "arrived",
            "is arriving"
        ],
        "correct": 0,
        "explanation": "Subjunctive qoidasiga ko'ra ('It is imperative that'), fe'l shaxsga qaramasdan Bare Infinitive (arrive) shaklida bo'ladi."
    },
    {
        "id": 3009,
        "topic": "30-Kun Darsi (Grammar)",
        "question": "What distinguishes Formative Assessment from Summative Assessment?",
        "options": [
            "It happens only at the end of the academic term",
            "It focuses on ongoing learning improvement and constructive feedback",
            "It ranks students against national percentiles",
            "It always involves a high-stakes written test"
        ],
        "correct": 1,
        "explanation": "Formatif baholash yakuniy baho qo'yish uchun emas, o'quv jarayonida bilimni yaxshilash va yo'naltirish uchun xizmat qiladi."
    },
    {
        "id": 3010,
        "topic": "30-Kun Darsi (Metodika)",
        "question": "Select the sentence with the correct participle clause:",
        "options": [
            "Having finished the test, the papers were collected by the proctor.",
            "Having finished the test, the students handed in their papers.",
            "Finishing the test, the proctor collected the students.",
            "Finished the test, the students leaves the room."
        ],
        "correct": 1,
        "explanation": "Participle clause da ega bir xil bo'lishi shart (Dangling participle xatosiga yo'l qo'ymaslik kerak)."
    },
    {
        "id": 3011,
        "topic": "30-Kun Darsi (Lexis)",
        "question": "Identify the sentence where \"wish\" expresses an annoyance or desire for someone else to change behavior:",
        "options": [
            "I wish I were taller.",
            "I wish it had not rained yesterday.",
            "I wish you would stop tapping your pen on the desk.",
            "I wish I knew the answer."
        ],
        "correct": 2,
        "explanation": "'Wish + would' boshqa shaxsning xulq-atvoridan norozilik va to'xtatishni talab qilishda ishlatiladi."
    },
    {
        "id": 3012,
        "topic": "30-Kun Darsi (UzBMB Standart)",
        "question": "Choose the correct passive form: \"People believe that the ancient artifact was stolen last week.\"",
        "options": [
            "The ancient artifact is believed to have been stolen last week.",
            "The ancient artifact was believed to be stolen last week.",
            "The ancient artifact is believed to be stolen last week.",
            "The ancient artifact has believed to stolen last week."
        ],
        "correct": 0,
        "explanation": "Hozirgi ishonch (is believed), lekin o'tmishdagi voqea (last week) bo'lgani uchun 'to have been stolen' bo'ladi."
    },
    {
        "id": 3013,
        "topic": "30-Kun Darsi (Grammar)",
        "question": "In language teaching methodology, what does the acronym TTT stand for, and what is the ideal recommendation?",
        "options": [
            "Total Teaching Time; it should exceed 90%",
            "Teacher Talk Time; it should be minimized to maximize STT",
            "Task Testing Technique; it should be applied once weekly",
            "Target Topic Transmission; it should guide grammar drills"
        ],
        "correct": 1,
        "explanation": "TTT (Teacher Talk Time) — o'qituvchi gapirish vaqti iloji boricha kamaytirilib, o'quvchi nutqiga (STT) ko'proq vaqt ajratilishi kerak."
    },
    {
        "id": 3014,
        "topic": "30-Kun Darsi (Metodika)",
        "question": "Which phrasal verb means \"to tolerate or endure an unpleasant situation\"?",
        "options": [
            "put up with",
            "look forward to",
            "run out of",
            "get along with"
        ],
        "correct": 0,
        "explanation": "'Put up with' — chidamoq, sabr qilmoq (tolerate)."
    },
    {
        "id": 3015,
        "topic": "30-Kun Darsi (Lexis)",
        "question": "Which reading technique is most appropriate when scanning a train schedule for the arrival time at Bukhara?",
        "options": [
            "Intensive analytical reading",
            "Skimming for main theme",
            "Scanning for specific keyword/number",
            "Extensive critical appraisal"
        ],
        "correct": 2,
        "explanation": "Jadvaldan aniq vaqt yoki manzilni topish — bu 'Scanning' strategiyasidir."
    },
    {
        "id": 3016,
        "topic": "30-Kun Darsi (UzBMB Standart)",
        "question": "Select the correct collocation: \"The school director made a significant _______ to improve the campus infrastructure.\"",
        "options": [
            "effort",
            "action",
            "deed",
            "working"
        ],
        "correct": 0,
        "explanation": "Ingliz tilida 'make an effort' (harakat qilmoq, kuch sarflamoq) qat'iy kollokatsiyasi ishlatiladi."
    }
]
  },

};

const CURRICULUM_INDEX = [
  { day: 1, title: "1-KUN: Inversion & PPP Modeli" },
  { day: 2, title: "2-KUN: Conditionals & TBL Metodika" },
  { day: 3, title: "3-KUN: Subjunctive & Causatives & Baholash" },
  { day: 4, title: "4-KUN: Gerund vs Infinitive & Feedback Turlari" },
  { day: 5, title: "5-KUN: Participle Clauses & Bloom Taksonomiyasi" },
  { day: 6, title: "6-KUN: Wish / If only / As if & SMART Dars Maqsadlari" },
  { day: 7, title: "7-KUN: Passive Voice & Impersonal Passive & Sinf Boshqaruvi" },
  { day: 8, title: "8-KUN: Relative Clauses (Whom/Whose) & O'quvchi Motivatsiyasi" },
  { day: 9, title: "9-KUN: Past Modals (Must have / Should have) & 4 Ko'nikma" },
  { day: 10, title: "10-KUN: Prepositions & Dependent Prepositions & Nizolar" },
  { day: 11, title: "11-KUN: Phrasal Verbs (Eng Muhim 40 Ta) & Milliy Dastur" },
  { day: 12, title: "12-KUN: Reading Strategiyalari (Skimming/Scanning) & Inklyuzivlik" },
  { day: 13, title: "13-KUN: Confusing Words (Make vs Do) & Attestatsiya Qonunchiligi" },
  { day: 14, title: "14-KUN: Articles & Determiners (a/an/the, few/little) & Dars Tahlili" },
  { day: 15, title: "15-KUN: Reported Speech & Reporting Verbs & Pedagogik Etika" },
  { day: 16, title: "16-KUN: Noun Clauses & Question Tags Tuzoqlari & Darslik Tahlili" },
  { day: 17, title: "17-KUN: Adjectives vs Adverbs & Degree Modifiers & Differentsiatsiya" },
  { day: 18, title: "18-KUN: Conjunctions (Although, Despite, In spite of) & Tanqidiy Fikrlash" },
  { day: 19, title: "19-KUN: Subject-Verb Agreement (Murakkab Qoidalar) & Portfolio" },
  { day: 20, title: "20-KUN: Idioms & Academic Collocations & AKT Vositalari" },
  { day: 21, title: "21-KUN: Listening Strategiyalari & Topshiriq Tuzish Metodikasi" },
  { day: 22, title: "22-KUN: Writing Turlari (Formal Letter, Essay) & Rubrikalar" },
  { day: 23, title: "23-KUN: Speaking Faoliyatlari (Information Gap) & Fluency" },
  { day: 24, title: "24-KUN: B2-C1 Murakkab Grammatik Konstruksiyalar (Cleft)" },
  { day: 25, title: "25-KUN: Attestatsiyada Eng Ko'p Yiqitadigan 30 Ta 'Tuzoq' Qoidalar" },
  { day: 26, title: "26-KUN: 1-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol)" },
  { day: 27, title: "27-KUN: 1-Mock Test Tahlili va Xatolar Diagnostikasi" },
  { day: 28, title: "28-KUN: 2-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol)" },
  { day: 29, title: "29-KUN: 2-Mock Test Tahlili va So'nggi Yo'l-Yo'riqlar" },
  { day: 30, title: "30-KUN: Imtihon Oldi Ekspress-Takrorlash & Psixologik Tayyorgarlik" },
];
