import { useForm } from "react-hook-form";
import { api } from "../../../../services/api";
import { Container } from "./style";
import { toast } from "react-toastify";

export default function LoginAccount(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await api.post("auth/signin", data).then((response) => {
      localStorage.setItem(
        "accessToken",
        response.data?.data?.AuthenticationResult?.AccessToken
      );
      localStorage.setItem(
        "UserAttributes",
        JSON.stringify(response.data?.data?.UserAttributes)
      );

      toast.success("Account logged in successfully");

      props?.onClose();
      props?.setIsUserLogin(true);
      reset();
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputAndLabel">
          <label>Email</label>
          <input {...register("email", { required: true })} />
        </div>
        <div className="inputAndLabel">
          <label>Password</label>
          <input {...register("password", { required: true })} />
        </div>

        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </Container>
  );
}
