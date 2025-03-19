
import { BiLogoFacebookCircle as BiFacebook, BiLogoInstagramAlt as BiInstagram, BiLogoGithub, BiLogoWhatsapp as BiWhatsapp } from "react-icons/bi";

export default function Footer() {
    return (
        <>
            <footer className="bottom-0 left-0 w-full h-auto justify-center text-center mt-10">
                <p className="text-sm">Crafted With ❤ Free Palestine</p>
                <p className="text-xs">Contact Me</p>
                <div className="">
                    <a className="inline-block me-3 hover:text-primary " href="https://www.facebook.com/im.yrizzz/" target="_blank" rel="noreferrer"><BiFacebook size={30} /></a>
                    <a className="inline-block me-3 hover:text-danger" href="https://instagram.com/yrizzz._" target="_blank" rel="noreferrer"><BiInstagram size={30} /></a>
                    <a className="inline-block me-3 hover:text-success" href="https://wa.me/6281296451923" target="_blank" rel="noreferrer"><BiWhatsapp size={30} /></a>
                    <a className="inline-block me-3 hover:text-light" href="https://github.com/yrizzz" target="_blank" rel="noreferrer"><BiLogoGithub size={30} /></a>
                </div>
            </footer>
        </>
    )
}