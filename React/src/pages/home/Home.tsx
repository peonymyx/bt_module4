import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { Outlet } from "react-router-dom"
import { api } from "../../services/apis"
import './home.scss'
export default function Home() {
  async function testData(){
    let data = await api.doList.getList()
    console.log(data.data, "test");
  }
  testData()
  return (
    <div className="home_page">
        <Navbar/>
        <div className="home_page_body">
            <div className="content">
           Body
                <Outlet/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
