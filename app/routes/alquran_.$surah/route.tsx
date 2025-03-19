import { ButtonGroup } from "@heroui/react";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import axios from "axios";
import { BiArrowBack, BiCog } from "react-icons/bi";
export async function loader({
    params,
}: LoaderFunctionArgs) {
    const tmpArray: [number, string][] = [];
    const getSurah = await axios("https://equran.id/api/v2/surat");
    const data = getSurah.data.data;
    const surah = params.surah;
    data.map((item: { nomor: number; namaLatin: string }) => {
        tmpArray.push([item.nomor, item.namaLatin.replaceAll(/\s/gi, '-').replaceAll(/[^a-zA-Z\\-]/gi, '').toLowerCase()]);
    })
    const foundSurah = tmpArray.find(item => item[1] === surah);
    const no = foundSurah ? foundSurah[0] : null;

    const getDetailSurah = await axios("https://equran.id/api/v2/surat/" + no);
    return getDetailSurah.data.data;
}

interface AudioLinks {
    [key: string]: string;
}

interface Ayat {
    nomorAyat: number;
    teksArab: string;
    teksLatin: string;
    teksIndonesia: string;
    audio: AudioLinks;
}

interface AfterBefore {
    nomor: number;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
}

interface SuratDetail {
    nomor: number;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
    tempatTurun: string;
    arti: string;
    deskripsi: string;
    audioFull: AudioLinks;
    ayat: Ayat[];
    suratSelanjutnya: AfterBefore;
    suratSebelumnya: AfterBefore;
}

export default function Route() {
    const data = useLoaderData<SuratDetail>();
    const surahBefore = data.suratSebelumnya?.namaLatin?.replaceAll(/\s/gi, '-').replaceAll(/[^a-zA-Z\\-]/gi, '').toLowerCase() ?? '#';
    const surahAfter = data.suratSelanjutnya?.namaLatin?.replaceAll(/\s/gi, '-').replaceAll(/[^a-zA-Z\\-]/gi, '').toLowerCase() ?? '';
    return (
        <>
            <section className="items-center max-w-screen-lg py-4 mx-auto">
                <div className="flex justify-between w-auto h-20">
                    <div className="flex items-center cursor-pointer h-full text-lg gap-1"><Link to="/alquran"><BiArrowBack className="inline-block" /> <p className="hidden xl:inline-block sm:hidden">Daftar Surah</p></Link></div>
                    <div className="flex items-center cursor-pointer h-full text-lg gap-1">
                        <ButtonGroup className="gap-1" size="sm">
                            <Link className="dark:bg-transparent dark:border-1 bg-slate-200 p-1 rounded-md text-sm" to={"/alquran/" + surahBefore}><BiArrowBack className="inline-block" />  {data.suratSebelumnya.namaLatin}</Link>
                            <Link className="dark:bg-transparent dark:border-1 bg-slate-200 p-1 rounded-md text-sm" to={"/alquran/" + surahAfter}>{data.suratSelanjutnya.namaLatin}  <BiArrowBack className="inline-block rotate-180" /></Link>
                        </ButtonGroup>
                    </div>
                    <div className="flex items-center cursor-pointer h-full text-lg  gap-1"><BiCog className="inline-block" /><p className="hidden xl:inline-block sm:hidden">Pengaturan</p></div>
                </div>
                <div className="text-center py-7">
                    <h1 className="text-5xl font-scheherazade font-extrabold text-blue-500 mb-2">{data.nama}</h1>
                    <p>{data.namaLatin}</p>
                    <p >{data.tempatTurun} ▪ {data.jumlahAyat}</p>
                </div>
                <div className="flex flex-col gap-4">
                    {data.ayat.map((item, index) => (
                        <div key={index} className="h-[100%] border-1 rounded-lg p-3 space-y-4">
                            <span className="w-full font-serif float-right mb-5 py-5">
                                <div className="text-4xl xl:text-4xl text-right font-scheherazade font-semibold">
                                    <p className="leading-relaxed">{item.teksArab}
                                        <span className={`font-calibri border-1 border-black dark:border-white font-bold 
                                            ${String(item.nomorAyat).length > 1 ? 'text-2xl mr-2 px-3 rounded-3xl' : 'rounded-full mr-2 px-5 text-2xl'}`}>
                                            {item.nomorAyat}
                                        </span> </p>
                                </div>
                            </span>
                            <p className="font-serif text-right text-blue-500">{item.teksLatin}</p>
                            <p className="font-serif text-pretty text-left">{item.teksIndonesia}</p>
                            <audio id="myAudio" controls>
                                <source src={item.audio["05"]} type="audio/mpeg" />
                                <track kind="captions" srcLang="en" src="path/to/your/captions.vtt" label="English" />
                            </audio>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}