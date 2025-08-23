import Award from '../icons/Award'
import ElementGlow from '../ui/ElementGlow'

const skills = [
  'Python',
  'Typescript',
  'React',
  'Javascript',
  'PHP',
  'Postgres'
]

const SkillCard = () => {
  return (
    <div className="backdrop-blur-md bg-white/30 dark:bg-black/10 border border-black/10 dark:border-white/10 rounded-xl p-6 transition-all duration-300 relative overflow-hidden">
      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');",
        }}
      />

      <div className="relative z-10">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-theme-foreground dark:text-white">
          <Award size={20} className="text-indigo-400 stroke-[3px]" strokeWidth={3} />
          Skills
        </h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-black/5 dark:bg-white/10 rounded-full text-xs text-theme-foreground dark:text-white border border-black/5 dark:border-white/5 hover:border-indigo-500/40 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <ElementGlow />
    </div>
  )
}

export default SkillCard
