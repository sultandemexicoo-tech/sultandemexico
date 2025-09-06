export default function Page() {
  return (
    <section className="grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold">Escuela & Marketplace de Tarot</h1>
        <p className="mt-4 text-zinc-300">
          Este build mínimo en JavaScript está diseñado para publicarse sin errores. Luego añadimos pagos y Zoom.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/escuela" className="btn">Ver cursos</a>
          <a href="/marketplace" className="btn">Reservar lectura</a>
          <a href="/club" className="btn" style={{background:'#D4AF37', color:'#0B0B0F', fontWeight:800}}>Unirme al Club</a>
        </div>
      </div>
      <div className="card">
        <div className="text-sm text-zinc-300">Checklist</div>
        <ul className="mt-2 space-y-1 text-sm text-zinc-200 list-disc ml-5">
          <li>Compila verde en Vercel</li>
          <li>Conectar dominio sultandemexico.cl</li>
          <li>Luego reincorporamos APIs Mercado Pago + Zoom</li>
        </ul>
      </div>
    </section>
  )
}
