import Card from "../Card/Card";
import CardTransaction from "../CardTransaction/CardTransaction";
import FinancialSummary from "../FinancialSummary/FinancialSummary";
import { ListStyle } from "./ListStyle";

const List = ({
  filtered,
  setFiltered,
  transaction,
  setTransaction,
  backgroundColor,
  setBackgroundColor,
}) => {
  return (
    <ListStyle>
      <FinancialSummary
        setFiltered={setFiltered}
        filtered={filtered}
        transaction={transaction}
        setTransaction={setTransaction}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
      />

      {filtered.length > 0 ? (
        <CardTransaction
          transaction={transaction}
          setTransaction={setTransaction}
          filtered={filtered}
          setFiltered={setFiltered}
          setBackgroundColor={setBackgroundColor}
        />
      ) : (
        <Card />
      )}
    </ListStyle>
  );
};

export default List;
