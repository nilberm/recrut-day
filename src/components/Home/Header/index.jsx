import { useState } from "react";
import { HeaderComponent } from "./style";

import { Dialog } from "primereact/dialog";
import CreateAccount from "./CreateAccount";

export default function Header() {
  const [createAccountVisible, setCreateAccountVisible] = useState(false);

  return (
    <HeaderComponent>
      <h1>Cats List</h1>

      <div className="buttons">
        <button type="button" className="addCat">
          + cat
        </button>
        <button
          type="button"
          className="user"
          onClick={() => setCreateAccountVisible(true)}
        >
          user
        </button>
      </div>

      <Dialog
        header="Create Account"
        visible={createAccountVisible}
        style={{
          width: "50vw",
          border: "1px solid #7a7a7a",
          padding: "1rem",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px #7a7a7a",
        }}
        className="modal"
        onHide={() => setCreateAccountVisible(false)}
      >
        <CreateAccount onClose={() => setCreateAccountVisible(false)} />
      </Dialog>
    </HeaderComponent>
  );
}
