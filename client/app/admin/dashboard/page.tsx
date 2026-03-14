"use client"
import AdminNavbar from "@/app/admin/_componentUpdate/AdminNavbar"
import UpdateContact from "../_componentUpdate/UpdateContact"
import UpdateExperienc from "../_componentUpdate/UpdateExperienc"
import UpdateSkill from "../_componentUpdate/UpdateSkill"
import UpdateProject from "../_componentUpdate/UpdateProject"
import UpdateHero from "../_componentUpdate/Updatehero"
import { useSigninMutation, useSignoutMutation } from "@/app/redux/apis/auth.api"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"


const admin = () => {
    const [signout] = useSignoutMutation()
    const router = useRouter()

    const handlelogout = async () => {
        try {
            await signout(null).unwrap()
            router.refresh()
            toast.success("logout success")
        } catch (error) {
            console.log(error)
            toast.error("logout fail")

        }
    }
    return <>
        <AdminNavbar />
        <UpdateHero />
        <UpdateProject />
        <UpdateExperienc />
        <UpdateContact />
        <UpdateSkill />

        <button onClick={handlelogout}>logout</button>
    </>
}

export default admin