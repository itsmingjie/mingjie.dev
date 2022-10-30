import { Construction } from "@/ui/construction";
import { Link } from "@/ui/link";

const Page = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-medium">Heyo!</h1>
        <p className="max-w-md text-xs font-light leading-5 tracking-wide text-light/80">
          I'm currently rebuilding my website, so things might look empty or
          broken around here. If you're interested in the progress, you can find
          the source code on{" "}
          <Link
            href="https://github.com/itsmingjie/mingjie.dev"
            external
            className="hover:underline text-light"
          >
            GitHub
          </Link>
          .
        </p>
      </div>

      <Construction />
    </div>
  );
};

export default Page;
