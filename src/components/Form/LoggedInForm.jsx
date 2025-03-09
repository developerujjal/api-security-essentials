"use client"
import React from 'react';
import Link from 'next/link';
import SocialLoggedIn from './SocialLoggedIn';
import { useSession } from 'next-auth/react';
// import { signIn } from "next-auth/react";
// import { useRouter } from 'next/navigation';


const LoggedInForm = () => {

    const session = useSession();
    console.log(session)

    // const router = useRouter();

    // const handleSignIn = async (e) => {
    //     e.preventDefault();

    //     try {

    //         const form = e.target;
    //         const email = form.email.value;
    //         const password = form.password.value;
    //         const response = await signIn("credentials", { email, password, callbackUrl: '/', redirect: false })

    //         if (response.ok) {
    //             alert("Successfully Logged In");
    //             e.target.reset();
    //             router.push('/')
    //         } else {
    //             alert("Faild Authentication")
    //         }

    //         // console.log(response)
    //     } catch (error) {
    //         alert("Faild Authentication")
    //     }


    // }

    return (
        <form
            // onSubmit={handleSignIn}
            className="space-y-4 md:space-y-6">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm md:text-base font-medium text-[#444444]">Your email</label>
                <input type="email" name="email" id="email" className="border border-gray-300 text-[#444444] rounded-lg focus:border-[#A2A2A2] block w-full p-2.5" placeholder="name@company.com" required="" />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm md:text-base font-medium text-[#444444]">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-[#444444] rounded-lg focus:border-[#A2A2A2] block w-full p-2.5" required="" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-[#444444]">Remember me</label>
                    </div>
                </div>
                <a href="#" className="text-sm font-medium hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full text-white bg-[#FF3811] hover:bg-[#ab2106] focus:ring-4 focus:outline-none focus:ring-[#ab2106] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
            <span className="text-[444444] font-medium text-center text-sm mt-3 inline-block w-full">Or Sign In with</span>

            <SocialLoggedIn />

            <p className="text-sm font-light text-center">
                <span className="text-[#737373]">Don’t have an account yet?</span> <Link href={'/sign-up'} className="font-medium hover:underline text-[#FF3811]">Sign up</Link>
            </p>
        </form>
    );
};

export default LoggedInForm;