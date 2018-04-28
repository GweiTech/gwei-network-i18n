# gwei-network-i18n

### Current progress:

Language | Code | Done | File
:---|:---|:---|:---
English | en_US | ✔ | locale/en.js
简体中文 | zh_CN | ✔ | locale/zh.js
한국어 | ko_KR | ✔ | locale/ko.js

### How to translate:

The language configuration file is as follows, taking "en.js" as an example.  

```
// file: en.js

const en_US = {
    ...
    'id': 'content',
    ...
}

export default en_US;
```

"en_US" is the language code and "content" is the content to be translated.  
Do not modify "id", and then translate the "content" corresponding to the "id" value.  
Do not translate the contents of "{}", which is a variable.

### GweiNetwork: 
[https://gwei.network](https://gwei.network)
