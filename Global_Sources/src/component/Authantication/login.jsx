import { useState } from "react";
import  logo from "../../assets/image/Logo/logo.png"

export default function Login() {
    const [step, setStep] = useState("login"); 
    const [loginData, setLoginData] = useState({ identifier: "" });
    const [otp, setOtp] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Send OTP to:", loginData.identifier);
        setStep("otp"); 
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        console.log("Verify OTP:", otp);
    };

    return (
        <div className="min-h-screen sm:pt-32 pt-14 font-roboto flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
            <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 md:p-10">

                
                {step === "login" && (
                    <>
                        <span className=" flex items-center justify-between">
                        <h2 className="text-3xl font-bold  text-gray mb-4">
                            Sign In
                            </h2>
                            <img src={logo} alt="Logo" className="h-20 w-28 object-contain"/>
                        </span>
                       

                        <form className="space-y-6" onSubmit={handleLoginSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Mobile or Email
                                </label>
                                <input
                                    type="text"
                                    name="identifier"
                                    placeholder="Enter mobile number or email"
                                    value={loginData.identifier}
                                    onChange={(e) =>
                                        setLoginData({ ...loginData, identifier: e.target.value })
                                    }
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                             shadow-sm focus:outline-none focus:border-blue-500 
                             focus:ring-2 focus:ring-blue-400 transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 
                           text-white font-semibold py-3 rounded-xl shadow-md 
                           hover:from-blue-700 hover:to-blue-800 
                           transition-all transform hover:scale-[1.02]"
                            >
                                Send OTP
                            </button>
                        </form>
                    </>
                )}

                
                {step === "otp" && (
                    <>
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                            Verify OTP
                        </h2>
                        <p className="text-center text-gray-500 mb-8 text-sm">
                            We sent a 6-digit code to <br />
                            <span className="font-semibold text-gray-800">
                                {loginData.identifier}
                            </span>
                        </p>

                        <form className="space-y-6" onSubmit={handleOtpSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Enter OTP
                                </label>
                                <input
                                    type="text"
                                    name="otp"
                                    placeholder="6-digit code"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl 
                             shadow-sm focus:outline-none focus:border-blue-500 
                             focus:ring-2 focus:ring-green-400 transition-all tracking-widest text-center font-semibold text-lg"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-600 to-green-700 
                           text-white font-semibold py-3 rounded-xl shadow-md 
                           hover:from-green-700 hover:to-green-800 
                           transition-all transform hover:scale-[1.02]"
                            >
                                Verify OTP
                            </button>
                        </form>

                        <p className="text-center text-gray-500 mt-6 text-sm">
                            Didn’t get the code?{" "}
                            <button
                                onClick={() => console.log("Resend OTP")}
                                className="text-blue-600 hover:underline font-medium"
                            >
                                Resend
                            </button>
                        </p>
                    </>
                )}

               
                <p className="text-center text-gray-600 mt-8 text-sm">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-blue-600 hover:underline font-medium">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}
