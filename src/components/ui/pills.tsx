export const Pills = ({ tag }: { tag: string }) => {
  return (
    <div className="gap-2 bg-primary text-white rounded-[10px] px-3 py-1 font-bold lg:text-sm text-[10px] flex-shrink-0">
      {tag}
    </div>
  );
};
