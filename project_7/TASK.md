# تاسك المشروع 7: Personal Portfolio (HTML & CSS)

مصدر التاسك: مقطع فيديو للمرجع `Portfolio-HTML-CSS-Student-Task-v3`.

اللقطات المرجعية موجودة في مجلد `design/`. ابنِ الصفحة أقرب ما يمكن للتصميم.

## الهدف

بناء موقع بورتفوليو شخصي **صفحة واحدة** باستخدام **HTML و CSS فقط** (بدون JavaScript وبدون سيرفر).

الملفات المطلوبة:

- `index.html`
- `style.css`
- مجلد صور اختياري (`images/`) لصورة البروفايل والأيقونات

## التقنيات والقيود

- HTML5 سيمانتك فقط
- CSS فقط (Flexbox و CSS Grid)
- خط **Poppins** من Google Fonts
- بدون JavaScript
- الفورم للعرض فقط (لا إرسال بيانات)
- التصميم متجاوب: ديسكتوب + موبايل عند `max-width: 768px`

## هيكل الصفحة (من الـ DevTools)

```html
<header> ... </header>
<main>
  <section id="home" class="hero"> ... </section>
  <section id="about" class="section"> ... </section>
  <section id="skills" class="section skills-section"> ... </section>
  <section id="projects" class="section projects-section"> ... </section>
  <section id="education" class="section education-section"> ... </section>
  <section id="contact" class="section contact-section"> ... </section>
</main>
<footer> ... </footer>
<a href="#home" class="scroll-top" aria-label="Back to top">↑</a>
```

روابط الناف بار تستخدم نفس الـ IDs: `#home` `#about` `#skills` `#projects` `#education` `#contact`.

## دليل الألوان والستايل

- الخلفية: `#ffffff`
- لون النص: `#1e293b`
- الهيدر/الفوتر: كحلي غامق / أسود
- اللون الأساسي (أزرار، عناوين جزئية، أيقونات، هوفر): أزرق فاتح قوي
- الخط: `"Poppins", sans-serif`
- `line-height: 1.7`
- عرض المحتوى تقريباً `1120px` في المنتصف
- Padding للأقسام تقريباً `95px` عمودي
- كروت بيضاء بزوايا دائرية وظل خفيف
- Reset عام: `* { margin: 0; padding: 0; box-sizing: border-box; }`

عناوين الأقسام: كلمة أولى غامقة + كلمة ثانية باللون الأزرق (مثال: About **Me**, My **Skills**, Featured **Projects**, My **Education**).

فوق كل عنوان قسم يوجد label صغير أزرق Uppercase.

## الأقسام بالتفصيل

### 1) Header (ثابت أعلى الصفحة)

- يسار: شعار نصي `Your Name.` (النقطة بالأزرق إن أمكن)
- يمين روابط: Home, About, Skills, Projects, Education, Contact
- الرابط النشط/الهوفر تحته خط أزرق
- خلفية كحلية غامقة ونص أبيض

### 2) Hero — `#home`

عمودين على الديسكتوب:

**يسار**

- `Hello, I'm` (أزرق صغير)
- `Your Name` (عنوان كبير أسود)
- `Your Job Title / Study Field` (أزرق)
- فقرة تعريف قصيرة
- زر أساسي: **Contact Me →** (يملأ بالأزرق)
- زر ثانوي: **Download Resume** (حدود زرقاء + أيقونة تحميل)
- 3 أيقونات دائرية: GitHub, LinkedIn, Email

**يمين**

- صورة بروفايل دائرية كبيرة مع توهج أزرق خفيف حولها

زر عائم أسفل اليمين: رجوع للأعلى (دائرة زرقاء + سهم).

### 3) About — `#about`

- Label: `GET TO KNOW ME`
- عنوان: About **Me**
- عمودان:
  - كرت: أيقونة `</>` + عنوان `Your Interest` + وصف قصير
  - فقرتان عن الخلفية الدراسية + جملة: أن المشروع Front-end practice بـ HTML و CSS فقط
  - زر: **See My Skills** يروح لـ `#skills`

### 4) Skills — `#skills`

- Label: `WHAT I KNOW`
- عنوان: My **Skills**
- شبكة 3 أعمدة × صفين (6 كروت):
  1. HTML5
  2. CSS3
  3. Responsive Design
  4. Flexbox
  5. CSS Grid
  6. HTML Forms

كل كرت: أيقونة زرقاء في المنتصف + اسم المهارة.

### 5) Projects — `#projects`

- Label: `MY PRACTICE WORK`
- عنوان: Featured **Projects**
- جملة: `Replace these examples with your own HTML and CSS projects.`
- شبكة 2×2 (4 كروت):

| المشروع | الوسوم |
| --- | --- |
| Project One | HTML, CSS, Responsive |
| Project Two | HTML, CSS, Flexbox |
| Project Three | HTML, CSS, Grid |
| Project Four | HTML, CSS, Design |

كل كرت: أيقونة دائرية + عنوان + وصف قصير + وسوم زرقاء صغيرة.

### 6) Education — `#education`

- Label: `MY ACADEMIC JOURNEY`
- عنوان: My **Education**
- كرتان جنباً إلى جنب:
  - أيقونة قبعة تخرج + `YOUR EDUCATION LEVEL` + `Your Degree / Program`
  - أيقونة مبنى + `PREVIOUS EDUCATION` + `Your Previous Qualification`

### 7) Contact — `#contact`

- جملة فوق القسم: `A simple HTML form styled with CSS for front-end practice`
- عمودان:
  - يسار: عنوان `Let's Connect` + إيميل `your.email@example.com` + موقع `Your City, Your Country`
  - يمين: كرت فورم فيه Name, Email, Message + زر **Submit**
- ملاحظة تحت الزر: الفورم للعرض فقط، لا يوجد سيرفر

### 8) Footer

- شعار `Your Name.`
- `Student portfolio made with HTML and CSS only.`
- أيقونات GitHub و LinkedIn
- `© 20XX Your Name. All rights reserved.`
- خلفية كحلية غامقة مثل الهيدر

## الموبايل (`max-width: 768px`)

- الهيدر يبقى غامق، والروابط تظهر تحت الاسم (صف أفقي يلتف أو عمود)
- أقسام Hero / About / Contact تتحول لعمود واحد
- كروت المهارات والمشاريع والتعليم تصبح عمود واحد
- لا سكرول أفقي
- زر الرجوع للأعلى يبقى ظاهر

راجع `design/08-mobile-devtools.jpg`.

## معيار الإنجاز

- [ ] الصفحة تطابق التصميم في مجلد `design/`
- [ ] كل روابط الناف بار تنقل للقسم الصحيح
- [ ] الأزرار والروابط الاجتماعية تعمل (حتى لو `#` أو `mailto:`)
- [ ] الفورم موجود ومُنسّق لكن بدون باكند
- [ ] الموقع متجاوب على شاشة عريضة وعلى عرض 425px تقريباً
- [ ] HTML سيمانتك وCSS منظم
- [ ] بدون JavaScript

## ملاحظات

يمكنك استبدال النصوص النائبة (الاسم، الوظيفة، المشاريع، التعليم، الإيميل) بمعلوماتك الحقيقية، مع الإبقاء على نفس التخطيط والستايل.
