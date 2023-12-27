
import Authen from '../pages/authen/Authen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/authen/components/Login'
import Register from '../pages/authen/components/Register'
import { useRef } from 'react'
export default function RoutesComp() {
    const containerRef = useRef<any>();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path='about' element={<>About</>}></Route>
                </Route>
                <Route path='/authen' element={<Authen/>}>
                    <Route path='login' element={<Login/>}></Route>
                    <Route path='register' element={<Register containerRef={containerRef}/>}></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
