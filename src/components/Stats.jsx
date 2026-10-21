import {
  BriefcaseBusiness,
  PieChart,
  Award,
  Smile,
  Code2 ,
} from "lucide-react";

const stats = [
  {
    icon: <BriefcaseBusiness size={28} />,
    number: "8+",
    title: "Months of Experience",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: <PieChart size={28} />,
    number: "20+",
    title: "Projects Completed",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: <Award size={28} />,
    number: "5+",
    title: "Professional Certificates",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: <Code2  size={28} />,
    number: "12+",
    title: "Tools & Technologies",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#050816] px-8 pb-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 flex items-center gap-5 hover:border-violet-500 transition"
          >

            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg}`}
            >
              <span className={item.color}>{item.icon}</span>
            </div>

            <div>

              <h2 className="text-3xl font-bold text-white">
                {item.number}
              </h2>

              <p className="text-gray-400 text-sm">
                {item.title}
              </p>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}