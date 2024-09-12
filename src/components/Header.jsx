import React from 'react';
 
 
const Header = ({ onButtonClick }) => {
   
   


    return (
        < > 
          <header class="top-header-area d-flex align-items-center justify-content-between">
                    <div class="left-side-content-area d-flex align-items-center">

                        <div class="mobile-logo">
                            <a href="/"><img src="/admin_codebase/img/core-img/small-logo.png" alt="Mobile Logo" /></a>
                        </div>


                        <div class="flapt-triggers">
                            <div class="menu-collasped" id="menuCollasped" onClick={onButtonClick} >
                                <i class='bx bx-grid-alt'></i>
                            </div>
                            <div class="mobile-menu-open" id="mobileMenuOpen">
                                <i class='bx bx-grid-alt'></i>
                            </div>
                        </div>


                        <ul class="left-side-navbar d-flex align-items-center">
                            <li class="hide-phone app-search">
                                <input type="text" class="form-control" placeholder="Search..." />
                                <span class="bx bx-search-alt"></span>
                            </li>
                        </ul>
                    </div>

                    <div class="right-side-navbar d-flex align-items-center justify-content-end">

                        <div class="right-side-trigger" id="rightSideTrigger">
                            <i class='bx bx-menu-alt-right'></i>
                        </div>


                        <ul class="right-side-content d-flex align-items-center">

                            
 

                            <li class="nav-item dropdown">
                                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"><i class='bx bx-bell bx-tada'></i> <span
                                        class="active-status"></span></button>
                                <div class="dropdown-menu dropdown-menu-right">

                                    <div class="top-notifications-area">

                                        <div class="notifications-heading">
                                            <div class="heading-title">
                                                <h6>Notifications</h6>
                                            </div>
                                            <span>11</span>
                                        </div>

                                        <div class="notifications-box" id="notificationsBox">
                                            <a href="#" class="dropdown-item">
                                                <i class='bx bx-shopping-bag'></i>
                                                <div>
                                                    <span>Your order is placed</span>
                                                    <p class="mb-0 font-12">Consectetur adipisicing elit. Ipsa, porro!</p>
                                                </div>
                                            </a>

                                            <a href="#" class="dropdown-item">
                                                <i class='bx bx-wallet-alt'></i>
                                                <div>
                                                    <span>Haslina Obeta</span>
                                                    <p class="mb-0 font-12">Consectetur adipisicing elit. Ipsa, porro!</p>
                                                </div>
                                            </a>

                                            <a href="#" class="dropdown-item">
                                                <i class='bx bx-dollar-circle'></i>
                                                <div>
                                                    <span>Your order is Dollar</span>
                                                    <p class="mb-0 font-12">Consectetur adipisicing elit. Ipsa, porro!</p>
                                                </div>
                                            </a>

                                            <a href="#" class="dropdown-item">
                                                <i class='bx bx-border-all'></i>
                                                <div>
                                                    <span>Your order is placed</span>
                                                    <p class="mb-0 font-12">Consectetur adipisicing elit. Ipsa, porro!</p>
                                                </div>
                                            </a>
                                            <a href="#" class="dropdown-item">
                                                <i class='bx bx-wallet-alt'></i>
                                                <div>
                                                    <span>Haslina Obeta</span>
                                                    <p class="mb-0 font-12">Consectetur adipisicing elit. Ipsa, porro!</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"><img src="/admin_codebase/img/bg-img/person_1.jpg" alt="" /></button>
                                <div class="dropdown-menu profile dropdown-menu-right">

                                    <div class="user-profile-area">
                                        <a href="#" class="dropdown-item"><i class="bx bx-user font-15" aria-hidden="true"></i>
                                            My profile</a>
                                        <a href="#" class="dropdown-item"><i class="bx bx-wallet font-15"
                                                aria-hidden="true"></i> My wallet</a>
                                        <a href="/student/changepassword" class="dropdown-item"><i class="bx bx-wrench font-15"
                                                aria-hidden="true"></i> Change Password</a>
                                        <a href="/student/logout" class="dropdown-item"><i class="bx bx-power-off font-15"
                                                aria-hidden="true"></i> Sign-out</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </header>

        </>
        );
    };

export default Header; 
 
