import React, { memo, useEffect, useState } from "react";
import MdEditor from "md-editor-rt";
import "md-editor-rt/lib/style.css";

const Mdeditor = memo((props) => {
  const [text, setText] = useState("");
  const [previewTheme, setpreviewTheme] = useState("mk-cute");

  useEffect(() => {
    setText(props?.content);
  }, [props.content]);
  useEffect(() => {
    setpreviewTheme(props?.theme);
  }, [props.theme]);

  return (
    <MdEditor
      previewOnly
      modelValue={text}
      onChange={setText}
      previewTheme={previewTheme}
      onGetCatalog={(list) => {
        props.getAnchor(list);
      }}
    />
  );
});

export default Mdeditor;
