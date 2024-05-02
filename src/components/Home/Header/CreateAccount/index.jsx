import { useForm } from "react-hook-form";
import { Container } from "./style";

import { api } from "../../../../services/api";
import { toast } from "react-toastify";

export default function CreateAccount(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await api.post("auth/signup", data).then((response) => {
      localStorage.setItem(
        "accessToken",
        response.data?.data?.AuthenticationResult?.AccessToken
      );
      localStorage.setItem(
        "UserAttributes",
        response.data?.data?.UserAttributes
      );

      toast.success("Account created successfully");

      props?.onClose();
      reset();
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
