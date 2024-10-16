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
                                            <li>Day/Night cycle: 20min</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Level
                                        <ul>
                                            <li>MaxXp starts with 15xp</li>
                                            <li>MaxXp for the level rise by 5%</li>
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
                                        Shelf
                                        <ul>
                                            <li>Price: $1000</li>
                                            <li>Research: 0pt</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Packstation cannabis
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
                                        Watering can
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
                                        Dryingrack small
                                        <ul>
                                            <li>Price: $800</li>
                                            <li>Research: 0pt</li>
                                            <li>Capacity: 4</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Dryingrack big
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
                                        Fan small
                                        <ul>
                                            <li>Price: $2500</li>
                                            <li>Research: 3pt</li>
                                            <li>Multiplicator: 1.5x</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Fan big
                                        <ul>
                                            <li>Price: $6000</li>
                                            <li>Research: 4pt</li>
                                            <li>Multiplicator: 1.5x</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Purplelight small
                                        <ul>
                                            <li>Price: $2350</li>
                                            <li>Research: 2pt</li>
                                            <li>Multiplicator: 1.5x</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Purplelight big
                                        <ul>
                                            <li>Price: $4200</li>
                                            <li>Research: 3pt</li>
                                            <li>Multiplicator: 1.5x</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Sprinkler small
                                        <ul>
                                            <li>Price: $1900</li>
                                            <li>Research: 2pt</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Sprinkler big
                                        <ul>
                                            <li>Price: $3200</li>
                                            <li>Research: 3pt</li>
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
                                        Gas Station
                                        <ul>
                                            <li>Price: $50000</li>
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
                                        Cannabis workers
                                        <ul>
                                            <li>Price: $3000</li>
                                            <li>Salary: $1000/day</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Cannabis restocker
                                        <ul>
                                            <li>Price: $4000</li>
                                            <li>Salary: $2000/day</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Gas station workers
                                        <ul>
                                            <li>Price: $5000</li>
                                            <li>Salary: $3000/day</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Lawyer</Accordion.Header>
                            <Accordion.Body>
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