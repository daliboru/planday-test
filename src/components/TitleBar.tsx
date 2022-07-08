export default function TitleBar({
  type,
  title,
}: {
  type?: "primary" | "secondary";
  title: string;
}) {
  return (
    <div className="title-bar">
      <div className="title-bar-text">{title}</div>
      <div className="title-bar-controls">
        {type === "secondary" ? (
          <button aria-label="Help" />
        ) : (
          <>
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </>
        )}
      </div>
    </div>
  );
}
