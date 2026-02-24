import { Check, X } from "lucide-react";
import { CheckV2 } from "./CheckV2";

const skills = ["React Expert", "Perfect Pixel", "TypeScript Proficiency"];

export default function ComparisonSection() {
  return (
    <section className="relative">
      <div className="container max-w-290 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why I Stand Out
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my unique approach and skill set compared to
            conventional front-end developers
          </p>
        </div>
        {/* Table */}
        <div className="overflow-hidden rounded-2xl bg-neutral-500 shadow-sm p-6">
          <table className="w-full my-1 border-spacing-x-4">
            <thead>
              <tr className="bg-gradient-to-r from-[#8746EB] to-[#DC49A6] text-white">
                <th className="px-6 py-4 text-sm font-semibold rounded-l-4xl">
                  Skill
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-center">
                  Me
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-center  rounded-r-4xl">
                  Other
                </th>
              </tr>
            </thead>

            <tbody>
              {skills.map((skill, index) => (
                <tr
                  key={skill}
                  className="border-t-1 first:border-0 border-neutral-400 hover:bg-neutral-300/40 transition-colors"
                >
                  {/* Skill */}
                  <td className="px-3 py-3 text-sm text-center rounded-l-4xl">
                    {skill}
                  </td>

                  {/* Me - Checked */}
                  <td className="px-3 py-3 text-center bg-primary/5">
                    <CheckV2 />
                  </td>

                  {/* Other - Unchecked */}
                  <td className="px-3 py-3 text-center rounded-r-4xl">
                    <CheckV2 checked={false} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
