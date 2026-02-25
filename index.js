/**
 * Slugify TR - Türkçe karakterleri destekleyen URL slug oluşturucu
 * @author turkcoode
 */

const TR_MAP = {
  'ç': 'c', 'Ç': 'c',
  'ğ': 'g', 'Ğ': 'g',
  'ı': 'i', 'I': 'i',
  'İ': 'i', 'i': 'i',
  'ö': 'o', 'Ö': 'o',
  'ş': 's', 'Ş': 's',
  'ü': 'u', 'Ü': 'u',
  'â': 'a', 'Â': 'a',
  'î': 'i', 'Î': 'i',
  'û': 'u', 'Û': 'u'
};

function slugify(text, options = {}) {
  const {
    separator = '-',
    lower = true,
    maxLength = 0,
    strict = true
  } = options;

  if (!text || typeof text !== 'string') return '';

  let slug = text;

  // Türkçe karakter dönüşümü
  slug = slug.split('').map(ch => TR_MAP[ch] || ch).join('');

  // Lowercase
  if (lower) slug = slug.toLowerCase();

  // Alfanumerik olmayan karakterleri separator ile değiştir
  if (strict) {
    slug = slug.replace(/[^a-zA-Z0-9\s-]/g, '');
  } else {
    slug = slug.replace(/[^a-zA-Z0-9\s._-]/g, '');
  }

  // Birden fazla boşluk/tire → tek separator
  slug = slug.trim().replace(/[\s-]+/g, separator);

  // Baştaki ve sondaki separator'ü kaldır
  slug = slug.replace(new RegExp('^' + escapeRegex(separator) + '+|' + escapeRegex(separator) + '+$', 'g'), '');

  // Max uzunluk
  if (maxLength > 0 && slug.length > maxLength) {
    slug = slug.substring(0, maxLength);
    // Kesilmiş separator'ü temizle
    slug = slug.replace(new RegExp(escapeRegex(separator) + '+$'), '');
  }

  return slug;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// CLI desteği
if (require.main === module) {
  const input = process.argv.slice(2).join(' ');
  if (input) {
    console.log(slugify(input));
  } else {
    console.log('Kullanim: slugify-tr "Turkce Baslik"');
  }
}

module.exports = slugify;
module.exports.slugify = slugify;
