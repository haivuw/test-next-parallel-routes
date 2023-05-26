export default function MediaDetailsLayout({
  watch,
  children,
}: {
  children: React.ReactNode;
  watch: React.ReactNode;
}) {
  return (
    <>
      {children}
      {watch}
    </>
  );
}
