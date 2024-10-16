import React from 'react'
import NavigationBar from '@/components/navbar'
import Footer from '@/components/footer'

function Page() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <NavigationBar />

            <div className='pt-5'>
                <div className='pt-5'>

                </div>
            </div>

            <div style={{ flex: 1 }} className='text_white d-flex align-items-start justify-content-center mx-2'>
                <div className='roadmap_container'>
                    <div className='d-flex justify-content-center m-0 p-0'>
                        <h2>Roadmap</h2>
                    </div>
                    <hr className='m-0 p-0' />
                    <ul className='normal_font'>
                        <li className='text-decoration-line-through'>Starter Region of the Open World Map</li>
                        <li className='text-decoration-line-through'>Player</li>
                        <li className='text-decoration-line-through'>Sportcar/Truck</li>
                        <li className='text-decoration-line-through'>Advanced Savesystem</li>
                        <li className='text-decoration-line-through'>Shop</li>
                        <li className='text-decoration-line-through'>Cannabis</li>
                        <li className='text-decoration-line-through'>Dealer</li>
                        <li className='text-decoration-line-through'>Illegal Moneysystem</li>
                        <li className='text-decoration-line-through'>Simple Lawyer</li>
                        <li className='text-decoration-line-through'>Main Menu / Pause Menu</li>
                        <li className='text-decoration-line-through'>New Buildings / Warehouses</li>
                        <li className='text-decoration-line-through'>Shops for Automatic Drug Selling (Gas Station / Jeweler)</li>
                        <li className='text-decoration-line-through'>Level System</li>
                        <li className='text-decoration-line-through'>Workers to Work for You</li>
                        <li>Lawyer for Money Laundering</li>
                        <li>Undercover Police</li>
                        <li>Distributors</li>
                        <li>Sounds</li>
                        <li>Performance Update</li>
                        <li>Meth Production</li>
                        <li>Cocaine Production</li>
                        <li>
                            Online Market for Drug Sales
                            <ul>
                                <li>Gain popularity to sell more or lose trust and sell less</li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Page
