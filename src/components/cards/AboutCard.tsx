import UserPen from '../icons/UserPen'
import ElementGlow from '../ui/ElementGlow'

const AboutCard = () => {
  return (
    <div className="backdrop-blur-md bg-white/30 dark:bg-black/10 border border-black/10 dark:border-white/10 rounded-xl p-6 transition-all duration-200 relative">
      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent" />

      <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-theme-foreground dark:text-white">
        <UserPen size={20} className="text-indigo-400 stroke-[3px]" strokeWidth={3} />
        About Me
      </h2>
      <p className="font-normal text-base leading-relaxed text-theme-foreground-secondary dark:text-gray-300">
        Hi, I'm Bhaskar, a passionate developer who loves bringing ideas to life through code. I enjoy building, experimenting, and solving problems with technology. Beyond coding, I love expressing myself by writing and sharing my thoughts.
      </p>
      <ElementGlow />
    </div>
  )
}

export default AboutCard
