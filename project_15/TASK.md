# تاسك المشروع 15: Task 8 — Destructuring, Spread & Rest

32 نقطة + بونص على: **Destructuring** (كائنات ومصفوفات ومتداخلة وبارامترات)،
**Spread** و **Rest**، والفرق بين النسخ والمرجع (**immutability**).

الملفات:

- `index.html`
- `app.js` (مربوط بـ `defer`) — الناتج كله في **Console**

البيانات (`team`, `players`, `matches`, `bench`, `settings`) منسوخة حرفياً من التاسك.

## النقاط

| # | المطلوب | الناتج الفعلي |
| --- | --- | --- |
| 1 | `name` و `founded` من `team` | `Egypt 1921` |
| 2 | اسم المدرب كـ `coachName` | `Hossam Hassan` |
| 3 | `city` و `capacity` من `team.stadium` | `Cairo 75000` |
| 4 | أول ولون ثاني من `colors` | `red white` |
| 5 | اللون الثالث فقط | `black` |
| 6 | `nickname` بقيمة افتراضية | `The Pharaohs` |
| 7 | أول لاعب ثم اسمه وأهدافه | `Salah 20` |
| 8 | أول لاعب والباقي في `others` | `Salah` + 5 لاعبين |
| 9 | `opponent` و رقمي النتيجة من أول مباراة | `Ghana 2 0` |
| 10 | حلقة على المباريات | `Egypt 2 - 0 Ghana` … |
| 11 | حلقة على اللاعبين | `#10 Salah — Forward` … |
| 12 | `map` لمصفوفة أسماء | 6 أسماء |
| 13 | `printPlayer({ name, age, position })` | سطر لكل لاعب |
| 14 | `describe({ name, position = "Unknown" })` | `New Player plays as Unknown` |
| 15 | `allPlayers` = أسماء players + bench | 9 أسماء |
| 16 | `newColors` = الألوان + `gold` | 4 ألوان |
| 17 | نسخة من `settings` بـ `theme: "dark"` | `{theme:'dark', …}` |
| 18 | نسخة من `team` بـ `founded: 1920` | `Egypt 1920` |
| 19 | الأصليان ما تغيّروا | `theme:'light'` و `1921` |
| 20 | `star` = أول لاعب + `captain: true` | كائن فيه `captain: true` |
| 21 | نسخة من `players[1]` بهدف زيادة | `15 -> 16` |
| 22 | حذف `notifications` والباقي في `basic` | `{theme, language}` |
| 23 | حذف `id` والباقي في `info` | كائن بدون `id` |
| 24 | `sum(...numbers)` لمجموع الأهداف | **55** |
| 25 | `maxGoals(...numbers)` | **20** |
| 26 | `Math.max` مع spread لأكبر عمر | **37** |
| 27 | `addPlayers(team, ...names)` | 11 اسم |
| 28 | `const copy = team` ثم تغيير الاسم | `team.name` صار **Ghana** |
| 29 | `{ ...team }` ثم تغيير `stadium.city` | `team.stadium.city` صار **Giza** |
| 30 | الحل بـ `structuredClone` | النسخة `Alexandria` والأصل ظلّ `Giza` |
| 31 | `players[0] === players[0]` و `{} === {}` | `true false` |
| 32 | دالة بترجع لاعب بعمر +1 | `35` والأصل ظلّ `34` |

### Bonus

- أهداف Salah في المباريات → **3**
- `{ wins, draws, losses }` → **{ wins: 2, draws: 1, losses: 0 }**

## ملاحظات مهمة

- **النقطتان 28 و 29 بتغيّرا `team` فعلاً وهاد مقصود من التاسك**:
  - 28: `copy = team` ما بتنسخ، بتعطي **نفس المرجع** → تعديل `copy.name` بيعدّل `team.name`.
  - 29: `{ ...team }` نسخة **سطحية** (shallow)، فالكائن المتداخل `stadium` لسا مشترك.
  - 30: `structuredClone` بتعمل نسخة **عميقة** فالأصل بيضل محمي.
- **النقطة 27**: التاسك ما بيحدد وين الأسماء جوّا `team`، فالدالة بتاخد مصفوفة أسماء
  (استُخدمت `allPlayers` من النقطة 15) وبترجع كل الأسماء مع الجداد بمصفوفة وحدة.
- **النقطة 31**: التوقّع مكتوب بتعليق **قبل** التشغيل — المقارنة بالكائنات بتقارن المرجع
  مش المحتوى، فـ `{} === {}` بترجع `false`.

## طريقة التشغيل

افتح `index.html` بالمتصفح ثم `F12` → **Console**
(أو `node app.js` من التيرمنال).
