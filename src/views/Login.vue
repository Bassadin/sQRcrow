<template>
    <div class="Login">

        <v-content>

            <v-container class="fill-height" fluid>

                <v-row align="center" justify="center">

                    <v-col cols="12" sm="8" md="4">

                        <v-flex mb-4>
                            <div class="subheading font-weight-bold mb-3 text-center">
                                <h1>Log in</h1>
                            </div>
                        </v-flex>

                        <v-card class="elevation-12">
                            <v-toolbar color="grey" light flat>
                                <div class="text-center">
                                <v-toolbar-title>Willkommen bei sQRcrow</v-toolbar-title>
                                </div>
                                <v-spacer />

                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="Benutzername"
                                            name="login"
                                            prepend-icon="mdi-account-circle"
                                            type="text"
                                    />

                                    <v-text-field
                                            id="password"
                                            label="Passwort"
                                            name="password"
                                            prepend-icon="mdi-lock"
                                            type="password"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <div class="">
                                <v-btn color="grey">Login</v-btn>
                                </div>
                            </v-card-actions>
                        </v-card>

                        <div class="next text-center">
                          <p>Noch keinen Account? Melde dich <a href="/Join">hier</a> kostenlos an</p>
                        </div>

                    </v-col>

                    <div class="footer">
                        <v-footer padless>
                            <v-col class="text-center" cols="12">
                                {{ new Date().getFullYear() }} — <strong>sQRcrow</strong>
                            </v-col>
                        </v-footer>
                    </div>

                </v-row>
            </v-container>
        </v-content>

</div>
</template>

<script>
    export default {
        name: 'Login',
        props: {
            source: String,
        },
    };
</script>

<style scoped>

.next {
    padding-top: 20px;
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}

</style>
