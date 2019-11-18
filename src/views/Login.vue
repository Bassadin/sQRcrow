<template>
    <div class="Login">
         <h1>Anmelden</h1>

                <label>Benutzername</label>
                    <input required v-model="username" type="text" placeholder="Benutzername"/>
                <label>Passwort</label>
                    <input required v-model="passwort" type="passwort" placeholder="Passwort"/>

            <button type="submit" name="submit" class="button">anmelden</button>
        </div>
</template>

<script>
    export default {
        name: 'Login',
    };
</script>

<style scoped>
    .Login {
    width: 300px;
    height: 50px;
    font-size: 18px;
    margin-bottom: 20px;
    padding-left: 5px;
    }
</style>
