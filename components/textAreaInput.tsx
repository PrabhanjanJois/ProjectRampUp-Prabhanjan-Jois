/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

const LimitedWordTextarea = ({ rows, cols, value, limit }: any) => {
  const [{ content, wordCount }, setContent] = React.useState({
    content: value,
    wordCount: 0,
  });

  const setFormattedContent = React.useCallback(
    //@ts-ignore
    (text) => {
      let words = text.split(" ").filter(Boolean);
      if (words.length > limit) {
        setContent({
          content: words.slice(0, limit).join(" "),
          wordCount: limit,
        });
      } else {
        setContent({ content: text, wordCount: words.length });
      }
    },
    [limit, setContent]
  );

  React.useEffect(() => {
    setFormattedContent(content);
  }, []);

  return (
    <>
      <textarea
        rows={rows}
        cols={cols}
        onChange={(event) => setFormattedContent(event.target.value)}
        value={content}
        placeholder={"Type  your  text  here"}
        style={{
          width: "430px",
          top: "170px",
          left: "20px",
          height: "110px",
          position: "absolute",
          border: "2px solid #dcdce0",
          fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
        }}
      />
      <p
        style={{
          top: "275px",
          position: "absolute",
          right: "25px",
          fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
          fontSize: "15px",
        }}
      >
        {wordCount}/{limit}
      </p>
    </>
  );
};

export default LimitedWordTextarea;
