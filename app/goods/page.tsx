import { Construction } from "@/ui/construction";

const GoodsPage = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-medium">Goods</h1>
        <p className="max-w-md text-xs font-light leading-5 tracking-wide text-light/80">
          I do tons of research before buying anything, and I very rarely buy
          things that end up idling. Here are some of my favorite products.
        </p>
      </div>

      <Construction />
    </div>
  );
};

export default GoodsPage;
