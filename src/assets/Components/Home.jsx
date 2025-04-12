import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Elevate Your Workflow</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="https://play.google.com/store/apps/details?id=com.openai.chatgpt&hl=en_IN"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                {/* 💻 Techy Workspace Image */}
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                    <img
                        className="w-72 h-72 sm:w-[400px] sm:h-[400px] object-cover rounded-xl"
                        src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=compress&cs=tinysrgb&w=800&q=80"
                        alt="workspace"
                    />
                </div>
            </aside>

            {/* 🔐 Mobile Device / Tech Image */}
            <div className="grid place-items-center sm:mt-20">
                <img
                    className="w-72 h-72 sm:w-[400px] sm:h-[400px] object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=compress&cs=tinysrgb&w=800&q=80"
                    alt="mobile tech"
                />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                Empower Your Ideas
            </h1>
        </div>
    );
}
