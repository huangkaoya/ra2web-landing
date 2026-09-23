/**
 * Keeps the product name visually exact. Parent `uppercase` utilities must not
 * turn `ra2web` into `RA2WEB`.
 */
export default function BrandText({ text }: { text: string }) {
  const parts = text.split(/(ra2web)/g);
  return (
    <>
      {parts.map((part, index) =>
        part === 'ra2web' ? (
          <span key={index} className="normal-case">ra2web</span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}
