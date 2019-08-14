<template>
   <footer class="footer">
        <div class="container">
            <div class="columns">
                <div class="column is-two-thirds footer-text">
                    EntFriend © 2019
                </div>
                <div class="column has-text-centered footer-text">
                    <a href="#">Конфиденциальность</a>
                </div>
                <div class="column has-text-centered footer-text">
                    <a href="#">Условия обслуживания</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
   .footer {
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 0;
        height: 120px;
        display: flex;
        align-items: center;
        background-color: whitesmoke;
    }
    .footer-text,
    .footer-text a {
        font-family: "Overpass", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 25px;
        color: rgba(0, 0, 0, 0.5);
        text-align: left;
    }
</style>