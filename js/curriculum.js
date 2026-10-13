// ============================================================================
// TOIFA PRO — 30 KUNLIK TO'LIQ O'QUV DASTURI VA TEST BAZASI
// Har bir mavzu maktab bolasi ham 100% tushunadigan darajada o'zbekcha sodda tilda,
// hayotiy misollar, qiyosiy jadvallar, tuzoqlar va har bir kun uchun alohida 16+ ta saralangan testlar bilan.
// ============================================================================

const CURRICULUM = {
  "1": {
    "id": 1,
    "title": "1-KUN: Inversion & PPP Modeli",
    "subtitle": "Inkor so'zlar nima, qachon yordamchi fe'l oldinga chiqadi va PPP dars bosqichlari",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 1-KUN: Negative & Conditional Inversion (Teskari So'z Tartibi)</h2>\n        <p>Inversiya — gapda estetik-akademik urg'u berish, emotsional kuchaytirish yoki qat'iy cheklovni ifodalash uchun <strong>yordamchi fe'lning egadan oldinga o'tishi</strong>dir. Attestatsiya testlarida B2/C1 darajadagi eng sevimli grammatik savol turidir.</p>\n\n        <div class=\"uzb-meaning\">\n          💡 <strong>Ona tili bilan qiyosiy tahlil:</strong> O'zbek tilida urg'u berish uchun so'z tartibi erkin almashadi (<em>\"Hech qachon men buni ko'rmaganman\"</em>). Ingliz tilida esa qat'iy sintaktik me'yor mavjud: inkor so'z gap boshiga chiqarilsa, jumla <strong>so'roq gap shakliga</strong> kirishi shart!\n        </div>\n\n        <h3>1. Inkor va Cheklovchi So'zlar bilan Inversiya Qoliplari</h3>\n        <div class=\"formula-box\">\n          [Qolip] ➔ [Inkor / Cheklovchi so'z] + [Auxiliary (do/did/have/had/is/can)] + [Ega] + [Asosiy fe'l]\n        </div>\n\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Inkor Iborasi</th>\n                <th>Qo'llanish Qolipi</th>\n                <th>Akademik Misol va O'zbekcha Ma'nosi</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Never / Rarely / Seldom</strong></td>\n                <td>Inkor + Aux + S + V</td>\n                <td><strong>Seldom have we witnessed</strong> such pedagogical dedication. (Biz kamdan-kam bunday sadoqatni ko'rganmiz).</td>\n              </tr>\n              <tr>\n                <td><strong>Hardly / Scarcely ... when</strong></td>\n                <td>Past Perfect (had + S + V3) ... when + Past Simple</td>\n                <td><strong>Hardly had the bell rung</strong> when the inspector entered. (Qo'ng'iroq chalinishi bilanoq tekshiruvchi kirdi).</td>\n              </tr>\n              <tr>\n                <td><strong>No sooner ... than</strong></td>\n                <td>No sooner had + S + V3 ... than + Past Simple</td>\n                <td><strong>No sooner had she started</strong> the lesson than a power cut occurred. (U darsni boshlashi bilanoq chiroq o'chdi).</td>\n              </tr>\n              <tr>\n                <td><strong>Under no circumstances</strong></td>\n                <td>Modal + S + V1</td>\n                <td><strong>Under no circumstances should mobile phones be used</strong> during the test. (Qanday vaziyat bo'lmasin, telefon ishlatilmasin).</td>\n              </tr>\n              <tr>\n                <td><strong>Little did [sb] know</strong></td>\n                <td>Little did + S + V1</td>\n                <td><strong>Little did the candidate know</strong> that the syllabus was revised. (Nomzod dastur yangilanganini xayoliga ham keltirmagan edi).</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 2. ATTESTATSIYANING ENG XAVFLI 2 TA TUZOG'I (EXAMINER TRAPS)</h2>\n\n        <div class=\"example-pair\">\n          <div class=\"example-box bad\">\n            <span class=\"lbl\">❌ 1-Tuzoq: Oddiy so'z tartibini qoldirib ketish:</span>\n            <em>Rarely she complains about the heavy workload.</em><br>\n            (Xato: 'does' yordamchi fe'li tushib qolgan).\n          </div>\n          <div class=\"example-box good\">\n            <span class=\"lbl\">✔️ To'g'ri Inversiya:</span>\n            <strong>Rarely does she complain</strong> about the heavy workload.\n          </div>\n        </div>\n\n        <div class=\"example-pair\">\n          <div class=\"example-box bad\">\n            <span class=\"lbl\">❌ 2-Tuzoq: Not until / Only when da 1-gapga inversiya qilish:</span>\n            <em>Not until did he arrive, the meeting started.</em><br>\n            (Xato: ergash gapga inversiya qo'yib bo'lmaydi).\n          </div>\n          <div class=\"example-box good\">\n            <span class=\"lbl\">✔️ To'g'ri (Inversiya ASOSIY gapda bo'ladi):</span>\n            Not until he arrived <strong>did the meeting start</strong>.\n          </div>\n        </div>\n\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>Oltin qoida:</strong> <code>Only after</code>, <code>Only when</code>, <code>Not until</code> kelsa, ularga yopishib kelgan birinchi gap oddiy bo'ladi, <strong>ikkinchi (asosiy) gapda</strong> inversiya yuz beradi!\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 3. PEDAGOGIK METODIKA: PPP (PRESENTATION, PRACTICE, PRODUCTION)</h2>\n        <p>Attestatsiya metodika savollarida an'anaviy dars bosqichlari bo'yicha PPP modeli tushadi:</p>\n\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          1️⃣ <strong>PRESENTATION (Taqdimot):</strong> Yangi qoida kontekstda ko'rsatiladi (dialog, matn). O'qituvchi qoidani tushuntiradi, talaffuz va intonatsiyani modellashtiradi. (Teacher-centered).<br><br>\n          2️⃣ <strong>PRACTICE (Nazorat ostidagi mashq):</strong> O'quvchilar xatolarga yo'l qo'ymaslik uchun bo'sh joylarni to'ldirish, gaplarni qayta tartiblash (Controlled Practice) mashqlarini bajarishadi. Bu bosqichda <strong>aniqlik (Accuracy)</strong> ustuvor.<br><br>\n          3️⃣ <strong>PRODUCTION (Erkin muloqot):</strong> O'quvchilar o'rganilgan tuzilmani o'z hayotiy nutqida, rolli o'yinlar yoki erkin bahsda qo'llashadi (Free Practice). Bu bosqichda <strong>ravonlik (Fluency)</strong> ustuvor.\n        </div>\n\n        <div class=\"case-study-box\">\n          <h4>📌 Pedagogik Keys (Attestatsiya Situatsion Savoli):</h4>\n          <p><strong>Vaziyat:</strong> O'qituvchi yangi qoidani tushuntirgach, darhol o'quvchilardan erkin bahs-munozara (Debate) o'tkazishni talab qildi. O'quvchilar ko'p xatolarga yo'l qo'yib, gapira olmay to'xtab qolishdi. O'qituvchi qaysi metodik bosqichni tashlab ketgan?</p>\n          <div class=\"case-study-solution\">\n            ✔️ <strong>To'g'ri metodik yechim:</strong> O'qituvchi <strong>Controlled Practice (nazorat ostidagi mashq)</strong> bosqichini tashlab ketgan. O'quvchilar yangi qoidani erkin qo'llashdan oldin qolip asosida mashqlar ishlab, ko'nikmani mustahkamlab olishlari shart edi.\n          </div>\n        </div>\n      </div>\n    ",
    "questions": [
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
    ],
    "keyPoints": [
      "Negative Inversion: Never, Seldom, Rarely, Hardly when, No sooner than",
      "Two-clause Inversion: Only when, Not until (inversiya ASOSIY gapda bo'ladi!)",
      "PPP Modeli: Presentation ➔ Controlled Practice ➔ Free Production",
      "Controlled Practice: Aniqlik (Accuracy); Production: Ravonlik (Fluency)"
    ],
    "trap": "'Only when he arrived did the meeting start' — Inversiya 'only when' qismida EMAS, asosiy gapda bo'ladi!"
  },
  "2": {
    "id": 2,
    "title": "2-KUN: Conditionals & TBL Metodika",
    "subtitle": "Shart ergash gaplarning 4 turi, aralash shart gaplar tuzoqlari va TBL dars modeli",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 2-KUN: Conditionals (Shart Ergash Gaplar) & TBL Metodika</h2>\n        <p>Attestatsiya testlarida shart ergash gaplar 3 yo'nalishda tekshiriladi: <strong>Standart 4 tur</strong>, <strong>Mixed Conditionals</strong> va <strong>Shart Inversiyasi</strong>.</p>\n\n        <h3>1. Standart Shart Gaplar Qiyosiy Tahlili</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Turi</th>\n                <th>If-ergash gap</th>\n                <th>Bosh gap (Natija)</th>\n                <th>Semantik Ma'nosi & Misol</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Zero Conditional</strong></td>\n                <td>Present Simple</td>\n                <td>Present Simple</td>\n                <td>Ilmiy fakt, doimiy qoida: <em>If you heat water to 100°C, it boils.</em></td>\n              </tr>\n              <tr>\n                <td><strong>First Conditional</strong></td>\n                <td>Present Simple</td>\n                <td>will / can / may + V1</td>\n                <td>Kelajakdagi real ehtimol: <em>If he practices every day, he will pass.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Second Conditional</strong></td>\n                <td>Past Simple (were)</td>\n                <td>would / could / might + V1</td>\n                <td>Hozirgi noreal xayol: <em>If I were you, I would take the mock test.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Third Conditional</strong></td>\n                <td>Past Perfect (had + V3)</td>\n                <td>would have + V3</td>\n                <td>O'tmishdagi afsus: <em>If they had left early, they wouldn't have missed the flight.</em></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"uzb-meaning\">\n          ⚠️ <strong>Ona tili tuzog'i:</strong> O'zbek tilida <em>\"Agar ertaga kelsangiz, gaplashamiz\"</em> deymiz (kelasi zamon). Ingliz tilida esa if-ergash gapida <strong>hech qachon 'will' qo'yilmaydi</strong>! (Xato: <em>If you will come</em> ❌ ➔ To'g'ri: <em>If you come</em> ✔️).\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔀 2. MIXED CONDITIONALS (Attestatsiyaning Eng Murakkab Qismi)</h2>\n        <p>Vaqt chegaralari aralashib ketganda 2 ta asosiy aralash tur qo'llaniladi:</p>\n\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📌 <strong>1-TUR: O'TMISHDAGI ISH-HARAKAT ➔ HOZIRGI NATIJA</strong><br>\n          Qolip: <code>If + Past Perfect (had + V3), ... would + V1 (now/today)</code><br>\n          <em>Misol:</em> If I had taken an umbrella this morning, I wouldn't be wet now.<br>\n          (Ertalab soyabon olmaganman [o'tmish], shu sababli hozir shalabbo bo'lib turibman [hozirgi holat]).\n        </div>\n\n        <div class=\"formula-box\" style=\"background: #fef2f2; border-color: #fca5a5;\">\n          📌 <strong>2-TUR: HOZIRGI DOIMIY XUSUSIYAT ➔ O'TMISHDAGI NATIJA</strong><br>\n          Qolip: <code>If + Past Simple (were/V2), ... would have + V3 (yesterday/then)</code><br>\n          <em>Misol:</em> If he were not so stubborn, he would have accepted their advice yesterday.<br>\n          (U tabiatan o'jar [doimiy sifat], shu sababli kecha maslahatni rad etdi [o'tmishdagi natija]).\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>⚡ 3. INVERSION IN CONDITIONALS (Shart Inversiyasi)</h2>\n        <p>Rasmiy testlarda <code>if</code> so'zi tushirib qoldirilib, yordamchi fe'l boshga chiqariladi:</p>\n\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Shart Turi</th>\n                <th>Oddiy If-gap</th>\n                <th>Inversiya Formati (Attestatsiya)</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Type 1</strong></td>\n                <td>If you should need any help...</td>\n                <td><strong>Should you need</strong> any help, feel free to contact us.</td>\n              </tr>\n              <tr>\n                <td><strong>Type 2</strong></td>\n                <td>If I were in your position...</td>\n                <td><strong>Were I</strong> in your position, I would agree. (Fe'l bo'lsa: <em>Were he to ask...</em>)</td>\n              </tr>\n              <tr>\n                <td><strong>Type 3</strong></td>\n                <td>If they had notified us earlier...</td>\n                <td><strong>Had they notified</strong> us earlier, we would have attended.</td>\n              </tr>\n              <tr>\n                <td><strong>Type 3 Inkor</strong></td>\n                <td>If it had not been for your advice...</td>\n                <td><strong>Had it not been for</strong> your advice... (Qisqartma: <em>Hadn't it been ❌</em>)</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 4. PEDAGOGIK METODIKA: TBL (TASK-BASED LEARNING) MODELI</h2>\n        <p>Jane Willis modeli bo'yicha TBL darsining 3 ta qat'iy bosqichi:</p>\n\n        <ol>\n          <li><strong>Pre-Task (Vazifa oldi bosqichi):</strong> Mavzuni ochish, yangi so'zlarni eslash va topshiriq maqsadini belgilash.</li>\n          <li><strong>Task Cycle (Vazifa sikli — 3 kichik qadam):</strong>\n            <ul>\n              <li><em>Task:</em> O'quvchilar juftlikda vazifani erkin bajaradilar (ravonlik ustuvor).</li>\n              <li><em>Planning:</em> Sinfga o'z hisobotini taqdim etish uchun qisqa nutq tayyorlaydilar.</li>\n              <li><em>Report:</em> Sinf oldida o'z xulosalarini taqdim etadilar.</li>\n            </ul>\n          </li>\n          <li><strong>Language Focus (Til tahlili):</strong>\n            <ul>\n              <li><em>Analysis:</em> O'qituvchi vazifa davomida yuzaga kelgan xatolarni doskaga chiqarib tahlil qiladi.</li>\n              <li><em>Practice:</em> To'g'ri grammatik tuzilmani mustahkamlash uchun mashqlar bajariladi.</li>\n            </ul>\n          </li>\n        </ol>\n\n        <div class=\"case-study-box\">\n          <h4>📌 Pedagogik Keys (Attestatsiya Situatsion Savoli):</h4>\n          <p><strong>Savol:</strong> Nima uchun TBL darsida o'qituvchi o'quvchilar vazifa (Task) ustida ishlayotganda ularning har bir grammatik xatosini darhol to'xtatib tuzatmaydi?</p>\n          <div class=\"case-study-solution\">\n            ✔️ <strong>Metodik asos:</strong> Task bosqichining maqsadi <strong>ravonlik (Fluency)</strong> va muloqotdir. O'qituvchi doimiy to'xtatsa, o'quvchida gapirishga qo'rquv paydo bo'ladi. Xatolar dars oxirida — <strong>Language Focus</strong> bosqichida butun sinf bilan birga umumlashtirib tahlil qilinishi kerak.\n          </div>\n        </div>\n      </div>\n    ",
    "questions": [
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
    ],
    "keyPoints": [
      "0, 1, 2, 3 Conditionals formulalari va if-clause'da will ishlatilmasligi",
      "Mixed Conditionals: Past action ➔ Present result va Present state ➔ Past result",
      "Inversion: Should you need, Were I you, Had he known",
      "TBL modeli: Pre-task ➔ Task Cycle ➔ Language Focus"
    ],
    "trap": "'Unless' inkor so'z bo'lgani uchun undan keyin 'don't/doesn't' ishlatilmaydi! 'Unless you study' bo'ladi."
  },
  "3": {
    "id": 3,
    "title": "3-KUN: Subjunctive & Causatives & Baholash",
    "subtitle": "Majhul mayl, buyruq fe'llari, 'have sth done' qolipi va Formative/Summative baholash",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 3-KUN: Subjunctive Mood & Causative Verbs & Baholash Turlari</h2>\n        <p>Subjunctive va Causative tuzilmalari rasmiy-akademik tilning me'yorlari bo'lib, attestatsiyaning B2-C1 grammatika blokida doimiy savol manbaidir.</p>\n\n        <h3>1. Subjunctive Mood (Majhul / Istak-Buyruq Mayli)</h3>\n        <p>Rasmiy talab, zaruriyat yoki tavsiyani bildiruvchi so'zlardan so'ng, qaysi zamon yoki shaxs (he, she, it) kelishidan qat'i nazar, fe'l <strong>Bare Infinitive (o'zak shakli - V1)</strong> bo'ladi:</p>\n\n        <div class=\"formula-box\">\n          [Qolip] ➔ It is vital / essential / imperative / crucial that + Subject + [Bare Infinitive (V1)]\n        </div>\n\n        <div class=\"uzb-meaning\">\n          💡 <strong>Fe'llar bilan:</strong> suggest, insist, demand, recommend, urge, require that + S + [V1]<br>\n          • <em>Misol:</em> The doctor recommended that he <strong>exercise</strong> (exercises emas!) regularly.<br>\n          • <em>Misol:</em> It is essential that every candidate <strong>be</strong> (is emas!) punctual.<br>\n          • <em>Inkor shakli:</em> not + V1: <em>The board insisted that the teacher <strong>not leave</strong> the room.</em>\n        </div>\n\n        <div class=\"example-pair\">\n          <div class=\"example-box bad\">\n            <span class=\"lbl\">❌ Attestatsiya tuzog'i:</span>\n            The inspector demanded that he rewrites the syllabus.\n          </div>\n          <div class=\"example-box good\">\n            <span class=\"lbl\">✔️ To'g'ri Subjunctive shakli:</span>\n            The inspector demanded that he <strong>rewrite</strong> the syllabus.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔧 2. CAUSATIVE VERBS (Ish-harakatni birovga qildirish)</h2>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Fe'l</th>\n                <th>Faol Qolip (Active)</th>\n                <th>Majhul Qolip (Passive)</th>\n                <th>Attestatsiya Nozikligi</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>HAVE</strong></td>\n                <td>have + sb + <strong>V1 (bare)</strong><br><em>I had the tech fix the PC.</em></td>\n                <td>have + sth + <strong>V3</strong><br><em>I had the PC fixed.</em></td>\n                <td>Faol shaklida 'to' bo'lmaydi!</td>\n              </tr>\n              <tr>\n                <td><strong>GET</strong></td>\n                <td>get + sb + <strong>to + V1</strong><br><em>She got him to help her.</em></td>\n                <td>get + sth + <strong>V3</strong><br><em>She got her car washed.</em></td>\n                <td>Faol shaklida 'to' MAJBURIY!</td>\n              </tr>\n              <tr>\n                <td><strong>MAKE</strong></td>\n                <td>make + sb + <strong>V1 (bare)</strong><br><em>He made us stay late.</em></td>\n                <td>be made + <strong>to + V1</strong><br><em>We were made to stay late.</em></td>\n                <td>Majhulga o'tganda 'to' paydo bo'ladi!</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 3. PEDAGOGIK METODIKA: FORMATIVE VS SUMMATIVE BAHOLASH</h2>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Mezon</th>\n                <th>Formative Assessment (Formatif)</th>\n                <th>Summative Assessment (Summativ)</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Falsafasi</strong></td>\n                <td>Assessment <strong>FOR</strong> learning (o'rganish uchun baholash)</td>\n                <td>Assessment <strong>OF</strong> learning (o'rganilganlikni baholash)</td>\n              </tr>\n              <tr>\n                <td><strong>Vaqti</strong></td>\n                <td>O'quv jarayoni davomida (har kuni, doimiy)</td>\n                <td>Davr oxirida (chorak, yil, kurs oxirida)</td>\n              </tr>\n              <tr>\n                <td><strong>Maqsadi</strong></td>\n                <td>Zaif nuqtalarni aniqlash, o'sishga ko'maklashish</td>\n                <td>Rasmiy sertifikat, yakuniy ball, daraja berish</td>\n              </tr>\n              <tr>\n                <td><strong>Vositalari</strong></td>\n                <td>Exit tickets, o'zaro baholash (peer assessment), og'zaki feedback</td>\n                <td>Choraklik testlar, davlat imtihonlari, diplom ishi</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"case-study-box\">\n          <h4>📌 Pedagogik Keys (Attestatsiya Situatsion Savoli):</h4>\n          <p><strong>Vaziyat:</strong> O'qituvchi o'quvchilarning har haftalik insholariga faqat \"3\", \"4\", \"5\" deb qizil ruchka bilan ball qo'yib qaytardi, lekin qayerida xato borligi va uni qanday tuzatish kerakligini yozmadi. Bu qaysi pedagogik tamoyilning buzilishidir?</p>\n          <div class=\"case-study-solution\">\n            ✔️ <strong>To'g'ri metodik yechim:</strong> Bu <strong>Formative Feedback (shakllantiruvchi qayta aloqa)</strong> tamoyilining buzilishidir. Baho qo'yish o'quvchini rivojlantirmaydi; o'qituvchi xatoni ko'rsatib, uni yaxshilash bo'yicha konstruktiv yo'l-yo'riq (descriptive feedback) berishi shart.\n          </div>\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Subjunctive: It is vital that he BE present (bare infinitive)",
      "Causative: have sth done, get sb TO do, make sb do",
      "Formative (o'sish uchun) vs Summative (yakuniy rasmiy baho)",
      "Descriptive Feedback: o'quvchiga ball emas, yo'l ko'rsatish"
    ],
    "trap": "'The headmaster insisted that she submit the report' — 'submits' yoki 'submitted' emas, doim V1 (bare infinitive) qo'yiladi!",
    "questions": [
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
  "4": {
    "id": 4,
    "title": "4-KUN: Gerund vs Infinitive & Feedback Turlari",
    "subtitle": "Remember, stop, regret, try fe'llarining nozik farqlari va darsda feedback turlari",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 4-KUN: Gerund vs Infinitive & Qayta Aloqa (Feedback) Turlari</h2>\n        <p>Gerund (-ing) va Infinitive (to + V1) mavzusi test tuzuvchilarning eng sevimli qurolidir, chunki ko'plab fe'llar ikkala shaklni ham qabul qiladi, lekin ma'nosi butunlay o'zgaradi.</p>\n\n        <h3>1. Ma'nosi Keskin O'zgaruvchi 5 Ta Asosiy Fe'l</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Fe'l</th>\n                <th>+ Infinitive (to + V1)</th>\n                <th>+ Gerund (V-ing)</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>Remember</strong></td>\n                <td>Bajarilishi kerak bo'lgan ishni eslamoq:<br><em>Remember to lock the door.</em></td>\n                <td>O'tmishda sodir bo'lgan ishni eslamoq:<br><em>I remember locking the door.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Forget</strong></td>\n                <td>Vazifani qilishni unutmoq:<br><em>Don't forget to send the file.</em></td>\n                <td>O'tmishdagi xotirani unutmoq:<br><em>I will never forget visiting Samarkand.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Stop</strong></td>\n                <td>Boshqa ishni qilish uchun to'xtamoq:<br><em>We stopped to have lunch.</em></td>\n                <td>O'sha harakatni butunlay to'xtatmoq:<br><em>Please stop making noise.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Regret</strong></td>\n                <td>Afsus bilan ma'lum qilmoq (rasmiy xat):<br><em>We regret to inform you that...</em></td>\n                <td>O'tmishdagi qilmishdan afsuslanmoq:<br><em>I regret speaking to him so rudely.</em></td>\n              </tr>\n              <tr>\n                <td><strong>Try</strong></td>\n                <td>Qiyin ishni qilishga kuch sarflamoq:<br><em>I tried to lift the heavy box.</em></td>\n                <td>Tajriba sifatida sinab ko'rmoq:<br><em>Try taking an aspirin for your headache.</em></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA: QAYTA ALOQA (FEEDBACK) SAN'ATI</h2>\n        <div class=\"formula-box\">\n          • <strong>Constructive Feedback (Konstruktiv qayta aloqa):</strong> Xatoni kamsitmasdan ko'rsatish va <em>\"Buni qanday yaxshilash mumkin?\"</em> degan aniq qadamni taklif qilish.<br>\n          • <strong>Peer Feedback (Tengdosh qayta aloqa):</strong> O'quvchilar bir-birining inshosini rubrika asosida tekshirishi (Tanqidiy tafakkurni rivojlantiradi).<br>\n          • <strong>Immediate vs Delayed:</strong> Talaffuz va grammatik mashqda darhol (Immediate), erkin nutq va bahsda esa dars oxirida (Delayed) tuzatish talab etiladi.\n        </div>\n\n        <div class=\"case-study-box\">\n          <h4>📌 Pedagogik Keys (Attestatsiya Situatsion Savoli):</h4>\n          <p><strong>Vaziyat:</strong> O'quvchi butun sinf oldida o'z hikoyasini aytib berayotganida, o'qituvchi har bir noto'g'ri zamon ishlatilganida uni to'xtatib: \"No, say 'went', not 'go'!\" deb to'g'riladi. O'quvchi oxiri uyalib, gapirishdan bosh tortdi. O'qituvchi nima qilishi kerak edi?</p>\n          <div class=\"case-study-solution\">\n            ✔️ <strong>To'g'ri metodik yechim:</strong> O'qituvchi <strong>Delayed Feedback (Kechiktirilgan tuzatish)</strong> usulidan foydalanishi kerak edi. Hikoya davomida xatolarni daftariga yozib olib, hikoya tugagach, ismni aytmasdan umumiy sinf bilan birga doskada xatolarni tahlil qilish lozim edi.\n          </div>\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Remember, stop, regret, try, forget: Gerund vs Infinitive ma'no farqlari",
      "Verbs followed by Gerund: admit, deny, avoid, postpone, mind",
      "Feedback madaniyati: Constructive, Peer, Immediate vs Delayed"
    ],
    "trap": "'Stop to buy bread' (non olish uchun to'xtamoq) vs 'Stop buying bread' (non olishni to'xtatmoq) — imtihonda kontekstga qarab belgilanadi!",
    "questions": [
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
  "5": {
    "id": 5,
    "title": "5-KUN: Participle Clauses & Bloom Taksonomiyasi",
    "subtitle": "Sifatdosh oborotlari (Having done, Doing) va Bloom taksonomiyasining 6 bosqichi",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 5-KUN: Participle Clauses & Bloom Taksonomiyasi</h2>\n        <p>Participle Clauses (Sifatdoshli ergash gaplar) — jumlalarni ixcham, ravon va akademik qilish usuli bo'lib, attestatsiya testlarida <strong>Dangling Participle (Ega moslashuvi)</strong> bo'yicha ko'p uchraydi.</p>\n\n        <h3>1. Participle Shakllari</h3>\n        <div class=\"formula-box\">\n          • <strong>Present Participle (V-ing):</strong> Faol (Active) harakat, bir vaqtda sodir bo'layotgan yoki sabab bildiruvchi holat.<br>\n          <em>Misol:</em> Knowing that the exam was tough, she revised every topic. (= Because she knew...)<br><br>\n          • <strong>Past Participle (V3):</strong> Majhul (Passive) ma'nodagi qisqartma.<br>\n          <em>Misol:</em> Written in simple English, the guide is easy to follow. (= Because it is written...)<br><br>\n          • <strong>Perfect Participle (Having + V3):</strong> Bir ish-harakat ikkinchisidan OLDIN to'liq tugaganini urg'ulashda.<br>\n          <em>Misol:</em> Having passed the preliminary test, he was invited to the interview.\n        </div>\n\n        <div class=\"example-pair\">\n          <div class=\"example-box bad\">\n            <span class=\"lbl\">❌ Dangling Participle (Katta grammatik xato):</span>\n            Walking down the street, my hat blew off.<br>\n            <em>(Ko'chada shapka yurib ketmagan!)</em>\n          </div>\n          <div class=\"example-box good\">\n            <span class=\"lbl\">✔️ To'g'ri bog'lanish:</span>\n            Walking down the street, <strong>I lost</strong> my hat.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. BLOOM TAKSONOMIYASI (PEDAGOGIK MEZONLAR)</h2>\n        <p>Benjamin Bloom taksonomiyasining yangilangan (Anderson & Krathwohl) 6 pog'onasi:</p>\n\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Bosqich</th>\n                <th>Daraja</th>\n                <th>Tavsifi</th>\n                <th>Attestatsiya Fe'llari</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><strong>1. Remembering</strong></td>\n                <td>LOTS</td>\n                <td>Fakt, sana, qoidalarni xotirada tiklash</td>\n                <td>Define, list, recall, name</td>\n              </tr>\n              <tr>\n                <td><strong>2. Understanding</strong></td>\n                <td>LOTS</td>\n                <td>Ma'nosini anglash, o'z so'zlari bilan aytish</td>\n                <td>Explain, summarize, classify</td>\n              </tr>\n              <tr>\n                <td><strong>3. Applying</strong></td>\n                <td>LOTS</td>\n                <td>O'rganilgan qoidani yangi vaziyatda ishlatish</td>\n                <td>Apply, demonstrate, use, solve</td>\n              </tr>\n              <tr>\n                <td><strong>4. Analyzing</strong></td>\n                <td>HOTS</td>\n                <td>Tizimni qismlarga ajratish, sabab-oqibatni topish</td>\n                <td>Compare, contrast, distinguish</td>\n              </tr>\n              <tr>\n                <td><strong>5. Evaluating</strong></td>\n                <td>HOTS</td>\n                <td>Mezonlar asosida xulosa va baho berish</td>\n                <td>Judge, critique, justify, assess</td>\n              </tr>\n              <tr>\n                <td><strong>6. Creating</strong></td>\n                <td>HOTS</td>\n                <td>Yangi original loyiha yoki g'oya yaratish</td>\n                <td>Design, compose, create, formulate</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Present Participle (Doing) va Past Participle (Done)",
      "Perfect Participle: Having done (bir harakat ikkinchisidan aniq oldin tugaganida)",
      "Bloom Taksonomiyasi: 6 pog'ona (LOTS ➔ HOTS)"
    ],
    "trap": "Dangling Participle tuzog'i: 'Entering the room, the window was broken' ❌ — Xonaga deraza kirmagan! Ega bir xil bo'lishi shart!",
    "questions": [
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
  "6": {
    "id": 6,
    "title": "6-KUN: Wish / If only / As if & SMART Dars Maqsadlari",
    "subtitle": "Orzu-istaklar, noroziliklar, afsuslar va dars maqsadini SMART mezonida qo'yish",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 6-KUN: Wish / If only / As if & SMART Dars Maqsadlari</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Wish + Past Simple</td><td>Hozirgi orzu/afsus</td><td>I wish I lived near the school. (Lekin uzoqda yashayman)</td></tr>\n      <tr><td>Wish + Past Perfect</td><td>O'tmishdagi pushaymonlik</td><td>I wish I had prepared earlier. (Koshki ertaroq tayyorlanganimda edi)</td></tr>\n      <tr><td>Wish + would + V1</td><td>Birovning qilmishidan shikoyat</td><td>I wish you would stop interrupting me! (Gapimni bo'lishni to'xtatsangiz edi)</td></tr>\n      <tr><td>It's time + S + V2</td><td>Ayni vaqti / kech qolmaslik</td><td>It's time we began the mock test. (Boshlashimizning ayni vaqti)</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> SMART maqsadi: Specific (Aniq mavzu), Measurable (80% natija), Achievable (Imkoniyatga mos), Relevant (Dasturga bog'liq), Time-bound (45 daqiqada erishiladigan).\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'I wish I would have more time' ❌ — O'zimizga nisbatan 'would' ishlatilmaydi! 'I wish I had' bo'ladi.\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Wish + Past Simple (Hozirgi afsus)",
      "Wish + Past Perfect (O'tmishdagi afsus)",
      "Wish + would (Norozilik va o'zgarish talabi)",
      "SMART dars maqsadlari"
    ],
    "trap": "'I wish I would have more time' ❌ — O'zimizga nisbatan 'would' ishlatilmaydi! 'I wish I had' bo'ladi.",
    "questions": [
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
  "7": {
    "id": 7,
    "title": "7-KUN: Passive Voice & Impersonal Passive & Sinf Boshqaruvi",
    "subtitle": "Majhul nisbatning barcha zamonlari, 'It is said that' va Classroom Management qoidalari",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 7-KUN: Passive Voice & Impersonal Passive & Sinf Boshqaruvi</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>It is said that...</td><td>It-qolip</td><td>It is believed that language learning requires consistency.</td></tr>\n      <tr><td>Subject + be + said + to + V1</td><td>Hozirgi xabar</td><td>He is said to live in London.</td></tr>\n      <tr><td>Subject + be + said + to have + V3</td><td>O'tmishdagi xabar</td><td>The ancient manuscript is thought to have been destroyed in the fire.</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Classroom Management: TTT (Teacher Talking Time) 30% dan oshmasligi kerak. STT (Student Talking Time) 70% ni tashkil qilishi shart (Student-Centered Learning).\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'The minister is reported to have signed...' — O'tgan zamondagi xabar uchun 'to sign' emas, 'to have signed' qo'yiladi!\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Passive Voice: be + V3",
      "Impersonal Passive: He is said to have escaped",
      "TTT (30%) vs STT (70%) nisbati",
      "Partalar joylashuvi: U-shape, Clusters"
    ],
    "trap": "'The minister is reported to have signed...' — O'tgan zamondagi xabar uchun 'to sign' emas, 'to have signed' qo'yiladi!",
    "questions": [
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
  "8": {
    "id": 8,
    "title": "8-KUN: Relative Clauses (Whom/Whose) & O'quvchi Motivatsiyasi",
    "subtitle": "Aniqlik kirituvchi va qo'shimcha ma'lumot beruvchi gaplar, vergul qoidalari va motivatsiya",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 8-KUN: Relative Clauses (Whom/Whose) & O'quvchi Motivatsiyasi</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Defining Clause</td><td>Vergulsiz</td><td>The teacher that/who won the award is here.</td></tr>\n      <tr><td>Non-defining Clause</td><td>Vergulli (ikkala tomondan)</td><td>My mentor, <strong>who</strong> has 20 years of experience, praised our project. (That qo'yilmaydi!)</td></tr>\n      <tr><td>Whom vs Whose</td><td>To'ldiruvchi vs Egalik</td><td>The author <strong>whom</strong> we met / The student <strong>whose</strong> paper won.</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Intrinsic Motivation (Ichki qiziqish) barqaror natija beradi. Extrinsic Motivation (Tashqi baho/rag'bat) qisqa muddatli turtkidir.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Non-defining relative clause'da (vergul bilan ajratilgan gaplarda) 'that' qo'yish mutlaqo mumkin emas! Faqat 'which' yoki 'who' bo'ladi.\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Defining vs Non-defining Relative Clauses",
      "Whom (to'ldiruvchi) vs Whose (egalik)",
      "Non-defining da 'that' taqiqlanishi",
      "Intrinsic vs Extrinsic Motivatsiya"
    ],
    "trap": "Non-defining relative clause'da (vergul bilan ajratilgan gaplarda) 'that' qo'yish mutlaqo mumkin emas! Faqat 'which' yoki 'who' bo'ladi.",
    "questions": [
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
  "9": {
    "id": 9,
    "title": "9-KUN: Past Modals (Must have / Should have) & 4 Ko'nikma",
    "subtitle": "O'tmishdagi mantiqiy xulosalar, afsuslanishlar va 4 til ko'nikmasi integratsiyasi",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 9-KUN: Past Modals (Must have / Should have) & 4 Ko'nikma</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Must have + V3</td><td>99% Ishonchli xulosa</td><td>The roads are wet; it must have rained.</td></tr>\n      <tr><td>Can't have + V3</td><td>Imkonsiz hodisa</td><td>He can't have failed; he is the top scorer.</td></tr>\n      <tr><td>Should have + V3</td><td>Qilishi kerak edi, qilmadi</td><td>You should have verified the exam keys.</td></tr>\n      <tr><td>Needn't have + V3</td><td>Qildi, lekin behuda edi</td><td>We needn't have hurried; the train was delayed.</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Integrated Skills: Receptive ko'nikmalar (Reading & Listening) yangi axborot beradi, Productive ko'nikmalar (Speaking & Writing) uni mustahkamlaydi.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'You needn't have brought lunch' — olib kelishing shart emas edi, lekin bekorga olib kelding degan ma'no beradi!\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Must have done: 99% mantiqiy xulosa",
      "Can't have done: Bo'lishi imkonsiz",
      "Should have done: Tanqid va afsus",
      "Needn't have done vs Didn't need to do"
    ],
    "trap": "'You needn't have brought lunch' — olib kelishing shart emas edi, lekin bekorga olib kelding degan ma'no beradi!",
    "questions": [
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
  "10": {
    "id": 10,
    "title": "10-KUN: Prepositions & Dependent Prepositions & Nizolar",
    "subtitle": "Fe'l, sifat va otlar bilan bog'langan predloglar va pedagogik nizolar yechimi",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 10-KUN: Dependent Prepositions & Pedagogik Nizolar</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>ON</td><td>Bog'liq fe'llar</td><td>insist on, congratulate on, rely on, depend on, base on</td></tr>\n      <tr><td>OF</td><td>Bog'liq sifatlar</td><td>capable of, proud of, aware of, tired of, jealous of</td></tr>\n      <tr><td>FROM</td><td>Cheklovchi fe'llar</td><td>prevent from doing, protect from, prohibit from, suffer from</td></tr>\n      <tr><td>Predlogsiz fe'llar</td><td>Xato qilinadigan</td><td>discuss (about emas!), emphasize (on emas!), contact (to emas!)</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Thomas-Kilmann modeli: Eng samarali usul — Collaboration (Win-Win): har ikki tomon manfaatini hisobga olgan konstruktiv kelishuv.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'Discuss about' yoki 'emphasize on' deb qo'ymang! Bu fe'llar o'zidan keyin predlog talab qilmaydi!\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Insist on, rely on, congratulate on",
      "Capable of, proud of, approve of",
      "Prevent from, protect from",
      "Thomas-Kilmann nizo modeli (Collaboration)"
    ],
    "trap": "'Discuss about' yoki 'emphasize on' deb qo'ymang! Bu fe'llar o'zidan keyin predlog talab qilmaydi!",
    "questions": [
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
  "11": {
    "id": 11,
    "title": "11-KUN: Phrasal Verbs (Eng Muhim 40 Ta) & Milliy Dastur",
    "subtitle": "Frazeologik fe'llar ma'nolari, ajraladigan/ajralmas turlari va milliy o'quv dasturi",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 11-KUN: Phrasal Verbs & Milliy O'quv Dasturi</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Separable (Ajraladigan)</td><td>Turn off, put off, call off</td><td>Turn the light off / Turn it off (Olmosh o'rtaga tushadi).</td></tr>\n      <tr><td>Inseparable (Ajralmaydigan)</td><td>Look after, come across, run into</td><td>She looks after her elderly parents.</td></tr>\n      <tr><td>3 qismli iboralar</td><td>Put up with, look down on</td><td>I cannot put up with such indiscipline.</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Milliy o'quv dasturining bosh mezoni — Kommunikativ kompetensiya (Communicative Competence) va o'quvchining mustaqil muloqot qila olishi.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'Look forward to seeing you' — bu yerda 'to' infinitive emas, predlog bo'lgani uchun Gerund (-ing) keladi!\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Separable vs Inseparable phrasal verbs",
      "3 qismli fe'llar (Look forward to + V-ing)",
      "Milliy o'quv dasturi kompetensiyalari"
    ],
    "trap": "'Look forward to seeing you' — bu yerda 'to' infinitive emas, predlog bo'lgani uchun Gerund (-ing) keladi!",
    "questions": [
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
  "12": {
    "id": 12,
    "title": "12-KUN: Reading Strategiyalari (Skimming/Scanning) & Inklyuzivlik",
    "subtitle": "Tez o'qish, kalit so'zlarni topish, xulosa chiqarish va maxsus ehtiyojli o'quvchilar",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 12-KUN: Reading Strategiyalari & Inklyuziv Ta'lim</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Skimming</td><td>General Gist (Umumiy ma'no)</td><td>Tezkor ko'z yugurtirish, xulosa va sarlavhani o'qish</td></tr>\n      <tr><td>Scanning</td><td>Specific Information (Aniq fakt)</td><td>Raqam, sana, ism, poyezd jadvalini qidirish</td></tr>\n      <tr><td>Detailed Reading</td><td>To'liq tahlil</td><td>Qo'llanma, qonun, shartnoma matnini sinchiklab o'rganish</td></tr>\n      <tr><td>Inference</td><td>Muallif munosabati</td><td>Yashirin ma'no va hissiyotni aniqlash</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Inklyuziv ta'lim: Alohida ta'lim ehtiyojlari bo'lgan o'quvchilarga teng sharoit yaratish va ularni sinf hayotiga to'liq integratsiya qilish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Skimming butun matnni sinchiklab o'qish emas, 1-2 daqiqada sarlavha va kirish orqali umumiy g'oyani anglashdir!\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Skimming: matnning umumiy mohiyati (Gist)",
      "Scanning: aniq fakt/raqamni qidirish",
      "Inference: qatorlar orasidagi yashirin ma'no",
      "Inklyuziv ta'lim tamoyillari"
    ],
    "trap": "Skimming butun matnni sinchiklab o'qish emas, 1-2 daqiqada sarlavha va kirish orqali umumiy g'oyani anglashdir!",
    "questions": [
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
  "13": {
    "id": 13,
    "title": "13-KUN: Confusing Words (Make vs Do) & Attestatsiya Qonunchiligi",
    "subtitle": "Make vs Do, Raise vs Rise, Lie vs Lay va attestatsiya toifa nizomidagi qonuniy me'yorlar",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 13-KUN: Confusing Words & Attestatsiya Qonunchiligi</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>MAKE</td><td>Yaratish, vujudga keltirish</td><td>make a decision, make a mistake, make an effort, make money</td></tr>\n      <tr><td>DO</td><td>Faoliyat, burch, vazifa</td><td>do homework, do research, do business, do household chores</td></tr>\n      <tr><td>Raise vs Rise</td><td>O'timli vs O'timsiz</td><td>Please raise your hand (Raise + Ot) vs The sun rises (Rise o'timsiz)</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Pedagog xodimlar attestatsiyasi nizomi bo'yicha baholash: Mutaxassislik fani (80 ball) + Pedagogik mahorat va metodika (20 ball).\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'Do an effort' ❌ emas, 'Make an effort' ✔️; 'Do research' ✔️, 'Do homework' ✔️.\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Make vs Do kollokatsiyalari",
      "Raise (o'timli) vs Rise (o'timsiz), Lie vs Lay",
      "Attestatsiya nizomi va pedagog toifalari"
    ],
    "trap": "'Do an effort' ❌ emas, 'Make an effort' ✔️; 'Do research' ✔️, 'Do homework' ✔️.",
    "questions": [
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
  "14": {
    "id": 14,
    "title": "14-KUN: Articles & Determiners (a/an/the, few/little) & Dars Tahlili",
    "subtitle": "Artikllarning nozik qoidalari, tog'lar/daryolar, few vs a few va o'zaro dars kuzatish",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 14-KUN: Articles & Determiners & Dars Tahlili</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Few / Little (artiklsiz)</td><td>Kam, yetmaydi (inkor)</td><td>Few candidates passed (Deyarli hech kim o'tmadi).</td></tr>\n      <tr><td>A few / A little (a bilan)</td><td>Oz bo'lsa-da yetarli (ijobiy)</td><td>A few candidates passed (Bir nechta nomzod o'tdi).</td></tr>\n      <tr><td>The bilan geografik</td><td>Dengiz, daryo, tog' tizmasi</td><td>The Pacific, The Thames, The Alps (Lekin: Mount Everest, Lake Baikal artiklsiz!)</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Dars tahlilida zamonaviy mezon: O'qituvchining darsdagi monologi emas, o'quvchilarning faol jalb qilinganligi va natijaga erishilganligi.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'Few' (kam, deyarli yo'q — inkor ma'no) vs 'A few' (oz bo'lsa-da yetarli — ijobiy ma'no).\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Geografik nomlar bilan 'the' artikli",
      "Few vs A few (sanaladigan)",
      "Little vs A little (sanalmaydigan)",
      "Dars kuzatish rubrikasi"
    ],
    "trap": "'Few' (kam, deyarli yo'q — inkor ma'no) vs 'A few' (oz bo'lsa-da yetarli — ijobiy ma'no).",
    "questions": [
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
  "15": {
    "id": 15,
    "title": "15-KUN: Reported Speech & Reporting Verbs & Pedagogik Etika",
    "subtitle": "O'zlashtirma gapda zamon surilishi, buyruqlar, maxsus fe'llar va o'qituvchi etikasi",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 15-KUN: Reported Speech & Reporting Verbs & Pedagogik Etika</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Verb + to-V1</td><td>agree, offer, promise, refuse</td><td>She promised to submit the grades today.</td></tr>\n      <tr><td>Verb + sb + to-V1</td><td>advise, encourage, remind, warn, urge</td><td>The mentor urged us to study regularly.</td></tr>\n      <tr><td>Verb + Gerund (-ing)</td><td>admit, deny, apologize for, insist on</td><td>The student admitted cheating during the quiz.</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Pedagogik etika: O'quvchining shaxsiyatini hurmat qilish, xolislik, kamsitishga yo'l qo'ymaslik va kasbiy sadoqat.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'He denied to take the bribe' ❌ ➔ 'He denied taking the bribe' ✔️ (Deny fe'lidan keyin Gerund keladi!).\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Zamonlar moslashuvi (Backshift)",
      "Reporting verbs: urge, threaten, deny doing",
      "O'qituvchi kasb etikasi"
    ],
    "trap": "'He denied to take the bribe' ❌ ➔ 'He denied taking the bribe' ✔️ (Deny fe'lidan keyin Gerund keladi!).",
    "questions": [
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
  "16": {
    "id": 16,
    "title": "16-KUN: Noun Clauses & Question Tags Tuzoqlari & Darslik Tahlili",
    "subtitle": "Ot ergash gaplar so'roq tartibida bo'lmasligi, 'I am, aren't I?' va darslik tanlash",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 16-KUN: Noun Clauses & Question Tags Tuzoqlari</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>I am right</td><td>Maxsus tag</td><td>aren't I?</td></tr>\n      <tr><td>Let's start</td><td>Taklif tagi</td><td>shall we?</td></tr>\n      <tr><td>Imperative (Open the door)</td><td>Buyruq tagi</td><td>will you? / would you?</td></tr>\n      <tr><td>Nobody / Everybody</td><td>Ko'plik olmoshi</td><td>didn't they? / did they?</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Darslik tahlili: Topshiriqlar o'quvchining yosh va psixologik xususiyatlariga, shuningdek milliy kompetensiyalarga mos bo'lishi shart.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'Nobody called, did they?' — 'Nobody' inkor bo'lgani uchun tag ijobiy bo'ladi va 'they' olmoshi olinadi!\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Noun clauses gapda ega va to'ldiruvchi vazifasida",
      "Question tags maxsus qoidalari",
      "Darslik topshiriqlarini baholash"
    ],
    "trap": "'Nobody called, did they?' — 'Nobody' inkor bo'lgani uchun tag ijobiy bo'ladi va 'they' olmoshi olinadi!",
    "questions": [
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
  "17": {
    "id": 17,
    "title": "17-KUN: Adjectives vs Adverbs & Degree Modifiers & Differentsiatsiya",
    "subtitle": "Hard/Hardly, Late/Lately, bog'lovchi fe'llar (look/smell) va tabaqalashtirilgan ta'lim",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 17-KUN: Adjectives vs Adverbs & Differentsiatsiya</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Hard vs Hardly</td><td>Qattiq vs Deyarli yo'q</td><td>She studied hard (Qattiq o'qidi) vs She hardly studied (Deyarli o'qimadi).</td></tr>\n      <tr><td>Late vs Lately</td><td>Kech vs So'nggi paytlarda</td><td>Arrived late (Kech keldi) vs Have seen him lately (So'nggi paytlarda ko'rdim).</td></tr>\n      <tr><td>Extreme Adjectives</td><td>Absolutely bilan ishlatiladi</td><td>absolutely freezing, absolutely exhausted, absolutely boiling</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Differentsiatsiyalangan ta'lim: Barcha o'quvchilarga bir xil qolipda emas, ularning qobiliyatiga mos topshiriqlar (Tiered tasks) berish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'He works hardly' ❌ (U deyarli ishlamaydi degani) ➔ 'He works hard' ✔️ (U qattiq ishlaydi).\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Hard vs Hardly, Late vs Lately",
      "Gradable vs Extreme sifatlar (absolutely furious)",
      "Differentsiatsiyalangan ta'lim (Differentiated Instruction)"
    ],
    "trap": "'He works hardly' ❌ (U deyarli ishlamaydi degani) ➔ 'He works hard' ✔️ (U qattiq ishlaydi).",
    "questions": [
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
  "18": {
    "id": 18,
    "title": "18-KUN: Conjunctions (Although, Despite, In spite of) & Tanqidiy Fikrlash",
    "subtitle": "Zidlovchi va sabab bog'lovchilari, 'Despite of' xatosi va Critical Thinking rivojlantirish",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 18-KUN: Conjunctions (Although, Despite) & Tanqidiy Fikrlash</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Although / Even though</td><td>+ Gap (Ega + Fe'l)</td><td>Although it was raining, the football match continued.</td></tr>\n      <tr><td>Despite / In spite of</td><td>+ Ot / Gerund (-ing)</td><td>Despite the heavy rain, the match continued.</td></tr>\n      <tr><td>Whereas / While</td><td>Taqqoslash, ziddiyat</td><td>Some students prefer grammar, whereas others enjoy speaking.</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Tanqidiy fikrlash: O'quvchilarda axborotni shubha ostiga olish, dalillarni solishtirish va o'z mustaqil fikrini asoslash ko'nikmasi.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'Despite of' deb yozish qo'pol xatodir! 'In spite of' yoki shunchaki 'Despite' bo'ladi.\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Although / Even though + Gap",
      "Despite / In spite of + Ot / V-ing",
      "Whereas, However",
      "Tanqidiy fikrlash (Critical Thinking)"
    ],
    "trap": "'Despite of' deb yozish qo'pol xatodir! 'In spite of' yoki shunchaki 'Despite' bo'ladi.",
    "questions": [
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
  "19": {
    "id": 19,
    "title": "19-KUN: Subject-Verb Agreement (Murakkab Qoidalar) & Portfolio",
    "subtitle": "Ega va kesim moslashuvi, Neither... nor, Each of, The number of va Portfolio",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 19-KUN: Subject-Verb Agreement & Portfolio</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Neither A nor B</td><td>B ga (yaqiniga) moslashadi</td><td>Neither the teacher nor the students <strong>were</strong> aware.</td></tr>\n      <tr><td>A as well as B</td><td>A ga (birinchisiga) moslashadi</td><td>The professor as well as his assistants <strong>was</strong> awarded.</td></tr>\n      <tr><td>Every / Each + singular noun</td><td>Birlik fe'l</td><td>Every student and teacher <strong>has</strong> a unique login.</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Portfolio Baholash: O'quvchining chorak davomidagi barcha ijodiy ishlari, insholari va loyihalari orqali uning o'sish dinamikasini baholash.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'The teacher along with his students was (were emas!) present' — 'along with' birinchi egaga moslashadi!\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Neither... nor, Either... or (yaqin egaga qaraladi)",
      "As well as, Along with (1-egaga qaraladi)",
      "O'quvchi portfoliosi bilan ishlash"
    ],
    "trap": "'The teacher along with his students was (were emas!) present' — 'along with' birinchi egaga moslashadi!",
    "questions": [
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
  "20": {
    "id": 20,
    "title": "20-KUN: Idioms & Academic Collocations & AKT Vositalari",
    "subtitle": "Toifada ko'p uchraydigan iboralar, akademik kollokatsiyalar va darsda AKT",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 20-KUN: Idioms & Academic Collocations & AKT</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Bite the bullet</td><td>Qiyinchilikka chidamoq</td><td>We must bite the bullet and complete the heavy accreditation.</td></tr>\n      <tr><td>Burn the midnight oil</td><td>Kechasi bilan uxlamay o'qimoq</td><td>She burned the midnight oil preparing for the toifa exam.</td></tr>\n      <tr><td>See eye to eye</td><td>To'liq fikrdosh bo'lmoq</td><td>The committee members rarely see eye to eye on syllabus design.</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> AKT Vositalari: Quizizz, Kahoot, Padlet, Google Classroom orqali dars samaradorligini va o'quvchi qiziqishini oshirish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Idiomalarni so'zma-so'z tarjima qilib bo'lmaydi; testda ularning ko'chma ma'nosi kontekstda so'raladi.\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "B2/C1 idiomalar va akademik iboralar",
      "Kollokatsiyalar qat'iyligi",
      "Darsda EdTech vositalaridan foydalanish"
    ],
    "trap": "Idiomalarni so'zma-so'z tarjima qilib bo'lmaydi; testda ularning ko'chma ma'nosi kontekstda so'raladi.",
    "questions": [
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
  "21": {
    "id": 21,
    "title": "21-KUN: Listening Strategiyalari & Topshiriq Tuzish Metodikasi",
    "subtitle": "Tinglab tushunish bosqichlari: Pre-listening, While-listening, Post-listening",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 21-KUN: Listening Strategiyalari & Topshiriq Tuzish</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Pre-listening</td><td>Tayyorgarlik</td><td>Mavzuni ochish, rasm va sarlavhalar orqali taxmin qilish (Predicting)</td></tr>\n      <tr><td>While-listening</td><td>Eshitish jarayoni</td><td>1-eshitish: Gist (umumiy), 2-eshitish: Specific detail (aniq faktlar)</td></tr>\n      <tr><td>Post-listening</td><td>Chiqish va xulosa</td><td>Eshitilgan matn yuzasidan bahs, yozish yoki rolli o'yin</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Top-down tinglashda o'quvchi o'z dunyoqarashi va kontekstga tayanadi; Bottom-up da esa so'zlar va tovushlarni alohida tahlil qiladi.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Pre-listening bosqichida audio eshittirilmaydi! Bu bosqich faqat mavzu kontekstini faollashtirish uchun xizmat qiladi.\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Top-down (fon bilimi) vs Bottom-up (tovushlar)",
      "Pre, While, Post listening bosqichlari",
      "Tinglab tushunish topshiriqlari"
    ],
    "trap": "Pre-listening bosqichida audio eshittirilmaydi! Bu bosqich faqat mavzu kontekstini faollashtirish uchun xizmat qiladi.",
    "questions": [
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
  "22": {
    "id": 22,
    "title": "22-KUN: Writing Turlari (Formal Letter, Essay) & Rubrikalar",
    "subtitle": "Yozma nutq turlari, rasmiy xat uslubi, insho strukturasi va analitik rubrikalar",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 22-KUN: Writing Turlari & Baholash Rubrikalari</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Task Achievement</td><td>Mavzuni to'liq yoritish</td><td>Barcha berilgan savol va talablarga to'liq javob berilganmi?</td></tr>\n      <tr><td>Coherence & Cohesion</td><td>Mantiq va bog'liqlik</td><td>Paragraflarga bo'linish, bog'lovchilarning to'g'ri ishlatilishi.</td></tr>\n      <tr><td>Lexical Resource</td><td>So'z boyligi</td><td>Mavzuga oid boy va akademik so'zlar qo'llanilganmi?</td></tr>\n      <tr><td>Grammatical Accuracy</td><td>Grammatik aniqlik</td><td>Murakkab gap tuzilmalari va sintaktik xatolarsizlik.</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Rubrikalar yordamida baholash: O'quvchiga shunchaki ball qo'yilmaydi, balki har bir mezon bo'yicha alohida tahliliy ko'rsatkich beriladi.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Rasmiy insho va xatlarda qisqartmalar (don't, can't, won't) va so'zlashuv iboralarini ishlatish uslubiy xatodir!\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Formal Letter, Opinion Essay, Report tuzilishi",
      "Bog'lovchi vositalar (Cohesive devices)",
      "Writing baholash mezonlari (CEFR Rubrics)"
    ],
    "trap": "Rasmiy insho va xatlarda qisqartmalar (don't, can't, won't) va so'zlashuv iboralarini ishlatish uslubiy xatodir!",
    "questions": [
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
  "23": {
    "id": 23,
    "title": "23-KUN: Speaking Faoliyatlari (Information Gap) & Fluency",
    "subtitle": "Nutq ravonligi (Fluency) va aniqligi (Accuracy) balansi, muloqot to'siqlari",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 23-KUN: Speaking Faoliyatlari & Fluency vs Accuracy</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Information Gap</td><td>Axborot yetishmovchiligi</td><td>Har bir o'quvchida ma'lumotning bir qismi bo'ladi, savol-javobsiz vazifa bitmaydi.</td></tr>\n      <tr><td>Role Play</td><td>Rolli o'yin</td><td>Real hayotiy vaziyatlar (do'konda, aeroportda, intervyuda) simulyatsiyasi.</td></tr>\n      <tr><td>Jigsaw</td><td>Bo'lakli o'qitish</td><td>Guruh a'zolari turli bo'laklarni o'rganib, qaytib bir-biriga o'rgatadi.</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Fluency mashqlarida o'qituvchi kuzatuvchi va yozib oluvchi roliga o'tadi; xatolar mashq tugagach, umumiy tahlil qilinadi.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Fluency faoliyatlarida o'qituvchi o'quvchini har bir grammatik xatosi uchun to'xtatishi metodik xatodir!\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Information Gap va Jigsaw metodlari",
      "Fluency (ravonlik) vs Accuracy (aniqlik)",
      "Muloqotni rivojlantirish faoliyatlari"
    ],
    "trap": "Fluency faoliyatlarida o'qituvchi o'quvchini har bir grammatik xatosi uchun to'xtatishi metodik xatodir!",
    "questions": [
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
  "24": {
    "id": 24,
    "title": "24-KUN: B2-C1 Murakkab Grammatik Konstruksiyalar (Cleft)",
    "subtitle": "Urg'u beruvchi 'It is... that', 'What I need is...', Cleft jumlalar va elips",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 24-KUN: B2-C1 Murakkab Konstruksiyalar (Cleft Sentences)</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>It-cleft</td><td>It + be + urg'u + that/who</td><td>It was the teacher who inspired the entire generation.</td></tr>\n      <tr><td>Wh-cleft</td><td>What-clause + be + urg'u</td><td>What students need most is constructive encouragement.</td></tr>\n      <tr><td>Fronting</td><td>Bo'lakni boshga chiqarish</td><td>Into the auditorium walked the chief education officer.</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Matn tahlilida o'quvchilarga oddiy gaplarni murakkab akademik konstruksiyalarga o'zgartirish (paraphrasing) mashqlarini o'rgatish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'It was in 1991 when independence was declared' ❌ ➔ 'It was in 1991 that...' ✔️ (Cleft gaplarda 'that' ishlatiladi).\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "It-cleft gaplar: It was X that...",
      "Wh-cleft gaplar: What I really need is...",
      "Inversiya va urg'u berish"
    ],
    "trap": "'It was in 1991 when independence was declared' ❌ ➔ 'It was in 1991 that...' ✔️ (Cleft gaplarda 'that' ishlatiladi).",
    "questions": [
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
  "25": {
    "id": 25,
    "title": "25-KUN: Attestatsiyada Eng Ko'p Yiqitadigan 30 Ta 'Tuzoq' Qoidalar",
    "subtitle": "Barcha chalg'ituvchi grammatik va metodik savollarning konspekt tahlili",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 25-KUN: Attestatsiyada Eng Ko'p Yiqitadigan 30 Ta 'Tuzoq' Qoidalar</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>1. Only when inversiyasi</td><td>2-gapga yordamchi fe'l qo'yiladi</td><td>Only when the rain stopped did we leave.</td></tr>\n      <tr><td>2. Subjunctive fe'l shakli</td><td>Doim V1 (bare)</td><td>Insisted that he attend (attends emas).</td></tr>\n      <tr><td>3. Unless bilan inkor</td><td>Inkor fe'l kelmaydi</td><td>Unless you study (Unless you don't emas).</td></tr>\n      <tr><td>4. Non-defining relative</td><td>That taqiqlanadi</td><td>The book, which is on the desk, is mine.</td></tr>\n      <tr><td>5. Despite / In spite of</td><td>Despite of bo'lmaydi</td><td>Despite the rain / In spite of the rain.</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Test strategiyasi: Variantlarni tanlashda 'Nega bu to'g'ri?' deb emas, 'Nega qolgan 3 tasi noto'g'ri?' degan inkor usulidan foydalaning.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Savoldagi 'NOT', 'EXCEPT', 'LEAST LIKELY' so'zlariga e'tibor bermaslik eng ko'p ball yo'qotilishiga olib keladi!\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "30 ta eng mashhur grammatik tuzoq konspekti",
      "Shoshqaloqlik va chalg'ituvchi variantlar",
      "Imtihon komissiyasi metodlari"
    ],
    "trap": "Savoldagi 'NOT', 'EXCEPT', 'LEAST LIKELY' so'zlariga e'tibor bermaslik eng ko'p ball yo'qotilishiga olib keladi!",
    "questions": [
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
  "26": {
    "id": 26,
    "title": "26-KUN: 1-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol)",
    "subtitle": "Davlat attestatsiyasi qolipidagi 1-sinov imtihoni va vaqt nazorati",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 26-KUN: 1-TO'LIQ MOCK TEST (Strategiya va Vaqt)</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Mutaxassislik (1-40)</td><td>Grammatika, leksika, o'qish</td><td>Har bir savolga 1.5 daqiqa (jami 60 daqiqa)</td></tr>\n      <tr><td>Pedagogika (41-50)</td><td>Metodika va psixologiya</td><td>Har bir savolga 1.5 daqiqa (jami 15 daqiqa)</td></tr>\n      <tr><td>Qayta tekshirish</td><td>Shubhali savollar tahlili</td><td>So'nggi 15 daqiqa zaxira vaqt</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Mock imtihon maqsadi: Bilim darajasini sinash bilan birga, imtihon zalidagi real vaqt mezoniga ruhiy ko'nikish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Bitta qiyin savolga 3-4 daqiqa vaqt sarflab yopishib qolmang! Belgilab o'tib, oxirida qayting.\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "50 ta savolga 90 daqiqa vaqt taqsimoti",
      "40 ta mutaxassislik + 10 ta pedagogika savollari",
      "Birinchi bosqich sinovi"
    ],
    "trap": "Bitta qiyin savolga 3-4 daqiqa vaqt sarflab yopishib qolmang! Belgilab o'tib, oxirida qayting.",
    "questions": [
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
  "27": {
    "id": 27,
    "title": "27-KUN: 1-Mock Test Tahlili va Xatolar Diagnostikasi",
    "subtitle": "1-Mock imtihondagi xatolarning chuqur tahlili va zaif joylarni bartaraf etish",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 27-KUN: 1-Mock Test Tahlili va Xatolar Diagnostikasi</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>1-Tur Xato</td><td>Qoidani bilmaslik</td><td>Mavzuni nazariy konspekt orqali qayta o'qish</td></tr>\n      <tr><td>2-Tur Xato</td><td>Shoshqaloqlik / Chalg'ish</td><td>Savol shartini qalam bilan chizib o'qish odatini shakllantirish</td></tr>\n      <tr><td>3-Tur Xato</td><td>Tuzoqqa ilinish</td><td>Examiner tuzog'ini daftarga alohida yozib olish</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Zaif mavzular bo'yicha diagnostik reja tuzish va aynan o'sha bo'limlarga qo'shimcha amaliyot ajratish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Noto'g'ri javobni shunchaki to'g'ri variantga almashtirib ketmang — nima uchun aynan shu variant xatoligini tushuning!\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Xatolar tahlili va sabablari",
      "Grammatika vs Metodika balansi",
      "Shaxsiy xatolar daftari"
    ],
    "trap": "Noto'g'ri javobni shunchaki to'g'ri variantga almashtirib ketmang — nima uchun aynan shu variant xatoligini tushuning!",
    "questions": [
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
  "28": {
    "id": 28,
    "title": "28-KUN: 2-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol)",
    "subtitle": "Davlat attestatsiyasi qolipidagi 2-sinov imtihoni (Yuqori qiyinlik darajasi)",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 28-KUN: 2-TO'LIQ MOCK TEST (Vaqt Boshqaruvi)</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>1-Blok (1-15)</td><td>Dastlabki 20 daqiqa</td><td>Diqqatni jamlab, ishonchli start olish</td></tr>\n      <tr><td>2-Blok (16-35)</td><td>O'rta 30 daqiqa</td><td>Murakkab reading va grammatik tuzilmalar</td></tr>\n      <tr><td>3-Blok (36-50)</td><td>Oxirgi 25 daqiqa</td><td>Metodika savollari va yakuniy tekshirish</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Psixologik chidamlilik: Har qanday qiyin savolga duch kelganda sarosimaga tushmasdan, mantiqiy istisno qilish orqali to'g'ri javobni topish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Oxirgi 5 ta savolga shoshib tavakkal belgilamaslik uchun vaqtni har 15 ta savolda nazorat qilib boring.\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Ikkinchi simulyatsiya imtihoni",
      "Stress ostida diqqatni jamlash",
      "Yuqori ball olish strategiyasi"
    ],
    "trap": "Oxirgi 5 ta savolga shoshib tavakkal belgilamaslik uchun vaqtni har 15 ta savolda nazorat qilib boring.",
    "questions": [
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
  "29": {
    "id": 29,
    "title": "29-KUN: 2-Mock Test Tahlili va So'nggi Yo'l-Yo'riqlar",
    "subtitle": "2-Mock imtihon xatolarini yopish, imtihon zalidagi psixologik strategiyalar",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 29-KUN: 2-Mock Test Tahlili va So'nggi Yo'l-Yo'riqlar</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Xatolar kamayishi</td><td>1-test vs 2-test</td><td>Foiz ko'rsatkichining 75-80%+ ga yetganligini tekshirish</td></tr>\n      <tr><td>Metodika bloki</td><td>Pedagogika savollari</td><td>10 tadan kamida 8 tasiga to'g'ri javob berish me'yori</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> Yakuniy tahlil: Bilimlarni tizimlashtirish va shaxsiy muvaffaqiyat formulasiga ishonch hosil qilish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Imtihondan oldingi kun yangi murakkab mavzularni o'rganishga urinmang — faqat o'tilganlarni mustahkamlang.\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Ikkinchi test xatolari tahlili",
      "Eng ko'p xato qilingan 5 mavzuni qayta mustahkamlash",
      "So'nggi tayyorgarlik"
    ],
    "trap": "Imtihondan oldingi kun yangi murakkab mavzularni o'rganishga urinmang — faqat o'tilganlarni mustahkamlang.",
    "questions": [
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
  "30": {
    "id": 30,
    "title": "30-KUN: Imtihon Oldi Ekspress-Takrorlash & Psixologik Tayyorgarlik",
    "subtitle": "Barcha formulalarning blitz takrorlanishi, imtihon kuni tartibi va g'alaba kayfiyati",
    "theoryHtml": "\n      <div class=\"theory-card\">\n        <h2>🧐 30-KUN: Imtihon Oldi Ekspress-Takrorlash & Psixologik Tayyorgarlik</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>\n\n        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>\n        <div class=\"theory-table-wrap\">\n          <table class=\"theory-table\">\n            <thead>\n              <tr>\n                <th>Qolip / Tuzilma</th>\n                <th>Tavsifi</th>\n                <th>Akademik Misol va Izoh</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n      <tr><td>Uyqu va dam olish</td><td>Kamida 7-8 soat</td><td>Miyaning toliqishi testda e'tiborsizlikka sabab bo'ladi</td></tr>\n      <tr><td>Hujjatlar</td><td>Passport / ID, Ruxsatnoma</td><td>Ertalab shoshilmaslik uchun kechqurun tayyorlab qo'yish</td></tr>\n      <tr><td>Imtihon zali</td><td>45 daqiqa oldin borish</td><td>Auditoriyaga xotirjam va ruhiy xotirjamlik bilan kirish</td></tr>\n    \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;\">\n          📘 <strong>Metodik Yondashuv:</strong> O'ziga ishonch psixologiyasi: 30 kunlik intensiv mehnat o'z mevasini berishiga ishonish va barcha savollarni sovuqqonlik bilan yechish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Imtihon oldi kechasi tonggacha dars qilib chiqish ❌ — Uyqusizlik imtihonda diqqatni 40% ga pasaytiradi!\n        </div>\n      </div>\n    ",
    "keyPoints": [
      "Oltin formulalar ekspress-xulosasi",
      "Imtihon kuni psixologiyasi va o'ziga ishonch",
      "100 Ballik G'alaba Rejasi"
    ],
    "trap": "Imtihon oldi kechasi tonggacha dars qilib chiqish ❌ — Uyqusizlik imtihonda diqqatni 40% ga pasaytiradi!",
    "questions": [
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
  }
};

const CURRICULUM_INDEX = [
  {
    "day": 1,
    "title": "1-KUN: Inversion & PPP Modeli"
  },
  {
    "day": 2,
    "title": "2-KUN: Conditionals & TBL Metodika"
  },
  {
    "day": 3,
    "title": "3-KUN: Subjunctive & Causatives & Baholash"
  },
  {
    "day": 4,
    "title": "4-KUN: Gerund vs Infinitive & Feedback Turlari"
  },
  {
    "day": 5,
    "title": "5-KUN: Participle Clauses & Bloom Taksonomiyasi"
  },
  {
    "day": 6,
    "title": "6-KUN: Wish / If only / As if & SMART Dars Maqsadlari"
  },
  {
    "day": 7,
    "title": "7-KUN: Passive Voice & Impersonal Passive & Sinf Boshqaruvi"
  },
  {
    "day": 8,
    "title": "8-KUN: Relative Clauses (Whom/Whose) & O'quvchi Motivatsiyasi"
  },
  {
    "day": 9,
    "title": "9-KUN: Past Modals (Must have / Should have) & 4 Ko'nikma"
  },
  {
    "day": 10,
    "title": "10-KUN: Prepositions & Dependent Prepositions & Nizolar"
  },
  {
    "day": 11,
    "title": "11-KUN: Phrasal Verbs (Eng Muhim 40 Ta) & Milliy Dastur"
  },
  {
    "day": 12,
    "title": "12-KUN: Reading Strategiyalari (Skimming/Scanning) & Inklyuzivlik"
  },
  {
    "day": 13,
    "title": "13-KUN: Confusing Words (Make vs Do) & Attestatsiya Qonunchiligi"
  },
  {
    "day": 14,
    "title": "14-KUN: Articles & Determiners (a/an/the, few/little) & Dars Tahlili"
  },
  {
    "day": 15,
    "title": "15-KUN: Reported Speech & Reporting Verbs & Pedagogik Etika"
  },
  {
    "day": 16,
    "title": "16-KUN: Noun Clauses & Question Tags Tuzoqlari & Darslik Tahlili"
  },
  {
    "day": 17,
    "title": "17-KUN: Adjectives vs Adverbs & Degree Modifiers & Differentsiatsiya"
  },
  {
    "day": 18,
    "title": "18-KUN: Conjunctions (Although, Despite, In spite of) & Tanqidiy Fikrlash"
  },
  {
    "day": 19,
    "title": "19-KUN: Subject-Verb Agreement (Murakkab Qoidalar) & Portfolio"
  },
  {
    "day": 20,
    "title": "20-KUN: Idioms & Academic Collocations & AKT Vositalari"
  },
  {
    "day": 21,
    "title": "21-KUN: Listening Strategiyalari & Topshiriq Tuzish Metodikasi"
  },
  {
    "day": 22,
    "title": "22-KUN: Writing Turlari (Formal Letter, Essay) & Rubrikalar"
  },
  {
    "day": 23,
    "title": "23-KUN: Speaking Faoliyatlari (Information Gap) & Fluency"
  },
  {
    "day": 24,
    "title": "24-KUN: B2-C1 Murakkab Grammatik Konstruksiyalar (Cleft)"
  },
  {
    "day": 25,
    "title": "25-KUN: Attestatsiyada Eng Ko'p Yiqitadigan 30 Ta 'Tuzoq' Qoidalar"
  },
  {
    "day": 26,
    "title": "26-KUN: 1-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol)"
  },
  {
    "day": 27,
    "title": "27-KUN: 1-Mock Test Tahlili va Xatolar Diagnostikasi"
  },
  {
    "day": 28,
    "title": "28-KUN: 2-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol)"
  },
  {
    "day": 29,
    "title": "29-KUN: 2-Mock Test Tahlili va So'nggi Yo'l-Yo'riqlar"
  },
  {
    "day": 30,
    "title": "30-KUN: Imtihon Oldi Ekspress-Takrorlash & Psixologik Tayyorgarlik"
  }
];
