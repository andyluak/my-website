import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function RichText({value, setPostText, setPostHTML}) {
	// Useref on quill editor
	// let [editor, setEditor] = useState(null);
	const onChangeText = (html, delta, source, editor) => {
		let text = editor.getText();
		// setPostText(text);
		setPostHTML(html);
		setPostText(text);
	}
	const modules = [{
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],        // toggled buttons
			['blockquote', 'code-block', 'image'],

			[{ 'header': 1 }, { 'header': 2 }],               // custom button values
			[{ 'list': 'ordered'}, { 'list': 'bullet' }],
			[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
			[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
			[{ 'direction': 'rtl' }],                         // text direction

			[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

			[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
			[{ 'font': [] }],
			[{ 'align': [] }],

			['clean']
		],
	}];
  return (
	  <>
	<ReactQuill theme="snow" value={value} onChange={onChangeText} modules={modules[0]}/>
	</>
  )
}
