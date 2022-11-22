import Button from "../Button/Button";
import { FinancialSummaryStyle } from "./FinancialSummaryStyle";

const FinancialSummary = ({
  filtered,
  setFiltered,
  transaction,
  backgroundColor,
  setBackgroundColor,
}) => {
  const filteredCard = (type) => {
    if (type === "Todos") {
      setFiltered(transaction);
      setBackgroundColor(type);
    } else {
      const filteredItem = transaction.filter((item) => item.type === type);
      setBackgroundColor(type);
      setFiltered(filteredItem);
    }
  };

  return (
    <FinancialSummaryStyle>
      <div className="summary">
        <p>Resumo financeiro</p>
        <div>
          <Button
            className={backgroundColor === "Todos" && "activedButton"}
            onClick={() => filteredCard("Todos")}
          >
            Todos
          </Button>

          <Button
            className={backgroundColor === "Entrada" && "activedButton"}
            onClick={() => filteredCard("Entrada")}
          >
            Entradas
          </Button>

          <Button
            className={backgroundColor === "Despesa" && "activedButton"}
            onClick={() => filteredCard("Despesa")}
          >
            Despesas
          </Button>
        </div>
      </div>
    </FinancialSummaryStyle>
  );
};

export default FinancialSummary;
