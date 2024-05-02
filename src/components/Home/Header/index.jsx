import { useEffect, useState } from "react";
import { HeaderComponent } from "./style";
import axios from "axios";

import { Dialog } from "primereact/dialog";
import CreateAccount from "./CreateAccount";
import { api } from "../../../services/api";

export default function Header() {
  const [createAccountVisible, setCreateAccountVisible] = useState(false);


  const [cats, setCats] = useState([])
  const [form, setForm] = useState({})
  const [id, setId] = useState("")

  function valueInput({ target }) {
    const { name, value } = target
    setForm({ ...form, [name]: value })

  }

  async function getCats() {
    const res = await axios.get("https://nxcuamed0k.execute-api.us-east-1.amazonaws.com/cats")
    console.log(res);
    setCats(res.data.data)
  }
  useEffect(() => {
    getCats()
  }, [])

  async function postCats(data) {
    const pos = await axios.post("https://nxcuamed0k.execute-api.us-east-1.amazonaws.com/cats", data.data)
    setCats([...cats, pos.data.data])
    await getCats()
  }


  function sendForm(event) {
    event.preventDefault();
    postCats({
      name: event.target["name"].value,
    })
  }
  return (
    <>
      <HeaderComponent>
        <div>
          {cats.length === 0 ? (<p>Lista Vazia</p>) : (
            cats.map((cats) => (
              <ul key={cats.id}>
                <li>{""}
                  {id === cats.id ? <input type="text" id="name" name="name" value={form.name} onChange={valueInput} /> : (cats.name)}
                </li>{""}
                <>
                <li>
                  
                </li>
                </>
              </ul>
            ))
          )}
        </div>
        <div>
          <form onSubmit={sendForm}>
            <label>Nome <input type="text" id="name" name="name" /></label>
            <button>Enviar</button>
          </form>
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
          <CreateAccount />
        </Dialog>
      </HeaderComponent>
    </>
  );
}
