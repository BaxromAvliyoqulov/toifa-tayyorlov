const fs = require('fs');
const path = require('path');

// Master dictionary of in-depth lessons for days 6 to 30
const DEEP_6_TO_30 = {
  6: {
    keyPoints: [
      "Wish + Past Simple (Hozirgi noreal afsus)",
      "Wish + Past Perfect (O'tmishdagi afsus va pushaymonlik)",
      "Wish + Would (Boshqa odamning qilmishidan norozilik)",
      "SMART dars maqsadlari (Specific, Measurable, Achievable, Relevant, Time-bound)"
    ],
    trap: "'I wish I would have more money' ❌ — O'zimizga nisbatan 'would' ishlatilmaydi! 'I wish I had' bo'ladi.",
    html: `
      <div class="theory-card">
        <h2>🧐 6-KUN: Wish / If Only / As if & SMART Dars Maqsadlari</h2>
        <p>Wish va If Only qoliplari orzu-istak va afsuslanishni bildiradi. Qoida: zamon doim <strong>bir bosqich orqaga</strong> suriladi.</p>

        <h3>1. Wish / If Only Qiyosiy Tahlili</h3>
        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Vaqt Pog'onasi</th>
                <th>Grammatik Qolip</th>
                <th>Misol va O'zbekcha Ma'nosi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Hozirgi zamon afsusi</strong></td>
                <td>Wish + Past Simple (were)</td>
                <td><em>I wish I lived closer to the school.</em> (Koshki maktabga yaqinroq yashasam edi — lekin uzoqda yashayman).</td>
              </tr>
              <tr>
                <td><strong>O'tmishdagi pushaymonlik</strong></td>
                <td>Wish + Past Perfect (had + V3)</td>
                <td><em>I wish I had double-checked the answers.</em> (Koshki javoblarni qayta tekshirganimda edi — afsuski tekshirmadim).</td>
              </tr>
              <tr>
                <td><strong>Norozilik / O'zgarish talabi</strong></td>
                <td>Wish + person + would + V1</td>
                <td><em>I wish you would stop talking loudly.</em> (Baqirib gapirishni to'xtatsangiz edi — shikoyat).</td>
              </tr>
              <tr>
                <td><strong>Qobiliyat/Imkoniyat orzusi</strong></td>
                <td>Wish + could + V1</td>
                <td><em>I wish I could attend the seminar tomorrow.</em> (Ertangi seminarga bora olsam edi).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="uzb-meaning">
          ⚠️ <strong>It's time / It's high time qolipi:</strong><br>
          <code>It's time + Subject + Past Simple (V2)</code> ➔ <em>It's high time we started the mock exam.</em> (Imtihonni boshlashimizning ayni vaqti / vaqti o'tib boryapti).
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. PEDAGOGIK METODIKA: SMART DARS MAQSADLARI</h2>
        <p>Yangi Milliy O'quv Dasturiga ko'ra, har bir dars maqsadi SMART mezoniga javob berishi shart:</p>
        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Harf</th>
                <th>Mezon</th>
                <th>Ma'nosi va Darsdagi Misoli</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>S</strong></td>
                <td>Specific (Aniq)</td>
                <td>Umumiy "Ingliz tilini o'rganish" emas, "O'quvchilar 5 ta yangi shart gap qolipini to'g'ri qo'llay oladilar".</td>
              </tr>
              <tr>
                <td><strong>M</strong></td>
                <td>Measurable (O'lchanadigan)</td>
                <td>Natijani tekshirib bo'lishi kerak: "10 ta savoldan kamida 8 tasiga to'g'ri javob berish".</td>
              </tr>
              <tr>
                <td><strong>A</strong></td>
                <td>Achievable (Erishsa bo'ladigan)</td>
                <td>45 daqiqalik darsda o'quvchilarning real imkoniyatiga mos.</td>
              </tr>
              <tr>
                <td><strong>R</strong></td>
                <td>Relevant (Ahamiyatli)</td>
                <td>Darslik va milliy standart talablariga mos kelishi.</td>
              </tr>
              <tr>
                <td><strong>T</strong></td>
                <td>Time-bound (Vaqtga bog'liq)</td>
                <td>Dars oxirigacha (by the end of the 45-minute lesson) bajarilishi.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },

  7: {
    keyPoints: [
      "Passive Voice: be + V3",
      "Impersonal Passive: He is said to have lived (Perfect Infinitive)",
      "Sinf boshqaruvi: TTT (30%) vs STT (70%), Seating plans"
    ],
    trap: "'The minister is reported to have signed the treaty' — O'tgan zamondagi xabar bo'lsa, 'to sign' emas, 'to have signed' qo'yiladi!",
    html: `
      <div class="theory-card">
        <h2>🧐 7-KUN: Passive Voice & Impersonal Passive & Sinf Boshqaruvi</h2>
        <p>Attestatsiya testlarida oddiy majhul nisbatdan ko'ra <strong>Impersonal Passive (Xabarlar va ommaviy fikrlar)</strong> ko'p tushadi.</p>

        <h3>1. Impersonal Passive Qoliplari</h3>
        <div class="formula-box">
          • 1-Qolip: <code>It + be + V3 (said / believed / thought) + that-clause</code><br>
          <em>Misol:</em> It is believed that critical thinking is essential.<br><br>
          • 2-Qolip: <code>Subject + be + V3 + to-infinitive</code><br>
          - Hozirgi zamonda: <em>He is said <strong>to know</strong> five languages.</em><br>
          - O'tgan zamonda: <em>The suspect is believed <strong>to have fled</strong> the country.</em> (Perfect Infinitive)
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. SINF BOSHQARUVI (CLASSROOM MANAGEMENT)</h2>
        <div class="formula-box" style="background: #eff6ff; border-color: #93c5fd;">
          📊 <strong>TTT vs STT Nisbati:</strong><br>
          • <strong>TTT (Teacher Talking Time):</strong> O'qituvchining darsdagi gapirish ulushi ko'pi bilan <strong>30%</strong> bo'lishi kerak.<br>
          • <strong>STT (Student Talking Time):</strong> O'quvchilarning faol muloqot vaqti kamida <strong>70%</strong> bo'lishi lozim.
        </div>
        <p><strong>Partalar joylashuvi:</strong> Munozara va bahs uchun — <em>Horseshoe (U-shape)</em>, guruhli loyihalar uchun — <em>Cluster / Islands</em>.</p>
      </div>
    `
  },

  8: {
    keyPoints: [
      "Defining vs Non-defining Relative Clauses",
      "Whom (to'ldiruvchi) vs Whose (egalik)",
      "Intrinsic (ichki qiziqish) vs Extrinsic (tashqi rag'bat) Motivatsiya"
    ],
    trap: "Non-defining relative clause'da (vergul bilan ajratilgan gaplarda) 'that' qo'yish qat'iyan taqiqlanadi! Faqat 'which' yoki 'who' bo'ladi.",
    html: `
      <div class="theory-card">
        <h2>🧐 8-KUN: Relative Clauses & O'quvchi Motivatsiyasi</h2>
        <p>Nisbiy ergash gaplarda vergul qoidasi va olmoshlar attestatsiyaning doimiy savollaridir.</p>

        <h3>1. Defining vs Non-defining Clauses</h3>
        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Turi</th>
                <th>Vergul</th>
                <th>'That' ishlatilishi</th>
                <th>Misol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Defining</strong> (Ajratib ko'rsatuvchi)</td>
                <td>Yo'q</td>
                <td>Mumkin (who/which o'rniga)</td>
                <td><em>The book that/which I bought yesterday is fascinating.</em></td>
              </tr>
              <tr>
                <td><strong>Non-defining</strong> (Qo'shimcha ma'lumot)</td>
                <td><strong>Bor (ikkala tomondan)</strong></td>
                <td><strong>ASLO MUMKIN EMAS!</strong></td>
                <td><em>My English teacher, <strong>who</strong> studied in London, won an award.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. O'QUVCHI MOTIVATSIYASI (INTRINSIC VS EXTRINSIC)</h2>
        <div class="formula-box">
          • <strong>Intrinsic Motivation (Ichki motivatsiya):</strong> O'quvchining shaxsiy qiziqishi, ichki qoniqishi va bilishga bo'lgan chanqog'i. Ta'limda eng bardavom va samarali turtki!<br>
          • <strong>Extrinsic Motivation (Tashqi motivatsiya):</strong> Baho, ota-ona maqtovi, sovg'a yoki tanbehdanam saqlanish uchun o'qish.
        </div>
      </div>
    `
  },

  9: {
    keyPoints: [
      "Past Modals: must have done, can't have done, should have done",
      "Needn't have done (behuda qildi) vs Didn't need to do (kerak bo'lmagani uchun qilmadi)",
      "4 ko'nikma integratsiyasi (Receptive ➔ Productive)"
    ],
    trap: "'You needn't have bought the book' (kitobni sotib olishing shart emas edi, lekin bekorga pul sarflab sotib olding) ma'nosini bildiradi!",
    html: `
      <div class="theory-card">
        <h2>🧐 9-KUN: Past Modals & 4 Ko'nikma Integratsiyasi</h2>
        <p>O'tmish modallari — o'tmishdagi hodisalarni taxmin qilish (deduction), xulosa chiqarish va tanqid qilish vositasidir.</p>

        <h3>1. O'tmish Modallari Tizimi</h3>
        <div class="theory-table-wrap">
          <table class="theory-table">
            <thead>
              <tr>
                <th>Modal Forma</th>
                <th>Ishonch Darajasi / Ma'nosi</th>
                <th>Misol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Must have + V3</strong></td>
                <td>99% Ishonch (Mantiqiy haqiqat)</td>
                <td><em>The ground is wet; it must have rained heavily.</em></td>
              </tr>
              <tr>
                <td><strong>Can't / Couldn't have + V3</strong></td>
                <td>99% Ishonch (Bo'lishi mumkin emas)</td>
                <td><em>He can't have failed; he is the top student.</em></td>
              </tr>
              <tr>
                <td><strong>Should have + V3</strong></td>
                <td>Tanqid / Afsus (Qilishi kerak edi, qilmadi)</td>
                <td><em>You should have submitted the portfolio on time.</em></td>
              </tr>
              <tr>
                <td><strong>May / Might have + V3</strong></td>
                <td>50% Noaniq ehtimol</td>
                <td><em>She might have missed the announcement.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. METODIKA: INTEGRATED SKILLS APPROACH</h2>
        <p>Til ko'nikmalari bir-biridan ajralgan holda emas, uyg'un o'rgatiladi:</p>
        <p><strong>Receptive Skills (Qabul qiluvchi):</strong> Reading & Listening — o'quvchiga yangi til materiali beradi.<br>
        <strong>Productive Skills (Ishlab chiqaruvchi):</strong> Speaking & Writing — o'rganilgan materialni amalda qo'llash imkonini beradi.</p>
      </div>
    `
  },

  10: {
    keyPoints: [
      "Bog'liq predloglar: insist ON, rely ON, prevent FROM, capable OF",
      "Preposition + Gerund (V-ing) qat'iy qoidasi",
      "Nizolarni hal qilish: Thomas-Kilmann modeli (Collaboration - Win-Win)"
    ],
    trap: "'Discuss about' yoki 'emphasize on' deb qo'ymang! Bu fe'llar o'zidan keyin predlog qabul qilmaydi!",
    html: `
      <div class="theory-card">
        <h2>🧐 10-KUN: Dependent Prepositions & Pedagogik Nizolar</h2>
        <p>Bog'liq predloglar (Dependent prepositions) attestatsiyada aniq leksik bilimni tekshiradi.</p>

        <h3>1. Eng Ko'p Tushadigan Fe'l va Sifat Predloglari</h3>
        <div class="formula-box">
          • <strong>ON:</strong> insist on, congratulate sb on, rely on, depend on, base on.<br>
          • <strong>OF:</strong> capable of, proud of, approve of, accuse sb of, aware of.<br>
          • <strong>FROM:</strong> prevent sb from doing, protect from, suffer from, prohibit from.<br>
          • <strong>IN:</strong> succeed in, participate in, believe in, specialize in.<br>
          • <strong>FOR:</strong> apologize for, criticize for, blame sb for sth.
        </div>
      </div>

      <div class="theory-card">
        <h2>🎯 2. SINFDA NIZOLARNI BOSHQARISH (CONFLICT RESOLUTION)</h2>
        <p>Thomas-Kilmann modeli bo'yicha eng samarali usul — <strong>Collaboration (Hamkorlik / Win-Win)</strong>: har ikki tomon manfaatlari tinglanadi va o'zaro foydali yechim ishlab chiqiladi.</p>
      </div>
    `
  }
};

// Generate comprehensive masterclass lessons for remaining days 11 to 30
const REMAINDER_MODULES = [
  {
    day: 11,
    title: "11-KUN: Phrasal Verbs (Eng Muhim 40 Ta) & Milliy O'quv Dasturi",
    points: ["Transitive vs Intransitive phrasal verbs", "Separable vs Inseparable fe'llar", "Milliy o'quv dasturi kompetensiyalari"],
    trap: "'Look forward to seeing you' — bu yerda 'to' infinitive emas, predlog, shuning uchun Gerund (-ing) keladi!",
    body: `
      <h3>1. Ajraladigan va Ajralmaydigan Ibora Fe'llari</h3>
      <p>Phrasal fe'llar zamonaviy ingliz tilining eng jonli qismidir:</p>
      <div class="formula-box">
        • <strong>Separable (Ajraladigan):</strong> Turn off the light = Turn the light off.<br>
        ⚠️ <em>Olmosh kelsa, O'RTASIGA tushishi shart:</em> Turn it off (Turn off it ❌).<br>
        • <strong>Inseparable (Ajralmaydigan):</strong> Look after, come across, run into. (O'rtasiga so'z qo'yilmaydi).<br>
        • <strong>3 qismli fe'llar:</strong> Look forward to + V-ing, put up with, get on with.
      </div>
      <h3>2. Yangi Milliy O'quv Dasturi Talabi</h3>
      <p>Dasturning bosh mezoni — <strong>Kommunikativ kompetensiya (Communicative Competence)</strong>: o'quvchi grammatik qoidalarni yodlab aytib berishi emas, real hayotiy muloqotda til vositalaridan to'g'ri foydalana olishi baholanadi.</p>
    `
  },
  {
    day: 12,
    title: "12-KUN: Reading Strategiyalari & Inklyuziv Ta'lim",
    points: ["Skimming (Gist) vs Scanning (Specific info)", "Reading for detail va Inference", "Inklyuziv ta'lim va individual yondashuv"],
    trap: "Skimming — butun matnni sinchiklab o'qish emas, 1-2 daqiqada sarlavha va kirish orqali umumiy ma'noni anglashdir!",
    body: `
      <h3>1. Reading Sub-skills (O'qib tushunish ko'nikmalari)</h3>
      <div class="theory-table-wrap">
        <table class="theory-table">
          <thead><tr><th>Ko'nikma</th><th>Maqsadi</th><th>Amaliy Misol</th></tr></thead>
          <tbody>
            <tr><td><strong>Skimming</strong></td><td>Matnning umumiy mohiyati (Gist)ni anglash</td><td>Gazeta sarlavhalari va xulosani ko'zdan kechirish</td></tr>
            <tr><td><strong>Scanning</strong></td><td>Aniq ma'lumot (sana, ism, raqam)ni qidirish</td><td>Poyezd jadvalidan o'z vaqtini topish</td></tr>
            <tr><td><strong>Inference</strong></td><td>Qatorlar orasidagi yashirin ma'noni o'qish</td><td>Muallif kayfiyati va munosabatini aniqlash</td></tr>
          </tbody>
        </table>
      </div>
      <h3>2. Inklyuziv Ta'lim Tamoyillari</h3>
      <p>Alohida ta'lim ehtiyojlari bo'lgan o'quvchilarni umumiy sinf muhitiga kiritish, ularga moslashtirilgan vazifalar va rag'batlantiruvchi muhit yaratish.</p>
    `
  },
  {
    day: 13,
    title: "13-KUN: Confusing Words & Attestatsiya Qonunchiligi",
    points: ["Make vs Do kollokatsiyalari", "Raise (o'timli) vs Rise (o'timsiz), Lie vs Lay", "Pedagogik attestatsiya nizomi va toifa talablari"],
    trap: "'Do an effort' ❌ emas, 'Make an effort' ✔️; 'Do research' ✔️, 'Do business' ✔️.",
    body: `
      <h3>1. Make vs Do Farqlari</h3>
      <div class="formula-box">
        • <strong>MAKE (Yaratish, vujudga keltirish):</strong> make a mistake, make an effort, make a decision, make a difference.<br>
        • <strong>DO (Burch, vazifa, faoliyat):</strong> do homework, do research, do business, do someone a favor.
      </div>
      <h3>2. Raise vs Rise</h3>
      <p><strong>Rise (o'timsiz):</strong> <em>The sun rises. Prices have risen.</em> (To'ldiruvchi talab qilmaydi).<br>
      <strong>Raise (o'timli):</strong> <em>Please raise your hand.</em> (To'ldiruvchi talab qiladi).</p>
    `
  },
  {
    day: 14,
    title: "14-KUN: Articles & Determiners & Dars Tahlili",
    points: ["A / An / The me'yorlari", "Few / A few (sanaladigan) vs Little / A little (sanalmaydigan)", "Dars kuzatish va tahlil qilish mezonlari"],
    trap: "'Few' (kam, yetarli emas — inkor ma'no) vs 'A few' (oz bo'lsa-da yetarli — ijobiy ma'no).",
    body: `
      <h3>1. Few vs Little Nozikliklari</h3>
      <div class="formula-box">
        • <strong>Few / A few:</strong> Sanaladigan otlar bilan (friends, books).<br>
        - <em>Few people came:</em> Deyarli hech kim kelmadi (yetarli emas).<br>
        - <em>A few people came:</em> Bir nechta odam keldi (yetarli).<br>
        • <strong>Little / A little:</strong> Sanalmaydigan otlar bilan (money, time, patience).
      </div>
      <h3>2. Dars Tahlili (Lesson Observation)</h3>
      <p>Zamonaviy dars tahlilida o'qituvchining faolligi emas, <strong>o'quvchilarning darsdagi ishtiroki va maqsadga erishilganlik darajasi</strong> bosh mezon hisoblanadi.</p>
    `
  },
  {
    day: 15,
    title: "15-KUN: Reported Speech & Reporting Verbs & Pedagogik Etika",
    points: ["Backshift of tenses (Zamonlarning surilishi)", "Reporting verbs: urge, threaten, deny doing, admit doing", "O'qituvchi kasbiy etikasi va pedagogik takt"],
    trap: "'He denied to steal the exam paper' ❌ ➔ 'He denied stealing the exam paper' ✔️ (Deny fe'lidan keyin Gerund keladi!).",
    body: `
      <h3>1. Reporting Verbs va Ularning Qoliplari</h3>
      <div class="formula-box">
        • Verb + to-infinitive: agree, offer, promise, refuse.<br>
        • Verb + sb + to-infinitive: advise, encourage, remind, warn, urge.<br>
        • Verb + Gerund (V-ing): admit, deny, apologize for, insist on.
      </div>
      <h3>2. Pedagogik Etika</h3>
      <p>O'qituvchi o'quvchilar oldida adolatli, xolis va barcha uchun teng imkoniyat yaratuvchi shaxs bo'lishi shart.</p>
    `
  },
  {
    day: 16,
    title: "16-KUN: Noun Clauses & Question Tags Tuzoqlari",
    points: ["Noun clause gapda ega va to'ldiruvchi vazifasida", "Question tags murakkab qoidalari", "Darsliklardagi topshiriqlar tahlili"],
    trap: "'Nobody called, did they?' — 'Nobody' inkor ma'no bildirgani uchun tag ijobiy bo'ladi va 'they' olmoshi olinadi!",
    body: `
      <h3>1. Question Tags Maxsus Qoliplari</h3>
      <div class="formula-box">
        • <em>I am right, <strong>aren't I?</strong></em><br>
        • <em>Let's begin, <strong>shall we?</strong></em><br>
        • <em>Open the door, <strong>will you / would you?</strong></em><br>
        • <em>Nothing was stolen, <strong>was it?</strong></em> (Nothing inkor, olmoshi 'it').<br>
        • <em>Everybody attended, <strong>didn't they?</strong></em> (Everybody uchun 'they' olinadi).
      </div>
    `
  },
  {
    day: 17,
    title: "17-KUN: Adjectives vs Adverbs & Differentsiatsiya",
    points: ["Hard vs Hardly, Late vs Lately", "Gradable vs Extreme adjectives", "Differentsiatsiyalangan ta'lim (Differentiated Instruction)"],
    trap: "'He works hardly' ❌ (U deyarli ishlamaydi degani) ➔ 'He works hard' ✔️ (U qattiq ishlaydi).",
    body: `
      <h3>1. Shakli Bir Xil Sifat va Ravishlar</h3>
      <p>Hard, fast, late, early, high — bu so'zlarning sifati ham, ravishi ham bir xil shaklda bo'ladi!</p>
      <h3>2. Differentsiatsiyalangan Ta'lim</h3>
      <p>Sinfdagi turli qobiliyatga ega o'quvchilarga bir xil vazifa berish emas, balki vazifaning murakkabligini darajaga moslab berish (Content, Process, Product bo'yicha).</p>
    `
  },
  {
    day: 18,
    title: "18-KUN: Conjunctions & Tanqidiy Fikrlash",
    points: ["Although / Even though vs Despite / In spite of", "Whereas, While, However", "O'quvchilarda tanqidiy fikrlashni rivojlantirish"],
    trap: "'Despite of' deb yozish qo'pol xatodir! 'In spite of' yoki shunchaki 'Despite' bo'ladi.",
    body: `
      <h3>1. Zidlovchi Bog'lovchilar Qoliplari</h3>
      <div class="formula-box">
        • <strong>Although / Even though + Gap (Ega + Fe'l):</strong> <em>Although it rained, we went out.</em><br>
        • <strong>Despite / In spite of + Ot / Gerund (-ing):</strong> <em>Despite the rain, we went out.</em>
      </div>
      <h3>2. Tanqidiy Fikrlash (Critical Thinking)</h3>
      <p>O'quvchiga tayyor ma'lumotni berish emas, balki <em>"Nega?", "Qanday qilib?", "Boshqa muqobil bormi?"</em> degan ochiq savollar (Open-ended questions) berish orqali fikrlashni uyg'otish.</p>
    `
  },
  {
    day: 19,
    title: "19-KUN: Subject-Verb Agreement & Portfolio",
    points: ["Neither... nor, Either... or qoidalari", "As well as, Along with, Together with", "O'quvchi portfoliosi va baholash mezonlari"],
    trap: "'The teacher along with his students was (were emas!) present' — 'along with' birinchi egaga qaraydi!",
    body: `
      <h3>1. Ega va Fe'l Moslashuvi Qoidalari</h3>
      <div class="formula-box">
        • <strong>Neither A nor B:</strong> Fe'l B ga (yaqin turgan egaga) moslashadi.<br>
        <em>Neither the teacher nor the students <strong>were</strong> ready.</em><br>
        • <strong>A as well as / along with B:</strong> Fe'l A ga (birinchi egaga) moslashadi.<br>
        <em>The manager as well as the assistants <strong>was</strong> pleased.</em>
      </div>
    `
  },
  {
    day: 20,
    title: "20-KUN: Idioms & Academic Collocations & AKT Vositalari",
    points: ["B2/C1 idiomalar va ko'chma ma'nolar", "Akademik kollokatsiyalar", "EdTech va interaktiv platformalar"],
    trap: "Idiomalarni so'zma-so'z tarjima qilib bo'lmaydi, ularni kontekstual yaxlitlikda tushunish shart.",
    body: `
      <h3>1. Imtihonda Eng Ko'p Uchraydigan Idiomalar</h3>
      <div class="formula-box">
        • <em>Bite the bullet:</em> Qiyin vaziyatga chidab, sabr bilan qabul qilmoq.<br>
        • <em>Burn the midnight oil:</em> Kechasi bilan dars qilib/ishlab chiqmoq.<br>
        • <em>See eye to eye:</em> Bir fikrda bo'lmoq, to'liq kelishmoq.<br>
        • <em>Once in a blue moon:</em> Juda kamdan-kam ro'y beradigan hodisa.
      </div>
    `
  },
  {
    day: 21,
    title: "21-KUN: Listening Strategiyalari & Topshiriq Tuzish",
    points: ["Top-down vs Bottom-up tinglash jarayonlari", "Pre, While, Post listening bosqichlari", "Tinglab tushunish topshiriqlari"],
    trap: "Pre-listening bosqichida audioni qo'yish taqiqlanadi! Bu bosqich kontekstni faollashtirish uchun xizmat qiladi.",
    body: `
      <h3>1. Listening Bosqichlari</h3>
      <p>1. <strong>Pre-listening:</strong> Mavzuni ochish, rasm/savollar orqali kontekst yaratish, yangi so'zlarni tanishtirish.<br>
      2. <strong>While-listening:</strong> Birinchi marta umumiy ma'no uchun (gist), ikkinchi marta aniq detallar uchun eshitish.<br>
      3. <strong>Post-listening:</strong> Eshitilgan matn asosida nutq yoki yozish mashqini bajarish.</p>
    `
  },
  {
    day: 22,
    title: "22-KUN: Writing Turlari & Baholash Rubrikalari",
    points: ["Formal Letter, Opinion Essay, Report tuzilmalari", "Bog'lovchi vositalar (Cohesive devices)", "Writing baholash rubrikalari (4 mezon)"],
    trap: "Formal xat va insholarda qisqartmalar (don't, can't, I'm) ishlatish uslubiy xato hisoblanadi!",
    body: `
      <h3>1. Insho Baholashning 4 Asosiy Mezoni (CEFR Rubrics)</h3>
      <div class="formula-box">
        1. <strong>Task Achievement / Response:</strong> Mavzu to'liq ochilganmi?<br>
        2. <strong>Coherence & Cohesion:</strong> Fikrlar mantiqiy bog'langanmi va xatboshilar to'g'rimi?<br>
        3. <strong>Lexical Resource:</strong> So'z boyligi va akademik so'zlar darajasi.<br>
        4. <strong>Grammatical Range & Accuracy:</strong> Murakkab grammatika va xatolarsizlik.
      </div>
    `
  },
  {
    day: 23,
    title: "23-KUN: Speaking Faoliyatlari & Fluency vs Accuracy",
    points: ["Information Gap va Jigsaw metodlari", "Fluency (ravonlik) vs Accuracy (aniqlik)", "Muloqotni rivojlantirish faoliyatlari"],
    trap: "Fluency faoliyatlarida o'qituvchi o'quvchini har bir grammatik xatosi uchun to'xtatishi metodik xatodir!",
    body: `
      <h3>1. Information Gap (Axborot yetishmovchiligi)</h3>
      <p>O'quvchilar bir-biriga savol bermasdan topshiriqni bajara olmaydigan vaziyat yaratish. Haqiqiy muloqot aynan shu yerda tug'iladi!</p>
    `
  },
  {
    day: 24,
    title: "24-KUN: B2-C1 Murakkab Konstruksiyalar (Cleft Sentences)",
    points: ["It-cleft gaplar: It was X that...", "Wh-cleft gaplar: What I really need is...", "Inversiya va urg'u berish"],
    trap: "'It was in 1991 when independence was declared' ❌ ➔ 'It was in 1991 that...' ✔️ (Cleft gaplarda 'that' ishlatiladi).",
    body: `
      <h3>1. Cleft Sentences (Ajratilgan urg'u gaplar)</h3>
      <div class="formula-box">
        • <strong>It-cleft:</strong> <code>It + be + [urg'u berilayotgan bo'lak] + that / who...</code><br>
        <em>Misol:</em> It was my mentor that encouraged me to take the exam.<br>
        • <strong>Wh-cleft:</strong> <code>What + clause + be + [urg'u]</code><br>
        <em>Misol:</em> What we need most is systematic practice.
      </div>
    `
  },
  {
    day: 25,
    title: "25-KUN: Attestatsiyada Eng Ko'p Yiqitadigan 30 Ta 'Tuzoq' Qoidalar",
    points: ["30 ta eng mashhur grammatik tuzoq konspekti", "Shoshqaloqlik va chalg'ituvchi variantlar", "Imtihon komissiyasi metodlari"],
    trap: "Savoldagi 'NOT', 'EXCEPT', 'LEAST LIKELY' so'zlariga e'tibor bermaslik eng ko'p ball yo'qotilishiga olib keladi!",
    body: `
      <h3>1. Imtihondagi Eng Mashhur 5 Ta Tuzoq</h3>
      <p>1. Inversiyada 'Only when' dan keyingi 1-gapga emas, 2-gapga yordamchi fe'l qo'yilishi.<br>
      2. 'Subjunctive'da 3-shaxsda -s qo'shimchasi qo'yilmasligi (He demand that she attend).<br>
      3. 'Unless'dan keyin inkor fe'l kelmasligi.<br>
      4. 'Non-defining' relative clause'da 'that' ishlatilmasligi.<br>
      5. 'Despite'dan keyin 'of' ishlatilmasligi.</p>
    `
  },
  {
    day: 26,
    title: "26-KUN: 1-TO'LIQ MOCK TEST (Strategiya va Vaqt)",
    points: ["50 ta savolga 90 daqiqa vaqt taqsimoti", "40 ta mutaxassislik + 10 ta pedagogika savollari", "Birinchi bosqich sinovi"],
    trap: "Bitta qiyin savolga 3-4 daqiqa vaqt sarflab yopishib qolmang! Belgilab o'tib, oxirida qayting.",
    body: `
      <h3>1. Vaqtni To'g'ri Taqsimlash Formulasi</h3>
      <p>Attestatsiyada har bir savolga o'rtacha <strong>1.5 daqiqa</strong> to'g'ri keladi. Dastlabki 60 daqiqada barcha oson va o'rtacha savollarni to'liq ishlab, qolgan 30 daqiqani qiyin savollar va qayta tekshirishga ajrating.</p>
    `
  },
  {
    day: 27,
    title: "27-KUN: 1-Mock Test Tahlili va Zaif Nuqtalar Diagnostikasi",
    points: ["Xatolar tahlili va sabablari", "Grammatika vs Metodika balansi", "Shaxsiy xatolar daftari"],
    trap: "Noto'g'ri javobni shunchaki to'g'ri variantga almashtirib ketmang — nima uchun aynan shu variant xatoligini tushuning!",
    body: `
      <h3>1. Xatolarni Diagnostika Qilish Usuli</h3>
      <p>Xatolar 3 xil bo'ladi: 1) Bilimsizlikdan (qoida yoddan chiqqan), 2) Shoshqaloqlikdan (savol sharti to'liq o'qilmagan), 3) Chalg'ituvchi tuzoqqa ilinishdan. Qaysi biri ko'proqligini aniqlang!</p>
    `
  },
  {
    day: 28,
    title: "28-KUN: 2-TO'LIQ MOCK TEST (Vaqt Boshqaruvi)",
    points: ["Ikkinchi simulyatsiya imtihoni", "Stress ostida diqqatni jamlash", "Yuqori ball olish strategiyasi"],
    trap: "Oxirgi 5 ta savolga shoshib tavakkal belgilamaslik uchun vaqtni har 15 ta savolda nazorat qilib boring.",
    body: `
      <h3>1. Ikkinchi Mock Testning Asosiy Maqsadi</h3>
      <p>1-Mock testda aniqlangan zaifliklar takrorlanmaganligini tekshirish va imtihon zalidagi real psixologik holatga moslashish.</p>
    `
  },
  {
    day: 29,
    title: "29-KUN: 2-Mock Test Tahlili va So'nggi Yo'l-Yo'riqlar",
    points: ["Ikkinchi test xatolari tahlili", "Eng ko'p xato qilingan 5 mavzuni qayta mustahkamlash", "So'nggi tayyorgarlik"],
    trap: "Imtihondan oldingi kun yangi murakkab mavzularni o'rganishga urinmang — faqat o'tilganlarni mustahkamlang.",
    body: `
      <h3>1. So'nggi Bosqich Xulosalari</h3>
      <p>Eng ko'p ball yo'qotilgan 2-3 ta mavzu bo'yicha qisqa konspektlarni qayta ko'zdan kechiring.</p>
    `
  },
  {
    day: 30,
    title: "30-KUN: Imtihon Oldi Ekspress-Takrorlash & Psixologik Tayyorgarlik",
    points: ["Oltin formulalar ekspress-xulosasi", "Imtihon kuni psixologiyasi va o'ziga ishonch", "100 Ballik G'alaba Rejasi"],
    trap: "Imtihon oldi kechasi tonggacha dars qilib chiqish ❌ — Uyqusizlik imtihonda diqqatni 40% ga pasaytiradi!",
    body: `
      <h3>1. Imtihon Kuni Qoidalari</h3>
      <p>• Yaxshi uxlab dam oling.<br>
      • Imtihon boshlanishidan 45 daqiqa oldin xotirjam yetib boring.<br>
      • Barcha savollarni diqqat bilan oxirigacha o'qing va o'z bilimingizga ishoning!</p>
    `
  }
];

REMAINDER_MODULES.forEach(m => {
  DEEP_6_TO_30[m.day] = {
    keyPoints: m.points,
    trap: m.trap,
    html: `
      <div class="theory-card">
        <h2>🧐 ${m.title}</h2>
        ${m.body}
      </div>
      <div class="theory-card">
        <h2>🔥 ATTESTATSIYANING ENG SEVIMLI TUZOQLARI</h2>
        <div class="uzb-meaning" style="background: #fef2f2; border-color: #ef4444; color: #991b1b;">
          ⚠️ <strong>DIQQAT — TUZOQ:</strong> ${m.trap}
        </div>
      </div>
    `
  };
});

// Now read curriculum.js and update
const curriculumPath = path.join(__dirname, '..', 'js', 'curriculum.js');
let content = fs.readFileSync(curriculumPath, 'utf8');

for (const [dayStr, data] of Object.entries(DEEP_6_TO_30)) {
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
console.log('Successfully injected comprehensive masterclass lessons for Days 6 to 30!');

