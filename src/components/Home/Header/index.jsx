import axios from "axios";
import { HeaderComponent } from "./style";
import { useEffect, useState } from "react";



export default function Header() {
  const [cats, setCats] = useState([])
  const [form, setForm] = useState({})
  const [id, setId] = useState("")

  async function getCats() {
    const res = await axios.get("https://nxcuamed0k.execute-api.us-east-1.amazonaws.com/cats")
    console.log(res);
    setCats(res.data)
  }

  useEffect(() => {
    getCats()
  }, [])
  return (
    <HeaderComponent>
      <div>
        <form>
          <label>Name <input type="text" id="name" name="name"/></label>
          <label>Name <input type="text" id="name" name="name"/></label>
          <label>Name <input type="text" id="name" name="name"/></label>
          <label>Name <input type="text" id="name" name="name"/></label>
        </form>
      </div>



    </HeaderComponent>
  );
}
