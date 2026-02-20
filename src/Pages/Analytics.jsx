import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";

const Analytics = () => {
  const { state, dispatch } = useContext(AppContext);

  const totalItems = useMemo(() => {
    return state.items.length;
  }, [state.items]);

  return (
    <div className="container mt-4">
      <h2>Analytics Page</h2>

      <button
        className="btn btn-primary m-2"
        onClick={() =>
          dispatch({ type: "ADD_ITEM", payload: "Item" })
        }
      >
        Add Item
      </button>

      <button
        className="btn btn-danger m-2"
        onClick={() =>
          dispatch({ type: "CLEAR_ITEMS" })
        }
      >
        Clear Items
      </button>

      <h4>Total Items: {totalItems}</h4>

      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            {item}
            <button
              className="btn btn-sm btn-warning ms-2"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: index })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Analytics;