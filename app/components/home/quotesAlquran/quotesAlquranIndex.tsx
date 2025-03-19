import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quotes = [
    {
        "text": "Janganlah kamu berduka cita, sesungguhnya Allah selalu bersama kita.",
        "reference": "QS. At Taubah 40"
    },
    {
        "text": "Sesungguhnya rahmat Allah itu dekat kepada orang-orang yang berbuat baik.",
        "reference": "QS.Al - Araf ayat 56"
    },
    {
        "text": "Boleh jadi kamu membenci sesuatu, padahal ia amat baik bagimu, dan boleh jadi (pula) kamu menyukai sesuatu, padahal ia amat buruk bagimu. Allah mengetahui, sedang kamu tidak mengetahui.",
        "reference": "QS. Al Baqarah 216"
    },
    {
        "text": "Jadi, bersabarlah. Sungguh, janji Allah adalah kebenaran. Dan janganlah mereka mengganggu kamu yang tidak yakin (dalam iman).",
        "reference": "QS. Ar-Rum ayat 60"
    },
    {
        "text": "Dan barangsiapa bertawakal kepada Allah, niscaya Allah akan mencukupkan keperluannya.",
        "reference": "QS. Ath-Thalaq 8"
    },
    {
        "text": "Maka sesungguhnya bersama kesulitan itu ada kemudahan.",
        "reference": "QS. Al Insyirah 5"
    },
    {
        "text": "Barangsiapa mengerjakan kebaikan seberat zarah pun, niscaya dia akan melihat (balasan)nya.",
        "reference": "QS. Az-Zalzalah: 7"
    },
    {
        "text": "Wanita-wanita yang baik adalah untuk laki-laki yang baik dan laki-laki yang baik adalah untuk wanita-wanita yang baik pula.",
        "reference": "QS. An Nuur 26"
    },
    {
        "text": "Dialah yang menghidupkan dan mematikan, dan hanya kepada-Nya lah kamu akan dikembalikan.",
        "reference": "QS. Yunus: 56"
    },
    {
        "text": "Dan tiadalah kehidupan dunia ini melainkan hanya senda gurau dan main-main. Dan sesungguhnya akhirat itulah yang sebenarnya kehidupan, jika saja mereka mengetahui.",
        "reference": "QS. al-Ankabut 64"
    },
    {
        "text": "Tetapi orang yang bersabar dan memaafkan, sesungguhnya (perbuatan) yang demikian itu termasuk hal-hal yang diutamakan.",
        "reference": "QS. Asy-Syuura: 43"
    },
    {
        "text": "Sesungguhnya jika kamu bersyukur, pasti Kami akan menambah (nikmat) kepadamu, namun jika kamu mengingkari (nikmat-Ku), maka sesungguhnya azab-Ku sangatlah pedih.",
        "reference": "QS. Ibrahim: 7"
    },
    {
        "text": "Tuntun kami ke jalan yang lurus.",
        "reference": "QS. Al Fatihah: 6"
    },
    {
        "text": "Dan mintalah pertolongan dengan sabar dan sholat.",
        "reference": "QS. Al Baqarah: 45"
    },
    {
        "text": "Jadilah baik. Sesungguhnya Allah menyukai orang-orang yang berbuat baik.",
        "reference": "QS. Al Baqarah: 195"
    },
    {
        "text": "Cukuplah Allah menjadi penolong kami dan Allah adalah sebaik-baik pelindung.",
        "reference": "QS. Ali Imran: 173"
    },
    {
        "text": "Sesungguhnya perbuatan-perbuatan yang baik itu menghapuskan (dosa) perbuatan-perbuatan yang buruk.",
        "reference": "QS. Huud: 114"
    },
    {
        "text": "Allah berfirman: Janganlah kamu berdua khawatir, sesungguhnya Aku beserta kamu berdua, Aku mendengar dan melihat.",
        "reference": "QS. Thaha: 46"
    },
    {
        "text": "Dan bersabarlah kamu, sesungguhnya janji Allah adalah benar.",
        "reference": "QS. Ar Rum: 60"
    },
    {
        "text": "Tetapi orang yang bersabar dan memaafkan, sesungguhnya (perbuatan) yang demikian itu termasuk hal-hal yang diutamakan.",
        "reference": "QS. Asy Syuura: 43"
    },
    {
        "text": "Sesungguhnya hanya orang-orang yang bersabarlah yang dicukupkan pahala mereka tanpa batas.",
        "reference": "QS. Az Zumar: 10"
    },
    {
        "text": "Harta dan anak-anak hanyalah perhiasan kehidupan dunia. Namun, amal kebaikan yang bertahan lebih baik pahalanya di sisi Tuhanmu dan lebih baik harapannya.",
        "reference": "QS. Al Kahfi: 46"
    },
    {
        "text": "Dan janganlah sekali-kali kebencianmu terhadap suatu kaum membuatmu berlaku tidak adil. Berlaku adillah, karena adil itu lebih dekat kepada takwa.",
        "reference": "QS. Al Maidah: 8"
    },
    {
        "text": "Tetapi barangsiapa yang bersabar dan memaafkan, sesungguhnya (perbuatan) yang demikian itu termasuk perbuatan yang mulia.",
        "reference": "QS. Asy-Syura: 43"
    },
    {
        "text": "Aku menyerahkan urusanku kepada Allah. Sungguh, Allah Maha Melihat akan hamba-hamba-Nya.",
        "reference": "QS. Ghafir: 44"
    },
    {
        "text": "Dan hamba-hamba Yang Maha Penyayang adalah mereka yang berjalan di bumi dengan mudah, dan ketika orang bodoh berbicara kepada mereka (kasar), mereka mengatakan (perkataan) damai.",
        "reference": "QS. Al Furqon: 63"
    },
    {
        "text": "Kamu sekali-kali tidak akan melihat pada ciptaan Tuhan Yang Maha Pemurah sesuatu yang tidak seimbang. Maka lihatlah berulang-ulang, adakah kamu lihat sesuatu yang tidak seimbang?",
        "reference": "QS. Al Mulk: 3"
    },
    {
        "text": "Di mana pun Anda berada, kematian akan menyusul, bahkan jika Anda berada di dalam menara dengan konstruksi yang tinggi.",
        "reference": "QS. An Nisa: 78"
    },
    {
        "text": "Celakalah bagi setiap pengumpat dan pencela, yang mengumpulkan harta dan menghitung-hitungnya. Dia mengira bahwa hartanya dapat menyelamatkannya.",
        "reference": "QS. Al Humazah: 1- 3"
    },
    {
        "text": "Sesungguhnya kami adalah milik Allah, dan sesungguhnya kepada-Nya kami akan kembali.",
        "reference": "QS. Al Baqarah: 156"
    },
    {
        "text": "Maka nikmat Tuhan yang manakah yang kamu dustakan?",
        "reference": "QS. Ar Rahman: 13"
    },
    {
        "text": "Dan janganlah kamu merasa lemah dan jangan pula bersedih hati, sebab paling tinggi (derajatnya) jika kamu orang beriman.",
        "reference": "QS. Ali Imran: 139"
    },
    {
        "text": "dan Allah sebaik-baik pemberi rezeki.",
        "reference": "QS. Al Jumu'ah 11"
    },
    {
        "text": "Tidak ada balasan untuk kebaikan selain kebaikan (pula)",
        "reference": "QS. Ar Rahman: 60"
    },
    {
        "text": "Dan janganlah engkau berjalan di bumi ini dengan sombong, karena sesungguhnya engkau tidak akan dapat menembus bumi dan tidak akan mampu menjulang setinggi gunung.",
        "reference": "QS. Al-Isra: 37"
    }
]

export default function QuoteAlquran() {
    const [quote, setQuote] = useState<{ text: string; reference: string } | null>(null);

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote({ text: quotes[randomIndex].text, reference: quotes[randomIndex].reference });
    };

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
                    <section className="text-center sm:-mt-2 fadeIn">
                        <h1 className="text-medium">&quot;{quote?.text}&quot;</h1>
                        <p className="text-medium">{quote?.reference}</p>
                    </section>
                </motion.div>
            </AnimatePresence>
        </>
    )
}