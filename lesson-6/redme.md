### 2. 02. 2024 
### JSON -> javascript object nototion  - API , config file uchun ishlatiladi

### API - Api progrsamming inteerface -> Frontend va Becend orasidagi yo'l .

### JSON Methods

1. - **json.strinfy()** -> kiritgan o'zgaruvchimiz array , object , number , boolin  harqandek tipda bo'lishidan qatti nazar bizga **stringa** o'girib beradi.

2. - **json.parse()** ->  **stringdan** avvalgi holatiga qaytaradi , o'zgaruvchimiz array , object , number yoki boshqa tipta bo'lgan bo'lsa avalgi haoliga qaytaradi .

### BROWSER STORAGE

1.  **Locolstoragr**
2.  **Sessiontoragr**
3.  **Cookies**

-  **Locolstoragr** -> O'chami 10 MB , yashash davri cheksiz hich qachon o'chmaydi toki o'zimiz o'chirmagunimzgacha .

-  **Sessiontoragr** -> O'chami 5 MB , yashash davri tab bosib ili (x) bosib sayitdan chiqip ketgungacha ishlaydi ,saqlanadi .

- **Cookies** -> O'lchami 4 KB , yashash davri , saqlash mudati o'zimiz kiritgan vaqitgacha saqlanadi (1 hafta , 1 oy , 1 yil , 100 yil , 100000 yil ,........) .

### METHODS

-  **.setItim(q)**
-  **.getItim(q)**
-  **.removeItim(q)**
-  **.clear()**

1. - **LocalStrage.setItim(q)** ->Malumotni Saqlash yoki Q'shish ->  bu metod o'ziga 2 ta qiymat oladi , 1- qiymat sifatida biz berga nom ihtiyori , 2- qiymat saqlamoqchi yoki qoshmoqchi bolgan o'zgaruvchimiz kiritiladi u (number , array , object , boolin ) tibida bo'lsa sozsiz stringga o'girib olishimiz shart **json.strinfy()** yordamida .

2. - **LocalStrage.getItim(q)** -> Bu meto'd saqlangan malumotni olishlik uchun u oziga qiymat sifatida kiritishda bergan nomimiz oladi va shu nom ostidagi malumotni chiqarib beradi.

3. - **LocalStrage.removeItim(q)** -> Bu metod hotiradan saqlangan maklumotni o'chitish uchun ishlatiladi , o'ziga qiymat sifatida kiritishda bergan nomimiz oladi va shu nom ostidagi malumotni o'chiradi .

4. - **LocalStrage.clear()**  -> Bu ham o'chioradi va qiymat olmaydi sabbab hammasini o'chirib butunlay tozalab yuboradi .

z