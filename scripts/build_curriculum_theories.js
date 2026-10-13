const fs = require('fs');
const path = require('path');

const THEORIES = {
  3: {
    keyPoints: [
      "Subjunctive: It is vital that he BE present (bare infinitive)",
      "Causative: have sth done, get sb TO do, make sb do",
      "Formative (o'sish uchun) vs Summative (yakuniy baho)"
    ],
    trap: "'It is essential that she attend...' — 'attends' yoki 'attended' emas, fe'l o'zining sof negiz (infinitive) shaklida bo'ladi!",
    html: `
      <div class="theory-card">
        <h2>🧐 3-KUN: Subjunctive Mood & Causative Verbs & Baholash Turlari</h2>
        <p>Attestatsiya testlarida Subjunctive va Causative mavzulari B2/C1 darajadagi eng sevimli grammatik savollardan hisoblanadi.</p>

        <h3>1. Subjunctive Mood (Majhul / Buyruq Mayli)</h3>
        <p>Rasmiy talab, taklif yoki muhimlikni bildiruvchi iboralardan keyin fe'l qaysi zamon va shaxsda bo'lishidan qat'i nazar <strong>Bare Infinitive (fe'lning o'zak shakli - V1)</strong> bo'ladi:</p>

        <div class="formula-box">
          [Qolip] ➔ It is vital / essential / imperative / crucial that + Subject + [Bare Infinitive]
        </div>

        <div class="uzb-meaning">
          💡 <em>Fe'llar bilan:</em> suggest, recommend, insist, demand, propose that + Subject + [V1]<br>
          • <em>Misol:</em> The director insisted that every teacher <strong>attend</strong> (attends emas!) the conference.<br>
          • <em>Misol:</em> It is mandatory that he <strong>be</strong> (is emas!) on time.
        </div>

        <div class="example-pair">
          <div class="example-box bad">
            <span class="lbl">Noto'g'ri (Odatiy 3-shaxs xatosi):</span>
            ❌ The inspector demanded that he submits the syllabus immediately.<br>
            ❌ It is vital that she is informed.
          </div>
          <div class="example-box good">
            <span class="lbl">To'g'ri (Attestatsiya standarti):</span>
            ✔️ The inspector demanded that he <strong>submit</strong> the syllabus immediately.<br>
            ✔️ It is vital that she <strong>be</strong> informed.
          </div>
        </div>
      </div>

      <div class="theory-card">
        <h2>🔧 2. CAUSATIVE VERBS (Ish-harakatni birovga qildirmoq)</h2>
        <p>Imtihonda 3 asosiy vositachi fe'lning qoliplari tekshiriladi:</p>

        <div class="formula-box">
          1. <strong>HAVE:</strong><br>
          • Faol: have + person + <strong>V1 (bare infinitive)</strong> ➔ <em>I had the technician repair my laptop.</em><br>
          • Majhul: have + object + <strong>V3 (past participle)</strong> ➔ <em>I had my laptop repaired.</em>
        </div>

        <div class="formula-box">
          2. <strong>GET:</strong><br>
          • Faol: get + person + <strong>to + V1 (infinitive with to)</strong> ➔ <em>She got her colleague to substitute her.</em><br>
          • Majhul: get + object + <strong>V3</strong> ➔ <em>She got her car washed.</em>
        </div>

        <div class="formula-box">
          3. <strong>MAKE:</strong><br>
          • Faol: make + person + <strong>V1</strong> ➔ <em>The teacher made students rewrite the essay.</em><br>
          • ⚠️ Majhulda 'to' paydo bo'ladi: <em>Students were made <strong>to rewrite</strong> the essay.</em>
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 3. PEDAGOGIK METODIKA: FORMATIVE VS SUMMATIVE BAHOLASH</h2>
        <p>Attestatsiya pedagogika blokida baholash falsafasi bo'yicha doimiy tushadigan savollar:</p>

        <div class="formula-box" style="background: #eff6ff; border-color: #93c5fd;">
          📊 <strong>Formative Assessment (Formatif — Shakllantiruvchi):</strong><br>
          • Maqsad: O'quvchining o'sish dinamikasini aniqlash va o'z vaqtida tuzatish (Assessment FOR learning).<br>
          • Xususiyati: Ball yoki jazo berilmaydi, doimiy konstruktiv feedback beriladi. (Exit ticket, o'zaro baholash, qisqa viktorina).
        </div>

        <div class="formula-box" style="background: #fef2f2; border-color: #fca5a5;">
          🎓 <strong>Summative Assessment (Summativ — Yakuniy):</strong><br>
          • Maqsad: Belgilangan davr (chorak, yil, kurs) oxirida bilimlarni rasmiy baholash (Assessment OF learning).<br>
          • Xususiyati: Yuqori xavfli (high-stakes), standartlashtirilgan testlar va yakuniy imtihonlar.
        </div>
      </div>
    `
  },

  4: {
    keyPoints: [
      "Ma'nosi o'zgaruvchi fe'llar: remember, stop, regret, try, forget",
      "Bare infinitive: let, make, help, hear, see",
      "Feedback turlari: Immediate vs Delayed, Constructive vs Destructive"
    ],
    trap: "'Stop to smoke' (chekish uchun to'xtamoq) va 'Stop smoking' (chekishni tashlamoq) o'rtasidagi ma'no farqini adashtirmang!",
    html: `
      <div class="theory-card">
        <h2>🧐 4-KUN: Gerund vs Infinitive & O'quvchilarga Qayta Aloqa (Feedback)</h2>
        <p>Gerund (V-ing) va Infinitive (to + V1) mavzusi attestatsiyada asosan ma'nosi o'zgaradigan fe'llar doirasida sinaladi.</p>

        <h3>1. Ma'nosi Keskin O'zgaradigan Fe'llar</h3>
        <div class="formula-box">
          • <strong>Remember / Forget to do:</strong> Kelajakda bajarilishi kerak bo'lgan vazifani eslamoq/unutmoq.<br>
          <em>Misol:</em> Remember to turn off the projector. (Proyektorni o'chirishni unutmang).<br>
          • <strong>Remember / Forget doing:</strong> O'tmishda qilingan ishni xotirlamoq/unutmoq.<br>
          <em>Misol:</em> I remember meeting the examiner last year. (O'tgan yili imtihon oluvchi bilan uchrashganimni eslayman).
        </div>

        <div class="formula-box">
          • <strong>Stop to do:</strong> Boshqa ishni qilish uchun to'xtamoq.<br>
          <em>Misol:</em> On my way home, I stopped to buy bread. (Non sotib olish uchun to'xtadim).<br>
          • <strong>Stop doing:</strong> O'sha ish-harakatni butunlay to'xtatmoq/tashlamoq.<br>
          <em>Misol:</em> Please stop talking during the listening test. (Gaplashishni to'xtating).
        </div>

        <div class="formula-box">
          • <strong>Regret to say/inform:</strong> Afsus bilan ma'lum qilmoq (rasmiy xat qolipi).<br>
          • <strong>Regret doing:</strong> O'tmishda qilingan ishdan pushaymon bo'lmoq.
        </div>

        <div class="formula-box">
          • <strong>Try to do:</strong> Kuch sarflab harakat qilmoq (harakat qiyin).<br>
          • <strong>Try doing:</strong> Tajriba qilib ko'rmoq (samaradorligini sinash).
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. PEDAGOGIK METODIKA: FEEDBACK (QAYTA ALOQA) MADANIYATI</h2>
        <p>Attestatsiya mezonida o'quvchi xatosini to'g'rilashda pedagogning yondashuvi:</p>
        <ul>
          <li><strong>Immediate Feedback (Darhol tuzatish):</strong> Aniqlik (Accuracy) mashqlarida (drill, talaffuz) qo'llaniladi.</li>
          <li><strong>Delayed Feedback (Kechiktirilgan tuzatish):</strong> Erkin muloqot (Fluency, Speaking debate) paytida o'quvchini gap o'rtasida to'xtatmaslik, xatolarni dars oxirida umumiy tahlil qilish.</li>
          <li><strong>Peer Feedback (Tengdosh baholash):</strong> O'quvchilarda tanqidiy fikrlash va mas'uliyatni oshiradi.</li>
        </ul>
      </div>
    `
  },

  5: {
    keyPoints: [
      "Present Participle (Doing) va Past Participle (Done)",
      "Having done: bir ish-harakat ikkinchisidan aniq oldin tugaganida",
      "Bloom Taksonomiyasi: 6 pog'ona (Remembering ➔ Creating)"
    ],
    trap: "Dangling Participle: Participle clause va asosiy gapning egasi BITTA shaxs bo'lishi shart! 'Walking in the park, the rain started' ❌ (Yomg'ir parkda aylanib yurmagan!)",
    html: `
      <div class="theory-card">
        <h2>🧐 5-KUN: Participle Clauses & Bloom Taksonomiyasi</h2>
        <p>Participle clauses (Sifatdoshli ergash gaplar) gapni ixcham va akademik qilish usuli bo'lib, testda ega uyg'unligi tekshiriladi.</p>

        <h3>1. Participle Turlari va Qoliplari</h3>
        <div class="formula-box">
          • <strong>Present Participle (V-ing):</strong> Bir vaqtda sodir bo'layotgan yoki sabab bildiruvchi faol ish-harakat.<br>
          <em>Misol:</em> Feeling exhausted, the teacher decided to rest. (= Because he felt exhausted)<br>
          • <strong>Past Participle (V3):</strong> Majhul ma'nodagi qisqartma.<br>
          <em>Misol:</em> Built in 1990, the school needed renovation. (= Which was built...)<br>
          • <strong>Perfect Participle (Having + V3):</strong> Bir harakat ikkinchisidan OLDIN to'liq yakunlanganda.<br>
          <em>Misol:</em> Having submitted the grades, she left the office. (= After she had submitted...)
        </div>

        <div class="example-pair">
          <div class="example-box bad">
            <span class="lbl">Dangling Participle (Qo'pol xato):</span>
            ❌ Opening the exam paper, the questions were difficult.<br>
            <em>(Test varag'ini savollar ochmagan!)</em>
          </div>
          <div class="example-box good">
            <span class="lbl">To'g'ri bog'lanish:</span>
            ✔️ Opening the exam paper, <strong>the candidate</strong> found the questions difficult.
          </div>
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. BLOOM TAKSONOMIYASI (BILISH DARAJALARI)</h2>
        <p>Dars maqsadlari va savollar darajasi (Quyi tartibdan Yuqori tartibga — LOTS ➔ HOTS):</p>
        <ol>
          <li><strong>Remembering (Eslab qolish):</strong> Qoida, sana, ta'riflarni takrorlash (Recall).</li>
          <li><strong>Understanding (Tushunish):</strong> O'z so'zlari bilan tushuntirish, umumlashtirish.</li>
          <li><strong>Applying (Qo'llash):</strong> Qoidani yangi vaziyatda ishlatish.</li>
          <li><strong>Analyzing (Tahlil qilish):</strong> Bo'laklarga ajratish, sabab va oqibatni solishtirish.</li>
          <li><strong>Evaluating (Baholash):</strong> Mezon asosida xulosa va hukm chiqarish (Critique).</li>
          <li><strong>Creating (Yaratish):</strong> Yangi original mahsulot, reja yoki loyiha ishlab chiqish.</li>
        </ol>
      </div>
    `
  },

  6: {
    keyPoints: [
      "Wish + Past Simple (Hozirgi afsus)",
      "Wish + Past Perfect (O'tmishdagi afsus)",
      "Wish + Would (Boshqa odamning harakatidan norozilik)",
      "SMART dars maqsadlari"
    ],
    trap: "'I wish I would have more money' ❌ — O'zimizga nisbatan 'would' ishlatilmaydi! 'I wish I had' bo'ladi.",
    html: `
      <div class="theory-card">
        <h2>🧐 6-KUN: Wish / If Only / As if & SMART Dars Maqsadlari</h2>
        <p>Wish qoliplari xuddi Conditionals kabi zamonni bir bosqich orqaga surish qoidasiga bo'ysunadi.</p>

        <h3>1. Wish / If Only Qoliplari</h3>
        <div class="formula-box">
          1. <strong>Hozirgi zamondagi noreal orzu:</strong><br>
          Qolip: Wish + Past Simple (were / V2)<br>
          <em>Misol:</em> I wish I were fluent in simultaneous interpretation. (Koshki hozir ravon bo'lsam).
        </div>

        <div class="formula-box">
          2. <strong>O'tmishdagi pushaymonlik:</strong><br>
          Qolip: Wish + Past Perfect (had + V3)<br>
          <em>Misol:</em> I wish I had read the circular earlier. (Koshki xatni ertaroq o'qiganimda edi).
        </div>

        <div class="formula-box">
          3. <strong>Boshqa shaxsning xatti-harakatidan g'ashlanish va to'xtatishni talab qilish:</strong><br>
          Qolip: Wish + person + <strong>would + V1</strong><br>
          <em>Misol:</em> I wish you would stop interrupting me! (Gapimni bo'lishni bas qilsangiz edi!)<br>
          ⚠️ <em>Qoida:</em> Ega bilan 'wish'ning egasi bir xil bo'lsa (I wish I...), 'would' ishlatilmaydi, 'could' ishlatiladi.
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. PEDAGOGIK METODIKA: SMART DARS MAQSADLARI</h2>
        <p>O'qituvchi dars konspektida maqsadni quyidagi 5 mezon asosida qo'yishi shart:</p>
        <ul>
          <li><strong>S — Specific (Aniq):</strong> Umumiy emas, aniq nima o'rganilishi ko'rsatiladi.</li>
          <li><strong>M — Measurable (O'lchanadigan):</strong> Natijani foiz yoki test bilan o'lchab bo'lishi kerak.</li>
          <li><strong>A — Achievable (Erishsa bo'ladigan):</strong> O'quvchining yosh va bilim darajasiga mos.</li>
          <li><strong>R — Relevant (Dolzarb / Ahamiyatli):</strong> O'quv dasturi va hayotiy ehtiyojga bog'liq.</li>
          <li><strong>T — Time-bound (Vaqt bilan chegaralangan):</strong> 45 daqiqalik dars oxirigacha erishiladigan.</li>
        </ul>
      </div>
    `
  },

  7: {
    keyPoints: [
      "Passive Voice: be + V3",
      "Impersonal Passive: It is believed that... / He is said to be...",
      "Sinf boshqaruvi: TTT (Teacher Talking Time) vs STT (Student Talking Time)"
    ],
    trap: "'He is said to have escaped' — o'tmishdagi ish-harakat uchun oddiy to-V1 emas, 'to have + V3' (Perfect Infinitive) qo'yiladi!",
    html: `
      <div class="theory-card">
        <h2>🧐 7-KUN: Passive Voice & Impersonal Passive & Sinf Boshqaruvi</h2>
        <p>Attestatsiyada oddiy majhul gaplar emas, balki akademik tildagi <strong>Impersonal Passive</strong> formulalari tushadi.</p>

        <h3>1. Impersonal Passive (Ommaviy fikr va xabarlar)</h3>
        <p>Fe'llar: say, believe, report, consider, claim, expect, think.</p>

        <div class="formula-box">
          1-QOLIP: It + Passive Verb + that-clause<br>
          <em>Misol:</em> It is believed that the new policy improves educational equity.
        </div>

        <div class="formula-box">
          2-QOLIP (Murakkab): Subject + Passive Verb + <strong>to-infinitive</strong><br>
          • Hozirgi zamon: <em>He is said <strong>to live</strong> abroad.</em><br>
          • O'tgan zamon (Perfect Infinitive): <em>The minister is reported <strong>to have signed</strong> the decree yesterday.</em>
        </div>

        <div class="uzb-meaning">
          💡 <strong>Attestatsiya tuzog'i:</strong> Agar gapda o'tmishdagi harakat aytilayotgan bo'lsa, 'to + V1' emas, <strong>'to have + V3'</strong> qo'yiladi!
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. SINF BOSHQARUVI: TTT VS STT NISBATI</h2>
        <ul>
          <li><strong>TTT (Teacher Talking Time):</strong> Zamonaviy darsda o'qituvchi vaqti 30% dan oshmasligi kerak.</li>
          <li><strong>STT (Student Talking Time):</strong> O'quvchi muloqot vaqti kamida 70% ni tashkil qilishi shart (Student-Centered Learning).</li>
          <li><strong>Partalar joylashuvi (Seating Arrangement):</strong> U-shape (munozara uchun), Horseshoe, Group clusters (guruh ishlari uchun).</li>
        </ul>
      </div>
    `
  },

  8: {
    keyPoints: [
      "Defining vs Non-defining Relative Clauses",
      "Whom (to'ldiruvchi) vs Whose (egalik)",
      "Ichki (Intrinsic) vs Tashqi (Extrinsic) Motivatsiya"
    ],
    trap: "Non-defining relative clause'da (vergul bilan ajratilgan gaplarda) 'that' aslo ishlatilmaydi! Faqat 'which' yoki 'who' bo'ladi.",
    html: `
      <div class="theory-card">
        <h2>🧐 8-KUN: Relative Clauses & O'quvchi Motivatsiyasi</h2>
        <p>Nisbiy ergash gaplarda vergul qoidasi va olmoshlar attestatsiyaning doimiy savollaridir.</p>

        <h3>1. Defining vs Non-defining Clauses</h3>
        <div class="formula-box">
          • <strong>Defining (Aniqlovchi):</strong> Gapdan olib tashlansa ma'no buziladi, vergul qo'yilmaydi. 'That' ishlatilishi mumkin.<br>
          <em>Misol:</em> The teacher that/who won the award works at our school.
        </div>

        <div class="formula-box">
          • <strong>Non-defining (Qo'shimcha ma'lumot beruvchi):</strong> Vergullar orasida bo'ladi. Olib tashlansa ham asosiy ma'no saqlanadi.<br>
          <em>Misol:</em> My headmaster, <strong>who</strong> has 20 years of experience, praised the project.<br>
          ⚠️ <strong>QAT'IY QOIDA:</strong> Vergulli gapda hech qachon <code>that</code> qo'yilmaydi!
        </div>

        <div class="formula-box">
          • <strong>Whom vs Whose:</strong><br>
          - <em>Whom:</em> Vositali to'ldiruvchi o'rnida: <em>The inspector with whom we spoke...</em><br>
          - <em>Whose:</em> Egalik olmoshi o'rnida: <em>The student whose essay was published...</em>
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. PEDAGOGIK MOTIVATSIYA METODLARI</h2>
        <ul>
          <li><strong>Intrinsic Motivation (Ichki motivatsiya):</strong> O'quvchining fanga bo'lgan qiziqishi, shaxsiy zavqi va o'rganish ishtiyoqi. Eng barqaror motivatsiya turi!</li>
          <li><strong>Extrinsic Motivation (Tashqi motivatsiya):</strong> Baho, maqtov, mukofot yoki jazodan qo'rqish sababli o'qish.</li>
          <li><em>Attestatsiya xulosasi:</em> Samarali o'qituvchi tashqi rag'batdan ichki motivatsiyani uyg'otishga ko'prik yasaydi.</li>
        </ul>
      </div>
    `
  },

  9: {
    keyPoints: [
      "Past Modals: must have done, can't have done, should have done",
      "Needn't have done vs Didn't need to do",
      "4 ko'nikma integratsiyasi (Integrated Skills Approach)"
    ],
    trap: "'Needn't have done' (qilish shart emas edi, lekin qilib qo'ydi) va 'Didn't need to do' (kerak emasligi sababli qilmadi) farqini yodda tuting!",
    html: `
      <div class="theory-card">
        <h2>🧐 9-KUN: Past Modals (O'tmish Modallari) & 4 Ko'nikma Integratsiyasi</h2>
        <p>O'tmishda sodir bo'lgan ish-harakatga nisbatan xulosa (deduction) va afsus bildirishda modal + have + V3 ishlatiladi.</p>

        <h3>1. O'tmish Modallari va Ma'nolari</h3>
        <div class="formula-box">
          • <strong>Must have + V3:</strong> 99% ishonch bilan o'tmishdagi mantiqiy xulosa.<br>
          <em>Misol:</em> The lights were off; they must have left the office.<br>
          • <strong>Can't / Couldn't have + V3:</strong> O'tmishda ro'y berishi mutlaqo imkonsiz bo'lgan hodisa.<br>
          <em>Misol:</em> He can't have committed the error; he was absent yesterday.<br>
          • <strong>Should have + V3:</strong> Qilishi kerak edi, lekin qilmadi (tanqid va afsus).<br>
          <em>Misol:</em> You should have verified the question keys before printing.<br>
          • <strong>Might / May / Could have + V3:</strong> O'tmishdagi noaniq ehtimol.
        </div>

        <div class="uzb-meaning">
          🔥 <strong>Eng mashhur attestatsiya nozikligi:</strong><br>
          • <em>You needn't have brought lunch:</em> Tushlik olib kelishing shart emas edi, lekin bekorga olib kelding.<br>
          • <em>You didn't need to bring lunch:</em> Olib kelish kerak emas edi, va olib kelmading ham.
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. METODIKA: 4 TA KO'NIKMANI INTEGRATSIYALASH</h2>
        <p>Chet tilini alohida-alohida emas, uyg'un o'qitish (Integrated Skills):</p>
        <p>Receptive ko'nikmalar (Reading & Listening) yangi axborot beradi, Productive ko'nikmalar (Speaking & Writing) esa o'sha axborot asosida mahsulot ishlab chiqaradi.</p>
      </div>
    `
  },

  10: {
    keyPoints: [
      "Dependent prepositions: insist ON, rely ON, prevent FROM, capable OF",
      "Preposition + Gerund qoidasi",
      "Sinfdagi nizolar (Conflict Management): Thomas-Kilmann modeli"
    ],
    trap: "'Discuss about' yoki 'emphasize on' deb qo'ymang! Bu fe'llar o'zidan keyin predlog talab qilmaydi!",
    html: `
      <div class="theory-card">
        <h2>🧐 10-KUN: Prepositions & Pedagogik Nizolar Boshqaruvi</h2>
        <p>Bog'liq predloglar (Dependent prepositions) attestatsiyada aniq leksik bilimni tekshiradi.</p>

        <h3>1. Eng Ko'p Tushadigan Fe'l va Sifat Predloglari</h3>
        <div class="formula-box">
          • <strong>ON:</strong> insist on, congratulate sb on, rely on, depend on, base on.<br>
          • <strong>OF:</strong> capable of, proud of, approve of, accuse sb of, aware of.<br>
          • <strong>FROM:</strong> prevent sb from doing, protect from, suffer from, prohibit from.<br>
          • <strong>IN:</strong> succeed in, participate in, believe in, specialize in.<br>
          • <strong>FOR:</strong> apologize for, criticize for, blame sb for sth.
        </div>

        <div class="example-pair">
          <div class="example-box bad">
            <span class="lbl">Ortiqcha predlog qo'yish tuzog'i:</span>
            ❌ Let's discuss about the lesson plan.<br>
            ❌ The inspector emphasized on student engagement.
          </div>
          <div class="example-box good">
            <span class="lbl">To'g'ri (Predlogsiz fe'llar):</span>
            ✔️ Let's <strong>discuss</strong> the lesson plan.<br>
            ✔️ The inspector <strong>emphasized</strong> student engagement.
          </div>
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. SINFDA NIZOLARNI BOSHQARISH (CONFLICT RESOLUTION)</h2>
        <p>O'quvchilar yoki o'qituvchi-o'quvchi o'rtasidagi ziddiyatlarni hal qilish tamoyillari:</p>
        <ul>
          <li><strong>Collaboration (Hamkorlik — Win-Win):</strong> Ikkala tomon manfaatini inobatga olgan yechim topish.</li>
          <li><strong>Active Listening (Faol tinglash):</strong> Hissiyotga berilmay, o'quvchi muammosini tushunish.</li>
          <li>Sinf oldida jazolash yoki kamsitish pedagogik etikaga ziddir.</li>
        </ul>
      </div>
    `
  }
};

