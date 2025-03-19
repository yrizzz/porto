import { Tooltip } from "@heroui/react";
import { BiCodeAlt } from "react-icons/bi";
import { DiCss3, DiJavascript1, DiJqueryLogo, DiLaravel, DiMysql, DiNodejs, DiPhp, DiPostgresql, DiPython, DiReact } from "react-icons/di";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
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
                    <section className="py-4 fadeIn">
                        <div className="text-xl font-bold inline-block"><BiCodeAlt className="inline-block size-6 -mt-1.5" /> Skills</div>
                        <div className="xl:flex grid grid-cols-7 gap-3 py-2">
                            <Tooltip content="👑 King PHP" showArrow={true}>
                                <>
                                    <span className="rounded-full border-1 p-1 hover:transform hover:scale-110 transition duration-300"><DiPhp className="size-[30px]" /></span>
                                </>
                            </Tooltip>
                            <Tooltip content="Javascript" showArrow={true}>
                                <span className="rounded-full border-1 p-1 hover:transform hover:scale-110 transition duration-300"><DiJavascript1 className="size-[30px]" /></span>
                            </Tooltip>
                            <Tooltip content="CSS" showArrow={true}>
                                <span className="rounded-full border-1 p-1 hover:transform hover:scale-110 transition duration-300"><DiCss3 className="size-[30px]" /></span>
                            </Tooltip>
                            <Tooltip content="Python" showArrow={true}>
                                <span className="rounded-full border-1 p-1 hover:transform hover:scale-110 transition duration-300"><DiPython className="size-[30px]" /></span>
                            </Tooltip>
                            <Tooltip content="Laravel" showArrow={true}>
                                <span className="rounded-full border-1 p-1 hover:transform hover:scale-110 transition duration-300"><DiLaravel className="size-[30px]" /></span>
                            </Tooltip>
                            <Tooltip content="Jquery" showArrow={true}>
                                <span className="rounded-full border-1 p-1 hover:transform hover:scale-110 transition duration-300"><DiJqueryLogo className="size-[30px]" /></span>
                            </Tooltip>
                            <Tooltip content="NodeJs" showArrow={true}>
                                <span className="rounded-full border-1 p-1 hover:transform hover:scale-110 transition duration-300"><DiNodejs className="size-[30px]" /></span>
                            </Tooltip>
                            <Tooltip content="React" showArrow={true}>
                                <span className="rounded-full border-1 p-1 hover:transform hover:scale-110 transition duration-300"><DiReact className="size-[30px]" /></span>
                            </Tooltip>
                            <Tooltip content="Sql" showArrow={true}>
                                <span className="rounded-full border-1 p-1 hover:transform hover:scale-110 transition duration-300"><DiMysql className="size-[30px]" /></span>
                            </Tooltip>
                            <Tooltip content="Postgres" showArrow={true}>
                                <span className="rounded-full border-1 p-1 hover:transform hover:scale-110 transition duration-300"><DiPostgresql className="size-[30px]" /></span>
                            </Tooltip>

                        </div>
                    </section>
                </motion.div>
            </AnimatePresence>
        </>
    )
}