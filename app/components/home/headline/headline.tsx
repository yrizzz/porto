
import {
    Button, Image, Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@heroui/react";
import { BiCoffee, BiLogoPaypal, BiMoney } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import me from "../../../../public/me.jfif";
import { Link } from "@remix-run/react";


export default function Headline() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <section className="py-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 py-[30px] xl:py-[100px]">
                    <div className="col-span-7 flex flex-col justify-center duration-700">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 font-extrabold font-manrope">
                            Welcome to My Website
                        </h1>
                        <span>I’m Aris Edy Handoko</span>
                        <p>
                            I like - <span className="bg-white dark:bg-slate-700/100 shadow py-1 px-3 rounded-xl"><TypeAnimation
                                sequence={[
                                    'Code',
                                    1500,
                                    'Modification',
                                    1500,
                                    'Traveling',
                                    1500,
                                    'Everything can make me upgrade',
                                    500,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                className="text-small xl:text-large inline-block font-bold
                            bg-gradient-to-r from-cyan-500 to-indigo-500
                            bg-clip-text text-transparent"
                            />
                            </span>
                        </p>
                        <article className="text-base/7 text-justify xl:w-[70%] sm:w-[100%] my-3">
                            <p className="-mt-3">
                                Thank you for visiting my portfolio. Here, you’ll find a collection of my work that showcases my skills, creativity.I hope you find inspiration in my journey.
                                Let’s create something extraordinary together!
                            </p>
                        </article>
                        <div className="flex flex-wrap gap-2 my-3">
                            <Button
                                className="bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white shadow-lg"
                                radius="sm" onPress={onOpen}>
                                Buy me coffe <BiCoffee size={18} />
                            </Button>
                            <Link to="/projects" className="flex items-center  text-sm p-2 rounded-lg bg-gradient-to-tr from-orange-500 to-yellow-500 text-white shadow-lg">
                            My Projects
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-5 flex flex-col justify-center">
                        <center>
                            <div className="pt-7 xl:pt-0">
                                <Image
                                    alt="Yrizzz Logo"
                                    src={me}
                                    width={230}
                                    height={230}
                                    loading="eager"
                                    className="shadow-indigo-500/50 flex flex-col justify-center my-3 [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border shadow-lg"
                                    radius="full"
                                    removeWrapper={true}
                                    isZoomed
                                    isBlurred
                                />
                            </div>
                        </center>
                    </div>
                </div>
            </section>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Payments</ModalHeader>
                            <ModalBody>
                                <ul>
                                    <li className="p-3"><BiLogoPaypal className="inline-block" /> Paypal : https://paypal.me/yrizzz</li>
                                    <li className="p-3"><BiMoney className="inline-block" /> Saweria : https://saweria.co/yrizzz</li>
                                    <li className="p-3"><BiMoney className="inline-block" /> E-Wallet : 081296451923  </li>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}