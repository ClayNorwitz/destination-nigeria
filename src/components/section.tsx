export default function TopSection({
  children,
  background,
  paddingTop,
  paddingBottom,
}: {
  children: React.ReactNode;
  background: string;
  paddingTop: string;
  paddingBottom: string;
}) {
  return (
    <section
      className={`relative ${paddingTop}  ${paddingBottom} ${background}`}
    >
      {children}
    </section>
  );
}
