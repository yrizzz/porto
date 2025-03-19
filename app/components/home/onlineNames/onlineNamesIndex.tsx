import { Chip } from "@heroui/react";
import { BiWorld } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

export default function OnlineNames() {
    const scrollRef = useRef(null)
    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ root: scrollRef }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <section className="py-4 mt-10 fadeIn">
                        <div className="text-xl font-bold inline-block"><BiWorld className="inline-block size-6 -mt-1.5" /> Online Names</div>
                        <div className="flex gap-4 py-2">

                            <Chip color="default" variant="shadow" className="size-6 hover:transform hover:scale-105 transition duration-300">
                                ariezgangsal
                            </Chip>
                            <Chip color="default" variant="shadow" className="size-6 hover:transform hover:scale-105 transition duration-300">
                                yrizzz
                            </Chip>
                            <Chip color="default" variant="shadow" className="size-6 hover:transform hover:scale-105 transition duration-300">
                                arisedyhandoko
                            </Chip>
                        </div>
                    </section>
                </motion.div>
            </AnimatePresence>
        </>
    )
}