

export default function LandingHeader() {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-3xl ">Discover Events</h1>
        <div>
            <input className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" type="text" placeholder="search"  />
        </div>
    </nav>
  )
}
