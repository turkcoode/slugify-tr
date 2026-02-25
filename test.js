const slugify = require('./index');

const tests = [
  ['Türkçe İçerik Oluşturma', 'turkce-icerik-olusturma'],
  ['Node.js İle API Geliştirme', 'nodejs-ile-api-gelistirme'],
  ['Şükrü\'nün Günlüğü', 'sukrunun-gunlugu'],
  ['  Çok   boşluklu   başlık  ', 'cok-bosluklu-baslik'],
  ['BÜYÜK HARFLER', 'buyuk-harfler'],
  ['123 Sayısal Başlık', '123-sayisal-baslik'],
  ['', ''],
];

let passed = 0;
tests.forEach(([input, expected]) => {
  const result = slugify(input);
  const ok = result === expected;
  console.log(ok ? '✅' : '❌', JSON.stringify(input), '=>', result, ok ? '' : '(beklenen: ' + expected + ')');
  if (ok) passed++;
});

console.log('\n' + passed + '/' + tests.length + ' test basarili');
