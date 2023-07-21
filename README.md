# PT GITS Indonesia Internship - Problem Solving Test

Berikut adalah penjelasan dari solusi permasalahan nomor 3, yaitu permasalahan **Balanced Bracket**.

## Kompleksitas

Kompleksitas dari solusi yang saya buat adalah **_O(n)_**. Hal ini dikarenakan solusi yang saya buat bergantung jumlah karakter dari _input_ yang dimasukkan.

## Penjelasan

Pada awal fungsi saya mendeklarasikan beberapa variabel untuk menentukan apa saja karakter yang termasuk ke dalam _opening bracket_ atau _closing bracket_. Saya juga mendeklarasikan tipe-tipe bracket yang ada. Saya mendeklarasikan variabel seperti berikut:

```javascript
const openingBrackets = '{[(';
const closingBrackets = ')]}';

const curlyBrackets = '{}';
const squareBrackets = '[]';
const parentheses = '()';
```

Kemudian, saya mendeklarasikan 1 variabel untuk menentukan apakah _bracket_ yang menjadi _input_ seimbang atau tidak.

```javascript
let isBalanced = true;
```

Setelah itu, saya hapus semua spasi yang ada dalam _input_ jika ada, agar yang tersisa hanya karakter-karakter bracket.

```javascript
const trimmedStr = str.replace(/ /g, '');
```

Untuk berjaga-jaga seandainya panjang dari _bracket_ yang menjadi _input_ adalah ganjil, maka saya membuat kondisi agar jika panjangnya ganjil, maka langsung kembalikan **NO** oleh karena jika panjangnnya ganjil, maka _bracket_ tidak seimbang.

```javascript
if (trimmedStr.length % 2 === 1) return 'NO';
```

Selanjutnya saya lakukan _looping_ untuk melakukan iterasi pada setiap karakter yang ada pada variabel `trimmedStr`.

```javascript
for (let i = 0; i < trimmedStr.length - 1; i++) {
  // solution here....
}
```

Hal pertama yang saya lakukan dalam _looping_ tersebut adalah mendeklarasikan 3 variabel untuk menentukan apakah karakter saat ini adalah _opening bracket_ atau bukan, apakah tipe dari bracket saat ini, dan apakah tipe dari bracket selanjutnya.

```javascript
let isCurrentBracketOpeningBracket = false;
let currentBracketType = '';
let nextBracketType = '';
```

Selanjutnya, saya mengecek apakah karakter saat ini adalah _opening bracket_ atau bukan. Jika iya, maka ubah nilai variabel `isCurrentBracketOpeningBracket` menjadi `true`.

```javascript
if (openingBrackets.includes(trimmedStr[i])) {
  isCurrentBracketOpeningBracket = true;
}
```

Kemudian, saya mengecek juga, apakah karakter berikutnya adalah _opening bracket_ atau bukan. Jika iya, maka _looping_ langsung di `continue` oleh karena _bracket string_ masih seimbang, walaupun _bracket_ selanjutnya berbeda tipe dengan _bracket_ saat ini.

```javascript
    if (openingBrackets.includes(trimmedStr[i + 1])) {
      continue;
    }
```

Setelah itu, jika ternyata _bracket_ selanjutnya bukan _opening bracket_, maka saya melakukan pengecekan untuk mengetahui tipe dari _bracket_ saat ini dan _bracket_ selanjutnya.

```javascript
// Check the bracket type of the current bracket
if (curlyBrackets.includes(trimmedStr[i])) {
  currentBracketType = 'curly';
}

if (squareBrackets.includes(trimmedStr[i])) {
  currentBracketType = 'square';
}

if (parentheses.includes(trimmedStr[i])) {
  currentBracketType = 'parentheses';
}

// Check the bracket type of the next bracket
if (curlyBrackets.includes(trimmedStr[i + 1])) {
  nextBracketType = 'curly';
}

if (squareBrackets.includes(trimmedStr[i + 1])) {
  nextBracketType = 'square';
}

if (parentheses.includes(trimmedStr[i + 1])) {
  nextBracketType = 'parentheses';
}
```

Sesudah mengetahui tipe dari _bracket_ saat ini dan _bracket_ selanjutnya, maka bandingkan keduanya. Jika ternyata keduanya memiliki tipe yang sama, maka _looping_ langsung di `continue` oleh karena _bracket string_ masih seimbang.

```javascript
    if (currentBracketType === nextBracketType) {
      continue;
    }
```

Jika ternyata tipe dari _bracket_ saat ini dan _bracket_ selanjutnya berbeda, maka cek, apakah _bracket_ saat ini adalah _opening bracket_ dan apakah _bracket_ selanjutnya adalah _closing bracket_. Jika ternyata _bracket_ saat ini adalah _opening bracket_ dan _bracket_ selanjutnya adalah _closing bracket_, maka _bracket string_ tidak seimbang dan ubah nilai variabel `isBalanced` menjadi `false` serta `break` _looping_ untuk menghentikan proses iterasi oleh karena sudah diketahui bahwa _bracket string_ tidak seimbang.

```javascript
    if (
      isCurrentBracketOpeningBracket &&
      closingBrackets.includes(trimmedStr[i + 1])
    ) {
      isBalanced = false;
      break;
    }
```

Setelah melakukan proses _looping_, maka kembalikan nilai **YES** atau **NO** berdasarkan nilai dari variabel `isBalanced`. Saya menggunakan _ternary operation_ untuk hal ini.

```javascript
return isBalanced ? 'YES' : 'NO';
```

Untuk melihat hasilnya, dapat dilakukan dengan cara seperti berikut:

```javascript
const test1 = balancedBracketSolution('{ [ ( ) ] }');
const test2 = balancedBracketSolution('{ [ ( ] ) }');
const test3 = balancedBracketSolution('{ ( ( [ ] ) [ ] ) [ ] }');

console.log(test1);
console.log(test2);
console.log(test3);
```

_Output_:
![Output dari solusi Balanced Bracket](./screenshot-output/third-problem-solution-output.png 'Output dari solusi Balanced Bracket')
