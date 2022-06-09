import React from 'react'
import './dashboard-assets/frontend/style.css'


export default function Statistics() {

  return (
    <>
    <section id="menu">
    <div class="logo">
            <img src="Rabbit.jpg" alt="" />
            <h2>Rabbit</h2>
        </div>

        <div class="items">
            <li><i class="fa-solid fa-chart-pie"></i><a href="/dashboard_statistics">Dashboard</a></li>
            <li><i class="fa-solid fa-basket-shopping"></i><a href="/dashboard_products">Products</a></li>
        </div>
    </section>

    <section id="interface">
        <div class="navigation">
            <div class="n1">

                <div>
                    <i id="menu-button" class="fa-solid fa-bars"></i>
                </div>
                <div class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search" />
                </div>

            </div>


            <div class="profile">

                <i class="fa-solid fa-bell"></i>
                <img src="admin1.png" alt="" />
            </div>

        </div>

        <h3 class="i-name">
            Dashboard
        </h3>

        <div class="values">
            <div class="val-box">
                <i class="fa-solid fa-users"></i>
                <div>
                    <h3>8,267</h3>
                    <span>New Users</span>
                </div>
            </div>
            <div class="val-box">
                <i class="fa-solid fa-cart-shopping"></i>
                <div>
                    <h3>99,463</h3>
                    <span>Orders Made</span>
                </div>
            </div>
            <div class="val-box">
                <i class="fa-solid fa-carrot"></i>
                <div>
                    <h3>370,453</h3>
                    <span>Products Sold</span>
                </div>
            </div>
            <div class="val-box">
                <i class="fa-solid fa-sterling-sign"></i>
                <div>
                    <h3>1,776,376 EGP</h3>
                    <span>This Month</span>
                </div>
            </div>
        </div>
        
        </section>

    </>
  )
}
