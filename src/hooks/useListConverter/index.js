import { useEffect, useState } from "react";
import { html } from "remark-html";
import { remark } from "remark";

export const useListConverter = (content) => {
  const [htmlContent, setHtmlContent] = useState("");

  // TODO: checkbox永続化
  useEffect(() => {
    const convertList = (content) => {
      const lines = content.split("\n");
      const convertedLines = lines.map((line) => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith("#")) {
          const headingLevel = Math.min(trimmedLine.split("#").length - 1, 6);
          const text = trimmedLine.replace(/#/g, "").trim();
          const headingStyle = `
            font-size: ${24 - (headingLevel - 1) * 2}px;
            font-weight: bold;
          `;
          return `<h${headingLevel} style="${headingStyle}">${text}</h${headingLevel}>`;
        }
        if (trimmedLine.startsWith("- [ ]")) {
          const text = trimmedLine
            .replace("- [ ]", "")
            .trim()
            .replace(/\\/g, "&#92;");
          return `<label style="display: flex;"><input type="checkbox" style="width: 13px; margin-right: 5px;" />${text}</label>`;
        }
        return line.replace(/^- /, "・") + "\n";
      });
      const filteredLines = convertedLines.filter((line) => line.trim() !== ""); // 空行をフィルタリング
      return filteredLines.join("\n"); // 改行コードを除去して連結
    };

    const convertedContent = convertList(content);
    const processedContent = remark().use(html).processSync(convertedContent);
    const newHtmlContent = processedContent.toString();

    setHtmlContent(newHtmlContent);
  }, [content]);

  return htmlContent;
};
