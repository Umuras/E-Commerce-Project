import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../services/api";
import { toast } from "react-toastify";
import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom";
import { PreviousPageContext } from "../contexts/PreviousPageContext";

export function SignupPage({ setIsHomePage }) {
  const [roles, setRoles] = useState([]);
  const [roleId, setRoleId] = useState(3);
  const [loading, setLoading] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  //location ve navivagate ile yönlendirme yapıyoruz. location ile son girdiğimiz sayfayı alıyoruz.
  //history ile yönlendirme yapıyoruz.
  //const location = useLocation();
  const history = useHistory();
  const location = useLocation();
  const prevLocation = location.state?.from || "/";

  useEffect(() => {
    setIsHomePage(false);
  });

  useEffect(() => {
    async function fecthRoles() {
      try {
        api
          .get("/roles")
          .then((response) => {
            setRoles(response.data);
            console.log(response.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log("Roles datas don't get correctly.");
      }
    }

    fecthRoles();
  }, []);

  async function signup(formData) {
    try {
      api
        .post("/signup", formData)
        .then((response) => {
          console.log(response.data);
          toast.success(
            "You need to click link in email to activate your account!"
          );
          //Burada 1.5 sn bekleyip yönlendirme yapıyoruz.
          setTimeout(() => {
            history.push(prevLocation);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Kayıt işlemi başarısız oldu.");
        });
      console.log(formData);
    } catch (error) {
      console.log("Signup operation failed.");
    }
  }

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid, isSubmitting }, //isSubmitting ile butona bastığımızda loading efekti veriyoruz.
  } = useForm({ defaultValues: {}, mode: "all", shouldUnregister: true });

  //Burada password isimli inputu izleyip oradaki valueyi tutup ikinci password kısmında kontrol yapıyoruz.
  const password = watch("password");

  useEffect(() => {
    //Burada şunu yapıyoruz roles.dizisi içerisinden 3 numaralı iddeki rolü buluyoruz
    const defaultRole = roles.find((role) => role.id === 3);
    //Eğer var ise setValue ile roleün default değerini buradan ayarlıyoruz. "role" ile ...register("role") buradan seçiyoruz, sonra da
    //değerini veriyoruz.
    if (defaultRole) {
      setValue("role_id", defaultRole.id);
    }
  }, [roles]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="!font-bold !text-4xl !text-amber-500">Yükleniyor...</h1>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center  justify-center lg:items-center bg-[#FAFAFA]">
      <form
        className="flex flex-col lg:items-start lg:px-24 items-center justify center gap-4 bg-[#2A7CC7] py-10 w-[80%] rounded-2xl"
        onSubmit={handleSubmit(signup)}
      >
        <h1 className="!text-[20px] !font-bold !text-[#232B42] lg:!text-center lg:w-full">
          Signup Form
        </h1>
        <div className="flex flex-col lg:w-[100%]">
          <h4 className="!text-[14px] !font-bold !text-[#232B42]">Name</h4>
          <input
            className="px-4 py-2 border-black border-2 rounded-lg bg-white"
            type="text"
            placeholder="Lütfen isim giriniz:"
            {...register("name", {
              required: "Lütfen düzgün isim giriniz:",
              minLength: {
                value: 3,
                message: "En az 3 karakter olmalı",
              },
            })}
          />
          {errors.name && (
            <p className="text-[14px] text-red-200 font-bold w-[100%]">
              {errors.name.message}
            </p>
          )}
        </div>

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
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                  message:
                    "En az 8 karakter, 1 büyük harf, 1 küçük harf ve özel karakter olmalı!",
                },
              })}
            />
            {errors.password && (
              <p className="max-w-58 text-start text-red-200 text-sm font-bold">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <h4 className="!text-[14px] !font-bold !text-[#232B42]">
              Password Validation
            </h4>
            <input
              className="px-4 py-2 border-black border-2 rounded-lg bg-white"
              placeholder="Lütfen aynı şifreyi tekrar giriniz:"
              type="password"
              onChange={(e) => {
                if (e.target.value !== password) {
                  setPasswordError(true);
                } else {
                  setPasswordError(false);
                }
              }}
            />
            {passwordError && (
              <p className="text-[14px] text-red-200 font-bold w-[100%]">
                {"Şifreler eşleşmiyor!"}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <h4 className="!text-[14px] !font-bold !text-[#232B42]">Role</h4>
            <select
              {...register("role_id", {
                required: "Lütfen bir rol seç!",
                onChange: (e) => {
                  setRoleId(parseInt(e.target.value));
                },
              })}
              className="border-2 px-3 py-2 rounded-lg bg-[#FAFAFA] border-black"
            >
              {roles.map((role, index) => {
                return (
                  <option key={index} value={role.id}>
                    {role.name}
                  </option>
                );
              })}
            </select>
            {errors.role_id && <p>{errors.role_id.message}</p>}
          </div>
        </div>

        {roleId === 2 ? (
          <>
            <div className="flex flex-col lg:w-[100%]">
              <h4 className="!text-[14px] !font-bold !text-[#232B42]">
                Store Name
              </h4>
              <input
                className="px-4 py-2 border-black border-2 rounded-lg bg-white"
                type="text"
                placeholder="Lütfen mağaza ismi giriniz:"
                {...register("store.name", {
                  required: "Lütfen düzgün mağaza ismi giriniz:",
                  minLength: {
                    value: 3,
                    message: "En az 3 karakter olmalı",
                  },
                })}
              />
              {errors.store?.name && (
                <p className="text-[14px] text-red-200 font-bold w-[100%]">
                  {errors.store?.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col lg:w-[100%]">
              <h4 className="!text-[14px] !font-bold !text-[#232B42]">
                Store Phone
              </h4>
              <input
                className="px-4 py-2 border-black border-2 rounded-lg bg-white"
                type="tel"
                placeholder="05xx xxx xx xx"
                {...register("store.phone", {
                  required: "Lütfen düzgün telefon no giriniz:",
                  pattern: {
                    value: /^05\d{9}$/,
                    message: "Telefon no yapısı doğru değil",
                  },
                })}
              />
              {errors.store?.phone && (
                <p className="text-[14px] text-red-200 font-bold w-[100%]">
                  {errors.store?.phone.message}
                </p>
              )}
            </div>

            <div className="flex flex-col lg:w-[100%]">
              <h4 className="!text-[14px] !font-bold !text-[#232B42]">
                Store TaxID
              </h4>
              <input
                className="px-4 py-2 border-black border-2 rounded-lg bg-white"
                type="text"
                placeholder="Lütfen telefon no giriniz:"
                {...register("store.tax_no", {
                  required: "Lütfen düzgün tax no giriniz:",
                  pattern: {
                    //^ başlangıç oluyor, T ile başlıyoruz, \d{4} sonraki 4 karakter sayı olsun demek, sonra V geliyor, sonra yine 6 rakam $ bitiriş.
                    value: /^T\d{4}V\d{6}$/,
                    message: "Tax no yapısı doğru değil",
                  },
                })}
              />
              {errors.store?.tax_no && (
                <p className="text-[14px] text-red-200 font-bold w-[100%]">
                  {errors.store.tax_no.message}
                </p>
              )}
            </div>

            <div className="flex flex-col lg:w-[100%]">
              <h4 className="!text-[14px] !font-bold !text-[#232B42]">
                Store IBAN
              </h4>
              <input
                className="px-4 py-2 border-black border-2 rounded-lg bg-white"
                type="text"
                placeholder="Lütfen IBAN giriniz:"
                {...register("store.bank_account", {
                  required: "Lütfen düzgün IBAN giriniz:",
                  pattern: {
                    //^ başlangıç oluyor, T ile başlıyoruz, \d{24} sonraki 24 karakter sayı olsun demek, $ bitiriş.
                    value: /^TR\d{24}$/,
                    message: "IBAN yapısı doğru değil",
                  },
                })}
              />
              {errors.store?.bank_account && (
                <p className="text-[14px] text-red-200 font-bold w-[100%]">
                  {errors.store.bank_account.message}
                </p>
              )}
            </div>
          </>
        ) : (
          ""
        )}

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
