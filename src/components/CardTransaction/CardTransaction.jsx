import { FaTrashAlt } from "react-icons/fa";
import Button from "../Button/Button";
import { CardTransactionStyle } from "./CardTransactionStyle";

const CardTransaction = ({
  filtered,
  setFiltered,
  transaction,
  setTransaction,
  setBackgroundColor,
}) => {
  const removeCard = (id) => {
    const remove = transaction.filter((item) => item.id !== id);

    setTransaction(remove);
    setFiltered(remove);
    setBackgroundColor("Todos");
  };

  return (
    <CardTransactionStyle>
      {filtered.map((item, index) => (
        <div
          key={index}
          className={
            item.type === "Entrada" ? "card entryBorder" : "card expenseBorder"
          }
        >
          <div className="list">
            <h2>{item.description}</h2>
            <div className="valueTrash">
              <p>
                {Math.abs(item.value).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <Button type={"button"} onClick={() => removeCard(item.id)}>
                <FaTrashAlt />
              </Button>
            </div>
          </div>
          <span>{item.type}</span>
        </div>
      ))}
    </CardTransactionStyle>
  );
};

export default CardTransaction;
