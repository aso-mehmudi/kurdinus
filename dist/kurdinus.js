window.Kurdinus=function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r),t.d(r,"changeCase",(function(){return h})),t.d(r,"normalizeArabicLetters",(function(){return A})),t.d(r,"normalizePunctuations",(function(){return E})),t.d(r,"getArabicLayoutUnicode",(function(){return j})),t.d(r,"transliterateArabicToLatin",(function(){return S})),t.d(r,"CaseType",(function(){return c})),t.d(r,"FontType",(function(){return s})),t.d(r,"NumerlaType",(function(){return u})),t.d(r,"PhonemeType",(function(){return i}));const o="aeêiîouûü",n="lɫrřmnfhḧjsşṣvṿxẍzƹcçbdḍgkpqtʔ",x="[^wy"+n+o+"]",g="ؠ-يٮ-ەۺ-ۿݐ-ݿ";var c=Object.freeze({UPPER:Symbol("Upper"),LOWER:Symbol("Lower"),WORD:Symbol("Word"),SENTENCE:Symbol("Sentence")}),s=Object.freeze({ALI_K:Symbol("AliK"),ALI_WEB:Symbol("AliWeb"),DYLAN:Symbol("Dylan")}),u=Object.freeze({LATIN:Symbol("Latin"),ARABIC:Symbol("Arabic"),PERSIAN:Symbol("Persian")}),i=Object.freeze({DIAGRAPH:Symbol("Digraph"),REDUCED:Symbol("Reduced")});class a{constructor(){if(this.constructor===a)throw new TypeError("Can not construct abstract class.");if(this.convert===a.prototype.convert)throw new TypeError("Please implement abstract method convert.")}convert(e){throw new TypeError("Do not call abstract method convert from child.")}}class $ extends a{constructor(e){super(),this.type=e}convert(e){switch(this.type){case c.UPPER:return e.toUpperCase();case c.WORD:return e.replace(/([a-zêîûçşéúıŕřĺɫƚḧẍḍṿ]+)/gim,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}));case c.SENTENCE:return e.replace(/[a-zêîûçşéúıŕřĺɫƚḧẍḍṿ].+?([\.?!:\n]|$)/gim,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}));case c.LOWER:default:return e.toLowerCase()}}}class l extends a{constructor(e){super(),this.conversions=e}convert(e){for(let{regex:r,to:t}of this.conversions)e=e.replace(new RegExp(r,"gim"),t);return e}}class f extends l{constructor(e){super([]),e===i.DIAGRAPH?this.conversions=[{regex:"ḧ",to:"hh"},{regex:"ẍ",to:"gh"},{regex:"ɫ",to:"ll"},{regex:"(^|[^aeêiîouûlɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ])ř",to:"$1r"},{regex:"ř",to:"rr"}]:e===i.REDUCED&&(this.conversions=[{regex:"ḧ",to:"h"},{regex:"ẍ",to:"x"},{regex:"ɫ",to:"l"},{regex:"ř",to:"r"}])}}const p={[s.ALI_K]:new class extends l{constructor(){super(),this.conversions=[{regex:"لاَ|لآ|لاً",to:"ڵا"},{regex:"لً|لَ|لأ",to:"ڵ"},{regex:"ة",to:"ە"},{regex:"ه([^ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆەهیێأإآثذصضطظكيىةڎۊؤ]|$)",to:"هـ$1"},{regex:"للهـ",to:"لله"},{regex:"ض",to:"چ"},{regex:"ث",to:"پ"},{regex:"ظ",to:"ڤ"},{regex:"ط",to:"گ"},{regex:"ىَ|يَ|یَ|آ",to:"ێ"},{regex:"رِ",to:"ڕ"},{regex:"ؤ|وَ",to:"ۆ"},{regex:"ي|ى",to:"ی"},{regex:"ء",to:"‌و"},{regex:"ِ",to:""},{regex:"ك",to:"ک"},{regex:"ذ",to:"ژ"}]}},[s.ALI_WEB]:new class extends l{constructor(){super(),this.conversions=[{regex:"لاَ|لآ|لاً",to:"ڵا"},{regex:"لَ|پ",to:"ڵ"},{regex:"ة",to:"ە"},{regex:"ه([^ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆەهیێأإآثذصضطظكيىةڎۊؤ]|$)",to:"هـ$1"},{regex:"رِ|أ",to:"ڕ"},{regex:"ؤ|وَ",to:"ۆ"},{regex:"يَ|یَ",to:"ێ"},{regex:"ص",to:"ێ"},{regex:"ي",to:"ی"},{regex:"ط",to:"ڭ"},{regex:"گ",to:"ط"},{regex:"ڭ",to:"گ"},{regex:"ض",to:"چ"},{regex:"ث",to:"پ"},{regex:"ظ",to:"ڤ"},{regex:"ْ|ُ",to:""},{regex:"ى",to:"*"},{regex:"ك",to:"ک"},{regex:"ذ",to:"ژ"}]}},[s.DYLAN]:new class extends l{constructor(){super(),this.conversions=[{regex:"لإ|لأ|لآ",to:"ڵا"},{regex:"ؤ|وَ",to:"ۆ"},{regex:"ة",to:"ە"},{regex:"ض",to:"ڤ"},{regex:"ص",to:"ڵ"},{regex:"ث",to:"ێ"},{regex:"ؤ",to:"ۆ"},{regex:"ي|ى",to:"ی"},{regex:"ك",to:"ک"},{regex:"ذ",to:"ڕ"}]}}};const d=new class extends l{constructor(){super(),this.conversions=[{regex:"ي|ى|ے",to:"ی"},{regex:"ك|ڪ",to:"ک"},{regex:"(”|\\(\\()",to:"«"},{regex:"(“|\\)\\))",to:"»"},{regex:"([^ ])  ([^ ])",to:"$1 $2"},{regex:"‌{2,}",to:"‌"},{regex:"ھ([^ـ"+g+"ً-ٟ])",to:"هـ$1"},{regex:"ھ",to:"ه"},{regex:"ه‌",to:"ە"},{regex:"ه‍",to:"هـ"},{regex:"([ءادرڕزژوۆە])‌",to:"$1"},{regex:"ه([^ـ"+g+"ً-ٟ])",to:"ە$1"},{regex:"‌و ",to:" و "},{regex:"(["+g+"])‌([^"+g+"])",to:"$1$2"},{regex:"ـ{2,}",to:"ـ"},{regex:"ـ([ئبپتجچحخسشعغفڤقکگلڵمنهیێءادرڕزژۆە])",to:"$1"},{regex:"([بپتجچحخسشعغفڤقکگلڵمنیێ])ـ",to:"$1"},{regex:"(^|[^هئ])ـ",to:"$1-"}]}},y=new class extends l{constructor(){super([{regex:"٠|۰",to:"0"},{regex:"١|۱",to:"1"},{regex:"٢|۲",to:"2"},{regex:"٣|۳",to:"3"},{regex:"٤|۴",to:"4"},{regex:"٥|۵",to:"5"},{regex:"٦|۶",to:"6"},{regex:"٧|۷",to:"7"},{regex:"٨|۸",to:"8"},{regex:"٩|۹",to:"9"},{regex:"‌و([^"+g+"])",to:" û$1"},{regex:"(^|[^"+g+"])و([^"+g+"])",to:"$1û$2"},{regex:"‌",to:" "},{regex:"ئ|ء",to:"ʔ"},{regex:"آ",to:"ʔa"},{regex:"،",to:","},{regex:"؛",to:";"},{regex:"«",to:"“"},{regex:"»",to:"”"},{regex:"ا",to:"a"},{regex:"ب",to:"b"},{regex:"پ",to:"p"},{regex:"ت|ط",to:"t"},{regex:"ج",to:"c"},{regex:"چ",to:"ç"},{regex:"ح",to:"ḧ"},{regex:"خ",to:"x"},{regex:"د",to:"d"},{regex:"ڎ",to:"ḍ"},{regex:"ر",to:"r"},{regex:"ڕ",to:"ř"},{regex:"ز|ض|ظ|ذ",to:"z"},{regex:"ژ",to:"j"},{regex:"س|ث",to:"s"},{regex:"ش",to:"ş"},{regex:"ص",to:"ṣ"},{regex:"ع",to:"ƹ"},{regex:"غ",to:"ẍ"},{regex:"ف",to:"f"},{regex:"ڤ",to:"v"},{regex:"ق",to:"q"},{regex:"ک|ك",to:"k"},{regex:"گ",to:"g"},{regex:"ل",to:"l"},{regex:"ڵ",to:"ɫ"},{regex:"م",to:"m"},{regex:"ن",to:"n"},{regex:"ۆ",to:"o"},{regex:"ۊ",to:"ü"},{regex:"ۉ",to:"ṿ"},{regex:"ھ|ه",to:"h"},{regex:"ە",to:"e"},{regex:"ێ",to:"ê"},{regex:"َ",to:"e"},{regex:"ِ",to:"i"},{regex:"ُ",to:"u"},{regex:"ـ",to:""},{regex:"؟",to:"?"}])}},b=new class extends l{constructor(){super([{regex:"ى|ي",to:"ی"},{regex:"و([aeêiîouûü])",to:"w$1"},{regex:"ی([aeêiîouûü])",to:"y$1"},{regex:"([aeêiîouûü])ی",to:"$1y"},{regex:"([aeêiîouûü])و",to:"$1w"},{regex:"(^|[^وی"+n+o+"wy])و",to:"$1w"},{regex:"(^|[^وی"+n+o+"wy])ی",to:"$1y"},{regex:"[^و]ییی",to:"îyî"},{regex:"ییی",to:"yîy"},{regex:"یوی",to:"îwî"},{regex:"([wy"+n+"])ووو",to:"$1ûw"},{regex:"یوو",to:"yû"},{regex:"ووی",to:"ûy"},{regex:"ویو",to:"wîw"},{regex:"([uûî])ووو",to:"$1wû"},{regex:"وی",to:"wî"},{regex:"یو",to:"îw"},{regex:"([wy"+n+"])یی",to:"$1îy"},{regex:"([wy"+n+"])وو($|[^uûî])",to:"$1û$2"},{regex:"و([uûî])",to:"w$1"},{regex:"ی([uûî])",to:"y$1"},{regex:"([uûî])ی",to:"$1y"},{regex:"([uûî])و",to:"$1w"},{regex:"و",to:"u"},{regex:"ی",to:"î"}])}},w=new class extends l{constructor(){super([{regex:"(^|"+x+")(["+n+"]) ",to:"$1$2i "},{regex:"(^|"+x+")(["+n+"wy])(["+n+"])",to:"$1$2i$3"},{regex:"([aeêiîouûü])([wylɫrřmnfhḧjsşṣvxẍzƹcç])([bdgkpqtʔ])([wylɫrřmnfhḧjsşṣvxẍzƹcç])",to:"$1$2$3i$4"},{regex:"([aeêiîouûü])([lɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ])([fhḧjsşṣvxẍzƹcçbdgkpqtʔ])([cçbdgkpqtʔ])",to:"$1$2i$3$4"},{regex:"([aeêiîouûü])([wylɫrř])([mnfhḧjsşṣvxẍzƹ])([cçbdgkpqtʔ])([^aeêiîouû]|$)",to:"$1$2i$3$4$5"},{regex:"([aeêiîouûü])([fhḧjsşṣvxẍzƹ])([lɫrřmn])([cçbdgkpqtʔ])([^aeêiîouû]|$)",to:"$1$2$3i$4$5"},{regex:"([aeêiîouûü])([jsşṣvxẍzƹcçbdgkpqtʔ])([wylɫrřmnfhḧjsşṣvxẍzƹcç])([^aeêiîouû]|$)",to:"$1$2i$3$4"},{regex:"([aeêiîouûü])([lɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ])([lɫrřmn])($|"+x+")",to:"$1$2i$3$4"},{regex:"(^|"+x+")ʔ",to:"$1"},{regex:"ƹ",to:"'"},{regex:"ʔ",to:"'"}])}},v=new class extends l{constructor(){super([{regex:"([،:؛؟!»)}\\]\\)])(["+g+"])",to:"$1 $2"},{regex:"(["+g+"]) ([\\.،:؛؟!»)}\\]\\)])",to:"$1$2"},{regex:"\\.(["+g+"]{2,})",to:". $1"},{regex:"(["+g+"])([(«{\\[])",to:"$1 $2"},{regex:"([(«{\\[]) (["+g+"])",to:"$1$2"},{regex:"(^|\\n)(\\d+)-(["+g+"])",to:"$1$2- $3"}])}},m={[i.DIAGRAPH]:new f(i.DIAGRAPH),[i.REDUCED]:new f(i.REDUCED)};function h(e,r){return new $(r).convert(e)}function A(e){return d.convert(e)}function E(e){return v.convert(e)}function j(e,r){return p[r].convert(e)}function S(e,r){return e=d.convert(e),e=y.convert(e),e=b.convert(e),e=w.convert(e),e=m[r].convert(e)}}]);