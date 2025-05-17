export default function Heading({ header, title }) {
  return (
    <>
      <h2 className="text-xl font-bold mb-1">{header}</h2>
      <p className="text-gray-400 text-sm mb-4">{title}</p>
    </>
  );
}
