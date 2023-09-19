"use client"
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { Routes } from '../config';
import { useRouter } from 'next/navigation';


export default function Login() {
    const router = useRouter();

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
        // alert("Logged in");
        router.push("/pages/Card");

    }
    return (


        <div className="flex min-h-full flex-1">
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <img
                            className="h-10 w-auto"
                            src="data:image/jpeg;base64,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"
                            alt="Your Company"
                        />
                        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-white">
                            Sign in to your account
                        </h2>

                    </div>

                    <div className="mt-10">
                        <div>

                            <>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                        Email address
                                    </label>
                                    <div className="mt-2 text-black px-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                        Password
                                    </label>
                                    <div className="mt-2 text-black">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-white">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm leading-6">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </>


                        </div>

                        <div className="mt-10">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-200" />
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="bg-white px-6 text-gray-900">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4" >
                                <button
                                    onClick={signInWithGoogle}
                                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                                >

                                    <span className="text-sm font-semibold leading-6">Google</span>
                                </button>

                                {/* <a
                                    href="#"
                                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                                >
                                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm font-semibold leading-6">GitHub</span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://www.institutefordigitaltransformation.org/wp-content/uploads/Digital-Library-2048x1494.jpeg"
                    alt=""
                />
            </div>
        </div>

    )
}
