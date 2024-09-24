import React from 'react'
import NavigationBar from '@/components/navbar'

function Page() {
    return (
        <div>
            <NavigationBar />

            <div style={{ marginTop: "100px" }} className='text-success d-flex align-items-center justify-content-center'>
                <div className='custom-card me-3'>
                    <div className='d-flex justify-content-center m-0 p-0'>
                        <h2>Before Realese</h2>
                    </div>
                    <hr className='m-0 p-0 custom-hr' />
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
                        <li>Main Menu / Pause Menu</li>
                        <li>Level System</li>
                        <li>New Buildings / Warehouses</li>
                        <li>Shops for Automatic Drug Selling (Gas Station / Jeweler)</li>
                        <li>Lawyer for Money Laundering</li>
                        <li>Workers to Work for You</li>
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
                <div className='custom-card ms-3'>
                    <div className='d-flex justify-content-center m-0 p-0'>
                        <h2>After Realese</h2>
                    </div>
                    <hr className='m-0 p-0 custom-hr' />
                </div>
            </div>
        </div>
    )
}

export default Page