import ReactMarkdown from "react-markdown";

export const Markdown = ({ children }: { children: string }): JSX.Element => {
  return (
    <ReactMarkdown className="flex flex-col w-full gap-5 prose prose-n">
      {children}
    </ReactMarkdown>
  );
};
