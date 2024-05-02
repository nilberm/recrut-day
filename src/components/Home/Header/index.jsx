import { useEffect, useState } from "react";
import { HeaderComponent } from "./style";

import { Dialog } from "primereact/dialog";
import CreateAccount from "./CreateAccount";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import LoginAccount from "./LoginAccount";

export default function Header() {
  const [createAccountVisible, setCreateAccountVisible] = useState(false);
  const [loginAccountVisible, setLoginAccountVisible] = useState(false);

  const [isUserLogin, setIsUserLogin] = useState(false);
  const [user, setUser] = useState({});

  const checkUser = async () => {
    await api
      .get("me")
      .then(() => {
        setIsUserLogin(true);
        setUser(response.data?.data?.UserAttributes);
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
          <>
            <button type="button" className="user" onClick={() => logout()}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="user"
              onClick={() => setCreateAccountVisible(true)}
            >
              Create Account
            </button>
            <button
              type="button"
              className="user"
              onClick={() => setLoginAccountVisible(true)}
            >
              Login
            </button>
          </>
        )}
      </div>

      <Dialog
        header={<h3>Create Account</h3>}
        visible={createAccountVisible}
        style={{
          width: "50vw",
          border: "1px solid #7a7a7a",
          padding: "1rem",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px #7a7a7a",
          backgroundColor: "white",
        }}
        className="modal"
        onHide={() => setCreateAccountVisible(false)}
      >
        <CreateAccount
          onClose={() => setCreateAccountVisible(false)}
          setIsUserLogin={setIsUserLogin}
        />
      </Dialog>

      <Dialog
        header={<h3>Login Account</h3>}
        visible={loginAccountVisible}
        style={{
          width: "50vw",
          border: "1px solid #7a7a7a",
          padding: "1rem",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px #7a7a7a",
          backgroundColor: "white",
        }}
        className="modal"
        onHide={() => setLoginAccountVisible(false)}
      >
        <LoginAccount
          onClose={() => setLoginAccountVisible(false)}
          setIsUserLogin={setIsUserLogin}
        />
      </Dialog>
    </HeaderComponent>
  );
}
