import { Button } from "@heroui/react"
import { Link } from "@remix-run/react"
export default function Route() {
    return (
        <>
            <section className="h-screen py-4">
                <div className="grid grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-3">
                    <div className="hover:scale-105 hover:transform hover:duration-300 shadow-lg border-1 col-span-3 xl:col-span-1 sm:col-span-3 p-2 rounded-lg">
                        <div className="text-blue-500 font-bold">
                            AlQuran Online
                        </div>
                        <hr className="my-2"></hr>
                        <div className="text-sm min-h-[100px]">
                            AlQuran Online is first project when me learn frontend stack
                        </div>
                        <div className="border-t-1 pt-2">
                            <Button className="bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white" size="sm"><Link to="/alquran">🚀 Goto Project</Link></Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}