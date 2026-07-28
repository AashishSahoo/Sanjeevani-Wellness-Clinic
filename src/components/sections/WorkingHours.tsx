import { Icon } from "@iconify/react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { emergencyNote, holidayNote, workingHours } from "@/data/site";

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function WorkingHours() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Working Hours"
            title="Plan your visit around a schedule that respects your time."
          />
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-card bg-sage/40 p-5">
                <Icon icon="solar:siren-bold-duotone" className="text-2xl text-copper shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-ink">Emergency Availability</p>
                  <p className="mt-1 text-sm text-ink/65 leading-relaxed">{emergencyNote}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-card border border-line p-5">
                <Icon icon="solar:calendar-mark-bold-duotone" className="text-2xl text-pine shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-ink">Holiday Schedule</p>
                  <p className="mt-1 text-sm text-ink/65 leading-relaxed">{holidayNote}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="overflow-hidden rounded-card border border-line">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-pine text-ivory">
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider eyebrow">Day</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider eyebrow">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {workingHours.map((row, i) => {
                    const isToday = row.day === today;
                    const isClosed = row.hours === "Closed";
                    return (
                      <tr
                        key={row.day}
                        className={`${i % 2 === 0 ? "bg-ivory" : "bg-white"} ${
                          isToday ? "outline outline-2 outline-copper/50 outline-offset-[-2px]" : ""
                        }`}
                      >
                        <td className="py-4 px-6 text-sm font-medium text-ink flex items-center gap-2">
                          {row.day}
                          {isToday && (
                            <span className="rounded-full bg-copper px-2 py-0.5 text-[10px] font-semibold text-ivory">
                              Today
                            </span>
                          )}
                        </td>
                        <td
                          className={`py-4 px-6 text-sm ${
                            isClosed ? "text-ink/40 italic" : "text-ink/70"
                          }`}
                        >
                          {row.hours}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
