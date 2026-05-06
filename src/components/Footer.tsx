export default function Footer() {
  return (
    <footer className="px-6 py-12 lg:px-20 border-t border-white/10 bg-background-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="size-6 text-white">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <span className="text-lg font-black tracking-tighter uppercase">Jensen Ortega</span>
        </div>
        <div className="flex gap-8">
          <a className="text-white/40 hover:text-white transition-colors" href="#">Twitter</a>
          <a className="text-white/40 hover:text-white transition-colors" href="#">GitHub</a>
          <a className="text-white/40 hover:text-white transition-colors" href="#">LinkedIn</a>
        </div>
        <p className="text-white/40 text-sm">© 2024 JORTEGA. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
