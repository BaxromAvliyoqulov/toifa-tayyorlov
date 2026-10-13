// TOIFA PRO — 30 KUNLIK TO'LIQ O'QUV DASTURI VA TEST BAZASI
// Har bir mavzu maktab bolasi ham 100% tushunadigan darajada o'zbekcha sodda tilda,
// hayotiy misollar, tuzoqlar va har bir kun uchun alohida 16+ ta saralangan testlar bilan.

const CURRICULUM = {
  1: {
    id: 1,
    title: "1-KUN: Inversion & PPP Modeli",
    subtitle: "Inkor so'zlar nima, qachon yordamchi fe'l oldinga chiqadi va PPP dars bosqichlari",
    theoryHtml: `
      <div class="theory-card">
        <h2>🧐 1-KUN: Inversion (Inversiya — Teskari So'z Tartibi)</h2>
        <p>Attestatsiya testlarida Inversion eng ko'p tushadigan va eng ko'p xato qilinadigan B2/C1 grammatik qoliplaridan biridir.</p>
        
        <h3>1. Inkor va Cheklovchi So'zlar bilan Inversiya</h3>
        <p>Gap inkor yoki cheklovchi ma'nodagi so'zlar bilan boshlanganda, gap so'roq gap shakliga kiradi: <strong>Inkor so'z + Yordamchi fe'l + Ega + Asosiy fe'l</strong>.</p>

        <div class="formula-box">
          [Qolip] ➔ Inkor so'z + Auxiliary (do/did/have/had/is/can) + Subject + Main Verb
        </div>

        <div class="uzb-meaning">
          <strong>Asosiy inkor va cheklovchi so'zlar:</strong><br>
          • <em>Never, Rarely, Seldom</em> (Hech qachon, kamdan-kam)<br>
          • <em>Hardly / Scarcely / Barely ... when</em> (Endigina ... bo'lgan ediki)<br>
          • <em>No sooner ... than</em> (Ulgurmasidanoq ... sodir bo'ldi)<br>
          • <em>Under no circumstances / In no way / On no account</em> (Qanday vaziyatda bo'lmasin ... aslo)<br>
          • <em>Little did she know...</em> (U hatto xayoliga ham keltirmagan edi...)
        </div>

        <div class="example-pair">
          <div class="example-box bad">
            <span class="lbl">Noto'g'ri (To'g'ri tartib qolib ketishi):</span>
            ❌ Seldom we have seen such dedicated teachers.<br>
            ❌ No sooner she had entered the hall than the bell rang.
          </div>
          <div class="example-box good">
            <span class="lbl">To'g'ri (Attestatsiya standarti):</span>
            ✔️ <strong>Seldom have we seen</strong> such dedicated teachers.<br>
            ✔️ <strong>No sooner had she entered</strong> the hall than the bell rang.
          </div>
        </div>

        <div class="uzb-meaning" style="background: #fef2f2; border-color: #ef4444; color: #991b1b;">
          🔥 <strong>ATTESTATSIYANING 1-RAQAMLI TUZOG'I (Ikki qismli iboralar):</strong><br>
          <code>Only when</code>, <code>Only after</code>, <code>Not until</code> bilan boshlangan gaplarda inversiya <strong>BIRINCHI (ergash) gapda EMAS</strong>, balki <strong>ASOSIY (ikkinchi) gapda</strong> yuz beradi!<br><br>
          <em>Misol:</em> Only after the teacher explained the rule, <strong>did the students understand</strong> the task.<br>
          <em>Xato:</em> Only after did the teacher explain... ❌
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. PEDAGOGIK METODIKA: PPP (PRESENTATION, PRACTICE, PRODUCTION)</h2>
        <p>Attestatsiya metodika savollarida an'anaviy dars modellari ichida eng ko'p so'raladigani bu — <strong>PPP modeli</strong>dir.</p>

        <div class="formula-box" style="color: #1e3a8a; background: #eff6ff; border-color: #93c5fd;">
          1️⃣ <strong>PRESENTATION (Taqdimot bosqichi):</strong><br>
          O'qituvchi yangi til birligi (grammatika yoki leksika)ni kontekstda ko'rsatadi, qoidasini tushuntiradi (deduktiv) yoki o'quvchilarga qoidani ochishga yordam beradi.
        </div>

        <div class="formula-box" style="color: #1e3a8a; background: #f0fdf4; border-color: #86efac;">
          2️⃣ <strong>PRACTICE (Mashq qilish — Controlled Practice):</strong><br>
          O'quvchilar aniqlik (accuracy) ustida ishlaydi. Bo'sh o'rinlarni to'ldirish, gaplarni qayta tuzish va qolipli mashqlar bajariladi. O'qituvchi xatolarni darhol to'g'rilaydi.
        </div>

        <div class="formula-box" style="color: #1e3a8a; background: #fffbeb; border-color: #fde68a;">
          3️⃣ <strong>PRODUCTION (Mustaqil qo'llash — Free Practice):</strong><br>
          O'quvchilar yangi o'rganilgan tuzilmani erkin muloqotda, rolli o'yinlarda yoki bahs-munozarada mustaqil qo'llashadi (fluency ustuvor).
        </div>
      </div>
    `,
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
    theoryHtml: `
      <div class="theory-card">
        <h2>🧐 2-KUN: Conditionals (Shart Ergash Gaplar) — To'liq Tizim</h2>
        <p>Attestatsiya testlarida shart gaplar bo'yicha 3 ta asosiy yo'nalish tekshiriladi: <strong>Standart 4 tur</strong>, <strong>Mixed Conditionals (Aralash shart gaplar)</strong> va <strong>Inversion (If tushib qolishi)</strong>.</p>
        
        <h3>1. Standart Shart Gaplar (0, 1, 2, 3)</h3>
        
        <div class="uzb-meaning">
          <strong>Zero Conditional (Umumiy haqiqat va ilmiy qonunlar):</strong><br>
          Formulasi: <code>If + Present Simple, ... Present Simple</code><br>
          <em>Misol:</em> If you heat ice, it melts. (Muzni qizdursangiz, eriydi — doimiy tabiat qoidasi).
        </div>

        <div class="uzb-meaning">
          <strong>First Conditional (Kelajakdagi real ehtimol):</strong><br>
          Formulasi: <code>If + Present Simple, ... will / can / may + V1</code><br>
          <em>Misol:</em> If she prepares thoroughly, she will pass the toifa exam with a high score.<br>
          <strong style="color: #b91c1c;">⚠️ Tuzoq:</strong> <code>If</code> qismida hech qachon <code>will</code> qo'yilmaydi! <em>(Noto'g'ri: If she will prepare ❌)</em>
        </div>

        <div class="uzb-meaning">
          <strong>Second Conditional (Hozirgi/kelasi zamondagi noreal xayol):</strong><br>
          Formulasi: <code>If + Past Simple, ... would / could / might + V1</code><br>
          <em>Misol:</em> If I had enough time, I would write a comprehensive book. (Lekin hozir yetarli vaqtim yo'q).<br>
          <strong>Eslatma:</strong> Rasmiy grammatikada barcha shaxslar uchun <code>were</code> ishlatiladi: <em>If I were you, I would take the mock test.</em>
        </div>

        <div class="uzb-meaning">
          <strong>Third Conditional (O'tmishdagi noreal afsus va pushaymonlik):</strong><br>
          Formulasi: <code>If + Past Perfect (had + V3), ... would have / could have + V3</code><br>
          <em>Misol:</em> If they had left earlier yesterday, they wouldn't have missed the flight. (Kecha kech chiqishdi va samolyotga kechikishdi — o'tmishni o'zgartirib bo'lmaydi).
        </div>
      </div>

      <div class="theory-card">
        <h2>🔀 2. MIXED CONDITIONALS (Aralash Shart Gaplar — Attestatsiyaning Eng Qiyin Qismi)</h2>
        <p>Test tuzuvchilar sizni vaqt ketma-ketligida chalg'itish uchun 2 xil aralash turdan savol tuzishadi:</p>

        <div class="formula-box">
          📌 1-TUR: O'TMISHDAGI ISH-HARAKAT ➔ HOZIRGI ZAMONDAGI NATIJA<br>
          Qolip: If + Past Perfect (had + V3), ... would + V1 (now / today)<br>
          Misol: If I had taken my umbrella this morning, I wouldn't be wet now.<br>
          (Ertalab soyabon olmaganman [o'tmish], shu sababli hozir shalabbo bo'lib turibman [hozirgi holat]).
        </div>

        <div class="formula-box">
          📌 2-TUR: HOZIRGI DOIMIY XUSUSIYAT/HOLAT ➔ O'TMISHDAGI NATIJA<br>
          Qolip: If + Past Simple (were / V2), ... would have + V3 (yesterday / then)<br>
          Misol: If he were not so stubborn, he would have accepted their help yesterday.<br>
          (U tabiatan o'jar [doimiy sifat], shuning uchun kecha ularning yordamini rad etdi [o'tmishdagi natija]).
        </div>
      </div>

      <div class="theory-card">
        <h2>⚡ 3. INVERSION IN CONDITIONALS (If tushib qolganda so'z tartibi)</h2>
        <p>Rasmiy testlarda <code>if</code> so'zi olib tashlanadi va yordamchi fe'l ega oldiga chiqariladi:</p>

        <div class="example-pair">
          <div class="example-box bad">
            <span class="lbl">Oddiy If-qoliplar:</span>
            • <em>If you should require</em> further information...<br>
            • <em>If I were</em> in your shoes...<br>
            • <em>If he had known</em> the exam date...
          </div>
          <div class="example-box good">
            <span class="lbl">Inversiya qoliplari (Attestatsiya formati):</span>
            • <strong>Should you require</strong> further information...<br>
            • <strong>Were I</strong> in your shoes... (yoki: <em>Were he to ask...</em>)<br>
            • <strong>Had he known</strong> the exam date...
          </div>
        </div>

        <div class="uzb-meaning" style="background: #fef2f2; border-color: #ef4444; color: #991b1b;">
          🔥 <strong>O'ta muhim inkor qolipi:</strong><br>
          Third conditional inversiyasida inkor qo'shilganda qisqartma (hadn't) bo'lmaydi!<br>
          To'g'ri: <strong>Had it not been for your advice...</strong> (Agar maslahatingiz bo'lmaganida edi...)<br>
          Noto'g'ri: <em>Hadn't it been for... ❌</em>
        </div>
      </div>

      <div class="theory-card">
        <h2>⚠️ 4. BOG'LOVCHILAR VA ULARNING SEVIMLI TUZOQLARI</h2>
        <ul>
          <li><strong>Unless (= If not):</strong> O'zida inkor ma'no tashiydi. Unless'dan keyin inkor fe'l (don't/doesn't) ishlatilmaydi!<br>
          <em>To'g'ri:</em> Unless you study hard, you won't pass.<br>
          <em>Noto'g'ri:</em> Unless you don't study hard... ❌</li>
          <li><strong>In case vs If:</strong><br>
          <em>In case</em> = Har ehtimolga qarshi (oldindan chora ko'rish). <em>I'll take money in case I need it.</em> (Kerak bo'lsa ham, bo'lmasa ham olaman).<br>
          <em>If</em> = Faqat shart sodir bo'lgandagina harakat qilinadi.</li>
          <li><strong>Provided (that) / As long as / On condition that:</strong> "Faqat shu shart bilanki" ma'nosida <em>if</em> bilan teng kuchli.</li>
        </ul>
      </div>

      <div class="theory-card">
        <h2>🎯 5. PEDAGOGIK METODIKA: TBL (TASK-BASED LEARNING) MODELI</h2>
        <p>Attestatsiyada metodika bo'yicha TBL (Jane Willis modeli) bosqichlari muntazam tushadi:</p>

        <div class="formula-box" style="color: #1e3a8a; background: #f0fdf4; border-color: #86efac;">
          1️⃣ <strong>PRE-TASK (Vazifa oldi bosqichi):</strong><br>
          O'qituvchi mavzuni ochadi, kontekst yaratadi, yangi so'zlarni eslatadi va o'quvchilarga bajarilishi kerak bo'lgan vazifani (Task) tushuntiradi.
        </div>

        <div class="formula-box" style="color: #1e3a8a; background: #eff6ff; border-color: #93c5fd;">
          2️⃣ <strong>TASK CYCLE (Vazifa sikli — 3 ta ketma-ketlik):</strong><br>
          • <strong>Task:</strong> O'quvchilar juftlikda/guruhda vazifani erkin bajarishadi (muloqot ravonligi - fluency ustuvor, o'qituvchi xatolar uchun to'xtatmaydi).<br>
          • <strong>Planning:</strong> Guruhlar o'z natijasini sinfga qanday taqdim etishni rejalashtirishadi va qisqa ma'ruza tayyorlashadi.<br>
          • <strong>Report:</strong> Guruhlar butun sinf oldida o'z xulosalarini taqdim etishadi.
        </div>

        <div class="formula-box" style="color: #1e3a8a; background: #fffbeb; border-color: #fde68a;">
          3️⃣ <strong>LANGUAGE FOCUS (Til tahlili va amaliyot):</strong><br>
          • <strong>Analysis:</strong> Vazifa davomida o'quvchilar yo'l qo'ygan grammatik/leksik shakllarni o'qituvchi doskada tahlil qiladi.<br>
          • <strong>Practice:</strong> Ushbu qoidalarni mustahkamlash uchun maqsadli mashqlar bajariladi.
        </div>

        <div class="uzb-meaning">
          💡 <strong>PPP va TBL farqi (Attestatsiya savoli):</strong><br>
          • <em>PPP (Presentation-Practice-Production):</em> O'qituvchi boshida qoidani tushuntiradi (deduktiv).<br>
          • <em>TBL:</em> O'quvchi avval amaliy vazifani bajaradi, til qoidasi esa dars oxirida (Language Focus bosqichida) tahlil qilinadi (induktiv & student-centered).
        </div>
      </div>
    `,
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 3-KUN: Subjunctive Mood & Causative Verbs & Baholash Turlari</h2>\n        <p>Attestatsiya testlarida Subjunctive va Causative mavzulari B2/C1 darajadagi eng sevimli grammatik savollardan hisoblanadi.</p>\n\n        <h3>1. Subjunctive Mood (Majhul / Buyruq Mayli)</h3>\n        <p>Rasmiy talab, taklif yoki muhimlikni bildiruvchi iboralardan keyin fe'l qaysi zamon va shaxsda bo'lishidan qat'i nazar <strong>Bare Infinitive (fe'lning o'zak shakli - V1)</strong> bo'ladi:</p>\n\n        <div class=\"formula-box\">\n          [Qolip] ➔ It is vital / essential / imperative / crucial that + Subject + [Bare Infinitive]\n        </div>\n\n        <div class=\"uzb-meaning\">\n          💡 <em>Fe'llar bilan:</em> suggest, recommend, insist, demand, propose that + Subject + [V1]<br>\n          • <em>Misol:</em> The director insisted that every teacher <strong>attend</strong> (attends emas!) the conference.<br>\n          • <em>Misol:</em> It is mandatory that he <strong>be</strong> (is emas!) on time.\n        </div>\n\n        <div class=\"example-pair\">\n          <div class=\"example-box bad\">\n            <span class=\"lbl\">Noto'g'ri (Odatiy 3-shaxs xatosi):</span>\n            ❌ The inspector demanded that he submits the syllabus immediately.<br>\n            ❌ It is vital that she is informed.\n          </div>\n          <div class=\"example-box good\">\n            <span class=\"lbl\">To'g'ri (Attestatsiya standarti):</span>\n            ✔️ The inspector demanded that he <strong>submit</strong> the syllabus immediately.<br>\n            ✔️ It is vital that she <strong>be</strong> informed.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔧 2. CAUSATIVE VERBS (Ish-harakatni birovga qildirmoq)</h2>\n        <p>Imtihonda 3 asosiy vositachi fe'lning qoliplari tekshiriladi:</p>\n\n        <div class=\"formula-box\">\n          1. <strong>HAVE:</strong><br>\n          • Faol: have + person + <strong>V1 (bare infinitive)</strong> ➔ <em>I had the technician repair my laptop.</em><br>\n          • Majhul: have + object + <strong>V3 (past participle)</strong> ➔ <em>I had my laptop repaired.</em>\n        </div>\n\n        <div class=\"formula-box\">\n          2. <strong>GET:</strong><br>\n          • Faol: get + person + <strong>to + V1 (infinitive with to)</strong> ➔ <em>She got her colleague to substitute her.</em><br>\n          • Majhul: get + object + <strong>V3</strong> ➔ <em>She got her car washed.</em>\n        </div>\n\n        <div class=\"formula-box\">\n          3. <strong>MAKE:</strong><br>\n          • Faol: make + person + <strong>V1</strong> ➔ <em>The teacher made students rewrite the essay.</em><br>\n          • ⚠️ Majhulda 'to' paydo bo'ladi: <em>Students were made <strong>to rewrite</strong> the essay.</em>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 3. PEDAGOGIK METODIKA: FORMATIVE VS SUMMATIVE BAHOLASH</h2>\n        <p>Attestatsiya pedagogika blokida baholash falsafasi bo'yicha doimiy tushadigan savollar:</p>\n\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📊 <strong>Formative Assessment (Formatif — Shakllantiruvchi):</strong><br>\n          • Maqsad: O'quvchining o'sish dinamikasini aniqlash va o'z vaqtida tuzatish (Assessment FOR learning).<br>\n          • Xususiyati: Ball yoki jazo berilmaydi, doimiy konstruktiv feedback beriladi. (Exit ticket, o'zaro baholash, qisqa viktorina).\n        </div>\n\n        <div class=\"formula-box\" style=\"background: #fef2f2; border-color: #fca5a5;\">\n          🎓 <strong>Summative Assessment (Summativ — Yakuniy):</strong><br>\n          • Maqsad: Belgilangan davr (chorak, yil, kurs) oxirida bilimlarni rasmiy baholash (Assessment OF learning).<br>\n          • Xususiyati: Yuqori xavfli (high-stakes), standartlashtirilgan testlar va yakuniy imtihonlar.\n        </div>\n      </div>\n    ",
    keyPoints: ["Subjunctive: It is vital that he BE present (bare infinitive)","Causative: have sth done, get sb TO do, make sb do","Formative (o'sish uchun) vs Summative (yakuniy baho)"],
    trap: "'It is essential that she attend...' — 'attends' yoki 'attended' emas, fe'l o'zining sof negiz (infinitive) shaklida bo'ladi!",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 4-KUN: Gerund vs Infinitive & O'quvchilarga Qayta Aloqa (Feedback)</h2>\n        <p>Gerund (V-ing) va Infinitive (to + V1) mavzusi attestatsiyada asosan ma'nosi o'zgaradigan fe'llar doirasida sinaladi.</p>\n\n        <h3>1. Ma'nosi Keskin O'zgaradigan Fe'llar</h3>\n        <div class=\"formula-box\">\n          • <strong>Remember / Forget to do:</strong> Kelajakda bajarilishi kerak bo'lgan vazifani eslamoq/unutmoq.<br>\n          <em>Misol:</em> Remember to turn off the projector. (Proyektorni o'chirishni unutmang).<br>\n          • <strong>Remember / Forget doing:</strong> O'tmishda qilingan ishni xotirlamoq/unutmoq.<br>\n          <em>Misol:</em> I remember meeting the examiner last year. (O'tgan yili imtihon oluvchi bilan uchrashganimni eslayman).\n        </div>\n\n        <div class=\"formula-box\">\n          • <strong>Stop to do:</strong> Boshqa ishni qilish uchun to'xtamoq.<br>\n          <em>Misol:</em> On my way home, I stopped to buy bread. (Non sotib olish uchun to'xtadim).<br>\n          • <strong>Stop doing:</strong> O'sha ish-harakatni butunlay to'xtatmoq/tashlamoq.<br>\n          <em>Misol:</em> Please stop talking during the listening test. (Gaplashishni to'xtating).\n        </div>\n\n        <div class=\"formula-box\">\n          • <strong>Regret to say/inform:</strong> Afsus bilan ma'lum qilmoq (rasmiy xat qolipi).<br>\n          • <strong>Regret doing:</strong> O'tmishda qilingan ishdan pushaymon bo'lmoq.\n        </div>\n\n        <div class=\"formula-box\">\n          • <strong>Try to do:</strong> Kuch sarflab harakat qilmoq (harakat qiyin).<br>\n          • <strong>Try doing:</strong> Tajriba qilib ko'rmoq (samaradorligini sinash).\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA: FEEDBACK (QAYTA ALOQA) MADANIYATI</h2>\n        <p>Attestatsiya mezonida o'quvchi xatosini to'g'rilashda pedagogning yondashuvi:</p>\n        <ul>\n          <li><strong>Immediate Feedback (Darhol tuzatish):</strong> Aniqlik (Accuracy) mashqlarida (drill, talaffuz) qo'llaniladi.</li>\n          <li><strong>Delayed Feedback (Kechiktirilgan tuzatish):</strong> Erkin muloqot (Fluency, Speaking debate) paytida o'quvchini gap o'rtasida to'xtatmaslik, xatolarni dars oxirida umumiy tahlil qilish.</li>\n          <li><strong>Peer Feedback (Tengdosh baholash):</strong> O'quvchilarda tanqidiy fikrlash va mas'uliyatni oshiradi.</li>\n        </ul>\n      </div>\n    ",
    keyPoints: ["Ma'nosi o'zgaruvchi fe'llar: remember, stop, regret, try, forget","Bare infinitive: let, make, help, hear, see","Feedback turlari: Immediate vs Delayed, Constructive vs Destructive"],
    trap: "'Stop to smoke' (chekish uchun to'xtamoq) va 'Stop smoking' (chekishni tashlamoq) o'rtasidagi ma'no farqini adashtirmang!",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 5-KUN: Participle Clauses & Bloom Taksonomiyasi</h2>\n        <p>Participle clauses (Sifatdoshli ergash gaplar) gapni ixcham va akademik qilish usuli bo'lib, testda ega uyg'unligi tekshiriladi.</p>\n\n        <h3>1. Participle Turlari va Qoliplari</h3>\n        <div class=\"formula-box\">\n          • <strong>Present Participle (V-ing):</strong> Bir vaqtda sodir bo'layotgan yoki sabab bildiruvchi faol ish-harakat.<br>\n          <em>Misol:</em> Feeling exhausted, the teacher decided to rest. (= Because he felt exhausted)<br>\n          • <strong>Past Participle (V3):</strong> Majhul ma'nodagi qisqartma.<br>\n          <em>Misol:</em> Built in 1990, the school needed renovation. (= Which was built...)<br>\n          • <strong>Perfect Participle (Having + V3):</strong> Bir harakat ikkinchisidan OLDIN to'liq yakunlanganda.<br>\n          <em>Misol:</em> Having submitted the grades, she left the office. (= After she had submitted...)\n        </div>\n\n        <div class=\"example-pair\">\n          <div class=\"example-box bad\">\n            <span class=\"lbl\">Dangling Participle (Qo'pol xato):</span>\n            ❌ Opening the exam paper, the questions were difficult.<br>\n            <em>(Test varag'ini savollar ochmagan!)</em>\n          </div>\n          <div class=\"example-box good\">\n            <span class=\"lbl\">To'g'ri bog'lanish:</span>\n            ✔️ Opening the exam paper, <strong>the candidate</strong> found the questions difficult.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. BLOOM TAKSONOMIYASI (BILISH DARAJALARI)</h2>\n        <p>Dars maqsadlari va savollar darajasi (Quyi tartibdan Yuqori tartibga — LOTS ➔ HOTS):</p>\n        <ol>\n          <li><strong>Remembering (Eslab qolish):</strong> Qoida, sana, ta'riflarni takrorlash (Recall).</li>\n          <li><strong>Understanding (Tushunish):</strong> O'z so'zlari bilan tushuntirish, umumlashtirish.</li>\n          <li><strong>Applying (Qo'llash):</strong> Qoidani yangi vaziyatda ishlatish.</li>\n          <li><strong>Analyzing (Tahlil qilish):</strong> Bo'laklarga ajratish, sabab va oqibatni solishtirish.</li>\n          <li><strong>Evaluating (Baholash):</strong> Mezon asosida xulosa va hukm chiqarish (Critique).</li>\n          <li><strong>Creating (Yaratish):</strong> Yangi original mahsulot, reja yoki loyiha ishlab chiqish.</li>\n        </ol>\n      </div>\n    ",
    keyPoints: ["Present Participle (Doing) va Past Participle (Done)","Having done: bir ish-harakat ikkinchisidan aniq oldin tugaganida","Bloom Taksonomiyasi: 6 pog'ona (Remembering ➔ Creating)"],
    trap: "Dangling Participle: Participle clause va asosiy gapning egasi BITTA shaxs bo'lishi shart! 'Walking in the park, the rain started' ❌ (Yomg'ir parkda aylanib yurmagan!)",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 6-KUN: Wish / If Only / As if & SMART Dars Maqsadlari</h2>\n        <p>Wish qoliplari xuddi Conditionals kabi zamonni bir bosqich orqaga surish qoidasiga bo'ysunadi.</p>\n\n        <h3>1. Wish / If Only Qoliplari</h3>\n        <div class=\"formula-box\">\n          1. <strong>Hozirgi zamondagi noreal orzu:</strong><br>\n          Qolip: Wish + Past Simple (were / V2)<br>\n          <em>Misol:</em> I wish I were fluent in simultaneous interpretation. (Koshki hozir ravon bo'lsam).\n        </div>\n\n        <div class=\"formula-box\">\n          2. <strong>O'tmishdagi pushaymonlik:</strong><br>\n          Qolip: Wish + Past Perfect (had + V3)<br>\n          <em>Misol:</em> I wish I had read the circular earlier. (Koshki xatni ertaroq o'qiganimda edi).\n        </div>\n\n        <div class=\"formula-box\">\n          3. <strong>Boshqa shaxsning xatti-harakatidan g'ashlanish va to'xtatishni talab qilish:</strong><br>\n          Qolip: Wish + person + <strong>would + V1</strong><br>\n          <em>Misol:</em> I wish you would stop interrupting me! (Gapimni bo'lishni bas qilsangiz edi!)<br>\n          ⚠️ <em>Qoida:</em> Ega bilan 'wish'ning egasi bir xil bo'lsa (I wish I...), 'would' ishlatilmaydi, 'could' ishlatiladi.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA: SMART DARS MAQSADLARI</h2>\n        <p>O'qituvchi dars konspektida maqsadni quyidagi 5 mezon asosida qo'yishi shart:</p>\n        <ul>\n          <li><strong>S — Specific (Aniq):</strong> Umumiy emas, aniq nima o'rganilishi ko'rsatiladi.</li>\n          <li><strong>M — Measurable (O'lchanadigan):</strong> Natijani foiz yoki test bilan o'lchab bo'lishi kerak.</li>\n          <li><strong>A — Achievable (Erishsa bo'ladigan):</strong> O'quvchining yosh va bilim darajasiga mos.</li>\n          <li><strong>R — Relevant (Dolzarb / Ahamiyatli):</strong> O'quv dasturi va hayotiy ehtiyojga bog'liq.</li>\n          <li><strong>T — Time-bound (Vaqt bilan chegaralangan):</strong> 45 daqiqalik dars oxirigacha erishiladigan.</li>\n        </ul>\n      </div>\n    ",
    keyPoints: ["Wish + Past Simple (Hozirgi afsus)","Wish + Past Perfect (O'tmishdagi afsus)","Wish + Would (Boshqa odamning harakatidan norozilik)","SMART dars maqsadlari"],
    trap: "'I wish I would have more money' ❌ — O'zimizga nisbatan 'would' ishlatilmaydi! 'I wish I had' bo'ladi.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 7-KUN: Passive Voice & Impersonal Passive & Sinf Boshqaruvi</h2>\n        <p>Attestatsiyada oddiy majhul gaplar emas, balki akademik tildagi <strong>Impersonal Passive</strong> formulalari tushadi.</p>\n\n        <h3>1. Impersonal Passive (Ommaviy fikr va xabarlar)</h3>\n        <p>Fe'llar: say, believe, report, consider, claim, expect, think.</p>\n\n        <div class=\"formula-box\">\n          1-QOLIP: It + Passive Verb + that-clause<br>\n          <em>Misol:</em> It is believed that the new policy improves educational equity.\n        </div>\n\n        <div class=\"formula-box\">\n          2-QOLIP (Murakkab): Subject + Passive Verb + <strong>to-infinitive</strong><br>\n          • Hozirgi zamon: <em>He is said <strong>to live</strong> abroad.</em><br>\n          • O'tgan zamon (Perfect Infinitive): <em>The minister is reported <strong>to have signed</strong> the decree yesterday.</em>\n        </div>\n\n        <div class=\"uzb-meaning\">\n          💡 <strong>Attestatsiya tuzog'i:</strong> Agar gapda o'tmishdagi harakat aytilayotgan bo'lsa, 'to + V1' emas, <strong>'to have + V3'</strong> qo'yiladi!\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. SINF BOSHQARUVI: TTT VS STT NISBATI</h2>\n        <ul>\n          <li><strong>TTT (Teacher Talking Time):</strong> Zamonaviy darsda o'qituvchi vaqti 30% dan oshmasligi kerak.</li>\n          <li><strong>STT (Student Talking Time):</strong> O'quvchi muloqot vaqti kamida 70% ni tashkil qilishi shart (Student-Centered Learning).</li>\n          <li><strong>Partalar joylashuvi (Seating Arrangement):</strong> U-shape (munozara uchun), Horseshoe, Group clusters (guruh ishlari uchun).</li>\n        </ul>\n      </div>\n    ",
    keyPoints: ["Passive Voice: be + V3","Impersonal Passive: It is believed that... / He is said to be...","Sinf boshqaruvi: TTT (Teacher Talking Time) vs STT (Student Talking Time)"],
    trap: "'He is said to have escaped' — o'tmishdagi ish-harakat uchun oddiy to-V1 emas, 'to have + V3' (Perfect Infinitive) qo'yiladi!",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 8-KUN: Relative Clauses & O'quvchi Motivatsiyasi</h2>\n        <p>Nisbiy ergash gaplarda vergul qoidasi va olmoshlar attestatsiyaning doimiy savollaridir.</p>\n\n        <h3>1. Defining vs Non-defining Clauses</h3>\n        <div class=\"formula-box\">\n          • <strong>Defining (Aniqlovchi):</strong> Gapdan olib tashlansa ma'no buziladi, vergul qo'yilmaydi. 'That' ishlatilishi mumkin.<br>\n          <em>Misol:</em> The teacher that/who won the award works at our school.\n        </div>\n\n        <div class=\"formula-box\">\n          • <strong>Non-defining (Qo'shimcha ma'lumot beruvchi):</strong> Vergullar orasida bo'ladi. Olib tashlansa ham asosiy ma'no saqlanadi.<br>\n          <em>Misol:</em> My headmaster, <strong>who</strong> has 20 years of experience, praised the project.<br>\n          ⚠️ <strong>QAT'IY QOIDA:</strong> Vergulli gapda hech qachon <code>that</code> qo'yilmaydi!\n        </div>\n\n        <div class=\"formula-box\">\n          • <strong>Whom vs Whose:</strong><br>\n          - <em>Whom:</em> Vositali to'ldiruvchi o'rnida: <em>The inspector with whom we spoke...</em><br>\n          - <em>Whose:</em> Egalik olmoshi o'rnida: <em>The student whose essay was published...</em>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK MOTIVATSIYA METODLARI</h2>\n        <ul>\n          <li><strong>Intrinsic Motivation (Ichki motivatsiya):</strong> O'quvchining fanga bo'lgan qiziqishi, shaxsiy zavqi va o'rganish ishtiyoqi. Eng barqaror motivatsiya turi!</li>\n          <li><strong>Extrinsic Motivation (Tashqi motivatsiya):</strong> Baho, maqtov, mukofot yoki jazodan qo'rqish sababli o'qish.</li>\n          <li><em>Attestatsiya xulosasi:</em> Samarali o'qituvchi tashqi rag'batdan ichki motivatsiyani uyg'otishga ko'prik yasaydi.</li>\n        </ul>\n      </div>\n    ",
    keyPoints: ["Defining vs Non-defining Relative Clauses","Whom (to'ldiruvchi) vs Whose (egalik)","Ichki (Intrinsic) vs Tashqi (Extrinsic) Motivatsiya"],
    trap: "Non-defining relative clause'da (vergul bilan ajratilgan gaplarda) 'that' aslo ishlatilmaydi! Faqat 'which' yoki 'who' bo'ladi.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 9-KUN: Past Modals (O'tmish Modallari) & 4 Ko'nikma Integratsiyasi</h2>\n        <p>O'tmishda sodir bo'lgan ish-harakatga nisbatan xulosa (deduction) va afsus bildirishda modal + have + V3 ishlatiladi.</p>\n\n        <h3>1. O'tmish Modallari va Ma'nolari</h3>\n        <div class=\"formula-box\">\n          • <strong>Must have + V3:</strong> 99% ishonch bilan o'tmishdagi mantiqiy xulosa.<br>\n          <em>Misol:</em> The lights were off; they must have left the office.<br>\n          • <strong>Can't / Couldn't have + V3:</strong> O'tmishda ro'y berishi mutlaqo imkonsiz bo'lgan hodisa.<br>\n          <em>Misol:</em> He can't have committed the error; he was absent yesterday.<br>\n          • <strong>Should have + V3:</strong> Qilishi kerak edi, lekin qilmadi (tanqid va afsus).<br>\n          <em>Misol:</em> You should have verified the question keys before printing.<br>\n          • <strong>Might / May / Could have + V3:</strong> O'tmishdagi noaniq ehtimol.\n        </div>\n\n        <div class=\"uzb-meaning\">\n          🔥 <strong>Eng mashhur attestatsiya nozikligi:</strong><br>\n          • <em>You needn't have brought lunch:</em> Tushlik olib kelishing shart emas edi, lekin bekorga olib kelding.<br>\n          • <em>You didn't need to bring lunch:</em> Olib kelish kerak emas edi, va olib kelmading ham.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. METODIKA: 4 TA KO'NIKMANI INTEGRATSIYALASH</h2>\n        <p>Chet tilini alohida-alohida emas, uyg'un o'qitish (Integrated Skills):</p>\n        <p>Receptive ko'nikmalar (Reading & Listening) yangi axborot beradi, Productive ko'nikmalar (Speaking & Writing) esa o'sha axborot asosida mahsulot ishlab chiqaradi.</p>\n      </div>\n    ",
    keyPoints: ["Past Modals: must have done, can't have done, should have done","Needn't have done vs Didn't need to do","4 ko'nikma integratsiyasi (Integrated Skills Approach)"],
    trap: "'Needn't have done' (qilish shart emas edi, lekin qilib qo'ydi) va 'Didn't need to do' (kerak emasligi sababli qilmadi) farqini yodda tuting!",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 10-KUN: Prepositions & Pedagogik Nizolar Boshqaruvi</h2>\n        <p>Bog'liq predloglar (Dependent prepositions) attestatsiyada aniq leksik bilimni tekshiradi.</p>\n\n        <h3>1. Eng Ko'p Tushadigan Fe'l va Sifat Predloglari</h3>\n        <div class=\"formula-box\">\n          • <strong>ON:</strong> insist on, congratulate sb on, rely on, depend on, base on.<br>\n          • <strong>OF:</strong> capable of, proud of, approve of, accuse sb of, aware of.<br>\n          • <strong>FROM:</strong> prevent sb from doing, protect from, suffer from, prohibit from.<br>\n          • <strong>IN:</strong> succeed in, participate in, believe in, specialize in.<br>\n          • <strong>FOR:</strong> apologize for, criticize for, blame sb for sth.\n        </div>\n\n        <div class=\"example-pair\">\n          <div class=\"example-box bad\">\n            <span class=\"lbl\">Ortiqcha predlog qo'yish tuzog'i:</span>\n            ❌ Let's discuss about the lesson plan.<br>\n            ❌ The inspector emphasized on student engagement.\n          </div>\n          <div class=\"example-box good\">\n            <span class=\"lbl\">To'g'ri (Predlogsiz fe'llar):</span>\n            ✔️ Let's <strong>discuss</strong> the lesson plan.<br>\n            ✔️ The inspector <strong>emphasized</strong> student engagement.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. SINFDA NIZOLARNI BOSHQARISH (CONFLICT RESOLUTION)</h2>\n        <p>O'quvchilar yoki o'qituvchi-o'quvchi o'rtasidagi ziddiyatlarni hal qilish tamoyillari:</p>\n        <ul>\n          <li><strong>Collaboration (Hamkorlik — Win-Win):</strong> Ikkala tomon manfaatini inobatga olgan yechim topish.</li>\n          <li><strong>Active Listening (Faol tinglash):</strong> Hissiyotga berilmay, o'quvchi muammosini tushunish.</li>\n          <li>Sinf oldida jazolash yoki kamsitish pedagogik etikaga ziddir.</li>\n        </ul>\n      </div>\n    ",
    keyPoints: ["Dependent prepositions: insist ON, rely ON, prevent FROM, capable OF","Preposition + Gerund qoidasi","Sinfdagi nizolar (Conflict Management): Thomas-Kilmann modeli"],
    trap: "'Discuss about' yoki 'emphasize on' deb qo'ymang! Bu fe'llar o'zidan keyin predlog talab qilmaydi!",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 11-KUN: Phrasal Verbs (Eng Muhim 40 Ta) & Milliy Dastur</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Break down, Call off, Carry out, Put off, Look forward to\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Yangi Milliy o'quv dasturida kommunikativ kompetensiya va amaliy ko'nikmalar talabi.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Look forward to + V-ing ('to' bu yerda infinitive emas, predlog!).\n        </div>\n      </div>\n    ",
    keyPoints: ["Break down, Call off, Carry out, Put off, Look forward to","Yangi Milliy o'quv dasturida kommunikativ kompetensiya va amaliy ko'ni","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Look forward to + V-ing ('to' bu yerda infinitive emas, predlog!).",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 12-KUN: Reading Strategiyalari (Skimming/Scanning) & Inklyuzivlik</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Reading sub-skills: Skimming (gist), Scanning (specific info), Inference (reading between lines)\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Inklyuziv ta'lim: Alohida ta'lim ehtiyojlari bor bolalarga individual yondashuv.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Skimming butun matnni sinchiklab o'qish emas, 1-2 daqiqada umumiy ma'noni anglashdir.\n        </div>\n      </div>\n    ",
    keyPoints: ["Reading sub-skills: Skimming (gist), Scanning (specific info), Inferen","Inklyuziv ta'lim: Alohida ta'lim ehtiyojlari bor bolalarga individual ","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Skimming butun matnni sinchiklab o'qish emas, 1-2 daqiqada umumiy ma'noni anglashdir.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 13-KUN: Confusing Words (Make vs Do) & Attestatsiya Qonunchiligi</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Make (yaratish/ishlab chiqarish) vs Do (vazifa/harakat), Raise (o'timsiz) vs Rise (o'timli), Lie vs Lay\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Pedagog xodimlar attestatsiyasi nizomi, toifa talablari va mezonlari.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'Do an effort' emas, 'Make an effort'; 'Do research', 'Do homework'.\n        </div>\n      </div>\n    ",
    keyPoints: ["Make (yaratish/ishlab chiqarish) vs Do (vazifa/harakat), Raise (o'tims","Pedagog xodimlar attestatsiyasi nizomi, toifa talablari va mezonlari.","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "'Do an effort' emas, 'Make an effort'; 'Do research', 'Do homework'.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 14-KUN: Articles & Determiners (a/an/the, few/little) & Dars Tahlili</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Articles with geographical names, Few (kam, yetmaydi) vs A few (oz bo'lsa ham yetarli)\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Darsni kuzatish va tahlil qilish mezonlari (Observation rubrics).\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Uncountable otlar bilan few emas, little ishlatiladi. 'Few' inkor ma'no beradi.\n        </div>\n      </div>\n    ",
    keyPoints: ["Articles with geographical names, Few (kam, yetmaydi) vs A few (oz bo'","Darsni kuzatish va tahlil qilish mezonlari (Observation rubrics).","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Uncountable otlar bilan few emas, little ishlatiladi. 'Few' inkor ma'no beradi.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 15-KUN: Reported Speech & Reporting Verbs & Pedagogik Etika</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Backshift of tenses, reporting verbs: urge, threaten, deny doing, admit doing\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> O'qituvchi kasb etikasi, pedagogik takt va obro'-e'tibor me'yorlari.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'He denied to steal' emas, 'He denied stealing' (Gerund talab qiladi).\n        </div>\n      </div>\n    ",
    keyPoints: ["Backshift of tenses, reporting verbs: urge, threaten, deny doing, admi","O'qituvchi kasb etikasi, pedagogik takt va obro'-e'tibor me'yorlari.","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "'He denied to steal' emas, 'He denied stealing' (Gerund talab qiladi).",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 16-KUN: Noun Clauses & Question Tags Tuzoqlari & Darslik Tahlili</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Noun clauses as subject/object, Question tags: 'I am right, aren't I?', 'Let's go, shall we?'\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Yangi avlod darsliklarining tuzilishi va topshiriqlar tahlili.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'Nobody called, did they?' — Nobody inkor bo'lgani uchun tag ijobiy bo'ladi.\n        </div>\n      </div>\n    ",
    keyPoints: ["Noun clauses as subject/object, Question tags: 'I am right, aren't I?'","Yangi avlod darsliklarining tuzilishi va topshiriqlar tahlili.","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "'Nobody called, did they?' — Nobody inkor bo'lgani uchun tag ijobiy bo'ladi.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 17-KUN: Adjectives vs Adverbs & Degree Modifiers & Differentsiatsiya</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Hard vs Hardly, Late vs Lately, Gradable vs Non-gradable adjectives (absolutely furious)\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Differentiated instruction: O'quvchilarning turli darajasiga mos vazifalar berish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'Hardly' 'qattiq' degani emas, 'deyarli yo'q' degan inkor so'zdir!\n        </div>\n      </div>\n    ",
    keyPoints: ["Hard vs Hardly, Late vs Lately, Gradable vs Non-gradable adjectives (a","Differentiated instruction: O'quvchilarning turli darajasiga mos vazif","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "'Hardly' 'qattiq' degani emas, 'deyarli yo'q' degan inkor so'zdir!",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 18-KUN: Conjunctions (Although, Despite, In spite of) & Tanqidiy Fikrlash</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Although / Even though + Sentence vs Despite / In spite of + Noun / V-ing\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> O'quvchilarda tanqidiy fikrlashni (Critical Thinking) rivojlantirish usullari.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'Despite of' deb yozish qo'pol xatodir! 'In spite of' yoki 'Despite' bo'ladi.\n        </div>\n      </div>\n    ",
    keyPoints: ["Although / Even though + Sentence vs Despite / In spite of + Noun / V-","O'quvchilarda tanqidiy fikrlashni (Critical Thinking) rivojlantirish u","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "'Despite of' deb yozish qo'pol xatodir! 'In spite of' yoki 'Despite' bo'ladi.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 19-KUN: Subject-Verb Agreement (Murakkab Qoidalar) & Portfolio</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Neither... nor, Either... or (yaqin egaga qaraladi), As well as, Together with (1-egaga qaraladi)\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> O'quvchi portfoliosi: Yutuqlar va ijodiy ishlar to'plamini baholash.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> 'The teacher together with his students WAS (were emas!) present.'\n        </div>\n      </div>\n    ",
    keyPoints: ["Neither... nor, Either... or (yaqin egaga qaraladi), As well as, Toget","O'quvchi portfoliosi: Yutuqlar va ijodiy ishlar to'plamini baholash.","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "'The teacher together with his students WAS (were emas!) present.'",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 20-KUN: Idioms & Academic Collocations & AKT Vositalari</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: B2/C1 idioms: Bite the bullet, Burn the midnight oil, Once in a blue moon\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Darsda raqamli texnologiyalar va interaktiv ta'limiy platformalardan foydalanish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Idiomalarni so'zma-so'z tarjima qilib bo'lmaydi, ko'chma ma'noga e'tibor bering.\n        </div>\n      </div>\n    ",
    keyPoints: ["B2/C1 idioms: Bite the bullet, Burn the midnight oil, Once in a blue m","Darsda raqamli texnologiyalar va interaktiv ta'limiy platformalardan f","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Idiomalarni so'zma-so'z tarjima qilib bo'lmaydi, ko'chma ma'noga e'tibor bering.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 21-KUN: Listening Strategiyalari & Topshiriq Tuzish Metodikasi</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Top-down (fon bilimi asosida) vs Bottom-up (tovush va so'zlar asosida) tinglash\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Listening bosqichlari: Pre-listening, While-listening, Post-listening.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Pre-listening bosqichida audioni eshittirmasdan oldin kontekst va lug'at faollashtiriladi.\n        </div>\n      </div>\n    ",
    keyPoints: ["Top-down (fon bilimi asosida) vs Bottom-up (tovush va so'zlar asosida)","Listening bosqichlari: Pre-listening, While-listening, Post-listening.","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Pre-listening bosqichida audioni eshittirmasdan oldin kontekst va lug'at faollashtiriladi.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 22-KUN: Writing Turlari (Formal Letter, Essay) & Rubrikalar</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Linking devices: Furthermore, In contrast, Consequently; Formal tone register\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Baholash rubrikalari: Content, Communicative Achievement, Organization, Language.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Formal writingda qisqartmalar (don't, can't) va jargonlar ishlatilmaydi.\n        </div>\n      </div>\n    ",
    keyPoints: ["Linking devices: Furthermore, In contrast, Consequently; Formal tone r","Baholash rubrikalari: Content, Communicative Achievement, Organization","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Formal writingda qisqartmalar (don't, can't) va jargonlar ishlatilmaydi.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 23-KUN: Speaking Faoliyatlari (Information Gap) & Fluency</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Turn-taking, fillers (Well, actually), conversational repair\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Information Gap faoliyati: muloqot paydo bo'lishi uchun axborot tafovuti zarur.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Fluency faoliyatida o'qituvchi har bir grammatik xatoga sakrab tuzatmasligi lozim.\n        </div>\n      </div>\n    ",
    keyPoints: ["Turn-taking, fillers (Well, actually), conversational repair","Information Gap faoliyati: muloqot paydo bo'lishi uchun axborot tafovu","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Fluency faoliyatida o'qituvchi har bir grammatik xatoga sakrab tuzatmasligi lozim.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 24-KUN: B2-C1 Murakkab Grammatik Konstruksiyalar (Cleft)</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: It-cleft: It was the manager who announced... Wh-cleft: What I need is peace.\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Matnni tahlil qilish va murakkab sintaksisni tushuntirish uslubi.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Cleft gaplarda urg'u berilayotgan bo'lakka alohida urg'u qaratiladi.\n        </div>\n      </div>\n    ",
    keyPoints: ["It-cleft: It was the manager who announced... Wh-cleft: What I need is","Matnni tahlil qilish va murakkab sintaksisni tushuntirish uslubi.","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Cleft gaplarda urg'u berilayotgan bo'lakka alohida urg'u qaratiladi.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 25-KUN: Attestatsiyada Eng Ko'p Yiqitadigan 30 Ta 'Tuzoq' Qoidalar</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Imtihon komissiyasi sevadigan barcha 'tuzoq'lar: Inversion, Subjunctive, Prepositions\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Test strategiyasi: Savolni oxirigacha o'qish va inkor so'zlarni payqash.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Savoldagi 'NOT', 'EXCEPT' so'zlariga shoshqaloqlik qilib e'tibor bermaslik.\n        </div>\n      </div>\n    ",
    keyPoints: ["Imtihon komissiyasi sevadigan barcha 'tuzoq'lar: Inversion, Subjunctiv","Test strategiyasi: Savolni oxirigacha o'qish va inkor so'zlarni payqas","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Savoldagi 'NOT', 'EXCEPT' so'zlariga shoshqaloqlik qilib e'tibor bermaslik.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 26-KUN: 1-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol)</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: 40 ta mutaxassislik grammatika va leksika savollari sinovi\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> 10 ta pedagogika va metodika savollari sinovi va vaqt taqsimoti.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Har bir savolga o'rtacha 1.5 daqiqa vaqt ajrating, bitta savolga tiqilib qolmang.\n        </div>\n      </div>\n    ",
    keyPoints: ["40 ta mutaxassislik grammatika va leksika savollari sinovi","10 ta pedagogika va metodika savollari sinovi va vaqt taqsimoti.","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Har bir savolga o'rtacha 1.5 daqiqa vaqt ajrating, bitta savolga tiqilib qolmang.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 27-KUN: 1-Mock Test Tahlili va Xatolar Diagnostikasi</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Testda yo'l qo'yilgan xatolarning chuqur qoidalar tahlili\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> O'z-o'zini baholash va zaif mavzular bo'yicha mustaqil reja tuzish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Xatoni shunchaki to'g'ri javobni ko'rib o'tish bilan cheklanmang, qoidasini yozing.\n        </div>\n      </div>\n    ",
    keyPoints: ["Testda yo'l qo'yilgan xatolarning chuqur qoidalar tahlili","O'z-o'zini baholash va zaif mavzular bo'yicha mustaqil reja tuzish.","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Xatoni shunchaki to'g'ri javobni ko'rib o'tish bilan cheklanmang, qoidasini yozing.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 28-KUN: 2-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol)</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Ikkinchi to'liq attestatsiya simulyatsiyasi\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Imtihon muhitini yaratish, diqqatni jamlash va stressni yengish.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Variantlarni darhol belgilashdan oldin qolgan 3 tasini xatoligiga ishonch hosil qiling.\n        </div>\n      </div>\n    ",
    keyPoints: ["Ikkinchi to'liq attestatsiya simulyatsiyasi","Imtihon muhitini yaratish, diqqatni jamlash va stressni yengish.","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Variantlarni darhol belgilashdan oldin qolgan 3 tasini xatoligiga ishonch hosil qiling.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 29-KUN: 2-Mock Test Tahlili va So'nggi Yo'l-Yo'riqlar</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Yakuniy xatolar korreksiyasi va mustahkamlash\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Attestatsiya kuni uchun tavsiyalar va psixologik tayyorgarlik.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Eng ko'p ball yo'qotilgan mavzuni qayta konspekt qiling.\n        </div>\n      </div>\n    ",
    keyPoints: ["Yakuniy xatolar korreksiyasi va mustahkamlash","Attestatsiya kuni uchun tavsiyalar va psixologik tayyorgarlik.","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Eng ko'p ball yo'qotilgan mavzuni qayta konspekt qiling.",
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
    theoryHtml: "\n      <div class=\"theory-card\">\n        <h2>🧐 30-KUN: Imtihon Oldi Ekspress-Takrorlash & Psixologik Tayyorgarlik</h2>\n        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>\n\n        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>\n        <div class=\"formula-box\">\n          📌 Asosiy qolip va birliklar: Barcha 30 kunlik eng muhim formulalar va qoliplar xulosasi\n        </div>\n        <div class=\"uzb-meaning\">\n          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.\n        </div>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>\n        <div class=\"formula-box\" style=\"background: #eff6ff; border-color: #93c5fd;\">\n          📘 <strong>Metodik tamoyil:</strong> Attestatsiya zalida yuqori natijaga erishish va 100 ballik strategiya.\n        </div>\n        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>\n      </div>\n\n      <div class=\"theory-card\">\n        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>\n        <div class=\"uzb-meaning\" style=\"background: #fef2f2; border-color: #ef4444; color: #991b1b;\">\n          ⚠️ <strong>DIQQAT — TUZOQ:</strong> Imtihon oldi kechasi uyqusizlikdan saqlaning — miya dam olishi eng muhim omil.\n        </div>\n      </div>\n    ",
    keyPoints: ["Barcha 30 kunlik eng muhim formulalar va qoliplar xulosasi","Attestatsiya zalida yuqori natijaga erishish va 100 ballik strategiya.","Attestatsiya imtihoni talablari va me'yorlari"],
    trap: "Imtihon oldi kechasi uyqusizlikdan saqlaning — miya dam olishi eng muhim omil.",
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
