import { Item } from "../hooks/useFetch";
import TitleBar from "./TitleBar";

export default function Grid({ item }: { item: Item }) {
  return (
    <div className="window">
      <TitleBar type="secondary" title="A card" />
      <div
        className="window-body"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={item.imagePath}
          alt={item.description}
          style={{ maxWidth: "10rem", width: "auto" }}
        />
        <p style={{ fontWeight: "bold" }}>{item.title}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
