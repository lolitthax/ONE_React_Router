import Banner from "componentes/Banner"
import { Outlet } from "react-router-dom"
export default function PaginaPadrao() {
    return (
        <main>
            <Banner />

            {/* outlet renderiza os elementos da página inicio e sobre mim */}
            <Outlet />
        </main>
    )
}