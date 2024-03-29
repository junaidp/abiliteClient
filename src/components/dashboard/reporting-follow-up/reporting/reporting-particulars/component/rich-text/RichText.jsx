import React, { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const RichTextEditor = ({
  onContentChange,
  initialValue,
  id,
  editable,
  singleReport,
  item,
}) => {
  const editor = useRef(null);
  const [content, setContent] = React.useState(initialValue || "");

  const config = useMemo(
    () => ({
      uploader: {
        insertImageAsBase64URI: true,
      },
      controls: {
        font: {
          list: {
            Serif: "Sans Serif",
            Garamond: "Garamond",
          },
        },
      },
      toolbarAdaptive: false,
      readonly: editable === "false" ? true : false,
      spellcheck: true,
      buttons: [
        "bold",
        "|",
        "strikethrough",
        "|",
        "underline",
        "|",
        "italic",
        "|",
        "ul",
        "|",
        "ol",
        "|",
        "image",
        "|",
        "table",
        "|",
        "font",
        "|",
        "fontsize",
        "|",
        "paragraph",
        "|",
        "fullsize",
      ],

      buttonsXS: [
        "bold",
        "|",
        "strikethrough",
        "|",
        "underline",
        "|",
        "italic",
        "|",
        "ul",
        "|",
        "ol",
        "|",
        "image",
        "|",
        "table",
        "|",
        "font",
        "|",
        "fontsize",
        "|",
        "paragraph",
        "|",
        "fullsize",
      ],

      events: {},
      textIcons: false,
    }),
    [singleReport, item?.stepNo]
  );

  React.useEffect(() => {
    setContent(initialValue);
  }, [initialValue]);

  const handleEditorChange = (newContent) => {
    setContent(newContent);
    if (onContentChange) {
      onContentChange(id, newContent);
    }
  };

  return (
    <JoditEditor
      ref={editor}
      config={config}
      tabIndex={1}
      value={content}
      onChange={(newContent) => {}}
      onBlur={handleEditorChange}
    />
  );
};

export default RichTextEditor;
