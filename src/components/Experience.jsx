import React from 'react'

// gradients reuse the palette of the skill cards so the section feels native
const gradients = [
  'linear-gradient(135deg, #3beb7b 0%, #3fa1fc 100%)',
  'linear-gradient(135deg, #f5576c 0%, #eebd89 100%)',
  'linear-gradient(135deg, #5ee7df 0%, #7e38e0 100%)',
  'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
]

const items = [
  {
    file: 'algochowk.sh',
    role: 'Full-Stack Developer Intern',
    place: 'Algo Chowk',
    where: 'Hyderabad · On-site',
    when: 'Oct 2026 - Present',
    current: true,
    points: [
      'Interning on the AI full-stack team at Algo Chowk, building AlgoTrade, a research platform that turns plain-English trading ideas into backtested strategies for Indian markets.',
    ],
    tags: ['AlgoTrade', 'AI', 'Full-Stack'],
  },
  {
    file: 'euroasiann.sh',
    role: 'Full-Stack Developer Intern',
    place: 'Euroasiann Group',
    where: 'Hyderabad · Remote',
    when: 'Dec 2025 - Jul 2026',
    points: [
      'Built role-based analytics dashboards for the Admin, Vendor and User portals of a marine-parts ERP, wired to backend APIs for vendor transactions and engagement metrics.',
      "Developed the company's public website from first setup to a responsive, production-ready Next.js build.",
    ],
    tags: ['Next.js', 'React', 'REST APIs'],
  },
  {
    file: 'pragmatiq.sh',
    role: 'Web Development Intern',
    place: 'Pragmatiq Systems',
    where: 'Hyderabad · On-site',
    when: 'May 2025 - Jul 2025',
    points: [
      'Shipped full-stack features on a production Next.js app: server-rendered pages, responsive UI and data flows into MSSQL-backed REST APIs.',
      'Took part in peer code reviews inside an Agile/Scrum team.',
    ],
    tags: ['Next.js', 'MSSQL', 'Agile'],
  },
]

// fades each card in once it scrolls into view
function ExperienceCard({ item, index }) {
  const ref = React.useRef(null)
  const [seen, setSeen] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return setSeen(true)
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`expItem ${seen ? 'expSeen' : ''}`} style={{ '--dot': gradients[index % gradients.length] }}>
      <div className="idCard expCard" style={{ display: 'flex', flexDirection: 'column', border: '2px solid lightgrey', borderRadius: 10 }}>
        <div style={{ padding: 5, width: '100%', backgroundColor: '#ededed', fontSize: '150%', borderBottom: '1px solid lightgrey', height: 25, borderTopLeftRadius: 10, borderTopRightRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
          <h1 style={{ marginTop: 10 }}><strong style={{ color: '#FE5E58' }}> .</strong></h1>
          <h1 style={{ marginTop: 10 }}><strong style={{ color: '#FEBD2C' }}>.</strong></h1>
          <h1 style={{ marginTop: 10 }}><strong style={{ color: '#27C841' }}> .</strong></h1>
          <span className="expFile">{item.file}</span>
        </div>
        <div className="expBody">
          <div className="expWhen" style={{ background: gradients[index % gradients.length] }}>
            {item.current && <span className="expLive" />}{item.when}
          </div>
          <h1 className="expRole">{item.role}</h1>
          <h3 className="expPlace">{item.place} <span>· {item.where}</span></h3>
          {item.points.map((p) => <p key={p} className="para expPoint">{p}</p>)}
          <div className="expTags">{item.tags.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div id="experience" className="experience">
      <h1>Experience <strong style={{ color: '#27C841' }}>.</strong></h1>
      <p className="cartoonText" style={{ fontSize: '150%', color: 'orange', margin: '0 0 10px 0' }}>~ Where I have been building things</p>
      <div className="expList">
        {items.map((item, i) => <ExperienceCard key={item.file} item={item} index={i} />)}
      </div>
    </div>
  )
}

export default Experience
