export const Pills = ({ tag }: { tag: string }) => {
  return (
    <div className="flex gap-2 bg-primary text-white rounded-[10px] px-3 py-1 font-bold text-sm">
      {tag}
    </div>
  );
};
