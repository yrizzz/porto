
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { BiBusSchool } from "react-icons/bi";

const educationHistory = [
    {
        school: 'TK Al Ikhlash Kerten',
        at: 'Surakarta',
        realased: '2007',
        info: null
    },
    {
        school: 'SD N Dukuhan Kerten',
        at: 'Surakarta',
        realased: '2013',
        info: null
    },
    {
        school: 'SMP N 12',
        at: 'Surakarta',
        realased: '2016',
        info: null
    },
    {
        school: 'SMK N 2 (STM 1)',
        at: 'Surakarta',
        realased: '2019',
        info: 'RPL (Rekayasa Perangkat Lunak)'
    },
    {
        school: 'STMIK Sinar Nusantara',
        at: 'Surakarta',
        realased: '2024',
        info: '(S1) Informatika'
    }
].reverse()

export default function Educations() {
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
                        <div className="text-xl font-bold inline-block"><BiBusSchool className="inline-block size-6" /> Educations</div>
                        <div className="pl-3 pt-3">
                            <div className="space-y-6 border-l-2 border-dashed">
                                {educationHistory.map((item, index) => (
                                    <div className="relative w-full" key={index}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-1 left-1 z-10 -ml-3.5 h-5 w-5 rounded-full ">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                        </svg>
                                        <div className="ml-6">
                                            <h4 className="font-bold">{item.school} {item.at}</h4>
                                            <p className="mt-2 max-w-screen-sm text-sm text-gray-500">{item?.info}</p>
                                            <span className="mt-1 block text-sm font-semibold ">graduate {item.realased}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </motion.div>
            </AnimatePresence>
        </>
    )
}