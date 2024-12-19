"use client"

import React from 'react'
import NavigationBar from '@/components/navbar'
import Footer from '@/components/footer'
import Accordion from 'react-bootstrap/Accordion';

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
                        <h2>Druglord&apos;s Legacy Wiki</h2>
                    </div>
                    <hr className='m-0 p-0' />
                    <Accordion defaultActiveKey="0" data-bs-theme="dark" className='mt-3'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Game</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>
                                        Day
                                        <ul>
                                            <li>Day/Night cycle: 24min</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Level
                                        <ul>
                                            <li>MaxXp starts with 15xp</li>
                                            <li>MaxXp for the level rise by a custom list</li>
                                            <li>The last increase of the MaxXp is at level 200</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Items</Accordion.Header>
                            <Accordion.Body>
                                Cannabis
                                <ul>
                                    <li>
                                        Packstation Cannabis
                                        <ul>
                                            <li>Price: $1500</li>
                                            <li>Research: 0pt</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Greenleaf
                                        <ul>
                                            <li>Price: $500</li>
                                            <li>Research: 0pt</li>
                                            <li>Sell price dealer: $20/g</li>
                                            <li>Sell price shop: $40/g</li>
                                            <li>XP per interaction: 1xp</li>
                                            <li>Growing time: 90sec</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Diamond
                                        <ul>
                                            <li>Price: $850</li>
                                            <li>Research: 3pt</li>
                                            <li>Sell price dealer: $30/g</li>
                                            <li>Sell price shop: $60/g</li>
                                            <li>XP per interaction: 2xp</li>
                                            <li>Growing time: 120sec</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Inferno
                                        <ul>
                                            <li>Price: $1200</li>
                                            <li>Research: 5pt</li>
                                            <li>Sell price dealer: $45/g</li>
                                            <li>Sell price shop: $90/g</li>
                                            <li>XP per interaction: 3xp</li>
                                            <li>Growing time: 150sec</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Watering Can
                                        <ul>
                                            <li>Price: $50</li>
                                            <li>Research: 0pt</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Cannabisbed 1
                                        <ul>
                                            <li>Price: $250</li>
                                            <li>Research: 0pt</li>
                                            <li>Capacity: 1</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Cannabisbed 3
                                        <ul>
                                            <li>Price: $1000</li>
                                            <li>Research: 1pt</li>
                                            <li>Capacity: 3</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Cannabisbed 4
                                        <ul>
                                            <li>Price: $1500</li>
                                            <li>Research: 2pt</li>
                                            <li>Capacity: 4</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Cannabisbed 8
                                        <ul>
                                            <li>Price: $3800</li>
                                            <li>Research: 3pt</li>
                                            <li>Capacity: 8</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Cannabisbed 10
                                        <ul>
                                            <li>Price: $4600</li>
                                            <li>Research: 4pt</li>
                                            <li>Capacity: 10</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Dryingrack Small
                                        <ul>
                                            <li>Price: $800</li>
                                            <li>Research: 0pt</li>
                                            <li>Capacity: 4</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Dryingrack Big
                                        <ul>
                                            <li>Price: $1750</li>
                                            <li>Research: 2pt</li>
                                            <li>Capacity: 8</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Dryingshelf
                                        <ul>
                                            <li>Price: $3500</li>
                                            <li>Research: 3pt</li>
                                            <li>Capacity: 12</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Fan Small
                                        <ul>
                                            <li>Price: $2500</li>
                                            <li>Research: 3pt</li>
                                            <li>Multiplicator: 1.5x</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Fan Big
                                        <ul>
                                            <li>Price: $6000</li>
                                            <li>Research: 4pt</li>
                                            <li>Multiplicator: 1.5x</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Purplelight Small
                                        <ul>
                                            <li>Price: $2350</li>
                                            <li>Research: 2pt</li>
                                            <li>Multiplicator: 1.5x</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Purplelight Big
                                        <ul>
                                            <li>Price: $4200</li>
                                            <li>Research: 3pt</li>
                                            <li>Multiplicator: 1.5x</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Sprinkler Small
                                        <ul>
                                            <li>Price: $1900</li>
                                            <li>Research: 2pt</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Sprinkler Big
                                        <ul>
                                            <li>Price: $3200</li>
                                            <li>Research: 3pt</li>
                                        </ul>
                                    </li>
                                </ul>
                                Other
                                <ul>
                                    <li>
                                        Shelf
                                        <ul>
                                            <li>Price: $1000</li>
                                            <li>Research: 0pt</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Dealer</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>
                                        Dany
                                        <ul>
                                            <li>Price: $1000</li>
                                            <li>Skill: 20</li>
                                            <li>Cut: 35%</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Jessie
                                        <ul>
                                            <li>Price: $2500</li>
                                            <li>Skill: 65</li>
                                            <li>Cut: 40%</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Daniel
                                        <ul>
                                            <li>Price: $8000</li>
                                            <li>Skill: 55</li>
                                            <li>Cut: 30%</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Darcy
                                        <ul>
                                            <li>Price: $10000</li>
                                            <li>Skill: 65</li>
                                            <li>Cut: 25%</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Tyler
                                        <ul>
                                            <li>Price: $15000</li>
                                            <li>Skill: 80</li>
                                            <li>Cut: 20%</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Locations</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>
                                        Warehouse 1
                                        <ul>
                                            <li>Price: $35000</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Warehouse 2
                                        <ul>
                                            <li>Price: $250000</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Warehouse 3
                                        <ul>
                                            <li>Price: $1000000</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Gas Station
                                        <ul>
                                            <li>Price: $50000</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Fried Chicken Store
                                        <ul>
                                            <li>Price: $200000</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Supermarket
                                        <ul>
                                            <li>Price: $500000</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Distributor Station
                                        <ul>
                                            <li>Price: $450000</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Workers</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>
                                        Cannabis Workers
                                        <ul>
                                            <li>Price: $3000</li>
                                            <li>Salary: $1000/day</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Cannabis Restocker
                                        <ul>
                                            <li>Price: $4000</li>
                                            <li>Salary: $2000/day</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Meth Workers
                                        <ul>
                                            <li>Price: $7500</li>
                                            <li>Salary: $2500/day</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Meth Restocker
                                        <ul>
                                            <li>Price: $10000</li>
                                            <li>Salary: $5000/day</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Gas Station Workers
                                        <ul>
                                            <li>Price: $5000</li>
                                            <li>Salary: $3000/day</li>
                                            <li>Workers: 2</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Fried Chicken Store Workers
                                        <ul>
                                            <li>Price: $7500</li>
                                            <li>Salary: $5000/day</li>
                                            <li>Workers: 3</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Supermarket Workers
                                        <ul>
                                            <li>Price: $10000</li>
                                            <li>Salary: $7500/day</li>
                                            <li>Workers: 4</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Lawyers</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>
                                        Lawyer
                                        <ul>
                                            <li>
                                                XP
                                                <ul>
                                                    <li>XP per dollad: $500 = 1xp</li>
                                                </ul>
                                            </li>
                                            <li>
                                                Deposit Money
                                                <ul>
                                                    <li>Cut: 0%</li>
                                                </ul>
                                            </li>
                                            <li>
                                                Access to small gang
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Lawyer Firm
                                        <ul>
                                            <li>
                                                XP
                                                <ul>
                                                    <li>XP per dollad: $500 = 1xp</li>
                                                </ul>
                                            </li>
                                            <li>
                                                Deposit Money
                                                <ul>
                                                    <li>Cut: 0%</li>
                                                </ul>
                                            </li>
                                            <li>
                                                Access to big gang
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Gangs</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>
                                        Small Gang
                                        <ul>
                                            <li>
                                                Cut: 45%
                                            </li>
                                            <li>
                                                Offers
                                                <ul>
                                                    <li>
                                                        7000
                                                    </li>
                                                    <li>
                                                        10000
                                                    </li>
                                                    <li>
                                                        16000
                                                    </li>
                                                    <li>
                                                        22000
                                                    </li>
                                                    <li>
                                                        30000
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Time: 12min
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Big Gang
                                        <ul>
                                            <li>
                                                Cut: 60%
                                            </li>
                                            <li>
                                                Offers
                                                <ul>
                                                    <li>
                                                        40000
                                                    </li>
                                                    <li>
                                                        55000
                                                    </li>
                                                    <li>
                                                        65000
                                                    </li>
                                                    <li>
                                                        80000
                                                    </li>
                                                    <li>
                                                        100000
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Time: 24min
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Online Market</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>
                                        25 Visitors at the Start
                                    </li>
                                    <li>
                                        Adding new Drug increases Visitors
                                    </li>
                                    <li>
                                        Removing Drug decreases Visitors
                                    </li>
                                    <li>
                                        Lower Price adds Visitors
                                    </li>
                                    <li>
                                        Higher Price removes Visitors
                                    </li>
                                    <li>
                                        After 24 min the Visitors will increase or decrease depending on the offers you delivered relative to the Visitors
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page