'use client'

import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from "next-auth/react"


const SocialLoggedIn = () => {


    const handleSocialStuff = async (provider) => {
        await signIn(provider, { redirect: false })
    }


    return (
        <div className="flex gap-x-2 justify-center">
            <button className="p-4 rounded-full bg-[#F5F5F8]"><FaFacebookF color="#3B5998" size={16} /></button>
            <button className="p-4 rounded-full bg-[#F5F5F8]"><FaLinkedinIn color="#0A66C2" size={16} /></button>
            <button type='button' onClick={() => handleSocialStuff("google")} className="p-4 rounded-full cursor-pointer bg-[#F5F5F8]"><FcGoogle size={16} /></button>
        </div>
    );
};

export default SocialLoggedIn;