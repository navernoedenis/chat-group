import { FC, ChangeEvent } from "react";
import { Container, SearchIcon, SearchField } from "./styles";

interface AsideSearchProps {
  onSearchQueryChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}

const AsideSearch: FC<AsideSearchProps> = ({
  onSearchQueryChange,
  searchQuery
}) => (
  <Container>
    <SearchIcon sx={{ width: "24px", heigth: "24px", fontSize: "24px" }} />
    <SearchField
      onChange={onSearchQueryChange}
      placeholder="Search"
      value={searchQuery}
    />
  </Container>
);

export default AsideSearch;
