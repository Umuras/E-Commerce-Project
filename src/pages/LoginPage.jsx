import { useEffect, useState } from "react";
import { get, set, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import { getUserAction } from "../store/actions/clientAction";

export function LoginPage({ setIsHomePage }) {
  useEffect(() => {
    setIsHomePage(false);
  });

  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const prevLocation = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid, isSubmitting }, //isSubmitting ile butona bastığımızda loading efekti veriyoruz.
  } = useForm({ defaultValues: {}, mode: "all", shouldUnregister: true });

  async function onLoginSubmit(formData) {
    console.log("Form data:", formData);
    const result = await dispatch(getUserAction(formData));
    console.log("Result:", result);
    if (result) {
      console.log("Login successful, redirecting to:", prevLocation);
      history.push(prevLocation); // Redirect to the previous location
    }
  }

  return (
    <section className="flex flex-col items-center  justify-center lg:items-center bg-[#FAFAFA]">
      <form
        className="flex flex-col lg:items-start lg:px-24 items-center justify center gap-4 bg-[#2A7CC7] py-10 w-[80%] rounded-2xl
      "
        onSubmit={handleSubmit(onLoginSubmit)}
      >
        <h1 className="!text-[20px] !font-bold !text-[#232B42] lg:!text-center lg:w-full">
          Login Form
        </h1>

        <div className="flex flex-col lg:w-[100%]">
          <h4 className="!text-[14px] !font-bold !text-[#232B42]">Email</h4>
          <input
            className="px-4 py-2 border-black border-2 rounded-lg bg-white"
            type="email"
            placeholder="Lütfen geçerli bir email adresi giriniz:"
            {...register("email", {
              required: "Lütfen doğru bir email gir:",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email @ ve . İçermeli",
              },
            })}
          />
          {errors.email && (
            <p className="text-[14px] text-red-200 font-bold w-[100%]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4 lg:w-[100%]">
          <div className="flex flex-col">
            <h4 className="!text-[14px] !font-bold !text-[#232B42]">
              Password
            </h4>
            <input
              className="px-4 py-2 border-black border-2 rounded-lg bg-white"
              placeholder="Lütfen bir şifre giriniz:"
              type="password"
              {...register("password", {
                required: "Şifre girmelisin",
              })}
            />
            {errors.password && (
              <p className="max-w-58 text-start text-red-200 text-sm font-bold">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              {...register("rememberMe")}
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.value)}
            />
            <label htmlFor="" className="text-black font-bold text-lg">
              Remember Me
            </label>
          </div>
        </div>

        <button //isSubmitting butona bastığımız an true oluyor ve disabled oluyor, bu sayede post işlemi bitene kadar butona basamıyoruz.
          disabled={!isValid || isSubmitting}
          className={`px-4 py-2.5 text-[#FFFFFF] font-bold lg:w-[100%] !rounded-lg border-black border-2 ${
            isValid ? "bg-[#beb74a]" : "bg-[#A9A9A9]"
          }`}
        >
          Submit
          {/* isSubbmitting butona basığımız an true oluyor ve butonun üstünde loading efekti veriyoruz. */}
          {isSubmitting && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
        </button>
      </form>
    </section>
  );
}
