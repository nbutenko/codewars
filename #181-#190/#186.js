const vowel2index = str => str.split('').map((el, index) => 'aeiou'.includes(el.toLowerCase()) ? index+1 : el).join('');
