import { useEffect, useState } from "react";
import { HeaderComponent } from "./style";

import { Dialog } from "primereact/dialog";
import CreateAccount from "./CreateAccount";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export default function Header() {
  const [createAccountVisible, setCreateAccountVisible] = useState(false);

  const [isUserLogin, setIsUserLogin] = useState(false);

  const checkUser = async () => {
    await api
      .get("me")
      .then(() => {
        setIsUserLogin(true);
      })
      .catch(() => {
        setIsUserLogin(false);
      });
  };

  const logout = () => {
    toast.success("User logged out!");
    setIsUserLogin(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("UserAttributes");
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <HeaderComponent>
      <h1>Cats List</h1>

      <div className="buttons">
        <button type="button" className="addCat">
          + Add a Cat
        </button>
        {isUserLogin ? (
          <button type="button" className="user" onClick={() => logout()}>
            Logout
          </button>
        ) : (
          <>
            <button
              type="button"
              className="user"
              onClick={() => setCreateAccountVisible(true)}
            >
              Create Account
            </button>
            <button type="button" className="user">
              Login
            </button>
          </>
        )}
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
        <CreateAccount
          onClose={() => setCreateAccountVisible(false)}
          checkUser={checkUser}
        />
      </Dialog>
    </HeaderComponent>
  );
}
