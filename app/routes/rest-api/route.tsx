import { Alert, Tab, Tabs } from "@heroui/react";
import { useEffect, useRef, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import * as Utils from "../../../utils/api";

const dataApi = Object.values(Utils);

const getMethodClass = (method: string) => {
    switch (method) {
        case 'GET':
            return 'bg-primary';
        case 'POST':
            return 'bg-danger';
        default:
            return '';
    }
};

export default function Route() {
    interface ApiDataType {
        name: string;
        category: string;
        path: string;
        accept: string;
        method: string;
        params: {
            mode: string;
            name: string;
            type: string;
            default: string;
            required: boolean;
        }[];
        endpoint: string;
        description: string;
        code: (prompt: Record<string, unknown>) => Promise<unknown>;
    }

    const [apiData, setApiData] = useState<ApiDataType[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null); // Track which accordion is open
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]); // Ref to store content divs

    useEffect(() => {
        setApiData(dataApi);
    }, []);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const baseUrl = "https://yrizzz.my.id/api";

    const tabx = [
        {
            id: "ai",
            label: "Ai",
        },
        {
            id: "downloader",
            label: "Downloader"
        },
        {
            id: "random",
            label: "Random",
        },
        {
            id: "tool",
            label: "Tool",
        }
    ];

    return (
        <section className="py-4 h-screen" >
            <div className="flex items-center justify-center w-full mb-3">
                <Alert
                    hideIcon
                    color="success"
                    description="This page contains API documentation, providing all the information you need about using the API. My API is free for everyone to use, so please refrain from any inappropriate actions, such as spamming the endpoint."
                    variant="faded"
                />
            </div>
            <div className="flex w-full flex-col">
                <Tabs aria-label="Dynamic tabs" items={tabx}>
                    {(i) => (
                        <Tab key={i.id} title={i.label}>
                            <div className="flex w-full flex-col gap-3">
                                {apiData.map((item, index) => item.category === i.id && (
                                    <div key={item.name}>
                                        <div
                                            className="w-full flex justify-start h-[50px] border cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-800 gap-3"
                                            onClick={() => toggleAccordion(index)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    toggleAccordion(index);
                                                }
                                            }}
                                        >
                                            <div className="flex justify-center items-center">
                                                <span className={`${getMethodClass(item.method)} text-white text-sm p-0.5 pr-5 rounded-tr-lg rounded-br-lg`}>
                                                    {item.method}
                                                </span>
                                            </div>
                                            <div className="flex w-full items-center justify-between px-1">
                                                <div>{item.name}</div>
                                                <div className="float-right">
                                                    <BiCaretDown className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            ref={el => contentRefs.current[index] = el}
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}>
                                            <div className="w-full border-1 p-3">
                                                <div className="relative overflow-x-auto">
                                                    <table className="w-full text-sm text-left dark:text-gray-400">
                                                        <tbody>
                                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 p-3">
                                                                <td className="py-3">Url</td>
                                                                <td className="py-3 px-1 xl:px-1 sm:px-3">:</td>
                                                                <td className="py-3">{baseUrl + item.path}</td>
                                                            </tr>
                                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 p-3">
                                                                <td className="py-3">Accept</td>
                                                                <td className="py-3 px-1 xl:px-1 sm:px-3">:</td>
                                                                <td className="py-3">{item.accept}</td>
                                                            </tr>
                                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 p-3">
                                                                <td className="py-3">Desc</td>
                                                                <td className="py-3 px-1 xl:px-1 sm:px-3">:</td>
                                                                <td className="py-3">{item.description}</td>
                                                            </tr>
                                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 p-3">
                                                                <td className="py-3">Params</td>
                                                                <td className="py-3 px-1 xl:px-1 sm:px-3">:</td>
                                                                <td className="py-3"><pre>{JSON.stringify(item.params,null,2)}</pre></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Tab>
                    )}
                </Tabs>
            </div>

        </section>
    );
}