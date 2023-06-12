import React, { useState, useRef, useMemo, Fragment } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
// import "jodit";
import "jodit/build/jodit.min.css";
const JoiEditor = ({ placeholder, content, setContent }) => {
  const editor = useRef(null);

  return (
    <Fragment>
      <JoditEditor
        ref={editor}
        value={content}
        // onChange={(newContent) => {
        //   setContent(newContent);
        // }}
        onBlur={(newContent) => setContent(newContent)}
      />
    </Fragment>
  );
};

export default JoiEditor;
