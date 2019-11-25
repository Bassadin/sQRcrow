<template>
    <div>
        <main class="TextContainer">
            <h1>NO CONNECTION!</h1>
            <p>Hey, {{ userName }}! It looks like we can't connect to our server.<br>
                Make sure to keep your device connected.<br>
                If you're connected but still unable to use, you might want to come <a href="/help">here</a></p><!--Help link-->
            <v-btn type="submit" onclick="window.location.reload()">Refresh (no fix guaranteed)</v-btn> <!--Refresh the site-->
        </main>
    </div>
</template>

<script>
    var json = require("../database/NoConnection");

    export default {
        name: 'NoConnection',
        data() {
            return {
                userName: json.user
            }
        }
    };
</script>

<style scoped>
    main{
        font-family: 'Helvetica';
        color: #cccccc;
        text-align: center;
        font-size: 28px;
        width: 900px;
        margin: 0 auto;
        padding: 30px;
        background-color: #222222;
    }
    v-btn{
        font-family: "Helvetica";
        border: none;
        border-radius: 10px;
        color: white;
        padding: 10px 10px;
    }
</style>