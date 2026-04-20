# بوابة شكاوى القضاة

تطبيق ويب كامل باللغة العربية لإدارة شكاوى القضاة الموجهة إلى السيد وزير العدل، مبني بـ JavaScript فقط باستخدام Next.js وReact وTailwind CSS وPrisma مع SQLite للتطوير المحلي.

## التشغيل المحلي

1. انسخ ملف البيئة عند الحاجة:

```bash
cp .env.example .env
```

2. ثبت الحزم:

```bash
npm install
```

3. أنشئ قاعدة البيانات وشغل بيانات التجربة:

```bash
npm run prisma:migrate
npm run prisma:seed
```

4. شغل التطبيق:

```bash
npm run dev
```

5. افتح:

```text
http://localhost:3000
```

## حسابات التجربة

| الدور | البريد الإلكتروني | كلمة المرور |
| --- | --- | --- |
| مقدم الشكوى | judge@example.gov.eg | JudgePass2026! |
| رئيس المكتب الفني | head@example.gov.eg | HeadPass2026! |
| فاحص الشكوى | examiner@example.gov.eg | ExaminerPass2026! |
| مدير النظام | admin@example.gov.eg | AdminPass2026! |

## متغيرات البيئة

```env
DATABASE_URL="file:./dev.db"
APP_URL="http://localhost:3000"
MAX_UPLOAD_BYTES="5242880"
```

## الاختبار

بعد تشغيل الخادم المحلي:

```bash
npm run test:flows
```

يغطي الاختبار تسجيل الدخول، تقديم الشكوى، رفض الملفات غير الصالحة، منع التكرار، التعيين، منع الوصول غير المصرح به، حفظ قرار الفحص، ظهور القرار لمقدم الشكوى، البحث، وسجل التدقيق.
