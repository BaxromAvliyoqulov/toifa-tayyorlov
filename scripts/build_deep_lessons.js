// ============================================================================
// TOIFA PRO — 30 KUNLIK MUKAMMAL AKADEMIK NAZARIYA GENERATORI
// Har bir mavzu: Lingvistik tahlil + Qiyosiy jadval + 5 ta Attestatsiya tuzog'i
// + Pedagogik metodika + Real situatsion keys (Case Study)
// ============================================================================

const fs = require('fs');
const path = require('path');

const DEEP_LESSONS = {
  1: {
    keyPoints: [
      "Negative Inversion: Never, Seldom, Rarely, Hardly when, No sooner than",
      "Two-clause Inversion: Only when, Not until (inversiya 2-gapda bo'ladi!)",
      "PPP Modeli: Presentation ➔ Controlled Practice ➔ Free Production"
    ],
    trap: "'Only when he arrived did the meeting start' — Inversiya 'only when' qismida EMAS, asosiy gapda bo'ladi!",
    html: `
      <div class="theory-card">
        <h2>🧐 1-KUN: Negative & Conditional Inversion (Teskari So'z Tartibi)</h2>
        <p>Inversiya — gapda urg'uni oshirish, badiiy-akademik jilo berish yoki qat'iy cheklovni ifodalash uchun <strong>yordamchi fe'lning egadan oldinga o'tishi</strong>dir. Attestatsiya testlarida B2/C1 darajadagi eng sevimli mavzulardan biridir.</p>

        <div class="uzb-meaning">
          💡 <strong>Ona tili bilan qiyoslash:</strong> O'zbek tilida urg'u berish uchun so'z tartibi erkin o'zgaradi (<em>"Hech qachon men buni ko'rmaganman"</em>). Ingliz tilida esa qat'iy qoida mavjud: inkor so'z gap boshiga chiqsa, gap <strong>so'roq gap shakliga</strong> kirishi shart!
        </div>

        <h3>1. Inkor va Cheklovchi So'zlar bilan Inversiya Qoliplari</h3>
        <div class="formula-box">
          [Asosiy qolip] ➔ [Inkor / Cheklovchi so'z] + [Yordamchi fe'l / Modal] + [Ega] + [Asosiy fe'l]
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
                <td><strong>Seldom have we witnessed</strong> such dedication. (Biz kamdan-kam bunday sadoqatni ko'rganmiz).</td>
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
                <td><strong>Little did the teacher know</strong> that the curriculum would be revised. (O'qituvchi o'quv dasturi o'zgarishini xayoliga ham keltirmagan edi).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="theory-card">
        <h2>🔥 2. ATTESTATSIYANING ENG XAVFLI TUZOQLARI (EXAMINER TRAPS)</h2>

        <div class="example-pair">
          <div class="example-box bad">
            <span class="lbl">❌ 1-Tuzoq: Oddiy so'z tartibi qo'yib ketish:</span>
            <em>Rarely she complains about the heavy workload.</em><br>
            (Xato: yordamchi fe'l 'does' tushib qolgan).
          </div>
          <div class="example-box good">
            <span class="lbl">✔️ To'g'ri Inversiya:</span>
            <strong>Rarely does she complain</strong> about the heavy workload.
          </div>
        </div>

        <div class="example-pair">
          <div class="example-box bad">
            <span class="lbl">❌ 2-Tuzoq: Not until / Only when da 1-gapga inversiya qilish:</span>
            <em>Not until did he arrive, the ceremony started.</em><br>
            (Xato: ergash gapga inversiya qo'yib bo'lmaydi).
          </div>
          <div class="example-box good">
            <span class="lbl">✔️ To'g'ri (Inversiya ASOSIY gapda bo'ladi):</span>
            Not until he arrived <strong>did the ceremony start</strong>.
          </div>
        </div>

        <div class="uzb-meaning" style="background: #fef2f2; border-color: #ef4444; color: #991b1b;">
          ⚠️ <strong>Oltin qoida:</strong> <code>Only after</code>, <code>Only when</code>, <code>Not until</code> kelsa, ularga yopishib kelgan birinchi gap oddiy bo'ladi, <strong>ikkinchi (asosiy) gapda</strong> inversiya yuz beradi!
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 3. PEDAGOGIK METODIKA: PPP (PRESENTATION, PRACTICE, PRODUCTION)</h2>
        <p>Attestatsiyada metodika savollarida an'anaviy dars bosqichlari bo'yicha PPP modeli tushadi:</p>

        <div class="formula-box" style="background: #eff6ff; border-color: #93c5fd; color: #1e3a8a;">
          1️⃣ <strong>PRESENTATION (Taqdimot):</strong> Yangi grammatik qoida kontekstda ko'rsatiladi (dialog, matn). O'qituvchi qoidani tushuntiradi, talaffuz va intonatsiyani modellashtiradi. (Teacher-centered).<br><br>
          2️⃣ <strong>PRACTICE (Nazorat ostidagi mashq):</strong> O'quvchilar xatolarga yo'l qo'ymaslik uchun bo'sh joylarni to'ldirish, gaplarni qayta tartiblash (Controlled Practice) mashqlarini bajarishadi. Bu bosqichda <strong>aniqlik (Accuracy)</strong> ustuvor.<br><br>
          3️⃣ <strong>PRODUCTION (Erkin muloqot):</strong> O'quvchilar o'rganilgan tuzilmani o'z hayotiy nutqida, rolli o'yinlar yoki erkin bahsda qo'llashadi (Free Practice). Bu bosqichda <strong>ravonlik (Fluency)</strong> ustuvor.
        </div>

        <div class="case-study-box">
          <h4>📌 Pedagogik Keys (Attestatsiya Situatsion Savoli):</h4>
          <p><strong>Vaziyat:</strong> O'qituvchi yangi qoidani tushuntirgach, darhol o'quvchilardan erkin bahs-munozara (Debate) o'tkazishni talab qildi. O'quvchilar ko'p xatolarga yo'l qo'yib, gapira olmay to'xtab qolishdi. O'qituvchi qaysi metodik bosqichni tashlab ketgan?</p>
          <div class="case-study-solution">
            ✔️ <strong>To'g'ri metodik yechim:</strong> O'qituvchi <strong>Controlled Practice (mashq qilish)</strong> bosqichini tashlab ketgan. O'quvchilar yangi qoidani erkin qo'llashdan oldin qolip asosida mashqlar ishlab, ko'nikmani mustahkamlab olishlari shart edi.
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
      "Subjunctive: It is essential that he BE present (bare infinitive)",
      "Causative: have sth done, get sb TO do, make sb do",
      "Formative (o'sish uchun) vs Summative (yakuniy rasmiy baho)"
    ],
    trap: "'The headmaster insisted that she submit the report' — 'submits' yoki 'submitted' emas, doim V1 (bare infinitive) qo'yiladi!",
    html: `
      <div class="theory-card">
        <h2>🧐 3-KUN: Subjunctive Mood & Causative Verbs & Baholash Metodikasi</h2>
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
        <h2>🧐 4-KUN: Gerund vs Infinitive & Feedback Turlari</h2>
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
        <p>Attestatsiya metodikasida o'quvchilarga fikr-mulohaza bildirish strategiyalari:</p>

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

// Now read curriculum.js
const curriculumPath = path.join(__dirname, '..', 'js', 'curriculum.js');
let content = fs.readFileSync(curriculumPath, 'utf8');

// For days 1 to 5, inject full deep lessons
for (const [dayStr, data] of Object.entries(DEEP_LESSONS)) {
  const day = parseInt(dayStr);
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

fs.writeFileSync(curriculumPath, content, 'utf8');
console.log('Successfully injected deep masterclass lessons into curriculum.js!');
