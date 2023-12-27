import { useTranslation } from 'react-i18next'
import { UserCreate } from "@/interfaces/user.interface";
import { api } from '@/services/apis';
import { Modal, message } from "antd";
import { MutableRefObject } from "react";
import './register.scss'
import { useNavigate } from 'react-router-dom';
export default function Register({ containerRef }: {
  containerRef: MutableRefObject<any>
}) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();


  async function handleRegister(e: React.FormEvent) {
    try {
      let newUser: UserCreate = {
        name: (e.target as any).name.value,
        email: (e.target as any).email.value,
        password: (e.target as any).password.value,
        avatar: "https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"
      }
      let result = await api.userApi.register(newUser);
      console.log(result);
      if(result.status === 200){
        Modal.success({
          title: "Thông báo",
          content: result.data.message,
          onOk: () => {
            navigate('/authen/login')
          }
        })
      }
      
     
    } catch (err: any) {
      Modal.error({
        title: "Thông báo",
        content: err?.response?.data?.message || "Tạo tài khoản thất bại",
      })    
    }
  }
  return (
    <div>
      <div className="container-wrap">
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-user-plus" /> {t('register')}
              </h1>


              <form onSubmit={async (e: React.FormEvent) => {
                e.preventDefault()
                if ((e.target as any).password.value == (e.target as any).passwordConfirm.value) {
                  handleRegister(e)
                }
                else {
                  message.error("Mật khẩu không khớp")
                }
              }}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder={t('name')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder={t('email')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder={t('password')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordConfirm">Confirm Password</label>
                  <input
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    className="form-control"
                    placeholder={t('confirmPassword')}
                  />
                  <br />
                </div>
                <button type="submit" className="btn btn-danger btn-block">
                  {t('register')}
                </button>
              </form>
              <p className="lead mt-4">
                Have An Account?{" "}
                <a href="login" style={{ color: "red" }}>
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">@ copyright by web CTT2 team</div>
    </div>
  )
}
