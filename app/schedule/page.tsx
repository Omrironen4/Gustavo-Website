const locations = [
  {
    name: 'Santa Cruz Martial Arts Academy',
    address: '6116 CA-9, Felton, CA 95018',
    classes: [
      { label: 'Kids', time: '3:30 – 4:00 pm', days: 'Tue & Thu' },
      { label: 'Kids', time: '4:00 – 5:00 pm', days: 'Tue & Thu' },
      { label: 'Adults & Teens', time: '5:00 – 6:00 pm', days: 'Tue & Thu' },
      { label: 'Adults', time: '6:00 – 7:00 pm', days: 'Tue & Thu' },
    ],
  },
  {
    name: 'Lone Wolf Kenpo Academy',
    address: '13089 Highway 9, Boulder Creek, CA 95006',
    classes: [
      { label: "Women's", time: '6:30 – 7:30 pm', days: 'Wed & Fri' },
      { label: 'Kids', time: '3:30 – 4:30 pm', days: 'Friday' },
    ],
  },
]

export default function Schedule() {
  return (
    <main className="max-w-3xl mx-auto px-8 py-12">
      <p className="text-[#1ab3e8] text-xs tracking-[0.4em] uppercase mb-5">Classes</p>
      <h1 className="text-5xl font-black tracking-tight mb-14">Schedule</h1>

      <div className="space-y-8">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="border border-[#1ab3e8]/20 p-8"
            style={{ background: 'rgba(26,179,232,0.03)' }}
          >
            <h2 className="text-xl font-bold mb-1 text-white">{loc.name}</h2>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[#1ab3e8] sm:text-gray-500
                text-sm mb-8 block
                sm:hover:text-[#1ab3e8]
                transition-colors
              "
            >
              {loc.address}
            </a>

            <div className="divide-y divide-white/5">
              {loc.classes.map((cls, i) => (
                <div key={i} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                  <div>
                    <span className="text-white font-medium">{cls.label}</span>
                    <br />
                    <span className="text-gray-500 text-sm">{cls.time}</span>
                  </div>
                  <span className="text-[#1ab3e8] text-sm font-medium tracking-wide">{cls.days}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
