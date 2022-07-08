export default function SearchForm({
  searchFn,
  description,
}: {
  searchFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
}) {
  return (
    <div className="field-row" style={{ marginBottom: "1rem" }}>
      <label htmlFor="text17" style={{ fontSize: "0.8rem" }}>
        {description}
      </label>
      <input
        id="text17"
        type="text"
        style={{ width: "12rem" }}
        onChange={searchFn}
      />
    </div>
  );
}
