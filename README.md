# Slugify TR 🇹🇷

Türkçe karakterleri tam destekleyen URL slug oluşturucu. "ç, ğ, ı, ö, ş, ü" karakterlerini doğru çevirir.

## Neden Bu Araç?

Popüler `slugify` kütüphaneleri Türkçe karakterlerle sorun yaşar:
- `ı` → `` (kaybolur) vs **`ı` → `i`** ✅
- `İ` → `i` (yanlış) vs **`İ` → `i`** ✅
- `ğ` → `` (kaybolur) vs **`ğ` → `g`** ✅

## Kurulum

```bash
npm install slugify-tr
```

## Kullanım

```javascript
const slugify = require('slugify-tr');

slugify('Türkçe İçerik Oluşturma Rehberi');
// => 'turkce-icerik-olusturma-rehberi'

slugify('Node.js İle API Geliştirme');
// => 'nodejs-ile-api-gelistirme'

slugify('Şükrü'nün Günlüğü');
// => 'sukrunun-gunlugu'

slugify('  Çok   boşluklu   başlık  ');
// => 'cok-bosluklu-baslik'
```

## Seçenekler

```javascript
slugify('Başlık', { separator: '_' });
// => 'baslik'

slugify('Başlık', { lower: false });
// => 'Baslik'

slugify('Başlık', { maxLength: 10 });
// => 'baslik'
```

## CLI

```bash
npx slugify-tr "Türkçe Başlık"
# turkce-baslik
```

## Karakter Tablosu

| Türkçe | Slug |
|--------|------|
| ç, Ç | c |
| ğ, Ğ | g |
| ı, I | i |
| İ, i | i |
| ö, Ö | o |
| ş, Ş | s |
| ü, Ü | u |

## Projede Kullanım Örnekleri

Blog ve içerik yönetim sistemlerinde URL oluşturma için ideal. [TurkCode.net](https://turkcode.net) altyapısında kullanılmaktadır.

## Lisans

MIT
