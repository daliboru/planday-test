import { useEffect, useState } from "react";
import { Item } from "../hooks/useFetch";
import { useKeyPress } from "../hooks/useKeyPress";
import GridItem from "./GridItem";
import SearchForm from "./SearchForm";
import TitleBar from "./TitleBar";

export default function Main({ data }: { data: Item[] }) {
  const [activeItems, setActiveItems] = useState([0, 2]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState<Item[]>(data);
  const pressForward = useKeyPress("ArrowRight");
  const pressBackwards = useKeyPress("ArrowLeft");

  const onMoveBackwards = () => {
    if (activeItems[0] > 0) {
      setPage((page) => page - 1);
      setActiveItems((arr) => [arr[0] - 2, arr[1] - 2]);
    }
  };
  const onMoveForward = () => {
    if (activeItems[1] < filteredData.length) {
      setPage((page) => page + 1);
      setActiveItems((arr) => [arr[0] + 2, arr[1] + 2]);
    }
  };
  const searchFn = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  useEffect(() => {
    setFilteredData(data.filter((item) => filterFn(item, searchText)));
    setActiveItems([0, 2]);
    setPage(1);
  }, [searchText, data]);
  useEffect(() => {
    if (pressBackwards) {
      if (activeItems[0] > 0) {
        setPage((page) => page - 1);
        setActiveItems((arr) => [arr[0] - 2, arr[1] - 2]);
      }
    }
    // eslint-disable-next-line
  }, [pressBackwards]);
  useEffect(() => {
    if (pressForward) {
      if (activeItems[1] < filteredData.length) {
        setPage((page) => page + 1);
        setActiveItems((arr) => [arr[0] + 2, arr[1] + 2]);
      }
    }
    // eslint-disable-next-line
  }, [pressForward, filteredData]);

  return (
    <div className="grid">
      <div className="window" style={{ width: "30rem" }}>
        <TitleBar title="Planday challenge :)" />
        <div className="window-body">
          <SearchForm searchFn={searchFn} description="Search cards" />
          <section className="section">
            <div className="content">
              {!filteredData.length ? (
                <h4>{"no results found..."}</h4>
              ) : (
                filteredData
                  .slice(activeItems[0], activeItems[1])
                  .map((item, i) => <GridItem key={i} item={item} />)
              )}
            </div>
            <div>
              {!!filteredData.length && (
                <>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>{`page ${page} out of ${Math.round(
                      filteredData.length / 2
                    )}`}</p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      className="btn"
                      onClick={onMoveBackwards}
                      style={{ marginRight: "1rem" }}
                    >
                      {"<"}
                    </button>
                    <button className="btn" onClick={onMoveForward}>
                      {">"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

const filterFn = (item: Item, searchText: string) => {
  if (searchText === "") return item;
  if (item.title.toLowerCase().includes(searchText.toLowerCase())) {
    return item;
  }
};