// Generate comprehensive fallback theories for Days 11 to 30 based on CURRICULUM_INDEX
const TOPICS_REMAINDER = [
  { day: 11, title: "Phrasal Verbs (Eng Muhim 40 Ta) & Milliy Dastur", grammar: "Break down, Call off, Carry out, Put off, Look forward to", method: "Yangi Milliy o'quv dasturida kommunikativ kompetensiya va amaliy ko'nikmalar talabi.", trap: "Look forward to + V-ing ('to' bu yerda infinitive emas, predlog!)." },
  { day: 12, title: "Reading Strategiyalari (Skimming/Scanning) & Inklyuzivlik", grammar: "Reading sub-skills: Skimming (gist), Scanning (specific info), Inference (reading between lines)", method: "Inklyuziv ta'lim: Alohida ta'lim ehtiyojlari bor bolalarga individual yondashuv.", trap: "Skimming butun matnni sinchiklab o'qish emas, 1-2 daqiqada umumiy ma'noni anglashdir." },
  { day: 13, title: "Confusing Words (Make vs Do) & Attestatsiya Qonunchiligi", grammar: "Make (yaratish/ishlab chiqarish) vs Do (vazifa/harakat), Raise (o'timsiz) vs Rise (o'timli), Lie vs Lay", method: "Pedagog xodimlar attestatsiyasi nizomi, toifa talablari va mezonlari.", trap: "'Do an effort' emas, 'Make an effort'; 'Do research', 'Do homework'." },
  { day: 14, title: "Articles & Determiners (a/an/the, few/little) & Dars Tahlili", grammar: "Articles with geographical names, Few (kam, yetmaydi) vs A few (oz bo'lsa ham yetarli)", method: "Darsni kuzatish va tahlil qilish mezonlari (Observation rubrics).", trap: "Uncountable otlar bilan few emas, little ishlatiladi. 'Few' inkor ma'no beradi." },
  { day: 15, title: "Reported Speech & Reporting Verbs & Pedagogik Etika", grammar: "Backshift of tenses, reporting verbs: urge, threaten, deny doing, admit doing", method: "O'qituvchi kasb etikasi, pedagogik takt va obro'-e'tibor me'yorlari.", trap: "'He denied to steal' emas, 'He denied stealing' (Gerund talab qiladi)." },
  { day: 16, title: "Noun Clauses & Question Tags Tuzoqlari & Darslik Tahlili", grammar: "Noun clauses as subject/object, Question tags: 'I am right, aren't I?', 'Let's go, shall we?'", method: "Yangi avlod darsliklarining tuzilishi va topshiriqlar tahlili.", trap: "'Nobody called, did they?' — Nobody inkor bo'lgani uchun tag ijobiy bo'ladi." },
  { day: 17, title: "Adjectives vs Adverbs & Degree Modifiers & Differentsiatsiya", grammar: "Hard vs Hardly, Late vs Lately, Gradable vs Non-gradable adjectives (absolutely furious)", method: "Differentiated instruction: O'quvchilarning turli darajasiga mos vazifalar berish.", trap: "'Hardly' 'qattiq' degani emas, 'deyarli yo'q' degan inkor so'zdir!" },
  { day: 18, title: "Conjunctions (Although, Despite, In spite of) & Tanqidiy Fikrlash", grammar: "Although / Even though + Sentence vs Despite / In spite of + Noun / V-ing", method: "O'quvchilarda tanqidiy fikrlashni (Critical Thinking) rivojlantirish usullari.", trap: "'Despite of' deb yozish qo'pol xatodir! 'In spite of' yoki 'Despite' bo'ladi." },
  { day: 19, title: "Subject-Verb Agreement (Murakkab Qoidalar) & Portfolio", grammar: "Neither... nor, Either... or (yaqin egaga qaraladi), As well as, Together with (1-egaga qaraladi)", method: "O'quvchi portfoliosi: Yutuqlar va ijodiy ishlar to'plamini baholash.", trap: "'The teacher together with his students WAS (were emas!) present.'" },
  { day: 20, title: "Idioms & Academic Collocations & AKT Vositalari", grammar: "B2/C1 idioms: Bite the bullet, Burn the midnight oil, Once in a blue moon", method: "Darsda raqamli texnologiyalar va interaktiv ta'limiy platformalardan foydalanish.", trap: "Idiomalarni so'zma-so'z tarjima qilib bo'lmaydi, ko'chma ma'noga e'tibor bering." },
  { day: 21, title: "Listening Strategiyalari & Topshiriq Tuzish Metodikasi", grammar: "Top-down (fon bilimi asosida) vs Bottom-up (tovush va so'zlar asosida) tinglash", method: "Listening bosqichlari: Pre-listening, While-listening, Post-listening.", trap: "Pre-listening bosqichida audioni eshittirmasdan oldin kontekst va lug'at faollashtiriladi." },
  { day: 22, title: "Writing Turlari (Formal Letter, Essay) & Rubrikalar", grammar: "Linking devices: Furthermore, In contrast, Consequently; Formal tone register", method: "Baholash rubrikalari: Content, Communicative Achievement, Organization, Language.", trap: "Formal writingda qisqartmalar (don't, can't) va jargonlar ishlatilmaydi." },
  { day: 23, title: "Speaking Faoliyatlari (Information Gap) & Fluency", grammar: "Turn-taking, fillers (Well, actually), conversational repair", method: "Information Gap faoliyati: muloqot paydo bo'lishi uchun axborot tafovuti zarur.", trap: "Fluency faoliyatida o'qituvchi har bir grammatik xatoga sakrab tuzatmasligi lozim." },
  { day: 24, title: "B2-C1 Murakkab Grammatik Konstruksiyalar (Cleft)", grammar: "It-cleft: It was the manager who announced... Wh-cleft: What I need is peace.", method: "Matnni tahlil qilish va murakkab sintaksisni tushuntirish uslubi.", trap: "Cleft gaplarda urg'u berilayotgan bo'lakka alohida urg'u qaratiladi." },
  { day: 25, title: "Attestatsiyada Eng Ko'p Yiqitadigan 30 Ta 'Tuzoq' Qoidalar", grammar: "Imtihon komissiyasi sevadigan barcha 'tuzoq'lar: Inversion, Subjunctive, Prepositions", method: "Test strategiyasi: Savolni oxirigacha o'qish va inkor so'zlarni payqash.", trap: "Savoldagi 'NOT', 'EXCEPT' so'zlariga shoshqaloqlik qilib e'tibor bermaslik." },
  { day: 26, title: "1-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol)", grammar: "40 ta mutaxassislik grammatika va leksika savollari sinovi", method: "10 ta pedagogika va metodika savollari sinovi va vaqt taqsimoti.", trap: "Har bir savolga o'rtacha 1.5 daqiqa vaqt ajrating, bitta savolga tiqilib qolmang." },
  { day: 27, title: "1-Mock Test Tahlili va Xatolar Diagnostikasi", grammar: "Testda yo'l qo'yilgan xatolarning chuqur qoidalar tahlili", method: "O'z-o'zini baholash va zaif mavzular bo'yicha mustaqil reja tuzish.", trap: "Xatoni shunchaki to'g'ri javobni ko'rib o'tish bilan cheklanmang, qoidasini yozing." },
  { day: 28, title: "2-TO'LIQ MOCK ATTESTATSIYA TESTI (40+10 Savol)", grammar: "Ikkinchi to'liq attestatsiya simulyatsiyasi", method: "Imtihon muhitini yaratish, diqqatni jamlash va stressni yengish.", trap: "Variantlarni darhol belgilashdan oldin qolgan 3 tasini xatoligiga ishonch hosil qiling." },
  { day: 29, title: "2-Mock Test Tahlili va So'nggi Yo'l-Yo'riqlar", grammar: "Yakuniy xatolar korreksiyasi va mustahkamlash", method: "Attestatsiya kuni uchun tavsiyalar va psixologik tayyorgarlik.", trap: "Eng ko'p ball yo'qotilgan mavzuni qayta konspekt qiling." },
  { day: 30, title: "Imtihon Oldi Ekspress-Takrorlash & Psixologik Tayyorgarlik", grammar: "Barcha 30 kunlik eng muhim formulalar va qoliplar xulosasi", method: "Attestatsiya zalida yuqori natijaga erishish va 100 ballik strategiya.", trap: "Imtihon oldi kechasi uyqusizlikdan saqlaning — miya dam olishi eng muhim omil." }
];

