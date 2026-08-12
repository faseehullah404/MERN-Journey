function Topbar(){
    return(
        <header className="h-16 border-b border-zinc-800 bg-zinc-900 flex items-center px-6">
            <div className="flex items-center gap-3">
                    {/* Logo */}
                    <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center font-bold">
                        T
                    </div>

                    <span className="font-semibold tracking-wide">
                        TASK
                    </span>
            </div>

            <div className="flex-1">
                    {/* Search */}
                <input
                type="text"
                placeholder="Search everything"
                className="w-full max-w-md bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-violet-500"
                />
            </div>

            <div>
                    {/* Right side */}
                <div className="flex items-center gap-8">

                    <button className="text-sm font-medium text-violet-400">
                        Projects
                    </button>

                    <button className="relative text-xl">
                        🔔

                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
                    </button>

                </div>
            </div>
        </header>
    )
}
export default Topbar