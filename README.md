### Editor.js 사용하기
  
#### 설치
```bash
npm i @editorjs/editorjs --save
```

###  Editor.js 블록 도구
  
#### 설치
```bash
npm i --save-dev @editorjs/embed
```
  
#### 사용하기
```javascript
import Embed from '@editorjs/embed'

tools: {
    ...
    embed: Embed,
},
```