TOPICS_REMAINDER.forEach(t => {
  THEORIES[t.day] = {
    keyPoints: [
      t.grammar.slice(0, 70),
      t.method.slice(0, 70),
      "Attestatsiya imtihoni talablari va me'yorlari"
    ],
    trap: t.trap,
    html: `
      <div class="theory-card">
        <h2>🧐 ${t.day}-KUN: ${t.title}</h2>
        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda tushadi.</p>

        <h3>1. Mutaxassislik Grammatikasi va Qoliplar</h3>
        <div class="formula-box">
          📌 Asosiy qolip va birliklar: ${t.grammar}
        </div>
        <div class="uzb-meaning">
          💡 <strong>Qiyosiy tushuntirish:</strong> Testda ushbu mavzuni ishlashda kontekstga, gapning mantiqiy ma'nosiga va fe'llar moslashuviga diqqat qiling.
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>
        <div class="formula-box" style="background: #eff6ff; border-color: #93c5fd;">
          📘 <strong>Metodik tamoyil:</strong> ${t.method}
        </div>
        <p>Milliy o'quv dasturi va xalqaro me'yorlarga ko'ra, darsda o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>
      </div>

      <div class="theory-card">
        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>
        <div class="uzb-meaning" style="background: #fef2f2; border-color: #ef4444; color: #991b1b;">
          ⚠️ <strong>DIQQAT — TUZOQ:</strong> ${t.trap}
        </div>
      </div>
    `
  };
});

