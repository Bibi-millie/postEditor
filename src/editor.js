import EditorJS from '@editorjs/editorjs'
import Embed from '@editorjs/embed'

let editor = null

function init() {
    initEditor()
    initEvent()
}

function initEvent() {

}

// init Editor.js
function initEditor() {
    editor = new EditorJS({
        // 필수 기본 값
        holder: 'postEditor',
        autofocus: true,
        tools: {
            embed: { // Editor.js에 포함된 콘텐츠에 대한 블록 도구 제공
                class: Embed,
                inlineToolbar: true,
                config: {
                    services: { // 일부 서비스 제공
                        youtube: true,
                        coub: true
                    }
                }
            }
        },

        onReady: () => onEditorReady(),
        onChange: () => onEditorChange()
    })
}

function onEditorReady() {
    console.log('Post Editor 준비')
}

function onEditorChange() {
    console.log('Post Editor 변경')
}

export default init()