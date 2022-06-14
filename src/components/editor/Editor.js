import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./editor.css"


const EditorText = () => {
  const [data, setData] = useState();
  const handleReady = (editor) => {
     console.log("Editor is ready to use!", editor);
  };

  // const handleBlur = (event, editor) => {
  //   console.log("Blur.");
  // };

  const handleChange = (event, editor) => {
    const data = editor.getData();

    setData(data);
    console.log({ event, editor, data });
  };

  // const handleFocus = (event, editor) => {
  //   console.log("Focus.");
  // };

  return (
    <div className="App">
  

    
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onReady={handleReady}
        onChange={handleChange}
        // onBlur={handleBlur}
        // onFocus={handleFocus}
      />
      
    </div>
  );
};


export default EditorText;

