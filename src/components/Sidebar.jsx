import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div class="flapt-sidemenu-wrapper">
      <div class="flapt-logo">
        <Link to="/">
          <img
            class="desktop-logo"
            style={{ maxHeight: 65, marginTop: '6px' }}
            src="/admin_codebase/img/core-img/b-logo1.png"
            alt="Desktop Logo"
          />
          <img
            class="small-logo"
            src="/admin_codebase/img/core-img/small-logo.png"
            alt="Mobile Logo"
          />
        </Link>
      </div>
      <br />

      <div class="flapt-sidenav" id="flaptSideNav">
        <div class="side-menu-area sidebar-scrollable">
          <nav>
            <ul class="sidebar-menu" data-widget="tree">
              <br />

              <li class="active">
                <Link to="/">
                  <i class="bx bx-home-heart"></i>Dashboard
                </Link>
              </li>
              <li>
                <Link to="/student/noticebord">
                  <i class="bx bx-message-rounded-dots"></i>NoticeBord
                </Link>
              </li>

              <li class="menu-header-title">Resource</li>
              <li>
                <Link to="/student/textbooks">
                  <i class="bx bx-book"></i>Textbooks
                </Link>
              </li>
              <li>
                <Link to="/student/modelpapers">
                  <i class="bx bx-file"></i>Model Papers
                </Link>
              </li>

              <li class="menu-header-title">PERFORMANCE</li>

              <li>
                <Link to="/student/assessment">
                  <i class="bx bx-list-ul"></i>Assessment
                </Link>
              </li>

              <li>
                <Link to="/student/marks">
                  <i class="bx bx-line-chart"></i>Marks
                </Link>
              </li>

              <li class="menu-header-title">Classrooms</li>
              <li>
                <Link to="/student/classrooms">
                  <i class="bx bx-line-chart"></i>Classrooms
                </Link>
              </li>
              <li>
                <Link to="/student/classroomsone">
                  <i class="bx bx-line-chart"></i>Classroomsone
                </Link>
              </li>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
