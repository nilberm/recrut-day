import { HeaderComponent } from "./style";




export default function Header() {
  return (
    <HeaderComponent>
      <h1>Cats List</h1>

      <div className="buttons">
        <button type="button" className="addCat">
          + Add a Cat
        </button>
        <button type="button" className="user">
          User
        </button>
      </div>
    </HeaderComponent>
  );
}
