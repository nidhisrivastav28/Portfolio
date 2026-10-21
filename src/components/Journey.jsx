import {
    MapPin,
    GraduationCap,
    Briefcase,
    Code2,
    Star,
    TrendingUp,
    BriefcaseBusiness,
    Hammer,
} from "lucide-react";

export default function Journey() {
    return (
        <section
            id="journey"
            className="py-10 bg-[#050816] text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-14">

                    <div className="flex items-center justify-center gap-4">

                        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-violet-500"></div>

                        <span className="uppercase tracking-[4px] text-violet-400 text-sm font-semibold">
                            My Journey
                        </span>

                        <div className="w-20 h-[2px] bg-gradient-to-l from-transparent to-violet-500"></div>

                    </div>

                    <h2 className="mt-5 text-4xl lg:text-5xl font-bold">

                        <span className="text-white">
                            My Journey,
                        </span>{" "}

                        <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
                            My Growth
                        </span>

                    </h2>

                    <p className="mt-4 text-gray-400 text-lg">
                        A blend of learning, experience and skills that drive impactful
                        results.
                    </p>

                </div>

                {/* MAIN CONTAINER */}

                <div className="] p-5 lg:p-6">

                    {/* TOP */}

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                        {/* ================= QUICK FACTS (40%) ================= */}

                        <div className="lg:col-span-2 rounded-2xl bg-[#0D1425] border border-slate-800 p-6">

                            <h3 className="flex items-center gap-3 text-xl font-semibold mb-6">

                                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                                    <Star className="text-violet-400" size={20} />
                                </div>

                                Quick Facts

                            </h3>

                            <div className="space-y-5">

                                <Fact
                                    icon={<MapPin size={18} />}
                                    title="Location"
                                    value="Kolkata, India"
                                />

                                <Fact
                                    icon={<GraduationCap size={18} />}
                                    title="Education"
                                    value="Master of Computer Applications (MCA)"
                                />

                                <Fact
                                    icon={<Briefcase size={18} />}
                                    title="Current Role"
                                    value="Business Analyst"
                                />

                                <Fact
                                    icon={<TrendingUp size={18} />}
                                    title="Domain Expertise"
                                    value="Business Analysis • Testing • Web Solutions"
                                />

                                
                                <Fact
                                    icon={<Hammer size={18} />}
                                    title="Tools & Technologies"
                                    value="SQL • Excel • Power BI • React • WordPress"
                                />

                                <Fact
                                    icon={<Star size={18} />}
                                    title="Interests"
                                    value="Data Analytics, Coding, Photography, Teaching, Sports, Dancing"
                                />

                            </div>

                        </div>

                        {/* ================= EXPERIENCE (60%) ================= */}

                        <div className="lg:col-span-3 rounded-2xl bg-[#0D1425] border border-slate-800 p-6">

                            <h3 className="flex items-center gap-3 text-xl font-semibold mb-8">

                                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                                    <BriefcaseBusiness className="text-violet-400" size={20} />
                                </div>

                                Experience

                            </h3>

                            <div className="relative ml-3 border-l border-violet-500/30 pl-8 space-y-8">

                                <Timeline
                                    year="July 2026 - Present"
                                    title="Business Analyst"
                                    company="Trafasa Technologies Pvt. Ltd."
                                    desc="Working on dashboarding, automation, reporting, business intelligence and process optimization."
                                />

                                <Timeline
                                    year="Dec 2025 - June 2026"
                                    title="Data Analyst"
                                    company="QVC Group"
                                    desc="Worked on website optimization, SEO, analytics and digital marketing."
                                />

                                <Timeline
                                    year="2022 - 2024"
                                    title="Web Developer Internship"
                                    company="Academic & Freelance Projects"
                                    desc="Built responsive websites and full-stack applications using modern technologies."
                                />

                            </div>

                        </div>

                    </div>

                    {/* EDUCATION */}

                    <div className="mt-5 rounded-2xl bg-[#0D1425] p-5">

                        <h3 className="flex items-center gap-3 text-xl font-semibold mb-8">

                            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">

                                <GraduationCap
                                    className="text-violet-400"
                                    size={20}
                                />

                            </div>

                            Education

                        </h3>

                        <div className="relative">

                            {/* Horizontal Line */}
                            <div className="absolute top-2 left-0 right-0 h-[2px] bg-violet-500/20"></div>

                            <div className="grid md:grid-cols-4 gap-6 relative">

                                <EducationCard
                                    year="2024 - Present"
                                    degree="Master of Computer Applications (MCA)"
                                    institute="RCC Institute of Information Technology"
                                />

                                <EducationCard
                                    year="2021 - 2024"
                                    degree="Bachelor of Computer Applications (BCA)"
                                    institute="University of Calcutta"
                                />

                                <EducationCard
                                    year="2018 - 2021"
                                    degree="Higher Secondary (12th)"
                                    institute="West Bengal Council of Higher Secondary Education"
                                />

                                <EducationCard
                                    year="2018 - 2019"
                                    degree="Secondary (10th)"
                                    institute="West Bengal Board of Secondary Education"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

function Fact({ icon, title, value }) {

    return (

        <div className="flex gap-3">

            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 flex-shrink-0">

                {icon}

            </div>



            <div>

                <h4 className="font-semibold text-sm">{title}</h4>



                <p className="text-gray-400 text-xs mt-1 leading-5">

                    {value}

                </p>

            </div>

        </div>

    );

}

function Timeline({ year, title, company, desc }) {

    return (

        <div className="relative">



            {/* Timeline Dot */}

            <div className="absolute -left-[36px] top-1 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_12px_#8b5cf6]"></div>



            <p className="text-violet-400 text-xs font-semibold">

                {year}

            </p>



            <h4 className="text-lg font-bold mt-1">

                {title}

            </h4>



            <p className="text-gray-300 text-sm mt-1">

                {company}

            </p>



            <p className="text-gray-400 text-sm mt-2 leading-6">

                {desc}

            </p>



        </div>

    );

}

function EducationCard({ year, degree, institute }) {
    return (
        <div className="text-center relative">

            {/* Dot */}

            <div className="mx-auto w-4 h-4 rounded-full bg-violet-400 border-4 border-[#0b1220] shadow-[0_0_15px_#8b5cf6] relative z-10"></div>

            <p className="mt-3 text-violet-400 text-xs font-semibold">
                {year}
            </p>

            <h4 className="mt-2 text-base font-bold leading-6">
                {degree}
            </h4>

            <p className="mt-2 text-gray-400 text-sm leading-5">
                {institute}
            </p>

        </div>
    );
}