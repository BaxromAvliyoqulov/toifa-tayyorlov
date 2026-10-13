// ============================================================================
// TOIFA PRO — 30 KUNLIK MUKAMMAL AKADEMIK DARSLIK GENERATORI (B2-C1 CEFR & UzBMB)
// Har bir mavzu: Lingvistik tahlil + Qiyosiy jadval + Tuzoqlar + Metodika + Keys
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// 1. Read existing curriculum safely
const curriculumFilePath = path.join(__dirname, '..', 'js', 'curriculum.js');
const rawCode = fs.readFileSync(curriculumFilePath, 'utf8') + '\n; globalThis.CURRICULUM = CURRICULUM; globalThis.CURRICULUM_INDEX = CURRICULUM_INDEX;';
const sandbox = {};
vm.runInNewContext(rawCode, sandbox);

const CURRICULUM = sandbox.CURRICULUM;
const CURRICULUM_INDEX = sandbox.CURRICULUM_INDEX;

// 2. Comprehensive, Masterclass-Level Lessons Data
const LESSON_DATABASE = {
  1: {
    keyPoints: [
      "Negative Inversion: Never, Seldom, Rarely, Hardly when, No sooner than",
      "Two-clause Inversion: Only when, Not until (inversiya ASOSIY gapda bo'ladi!)",
      "PPP Modeli: Presentation ➔ Controlled Practice ➔ Free Production",
      "Controlled Practice: Aniqlik (Accuracy); Production: Ravonlik (Fluency)"
    ],
    trap: "'Only when he arrived did the meeting start' — Inversiya 'only when' qismida EMAS, asosiy gapda bo'ladi!",
    html: `
      <div class="theory-card">
        <h2>🧐 1-KUN: Negative & Conditional Inversion (Teskari So'z Tartibi)</h2>
        <p>Inversiya — gapda estetik-akademik urg'u berish, emotsional kuchaytirish yoki qat'iy cheklovni ifodalash uchun <strong>yordamchi fe'lning egadan oldinga o'tishi</strong>dir. Attestatsiya testlarida B2/C1 darajadagi eng sevimli grammatik savol turidir.</p>

        <div class="uzb-meaning">
          💡 <strong>Ona tili bilan qiyosiy tahlil:</strong> O'zbek tilida urg'u berish uchun so'z tartibi erkin almashadi (<em>"Hech qachon men buni ko'rmaganman"</em>). Ingliz tilida esa qat'iy sintaktik me'yor mavjud: inkor so'z gap boshiga chiqarilsa, jumla <strong>so'roq gap shakliga</strong> kirishi shart!
        </div>

        <h3>1. Inkor va Cheklovchi So'zlar bilan Inversiya Qoliplari</h3>
        <div class="formula-box">
          [Qolip] ➔ [Inkor / Cheklovchi so'z] + [Auxiliary (do/did/have/had/is/can)] + [Ega] + [Asosiy fe'l]
        </div>

        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Inkor Iborasi</th>
                <th>Qo'llanish Qolipi</th>
                <th>Akademik Misol va O'zbekcha Ma'nosi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Never / Rarely / Seldom</strong></td>
                <td>Inkor + Aux + S + V</td>
                <td><strong>Seldom have we witnessed</strong> such pedagogical dedication. (Biz kamdan-kam bunday sadoqatni ko'rganmiz).</td>
              </tr>
              <tr>
                <td><strong>Hardly / Scarcely ... when</strong></td>
                <td>Past Perfect (had + S + V3) ... when + Past Simple</td>
                <td><strong>Hardly had the bell rung</strong> when the inspector entered. (Qo'ng'iroq chalinishi bilanoq tekshiruvchi kirdi).</td>
              </tr>
              <tr>
                <td><strong>No sooner ... than</strong></td>
                <td>No sooner had + S + V3 ... than + Past Simple</td>
                <td><strong>No sooner had she started</strong> the lesson than a power cut occurred. (U darsni boshlashi bilanoq chiroq o'chdi).</td>
              </tr>
              <tr>
                <td><strong>Under no circumstances</strong></td>
                <td>Modal + S + V1</td>
                <td><strong>Under no circumstances should mobile phones be used</strong> during the test. (Qanday vaziyat bo'lmasin, telefon ishlatilmasin).</td>
              </tr>
              <tr>
                <td><strong>Little did [sb] know</strong></td>
                <td>Little did + S + V1</td>
                <td><strong>Little did the candidate know</strong> that the syllabus was revised. (Nomzod dastur yangilanganini xayoliga ham keltirmagan edi).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="theory-card">
        <h2>🔥 2. ATTESTATSIYANING ENG XAVFLI 2 TA TUZOG'I (EXAMINER TRAPS)</h2>

        <div class="example-pair">
          <div class="example-box bad">
            <span class="lbl">❌ 1-Tuzoq: Oddiy so'z tartibini qoldirib ketish:</span>
            <em>Rarely she complains about the heavy workload.</em><br>
            (Xato: 'does' yordamchi fe'li tushib qolgan).
          </div>
          <div class="example-box good">
            <span class="lbl">✔️ To'g'ri Inversiya:</span>
            <strong>Rarely does she complain</strong> about the heavy workload.
          </div>
        </div>

        <div class="example-pair">
          <div class="example-box bad">
            <span class="lbl">❌ 2-Tuzoq: Not until / Only when da 1-gapga inversiya qilish:</span>
            <em>Not until did he arrive, the meeting started.</em><br>
            (Xato: ergash gapga inversiya qo'yib bo'lmaydi).
          </div>
          <div class="example-box good">
            <span class="lbl">✔️ To'g'ri (Inversiya ASOSIY gapda bo'ladi):</span>
            Not until he arrived <strong>did the meeting start</strong>.
          </div>
        </div>

        <div class="uzb-meaning" style="background: #fef2f2; border-color: #ef4444; color: #991b1b;">
          ⚠️ <strong>Oltin qoida:</strong> <code>Only after</code>, <code>Only when</code>, <code>Not until</code> kelsa, ularga yopishib kelgan birinchi gap oddiy bo'ladi, <strong>ikkinchi (asosiy) gapda</strong> inversiya yuz beradi!
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 3. PEDAGOGIK METODIKA: PPP (PRESENTATION, PRACTICE, PRODUCTION)</h2>
        <p>Attestatsiya metodika savollarida an'anaviy dars bosqichlari bo'yicha PPP modeli tushadi:</p>

        <div class="formula-box" style="background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;">
          1️⃣ <strong>PRESENTATION (Taqdimot):</strong> Yangi qoida kontekstda ko'rsatiladi (dialog, matn). O'qituvchi qoidani tushuntiradi, talaffuz va intonatsiyani modellashtiradi. (Teacher-centered).<br><br>
          2️⃣ <strong>PRACTICE (Nazorat ostidagi mashq):</strong> O'quvchilar xatolarga yo'l qo'ymaslik uchun bo'sh joylarni to'ldirish, gaplarni qayta tartiblash (Controlled Practice) mashqlarini bajarishadi. Bu bosqichda <strong>aniqlik (Accuracy)</strong> ustuvor.<br><br>
          3️⃣ <strong>PRODUCTION (Erkin muloqot):</strong> O'quvchilar o'rganilgan tuzilmani o'z hayotiy nutqida, rolli o'yinlar yoki erkin bahsda qo'llashadi (Free Practice). Bu bosqichda <strong>ravonlik (Fluency)</strong> ustuvor.
        </div>

        <div class="case-study-box">
          <h4>📌 Pedagogik Keys (Attestatsiya Situatsion Savoli):</h4>
          <p><strong>Vaziyat:</strong> O'qituvchi yangi qoidani tushuntirgach, darhol o'quvchilardan erkin bahs-munozara (Debate) o'tkazishni talab qildi. O'quvchilar ko'p xatolarga yo'l qo'yib, gapira olmay to'xtab qolishdi. O'qituvchi qaysi metodik bosqichni tashlab ketgan?</p>
          <div class="case-study-solution">
            ✔️ <strong>To'g'ri metodik yechim:</strong> O'qituvchi <strong>Controlled Practice (nazorat ostidagi mashq)</strong> bosqichini tashlab ketgan. O'quvchilar yangi qoidani erkin qo'llashdan oldin qolip asosida mashqlar ishlab, ko'nikmani mustahkamlab olishlari shart edi.
          </div>
        </div>
      </div>
    `
  },

  2: {
    keyPoints: [
      "0, 1, 2, 3 Conditionals formulalari va if-clause'da will ishlatilmasligi",
      "Mixed Conditionals: Past action ➔ Present result va Present state ➔ Past result",
      "Inversion: Should you need, Were I you, Had he known",
      "TBL modeli: Pre-task ➔ Task Cycle ➔ Language Focus"
    ],
    trap: "'Unless' inkor so'z bo'lgani uchun undan keyin 'don't/doesn't' ishlatilmaydi! 'Unless you study' bo'ladi.",
    html: `
      <div class="theory-card">
        <h2>🧐 2-KUN: Conditionals (Shart Ergash Gaplar) & TBL Metodika</h2>
        <p>Attestatsiya testlarida shart ergash gaplar 3 yo'nalishda tekshiriladi: <strong>Standart 4 tur</strong>, <strong>Mixed Conditionals</strong> va <strong>Shart Inversiyasi</strong>.</p>

        <h3>1. Standart Shart Gaplar Qiyosiy Tahlili</h3>
        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Turi</th>
                <th>If-ergash gap</th>
                <th>Bosh gap (Natija)</th>
                <th>Semantik Ma'nosi & Misol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Zero Conditional</strong></td>
                <td>Present Simple</td>
                <td>Present Simple</td>
                <td>Ilmiy fakt, doimiy qoida: <em>If you heat water to 100°C, it boils.</em></td>
              </tr>
              <tr>
                <td><strong>First Conditional</strong></td>
                <td>Present Simple</td>
                <td>will / can / may + V1</td>
                <td>Kelajakdagi real ehtimol: <em>If he practices every day, he will pass.</em></td>
              </tr>
              <tr>
                <td><strong>Second Conditional</strong></td>
                <td>Past Simple (were)</td>
                <td>would / could / might + V1</td>
                <td>Hozirgi noreal xayol: <em>If I were you, I would take the mock test.</em></td>
              </tr>
              <tr>
                <td><strong>Third Conditional</strong></td>
                <td>Past Perfect (had + V3)</td>
                <td>would have + V3</td>
                <td>O'tmishdagi afsus: <em>If they had left early, they wouldn't have missed the flight.</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="uzb-meaning">
          ⚠️ <strong>Ona tili tuzog'i:</strong> O'zbek tilida <em>"Agar ertaga kelsangiz, gaplashamiz"</em> deymiz (kelasi zamon). Ingliz tilida esa if-ergash gapida <strong>hech qachon 'will' qo'yilmaydi</strong>! (Xato: <em>If you will come</em> ❌ ➔ To'g'ri: <em>If you come</em> ✔️).
        </div>
      </div>

      <div class="theory-card">
        <h2>🔀 2. MIXED CONDITIONALS (Attestatsiyaning Eng Murakkab Qismi)</h2>
        <p>Vaqt chegaralari aralashib ketganda 2 ta asosiy aralash tur qo'llaniladi:</p>

        <div class="formula-box" style="background: #eff6ff; border-color: #93c5fd;">
          📌 <strong>1-TUR: O'TMISHDAGI ISH-HARAKAT ➔ HOZIRGI NATIJA</strong><br>
          Qolip: <code>If + Past Perfect (had + V3), ... would + V1 (now/today)</code><br>
          <em>Misol:</em> If I had taken an umbrella this morning, I wouldn't be wet now.<br>
          (Ertalab soyabon olmaganman [o'tmish], shu sababli hozir shalabbo bo'lib turibman [hozirgi holat]).
        </div>

        <div class="formula-box" style="background: #fef2f2; border-color: #fca5a5;">
          📌 <strong>2-TUR: HOZIRGI DOIMIY XUSUSIYAT ➔ O'TMISHDAGI NATIJA</strong><br>
          Qolip: <code>If + Past Simple (were/V2), ... would have + V3 (yesterday/then)</code><br>
          <em>Misol:</em> If he were not so stubborn, he would have accepted their advice yesterday.<br>
          (U tabiatan o'jar [doimiy sifat], shu sababli kecha maslahatni rad etdi [o'tmishdagi natija]).
        </div>
      </div>

      <div class="theory-card">
        <h2>⚡ 3. INVERSION IN CONDITIONALS (Shart Inversiyasi)</h2>
        <p>Rasmiy testlarda <code>if</code> so'zi tushirib qoldirilib, yordamchi fe'l boshga chiqariladi:</p>

        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Shart Turi</th>
                <th>Oddiy If-gap</th>
                <th>Inversiya Formati (Attestatsiya)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Type 1</strong></td>
                <td>If you should need any help...</td>
                <td><strong>Should you need</strong> any help, feel free to contact us.</td>
              </tr>
              <tr>
                <td><strong>Type 2</strong></td>
                <td>If I were in your position...</td>
                <td><strong>Were I</strong> in your position, I would agree. (Fe'l bo'lsa: <em>Were he to ask...</em>)</td>
              </tr>
              <tr>
                <td><strong>Type 3</strong></td>
                <td>If they had notified us earlier...</td>
                <td><strong>Had they notified</strong> us earlier, we would have attended.</td>
              </tr>
              <tr>
                <td><strong>Type 3 Inkor</strong></td>
                <td>If it had not been for your advice...</td>
                <td><strong>Had it not been for</strong> your advice... (Qisqartma: <em>Hadn't it been ❌</em>)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 4. PEDAGOGIK METODIKA: TBL (TASK-BASED LEARNING) MODELI</h2>
        <p>Jane Willis modeli bo'yicha TBL darsining 3 ta qat'iy bosqichi:</p>

        <ol>
          <li><strong>Pre-Task (Vazifa oldi bosqichi):</strong> Mavzuni ochish, yangi so'zlarni eslash va topshiriq maqsadini belgilash.</li>
          <li><strong>Task Cycle (Vazifa sikli — 3 kichik qadam):</strong>
            <ul>
              <li><em>Task:</em> O'quvchilar juftlikda vazifani erkin bajaradilar (ravonlik ustuvor).</li>
              <li><em>Planning:</em> Sinfga o'z hisobotini taqdim etish uchun qisqa nutq tayyorlaydilar.</li>
              <li><em>Report:</em> Sinf oldida o'z xulosalarini taqdim etadilar.</li>
            </ul>
          </li>
          <li><strong>Language Focus (Til tahlili):</strong>
            <ul>
              <li><em>Analysis:</em> O'qituvchi vazifa davomida yuzaga kelgan xatolarni doskaga chiqarib tahlil qiladi.</li>
              <li><em>Practice:</em> To'g'ri grammatik tuzilmani mustahkamlash uchun mashqlar bajariladi.</li>
            </ul>
          </li>
        </ol>

        <div class="case-study-box">
          <h4>📌 Pedagogik Keys (Attestatsiya Situatsion Savoli):</h4>
          <p><strong>Savol:</strong> Nima uchun TBL darsida o'qituvchi o'quvchilar vazifa (Task) ustida ishlayotganda ularning har bir grammatik xatosini darhol to'xtatib tuzatmaydi?</p>
          <div class="case-study-solution">
            ✔️ <strong>Metodik asos:</strong> Task bosqichining maqsadi <strong>ravonlik (Fluency)</strong> va muloqotdir. O'qituvchi doimiy to'xtatsa, o'quvchida gapirishga qo'rquv paydo bo'ladi. Xatolar dars oxirida — <strong>Language Focus</strong> bosqichida butun sinf bilan birga umumlashtirib tahlil qilinishi kerak.
          </div>
        </div>
      </div>
    `
  },

  3: {
    keyPoints: [
      "Subjunctive: It is vital that he BE present (bare infinitive)",
      "Causative: have sth done, get sb TO do, make sb do",
      "Formative (o'sish uchun) vs Summative (yakuniy rasmiy baho)",
      "Descriptive Feedback: o'quvchiga ball emas, yo'l ko'rsatish"
    ],
    trap: "'The headmaster insisted that she submit the report' — 'submits' yoki 'submitted' emas, doim V1 (bare infinitive) qo'yiladi!",
    html: `
      <div class="theory-card">
        <h2>🧐 3-KUN: Subjunctive Mood & Causative Verbs & Baholash Turlari</h2>
        <p>Subjunctive va Causative tuzilmalari rasmiy-akademik tilning me'yorlari bo'lib, attestatsiyaning B2-C1 grammatika blokida doimiy savol manbaidir.</p>

        <h3>1. Subjunctive Mood (Majhul / Istak-Buyruq Mayli)</h3>
        <p>Rasmiy talab, zaruriyat yoki tavsiyani bildiruvchi so'zlardan so'ng, qaysi zamon yoki shaxs (he, she, it) kelishidan qat'i nazar, fe'l <strong>Bare Infinitive (o'zak shakli - V1)</strong> bo'ladi:</p>

        <div class="formula-box">
          [Qolip] ➔ It is vital / essential / imperative / crucial that + Subject + [Bare Infinitive (V1)]
        </div>

        <div class="uzb-meaning">
          💡 <strong>Fe'llar bilan:</strong> suggest, insist, demand, recommend, urge, require that + S + [V1]<br>
          • <em>Misol:</em> The doctor recommended that he <strong>exercise</strong> (exercises emas!) regularly.<br>
          • <em>Misol:</em> It is essential that every candidate <strong>be</strong> (is emas!) punctual.<br>
          • <em>Inkor shakli:</em> not + V1: <em>The board insisted that the teacher <strong>not leave</strong> the room.</em>
        </div>

        <div class="example-pair">
          <div class="example-box bad">
            <span class="lbl">❌ Attestatsiya tuzog'i:</span>
            The inspector demanded that he rewrites the syllabus.
          </div>
          <div class="example-box good">
            <span class="lbl">✔️ To'g'ri Subjunctive shakli:</span>
            The inspector demanded that he <strong>rewrite</strong> the syllabus.
          </div>
        </div>
      </div>

      <div class="theory-card">
        <h2>🔧 2. CAUSATIVE VERBS (Ish-harakatni birovga qildirish)</h2>
        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Fe'l</th>
                <th>Faol Qolip (Active)</th>
                <th>Majhul Qolip (Passive)</th>
                <th>Attestatsiya Nozikligi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>HAVE</strong></td>
                <td>have + sb + <strong>V1 (bare)</strong><br><em>I had the tech fix the PC.</em></td>
                <td>have + sth + <strong>V3</strong><br><em>I had the PC fixed.</em></td>
                <td>Faol shaklida 'to' bo'lmaydi!</td>
              </tr>
              <tr>
                <td><strong>GET</strong></td>
                <td>get + sb + <strong>to + V1</strong><br><em>She got him to help her.</em></td>
                <td>get + sth + <strong>V3</strong><br><em>She got her car washed.</em></td>
                <td>Faol shaklida 'to' MAJBURIY!</td>
              </tr>
              <tr>
                <td><strong>MAKE</strong></td>
                <td>make + sb + <strong>V1 (bare)</strong><br><em>He made us stay late.</em></td>
                <td>be made + <strong>to + V1</strong><br><em>We were made to stay late.</em></td>
                <td>Majhulga o'tganda 'to' paydo bo'ladi!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 3. PEDAGOGIK METODIKA: FORMATIVE VS SUMMATIVE BAHOLASH</h2>
        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Mezon</th>
                <th>Formative Assessment (Formatif)</th>
                <th>Summative Assessment (Summativ)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Falsafasi</strong></td>
                <td>Assessment <strong>FOR</strong> learning (o'rganish uchun baholash)</td>
                <td>Assessment <strong>OF</strong> learning (o'rganilganlikni baholash)</td>
              </tr>
              <tr>
                <td><strong>Vaqti</strong></td>
                <td>O'quv jarayoni davomida (har kuni, doimiy)</td>
                <td>Davr oxirida (chorak, yil, kurs oxirida)</td>
              </tr>
              <tr>
                <td><strong>Maqsadi</strong></td>
                <td>Zaif nuqtalarni aniqlash, o'sishga ko'maklashish</td>
                <td>Rasmiy sertifikat, yakuniy ball, daraja berish</td>
              </tr>
              <tr>
                <td><strong>Vositalari</strong></td>
                <td>Exit tickets, o'zaro baholash (peer assessment), og'zaki feedback</td>
                <td>Choraklik testlar, davlat imtihonlari, diplom ishi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="case-study-box">
          <h4>📌 Pedagogik Keys (Attestatsiya Situatsion Savoli):</h4>
          <p><strong>Vaziyat:</strong> O'qituvchi o'quvchilarning har haftalik insholariga faqat "3", "4", "5" deb qizil ruchka bilan ball qo'yib qaytardi, lekin qayerida xato borligi va uni qanday tuzatish kerakligini yozmadi. Bu qaysi pedagogik tamoyilning buzilishidir?</p>
          <div class="case-study-solution">
            ✔️ <strong>To'g'ri metodik yechim:</strong> Bu <strong>Formative Feedback (shakllantiruvchi qayta aloqa)</strong> tamoyilining buzilishidir. Baho qo'yish o'quvchini rivojlantirmaydi; o'qituvchi xatoni ko'rsatib, uni yaxshilash bo'yicha konstruktiv yo'l-yo'riq (descriptive feedback) berishi shart.
          </div>
        </div>
      </div>
    `
  },

  4: {
    keyPoints: [
      "Remember, stop, regret, try, forget: Gerund vs Infinitive ma'no farqlari",
      "Verbs followed by Gerund: admit, deny, avoid, postpone, mind",
      "Feedback madaniyati: Constructive, Peer, Immediate vs Delayed"
    ],
    trap: "'Stop to buy bread' (non olish uchun to'xtamoq) vs 'Stop buying bread' (non olishni to'xtatmoq) — imtihonda kontekstga qarab belgilanadi!",
    html: `
      <div class="theory-card">
        <h2>🧐 4-KUN: Gerund vs Infinitive & Qayta Aloqa (Feedback) Turlari</h2>
        <p>Gerund (-ing) va Infinitive (to + V1) mavzusi test tuzuvchilarning eng sevimli qurolidir, chunki ko'plab fe'llar ikkala shaklni ham qabul qiladi, lekin ma'nosi butunlay o'zgaradi.</p>

        <h3>1. Ma'nosi Keskin O'zgaruvchi 5 Ta Asosiy Fe'l</h3>
        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Fe'l</th>
                <th>+ Infinitive (to + V1)</th>
                <th>+ Gerund (V-ing)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Remember</strong></td>
                <td>Bajarilishi kerak bo'lgan ishni eslamoq:<br><em>Remember to lock the door.</em></td>
                <td>O'tmishda sodir bo'lgan ishni eslamoq:<br><em>I remember locking the door.</em></td>
              </tr>
              <tr>
                <td><strong>Forget</strong></td>
                <td>Vazifani qilishni unutmoq:<br><em>Don't forget to send the file.</em></td>
                <td>O'tmishdagi xotirani unutmoq:<br><em>I will never forget visiting Samarkand.</em></td>
              </tr>
              <tr>
                <td><strong>Stop</strong></td>
                <td>Boshqa ishni qilish uchun to'xtamoq:<br><em>We stopped to have lunch.</em></td>
                <td>O'sha harakatni butunlay to'xtatmoq:<br><em>Please stop making noise.</em></td>
              </tr>
              <tr>
                <td><strong>Regret</strong></td>
                <td>Afsus bilan ma'lum qilmoq (rasmiy xat):<br><em>We regret to inform you that...</em></td>
                <td>O'tmishdagi qilmishdan afsuslanmoq:<br><em>I regret speaking to him so rudely.</em></td>
              </tr>
              <tr>
                <td><strong>Try</strong></td>
                <td>Qiyin ishni qilishga kuch sarflamoq:<br><em>I tried to lift the heavy box.</em></td>
                <td>Tajriba sifatida sinab ko'rmoq:<br><em>Try taking an aspirin for your headache.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. PEDAGOGIK METODIKA: QAYTA ALOQA (FEEDBACK) SAN'ATI</h2>
        <div class="formula-box">
          • <strong>Constructive Feedback (Konstruktiv qayta aloqa):</strong> Xatoni kamsitmasdan ko'rsatish va <em>"Buni qanday yaxshilash mumkin?"</em> degan aniq qadamni taklif qilish.<br>
          • <strong>Peer Feedback (Tengdosh qayta aloqa):</strong> O'quvchilar bir-birining inshosini rubrika asosida tekshirishi (Tanqidiy tafakkurni rivojlantiradi).<br>
          • <strong>Immediate vs Delayed:</strong> Talaffuz va grammatik mashqda darhol (Immediate), erkin nutq va bahsda esa dars oxirida (Delayed) tuzatish talab etiladi.
        </div>

        <div class="case-study-box">
          <h4>📌 Pedagogik Keys (Attestatsiya Situatsion Savoli):</h4>
          <p><strong>Vaziyat:</strong> O'quvchi butun sinf oldida o'z hikoyasini aytib berayotganida, o'qituvchi har bir noto'g'ri zamon ishlatilganida uni to'xtatib: "No, say 'went', not 'go'!" deb to'g'riladi. O'quvchi oxiri uyalib, gapirishdan bosh tortdi. O'qituvchi nima qilishi kerak edi?</p>
          <div class="case-study-solution">
            ✔️ <strong>To'g'ri metodik yechim:</strong> O'qituvchi <strong>Delayed Feedback (Kechiktirilgan tuzatish)</strong> usulidan foydalanishi kerak edi. Hikoya davomida xatolarni daftariga yozib olib, hikoya tugagach, ismni aytmasdan umumiy sinf bilan birga doskada xatolarni tahlil qilish lozim edi.
          </div>
        </div>
      </div>
    `
  },

  5: {
    keyPoints: [
      "Present Participle (Doing) va Past Participle (Done)",
      "Perfect Participle: Having done (bir harakat ikkinchisidan aniq oldin tugaganida)",
      "Bloom Taksonomiyasi: 6 pog'ona (LOTS ➔ HOTS)"
    ],
    trap: "Dangling Participle tuzog'i: 'Entering the room, the window was broken' ❌ — Xonaga deraza kirmagan! Ega bir xil bo'lishi shart!",
    html: `
      <div class="theory-card">
        <h2>🧐 5-KUN: Participle Clauses & Bloom Taksonomiyasi</h2>
        <p>Participle Clauses (Sifatdoshli ergash gaplar) — jumlalarni ixcham, ravon va akademik qilish usuli bo'lib, attestatsiya testlarida <strong>Dangling Participle (Ega moslashuvi)</strong> bo'yicha ko'p uchraydi.</p>

        <h3>1. Participle Shakllari</h3>
        <div class="formula-box">
          • <strong>Present Participle (V-ing):</strong> Faol (Active) harakat, bir vaqtda sodir bo'layotgan yoki sabab bildiruvchi holat.<br>
          <em>Misol:</em> Knowing that the exam was tough, she revised every topic. (= Because she knew...)<br><br>
          • <strong>Past Participle (V3):</strong> Majhul (Passive) ma'nodagi qisqartma.<br>
          <em>Misol:</em> Written in simple English, the guide is easy to follow. (= Because it is written...)<br><br>
          • <strong>Perfect Participle (Having + V3):</strong> Bir ish-harakat ikkinchisidan OLDIN to'liq tugaganini urg'ulashda.<br>
          <em>Misol:</em> Having passed the preliminary test, he was invited to the interview.
        </div>

        <div class="example-pair">
          <div class="example-box bad">
            <span class="lbl">❌ Dangling Participle (Katta grammatik xato):</span>
            Walking down the street, my hat blew off.<br>
            <em>(Ko'chada shapka yurib ketmagan!)</em>
          </div>
          <div class="example-box good">
            <span class="lbl">✔️ To'g'ri bog'lanish:</span>
            Walking down the street, <strong>I lost</strong> my hat.
          </div>
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. BLOOM TAKSONOMIYASI (PEDAGOGIK MEZONLAR)</h2>
        <p>Benjamin Bloom taksonomiyasining yangilangan (Anderson & Krathwohl) 6 pog'onasi:</p>

        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Bosqich</th>
                <th>Daraja</th>
                <th>Tavsifi</th>
                <th>Attestatsiya Fe'llari</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Remembering</strong></td>
                <td>LOTS</td>
                <td>Fakt, sana, qoidalarni xotirada tiklash</td>
                <td>Define, list, recall, name</td>
              </tr>
              <tr>
                <td><strong>2. Understanding</strong></td>
                <td>LOTS</td>
                <td>Ma'nosini anglash, o'z so'zlari bilan aytish</td>
                <td>Explain, summarize, classify</td>
              </tr>
              <tr>
                <td><strong>3. Applying</strong></td>
                <td>LOTS</td>
                <td>O'rganilgan qoidani yangi vaziyatda ishlatish</td>
                <td>Apply, demonstrate, use, solve</td>
              </tr>
              <tr>
                <td><strong>4. Analyzing</strong></td>
                <td>HOTS</td>
                <td>Tizimni qismlarga ajratish, sabab-oqibatni topish</td>
                <td>Compare, contrast, distinguish</td>
              </tr>
              <tr>
                <td><strong>5. Evaluating</strong></td>
                <td>HOTS</td>
                <td>Mezonlar asosida xulosa va baho berish</td>
                <td>Judge, critique, justify, assess</td>
              </tr>
              <tr>
                <td><strong>6. Creating</strong></td>
                <td>HOTS</td>
                <td>Yangi original loyiha yoki g'oya yaratish</td>
                <td>Design, compose, create, formulate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  }
};

// Fill in Days 6 to 30 systematically with high academic rigor
const REMAINING_CURRICULUM_DATA = {
  6: {
    title: "6-KUN: Wish / If only / As if & SMART Dars Maqsadlari",
    points: ["Wish + Past Simple (Hozirgi afsus)", "Wish + Past Perfect (O'tmishdagi afsus)", "Wish + would (Norozilik va o'zgarish talabi)", "SMART dars maqsadlari"],
    trap: "'I wish I would have more time' ❌ — O'zimizga nisbatan 'would' ishlatilmaydi! 'I wish I had' bo'ladi.",
    table: `
      <tr><td>Wish + Past Simple</td><td>Hozirgi orzu/afsus</td><td>I wish I lived near the school. (Lekin uzoqda yashayman)</td></tr>
      <tr><td>Wish + Past Perfect</td><td>O'tmishdagi pushaymonlik</td><td>I wish I had prepared earlier. (Koshki ertaroq tayyorlanganimda edi)</td></tr>
      <tr><td>Wish + would + V1</td><td>Birovning qilmishidan shikoyat</td><td>I wish you would stop interrupting me! (Gapimni bo'lishni to'xtatsangiz edi)</td></tr>
      <tr><td>It's time + S + V2</td><td>Ayni vaqti / kech qolmaslik</td><td>It's time we began the mock test. (Boshlashimizning ayni vaqti)</td></tr>
    `,
    method: "SMART maqsadi: Specific (Aniq mavzu), Measurable (80% natija), Achievable (Imkoniyatga mos), Relevant (Dasturga bog'liq), Time-bound (45 daqiqada erishiladigan)."
  },
  7: {
    title: "7-KUN: Passive Voice & Impersonal Passive & Sinf Boshqaruvi",
    points: ["Passive Voice: be + V3", "Impersonal Passive: He is said to have escaped", "TTT (30%) vs STT (70%) nisbati", "Partalar joylashuvi: U-shape, Clusters"],
    trap: "'The minister is reported to have signed...' — O'tgan zamondagi xabar uchun 'to sign' emas, 'to have signed' qo'yiladi!",
    table: `
      <tr><td>It is said that...</td><td>It-qolip</td><td>It is believed that language learning requires consistency.</td></tr>
      <tr><td>Subject + be + said + to + V1</td><td>Hozirgi xabar</td><td>He is said to live in London.</td></tr>
      <tr><td>Subject + be + said + to have + V3</td><td>O'tmishdagi xabar</td><td>The ancient manuscript is thought to have been destroyed in the fire.</td></tr>
    `,
    method: "Classroom Management: TTT (Teacher Talking Time) 30% dan oshmasligi kerak. STT (Student Talking Time) 70% ni tashkil qilishi shart (Student-Centered Learning)."
  },
  8: {
    title: "8-KUN: Relative Clauses (Whom/Whose) & O'quvchi Motivatsiyasi",
    points: ["Defining vs Non-defining Relative Clauses", "Whom (to'ldiruvchi) vs Whose (egalik)", "Non-defining da 'that' taqiqlanishi", "Intrinsic vs Extrinsic Motivatsiya"],
    trap: "Non-defining relative clause'da (vergul bilan ajratilgan gaplarda) 'that' qo'yish mutlaqo mumkin emas! Faqat 'which' yoki 'who' bo'ladi.",
    table: `
      <tr><td>Defining Clause</td><td>Vergulsiz</td><td>The teacher that/who won the award is here.</td></tr>
      <tr><td>Non-defining Clause</td><td>Vergulli (ikkala tomondan)</td><td>My mentor, <strong>who</strong> has 20 years of experience, praised our project. (That qo'yilmaydi!)</td></tr>
      <tr><td>Whom vs Whose</td><td>To'ldiruvchi vs Egalik</td><td>The author <strong>whom</strong> we met / The student <strong>whose</strong> paper won.</td></tr>
    `,
    method: "Intrinsic Motivation (Ichki qiziqish) barqaror natija beradi. Extrinsic Motivation (Tashqi baho/rag'bat) qisqa muddatli turtkidir."
  },
  9: {
    title: "9-KUN: Past Modals (Must have / Should have) & 4 Ko'nikma",
    points: ["Must have done: 99% mantiqiy xulosa", "Can't have done: Bo'lishi imkonsiz", "Should have done: Tanqid va afsus", "Needn't have done vs Didn't need to do"],
    trap: "'You needn't have brought lunch' — olib kelishing shart emas edi, lekin bekorga olib kelding degan ma'no beradi!",
    table: `
      <tr><td>Must have + V3</td><td>99% Ishonchli xulosa</td><td>The roads are wet; it must have rained.</td></tr>
      <tr><td>Can't have + V3</td><td>Imkonsiz hodisa</td><td>He can't have failed; he is the top scorer.</td></tr>
      <tr><td>Should have + V3</td><td>Qilishi kerak edi, qilmadi</td><td>You should have verified the exam keys.</td></tr>
      <tr><td>Needn't have + V3</td><td>Qildi, lekin behuda edi</td><td>We needn't have hurried; the train was delayed.</td></tr>
    `,
    method: "Integrated Skills: Receptive ko'nikmalar (Reading & Listening) yangi axborot beradi, Productive ko'nikmalar (Speaking & Writing) uni mustahkamlaydi."
  },
  10: {
    title: "10-KUN: Dependent Prepositions & Pedagogik Nizolar",
    points: ["Insist on, rely on, congratulate on", "Capable of, proud of, approve of", "Prevent from, protect from", "Thomas-Kilmann nizo modeli (Collaboration)"],
    trap: "'Discuss about' yoki 'emphasize on' deb qo'ymang! Bu fe'llar o'zidan keyin predlog talab qilmaydi!",
    table: `
      <tr><td>ON</td><td>Bog'liq fe'llar</td><td>insist on, congratulate on, rely on, depend on, base on</td></tr>
      <tr><td>OF</td><td>Bog'liq sifatlar</td><td>capable of, proud of, aware of, tired of, jealous of</td></tr>
      <tr><td>FROM</td><td>Cheklovchi fe'llar</td><td>prevent from doing, protect from, prohibit from, suffer from</td></tr>
      <tr><td>Predlogsiz fe'llar</td><td>Xato qilinadigan</td><td>discuss (about emas!), emphasize (on emas!), contact (to emas!)</td></tr>
    `,
    method: "Thomas-Kilmann modeli: Eng samarali usul — Collaboration (Win-Win): har ikki tomon manfaatini hisobga olgan konstruktiv kelishuv."
  },
  11: {
    title: "11-KUN: Phrasal Verbs & Milliy O'quv Dasturi",
    points: ["Separable vs Inseparable phrasal verbs", "3 qismli fe'llar (Look forward to + V-ing)", "Milliy o'quv dasturi kompetensiyalari"],
    trap: "'Look forward to seeing you' — bu yerda 'to' infinitive emas, predlog bo'lgani uchun Gerund (-ing) keladi!",
    table: `
      <tr><td>Separable (Ajraladigan)</td><td>Turn off, put off, call off</td><td>Turn the light off / Turn it off (Olmosh o'rtaga tushadi).</td></tr>
      <tr><td>Inseparable (Ajralmaydigan)</td><td>Look after, come across, run into</td><td>She looks after her elderly parents.</td></tr>
      <tr><td>3 qismli iboralar</td><td>Put up with, look down on</td><td>I cannot put up with such indiscipline.</td></tr>
    `,
    method: "Milliy o'quv dasturining bosh mezoni — Kommunikativ kompetensiya (Communicative Competence) va o'quvchining mustaqil muloqot qila olishi."
  },
  12: {
    title: "12-KUN: Reading Strategiyalari & Inklyuziv Ta'lim",
    points: ["Skimming: matnning umumiy mohiyati (Gist)", "Scanning: aniq fakt/raqamni qidirish", "Inference: qatorlar orasidagi yashirin ma'no", "Inklyuziv ta'lim tamoyillari"],
    trap: "Skimming butun matnni sinchiklab o'qish emas, 1-2 daqiqada sarlavha va kirish orqali umumiy g'oyani anglashdir!",
    table: `
      <tr><td>Skimming</td><td>General Gist (Umumiy ma'no)</td><td>Tezkor ko'z yugurtirish, xulosa va sarlavhani o'qish</td></tr>
      <tr><td>Scanning</td><td>Specific Information (Aniq fakt)</td><td>Raqam, sana, ism, poyezd jadvalini qidirish</td></tr>
      <tr><td>Detailed Reading</td><td>To'liq tahlil</td><td>Qo'llanma, qonun, shartnoma matnini sinchiklab o'rganish</td></tr>
      <tr><td>Inference</td><td>Muallif munosabati</td><td>Yashirin ma'no va hissiyotni aniqlash</td></tr>
    `,
    method: "Inklyuziv ta'lim: Alohida ta'lim ehtiyojlari bo'lgan o'quvchilarga teng sharoit yaratish va ularni sinf hayotiga to'liq integratsiya qilish."
  },
  13: {
    title: "13-KUN: Confusing Words & Attestatsiya Qonunchiligi",
    points: ["Make vs Do kollokatsiyalari", "Raise (o'timli) vs Rise (o'timsiz), Lie vs Lay", "Attestatsiya nizomi va pedagog toifalari"],
    trap: "'Do an effort' ❌ emas, 'Make an effort' ✔️; 'Do research' ✔️, 'Do homework' ✔️.",
    table: `
      <tr><td>MAKE</td><td>Yaratish, vujudga keltirish</td><td>make a decision, make a mistake, make an effort, make money</td></tr>
      <tr><td>DO</td><td>Faoliyat, burch, vazifa</td><td>do homework, do research, do business, do household chores</td></tr>
      <tr><td>Raise vs Rise</td><td>O'timli vs O'timsiz</td><td>Please raise your hand (Raise + Ot) vs The sun rises (Rise o'timsiz)</td></tr>
    `,
    method: "Pedagog xodimlar attestatsiyasi nizomi bo'yicha baholash: Mutaxassislik fani (80 ball) + Pedagogik mahorat va metodika (20 ball)."
  },
  14: {
    title: "14-KUN: Articles & Determiners & Dars Tahlili",
    points: ["Geografik nomlar bilan 'the' artikli", "Few vs A few (sanaladigan)", "Little vs A little (sanalmaydigan)", "Dars kuzatish rubrikasi"],
    trap: "'Few' (kam, deyarli yo'q — inkor ma'no) vs 'A few' (oz bo'lsa-da yetarli — ijobiy ma'no).",
    table: `
      <tr><td>Few / Little (artiklsiz)</td><td>Kam, yetmaydi (inkor)</td><td>Few candidates passed (Deyarli hech kim o'tmadi).</td></tr>
      <tr><td>A few / A little (a bilan)</td><td>Oz bo'lsa-da yetarli (ijobiy)</td><td>A few candidates passed (Bir nechta nomzod o'tdi).</td></tr>
      <tr><td>The bilan geografik</td><td>Dengiz, daryo, tog' tizmasi</td><td>The Pacific, The Thames, The Alps (Lekin: Mount Everest, Lake Baikal artiklsiz!)</td></tr>
    `,
    method: "Dars tahlilida zamonaviy mezon: O'qituvchining darsdagi monologi emas, o'quvchilarning faol jalb qilinganligi va natijaga erishilganligi."
  },
  15: {
    title: "15-KUN: Reported Speech & Reporting Verbs & Pedagogik Etika",
    points: ["Zamonlar moslashuvi (Backshift)", "Reporting verbs: urge, threaten, deny doing", "O'qituvchi kasb etikasi"],
    trap: "'He denied to take the bribe' ❌ ➔ 'He denied taking the bribe' ✔️ (Deny fe'lidan keyin Gerund keladi!).",
    table: `
      <tr><td>Verb + to-V1</td><td>agree, offer, promise, refuse</td><td>She promised to submit the grades today.</td></tr>
      <tr><td>Verb + sb + to-V1</td><td>advise, encourage, remind, warn, urge</td><td>The mentor urged us to study regularly.</td></tr>
      <tr><td>Verb + Gerund (-ing)</td><td>admit, deny, apologize for, insist on</td><td>The student admitted cheating during the quiz.</td></tr>
    `,
    method: "Pedagogik etika: O'quvchining shaxsiyatini hurmat qilish, xolislik, kamsitishga yo'l qo'ymaslik va kasbiy sadoqat."
  },
  16: {
    title: "16-KUN: Noun Clauses & Question Tags Tuzoqlari",
    points: ["Noun clauses gapda ega va to'ldiruvchi vazifasida", "Question tags maxsus qoidalari", "Darslik topshiriqlarini baholash"],
    trap: "'Nobody called, did they?' — 'Nobody' inkor bo'lgani uchun tag ijobiy bo'ladi va 'they' olmoshi olinadi!",
    table: `
      <tr><td>I am right</td><td>Maxsus tag</td><td>aren't I?</td></tr>
      <tr><td>Let's start</td><td>Taklif tagi</td><td>shall we?</td></tr>
      <tr><td>Imperative (Open the door)</td><td>Buyruq tagi</td><td>will you? / would you?</td></tr>
      <tr><td>Nobody / Everybody</td><td>Ko'plik olmoshi</td><td>didn't they? / did they?</td></tr>
    `,
    method: "Darslik tahlili: Topshiriqlar o'quvchining yosh va psixologik xususiyatlariga, shuningdek milliy kompetensiyalarga mos bo'lishi shart."
  },
  17: {
    title: "17-KUN: Adjectives vs Adverbs & Differentsiatsiya",
    points: ["Hard vs Hardly, Late vs Lately", "Gradable vs Extreme sifatlar (absolutely furious)", "Differentsiatsiyalangan ta'lim (Differentiated Instruction)"],
    trap: "'He works hardly' ❌ (U deyarli ishlamaydi degani) ➔ 'He works hard' ✔️ (U qattiq ishlaydi).",
    table: `
      <tr><td>Hard vs Hardly</td><td>Qattiq vs Deyarli yo'q</td><td>She studied hard (Qattiq o'qidi) vs She hardly studied (Deyarli o'qimadi).</td></tr>
      <tr><td>Late vs Lately</td><td>Kech vs So'nggi paytlarda</td><td>Arrived late (Kech keldi) vs Have seen him lately (So'nggi paytlarda ko'rdim).</td></tr>
      <tr><td>Extreme Adjectives</td><td>Absolutely bilan ishlatiladi</td><td>absolutely freezing, absolutely exhausted, absolutely boiling</td></tr>
    `,
    method: "Differentsiatsiyalangan ta'lim: Barcha o'quvchilarga bir xil qolipda emas, ularning qobiliyatiga mos topshiriqlar (Tiered tasks) berish."
  },
  18: {
    title: "18-KUN: Conjunctions (Although, Despite) & Tanqidiy Fikrlash",
    points: ["Although / Even though + Gap", "Despite / In spite of + Ot / V-ing", "Whereas, However", "Tanqidiy fikrlash (Critical Thinking)"],
    trap: "'Despite of' deb yozish qo'pol xatodir! 'In spite of' yoki shunchaki 'Despite' bo'ladi.",
    table: `
      <tr><td>Although / Even though</td><td>+ Gap (Ega + Fe'l)</td><td>Although it was raining, the football match continued.</td></tr>
      <tr><td>Despite / In spite of</td><td>+ Ot / Gerund (-ing)</td><td>Despite the heavy rain, the match continued.</td></tr>
      <tr><td>Whereas / While</td><td>Taqqoslash, ziddiyat</td><td>Some students prefer grammar, whereas others enjoy speaking.</td></tr>
    `,
    method: "Tanqidiy fikrlash: O'quvchilarda axborotni shubha ostiga olish, dalillarni solishtirish va o'z mustaqil fikrini asoslash ko'nikmasi."
  },
  19: {
    title: "19-KUN: Subject-Verb Agreement & Portfolio",
    points: ["Neither... nor, Either... or (yaqin egaga qaraladi)", "As well as, Along with (1-egaga qaraladi)", "O'quvchi portfoliosi bilan ishlash"],
    trap: "'The teacher along with his students was (were emas!) present' — 'along with' birinchi egaga moslashadi!",
    table: `
      <tr><td>Neither A nor B</td><td>B ga (yaqiniga) moslashadi</td><td>Neither the teacher nor the students <strong>were</strong> aware.</td></tr>
      <tr><td>A as well as B</td><td>A ga (birinchisiga) moslashadi</td><td>The professor as well as his assistants <strong>was</strong> awarded.</td></tr>
      <tr><td>Every / Each + singular noun</td><td>Birlik fe'l</td><td>Every student and teacher <strong>has</strong> a unique login.</td></tr>
    `,
    method: "Portfolio Baholash: O'quvchining chorak davomidagi barcha ijodiy ishlari, insholari va loyihalari orqali uning o'sish dinamikasini baholash."
  },
  20: {
    title: "20-KUN: Idioms & Academic Collocations & AKT",
    points: ["B2/C1 idiomalar va akademik iboralar", "Kollokatsiyalar qat'iyligi", "Darsda EdTech vositalaridan foydalanish"],
    trap: "Idiomalarni so'zma-so'z tarjima qilib bo'lmaydi; testda ularning ko'chma ma'nosi kontekstda so'raladi.",
    table: `
      <tr><td>Bite the bullet</td><td>Qiyinchilikka chidamoq</td><td>We must bite the bullet and complete the heavy accreditation.</td></tr>
      <tr><td>Burn the midnight oil</td><td>Kechasi bilan uxlamay o'qimoq</td><td>She burned the midnight oil preparing for the toifa exam.</td></tr>
      <tr><td>See eye to eye</td><td>To'liq fikrdosh bo'lmoq</td><td>The committee members rarely see eye to eye on syllabus design.</td></tr>
    `,
    method: "AKT Vositalari: Quizizz, Kahoot, Padlet, Google Classroom orqali dars samaradorligini va o'quvchi qiziqishini oshirish."
  },
  21: {
    title: "21-KUN: Listening Strategiyalari & Topshiriq Tuzish",
    points: ["Top-down (fon bilimi) vs Bottom-up (tovushlar)", "Pre, While, Post listening bosqichlari", "Tinglab tushunish topshiriqlari"],
    trap: "Pre-listening bosqichida audio eshittirilmaydi! Bu bosqich faqat mavzu kontekstini faollashtirish uchun xizmat qiladi.",
    table: `
      <tr><td>Pre-listening</td><td>Tayyorgarlik</td><td>Mavzuni ochish, rasm va sarlavhalar orqali taxmin qilish (Predicting)</td></tr>
      <tr><td>While-listening</td><td>Eshitish jarayoni</td><td>1-eshitish: Gist (umumiy), 2-eshitish: Specific detail (aniq faktlar)</td></tr>
      <tr><td>Post-listening</td><td>Chiqish va xulosa</td><td>Eshitilgan matn yuzasidan bahs, yozish yoki rolli o'yin</td></tr>
    `,
    method: "Top-down tinglashda o'quvchi o'z dunyoqarashi va kontekstga tayanadi; Bottom-up da esa so'zlar va tovushlarni alohida tahlil qiladi."
  },
  22: {
    title: "22-KUN: Writing Turlari & Baholash Rubrikalari",
    points: ["Formal Letter, Opinion Essay, Report tuzilishi", "Bog'lovchi vositalar (Cohesive devices)", "Writing baholash mezonlari (CEFR Rubrics)"],
    trap: "Rasmiy insho va xatlarda qisqartmalar (don't, can't, won't) va so'zlashuv iboralarini ishlatish uslubiy xatodir!",
    table: `
      <tr><td>Task Achievement</td><td>Mavzuni to'liq yoritish</td><td>Barcha berilgan savol va talablarga to'liq javob berilganmi?</td></tr>
      <tr><td>Coherence & Cohesion</td><td>Mantiq va bog'liqlik</td><td>Paragraflarga bo'linish, bog'lovchilarning to'g'ri ishlatilishi.</td></tr>
      <tr><td>Lexical Resource</td><td>So'z boyligi</td><td>Mavzuga oid boy va akademik so'zlar qo'llanilganmi?</td></tr>
      <tr><td>Grammatical Accuracy</td><td>Grammatik aniqlik</td><td>Murakkab gap tuzilmalari va sintaktik xatolarsizlik.</td></tr>
    `,
    method: "Rubrikalar yordamida baholash: O'quvchiga shunchaki ball qo'yilmaydi, balki har bir mezon bo'yicha alohida tahliliy ko'rsatkich beriladi."
  },
  23: {
    title: "23-KUN: Speaking Faoliyatlari & Fluency vs Accuracy",
    points: ["Information Gap va Jigsaw metodlari", "Fluency (ravonlik) vs Accuracy (aniqlik)", "Muloqotni rivojlantirish faoliyatlari"],
    trap: "Fluency faoliyatlarida o'qituvchi o'quvchini har bir grammatik xatosi uchun to'xtatishi metodik xatodir!",
    table: `
      <tr><td>Information Gap</td><td>Axborot yetishmovchiligi</td><td>Har bir o'quvchida ma'lumotning bir qismi bo'ladi, savol-javobsiz vazifa bitmaydi.</td></tr>
      <tr><td>Role Play</td><td>Rolli o'yin</td><td>Real hayotiy vaziyatlar (do'konda, aeroportda, intervyuda) simulyatsiyasi.</td></tr>
      <tr><td>Jigsaw</td><td>Bo'lakli o'qitish</td><td>Guruh a'zolari turli bo'laklarni o'rganib, qaytib bir-biriga o'rgatadi.</td></tr>
    `,
    method: "Fluency mashqlarida o'qituvchi kuzatuvchi va yozib oluvchi roliga o'tadi; xatolar mashq tugagach, umumiy tahlil qilinadi."
  },
  24: {
    title: "24-KUN: B2-C1 Murakkab Konstruksiyalar (Cleft Sentences)",
    points: ["It-cleft gaplar: It was X that...", "Wh-cleft gaplar: What I really need is...", "Inversiya va urg'u berish"],
    trap: "'It was in 1991 when independence was declared' ❌ ➔ 'It was in 1991 that...' ✔️ (Cleft gaplarda 'that' ishlatiladi).",
    table: `
      <tr><td>It-cleft</td><td>It + be + urg'u + that/who</td><td>It was the teacher who inspired the entire generation.</td></tr>
      <tr><td>Wh-cleft</td><td>What-clause + be + urg'u</td><td>What students need most is constructive encouragement.</td></tr>
      <tr><td>Fronting</td><td>Bo'lakni boshga chiqarish</td><td>Into the auditorium walked the chief education officer.</td></tr>
    `,
    method: "Matn tahlilida o'quvchilarga oddiy gaplarni murakkab akademik konstruksiyalarga o'zgartirish (paraphrasing) mashqlarini o'rgatish."
  },
  25: {
    title: "25-KUN: Attestatsiyada Eng Ko'p Yiqitadigan 30 Ta 'Tuzoq' Qoidalar",
    points: ["30 ta eng mashhur grammatik tuzoq konspekti", "Shoshqaloqlik va chalg'ituvchi variantlar", "Imtihon komissiyasi metodlari"],
    trap: "Savoldagi 'NOT', 'EXCEPT', 'LEAST LIKELY' so'zlariga e'tibor bermaslik eng ko'p ball yo'qotilishiga olib keladi!",
    table: `
      <tr><td>1. Only when inversiyasi</td><td>2-gapga yordamchi fe'l qo'yiladi</td><td>Only when the rain stopped did we leave.</td></tr>
      <tr><td>2. Subjunctive fe'l shakli</td><td>Doim V1 (bare)</td><td>Insisted that he attend (attends emas).</td></tr>
      <tr><td>3. Unless bilan inkor</td><td>Inkor fe'l kelmaydi</td><td>Unless you study (Unless you don't emas).</td></tr>
      <tr><td>4. Non-defining relative</td><td>That taqiqlanadi</td><td>The book, which is on the desk, is mine.</td></tr>
      <tr><td>5. Despite / In spite of</td><td>Despite of bo'lmaydi</td><td>Despite the rain / In spite of the rain.</td></tr>
    `,
    method: "Test strategiyasi: Variantlarni tanlashda 'Nega bu to'g'ri?' deb emas, 'Nega qolgan 3 tasi noto'g'ri?' degan inkor usulidan foydalaning."
  },
  26: {
    title: "26-KUN: 1-TO'LIQ MOCK TEST (Strategiya va Vaqt)",
    points: ["50 ta savolga 90 daqiqa vaqt taqsimoti", "40 ta mutaxassislik + 10 ta pedagogika savollari", "Birinchi bosqich sinovi"],
    trap: "Bitta qiyin savolga 3-4 daqiqa vaqt sarflab yopishib qolmang! Belgilab o'tib, oxirida qayting.",
    table: `
      <tr><td>Mutaxassislik (1-40)</td><td>Grammatika, leksika, o'qish</td><td>Har bir savolga 1.5 daqiqa (jami 60 daqiqa)</td></tr>
      <tr><td>Pedagogika (41-50)</td><td>Metodika va psixologiya</td><td>Har bir savolga 1.5 daqiqa (jami 15 daqiqa)</td></tr>
      <tr><td>Qayta tekshirish</td><td>Shubhali savollar tahlili</td><td>So'nggi 15 daqiqa zaxira vaqt</td></tr>
    `,
    method: "Mock imtihon maqsadi: Bilim darajasini sinash bilan birga, imtihon zalidagi real vaqt mezoniga ruhiy ko'nikish."
  },
  27: {
    title: "27-KUN: 1-Mock Test Tahlili va Xatolar Diagnostikasi",
    points: ["Xatolar tahlili va sabablari", "Grammatika vs Metodika balansi", "Shaxsiy xatolar daftari"],
    trap: "Noto'g'ri javobni shunchaki to'g'ri variantga almashtirib ketmang — nima uchun aynan shu variant xatoligini tushuning!",
    table: `
      <tr><td>1-Tur Xato</td><td>Qoidani bilmaslik</td><td>Mavzuni nazariy konspekt orqali qayta o'qish</td></tr>
      <tr><td>2-Tur Xato</td><td>Shoshqaloqlik / Chalg'ish</td><td>Savol shartini qalam bilan chizib o'qish odatini shakllantirish</td></tr>
      <tr><td>3-Tur Xato</td><td>Tuzoqqa ilinish</td><td>Examiner tuzog'ini daftarga alohida yozib olish</td></tr>
    `,
    method: "Zaif mavzular bo'yicha diagnostik reja tuzish va aynan o'sha bo'limlarga qo'shimcha amaliyot ajratish."
  },
  28: {
    title: "28-KUN: 2-TO'LIQ MOCK TEST (Vaqt Boshqaruvi)",
    points: ["Ikkinchi simulyatsiya imtihoni", "Stress ostida diqqatni jamlash", "Yuqori ball olish strategiyasi"],
    trap: "Oxirgi 5 ta savolga shoshib tavakkal belgilamaslik uchun vaqtni har 15 ta savolda nazorat qilib boring.",
    table: `
      <tr><td>1-Blok (1-15)</td><td>Dastlabki 20 daqiqa</td><td>Diqqatni jamlab, ishonchli start olish</td></tr>
      <tr><td>2-Blok (16-35)</td><td>O'rta 30 daqiqa</td><td>Murakkab reading va grammatik tuzilmalar</td></tr>
      <tr><td>3-Blok (36-50)</td><td>Oxirgi 25 daqiqa</td><td>Metodika savollari va yakuniy tekshirish</td></tr>
    `,
    method: "Psixologik chidamlilik: Har qanday qiyin savolga duch kelganda sarosimaga tushmasdan, mantiqiy istisno qilish orqali to'g'ri javobni topish."
  },
  29: {
    title: "29-KUN: 2-Mock Test Tahlili va So'nggi Yo'l-Yo'riqlar",
    points: ["Ikkinchi test xatolari tahlili", "Eng ko'p xato qilingan 5 mavzuni qayta mustahkamlash", "So'nggi tayyorgarlik"],
    trap: "Imtihondan oldingi kun yangi murakkab mavzularni o'rganishga urinmang — faqat o'tilganlarni mustahkamlang.",
    table: `
      <tr><td>Xatolar kamayishi</td><td>1-test vs 2-test</td><td>Foiz ko'rsatkichining 75-80%+ ga yetganligini tekshirish</td></tr>
      <tr><td>Metodika bloki</td><td>Pedagogika savollari</td><td>10 tadan kamida 8 tasiga to'g'ri javob berish me'yori</td></tr>
    `,
    method: "Yakuniy tahlil: Bilimlarni tizimlashtirish va shaxsiy muvaffaqiyat formulasiga ishonch hosil qilish."
  },
  30: {
    title: "30-KUN: Imtihon Oldi Ekspress-Takrorlash & Psixologik Tayyorgarlik",
    points: ["Oltin formulalar ekspress-xulosasi", "Imtihon kuni psixologiyasi va o'ziga ishonch", "100 Ballik G'alaba Rejasi"],
    trap: "Imtihon oldi kechasi tonggacha dars qilib chiqish ❌ — Uyqusizlik imtihonda diqqatni 40% ga pasaytiradi!",
    table: `
      <tr><td>Uyqu va dam olish</td><td>Kamida 7-8 soat</td><td>Miyaning toliqishi testda e'tiborsizlikka sabab bo'ladi</td></tr>
      <tr><td>Hujjatlar</td><td>Passport / ID, Ruxsatnoma</td><td>Ertalab shoshilmaslik uchun kechqurun tayyorlab qo'yish</td></tr>
      <tr><td>Imtihon zali</td><td>45 daqiqa oldin borish</td><td>Auditoriyaga xotirjam va ruhiy xotirjamlik bilan kirish</td></tr>
    `,
    method: "O'ziga ishonch psixologiyasi: 30 kunlik intensiv mehnat o'z mevasini berishiga ishonish va barcha savollarni sovuqqonlik bilan yechish."
  }
};

// Process Days 1-5
for (const [dayStr, data] of Object.entries(LESSON_DATABASE)) {
  const day = parseInt(dayStr);
  if (CURRICULUM[day]) {
    CURRICULUM[day].theoryHtml = data.html;
    CURRICULUM[day].keyPoints = data.keyPoints;
    CURRICULUM[day].trap = data.trap;
  }
}

// Process Days 6-30
for (const [dayStr, data] of Object.entries(REMAINING_CURRICULUM_DATA)) {
  const day = parseInt(dayStr);
  if (CURRICULUM[day]) {
    const fullHtml = `
      <div class="theory-card">
        <h2>🧐 ${data.title}</h2>
        <p>Attestatsiyada ushbu mavzu bo'yicha ham <strong>Mutaxassislik grammatikasi</strong>, ham <strong>Pedagogik metodika</strong> integratsiyalashgan holda chuqur tushadi.</p>

        <h3>1. Asosiy Qoidalar va Qiyosiy Formulalar</h3>
        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Qolip / Tuzilma</th>
                <th>Tavsifi</th>
                <th>Akademik Misol va Izoh</th>
              </tr>
            </thead>
            <tbody>
              ${data.table}
            </tbody>
          </table>
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. PEDAGOGIK METODIKA VA DARSNI TASHKIL ETISH</h2>
        <div class="formula-box" style="background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;">
          📘 <strong>Metodik Yondashuv:</strong> ${data.method}
        </div>
        <p>Milliy o'quv dasturi va xalqaro CEFR me'yorlariga ko'ra, dars jarayonida o'quvchi-markazlashgan (Student-Centered) muhit yaratish talab etiladi.</p>
      </div>

      <div class="theory-card">
        <h2>🔥 3. ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>
        <div class="uzb-meaning" style="background: #fef2f2; border-color: #ef4444; color: #991b1b;">
          ⚠️ <strong>DIQQAT — TUZOQ:</strong> ${data.trap}
        </div>
      </div>
    `;

    CURRICULUM[day].theoryHtml = fullHtml;
    CURRICULUM[day].keyPoints = data.points;
    CURRICULUM[day].trap = data.trap;
  }
}

// 3. Serialize back cleanly to curriculum.js
const headerComment = `// ============================================================================
// TOIFA PRO — 30 KUNLIK TO'LIQ O'QUV DASTURI VA TEST BAZASI
// Har bir mavzu maktab bolasi ham 100% tushunadigan darajada o'zbekcha sodda tilda,
// hayotiy misollar, qiyosiy jadvallar, tuzoqlar va har bir kun uchun alohida 16+ ta saralangan testlar bilan.
// ============================================================================

`;

const serializedCurriculum = headerComment +
  'const CURRICULUM = ' + JSON.stringify(CURRICULUM, null, 2) + ';\n\n' +
  'const CURRICULUM_INDEX = ' + JSON.stringify(CURRICULUM_INDEX, null, 2) + ';\n';

fs.writeFileSync(curriculumFilePath, serializedCurriculum, 'utf8');
console.log('✅ 30 KUNLIK MUKAMMAL AKADEMIK NAZARIYA BAZASI YARATILDI VA CURRICULUM.JS GA SAQLANDI!');
