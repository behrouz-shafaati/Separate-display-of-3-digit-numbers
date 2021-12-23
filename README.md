# Separate-display-of-3-digit-numbers
## نمایش جداگانه 3 رقمی اعداد با استفاده از جاوا اسکریپت

وابستگی ها 
- jQuery

برای اینکه بعد از وارد کرد یک عدد در اینپوت حالت سه رقمی شدن اعداد حفظ شود باید کد را به صورت زیر استفاده کنید:

```
//3 ragham 3 ragham kardan
jQuery(".sheet-content").on('input',  ".number" , function() {
    var number = jQuery( this ).val().replace(/\,/g, '');

    number = number.split('').reverse().join('')
    .replace(/(\d{3})/g, '$1,').replace(/\,$/, '')
    .split('').reverse().join('');
    jQuery( this ).val( number ) ;
});
```
این نکته را نیز به خاطر داشته باشید که هنگام ارسال مقادیر اینپوت ها چه به صورت POST یا GET یا AJAX باید جداکننده را حذف و سپس عملیات های مورد نظرتان را روی مقادیر انجام دهید. در غیر این صورت این مقادیر به عنوان رشته ی string  شناخته می شوند نه integer.

برای حذف کردن جدا کننده با استفاده از جاوا اسکریپت مشابه زیر عمل کنید:
```
var number = "3,451,630"; //type: string
number = parseInt( number.replace(/\,/g, '') ); //type: integer
```
در صورت نیاز می توانید عملیات فوق را در سمت سرور با زبان برنامه نویسی سرورتان نیز انجام دهید.
