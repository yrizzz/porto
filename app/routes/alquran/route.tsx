import { Link, useLoaderData } from "@remix-run/react";
import axios from "axios";
import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
    return [
        { title: "AlQuran Online" }
    ];
};

export const loader = async () => {
    const response = await axios("https://equran.id/api/v2/surat");
    const data = response.data.data;
    return { data };
};

interface SuratItem {
    data: DataSurat[];
}

interface DataSurat {
    nomor: string;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
    tempatTurun: string;
    arti: string;
    deskripsi: string;
    audioFull: [];
}

export default function Route() {
    const surat = useLoaderData<SuratItem>();
    return (
        <>

            <section className="min-h-screen py-4">
                <div className="mt-10">
                    <div className="flex flex-row justify-center">
                        <h1 className="text-4xl text-blue-500 font-extrabold">Al Quran Online</h1>
                    </div>
                    <div className="w-full text-center">
                        <center>
                            <p className="flex justify-center sm:w-[100%] text-sm xl:text-medium sm:text-sm ">
                                “Barang siapa yang membaca satu huruf dari kitab Allah, maka baginya satu kebaikan. Satu kebaikan itu dibalas dengan sepuluh kali lipatnya. Aku tidak mengatakan alif laam miim itu satu huruf, tetapi aliif itu satu huruf, laam itu satu huruf, dan miim itu satu huruf.” <br />(HR. Tirmidzi, no. 2910. Tirmidzi mengatakan bahwa hadits ini hasan sahih)
                            </p>
                        </center>
                    </div>
                </div>

                {surat.data.length > 0 ? (

                    <div className="grid grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-4 mt-20">
                        {surat.data.map((item: DataSurat, index) => (
                            <div key={index} className="transition-shadow duration-200 cursor-pointer shadow-lg hover:border-blue-400 dark:hover:shadow-sm dark:hover:shadow-blue-100 hover:shadow-blue-200 hover:scale-105 hover:transform hover:duration-300 border-1 col-span-3 xl:col-span-1 sm:col-span-3 p-2 rounded-lg">
                                <Link to={"/alquran/" + item.namaLatin.replaceAll(/\s/gi, '-').replaceAll(/[^a-zA-Z\\-]/gi, '').toLowerCase()}>
                                    <div className="flex justify-between text-blue-500 font-extrabold">
                                        <div>
                                            {index + 1}. {item.namaLatin}
                                        </div>
                                        <div>{item.nama}</div>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="text-sm">
                                        {item.arti} ▪ {item.jumlahAyat}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                ) : (
                    <p>Loading...</p>
                )}
            </section>
        </>
    );
}