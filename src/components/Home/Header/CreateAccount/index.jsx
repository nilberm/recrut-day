import { useForm } from "react-hook-form";
import { Container } from "./style";

import { api } from "../../../../services/api";

export default function CreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    await api.post("auth/signup", data).then((response) => {
      localStorage.setItem("accessToken", accessToken);
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <label>Name</label>
          <input {...register("name", { required: true })} />
        </div>
        <div className="input">
          <label>Email</label>
          <input {...register("email", { required: true })} />
        </div>
        <div className="input">
          <label>Password</label>
          <input {...register("password", { required: true })} />
        </div>

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </Container>
  );
}
