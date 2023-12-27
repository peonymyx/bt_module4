import { useTranslation } from "react-i18next";
export default function Login() {
  const {t, i18n} = useTranslation();
  return (
    <>
  <div className="container-wrap">
    <div className="row mt-5">
      <div className="col-md-6 m-auto">
        <div className="card card-body">
          <h1 className="text-center mb-3">
            <i className="fas fa-sign-in-alt" /> {t('login')}
          </h1>


          <form onSubmit={async (e: React.FormEvent) =>{

          }}>
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
              <br />
            </div>
            <button type="submit" className="btn btn-danger btn-block">
              {t('login')}
            </button>
          </form>
          <p style={{ textAlign: "center" }}>
            <a href="#" style={{ color: "red" }}>
              {t('forgotPassword')}
            </a>
          </p>
          <p className="lead mt-4">
            No Account?{" "}
            <a href="register" style={{ color: "red" }}>
              {t("register")}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-container">@ copyright by web CTT2 team</div>
</>
  )
}
