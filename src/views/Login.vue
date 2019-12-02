<template>
    <div class="Login">
        <div class="h1">
            <h1>Log in</h1>
        </div>

        <div class="p">
            <p>Melde dich mit deinem Account an</p>
        </div>

        <v-form v-model="valid">
            <v-card>
                <v-col cols="12" md="4">
                    <div class="col-xl">
                        <v-text-field
                            v-model="username"
                            :error-messages="nameErrors"
                            :rules="nameRules"
                            label="Benutzername"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                        ></v-text-field>
                    </div>
                </v-col>

                <v-col cols="12" md="4">
                    <div class="col-xl-1">
                        <v-text-field
                            v-model="password"
                            :error-messages="nameErrors"
                            :rules="nameRules"
                            label="Passwort"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                        ></v-text-field>
                    </div>
                </v-col>

                <div class="btn">
                    <v-btn class="mr-4" @click="submit">Okay</v-btn>
                </div>
            </v-card>
        </v-form>

        <div class="footer">
            <v-footer padless>
                <v-col class="text-center" cols="12">
                    {{ new Date().getFullYear() }} — <strong>sQRcrow</strong>
                </v-col>
            </v-footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
};
</script>

<style scoped>
.mr-4 {
    margin-left: 600px;
    background-color: rgba(50, 50, 50, 0.2);
    padding-bottom: 20px;
}

.col-xl {
    margin-left: 430px;
}

.col-xl-1 {
    margin-left: 430px;
}

.h1 {
    margin-left: 590px;
    margin-top: 80px;
    padding-top: 20px;
    color: #00023b;
}

.p {
    margin-left: 520px;
    color: #00023b;
}

.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.btn {
    padding-bottom: 15px;
}
</style>
