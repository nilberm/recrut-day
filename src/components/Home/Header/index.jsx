import { HeaderComponent } from "./style";

export default function Header() {
  return (
    <HeaderComponent>
      <h1>Cats List</h1>

      <div className="buttons">
        <button type="button" className="addCat">
          + cat
        </button>
        <button type="button" className="user">
          user
        </button>
      </div>
    </HeaderComponent>
  );
}
