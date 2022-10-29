import { Link } from "@/ui/link";

const Page = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-sm text-light/50">
        <p>
          Learner & builder, crafting interactive education experiences for kids
          at{" "}
          <Link
            href="https://joinender.com"
            className="underline transition-colors hover:text-light/90"
            external
          >
            Ender
          </Link>
          .
        </p>
        <p>
          I grew up in Shanghai, immigrated to Maryland, and went to UC Berkeley
          for a little over a year. I now live in Austin, a weird yet beautiful,
          diverse, and fast-growing city.
        </p>
        <p>
          I spent a few years working at CS education nonprofits like Hack Club,
          CodeDay, and eventually cofounded my own initiative Execute Big. I
          enjoy teaching, building, and doing research about education.
        </p>
      </div>
    </div>
  );
};

export default Page;
