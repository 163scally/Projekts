Projekts: Fairy Forest - Ekskursiju rezervācijas sistēma

Projekta apraksts
Šī ir tīmekļa lietotne, kas ļauj lietotājiem rezervēt ekskursijas "Maģiskajā mežā". Vietne apvieno modernu vizuālo dizainu ar paralakses efektu un funkcionālu aizmugursistēmu (backend) datu apstrādei.

Izmantotās tehnoloģijas
Frontend: HTML5, CSS3 (Glassmorphism stils), JavaScript (GSAP animāciju bibliotēka).
Backend: Node.js, Express ietvars.
Datu bāze: Servera mainīgais (masīvs) pagaidu datu uzglabāšanai (atbilst MVP prasībām).

Palaišanas instrukcija
1. Pārliecinieties, ka datorā ir uzinstalēts Node.js.
2. Atveriet projekta mapi terminālī.
3. Instalējiet nepieciešamos moduļus: 
   ```bash
   npm install express body-parser
   node server.js
   5. Pārlūkprogrammā atveriet adresi: `http://localhost:3000`

Lietošanas apraksts
1. Lietotājam: Galvenajā lapā aizpildiet rezervācijas formu (vārds un datums) un nospiediet "Rezervēt".
2. Administratoram (Gidam): Lai apskatītu visas saņemtās rezervācijas, dodieties uz sadaļu `/admin` (piemēram, `http://localhost:3000/admin`).
1. Testēšanas scenārijs: Veiksmīga datu iesniegšana
Lietotājs ievada korektu vārdu "Janis" un izvēlas nākotnes datumu.
Sistēma parāda apstiprinājuma ziņojumu "Tu esi reģistrēts!", un dati parādās `/admin` sarakstā.


2. Testēšanas scenārijs: Datu validācija (tukši lauki)
Lietotājs mēģina nosūtīt formu, neaizpildot vārda lauku.
Serveris atgriež kļūdas ziņojumu "Aizpildiet visus laukus!", un datu bāzē nekas netiek pievienots.
