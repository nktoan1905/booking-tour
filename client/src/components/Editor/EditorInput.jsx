import React, { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./QuillToolBar";
import "./TextEditor.css";


const Editor = ({value, setValue}) => {

  const handleChange = (html) => {
    setValue(html);
  };
  return (
    <React.Fragment>
      <EditorToolbar toolbarId={"t1"} />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules("t1")}
        formats={formats}
      />
    </React.Fragment>
  );
};

export default Editor;
