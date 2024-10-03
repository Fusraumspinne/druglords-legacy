import React from 'react'
import NavigationBar from '@/components/navbar'
import Footer from '@/components/footer'

function Page() {
    return (
        <div>
            <NavigationBar />

            <div className='text_white d-flex align-items-start justify-content-center p-5'>
                <div className='roadmap_container me-3 p-5'>
                    <div className='d-flex justify-content-center m-0 p-0'>
                        <h2>Before Realese</h2>
                    </div>
                    <hr className='m-0 p-0' />
                    <ul>
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
                        <li>Level System</li>
                        <li>Workers to Work for You</li>
                        <li>Lawyer for Money Laundering</li>
                        <li>Undercover Police</li>
                        <li>Distributors</li>
                        <li>New Pickup System</li>
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
                <div className='roadmap_container ms-3 p-5'>
                    <div className='d-flex justify-content-center m-0 p-0'>
                        <h2>After Realese</h2>
                    </div>
                    <hr className='m-0 p-0' />
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Page
