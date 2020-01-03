<template>
    <div class="Login">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-flex mb-4>
                            <div class="h1 headline text-center">
                                <h1>Log in</h1>
                            </div>
                        </v-flex>

                        <v-card class="elevation-12">
                            <v-toolbar color="#546e7a" light>
                                <div class="welcome">
                                    <v-toolbar-title
                                        >Willkommen bei sQRcrow</v-toolbar-title
                                    >
                                </div>
                                <v-spacer />
                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="form" v-model="valid">
                                    <v-text-field
                                        v-model="userData.email"
                                        label="E-Mail"
                                        name="login"
                                        :rules="nameRules"
                                        prepend-icon="mdi-email"
                                        type="email"
                                    />
                                    <!--Hide or show password-->
                                    <v-text-field
                                        v-model="userData.password"
                                        id="password"
                                        label="Passwort"
                                        name="password"
                                        :value="myPass"
                                        :rules="passwordRules"
                                        prepend-icon="mdi-lock"
                                        :append-icon="
                                            value ? 'mdi-eye-off' : 'mdi-eye'
                                        "
                                        @click:append="() => (value = !value)"
                                        :type="value ? 'password' : 'text'"
                                        :counter="10"
                                    />
                                </v-form>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer />
                                <v-btn color="primary" @click="validate"
                                    ><v-icon left>mdi-login-variant</v-icon>
                                    Login</v-btn
                                >
                            </v-card-actions>
                        </v-card>

                        <div class="next text-center">
                            <p>
                                Noch keinen Account? Melde dich
                                <a href="/Join">hier</a> kostenlos an
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: {
        source: String
    },
    data() {
        return {
            userData: {
                email: null,
                password: null
            },
            value: String,
            valid: true,
            nameRules: [v => !!v || 'Name is required'],
            passwordRules: [v => !!v || 'Password is required']
        };
    },
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
    watch: {
        user(value) {
            if (value != null && value != undefined) {
                this.$router.push('/');
            }
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                console.debug('Validation success');
                this.login();
            }
        },
        login() {
            this.$store.dispatch('loginUser', {
                email: this.userData.email,
                password: this.userData.password
            });
        }
    }
};
</script>
