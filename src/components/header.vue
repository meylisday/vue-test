<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a href="#" class="navbar-item">
          <img src="../assets/EntFriend.png" />
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link class="button is-light" to="/">
                <img src="../assets/share.png" />
              </router-link>
              <router-link class="button is-light" to="/notifications">
                <img src="../assets/settings-icon.png" />
              </router-link>
              <router-link class="button is-light" to="/about">
                <img src="../assets/help-circle.png" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
