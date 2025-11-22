export default function InfoSection() {
    return (
        <section id="info" className="w-full py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* SECTION TITLE */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                    Education & Contact
                </h2>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* =========================== */}
                    {/* EDUCATION SECTION */}
                    {/* =========================== */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>

                        <div className="space-y-5">

                            {/* CARD 1 - MCA */}
                            <div className="p-5 border border-gray-200 rounded-2xl shadow-sm bg-gray-50 hover:scale-105 hover:shadow-md hover:bg-white transition-all duration-300 cursor-pointer">
                                <h4 className="text-xl font-semibold">MCA</h4>
                                <p className="text-gray-700">2024 – Present</p>
                                <p className="text-gray-600 mt-1">RCCIIT, Kolkata</p>
                                <p className="text-gray-600 mt-1">Percentage — 73.5%(1st Year)</p>
                            </div>

                            {/* CARD 2 - BCA */}
                            <div className="p-5 border border-gray-200 rounded-2xl shadow-sm bg-gray-50 hover:scale-105 hover:shadow-md hover:bg-white transition-all duration-300 cursor-pointer">
                                <h4 className="text-xl font-semibold">BCA</h4>
                                <p className="text-gray-700">2021 – 2024</p>
                                <p className="text-gray-600 mt-1">SITM, Kolkata </p>
                                <p className="text-gray-600 mt-1">Percentage — 85.7%</p>
                            </div>

                            {/* CARD 3 - 12th */}
                            <div className="p-5 border border-gray-200 rounded-2xl shadow-sm bg-gray-50 hover:scale-105 hover:shadow-md hover:bg-white transition-all duration-300 cursor-pointer">
                                <h4 className="text-xl font-semibold">12th Standard</h4>
                                <p className="text-gray-700">2021</p>
                                <p className="text-gray-600 mt-1">Baidyapara High School, Kolkata</p>
                                <p className="text-gray-600 mt-1">Percentage — 70% </p>
                            </div>

                            {/* CARD 4 - 10th */}
                            <div className="p-5 border border-gray-200 rounded-2xl shadow-sm bg-gray-50 hover:scale-105 hover:shadow-md hover:bg-white transition-all duration-300 cursor-pointer">
                                <h4 className="text-xl font-semibold">10th Standard</h4>
                                <p className="text-gray-700">2018</p>
                                <p className="text-gray-600 mt-1">G.B.Memorial Institution, Kolkata</p>
                                <p className="text-gray-600 mt-1">Percentage — 58.4% </p>
                            </div>

                        </div>
                    </div>

                    {/* =========================== */}
                    {/* CONTACT SECTION */}
                    {/* =========================== */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Me</h3>

                        <div className="w-full bg-gray-50 border border-gray-200 shadow-sm rounded-2xl p-4">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSeVaI7dsJvoMAO9UIyoVGoSn53r7eSalY7Kx0wqRt8QoDX4Ew/viewform?embedded=true"
                                className="w-full max-w-[800px] h-[800px] rounded-xl"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}
