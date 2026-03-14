"use client"
import React from "react"
import { useSigninMutation } from "../redux/apis/auth.api"
import z from "zod"
import { useForm } from "react-hook-form"
import { LOGIN_REQUEST } from "../type/Admin"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

const LoginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(2, "Password must be at least 6 characters")
}) satisfies z.ZodType<LOGIN_REQUEST>

const AdminLogin = () => {

    const router = useRouter()
    const [login, { isLoading }] = useSigninMutation()

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm<LOGIN_REQUEST>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(LoginSchema)
    })

    const handleLogin = async (data: LOGIN_REQUEST) => {
        try {
            await login(data).unwrap()
            toast.success("Login success")
            router.push("/admin/dashboard")
            router.refresh()
            reset()
        } catch {
            toast.error("Invalid credentials")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="w-full max-w-sm bg-white shadow-xl rounded-xl p-8">

                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Admin Login
                </h2>

                <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">

                    {/* Email */}
                    <div>
                        <input
                            {...register("email")}
                            type="email"
                            autoComplete="off"
                            placeholder="Email address"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            {...register("password")}
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                        {isLoading ? "Signing in..." : "Login"}
                    </button>

                </form>

            </div>

        </div>
    )
}

export default AdminLogin