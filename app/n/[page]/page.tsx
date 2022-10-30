import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import { notionClient } from "@/lib/notion/client";
import { n2m } from "@/lib/notion/markdown";
import { Markdown } from "@/ui/markdown";

interface NPageProps {
  params: Params;
  searchParams: URLSearchParams;
}

const NPage = async ({ params }: NPageProps): Promise<JSX.Element> => {
  const pageProps = await notionClient.pages.retrieve({
    page_id: params.page as string,
  });
  const pageData = await n2m.pageToMarkdown(params.page);
  const mdString = n2m.toMarkdownString(pageData);

  return (
    <>
      <h1 className="text-3xl font-bold">
        {
          // @ts-expect-error - pageProps is not typed
          pageProps.properties.title?.title[0].plain_text as string
        }
      </h1>
      <Markdown>{mdString}</Markdown>
    </>
  );
};

export default NPage;
