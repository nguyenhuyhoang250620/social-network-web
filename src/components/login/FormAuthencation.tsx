'use client'

const ContentText = () => {
    return (
        <div className="w-1/2 h-full flex flex-col justify-center items-center space-y-5">
            <div className="space-y-3 min-w-[400px]">
                <p className="text-black font-semibold text-5xl">Sign in to</p>
                <p className="text-black font-semibold text-4xl">Lorem Ipsum is simply</p>
            </div>
            <div className="min-w-[400px]">
                <p className="text-black text-base">If you don’t have an account register</p>
                <p className="text-black text-base">You can <a>Register here !</a></p>
            </div>
            <div>
                <img src="/assets/login/logo.png" alt="logo" />
            </div>
        </div>
    )
}
export default function FormAuthencation() {
    return (
        <div className="w-screen h-screen bg-white">
            <div className="h-[5%] w-full">logo</div>
            <div className="w-full h-[95%]">
                <ContentText />
            </div>
        </div>
    )
}
