"use client";
import React from 'react';
import FooterComponent from '@/componets/FooterComponent';
import HeaderComponent from '@/componets/HeaderComponent';

const SecurityPage = () => {
    return (       
    <>
    <HeaderComponent />
    <section className="py-8 z-10 font-serif">
            <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
                <div className="w-full md:w-1/2 py-8">
                    <h1 className="text-purple-900 text-7xl font-semibold leading-none tracking-tighter">
                        Welcome to <br />
                        <span className="text-blue-500">My Portfolio, <br /></span> I am Web Developer.
                    </h1>
                </div>
                <div className="w-full md:w-1/2 py-8">
                    <img
                        src="https://www.svgrepo.com/show/493509/person-who-invests.svg"
                        alt="Person illustration"
                        className="g-image"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Our service statistics
                </h2>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div className="px-4 py-5 sm:p-6">
                            <dl>
                                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Total free servers</dt>
                                <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">1.6M</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div className="px-4 py-5 sm:p-6">
                            <dl>
                                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Servers a month</dt>
                                <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">19.2K</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div className="px-4 py-5 sm:p-6">
                            <dl>
                                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Servers a week</dt>
                                <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">4.9K</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                        <div className="px-4 py-5 sm:p-6">
                            <dl>
                                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Total users</dt>
                                <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">166.7K</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
                <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                    <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                        <img class="xl:max-w-6xl" src="https://images.pexels.com/photos/5990153/pexels-photo-5990153.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1860" alt="" />
                        <div class="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                            <div class="flex justify-between font-bold text-sm">
                                <p>Product Review</p>
                                <p class="text-gray-400">17th March, 2021</p>
                            </div>
                            <h2 class="text-3xl font-semibold mt-4 md:mt-10">Coffee From Heaven</h2>
                            <p class="my-3 text-justify font-medium text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Autem aperiam nulla cupiditate saepe sed quis veritatis minus rem adipisci
                                aliquid.</p>
                            <button class="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Read
                                More</button>
                        </div>
                    </section>
                </section>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
                <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

                    <div class="w-full h-64 lg:w-1/2 lg:h-auto">
                        <img class="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road" />
                    </div>

                    <div
                        class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                        <div class="flex flex-col p-12 md:px-16">
                            <h2 class="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Winding Mountain Road</h2>
                            <p class="mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>
                            <div class="mt-8">
                                <a href="#"
                                    class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                                    More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Our service statistics
                </h2>
                <div className="h-full min-h-screen w-full  pt-12 p-4">

                    <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                                <svg viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                                    <path
                                        d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                                        fill="white"></path>
                                </svg>
                            </div>
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">TREE AND SHRUB PRUNING</h1>
                            <p className="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                        </div>
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                                <svg viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                                    <path
                                        d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                                        fill="white"></path>
                                </svg>
                            </div>
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">TREE AND SHRUB PRUNING</h1>
                            <p className="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                        </div>
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                                <svg viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                                    <path
                                        d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                                        fill="white"></path>
                                </svg>
                            </div>
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">TREE AND SHRUB PRUNING</h1>
                            <p className="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
     <FooterComponent />
     </>
     
    );
};

export default SecurityPage;