// Now read curriculum.js, update all theoryHtml and add keyPoints/trap
const curriculumPath = path.join(__dirname, '..', 'js', 'curriculum.js');
let content = fs.readFileSync(curriculumPath, 'utf8');

// For each day 3..30, inject specific theoryHtml and metadata
for (let day = 3; day <= 30; day++) {
  const data = THEORIES[day];
  if (!data) continue;

  // Find regex for this day in CURRICULUM
  // Pattern: id:\s*day,\s*title:[\s\S]*?theoryHtml:\s*[`"][\s\S]*?[`"],
  const regex = new RegExp(`(\\b${day}:\\s*\\{[\\s\\S]*?id:\\s*${day},[\\s\\S]*?theoryHtml:\\s*)([\`"][\\s\\S]*?[\`"],)`, 'm');
  
  const match = content.match(regex);
  if (match) {
    const sanitizedHtml = JSON.stringify(data.html);
    const kpStr = JSON.stringify(data.keyPoints);
    const trStr = JSON.stringify(data.trap);
    const replacement = `${match[1]}${sanitizedHtml},\n    keyPoints: ${kpStr},\n    trap: ${trStr},`;
    content = content.replace(regex, replacement);
  }
}

// Add keyPoints and trap to day 1 and 2 as well
const day1Regex = /(\b1:\s*\{[\s\S]*?id:\s*1,[\\s\\S]*?theoryHtml:\s*`[\s\S]*?`,)/m;
const m1 = content.match(day1Regex);
if (m1 && !content.includes('keyPoints: ["Never,')) {
  content = content.replace(day1Regex, `${m1[1]}\n    keyPoints: ["Never, Nowhere, Seldom inkor so'zlar", "Inversion qolipi: Inkor + Yordamchi + Ega + Fe'l", "PPP modeli: Presentation ➔ Practice ➔ Production"],\n    trap: "'Only when' kelsa, 1-gapda emas, ASOSIY gapda inversiya bo'ladi!",`);
}

const day2Regex = /(\b2:\s*\{[\s\S]*?id:\s*2,[\\s\\S]*?theoryHtml:\s*`[\s\S]*?`,)/m;
const m2 = content.match(day2Regex);
if (m2 && !content.includes('keyPoints: ["0, 1, 2, 3')) {
  content = content.replace(day2Regex, `${m2[1]}\n    keyPoints: ["0, 1, 2, 3 va Mixed Conditionals formulalari", "Unless, In case, As long as bog'lovchilari", "TBL dars modeli: Pre-task, Task cycle, Language focus"],\n    trap: "'Unless'dan keyin inkor fe'l (don't) qo'yilmaydi! Fe'l doim ijobiy bo'ladi.",`);
}

fs.writeFileSync(curriculumPath, content, 'utf8');
console.log('Successfully updated all 30 days of theories in curriculum.js!');
