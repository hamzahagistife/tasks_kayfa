# تاسك المشروع 10: JavaScript Task 2 — Event Entry & Ticket Price

التاسك التاني في سلسلة الجافاسكربت. تمرين على: التحويل بين الأنواع، الـ Booleans،
المعاملات المنطقية (`&&`)، `if / else if / else`، الـ Truthy/Falsy، و Template Literals.

## الهدف

برنامج صغير بيقرر إذا الشخص بيقدر يدخل الحدث (event)، وبيحسب سعر التذكرة النهائي.
يُستخدم فقط ما تم تعلّمه حتى الآن (بدون دوال، بدون مصفوفات، بدون objects).

الملفات المطلوبة:

- `index.html`
- `app.js` (مربوط بـ `defer`)

الناتج كله في **Console** المتصفح.

## البيانات الابتدائية (Starter Data)

```js
const ageInput = "20";
const hasTicket = true;
const isMember = false;
const ticketType = "vip";
const availableSeats = 5;
```

## 1) تحويل العمر

- [ ] تحويل `ageInput` من نص إلى رقم
- [ ] تخزين القيمة المحوّلة في متغير جديد اسمه `age`
- [ ] إنشاء Boolean اسمه `isAdult` بيكون `true` لما يكون العمر **18 أو أكثر**
- [ ] طباعة `age` و `typeof age` و `isAdult` في الـ Console

## 2) قرار الدخول

إنشاء Boolean اسمه `canEnter`. المستخدم بيقدر يدخل **فقط** إذا:

- كان بالغ (adult)
- **و** معه تذكرة
- **و** في على الأقل مقعد واحد متاح

ثم استخدام `if / else` لطباعة:

```
Access granted
```

أو:

```
Access denied
```

## 3) سعر التذكرة

إذا كان بيقدر يدخل، بنختار السعر الأساسي حسب القواعد:

| `ticketType` | السعر |
| --- | --- |
| `"regular"` | 200 |
| `"vip"` | 500 |
| `"student"` | 150 |
| أي قيمة ثانية | طباعة `Unknown ticket type` |

النتيجة تُخزَّن في متغير اسمه `ticketPrice`.

## 4) خصم العضوية

- إذا كان المستخدم عضو (`isMember`): نطرح **50** من سعر التذكرة
- السعر النهائي **ما بيصير أقل من 0** أبداً
- النتيجة النهائية تُخزَّن في متغير اسمه `finalPrice`

## 5) طباعة الملخّص

باستخدام Template Literal، ملخّص واضح يحتوي:

```
Age: ...
Adult: ...
Has ticket: ...
Available seats: ...
Can enter: ...
Ticket type: ...
Member: ...
Final price: ...
```

⚠️ ممنوع نسخ النتائج المحسوبة مباشرة في الإخراج — لازم نستخدم المتغيرات.

## النتيجة المتوقعة بهذه البيانات

```
age = 20 (number) , isAdult = true
canEnter = true  -> Access granted
ticketPrice = 500 (vip)
isMember = false -> ما في خصم
finalPrice = 500
```

---

## Debugging Challenge

البرنامج التالي فيه مشكلة منطقية:

```js
const acceptedTerms = "false";

if (acceptedTerms) {
  console.log("Terms accepted");
} else {
  console.log("Terms not accepted");
}
```

**سبب المشكلة:** القيمة `"false"` هي **نص** (string) وليست `false` المنطقية.
أي نص غير فارغ في الجافاسكربت يُعتبر **truthy**، فبالتالي شرط الـ `if` دائماً بيتحقق
وبتطبع `Terms accepted` رغم إن القيمة المكتوبة "false".

**الحل:** نخزّن Boolean حقيقي بدون علامات تنصيص → `const acceptedTerms = false;`

## معيار الإنجاز

- [ ] `age` رقم و `typeof age` مطبوع ويطلع `number`
- [ ] `isAdult` و `canEnter` قيم Boolean محسوبة لا مكتوبة يدوياً
- [ ] `if / else` بتطبع Access granted / Access denied
- [ ] `ticketPrice` حسب نوع التذكرة + حالة النوع غير المعروف
- [ ] `finalPrice` مع خصم العضوية وما بينزل تحت الصفر
- [ ] الملخّص بـ Template Literal وكله من المتغيرات
- [ ] الـ Debugging Challenge محلول ومشروح

## طريقة التشغيل

افتح `index.html` بالمتصفح ثم `F12` → تبويب **Console**.
