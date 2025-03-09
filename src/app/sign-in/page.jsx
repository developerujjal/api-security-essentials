import React from 'react';
import Image from 'next/image';
import LoggedInForm from '@/components/Form/LoggedInForm';

const SignInPage = () => {


    return (
        <section>
            <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
                <div className="flex flex-col md:justify-between md:flex-row items-center py-6 md:py-10">
                    <div className="w-full hidden md:block">
                        <Image src="https://i.ibb.co.com/hKt1LPY/Frame.png" width={500} height={400} alt="logo" />
                    </div>
                    <div className="w-full bg-white border rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 md:px-10 text-[#444444] border rounded-lg border-[#A2A2A2] font-inter">
                            <h1 className="text-xl py-8 text-center font-bold leading-tight tracking-tight text-[#444444] md:text-2xl">
                                Sign in to your account
                            </h1>

                            <LoggedInForm />

                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
};

export default SignInPage;